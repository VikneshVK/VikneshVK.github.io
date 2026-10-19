import{m as e}from"./palette.-OjyokA9.js";import{l as t,y as n}from"./particleField.Khgu3sBN.js";var r=8/380,i=92/380;function a({ratio:a,footer:o=0,notch:s=0}){let c=a,l=o,u=s,d=a*(1-o),f=(a-d)/2,p=`
uniform float uGalleryReveal;
float galleryRevealAt(vec2 cardUv, float progress) {
  vec2 media = clamp(vec2(cardUv.x, (cardUv.y - ${(l/1).toFixed(6)}) / ${(1-l/1).toFixed(6)}), 0.0, 1.0);
  float fold = sin(media.x * 7.0 + media.y * 4.5) * sin(media.y * 8.5 - media.x * 2.0);
  float delay = 0.13 + 0.17 * (media.x * 0.55 + (1.0 - media.y) * 0.45) + fold * 0.045;
  return smoothstep(delay, delay + 0.62, progress);
}
float galleryRevealMask(vec2 cardUv) {
  return galleryRevealAt(cardUv, uGalleryReveal);
}`,m=`
${n}
${p}
float cardRevealMask(vec2 cardUv) {
  vec2 metric = vec2(1.0, ${c.toFixed(4)});
  float distanceToOrigin = length((cardUv - uRevealOrigin) * metric);
                                                                            
                                                                          
                                                           
  float outer = max(uRevealRadius, 1e-5);
  float feather = max(uRevealBand, 1e-5);
  float inner = max(0.0, outer - feather);
  float radial = (1.0 - smoothstep(inner, outer, distanceToOrigin)) * clamp(uHover, 0.0, 1.0);
  return max(galleryRevealMask(cardUv), max(radial, fluidReveal(cardUv)));
}`;return{vertexShader:`
uniform vec2 uSurface;
uniform vec2 uSurfaceOrigin;
uniform vec2 uEye;
uniform float uDist;
uniform mat4 uMatrix;
uniform float uMix;
uniform float uWidth;
uniform float uParticleTravel;
uniform vec2 uPointer;
uniform float uPush;
uniform sampler2D uFlowMap;
uniform vec4 uGalleryInertia;
uniform vec4 uClip;
uniform float uSpread;
uniform float uZoom;
uniform float uSway;
uniform float uHover;
uniform float uReducedMotion;
uniform vec2 uRevealOrigin;
uniform float uRevealBand;
uniform float uRevealRadius;
uniform float uAlignEarly;
uniform float uGallery;
uniform float uFormation;
uniform sampler2D uSourceMap;
uniform vec4 uCoverCrop;
uniform float uParticlePitch;
${p}
${n}
attribute vec3 aStartA;
attribute vec3 aEndA;
attribute vec3 aStartB;
attribute vec3 aEndB;
attribute vec3 aTravel;
attribute float aSeed;
attribute vec2 aTone;
varying float vAcross;
varying float vTone;
varying float vDepth;
varying float vRelief;
varying float vLive;
varying float vFooterY;
varying vec2 vCard;
varying vec2 vLocal;
varying vec3 vSourceColor;
void main() {
  const float S = ${t.toFixed(3)};
  const float RATIO = ${c.toFixed(4)};
  float t = clamp(uMix * (1.0 + S) - aSeed * S, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
  vec3 shapeA = aStartB;
  vec3 shapeB = aEndB;
  float shapeTone = aTone.y;
  float inkPresence = 1.0;
  vSourceColor = vec3(0.0);
  if (uGallery > 0.0) {
    vec3 mid = (aStartB + aEndB) * 0.5;
    vec2 media = vec2(mid.x + 0.5, (mid.y - ${f.toFixed(6)}) / ${d.toFixed(6)} + 0.5);
    vec4 source = texture2D(uSourceMap, uCoverCrop.xy + clamp(media, 0.0, 1.0) * uCoverCrop.zw);
    vSourceColor = source.rgb;
    float luminance = dot(source.rgb, vec3(0.299, 0.587, 0.114));
    float tone = pow(luminance, 0.72);
    float originalLength = length(aEndB - aStartB);
    float originalInk = step(0.00001, originalLength);
                                                                            
                                                                            
    float detail = step(aSeed, source.a * (0.16 + 0.80 * tone));
    inkPresence = originalInk + (1.0 - originalInk) * detail * uGallery * smoothstep(0.05, 0.95, uFormation);
    float halfDash = mix(uParticlePitch * 0.40, originalLength * 0.5, originalInk);
    float z = mix(mid.z, ${r.toFixed(6)} + tone * ${(i*.28).toFixed(6)}, uGallery);
    shapeA = vec3(mid.x - halfDash, mid.y, z);
    shapeB = vec3(mid.x + halfDash, mid.y, z);
    shapeTone = mix(shapeTone, 0.12 + tone * 0.88, uGallery);
  }
  vec3 la = mix(aStartA, shapeA, t);
  vec3 lb = mix(aEndA, shapeB, t);
                                                                            
                                                                            
  vec3 planeA = vec3(shapeA.xy, 0.0);
  vec3 planeB = vec3(shapeB.xy, 0.0);
  vTone = mix(aTone.x, shapeTone, t);
  float routeArc = sin(3.14159265 * t);
  vec3 routeOffset = aTravel * routeArc * uParticleTravel;
  la += routeOffset;
  lb += routeOffset;

                                                                          
                                                                          
  vec3 targetCentre = (shapeA + shapeB) * 0.5;
  vec2 edgeDistance = abs(vec2(targetCentre.x * 2.0, (targetCentre.y - ${f.toFixed(6)}) / ${(d*.5).toFixed(6)}));
  float edge = max(edgeDistance.x, edgeDistance.y);
                                                                         
                                                                             
  float arrival = 0.04 + 0.58 * (aSeed * 0.45 + edge * 0.55);
  float settled = smoothstep(arrival, arrival + 0.32, uFormation);
  float scatter = uGallery * (1.0 - settled);
  vec3 dustOffset = (aStartA - targetCentre) * scatter + aTravel * sin(3.14159265 * scatter) * 0.55;
  la += dustOffset;
  lb += dustOffset;
  vec3 segmentCentre = (la + lb) * 0.5;
  float segmentLength = mix(1.0, 0.58, scatter);
  la = mix(segmentCentre, la, segmentLength);
  lb = mix(segmentCentre, lb, segmentLength);

  const vec3 FIELD_CENTER = vec3(0.0, ${f.toFixed(6)}, 0.0);
  float puff = 1.0 + uSpread * (1.0 - uGallery) * (0.08 + 0.24 * fract(aSeed * 7.13));
  la = FIELD_CENTER + (la - FIELD_CENTER) * puff;
  lb = FIELD_CENTER + (lb - FIELD_CENTER) * puff;

                                                                              
                                                                               
  vec2 targetMid = (aStartB.xy + aEndB.xy) * 0.5;
  vec2 targetPoint = mix(aStartB.xy, aEndB.xy, position.x);
  vCard = vec2(targetPoint.x + 0.5, targetPoint.y / RATIO + 0.5);
  vec2 metric = vec2(1.0, RATIO);
  vec2 centerCard = vec2(targetMid.x + 0.5, targetMid.y / RATIO + 0.5);
  vec2 fromOrigin = (centerCard - uRevealOrigin) * metric;
  float distanceToOrigin = length(fromOrigin);
  float revealProgress = uRevealRadius;
                                                                     
                                                                            
                                              
  float travelStart = max(0.0, distanceToOrigin - uRevealBand * 1.35);
  float travelT = smoothstep(travelStart, distanceToOrigin + uRevealBand * 0.25, revealProgress)
    * clamp(uHover, 0.0, 1.0);
                                                                            
                                                                 
  travelT = max(travelT, fluidReveal(centerCard));
  travelT *= 1.0 - uGallery * (1.0 - settled * smoothstep(0.25, 0.95, uFormation));
  float hoverArc = sin(3.14159265 * travelT) * (1.0 - uReducedMotion);
                                                                           
                                                                             
  float driftAngle = aSeed * 6.2831853;
  vec2 drift = vec2(cos(driftAngle), sin(driftAngle));
  vec3 hoverOffset = vec3(
    drift * hoverArc * (0.004 + aSeed * 0.006),
    hoverArc * (0.006 + aSeed * 0.010)
  );
  la += hoverOffset;
  lb += hoverOffset;

                                                                             
                                       
  float cy = cos(uSway);
  float sy = sin(uSway);
  vec3 sa = la - FIELD_CENTER;
  vec3 sb = lb - FIELD_CENTER;
  sa = vec3(sa.x * cy + sa.z * sy, sa.y, -sa.x * sy + sa.z * cy);
  sb = vec3(sb.x * cy + sb.z * sy, sb.y, -sb.x * sy + sb.z * cy);
  la = sa + FIELD_CENTER;
  lb = sb + FIELD_CENTER;
  float reliefMidZ = (la.z + lb.z) * 0.5;

                                                                           
                                                                             
                                                                               
                                                                           
                                                                                  
                                                                            
                                                                             
                                                                           
                                                                 
  vec2 alignEdges = mix(vec2(0.18, 0.64), vec2(0.0, 0.30), uAlignEarly);
  float planeAlign = smoothstep(alignEdges.x, alignEdges.y, travelT);
                                                                           
                                                                        
  float galleryAlign = galleryRevealAt(centerCard, min(1.0, uGalleryReveal + 0.22))
    * smoothstep(0.0, 0.12, uGalleryReveal);
  planeAlign = max(planeAlign, smoothstep(0.0, 0.60, galleryAlign));
  la = mix(la, planeA, planeAlign);
  lb = mix(lb, planeB, planeAlign);
  la.xy += fluidOffset(vec2(aStartB.x + 0.5, aStartB.y / RATIO + 0.5))
    * vec2(1.0, RATIO) * (1.0 - uReducedMotion) * (1.0 - planeAlign);
  lb.xy += fluidOffset(vec2(aEndB.x + 0.5, aEndB.y / RATIO + 0.5))
    * vec2(1.0, RATIO) * (1.0 - uReducedMotion) * (1.0 - planeAlign);

  vec2 currentMid = (la.xy + lb.xy) * 0.5;
  vLocal = vec2(currentMid.x + 0.5, currentMid.y / RATIO + 0.5);

  vec4 wa = uMatrix * vec4(la, 1.0);
  vec4 wb = uMatrix * vec4(lb, 1.0);
  float ka = max((uDist - wa.z) / uDist, 0.05);
  float kb = max((uDist - wb.z) / uDist, 0.05);
  vec2 pa = uEye + vec2(wa.x, -wa.y) / ka;
  vec2 pb = uEye + vec2(wb.x, -wb.y) / kb;

                                                                              
                                                                              
                                                                 
  vec4 footerWorld = uMatrix * vec4(
    clamp(currentMid.x, -0.5, 0.5),
    (${(l/1).toFixed(6)} - 0.5) * RATIO,
    0.0,
    1.0
  );
  float footerK = max((uDist - footerWorld.z) / uDist, 0.05);
  vFooterY = uEye.y - footerWorld.y / footerK;

                                                                             
                                                                               
  vec2 away = (pa + pb) * 0.5 - uPointer;
  float ad = length(away);
  float fall = 1.0 - smoothstep(0.0, 62.0 * uZoom, ad);
  fall *= fall;
                                                                              
  vec2 shove = away / max(ad, 18.0 * uZoom)
    * uPush * (5.0 + aSeed * 8.0) * fall * uZoom * (1.0 - planeAlign) * (1.0 - uGallery);
  pa += shove;
  pb += shove;
                                                                       
                                                                            
  float drag = uGallery * (1.0 - uReducedMotion) * (1.0 - planeAlign) * mix(0.25, 1.0, scatter);
  float weight = 0.12 + 0.88 * aSeed * aSeed;
  vec2 lag = mix(uGalleryInertia.x, uGalleryInertia.y, weight) * uGalleryInertia.zw * drag;
  float tail = pow(fract(aSeed * 13.71), 4.0) * 0.055 * scatter;
  pa += lag;
  pb += lag + (uGalleryInertia.y - uGalleryInertia.x) * uGalleryInertia.zw * drag * tail;
                                                                            
                                                                               
  if (uGallery > 0.0 && uReducedMotion < 0.5) {
    vec2 flowA = (texture2D(uFlowMap, (pa - uClip.xy) / uClip.zw).rg * 255.0 - 128.0) / 127.0;
    vec2 flowB = (texture2D(uFlowMap, (pb - uClip.xy) / uClip.zw).rg * 255.0 - 128.0) / 127.0;
    float freedom = mix(0.08, 1.0, 1.0 - uFormation) * (1.0 - uGalleryReveal);
    pa += flowA * 210.0 * uZoom * freedom * uGallery;
    pb += flowB * 210.0 * uZoom * freedom * uGallery;
  }

                                                                             
                                                                             
  float targetLength = length(shapeB - shapeA);
                                                                             
                                                                      
  float refLength = targetLength > 1e-5 ? targetLength : length(aEndA - aStartA);
  vLive = step(0.42, length(lb - la) / max(refLength, 1e-5)) * step(1e-5, refLength) * inkPresence;
                                                                              
                                                                                   
                                                                            
                                                                              
  float currentZ = (reliefMidZ - ${r.toFixed(6)}) / ${i.toFixed(6)};
  vDepth = 0.44 + clamp(currentZ, 0.0, 1.0) * 0.20;
                                                                  
  vRelief = clamp(currentZ, 0.0, 1.0);
  vec2 d = pb - pa;
  float len = length(d);
  vec2 dir = len > 1e-4 ? d / len : vec2(1.0, 0.0);
  vec2 nrm = vec2(-dir.y, dir.x);
  float hw = uWidth + 1.0;
  vec2 p = mix(pa, pb, position.x) + dir * (position.x * 2.0 - 1.0) + nrm * (position.y * hw);
  vAcross = position.y * hw;
  vec2 s = (p - uSurfaceOrigin) / uSurface;
  gl_Position = vec4(s.x * 2.0 - 1.0, 1.0 - s.y * 2.0, 0.0, 1.0);
}`,fragmentShader:`
${e}
uniform vec4 uClip;
uniform vec2 uSurface;
uniform vec2 uSurfaceOrigin;
uniform float uDpr;
uniform float uWidth;
uniform float uAlpha;
uniform float uHover;
uniform vec2 uRevealOrigin;
uniform float uRevealBand;
uniform float uRevealRadius;
uniform float uDepthColor;
uniform float uSelection;
uniform float uSelectionPulse;
uniform float uGallery;
uniform float uFormation;
varying float vAcross;
varying float vTone;
varying float vDepth;
varying float vRelief;
varying float vLive;
varying float vFooterY;
varying vec2 vCard;
varying vec2 vLocal;
varying vec3 vSourceColor;
${m}
void main() {
  vec2 client = uSurfaceOrigin + vec2(gl_FragCoord.x, uSurface.y * uDpr - gl_FragCoord.y) / uDpr;
  if (client.x < uClip.x || client.x > uClip.x + uClip.z || client.y < uClip.y || client.y > uClip.y + uClip.w) discard;
                                                                             
                                                                        
  float dCut = (1.0 - vLocal.x) + (1.0 - vLocal.y) * ${c.toFixed(4)};
  bool outside = vLocal.y < ${(l/1).toFixed(6)} || client.y >= vFooterY - 0.5 || dCut < ${u.toFixed(3)};
  float shapeMask = ${o>0?`outside ? uGallery : 1.0`:`1.0`};
  float reveal = cardRevealMask(vCard) * (1.0 - uGallery * (1.0 - smoothstep(0.25, 0.95, uFormation)));
  float cov = clamp(uWidth - abs(vAcross) + 0.5, 0.0, 1.0);
  float alpha = cov * vLive * uAlpha * (1.0 - reveal) * shapeMask;
  if (alpha <= 0.004) discard;
                                                                                        
  float t = clamp(0.20 + vDepth * 0.42 + vTone * 0.38, 0.0, 1.0);
                                                                              
                                                                            
                                                                            
  float deep = clamp(vRelief * 0.72 + vTone * 0.28, 0.0, 1.0);
                                                                         
                                                                     
  deep = mix(deep, vTone, uGallery * smoothstep(0.05, 0.95, uFormation));
  vec3 rgb = mix(ramp(0.25 + 0.75 * t), ramp(0.06 + 0.94 * deep), uDepthColor);
                                                                     
  float waveDistance = length((vCard - vec2(0.5, 0.58)) * vec2(1.0, 1.12));
  float wave = 1.0 - smoothstep(0.0, 0.085, abs(waveDistance - (1.0 - uSelectionPulse) * 0.9));
  rgb = mix(rgb, ramp(0.98), clamp(uSelection * 0.10 + wave * uSelectionPulse * 0.75, 0.0, 1.0));
                                                                         
                                                                    
  float chroma = smoothstep(0.0, 0.70, galleryRevealMask(vCard));
  rgb = mix(rgb, vSourceColor, chroma * uGallery);
  gl_FragColor = vec4(rgb, alpha);
}`,revealMask:m}}export{i as n,a as r,r as t};