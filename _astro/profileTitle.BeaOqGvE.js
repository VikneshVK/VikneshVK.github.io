import{S as e,b as t,w as n,x as r}from"./reveal.DXEbaEvX.js";import{D as i,E as a,J as o,N as s,S as c,W as l,Y as u,g as d,i as f,p,q as m,s as h}from"./palette.-OjyokA9.js";import{t as ee}from"./sceneHost.BH_imyrx.js";import{_ as g,a as _,g as v,i as y,l as b,r as x}from"./particleField.Khgu3sBN.js";import{t as S}from"./pointerResponse.DQbH9WiK.js";var C=.8,w=.5,te=`
uniform vec2 uSurface;
uniform vec2 uSurfaceOrigin;
uniform vec2 uEye;
uniform float uDist;
uniform vec3 uCenter;
uniform float uMix;
uniform float uWidth;
uniform float uParticleTravel;
uniform vec2 uPointer;
uniform float uPush;
uniform float uZoom;
uniform float uT;
uniform float uWhitenCap;
attribute vec3 aStartA;
attribute vec3 aEndA;
attribute vec3 aStartB;
attribute vec3 aEndB;
attribute vec3 aTravel;
attribute float aSeed;
attribute float aLand;
varying float vAcross;
varying float vLive;
varying float vWhiten;
void main() {
  const float S = ${b.toFixed(3)};
  float t = clamp(uMix * (1.0 + S) - aSeed * S, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
                                                                             
                                                                           
                                                                            
  float w = clamp((uT - aLand) / ${w.toFixed(3)}, 0.0, 1.0);
  vWhiten = w * w * (3.0 - 2.0 * w) * uWhitenCap;
  vec3 la = mix(aStartA, aStartB, t);
  vec3 lb = mix(aEndA, aEndB, t);
                                                                              
                                            
  vLive = step(0.6, length(lb - la));
                                                                           
                                         
  float arc = sin(3.14159265 * t);
  vec3 offset = aTravel * arc * uParticleTravel;
  la += offset;
  lb += offset;
  la += uCenter;
  lb += uCenter;
                                                                         
                                                     
  float wa = max((uDist - la.z) / uDist, 0.05);
  float wb = max((uDist - lb.z) / uDist, 0.05);
  vec2 pa = uEye + vec2(la.x, -la.y) / wa;
  vec2 pb = uEye + vec2(lb.x, -lb.y) / wb;
                                                                            
                                                                           
  vec2 away = (pa + pb) * 0.5 - uPointer;
  float ad = length(away);
  float fall = 1.0 - smoothstep(0.0, 120.0 * uZoom, ad);
  fall *= fall;
  vec2 shove = (away / max(ad, 26.0 * uZoom)) * fall * uPush * uZoom * (7.0 + aSeed * 14.0);
  pa += shove;
  pb += shove;
  vec2 d = pb - pa;
  float len = length(d);
  vec2 dir = len > 1e-4 ? d / len : vec2(1.0, 0.0);
  vec2 nrm = vec2(-dir.y, dir.x);
  float hw = uWidth + 1.0;
  vec2 p = mix(pa, pb, position.x) + dir * (position.x * 2.0 - 1.0) + nrm * (position.y * hw);
  vAcross = position.y * hw;
  vec2 s = (p - uSurfaceOrigin) / uSurface;
  gl_Position = vec4(s.x * 2.0 - 1.0, 1.0 - s.y * 2.0, 0.0, 1.0);
}`,ne=`
uniform vec4 uClip;
uniform vec2 uSurface;
uniform vec2 uSurfaceOrigin;
uniform float uDpr;
uniform float uWidth;
uniform float uAlpha;
varying float vAcross;
varying float vLive;
varying float vWhiten;
void main() {
  vec2 client = uSurfaceOrigin + vec2(gl_FragCoord.x, uSurface.y * uDpr - gl_FragCoord.y) / uDpr;
  if (client.x < uClip.x || client.x > uClip.x + uClip.z || client.y < uClip.y || client.y > uClip.y + uClip.w) discard;
  float cov = clamp(uWidth - abs(vAcross) + 0.5, 0.0, 1.0);
  float alpha = cov * vLive * uAlpha;
  if (alpha <= 0.004) discard;
                                                                             
                                                                    
  gl_FragColor = vec4(mix(${p(h)}, ${p(f)}, vWhiten), alpha);
}`,T=e=>{let t=e.firstChild;if(!t||t.nodeType!==Node.TEXT_NODE)return null;let n=t.textContent??``,r=e.getBoundingClientRect(),i=document.createRange(),a=[],o=/\S+/g;for(let e=o.exec(n);e;e=o.exec(n)){i.setStart(t,e.index),i.setEnd(t,e.index+e[0].length);let n=i.getBoundingClientRect();if(n.width<=0)continue;let o=a.find(e=>Math.abs(e.top-n.top)<n.height*.5);o?o.text+=` ${e[0]}`:a.push({text:e[0],x:n.left-r.left,cy:n.top+n.height/2-r.top,top:n.top})}return a.length>0?a:null},re=e=>{let t=T(e);if(!t)return null;let r=Math.ceil(e.getBoundingClientRect().width),i=Math.ceil(e.getBoundingClientRect().height);if(r<10||i<10)return null;let a=getComputedStyle(e),o=parseFloat(a.fontSize)*n(),s=Math.ceil(o*.35),c=document.createElement(`canvas`);c.width=r,c.height=i+s*2;let l=c.getContext(`2d`,{willReadFrequently:!0});if(!l)return null;l.font=`${a.fontWeight} ${o}px ${a.fontFamily}`,l.textBaseline=`middle`,l.fillStyle=`#fff`;for(let e of t)l.fillText(e.text,e.x,e.cy+s);let u=l.getImageData(0,0,c.width,c.height).data,d=Math.max(2.25,Math.sqrt(c.width*c.height/_)),f=Math.floor(c.width/d),p=Math.floor(c.height/d),m=d*C,h=[];for(let e=0;e<p;e++)for(let t=0;t<f;t++){let n=Math.min(c.width-2,Math.round((t+.5)*d)-1),a=Math.min(c.height-2,Math.round((e+.5)*d)-1),o=0;if(o+=u[(a*c.width+n)*4+3],o+=u[(a*c.width+n+1)*4+3],o+=u[((a+1)*c.width+n)*4+3],o+=u[((a+1)*c.width+n+1)*4+3],o<=430)continue;let l=(t+.5)*d-r/2,f=i/2-((e+.5)*d-s);h.push({a:[l-m/2,f,0],b:[l+m/2,f,0]})}return h.length>0?{segs:h,width:r,height:i,cell:d}:null};function E(f){let p=document.querySelector(`.profile-hero h1`),h=document.querySelector(`[data-profile-page]`),C=document.getElementById(`desktop`),T=document.querySelector(`[data-profile-title-stage]`);if(!p||!h||!C||!T)return null;let E={uSurface:{value:new m(1,1)},uSurfaceOrigin:{value:new m(0,0)},uEye:{value:new m(0,0)},uDist:{value:2400},uClip:{value:new u(0,0,1,1)},uDpr:{value:1},uCenter:{value:new o(0,0,0)},uMix:{value:0},uWidth:{value:1.2},uParticleTravel:{value:+!e},uAlpha:{value:1},uPointer:{value:new m(-1e5,-1e5)},uPush:{value:0},uZoom:{value:1},uT:{value:0},uWhitenCap:{value:1}},D=new i;D.setAttribute(`position`,new d(new Float32Array([0,-1,0,1,-1,0,0,1,0,1,1,0]),3)),D.setIndex([0,1,2,2,1,3]),D.instanceCount=_;let O=new Float32Array(_*3),k=new Float32Array(_*3),A=new Float32Array(_*3),j=new Float32Array(_*3),M=new Float32Array(_),N=new Float32Array(_*3),ie=g(23);for(let e=0;e<_;e++)M[e]=ie();let P=new Float32Array(_),ae=e=>e<.5?Math.cbrt(e/4):1-Math.cbrt(2*(1-e))/2;for(let e=0;e<_;e++)P[e]=y*ae((1+M[e]*b)/(1+b));let oe=new a(O,3),se=new a(k,3),ce=new a(A,3),le=new a(j,3),ue=new a(N,3),de=[oe,se,ce,le,ue];for(let e of de)e.setUsage(c);D.setAttribute(`aStartA`,oe),D.setAttribute(`aEndA`,se),D.setAttribute(`aStartB`,ce),D.setAttribute(`aEndB`,le),D.setAttribute(`aSeed`,new a(M,1)),D.setAttribute(`aLand`,new a(P,1)),D.setAttribute(`aTravel`,ue);let fe=new l({uniforms:E,vertexShader:te,fragmentShader:ne,transparent:!0,depthTest:!1,depthWrite:!1,side:2}),F=new s(D,fe);F.frustumCulled=!1,F.renderOrder=-1.6;let I=!0,L=(e,t,n)=>{let r=e===`A`?O:A,i=e===`A`?k:j;r[t*3]=n.a[0],r[t*3+1]=n.a[1],r[t*3+2]=n.a[2],i[t*3]=n.b[0],i[t*3+1]=n.b[1],i[t*3+2]=n.b[2]},pe=e=>{let t=g(7),n=Math.min(520,Math.max(235,e*.3));for(let e=0;e<_;e++){let r=t()*Math.PI*2,i=Math.acos(t()*2-1),a=n+t()*n*.55,o=[Math.sin(i)*Math.cos(r)*a*1.4,Math.cos(i)*a*.6,Math.sin(i)*Math.sin(r)*a];L(`A`,e,{a:o,b:o})}},R=null,me=e=>{for(let t=0;t<_;t++){let n=e.segs[t];n?L(`B`,t,n):(A[t*3]=O[t*3],A[t*3+1]=O[t*3+1],A[t*3+2]=O[t*3+2],j[t*3]=A[t*3],j[t*3+1]=A[t*3+1],j[t*3+2]=A[t*3+2]);let r=t*3,i=(A[r]+j[r])*.5-(O[r]+k[r])*.5,a=(A[r+1]+j[r+1])*.5-(O[r+1]+k[r+1])*.5,o=Math.hypot(i,a),s=v(M[t]*97.31),c=v(M[t]*43.17),l=v(M[t]*71.93),u,d;if(o>.001)u=-a/o,d=i/o;else{let e=s*Math.PI*2;u=Math.cos(e),d=Math.sin(e)}let f=(s<.5?-1:1)*(18+Math.min(42,o*.16)+c*12),p=l<.5?-1:1;N[r]=u*f,N[r+1]=d*f,N[r+2]=p*(46+v(l*11.37)*44)}for(let e of de)e.needsUpdate=!0;I=!0},z=()=>{let e=re(p);e&&(R=e,p.classList.add(`is-dust`),E.uWidth.value=Math.max(.9,e.cell*.34),pe(e.width),me(e))},B=()=>{let e=p.getBoundingClientRect();if(e.width<10)return!1;let t=e.left+e.width/2-E.uEye.value.x,n=e.top+e.height/2-E.uEye.value.y,r=Math.abs(E.uCenter.value.x-t)>.25||Math.abs(E.uCenter.value.y+n)>.25;return E.uCenter.value.set(t,-n,0),r},V=()=>{let e=C.getBoundingClientRect();if(!(e.width<1||e.height<1)){if(E.uClip.value.set(e.left,e.top,e.width,e.height),E.uEye.value.set(e.left+e.width/2,e.top+e.height/2),R){let e=p.getBoundingClientRect();(Math.abs(e.width-R.width)>1||Math.abs(e.height-R.height)>1)&&z()}B(),I=!0}},H=S(),U=(t,r)=>{e||!R||(H.move(t,r,n()),E.uPointer.value.set(t,r),I=!0,J.kick())},W=()=>{H.leave()},G=null,K=null,q=0,he=()=>!!G||!!K||H.active(),J=ee({container:T,object:F,rect:()=>T.getBoundingClientRect(),layout:V,tick:(e,t)=>{E.uSurface.value.copy(t.size),E.uSurfaceOrigin.value.copy(t.origin),E.uDpr.value=t.dpr,E.uZoom.value=n(),J.isCrt()||E.uClip.value.set(-1e6,-1e6,2e6,2e6);let r=I;I=!1,!J.isCrt()&&B()&&(r=!0);let i=e/1e3;q===0&&(q=i);let a=Math.min(.1,i-q);q=i;let o=H.step(a);E.uPush.value!==o&&(r=!0),E.uPush.value=o;let s=X||h.style.opacity===``?1:Math.max(0,Math.min(1,parseFloat(h.style.opacity)||0));return Math.abs(E.uAlpha.value-s)>.001&&(E.uAlpha.value=s,r=!0),r||he()},animating:()=>f.active()&&he(),visible:()=>f.active()&&!!R});V(),new MutationObserver(()=>{if(J.isCrt()){J.invalidate();return}I=!0,J.kick()}).observe(h,{attributes:!0,attributeFilter:[`style`]});let ge=!1;document.fonts.ready.then(()=>{ge=!0;try{!R&&f.active()&&z(),R&&Y&&ve()}catch(e){console.warn(`[profil] trame du titre indisponible`,e)}V(),J.kick()});let _e=!document.querySelector(`[data-boot]`),Y=!1,X=!1,ve=(n=!1)=>{if(Y=!1,X=!1,G?.kill(),K?.kill(),K=null,n||(E.uMix.value=0),n||(E.uT.value=0),E.uWhitenCap.value=1,e){E.uMix.value=1,E.uT.value=y+w+1,G=null,I=!0,J.kick();return}G=t.to(E.uMix,{value:1,duration:y,ease:`power2.inOut`,onUpdate:()=>{I=!0,J.kick()},onComplete:()=>{G=null}}),K=t.to(E.uT,{value:y+w+.1,duration:y+w+.1,ease:`none`,onUpdate:()=>{I=!0,J.kick()},onComplete:()=>{K=null}}),I=!0,J.kick()};document.addEventListener(`eddyos:enter`,()=>{_e=!0,Y&&Z()},{once:!0});let Z=(e=!1)=>{if(!_e){Y=!0;return}if(!R&&ge&&z(),!R){Y=!0;return}ve(e)},ye=n=>{if(Y=!1,W(),K?.kill(),K=null,!R||E.uMix.value<=.001){G?.kill(),G=null,E.uMix.value=0,E.uT.value=0,E.uWhitenCap.value=1,n();return}if(G?.kill(),e){E.uMix.value=0,E.uT.value=0,E.uWhitenCap.value=1,G=null,I=!0,J.kick(),n();return}X=!0,K=t.to(E.uWhitenCap,{value:0,duration:x*.6,ease:`power1.in`,onUpdate:()=>{I=!0,J.kick()},onComplete:()=>{K=null}}),G=t.to(E.uMix,{value:0,duration:x,ease:`power2.inOut`,onUpdate:()=>{I=!0,J.kick()},onComplete:()=>{G=null,X=!1,n()}}),I=!0,J.kick()},Q=document.querySelector(`[data-profile]`),$=1/0;return window.addEventListener(`resize`,()=>$=1/0,{passive:!0}),Q?.addEventListener(`scroll`,()=>{if(J.isCrt()||Q.scrollTop>$)return;J.invalidate();let e=Q.getBoundingClientRect(),t=e.height/Math.max(1,Q.clientHeight);$=Q.scrollTop+(p.getBoundingClientRect().bottom-e.top)/t+Q.clientHeight},{passive:!0}),document.addEventListener(`crt:painted`,()=>{!J.isCrt()||!f.active()||B()&&(I=!0,J.invalidate())}),Q?.addEventListener(`pointermove`,e=>{J.isCrt()||e.pointerType===`touch`||U(e.clientX,e.clientY)},{passive:!0}),Q?.addEventListener(`pointerleave`,W),window.addEventListener(`blur`,W),window.addEventListener(`pointerout`,e=>{e.relatedTarget||W()},{passive:!0}),document.addEventListener(`crt:pointer`,e=>{if(!(e instanceof CustomEvent)||!J.isCrt()||!f.active())return;let t=e.detail;if(!t||!t.target?.closest?.(`[data-profile]`)){W();return}U(t.source.x,t.source.y)}),r.addEventListener(`change`,()=>{if(E.uParticleTravel.value=+!e,e){H=S(),E.uPush.value=0;let e=K;K=null,e?.progress(1);let t=G;G=null,t?.progress(1)}q=0,I=!0,J.kick()}),{arrive:Z,dissolve:ye}}export{E as initProfileTitle};