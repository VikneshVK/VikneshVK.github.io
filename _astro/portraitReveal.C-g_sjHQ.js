import{S as e,w as t,x as n}from"./reveal.DXEbaEvX.js";import{B as r,G as i,K as a,N as o,O as s,R as c,W as l,k as u,q as d,x as f}from"./palette.-OjyokA9.js";import{b as p,x as m,y as h}from"./particleField.Khgu3sBN.js";var g=(e,t,n,r)=>{let i=e-n.eye.x,a=t-n.eye.y,o=Math.cos(n.yaw),s=Math.sin(n.yaw),c=Math.cos(n.tilt),l=Math.sin(n.tilt),u=e=>{let t=(n.dist-e)/n.dist,r=(i*t-n.center.x)/n.scale,u=(-a*t-n.center.y)/n.scale,d=(e-n.center.z)/n.scale,f=u*c+d*l,p=-u*l+d*c;return[r*o-p*s,f,r*s+p*o]},d=u(0),f=u(1)[2]-d[2];if(Math.abs(f)<1e-5)return null;let p=u((r.z-d[2])/f);return{u:p[0]/r.width+.5,v:p[1]/r.height+.5}},_=4,v=e=>({uFluidMap:{value:null},uFluid:{value:0},uRevealOrigin:{value:new d(.5,.5)},uPlane:{value:new d(e.width,e.height)},uPlaneZ:{value:e.z},uMap:{value:null}}),y=`
uniform vec2 uSurface;
uniform vec2 uSurfaceOrigin;
uniform vec2 uEye;
uniform float uDist;
uniform vec3 uCenter;
uniform float uScale;
uniform float uYaw;
uniform float uTilt;
uniform vec2 uPlane;
uniform float uPlaneZ;
varying vec2 vUv;
void main() {
  vUv = uv;
                                                                                   
  vec3 p = vec3(position.xy * uPlane, uPlaneZ);
  float cy = cos(uYaw); float sy = sin(uYaw);
  p = vec3(p.x * cy + p.z * sy, p.y, -p.x * sy + p.z * cy);
  float cx = cos(uTilt); float sx = sin(uTilt);
  p = vec3(p.x, p.y * cx - p.z * sx, p.y * sx + p.z * cx);
  p = p * uScale + uCenter;
  float w = max((uDist - p.z) / uDist, 0.05);
  vec2 screen = uEye + vec2(p.x, -p.y) / w;
  vec2 s = (screen - uSurfaceOrigin) / uSurface;
  vec2 ndc = vec2(s.x * 2.0 - 1.0, 1.0 - s.y * 2.0);
                                                                     
  gl_Position = vec4(ndc * w, 0.0, w);
}`,b=`
${h}
uniform sampler2D uMap;
#ifdef PORTRAIT_DAMAGE_MASK
uniform sampler2D uDamageMask;
#endif
uniform float uAlpha;
uniform vec4 uClip;
uniform vec2 uSurface;
uniform vec2 uSurfaceOrigin;
uniform float uDpr;
varying vec2 vUv;
void main() {
  vec2 client = uSurfaceOrigin + vec2(gl_FragCoord.x, uSurface.y * uDpr - gl_FragCoord.y) / uDpr;
  if (client.x < uClip.x || client.x > uClip.x + uClip.z || client.y < uClip.y || client.y > uClip.y + uClip.w) discard;
  float reveal = fluidReveal(vUv);
  if (reveal <= 0.004) discard;
  vec4 photo = texture2D(uMap, vUv);
  float alpha = reveal * uAlpha * photo.a;
#ifdef PORTRAIT_DAMAGE_MASK
  alpha *= texture2D(uDamageMask, vUv).r;
#endif
  if (alpha <= 0.004) discard;
  gl_FragColor = vec4(photo.rgb, alpha);
}`,x=d=>{let{uniforms:h}=d,v={width:h.uPlane.value.x,height:h.uPlane.value.y,z:h.uPlaneZ.value},x=!e&&matchMedia(`(hover: hover) and (pointer: fine)`).matches,S=p(d.fluid??Math.min(2,t())),C=new f(S.mapTexels,S.cols,S.rows,r,a);C.minFilter=s,C.magFilter=s,C.needsUpdate=!0,h.uFluidMap.value=C,h.uFluid.value=+!!x;let w=new l({uniforms:{uSurface:h.uSurface,uSurfaceOrigin:h.uSurfaceOrigin,uEye:h.uEye,uDist:h.uDist,uClip:h.uClip,uDpr:h.uDpr,uCenter:h.uCenter,uScale:h.uScale,uYaw:h.uYaw,uTilt:h.uTilt,uAlpha:h.uAlpha,uPlane:h.uPlane,uPlaneZ:h.uPlaneZ,uFluidMap:h.uFluidMap,uFluid:h.uFluid,uMap:h.uMap,...d.damageMask?{uDamageMask:{value:d.damageMask}}:{}},defines:d.damageMask?{PORTRAIT_DAMAGE_MASK:1}:{},vertexShader:y,fragmentShader:b,transparent:!0,depthTest:!1,depthWrite:!1,side:2}),T=new o(new c(1,1),w);T.frustumCulled=!1,T.visible=x;let E=new Map,D=null,O=null,k=e=>{if(O=e,!x)return;let t=E.get(e);if(!t){let n=new i(e);n.minFilter=u,n.magFilter=s,n.generateMipmaps=!0,n.anisotropy=4,n.colorSpace=``,n.needsUpdate=!0,t=n,E.set(e,n)}if(t===h.uMap.value){D=null;return}if(!P||!h.uMap.value){D=null,h.uMap.value=t;return}D=t,j=null},A=null,j=null,M=NaN,N=NaN,P=!1,F=(e,t)=>{x&&(A?(A.x=e,A.y=t):A={x:e,y:t})},I=()=>{A=null,j=null,M=NaN,N=NaN},L=()=>{I(),D&&=(h.uMap.value=D,null),P&&=(S.reset(),C.needsUpdate=!0,!1)};return n.addEventListener(`change`,()=>{x=!e&&matchMedia(`(hover: hover) and (pointer: fine)`).matches,L(),h.uFluid.value=+!!x,T.visible=x,x&&O&&k(O)}),{mesh:T,setImage:k,feed:F,leave:I,step:e=>{if(!x)return!1;if(A&&e>0&&!D){let n=g(A.x,A.y,{eye:h.uEye.value,dist:h.uDist.value,center:h.uCenter.value,scale:h.uScale.value,yaw:h.uYaw.value,tilt:h.uTilt.value},v);if(n&&n.u>-.3&&n.u<1.3&&n.v>-.3&&n.v<1.3){let r=!j||Math.hypot(n.u-j.u,n.v-j.v)>1,i=Number.isFinite(M)&&Math.hypot(A.x-M,A.y-N)>.1*t(),a=r||!i?0:(n.u-j.u)/e,o=r||!i?0:(n.v-j.v)/e,s=h,c=s.uCenter.value.z+v.z*s.uScale.value,l=v.width*s.uScale.value*s.uDist.value/Math.max(1,s.uDist.value-c);S.splat(n.u,n.v,a,o,e,m(l,t(),S.cols)),h.uRevealOrigin.value.set(n.u,n.v),j=n,P=!0}else j=null;M=A.x,N=A.y}return P?(P=S.step(e,D?_:0),D&&(!P||!S.masked())&&(S.reset(),P=!1,h.uMap.value=D,D=null),C.needsUpdate=!0,!0):!1},reset:L,active:()=>P}};export{v as n,g as r,x as t};