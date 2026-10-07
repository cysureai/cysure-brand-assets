/* v6 r3g · 6 oct 2026 · pedido de Tono: el UI se ve continuo desde la entrada hasta UNA unica desaparicion final (revelado del arte); al terminar el ciclo .reveal se queda (this.done) y nada lo repone ni relanza: play() (hover, autoplay IO, carrusel flota, boton) no hace nada, cancelCycle en fase de revelado lo da por terminado y refreshArt (tema/arte) no quita el revelado; el estado final va en la clase propia .cy-fin (cy-arte28 v17 parchea refreshArt y quita .reveal desde fuera al cambiar el tema). Resto = v6f literal. Rollback: v6f. */
/* v6 r3f · 6 oct 2026 · decisiones de Toño: sin franja/scrim/velo de chip (la legibilidad va en el halo pegado al glifo, en v3d r3f); ciclo: cuenta al terminar la entrada 3D y 5 s de UI antes del revelado (autoplay y hover), revelado/vuelta con su fundido .4 s. Resto = v6 r3d literal: con adapter v9 · iPhone sin ocultar el vidrio ya en vista al montar · revelado .4 s/12 px · pausa de lente con rueda · Liquid Glass v7 (encargo Toño + REFERENCIA-V7-AUTOCONTENIDA). */
/* v5 · Fondos de agentes: prefetch activo+siguiente y reveal sólo tras decode; r3f: UI 5 s + arte 2 s visibles. */
function decodeAgentArt(url,priority){
 const promise=new Promise((resolve,reject)=>{const image=new Image();image.decoding='async';image.fetchPriority=priority;
  image.alt='';image.setAttribute('aria-hidden','true');image.style.cssText='display:block;width:100%;height:100%;object-fit:cover;object-position:var(--pos,50% 35%);border-radius:inherit';
  image.onload=()=>{const decoded=image.decode?image.decode():Promise.resolve();decoded.then(()=>resolve(image),reject);};
  image.onerror=()=>reject(new Error('agent-art'));image.src=url;
 });return promise;
}
/* v4 · 20 sep: 3s UI + 2s arte de tiempo visible; eventos de fase y reloj pausado fuera de viewport/hidden. */
const M=window.CY_MOCK_MANIFEST||{};const A=M.assets||{};const U=x=>x&&typeof x==='object'?x.url:x;const asset=n=>U(A[n])||('assets/'+n);const resolveAssets=t=>t.replace(/(?:\.\/)?assets\/([A-Za-z0-9._-]+)/g,(s,n)=>asset(n));
const ready=Promise.all([fetch(U(M.templates)).then(r=>r.json()),fetch(U(M.css)).then(r=>r.text()),fetch(U(M.i18n)).then(r=>r.json())]);
class CysureMockup extends HTMLElement{
 static observedAttributes=['theme','lang','art-day','art-night'];
 attributeChangedCallback(name){if(name==='theme'&&this.lgFilter){this.lgTheme();this.lgApply();}if(name==='lang'&&this.card)this.localize();if((name==='art-day'||name==='art-night')&&this.card)this.applyArt();if(this.card&&(name==='theme'||name==='art-day'||name==='art-night'))this.refreshArt();}
 applyArt(){const s=this.shadowRoot.querySelector('.scene');if(!s)return;const d=this.getAttribute('art-day'),n=this.getAttribute('art-night');if(d)s.style.setProperty('--day',`url('${d}')`);if(n)s.style.setProperty('--night',`url('${n}')`);}
 localize(){const en=(this.getAttribute('lang')||document.documentElement.lang||'es').startsWith('en');this.english=en;const walker=document.createTreeWalker(this.card,NodeFilter.SHOW_TEXT);let n;while(n=walker.nextNode()){if(!this.originalTexts.has(n))this.originalTexts.set(n,n.textContent);const value=this.originalTexts.get(n);n.textContent=en?(this.dictionary[value]||value):value;}this.button.setAttribute('aria-label',en?'Play animation and reveal illustration':'Animar y revelar ilustración');if(this.lgGlass)this.lgVeils();}
 
 constructor(){super();this.attachShadow({mode:'open'});this.timers=[];}
 async connectedCallback(){const [templates,raw,dictionary]=await ready;if(!this.isConnected)return;if(this.shadowRoot.childElementCount){if(this.lgRO&&this.lgGlass)this.lgRO.observe(this.lgGlass);this.setupMotion();return;}const id=this.getAttribute('agent');if(!templates[id]){this.textContent='Mockup no encontrado';return;}
 const css=resolveAssets(raw).replaceAll('font-family:Space','font-family:CyMockSpace').replaceAll(' Space',' CyMockSpace').replaceAll('font-family:DM','font-family:CyMockDM').replaceAll('font:11px DM','font:11px CyMockDM').replaceAll('font:10px DM','font:10px CyMockDM').replaceAll('font-family:Serif','font-family:CyMockSerif');
 if(!document.getElementById('cy-mockup-fonts-v3')){const fonts=document.createElement('style');fonts.id='cy-mockup-fonts-v3';fonts.textContent=`@font-face{font-family:CyMockSpace;src:url('${asset('SpaceGrotesk.ttf')}')}@font-face{font-family:CyMockDM;src:url('${asset('DMSans.ttf')}')}@font-face{font-family:CyMockSerif;src:url('${asset('DMSerifDisplay-Italic.ttf')}')}`;document.head.append(fonts);}
 const html=resolveAssets(templates[id]).replace(/ onclick="[^"]*"/g,'');
 this.shadowRoot.innerHTML=`<style>${css}\n:host(:not([data-assets-ready])) .art{background-image:none!important}:host(:not([data-assets-ready])) .art>img{visibility:hidden}.glass{transition:opacity .4s,transform .4s,translate .4s}.card.paused *{animation-play-state:paused!important}.card[data-id="alignment"].running .signal{animation-duration:.8s}.scene button{display:block}.scene button span{display:none}.card.reveal .glass{opacity:0!important;translate:0 12px;animation-play-state:paused!important}</style><article class="card" data-id="${id}">${html}</article>`;
 this.card=this.shadowRoot.querySelector('.card');this.applyArt();this.button=this.shadowRoot.querySelector('button');this.dictionary=dictionary;this.originalTexts=new WeakMap();this.localize();this.button.addEventListener('click',()=>this.play());this.card.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&!matchMedia('(prefers-reduced-motion:reduce)').matches)this.play()});
 this.managedArt=this.isAgentArt()&&!!this.closest('.st-mb [data-st-carr="flota"]');
 if(this.isAgentArt())this.shadowRoot.querySelector('.art').style.setProperty('background-image','none','important');
 if(!this.managedArt){this.assetIO=new IntersectionObserver(es=>{this.artNear=es.some(e=>e.isIntersecting);if(this.artNear){if(this.isAgentArt())this.ensureArt();else{this.setAttribute('data-assets-ready','');this.assetIO.disconnect()}}},{rootMargin:'600px 0px'});this.assetIO.observe(this);}
 this.lgSetup();this.setupMotion();
 this.dispatchEvent(new CustomEvent('cysure:art-owner-ready',{bubbles:true,composed:true}));
 }
 isAgentArt(){return ['mdr','superficie','explorador','nube','correo','auditoria','redteam','vendor','gasto'].includes(this.getAttribute('agent'));}
 artUrl(){
  const scene=this.shadowRoot.querySelector('.scene');if(!scene)return '';
  const dark=this.getAttribute('theme')==='dark',inverted=scene.classList.contains('inverted');
  const raw=getComputedStyle(scene).getPropertyValue(dark!==inverted?'--night':'--day').trim();
  const m=raw.match(/^url\(["']?(.+?)["']?\)$/);return m?m[1]:'';
 }
 artDecoded(){return !!this.artLoadedUrl&&this.artLoadedUrl===this.artUrl();}
 setArtWanted(wanted,priority='low'){
  this.artWanted=wanted;this.artPriority=priority;
  if(wanted)this.ensureArt();else this.removeAttribute('data-assets-ready');
 }
 refreshArt(){
  if(!this.isAgentArt())return;
  this.removeAttribute('data-assets-ready');this.artLoadedUrl=null;delete this.dataset.artDecoded;
  if(this.revealed&&!this.done){this.card.classList.remove('reveal');this.revealed=false;this.revealElapsed=0;this.revealAwaitPaint=false;this.elapsed=this.motionMs;}
  if(this.busy)this.lastFrame=null;
  if(this.managedArt?this.artWanted:this.artNear)this.ensureArt();
 }
 ensureArt(retry=false){
  if(!this.card||!this.isAgentArt())return Promise.resolve(false);
  const url=this.artUrl();if(!url)return Promise.resolve(false);
  if(this.managedArt&&!this.artWanted)return Promise.resolve(false);
  if(this.artDecoded()){this.setAttribute('data-assets-ready','');return Promise.resolve(true);}
  if(this.artPromiseUrl===url&&this.artPromise)return this.artPromise;
  this.artImages ||= new Map();if(retry)this.artImages.delete(url);
  if(!this.artImages.has(url))this.artImages.set(url,decodeAgentArt(url,this.artPriority||'auto'));
  this.artPromiseUrl=url;
  this.artPromise=this.artImages.get(url).then(image=>{
   if(!this.isConnected||this.artUrl()!==url)return false;
   this.shadowRoot.querySelector('.art').replaceChildren(image);
   this.artLoadedUrl=url;this.artError=false;this.dataset.artDecoded='true';
   if(!this.managedArt||this.artWanted)this.setAttribute('data-assets-ready','');
   this.waitingArt=false;this.lastFrame=null;this.emitPhase('art-ready');this.syncClock();return true;
  }).catch(()=>{
   if(this.isConnected&&this.artUrl()===url){this.artError=true;this.waitingArt=false;this.cancelCycle();this.emitPhase('art-error');}
   return false;
  }).finally(()=>{if(this.artPromiseUrl===url){this.artPromise=null;this.artPromiseUrl=null;}});
  return this.artPromise;
 }
 setupMotion(){
  if(this.motionAttached)return;this.motionAttached=true;this.visible=false;
  this.reduce=matchMedia('(prefers-reduced-motion:reduce)');
  this.onMotionState=()=>{if(this.reduce.matches&&this.busy){this.cancelCycle();return;}this.syncClock();};
  document.addEventListener('visibilitychange',this.onMotionState);
  this.reduce.addEventListener('change',this.onMotionState);
  this.io=new IntersectionObserver(entries=>{const e=entries[entries.length-1];this.visible=e.isIntersecting&&e.intersectionRatio>=.6;
   this.syncClock();this.lgVisible(this.visible);
   if(this.visible&&matchMedia('(hover:none), (max-width:991px)').matches&&!this.seen&&!this.reduce.matches&&!this.hasAttribute('data-st-pendiente')){this.seen=true;this.play();}
  },{threshold:[0,.6,1]});this.io.observe(this);
 }

 /* figuras aprobadas de card-13 (contenido, no material): mismas geometrías y etiquetas; MDR conserva la figura de la referencia v7 */
 lgFigures(){
  const host=this,svgNS='http://www.w3.org/2000/svg';
  function add(svg,markup,front=false){const g=document.createElementNS(svgNS,'g');g.setAttribute('class','fx-detail');g.setAttribute('aria-hidden','true');g.innerHTML=markup;if(front)svg.append(g);else svg.prepend(g)}
  if(host.getAttribute('agent')==='mdr')return;

    const s=host.shadowRoot.querySelector('.visual>svg');
    if(!s||s.querySelector('.fx-detail'))return;
    const id=host.getAttribute('agent');
    const original=document.createElementNS(svgNS,'g');original.setAttribute('class','fx-baseline');
    while(s.firstChild)original.append(s.firstChild);s.append(original);
    const labels=[...original.querySelectorAll('text')].map(n=>n.textContent);
    if(!['mdr','vendor','payout'].includes(id)){
      original.classList.add('fx-retained');
      for(const n of original.querySelectorAll('rect.paper')){n.setAttribute('rx','7');}
      let markup='';
      if(id==='superficie'){
        for(const c of original.querySelectorAll('circle.accent'))markup+=`<circle class="fx-halo" cx="${c.getAttribute('cx')}" cy="${c.getAttribute('cy')}" r="7"/>`;
        markup+='<path class="fx-grid" d="M20 7H260M20 103H260"/>';
      }
      if(id==='explorador'){
        for(const c of original.querySelectorAll('circle.accent,circle.soft')){const x=c.getAttribute('cx'),y=c.getAttribute('cy'),r=Number(c.getAttribute('r'));markup+=`<circle class="fx-inlay" cx="${x}" cy="${y}" r="${Math.max(2,r-3)}"/><circle class="fx-core" cx="${x}" cy="${y}" r="1.5"/>`;}
      }
      if(id==='nube')markup='<path class="fx-inlay" d="M26 28H254M26 82H254"/><path class="fx-grid" d="M112 30V80M144 30V80M176 30V80M208 30V80M240 30V80"/>';
      if(id==='correo')markup='<path class="fx-detail-line" d="M42 58H74M122 58H154M202 58H234"/><path class="fx-inlay" d="M36 29H80M116 29H160M196 29H240"/>';
      if(id==='auditoria')markup='<path class="fx-inlay" d="M31 29H73M112 29H154M193 29H235"/><path class="fx-detail-line" d="M37 58H59M118 58H140M199 58H221"/>';
      if(id==='redteam')markup='<path class="fx-inlay" d="M194 22H244V89"/><path class="fx-detail-line" d="M204 67H236M204 76H230M204 84H233"/><circle class="fx-halo" cx="96" cy="35" r="10"/>';
      if(id==='gasto')markup='<path class="fx-grid" d="M18 92H262"/>';
      if(id==='lead')markup='<circle class="fx-disc" cx="161" cy="54" r="15"/><circle class="fx-inlay" cx="161" cy="54" r="8"/><circle class="fx-core" cx="161" cy="54" r="3"/>';
      if(id==='score'){for(let i=0;i<=10;i++){let a=Math.PI+i*Math.PI/10;markup+=`<path class="fx-hair" d="M${140+84*Math.cos(a)} ${94+84*Math.sin(a)}L${140+89*Math.cos(a)} ${94+89*Math.sin(a)}"/>`;}}
      if(id==='alignment')markup='<path class="fx-inlay" d="M27 45a15 15 0 1 0 30 0a15 15 0 1 0-30 0"/><path class="fx-inlay" d="M125 45a15 15 0 1 0 30 0a15 15 0 1 0-30 0"/><path class="fx-inlay" d="M223 45a15 15 0 1 0 30 0a15 15 0 1 0-30 0"/>';
      add(s,markup,true);
    }
    if(false&&id==='mdr'){
      let ticks='';for(let i=0;i<36;i++){const a=i*Math.PI/18;const r=i%3?41:38.5;ticks+=`<path class="fx-hair" d="M${66+r*Math.cos(a)} ${54+r*Math.sin(a)}L${66+43*Math.cos(a)} ${54+43*Math.sin(a)}"/>`}
      add(s,`<circle class="fx-disc" cx="66" cy="54" r="44"/><circle class="fx-grid" cx="66" cy="54" r="32"/><circle class="fx-grid" cx="66" cy="54" r="20"/><circle class="fx-grid" cx="66" cy="54" r="8"/>${ticks}<path class="fx-grid" d="M22 54H110M66 10V98"/><path class="fx-wash" d="M66 54L66 10A44 44 0 0 1 102 29Z"/><path class="fx-route" d="M66 54L86 34"/><circle class="fx-halo" cx="86" cy="34" r="9"/><circle class="fx-core" cx="86" cy="34" r="4"/><circle class="fx-highlight" cx="85" cy="33" r="1.2"/><circle class="fx-dot" cx="44" cy="65" r="2"/><circle class="fx-dot" cx="73" cy="78" r="2"/><rect class="fx-surface" x="133" y="23" width="131" height="64" rx="9"/><path class="fx-grid" d="M144 40H253M144 55H253M144 70H253M165 32V78M196 32V78M227 32V78"/><path class="fx-area" d="M144 59H159L167 49L177 67L188 39L199 61L209 54H253V77H144Z"/><path class="fx-route" d="M144 59H159L167 49L177 67L188 39L199 61L209 54H253"/><circle class="fx-core" cx="188" cy="39" r="3"/><path class="fx-inlay" d="M140 29H257"/>`,true);
    }
    if(id==='vendor'){
      add(s,`<path class="fx-grid fx-link" d="M140 43V56H46V70M140 56V70M140 56H234V70"/><path class="fx-route" d="M140 43V56H234V70"/><rect class="fx-surface" x="111" y="7" width="58" height="36" rx="9"/><path class="fx-inlay" d="M118 12H162"/><text x="140" y="29" text-anchor="middle" class="svgtext">${labels[0]}</text><rect class="fx-surface" x="20" y="70" width="52" height="32" rx="9"/><rect class="fx-surface" x="114" y="70" width="52" height="32" rx="9"/><rect class="fx-surface fx-selected" x="208" y="70" width="52" height="32" rx="9"/><path class="fx-building" d="M36 95V79H56V95M41 83H43M49 83H51M41 88H43M49 88H51M43 95V92H49V95M130 95V79H150V95M135 83H137M143 83H145M135 88H137M143 88H145M137 95V92H143V95"/><path class="fx-selected-icon" d="M226 91V80H242V91M230 84H232M236 84H238M230 88H232M236 88H238M224 94H244"/><circle class="fx-halo" cx="255" cy="74" r="6"/><circle class="fx-core" cx="255" cy="74" r="2"/>`,true);
    }
    if(id==='payout'){
      add(s,`<rect class="fx-surface" x="12" y="20" width="83" height="74" rx="10"/><rect class="fx-surface" x="187" y="20" width="83" height="74" rx="10"/><path class="fx-document" d="M41 48V30H59L67 38V48M59 30V38H67M47 42H59M47 46H59"/><text x="53" y="65" text-anchor="middle" class="svgtext">${labels[0]}</text><path class="fx-detail-line" d="M34 76H72M40 82H66"/><path class="fx-bank" d="M217 44V34H240V44M212 32L228.5 24L245 32ZM211 47H246M219 35V42M228.5 35V42M238 35V42"/><text x="228" y="65" text-anchor="middle" class="svgtext">${labels[1]}</text><path class="fx-detail-line" d="M209 76H247M215 82H241"/><path class="fx-grid" d="M105 55H177"/><path class="fx-route" d="M105 55H177M170 50L177 55L170 60"/><circle class="fx-disc" cx="130" cy="55" r="8"/><circle class="fx-disc" cx="153" cy="55" r="8"/><circle class="fx-core" cx="130" cy="55" r="2.5"/><circle class="fx-core" cx="153" cy="55" r="2.5"/>`,true);
    }
  
  for(const e of this.shadowRoot.querySelectorAll('.fx-detail text')){const n=e.firstChild;if(!n)continue;const pair=Object.entries(this.dictionary||{}).find(([es,en])=>en===n.textContent);this.originalTexts&&this.originalTexts.set(n,pair?pair[0]:n.textContent);}
  this.localize();
 }

 /* ---- Liquid Glass v7 ---- */
 lgSetup(){
  const sr=this.shadowRoot,g=sr.querySelector('.glass');if(!g||this.lgGlass)return;this.lgGlass=g;
  if(!g.querySelector(':scope>.edge-light')){const e=document.createElement('div');e.className='edge-light';e.setAttribute('aria-hidden','true');g.prepend(e);}
  const mi=g.querySelector('.micro');if(mi)mi.classList.add('chip');
  if(this.getAttribute('agent')==='mdr')this.lgRadar(g);else this.lgFigures();
  const n=CysureMockup.lgN=(CysureMockup.lgN||0)+1,id='lg-'+n;this.lgId=id;
  const NS='http://www.w3.org/2000/svg',svg=document.createElementNS(NS,'svg');
  svg.setAttribute('width','0');svg.setAttribute('height','0');svg.setAttribute('aria-hidden','true');svg.setAttribute('class','lg-defs');svg.style.cssText='position:absolute;width:0;height:0;overflow:hidden';
  svg.innerHTML='<filter id="'+id+'" x="0" y="0" width="100%" height="100%" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceGraphic" stdDeviation="20" edgeMode="duplicate" result="b"/><feImage x="0" y="0" preserveAspectRatio="none" result="map"/><feDisplacementMap in="b" in2="map" scale="30" xChannelSelector="R" yChannelSelector="G" result="dR"/><feDisplacementMap in="b" in2="map" scale="32" xChannelSelector="R" yChannelSelector="G" result="dG"/><feDisplacementMap in="b" in2="map" scale="35" xChannelSelector="R" yChannelSelector="G" result="dB"/><feColorMatrix in="dR" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r"/><feColorMatrix in="dG" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g"/><feColorMatrix in="dB" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="bl"/><feBlend in="r" in2="g" mode="screen" result="rg"/><feBlend in="rg" in2="bl" mode="screen" result="rgb"/><feColorMatrix in="rgb" type="saturate" values="1.45" result="c"/><feComponentTransfer in="c"><feFuncR type="linear" slope="1"/><feFuncG type="linear" slope="1"/><feFuncB type="linear" slope="1"/></feComponentTransfer></filter>';
  sr.append(svg);this.lgFilter=svg.querySelector('filter');this.lgTheme();
  /* r3d: si la card ya está en pantalla al montar (recarga, enlace, carga lenta con el usuario ya en la sección), sustituye a un mockup
     visible (cxm o el de antes): no se oculta ni se hace la entrada 3D, pasa directo a reposo/flotación. La entrada queda para las que entran después. */
  if(!this.hasAttribute('data-lg')){const r=this.getBoundingClientRect(),v=r.width>0&&r.height>0&&r.bottom>0&&r.top<innerHeight&&r.right>0&&r.left<innerWidth;this.setAttribute('data-lg',v?'float':'pre');}
  this.lgVeils();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>this.lgVeils());
  const gh=()=>{const sc=this.shadowRoot.querySelector('.scene');if(!sc)return;if(g.offsetHeight)sc.style.setProperty('--lg-gh',g.offsetHeight+'px');const rr=parseFloat(getComputedStyle(sc).borderBottomLeftRadius)||16;if(rr!==this.lgR){this.lgR=rr;sc.style.setProperty('--lg-r',rr+'px');}};gh();
  this.lgRO=new ResizeObserver(()=>{gh();this.lgMap();this.lgVeils();});this.lgRO.observe(g);
  CysureMockup.lgScrollInit();
  if(!CysureMockup.lgResize){CysureMockup.lgResize=1;let t;addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(()=>document.querySelectorAll('cysure-mockup').forEach(h=>h.lgMap&&h.lgMap()),150)});}
 }

 /* r3f: sin velo de lectura (franja/scrim); la legibilidad es el halo pegado al glifo (CSS). Se conserva el método por sus llamadas. */
 lgVeils(){const g=this.lgGlass;if(g)g.querySelectorAll(':scope>.lg-band,:scope>.lg-scrim').forEach(e=>e.remove());}
 lgRadar(g){
  const v=g.querySelector('.visual'),s=v&&v.querySelector(':scope>svg');if(!s||v.querySelector('.radar'))return;
  const NS='http://www.w3.org/2000/svg',kids=[...s.children],wave=kids[kids.length-1];if(kids.length<7)return;
  const box=document.createElement('div');box.className='radar';const rs=document.createElementNS(NS,'svg');rs.setAttribute('viewBox','33 10 88 88');rs.setAttribute('aria-hidden','true');
  kids.slice(0,-1).forEach(k=>rs.append(k));box.append(rs);s.classList.add('waveform');v.insertBefore(box,s);
 }
 /* mitigación de coste: flotan como máximo 2 cards a la vez (las 2 primeras visibles al 60 %, en orden del documento) */
 static lgRun(){const v=[...document.querySelectorAll('cysure-mockup[data-lg="float"][data-lg-vis]')];document.querySelectorAll('cysure-mockup[data-lg-run]').forEach(h=>{if(v.indexOf(h)<0||v.indexOf(h)>1)h.removeAttribute('data-lg-run')});v.slice(0,2).forEach(h=>h.setAttribute('data-lg-run',''));}

 /* r3b · pausa de la lente durante el scroll: mientras hay gesto (rueda, táctil, inercia, teclado, carruseles) el vidrio usa la
    lente SIN desplazamiento en CSS (blur 20 = σ20 del filtro, mismo saturate/brightness), así el cambio sólo afecta a la orilla de 16 px.
    Vuelve a url(#lg-N) cuando se cumplen a la vez 160 ms sin eventos de scroll y 90 ms tras el último scrollend (lo que llegue más tarde) (rueda por saltos: scrollend por tic, no se alterna). Solo cuenta el scroll del documento o de un contenedor que tenga una card con lente (los carruseles automáticos de otras secciones no la apagan); también al perder foco o visibilidad. */
 static lgScrollInit(){
  if(CysureMockup.lgSI)return;CysureMockup.lgSI=1;let t=0,lastS=0,lastE=0;
  const all=()=>document.querySelectorAll('cysure-mockup[data-lens]');
  const ok=e=>{const x=e&&e.target;return !(x&&x!==document&&x!==window&&x.nodeType===1&&!x.querySelector('cysure-mockup[data-lens]'));};
  const due=()=>Math.max(lastS+160,lastE>=lastS?lastE+90:0);
  const end=force=>{clearTimeout(t);if(!CysureMockup.lgScrolling)return;const w=due()-performance.now();if(force!==true&&w>1){t=setTimeout(end,w);return;}CysureMockup.lgScrolling=false;all().forEach(h=>h.lgApply());};
  const on=e=>{if(!ok(e))return;lastS=performance.now();if(!CysureMockup.lgScrolling){CysureMockup.lgScrolling=true;all().forEach(h=>h.lgApply());}clearTimeout(t);t=setTimeout(end,160);};
  const se=e=>{if(!ok(e)||!CysureMockup.lgScrolling)return;lastE=performance.now();clearTimeout(t);t=setTimeout(end,Math.max(1,due()-lastE));};
  addEventListener('scroll',on,{passive:true,capture:true});document.addEventListener('scroll',on,{passive:true,capture:true});
  addEventListener('scrollend',se,{capture:true});document.addEventListener('scrollend',se,{capture:true});
  addEventListener('blur',()=>end(true));document.addEventListener('visibilitychange',()=>end(true));
 }
 lgApply(){
  const g=this.lgGlass;if(!g||!this.hasAttribute('data-lens'))return;
  const v=CysureMockup.lgScrolling?(this.lgDark()?'blur(20px) saturate(1.45)':'blur(20px) saturate(1.3) brightness(1.04)'):'url(#'+this.lgId+')';
  g.style.setProperty('-webkit-backdrop-filter',v,'important');g.style.setProperty('backdrop-filter',v,'important');
  this.toggleAttribute('data-lens-pausa',!!CysureMockup.lgScrolling);
 }
 lgDark(){const sc=this.shadowRoot.querySelector('.scene');return (this.getAttribute('theme')==='dark')!==!!(sc&&sc.classList.contains('inverted'));}
 lgTheme(){const d=this.lgDark(),f=this.lgFilter;if(!f)return;f.querySelector('feColorMatrix[type="saturate"]').setAttribute('values',d?'1.45':'1.30');for(const x of f.querySelectorAll('feComponentTransfer>*'))x.setAttribute('slope',d?'1':'1.04');}
 lgEligible(){return /Chrome|Chromium|Edg/.test(navigator.userAgent)&&!/Android|iPhone|iPad/.test(navigator.userAgent)&&innerWidth>991&&matchMedia('(pointer:fine)').matches&&!!(window.CSS&&CSS.supports('backdrop-filter','url(#lg)'));}
 lgMap(){
  const g=this.lgGlass;if(!g||!this.isConnected)return;
  const ok=this.lgEligible();
  if(!ok){if(this.hasAttribute('data-lens')){this.removeAttribute('data-lens');g.style.removeProperty('backdrop-filter');g.style.removeProperty('-webkit-backdrop-filter');}return;}
  /* Untransformed CSS size. Pixel-centre signed distance to rounded rectangle (referencia v7, literal). */
  const W=Math.round(g.clientWidth),H=Math.round(g.clientHeight);if(!W||!H)return;
  const key=W+'x'+H+'r'+(this.lgR||16);if(this.lgSize===key&&this.hasAttribute('data-lens'))return;
  /* mismo mapa para el mismo tamaño (caché por W×H) y cálculo fuera del hilo crítico (requestIdleCallback); la pintura no cambia */
  const C=CysureMockup.lgMaps||(CysureMockup.lgMaps=new Map());
  if(!C.has(key)){if(this.lgPend===key)return;this.lgPend=key;const ric=window.requestIdleCallback||(f=>setTimeout(f,1));ric(()=>{this.lgPend=null;if(!C.has(key))C.set(key,this.lgBuild(W,H));this.lgMap();},{timeout:600});return;}
  this.lgSize=key;const fe=this.lgFilter.querySelector('feImage');
  fe.setAttribute('width',W);fe.setAttribute('height',H);fe.setAttribute('href',C.get(key));
  this.setAttribute('data-lens','');this.lgApply();
 }
 lgBuild(W,H){
  const r=this.lgR||16,bezel=16;
  const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
  const ctx=canvas.getContext('2d'),im=ctx.createImageData(W,H);
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){
   const px=x+.5-W/2,py=y+.5-H/2;
   const qx=Math.abs(px)-(W/2-r),qy=Math.abs(py)-(H/2-r);
   const ox=Math.max(qx,0),oy=Math.max(qy,0),len=Math.hypot(ox,oy);
   const sd=len+Math.min(Math.max(qx,qy),0)-r,d=-sd;
   let nx,ny;if(len>0){nx=-Math.sign(px)*ox/len;ny=-Math.sign(py)*oy/len;}
   else if(qx>qy){nx=-Math.sign(px);ny=0;}else{nx=0;ny=-Math.sign(py);}
   const t=d>=bezel?0:1-Math.max(0,d)/bezel,k=t*t*t,i=(y*W+x)*4;
   im.data[i]=Math.round(128+nx*127*k);im.data[i+1]=Math.round(128+ny*127*k);im.data[i+2]=0;im.data[i+3]=255;
  }
  ctx.putImageData(im,0,0);return canvas.toDataURL();
 }
 lgVisible(v){
  if(!this.lgGlass)return;this.toggleAttribute('data-lg-vis',!!v);CysureMockup.lgRun();
  if(v&&this.getAttribute('data-lg')==='pre'){
   this.setAttribute('data-lg','in');
   const g=this.lgGlass,end=e=>{if(e&&e.target!==g)return;g.removeEventListener('animationend',end);clearTimeout(this.lgT);if(this.getAttribute('data-lg')==='in')this.setAttribute('data-lg','float');CysureMockup.lgRun();if(this.lgPlayPend){this.lgPlayPend=false;this.play();}};
   g.addEventListener('animationend',end);this.lgT=setTimeout(end,1600);
  }
 }
 emitPhase(phase,completed=false){this.dispatchEvent(new CustomEvent('cysure:sequence-'+phase,{bubbles:true,composed:true,detail:{agent:this.getAttribute('agent'),completed,activeMs:Math.round(this.elapsed||0),motionMs:this.motionMs,revealMs:this.revealMs}}));}
 play(){
  if(this.done||this.busy||!this.card||this.hasAttribute('data-st-pendiente'))return;
  if(this.reduce.matches){if(this.isAgentArt()){const intent=this.artIntent=(this.artIntent||0)+1;this.ensureArt(!!this.artError).then(ok=>{if(ok&&this.isConnected&&this.reduce.matches&&this.artIntent===intent)this.card.classList.toggle('reveal');});}else this.card.classList.toggle('reveal');return;}
  if(this.lgGlass&&/^(pre|in)$/.test(this.getAttribute('data-lg')||'')){this.lgPlayPend=true;return;} /* r3f: espera a que termine la entrada 3D */
  if(this.isAgentArt())this.ensureArt(!!this.artError);this.waitingArt=false;
  this.motionMs=5000;this.revealMs=2000;this.elapsed=0;this.lastFrame=null;this.stage=-1;this.revealed=false;this.revealElapsed=0;this.revealAwaitPaint=false;this.busy=true;
  this.card.classList.add('running');this.emitPhase('start');this.syncClock();
 }
 syncClock(){
  if(!this.busy)return;
  const paused=document.hidden||!this.visible||this.waitingArt;
  this.card.classList.toggle('paused',paused);
  if(paused){if(this.frame!=null)cancelAnimationFrame(this.frame);this.frame=null;this.lastFrame=null;return;}
  if(this.frame==null)this.frame=requestAnimationFrame(now=>this.advanceFrame(now));
 }
 advanceFrame(now){
  this.frame=null;if(!this.busy)return;
  if(document.hidden||!this.visible){this.syncClock();return;}
  const delta=this.lastFrame==null?0:now-this.lastFrame;this.lastFrame=now;
  if(this.revealed){
   if(this.revealAwaitPaint){this.revealAwaitPaint=false;this.syncClock();return;}
   this.revealElapsed+=delta;this.elapsed=this.motionMs+this.revealElapsed;
  }else this.elapsed+=delta;
  if(this.getAttribute('agent')==='alignment'){
   const stage=Math.min(2,Math.floor(this.elapsed/(this.motionMs/3)));
   if(stage!==this.stage){this.stage=stage;const texts=this.english?['I · Detect the signal','II · Verify evidence','III · Check coverage alignment']:['I · Detectar la señal','II · Verificar evidencia','III · Revisar coincidencia con cobertura'];
    this.shadowRoot.querySelector('.sub').textContent=texts[stage];this.shadowRoot.querySelectorAll('.visual circle').forEach((r,i)=>r.setAttribute('class',stage===i?'signal':'track'));
   }
  }
  if(this.elapsed>=this.motionMs&&!this.revealed){if(this.isAgentArt()&&!this.artDecoded()){this.elapsed=this.motionMs;this.waitingArt=true;this.lastFrame=null;this.ensureArt();this.syncClock();return;}this.elapsed=this.motionMs;this.revealElapsed=0;this.revealed=true;this.revealAwaitPaint=true;this.card.classList.add('reveal');this.emitPhase('reveal');this.syncClock();return;}
  if(this.revealed&&this.revealElapsed>=this.revealMs){this.card.classList.remove('running','paused');this.done=true;this.card.classList.add('cy-fin');this.localize();this.shadowRoot.querySelectorAll('[data-id="alignment"] .visual circle').forEach((r,i)=>r.setAttribute('class',i===1?'signal':'track'));this.busy=false;this.lastFrame=null;this.emitPhase('end',true);return;}
  this.syncClock();
 }
 cancelCycle(){if(this.frame!=null)cancelAnimationFrame(this.frame);this.frame=null;this.lastFrame=null;const fin=this.busy&&this.revealed;this.busy=false;this.waitingArt=false;if(fin){this.done=true;this.card?.classList.add('cy-fin');}this.card?.classList.remove('running','paused');if(!this.done)this.card?.classList.remove('reveal');if(this.card)this.localize();}
 disconnectedCallback(){this.lgRO?.disconnect();this.io?.disconnect();this.assetIO?.disconnect();this.timers.forEach(clearTimeout);this.cancelCycle();document.removeEventListener('visibilitychange',this.onMotionState);this.reduce?.removeEventListener('change',this.onMotionState);this.motionAttached=false;}
}
if(!customElements.get('cysure-mockup'))customElements.define('cysure-mockup',CysureMockup);
