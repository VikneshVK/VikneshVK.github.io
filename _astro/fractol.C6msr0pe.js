import{n as e}from"./crt.CDvFkb3O.js";import{o as t}from"./i18n.D8MATtGw.js";import{J as n,N as r,R as i,U as a,V as o,h as s,q as c,v as l}from"./palette.-OjyokA9.js";import{n as u,t as d}from"./canvasStage.CLdGXscS.js";function f(e,t,n,r){return{x:e.centerX+(n-.5)*e.span*t,y:e.centerY+(r-.5)*e.span}}function ee(e,t,n,r,i,a=1e-7,o=12){let s=Number.isFinite(i)&&i>0?i:1,c=f(e,t,n,r),l=Math.min(o,Math.max(a,e.span/s)),u={...e,span:l},d=f(u,t,n,r);return{centerX:u.centerX+c.x-d.x,centerY:u.centerY+c.y-d.y,span:l}}function te(e,t,n,r){return{centerX:e.centerX-n*e.span*t,centerY:e.centerY-r*e.span,span:e.span}}function ne(e,t){return{x:e*2-1,y:t*2-1}}var p=[{id:`julia`,label:`Julia`,shaderMode:0,view:{centerX:0,centerY:0,span:2.4},iterations:50,parameter:{x:-.8,y:.4},parameterKind:`c`,presets:[{x:-.8,y:.4},{x:-.8,y:.2},{x:-.79,y:-.14},{x:-1,y:.4},{x:.42,y:.13},{x:0,y:1},{x:-.4,y:.8},{x:.19,y:.6},{x:-.6,y:.6}]},{id:`mandelbrot`,label:`Mandelbrot`,shaderMode:1,view:{centerX:-.75,centerY:0,span:2.4},iterations:30,parameter:{x:0,y:0},parameterKind:`z₀`},{id:`pointed`,label:`Pointed`,shaderMode:2,view:{centerX:0,centerY:0,span:2.4},iterations:50,parameter:{x:-.8,y:-.4},parameterKind:`c`},{id:`choux`,label:`Choux`,shaderMode:3,view:{centerX:0,centerY:0,span:2.4},iterations:50,parameter:{x:-.98,y:-.99},parameterKind:`c`,presets:[{x:-.98,y:-.99},{x:.64,y:-.97},{x:-.57,y:.15},{x:-.35,y:.13},{x:-.54,y:.08},{x:.39,y:-.56},{x:-.13,y:.25},{x:.46,y:.25},{x:.34,y:-.55}]},{id:`robot`,label:`Robot`,shaderMode:4,view:{centerX:0,centerY:0,span:2.4},iterations:50,parameter:{x:.55,y:-.84},parameterKind:`c`,presets:[{x:.55,y:-.84},{x:-.11,y:.24},{x:.59,y:-.93},{x:-.56,y:.08},{x:.25,y:-.1},{x:-.45,y:.09},{x:-.39,y:.17},{x:-.19,y:.18},{x:-.26,y:-.15}]},{id:`hum`,label:`Hum`,shaderMode:5,view:{centerX:0,centerY:0,span:2.4},iterations:50,parameter:{x:.32,y:-.86},parameterKind:`c`,presets:[{x:.32,y:-.86},{x:.26,y:-.17},{x:-.99,y:.27},{x:.46,y:-.96},{x:.24,y:.6},{x:-.73,y:.85},{x:.28,y:.49},{x:.65,y:-.98},{x:.3,y:-.75}]},{id:`burningship`,label:`Burning Ship`,shaderMode:6,view:{centerX:-.75,centerY:0,span:2.4},iterations:30,parameter:{x:0,y:0},parameterKind:`z₀`}],m=[{id:`rainbow`,label:`Rainbow`,phases:[4,2,0]},{id:`fire-ice`,label:`Fire & Ice`,phases:[4,2,2]},{id:`black-white`,label:`Black & White`,phases:[4,4,4]},{id:`joker`,label:`Joker`,phases:[5,2,5]},{id:`sand-water`,label:`Sand & water`,phases:[4,5,6]}],h=512,re=1e-7,ie=12,ae=127,oe=128,se=863,ce=928,le=`
precision highp float;
attribute vec3 position;
void main() {
  gl_Position = vec4(position, 1.0);
}`,ue=`
precision highp float;

uniform vec2 uResolution;
uniform vec2 uCenter;
uniform vec2 uParameter;
uniform float uSpan;
uniform int uMode;
uniform int uIterations;
uniform vec3 uColorPhases;
uniform float uColorAmplitude;
uniform float uColorBase;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float aspect = uResolution.x / max(1.0, uResolution.y);
                                                                           
  vec2 point = uCenter + vec2((uv.x - 0.5) * uSpan * aspect, -(uv.y - 0.5) * uSpan);

  bool planeParameter = uMode == 1 || uMode == 6;
  vec2 z = planeParameter ? uParameter : point;
  vec2 c = planeParameter ? point : uParameter;
  int count = 0;

  for (int iteration = 0; iteration < ${h}; iteration++) {
    if (iteration >= uIterations || dot(z, z) >= 4.0) break;

    float previousReal = z.x;
    float nextReal = z.x * z.x - z.y * z.y + c.x;
    float nextImaginary = 2.0 * z.y * previousReal + c.y;

    if (uMode == 2) {
                                                        
      nextImaginary = 4.0 * z.y * previousReal + c.y;
    } else if (uMode == 3) {
                                                             
      nextReal = abs(nextReal);
      nextImaginary = abs(nextImaginary);
    } else if (uMode == 4) {
                                                                 
      nextImaginary = 2.0 * abs(z.y * previousReal) + c.y;
    } else if (uMode == 5) {
                                                                       
      nextImaginary = 2.0 * abs(z.y) * previousReal + c.y;
    } else if (uMode == 6) {
                                                                     
      nextImaginary = 2.0 * abs(z.x * z.y) + c.y;
    }

    z = vec2(nextReal, nextImaginary);
    count++;
  }

  if (count >= uIterations) {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

                                                                         
                                                                               
                                                              
                                                                             
  float colorIndex = float(count) + 1.0
    - 2.0 / max(length(z), 0.000001);
  vec3 rawColor = sin(vec3(0.10 * colorIndex) + uColorPhases)
    * uColorAmplitude + vec3(uColorBase);
  vec3 nativeColor = mod(floor(rawColor), vec3(256.0)) / 255.0;
  gl_FragColor = vec4(clamp(nativeColor, 0.0, 1.0), 1.0);
}`,g=(e,t)=>Math.abs(e)>9999||Math.abs(e)>0&&Math.abs(e)<1e-4?e.toExponential(2):e.toFixed(t),_=(e,t)=>{e&&e.textContent!==t&&(e.textContent=t)};function v(f){let v=f.querySelector(`[data-fractol-stage]`),y=f.querySelector(`[data-fractol-status]`),de=f.querySelector(`[data-fractol-active]`),fe=f.querySelector(`[data-fractol-parameter]`),pe=f.querySelector(`[data-fractol-color-label]`),me=f.querySelector(`[data-fractol-zoom]`),he=f.querySelector(`[data-fractol-iterations]`),b=f.querySelector(`[data-fractol-pause]`),ge=f.querySelector(`[data-fractol-reset]`),_e=f.querySelector(`[data-fractol-zoom-in]`),ve=f.querySelector(`[data-fractol-zoom-out]`),x=f.querySelector(`[data-fractol-psy]`),S=f.querySelector(`[data-fractol-presets]`),C=Array.from(f.querySelectorAll(`[data-fractol-mode]`)),w=Array.from(f.querySelectorAll(`[data-fractol-color]`)),T=Array.from(f.querySelectorAll(`[data-fractol-preset]`));if(!v)return;let E=document.createElement(`canvas`);E.className=`fractol-screen fractol-screen-source`,E.setAttribute(`aria-hidden`,`true`);let D=document.createElement(`canvas`);D.className=`fractol-screen fractol-screen-poster`,D.setAttribute(`aria-hidden`,`true`),v.append(D,E);let O=D.getContext(`2d`,{alpha:!1});if(!O){_(y,t(`WebGL indisponible — ce navigateur ne peut pas lancer Fract’ol.`));return}let k={uResolution:{value:new c},uCenter:{value:new c},uParameter:{value:new c},uSpan:{value:0},uMode:{value:0},uIterations:{value:0},uColorPhases:{value:new n},uColorAmplitude:{value:0},uColorBase:{value:0}},A;try{A=new s({canvas:E,alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!0,powerPreference:`high-performance`})}catch(e){console.warn(`[fractol] shader indisponible`,e),_(y,t(`Le shader Fract’ol n’a pas pu être compilé sur ce GPU.`));return}let ye=new o({vertexShader:le,fragmentShader:ue,uniforms:k,depthTest:!1,depthWrite:!1,blending:0}),j=new a,be=new l,M=new r(new i(2,2),ye);M.frustumCulled=!1,j.add(M);let N=p[0],P=m[0],F={...N.view},I={...N.parameter},L=!1,R=!1,z=0,B=()=>f.classList.contains(`is-open`)&&f.classList.contains(`is-focused`),V=()=>document.body.classList.contains(`crt-native-html`),xe=e(E,D),H=()=>{let e=Math.max(1,N.view.span/F.span);return Math.min(h,N.iterations+Math.max(0,Math.floor(Math.log2(e)*5)))},U=()=>{let e=N.view.span/F.span,t=Math.min(12,Math.max(4,4+Math.floor(Math.max(0,Math.log10(Math.max(1,e))))));_(de,N.label),_(fe,`${N.parameterKind} ${g(I.x,t)} ${I.y<0?`−`:`+`} ${g(Math.abs(I.y),t)}i`),_(pe,`${P.label}${R?` · PSY`:``}`),_(me,e>=1e4?`×${e.toExponential(2)}`:`×${e.toFixed(e<10?2:+(e<100))}`),_(he,`${H()} it.`)},W=(e=!1)=>{if(z&&window.clearTimeout(z),!e||!V()){U(),z=0;return}z=window.setTimeout(()=>{z=0,U()},180)},G=d(()=>{!f.classList.contains(`is-open`)||E.width<1||E.height<1||(k.uResolution.value.set(E.width,E.height),k.uCenter.value.set(F.centerX,F.centerY),k.uParameter.value.set(I.x,I.y),k.uSpan.value=F.span,k.uMode.value=N.shaderMode,k.uIterations.value=H(),k.uColorPhases.value.set(...P.phases),k.uColorAmplitude.value=R?se:ae,k.uColorBase.value=R?ce:oe,A.setViewport(0,0,E.width,E.height),A.render(j,be),xe.update())});u(v,E,D,O,()=>{A.setSize(E.width,E.height,!1),G()},{dpr:[1,1.4],maxPixels:[42e4,92e4],background:`#000000`});let K=(e,t)=>{let n=v.getBoundingClientRect();return{u:Math.min(1,Math.max(0,(e-n.left)/Math.max(1,n.width))),v:Math.min(1,Math.max(0,(t-n.top)/Math.max(1,n.height))),aspect:Math.max(1,n.width)/Math.max(1,n.height)}},q=(e,t,n=!1)=>{if(L)return;let r=K(e,t);I=ne(r.u,r.v),W(n),G()},J=(e,t,n)=>{let r=K(e,t);F=ee(F,r.aspect,r.u,r.v,n,re,ie),W(V()),G()},Y=e=>{let t=v.getBoundingClientRect();J(t.left+t.width/2,t.top+t.height/2,e)},Se=()=>{for(let e of C){let t=e.dataset.fractolMode===N.id;e.classList.toggle(`is-on`,t),e.setAttribute(`aria-pressed`,String(t))}},Ce=()=>{for(let e of w){let t=e.dataset.fractolColor===P.id;e.classList.toggle(`is-on`,t),e.setAttribute(`aria-pressed`,String(t))}},X=()=>{x&&(x.classList.toggle(`is-on`,R),x.setAttribute(`aria-pressed`,String(R)),x.textContent=R?`PSY ON`:`PSY`)},we=()=>{let e=!!N.presets?.length;S?.toggleAttribute(`hidden`,!e),S?.setAttribute(`aria-label`,`Presets de paramètres pour ${N.label}`);for(let t of T)t.disabled=!e},Z=()=>{b&&(b.setAttribute(`aria-pressed`,String(L)),b.textContent=t(L?`LIBÉRER LE PARAM.`:`FIGER LE PARAM.`))},Te=e=>{let t=p.find(t=>t.id===e);t&&(N=t,F={...N.view},I={...N.parameter},L=!1,Se(),Z(),we(),U(),G())},Ee=e=>{let t=m.find(t=>t.id===e);t&&(P=t,Ce(),U(),G())},De=()=>{R=!R,X(),U(),G()},Oe=e=>{let t=N.presets?.[e-1];t&&(I={...t},U(),G())},ke=()=>{F={...N.view},I={...N.parameter},L=!1,R=!1,Z(),X(),U(),G()};C.forEach(e=>{e.addEventListener(`click`,()=>Te(e.dataset.fractolMode??``))}),w.forEach(e=>{e.addEventListener(`click`,()=>Ee(e.dataset.fractolColor??``))}),T.forEach(e=>{e.addEventListener(`click`,()=>Oe(Number(e.dataset.fractolPreset)))}),x?.addEventListener(`click`,De),b?.addEventListener(`click`,()=>{L=!L,Z(),U()}),ge?.addEventListener(`click`,ke),_e?.addEventListener(`click`,()=>Y(1.75)),ve?.addEventListener(`click`,()=>Y(1/1.75));let Q=null,Ae=(e,t,n)=>{v.focus({preventScroll:!0}),Q={startX:e,startY:t,startView:{...F},moved:!1,pointerId:n}},je=(e,t)=>{if(!Q)return;let n=v.getBoundingClientRect(),r=e-Q.startX,i=t-Q.startY;!Q.moved&&Math.hypot(r,i)>=5&&(Q.moved=!0),Q.moved&&(F=te(Q.startView,Math.max(1,n.width)/Math.max(1,n.height),r/Math.max(1,n.width),i/Math.max(1,n.height)),W(!0),G())},Me=(e,t,n=!1)=>{if(!Q)return;let r=Q.moved;Q=null,!n&&!r&&q(e,t),W()};v.addEventListener(`pointerdown`,e=>{V()||e.button!==0||(e.preventDefault(),Ae(e.clientX,e.clientY,e.pointerId),v.setPointerCapture(e.pointerId))}),v.addEventListener(`pointermove`,e=>{V()||(Q?je(e.clientX,e.clientY):e.pointerType===`mouse`&&q(e.clientX,e.clientY,!0))});let $=(e,t)=>{V()||Q?.pointerId!==e.pointerId||(e.preventDefault(),Me(e.clientX,e.clientY,t),v.hasPointerCapture(e.pointerId)&&v.releasePointerCapture(e.pointerId))};v.addEventListener(`pointerup`,e=>$(e,!1)),v.addEventListener(`pointercancel`,e=>$(e,!0)),v.addEventListener(`wheel`,e=>{if(V()||!v.contains(document.activeElement))return;e.preventDefault();let t=Math.min(2.2,Math.max(.45,Math.exp(-e.deltaY*.0022)));J(e.clientX,e.clientY,t)},{passive:!1}),v.addEventListener(`crt:wheel`,e=>{if(!(e instanceof CustomEvent)||!v.contains(document.activeElement))return;let t=e.detail;e.preventDefault();let n=Math.min(2.2,Math.max(.45,Math.exp(-t.deltaY*.0022)));J(t.source.x,t.source.y,n)}),v.addEventListener(`crt:gesturestart`,e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;t.kind===`fractol-drag`&&(e.preventDefault(),Ae(t.source.x,t.source.y,t.pointerId))}),v.addEventListener(`crt:gesturemove`,e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;t.kind===`fractol-drag`&&(e.preventDefault(),je(t.source.x,t.source.y))}),v.addEventListener(`crt:gestureend`,e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;t.kind===`fractol-drag`&&(e.preventDefault(),Me(t.source.x,t.source.y))}),document.addEventListener(`crt:pointer`,e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;t.target!==v||!B()||q(t.source.x,t.source.y,!0)}),document.addEventListener(`keydown`,e=>{if(!v.contains(document.activeElement)||!B()||e.metaKey||e.ctrlKey||e.altKey||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLButtonElement||e.target instanceof HTMLAnchorElement)return;let t=v.getBoundingClientRect(),n=Math.max(1,t.width)/Math.max(1,t.height),r=/^Numpad([1-9])$/.exec(e.code),i=/^Digit([1-5])$/.exec(e.code)??(e.code.startsWith(`Numpad`)?null:/^([1-5])$/.exec(e.key)),a=F.span*5/Math.max(1,E.height),o=!0;if(r)N.presets?Oe(Number(r[1])):o=!1;else if(i){let e=m[Number(i[1])-1];e?Ee(e.id):o=!1}else e.code===`Backquote`||e.key===`~`?De():e.key===` `?(L=!L,Z()):e.key.toLowerCase()===`r`?ke():e.key===`+`||e.key===`=`||e.code===`NumpadAdd`?Y(1.75):e.key===`-`||e.code===`NumpadSubtract`?Y(1/1.75):e.key===`PageUp`?Y(1.5):e.key===`PageDown`?Y(1/1.5):e.key===`ArrowLeft`?F={...F,centerX:F.centerX-F.span*n*.08}:e.key===`ArrowRight`?F={...F,centerX:F.centerX+F.span*n*.08}:e.key===`ArrowUp`?F={...F,centerY:F.centerY-F.span*.08}:e.key===`ArrowDown`?F={...F,centerY:F.centerY+F.span*.08}:e.key.toLowerCase()===`a`?F={...F,centerX:F.centerX+a}:e.key.toLowerCase()===`d`?F={...F,centerX:F.centerX-a}:e.key.toLowerCase()===`w`?F={...F,centerY:F.centerY+a}:e.key.toLowerCase()===`s`?F={...F,centerY:F.centerY-a}:o=!1;o&&(e.preventDefault(),e.stopPropagation(),U(),G())},!0),document.addEventListener(`visibilitychange`,()=>{document.hidden||G()}),E.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),_(y,t(`Contexte GPU interrompu — rechargez la page pour relancer Fract’ol.`))}),Se(),Ce(),X(),we(),Z(),U(),G(),_(y,t(`GPU actif · Fractol_Final · kernels OpenCL transposés en WebGL`))}export{v as initFractol};