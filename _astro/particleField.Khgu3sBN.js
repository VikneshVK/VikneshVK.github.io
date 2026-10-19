import{S as e,T as t,b as n,w as r,x as i}from"./reveal.DXEbaEvX.js";import{D as a,E as o,S as s,g as c,m as l}from"./palette.-OjyokA9.js";import{t as u}from"./pointerResponse.DQbH9WiK.js";var d=[`startA`,`endA`,`startB`,`endB`,`tones`,`travels`],f=256,p=e=>({targetOrder:new Uint32Array(e),sourceLive:new Uint32Array(e),sourceOff:new Uint32Array(e),targetLive:new Uint32Array(e),targetOff:new Uint32Array(e),ranked:new Uint32Array(e)}),m=e=>()=>(e=e*1664525+1013904223>>>0,e/4294967295),h=e=>e-Math.floor(e),g=(e,t)=>{let n=Math.min(1,Math.max(0,e*1.45-t*.45));return n*n*(3-2*n)};function*_(e,t,{mix:n,travel:r,sequence:i,scale:a,count:o,route:s,rank:c},l=p(o)){let{startA:u,endA:d,startB:_,endB:v,tones:y,seeds:b,travels:x}=e,{targetOrder:S,sourceLive:C,sourceOff:w,targetLive:T,targetOff:E,ranked:D}=l,O=.04*a*a,k=n,A=0,j=0;for(let e=0;e<o;e++){e&511||(yield);let t=g(k,b[e]),n=Math.sin(Math.PI*t);for(let i=0;i<3;i++){let a=x[e*3+i]*n*r;u[e*3+i]=u[e*3+i]+(_[e*3+i]-u[e*3+i])*t+a,d[e*3+i]=d[e*3+i]+(v[e*3+i]-d[e*3+i])*t+a}y[e*2]=y[e*2]+(y[e*2+1]-y[e*2])*t;let i=e*3,a=d[i]-u[i],o=d[i+1]-u[i+1],s=d[i+2]-u[i+2];a*a+o*o+s*s>O?C[A++]=e:w[j++]=e}let M=0,N=0;for(let e=0;e<o;e++){e&511||(yield);let n=t[e];if(n){let t=n.b[0]-n.a[0],r=n.b[1]-n.a[1],i=n.b[2]-n.a[2];if(t*t+r*r+i*i>O){T[M++]=e;continue}}E[N++]=e}let P=m((2654435769^Math.imul(i,2246822507))>>>0);function*F(e,t){for(let n=t-1;n>0;n--){n&511||(yield);let t=Math.min(n,Math.floor(P()*(n+1))),r=e[n];e[n]=e[t],e[t]=r}}yield*F(T,M),yield*F(E,N);function*I(e,t,n){let r=new Uint32Array(257),i=e=>Math.min(255,Math.max(0,Math.floor(n(e)*f)));for(let n=0;n<t;n++)n&511||(yield),r[i(e[n])+1]++;for(let e=0;e<f;e++)r[e+1]+=r[e];for(let n=0;n<t;n++){n&511||(yield);let t=e[n];D[r[i(t)]++]=t}e.set(D.subarray(0,t))}c&&(yield*F(C,A),yield*I(C,A,e=>c.from((u[e*3]+d[e*3])/2,(u[e*3+1]+d[e*3+1])/2)),yield*I(T,M,e=>{let n=t[e];return c.to((n.a[0]+n.b[0])/2,(n.a[1]+n.b[1])/2)}));let L=0,R=0;function*z(e,t){for(let n=0;n<t;n++){n&511||(yield);let t=e[n];S[t]=L<M?T[L++]:E[R++]}}yield*z(C,A),yield*z(w,j);for(let e=0;e<o;e++){e&511||(yield);let n=S[e];if(n<t.length){let r=t[n],i=e*3;_[i]=r.a[0],_[i+1]=r.a[1],_[i+2]=r.a[2],v[i]=r.b[0],v[i+1]=r.b[1],v[i+2]=r.b[2],y[e*2+1]=r.tone}else{for(let t=0;t<3;t++){let n=(u[e*3+t]+d[e*3+t])/2;_[e*3+t]=n,v[e*3+t]=n}y[e*2+1]=0}let r=e*3,a=(u[r]+d[r])*.5,o=(u[r+1]+d[r+1])*.5,c=(_[r]+v[r])*.5,l=(_[r+1]+v[r+1])*.5,f=c-a,p=l-o,m=Math.hypot(f,p),g=h(b[e]*97.31+i*.61803398875),C=h(b[e]*43.17+i*.38196601125),w=h(b[e]*71.93+i*.754877666),T,E;if(m>.001)T=-p/m,E=f/m;else{let e=g*Math.PI*2;T=Math.cos(e),E=Math.sin(e)}let D=(g<.5?-1:1)*(s.bendBase+Math.min(s.bendMax,m*.16)+C*s.bendJitter),O=w<.5?-1:1;x[r]=T*D,x[r+1]=E*D,x[r+2]=O*(s.depthBase+h(w*11.37)*s.depthJitter)}}var v=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function*y(e,t,n,r={}){let i=!1;for(let t=3;t<e.length;t+=4)if(e[t]<255){i=!0;break}let a=r.width??380,o=r.height??475,s=r.centerY??0,c=r.depthBase??10,l=r.depthRange??42,u=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],d=[],f=a/(t-1)*.72,p=new Uint32Array(256),m=new Uint32Array(256),h=new Uint32Array(256),g=new Uint32Array(256),_=new Uint32Array(256),y=new Uint32Array(256),b=new Uint32Array(256),x=new Uint32Array(256),S=new Uint32Array(256),C=0,w=0,T=0,E=Math.round(t*.15),D=Math.round(n*.12);for(let n=0;n<D;n++)for(let r=0;r<E;r++)for(let i of[r,t-1-r]){let a=(n*t+i)*4;p[e[a]]++,m[e[a+1]]++,h[e[a+2]]++,C++,i===r?(g[e[a]]++,_[e[a+1]]++,y[e[a+2]]++,w++):(b[e[a]]++,x[e[a+1]]++,S[e[a+2]]++,T++)}let O=(e,t)=>{let n=Math.floor(t/2),r=0;for(let t=0;t<256;t++)if(r+=e[t],r>n)return t/255;return NaN},k=[O(p,C),O(m,C),O(h,C)],A=r.adaptiveBackground?[[O(g,w),O(_,w),O(y,w)],[O(b,T),O(x,T),O(S,T)]]:[k],j=(e,t,n,r,i,a)=>Math.sqrt(.25*(e-r)**2+.5*(t-i)**2+.25*(n-a)**2),M=(t,n,r,i)=>j(t,n,r,e[i*4]/255,e[i*4+1]/255,e[i*4+2]/255);for(let p=0;p<n;p++){let m=s+o/2-p/(n-1)*o;for(let o=0;o<t;o++){let s=p*t+o,h=e[s*4]/255,g=e[s*4+1]/255,_=e[s*4+2]/255,y=h*.299+g*.587+_*.114,b=1/0;for(let e of A)b=Math.min(b,j(h,g,_,e[0],e[1],e[2]));let x=i?1:v(.035,.2,b),S=v(.018,.11,Math.max(0,M(h,g,_,o>0?s-1:s),M(h,g,_,o+1<t?s+1:s),M(h,g,_,p>0?s-t:s),M(h,g,_,p+1<n?s+t:s))),C=v(-.01,.16,h-_),w=v(.55,.82,y)*v(-.05,.1,h-_);if(r.adaptiveBackground){let e=.1+.9*x;C*=e,w*=e}let T=Math.max(C,w,.55*x,.72*S),E=e[s*4+3]/255*Math.min(1,Math.max(0,y*(.05+.95*T)+.1*S+.22*x)),D=(u[p%4*4+o%4]+.5)/16,O=o/(t-1)*a-a/2;if(E<=D){let e=[O,m,c];d.push({a:e,b:e,tone:0});continue}let k=c+Math.min(1,Math.max(0,.62*E+.23*x+.15*S))*l;d.push({a:[O-f/2,m,k],b:[O+f/2,m,k],tone:.2+E*.8})}yield}return d}var b=(e,t,n,r={})=>{let i=y(e,t,n,r),a=i.next();for(;!a.done;)a=i.next();return a.value},x=64,S=72,C=1.2,w=1.3,T=.16,E=.6,D=2.2,O=6.75,k=54,A=(e,t=1,n=x)=>{let r=n/x;return Math.min(O*r,Math.max(1.5*r,k*t/Math.max(1,e)*n))},j=.84,M=10,N=28,P=12,F=.9,I=1.1,L=8,R=14,z=22,ee=90,B=.025,V=(e=1)=>{let t=typeof e==`number`?{}:e,n=typeof e==`number`?e:1,r=Math.max(8,Math.round(t.cols??x*n)),i=Math.max(8,Math.round(t.rows??S*n)),a=r/x,o=O*a,s=D*a*a,c=r*i,l=new Float32Array(c),u=new Float32Array(c),d=new Float32Array(c),f=new Float32Array(c),p=new Float32Array(c),m=new Float32Array(c),h=new Float32Array(c),g=new Float32Array(c),_=new Float32Array(c),v=new Uint8Array(c),y=new Uint8Array(c*4),b=new Float32Array(c),k=new Float32Array(c),A=new Float32Array(c),V=new Float32Array(c),H=t.flowMap?new Uint8Array(c*4):null,U=()=>{for(let e=0;e<c;e++)y[e*4]=0,y[e*4+1]=128,y[e*4+2]=128,y[e*4+3]=255;if(H)for(let e=0;e<c;e++)H[e*4]=128,H[e*4+1]=128,H[e*4+2]=0,H[e*4+3]=255};U();let W=0,G=0,K=.76,q=(e,t)=>e<0?0:e>t?t:e,J=e=>{let t=d[e]/r,n=f[e]/i,a=t*t+n*n;if(a>F*F){let t=F/Math.sqrt(a);d[e]*=t,f[e]*=t}},Y=(e,t,n)=>{let a=q(t,r-1),o=q(n,i-1),s=Math.floor(a),c=Math.floor(o),l=Math.min(s+1,r-1),u=Math.min(c+1,i-1),d=a-s,f=o-c,p=e[c*r+s]*(1-d)+e[c*r+l]*d,m=e[u*r+s]*(1-d)+e[u*r+l]*d;return p*(1-f)+m*f},X=(e,t,n,a)=>{for(let o=0;o<i;o++)for(let i=0;i<r;i++){let s=o*r+i;t[s]=Y(e,i-d[s]*n,o-f[s]*n)*a}},te=(e,t,n,a)=>{for(let o=0;o<i;o++){let s=Math.max(0,o-1)*r,c=Math.min(i-1,o+1)*r;for(let i=0;i<r;i++){let l=Math.max(0,i-1),u=Math.min(r-1,i+1),d=e[o*r+l]+e[o*r+u]+e[s+i]+e[c+i];t[o*r+i]=(e[o*r+i]+n*d)/(1+4*n)*a}}},Z=()=>{for(let e=0;e<i;e++){let t=Math.max(0,e-1)*r,n=Math.min(i-1,e+1)*r;for(let i=0;i<r;i++){let a=Math.max(0,i-1),o=Math.min(r-1,i+1);h[e*r+i]=.5*(d[e*r+o]-d[e*r+a]+f[n+i]-f[t+i])}}g.fill(0);for(let e=0;e<R;e++){for(let e=0;e<i;e++){let t=Math.max(0,e-1)*r,n=Math.min(i-1,e+1)*r;for(let i=0;i<r;i++){let a=Math.max(0,i-1),o=Math.min(r-1,i+1);_[e*r+i]=.25*(g[e*r+a]+g[e*r+o]+g[t+i]+g[n+i]-h[e*r+i])}}[g,_]=[_,g]}for(let e=0;e<i;e++){let t=Math.max(0,e-1)*r,n=Math.min(i-1,e+1)*r;for(let i=0;i<r;i++){let a=Math.max(0,i-1),o=Math.min(r-1,i+1);d[e*r+i]-=.5*(g[e*r+o]-g[e*r+a]),f[e*r+i]-=.5*(g[n+i]-g[t+i]),J(e*r+i)}}},ne=e=>{let t=z*a,n=Math.max(1,Math.ceil(e*t*Math.SQRT2/.7)),o=e/n,s=Math.exp(-4.2*o),l=Math.exp(-1.2*o);for(let e=0;e<n;e++){for(let e=0;e<i;e++)for(let n=0;n<r;n++){let a=e*r+n,c=b[e*r+Math.max(0,n-1)]+b[e*r+Math.min(r-1,n+1)]+b[Math.max(0,e-1)*r+n]+b[Math.min(i-1,e+1)*r+n]-4*b[a];k[a]=(k[a]+t*t*c*o)*s}for(let e=0;e<c;e++)b[e]=(b[e]+k[e]*o)*l}G=0;for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=e*r+t;G=Math.max(G,Math.abs(b[n]),Math.abs(k[n])*.05);let o=(b[e*r+Math.max(0,t-1)]-b[e*r+Math.min(r-1,t+1)])*.055/a,s=(b[Math.max(0,e-1)*r+t]-b[Math.min(i-1,e+1)*r+t])*.055/a,c=Math.min(1,B*.88/Math.max(1e-8,Math.hypot(o,s)));A[n]=o*c,V[n]=s*c}},re=(e,t,n,s,c,u=o)=>{if(c<=0||![e,t,n,s,c,u].every(Number.isFinite))return;let p=Math.min(c,1/30),m=Math.hypot(n,s),h=m*c<=1.5;h&&m*c>1e-5&&(K=0);let g=h?Math.min(m,L):0,_=h?n*c*r:0,v=h?s*c*i:0,y=Math.max(.75*a,u),b=Math.min(48,Math.max(1,Math.ceil(Math.hypot(_,v)/(y*.4)))),x=1-Math.exp(-(M+g*N)*p/b),S=h?P*p/b:0,C=n*r*S,w=s*i*S,T=y*2.5,E=1/(y*y);for(let n=0;n<b;n++){let a=(n+.5)/b,o=e*r-_*(1-a),s=t*i-v*(1-a),c=Math.max(0,Math.floor(s-T)),u=Math.min(i-1,Math.ceil(s+T)),m=Math.max(0,Math.floor(o-T)),h=Math.min(r-1,Math.ceil(o+T));for(let e=c;e<=u;e++)for(let t=m;t<=h;t++){let n=t+.5-o,i=e+.5-s,a=Math.exp(-(n*n+i*i)*E);if(a<.002)continue;let c=e*r+t,u=j*a;if(l[c]+=Math.max(0,u-l[c])*x,d[c]+=C*a,f[c]+=w*a,g>0){let e=(n*n+i*i)*E/.5625,t=(1-e)*Math.exp(-e)*Math.min(g,2)*ee*p/b;k[c]=Math.max(-18,Math.min(18,k[c]+t))}J(c),W=Math.max(W,l[c])}}},Q=(e,t=0)=>{if(W<=.002&&G<=.002)return!1;if(e<=0||!Number.isFinite(e))return!0;let n=Math.min(e,1/30);K+=n;let a=Math.min(1,Math.max(0,(K-T)/E)),o=a*a*(3-2*a),h=Math.exp(-(w+2.0999999999999996*o)*n);X(d,p,n,h),X(f,m,n,h),[d,p]=[p,d],[f,m]=[m,f],Z(),ne(n),X(l,u,n,1),te(u,l,s*n,Math.exp(-(C+t)*n)),W=0;for(let e=0;e<c;e++){let t=l[e];t>W&&(W=t),v[e]=t>=1?255:t*255|0,y[e*4]=v[e],y[e*4+1]=Math.round(128+A[e]/B*127),y[e*4+2]=Math.round(128+V[e]/B*127),H&&(H[e*4]=Math.round(128+Math.max(-1,Math.min(1,(d[e]/r+A[e]*5)/I))*127),H[e*4+1]=Math.round(128+Math.max(-1,Math.min(1,(f[e]/i+V[e]*5)/I))*127),H[e*4+2]=v[e])}return W<=.002&&G<=.002&&$(),!0},$=()=>{l.fill(0),d.fill(0),f.fill(0),W=0,G=0,b.fill(0),k.fill(0),A.fill(0),V.fill(0),K=.76,v.fill(0),U()};return{cols:r,rows:i,texels:v,mapTexels:y,flowTexels:H,splat:re,step:Q,masked:()=>W>.002,reset:$}},H=`
uniform sampler2D uFluidMap;
uniform float uFluid;
vec2 fluidOffset(vec2 cardUv) {
  return uFluid * (texture2D(uFluidMap, cardUv).gb * 255.0 - 128.0) / 127.0 * ${B.toFixed(3)};
}
float fluidReveal(vec2 cardUv) {
  float density = texture2D(uFluidMap, cardUv).r;
  return uFluid * smoothstep(0.02, 0.7, density);
}`,U=typeof innerWidth==`number`?Math.min(2,t(innerWidth,innerHeight)):1,W=Math.round(280*U),G=Math.round(350*U),K={width:380,height:475,z:10},q=W*G,J=1.15,Y=.6,X=.45,te=e=>e-Math.floor(e),Z=e=>()=>(e=e*1664525+1013904223>>>0,e/4294967295),ne=`
uniform vec2 uSurface;
uniform vec2 uSurfaceOrigin;
uniform vec2 uEye;
uniform float uDist;
uniform vec3 uCenter;
uniform float uScale;
uniform float uYaw;
uniform float uTilt;
uniform float uMix;
uniform float uWidth;
uniform float uParticleTravel;
uniform vec2 uPointer;
uniform float uPush;
uniform float uSpread;
                                                                          
                                                
uniform float uZoom;
uniform vec2 uPlane;
uniform float uPlaneZ;
uniform vec2 uRevealOrigin;
                                                                              
                                                                             
                                                                            
#ifdef CLOUD_TWO_POSES
uniform vec3 uCenterB;
uniform float uScaleB;
uniform float uStagger;
                                                                         
                                                                        
                                                                           
uniform vec3 uKeyA;
uniform vec3 uKeyB;
                                                                            
                                                                            
                                                                                  
uniform float uGather;
#endif
${H}
float cardInside(vec2 uv) {
  return step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
}
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
varying vec2 vCard;
void main() {
#ifdef CLOUD_TWO_POSES
  float S = uStagger;
  vec2 midA = (aStartA.xy + aEndA.xy) * 0.5;
  vec2 midB = (aStartB.xy + aEndB.xy) * 0.5;
  float keyA = clamp(dot(uKeyA.xy, midA) + uKeyA.z, 0.0, 1.0);
  float keyB = clamp(dot(uKeyB.xy, midB) + uKeyB.z, 0.0, 1.0);
                                                              
  float order = clamp(mix(0.5 * (keyA + keyB), aSeed, 0.08), 0.0, 1.0);
#else
  const float S = ${X.toFixed(3)};
  float order = aSeed;
#endif
  float t = clamp(uMix * (1.0 + S) - order * S, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);
  vec3 la = mix(aStartA, aStartB, t);
  vec3 lb = mix(aEndA, aEndB, t);
                                                                            
                                                                           
                             
  vec3 ra = la;
  vec3 rb = lb;
#ifdef CLOUD_TWO_POSES
  float g = clamp(uGather * (1.0 + ${X.toFixed(3)}) - aSeed * ${X.toFixed(3)}, 0.0, 1.0);
  g = g * g * (3.0 - 2.0 * g);
  float gTheta = fract(aSeed * 91.7) * 6.2831853;
  float gPhi = acos(fract(aSeed * 37.3) * 2.0 - 1.0);
  vec3 amas = vec3(sin(gPhi) * cos(gTheta), cos(gPhi) * 0.8, sin(gPhi) * sin(gTheta)) * (235.0 + 130.0 * fract(aSeed * 53.1));
  vec3 gMid = (la + lb) * 0.5;
                                                                     
  la = mix(amas, gMid + (la - gMid) * g, g);
  lb = mix(amas, gMid + (lb - gMid) * g, g);
  float poseScale = mix(uScale, uScaleB, t);
  vec3 poseCenter = mix(uCenter, uCenterB, t);
                                                                             
                                                                               
  vec2 hop = uCenterB.xy - uCenter.xy;
  float hopArc = sin(3.14159265 * t) * uParticleTravel;
                                                                              
                                                                               
  vec3 pinched = (la + lb) * 0.5 * (-0.74 * hopArc);
  la.xy += pinched.xy;
  lb.xy += pinched.xy;
  poseCenter.xy += vec2(-hop.y, hop.x) * hopArc * (fract(aSeed * 13.7) - 0.5) * 0.16;
  poseCenter.z += hopArc * fract(aSeed * 5.3) * 0.08 * length(hop);
#else
  float poseScale = uScale;
  vec3 poseCenter = uCenter;
#endif
  vTone = mix(aTone.x, aTone.y, t);
  float endPoint = step(0.5, position.x);
                                                                           
                                                        
  vRelief = clamp((mix(la.z, lb.z, endPoint) - ${K.z.toFixed(1)}) / 42.0, 0.0, 1.0);
                                                                             
                                                                            
                                                                           
                                         
  vLive = step(0.42, length(lb - la) * poseScale);
                                                                       
                                                  
  float arc = sin(3.14159265 * t);
  vec3 offset = aTravel * arc * uParticleTravel;
  la += offset;
  lb += offset;
                                                                               
                                                                         
                                                                     
  float puff = 1.0 + uSpread * (0.08 + 0.24 * fract(aSeed * 7.13));
  la *= puff;
  lb *= puff;
                                                                          
                                                                            
                                                                           
  vec2 targetMid = (ra.xy + rb.xy) * 0.5;
  vec2 centerCard = targetMid / uPlane + 0.5;
  vCard = mix(ra.xy, rb.xy, position.x) / uPlane + 0.5;
                                                                              
  float onCard = cardInside(centerCard);
  float travelT = fluidReveal(centerCard) * onCard;
  float hoverArc = sin(3.14159265 * travelT) * uParticleTravel;
  float driftAngle = aSeed * 6.2831853;
  vec2 drift = vec2(cos(driftAngle), sin(driftAngle));
  vec3 hoverOffset = vec3(drift * (0.004 + aSeed * 0.006), 0.006 + aSeed * 0.010) * hoverArc * uPlane.x;
  la += hoverOffset;
  lb += hoverOffset;
  float planeAlign = smoothstep(0.18, 0.64, travelT);
  la = mix(la, vec3(ra.xy, uPlaneZ), planeAlign);
  lb = mix(lb, vec3(rb.xy, uPlaneZ), planeAlign);
                                                                            
  la.xy += fluidOffset(ra.xy / uPlane + 0.5) * uPlane * (1.0 - planeAlign) * onCard;
  lb.xy += fluidOffset(rb.xy / uPlane + 0.5) * uPlane * (1.0 - planeAlign) * onCard;
  float cy = cos(uYaw); float sy = sin(uYaw);
  la = vec3(la.x * cy + la.z * sy, la.y, -la.x * sy + la.z * cy);
  lb = vec3(lb.x * cy + lb.z * sy, lb.y, -lb.x * sy + lb.z * cy);
  float cx = cos(uTilt); float sx = sin(uTilt);
  la = vec3(la.x, la.y * cx - la.z * sx, la.y * sx + la.z * cx);
  lb = vec3(lb.x, lb.y * cx - lb.z * sx, lb.y * sx + lb.z * cx);
  la = la * poseScale + poseCenter;
  lb = lb * poseScale + poseCenter;
                                                                             
  float zLocal = (mix(la.z, lb.z, endPoint) - poseCenter.z) / max(poseScale, 1e-3);
  vDepth = clamp(zLocal / 600.0 + 0.5, 0.0, 1.0);
                                                                            
  float wa = max((uDist - la.z) / uDist, 0.05);
  float wb = max((uDist - lb.z) / uDist, 0.05);
  vec2 pa = uEye + vec2(la.x, -la.y) / wa;
  vec2 pb = uEye + vec2(lb.x, -lb.y) / wb;
                                                                             
                                                                          
                                                                          
                                                                         
  vec2 away = (pa + pb) * 0.5 - uPointer;
  float ad = length(away);
  float fall = 1.0 - smoothstep(0.0, 120.0 * uZoom, ad);
  fall *= fall;
                                                                            
  vec2 shove = away / max(ad, 28.0 * uZoom) * fall * uPush * uZoom * (8.0 + aSeed * 14.0) * (1.0 - planeAlign);
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
}`,re=`
${l}
${H}
uniform vec4 uClip;
uniform vec2 uSurface;
uniform vec2 uSurfaceOrigin;
uniform float uDpr;
uniform float uWidth;
uniform float uAlpha;
uniform float uDepthColor;
varying float vAcross;
varying float vTone;
varying float vDepth;
varying float vRelief;
varying float vLive;
varying vec2 vCard;
void main() {
  vec2 client = uSurfaceOrigin + vec2(gl_FragCoord.x, uSurface.y * uDpr - gl_FragCoord.y) / uDpr;
  if (client.x < uClip.x || client.x > uClip.x + uClip.z || client.y < uClip.y || client.y > uClip.y + uClip.w) discard;
                                                                                 
  float cov = clamp(uWidth - abs(vAcross) + 0.5, 0.0, 1.0);
                                                                          
                                                                       
  float onCard = step(0.0, vCard.x) * step(vCard.x, 1.0) * step(0.0, vCard.y) * step(vCard.y, 1.0);
  float alpha = cov * vLive * uAlpha * (1.0 - fluidReveal(vCard) * onCard);
  if (alpha <= 0.004) discard;
                                                                         
                                                                               
  float t = clamp(0.20 + vDepth * 0.42 + vTone * 0.38, 0.0, 1.0);
                                                                          
                                                                           
                                                                   
  float deep = clamp(vRelief * 0.72 + vTone * 0.28, 0.0, 1.0);
  vec3 rgb = mix(ramp(0.25 + 0.75 * t), ramp(0.06 + 0.94 * deep), uDepthColor);
  gl_FragColor = vec4(rgb, alpha);
}`,Q=(e,t)=>{let n=t.cols??W,r=t.rows??G,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`,{willReadFrequently:!0});if(!a)return null;a.imageSmoothingEnabled=!0;let o=t.source??{x:0,y:0,width:e.naturalWidth,height:e.naturalHeight};return a.drawImage(e,o.x,o.y,o.width,o.height,0,0,n,r),{data:a.getImageData(0,0,n,r).data,cols:n,rows:r}},$=(e,t={})=>{let n=Q(e,t);return n?b(n.data,n.cols,n.rows,t):[]},ie=async(e,t={})=>{let n=Q(e,t);if(!n)return[];let r=y(n.data,n.cols,n.rows,t),i=performance.now()+4,a=r.next();for(;!a.done;)performance.now()>=i&&(await new Promise(e=>{document.hidden?setTimeout(e,0):requestAnimationFrame(()=>{setTimeout(e,0)})}),i=performance.now()+4),a=r.next();return a.value},ae=(e,t)=>{let n=Z(7),r=[];for(let i=0;i<q;i++){let i=n()*Math.PI*2,a=Math.acos(n()*2-1),o=e+n()*t,s=[Math.sin(a)*Math.cos(i)*o,Math.cos(a)*o*.8,Math.sin(a)*Math.sin(i)*o];r.push({a:s,b:s,tone:0})}return r},oe=(e=q)=>{let t=new a;t.setAttribute(`position`,new c(new Float32Array([0,-1,0,1,-1,0,0,1,0,1,1,0]),3)),t.setIndex([0,1,2,2,1,3]),t.instanceCount=e;let n=new Float32Array(e*3),r=new Float32Array(e*3),i=new Float32Array(e*3),l=new Float32Array(e*3),u=new Float32Array(e*2),d=new Float32Array(e),f=new Float32Array(e*3),p=Z(23);for(let t=0;t<e;t++)d[t]=p();let m=new o(n,3),h=new o(r,3),g=new o(i,3),_=new o(l,3),v=new o(u,2),y=new o(f,3),b=[m,h,g,_,v,y];for(let e of b)e.setUsage(s);return t.setAttribute(`aStartA`,m),t.setAttribute(`aEndA`,h),t.setAttribute(`aStartB`,g),t.setAttribute(`aEndB`,_),t.setAttribute(`aTone`,v),t.setAttribute(`aSeed`,new o(d,1)),t.setAttribute(`aTravel`,y),{geometry:t,startA:n,endA:r,startB:i,endB:l,tones:u,seeds:d,travels:f,writeSeg:(e,t,a)=>{let o=e===`A`?n:i,s=e===`A`?r:l;o[t*3]=a.a[0],o[t*3+1]=a.a[1],o[t*3+2]=a.a[2],s[t*3]=a.b[0],s[t*3+1]=a.b[1],s[t*3+2]=a.b[2],u[t*2+(e===`A`?0:1)]=a.tone},refresh:()=>{for(let e of b)e.needsUpdate=!0}}},se=(e=1)=>({bendBase:18*e,bendMax:42*e,bendJitter:12*e,depthBase:46*e,depthJitter:44*e}),ce=t=>{let{pool:r,motion:a,particleTravel:o,markDirty:s}=t,c=t.scale??1,l=t.count??q,u=t.route??se(c),f=p(l),m=null,h=null,g=0,v=0,y=0,b=null,x=()=>{cancelAnimationFrame(g),clearTimeout(v),g=v=0,h=null},S=()=>{let e=h;if(!e)return;let t=performance.now()+4,n=e.job.next();for(;!n.done&&performance.now()<t;)n=e.job.next();if(n.done){h=null,e.commit();return}document.hidden?v=window.setTimeout(()=>{v=0,S()},0):g=requestAnimationFrame(()=>{g=0,v=window.setTimeout(()=>{v=0,S()},0)})};return i.addEventListener(`change`,()=>{if(!e)return;o.value=0;let t=h;if(x(),t){for(;!t.job.next().done;);t.commit()}let n=b;b=null,n?.progress(1),s()}),{setShape:(t,{duration:i=J,ease:p=`power2.inOut`,onComplete:g}={})=>{x(),b?.kill(),b=null,y++;let v=e?r:m??={startA:new Float32Array(r.startA.length),endA:new Float32Array(r.endA.length),startB:new Float32Array(r.startB.length),endB:new Float32Array(r.endB.length),tones:new Float32Array(r.tones.length),travels:new Float32Array(r.travels.length),seeds:r.seeds};if(!e)for(let e of d)v[e].set(r[e]);let C=_(v,t,{mix:a.mix,travel:o.value,sequence:y,scale:c,count:l,route:u},f),w=()=>{if(v!==r)for(let e of d)r[e].set(v[e]);o.value=+!e,r.refresh(),a.mix=0,e?(a.mix=1,g?.()):b=n.to(a,{mix:1,duration:i,ease:p,onUpdate:s,onComplete:()=>{b=null,g?.()}}),s()};if(e){for(;!C.next().done;);w()}else h={job:C,commit:w},s(),S()},stop:()=>{x(),b?.kill(),b=null},active:()=>!!(h||b)}},le=t=>{let{motion:a,uniforms:o}=t,s=.0075,c=.45,l=u(),d=!1,f=0,p=0,m=0,h=a.tilt,g=0,_=0,v=0,y=!1,b=(n,i)=>{e||d||!t.ready()||(l.move(n,i,r()),o.uPointer.value.set(n,i),t.markDirty())},x=()=>{l.leave()};return i.addEventListener(`change`,()=>{e&&(l=u(),g=f=p=v=0,o.uPush.value=o.uSpread.value=0),t.markDirty()}),{feedPush:b,resetPush:x,beginDrag:()=>{d||(d=!0,x(),g=0,y=!0,_=performance.now(),t.killMotionTween(),h=t.baseTilt(),t.grabbed.classList.add(`is-grabbing`),t.kick())},moveDrag:(e,n)=>{if(!d)return;let r=performance.now(),i=Math.min(.1,Math.max(.008,(r-_)/1e3));_=r,a.yaw+=e*s,a.tilt=Math.min(h+c,Math.max(h-c,a.tilt+n*.005)),g=g*.7+e*s/i*.3,t.markDirty()},endDrag:()=>{if(d){if(d=!1,t.grabbed.classList.remove(`is-grabbing`),e){g=0,a.tilt=h,a.swayGain=1,t.markDirty();return}t.setMotionTween(n.to(a,{tilt:h,swayGain:1,duration:.9,ease:`power2.out`,onComplete:()=>t.setMotionTween(null)})),t.kick()}},resetInertia:()=>{g=0},update:(t,n)=>{let r=!1;y&&=(a.yaw+=v,m+=v,a.swayGain=0,!1),!d&&!e&&(a.yaw+=n*(a.spin??0),Math.abs(g)>.02?(a.yaw+=g*n,g*=Math.exp(-2.6*n)):g=0);let i=l.step(n);i!==f&&(r=!0),f=i,o.uPush.value=f;let s=a.yaw-m;m=a.yaw,Math.abs(s)>3&&(s=0);let c=e||n<=0?0:Math.min(1,Math.abs(s/n)/6);return Math.abs(c-p)>5e-4&&(p+=(c-p)*Math.min(1,(c>p?12:3)*n),p<.001&&c===0&&(p=0),r=!0),o.uSpread.value=p,r},commitSway:e=>{v=e,o.uYaw.value=a.yaw+(d?0:v)},animating:()=>d||Math.abs(g)>.02||l.active()||p>.001,dragging:()=>d}};export{_ as C,p as S,Z as _,q as a,V as b,G as c,ie as d,ae as f,te as g,ce as h,J as i,X as l,oe as m,ne as n,W as o,le as p,Y as r,K as s,re as t,$ as u,se as v,A as x,H as y};