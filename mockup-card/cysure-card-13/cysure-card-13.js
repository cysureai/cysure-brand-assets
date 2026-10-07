/* Portable proposal: CSS injected into existing v5 components. No runtime replacement.
   CSS text is provided as window.CY_FROST_CSS, or loaded from cysure-card-13.css. */
(() => {
  const ids=new Set(['mdr','superficie','explorador','nube','correo','auditoria','redteam','vendor','gasto','lead','score','alignment','payout']);
  const css=window.CY_FROST_CSS?Promise.resolve(window.CY_FROST_CSS):fetch(new URL('cysure-card-13.css',document.currentScript.src)).then(r=>{if(!r.ok)throw new Error('Frost CSS not available');return r.text()}).catch(e=>{console.warn(e.message);return ''});
  const svgNS='http://www.w3.org/2000/svg';
  function add(svg,markup,front=false){const g=document.createElementNS(svgNS,'g');g.setAttribute('class','fx-detail');g.setAttribute('aria-hidden','true');g.innerHTML=markup;if(front)svg.append(g);else svg.prepend(g)}
  function details(host){
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
      if(id==='alignment')markup='<circle class="fx-inlay" cx="42" cy="45" r="15"/><circle class="fx-inlay" cx="140" cy="45" r="15"/><circle class="fx-inlay" cx="238" cy="45" r="15"/>';
      add(s,markup,true);
    }
    if(id==='mdr'){
      let ticks='';for(let i=0;i<36;i++){const a=i*Math.PI/18;const r=i%3?41:38.5;ticks+=`<path class="fx-hair" d="M${66+r*Math.cos(a)} ${54+r*Math.sin(a)}L${66+43*Math.cos(a)} ${54+43*Math.sin(a)}"/>`}
      add(s,`<circle class="fx-disc" cx="66" cy="54" r="44"/><circle class="fx-grid" cx="66" cy="54" r="32"/><circle class="fx-grid" cx="66" cy="54" r="20"/><circle class="fx-grid" cx="66" cy="54" r="8"/>${ticks}<path class="fx-grid" d="M22 54H110M66 10V98"/><path class="fx-wash" d="M66 54L66 10A44 44 0 0 1 102 29Z"/><path class="fx-route" d="M66 54L86 34"/><circle class="fx-halo" cx="86" cy="34" r="9"/><circle class="fx-core" cx="86" cy="34" r="4"/><circle class="fx-highlight" cx="85" cy="33" r="1.2"/><circle class="fx-dot" cx="44" cy="65" r="2"/><circle class="fx-dot" cx="73" cy="78" r="2"/><rect class="fx-surface" x="133" y="23" width="131" height="64" rx="9"/><path class="fx-grid" d="M144 40H253M144 55H253M144 70H253M165 32V78M196 32V78M227 32V78"/><path class="fx-area" d="M144 59H159L167 49L177 67L188 39L199 61L209 54H253V77H144Z"/><path class="fx-route" d="M144 59H159L167 49L177 67L188 39L199 61L209 54H253"/><circle class="fx-core" cx="188" cy="39" r="3"/><path class="fx-inlay" d="M140 29H257"/>`,true);
    }
    if(id==='vendor'){
      add(s,`<path class="fx-grid fx-link" d="M140 43V56H46V70M140 56V70M140 56H234V70"/><path class="fx-route" d="M140 43V56H234V70"/><rect class="fx-surface" x="111" y="7" width="58" height="36" rx="9"/><path class="fx-inlay" d="M118 12H162"/><text x="140" y="29" text-anchor="middle" class="svgtext">${labels[0]}</text><rect class="fx-surface" x="20" y="70" width="52" height="32" rx="9"/><rect class="fx-surface" x="114" y="70" width="52" height="32" rx="9"/><rect class="fx-surface fx-selected" x="208" y="70" width="52" height="32" rx="9"/><path class="fx-building" d="M36 95V79H56V95M41 83H43M49 83H51M41 88H43M49 88H51M43 95V92H49V95M130 95V79H150V95M135 83H137M143 83H145M135 88H137M143 88H145M137 95V92H143V95"/><path class="fx-selected-icon" d="M226 91V80H242V91M230 84H232M236 84H238M230 88H232M236 88H238M224 94H244"/><circle class="fx-halo" cx="255" cy="74" r="6"/><circle class="fx-core" cx="255" cy="74" r="2"/>`,true);
    }
    if(id==='payout'){
      add(s,`<rect class="fx-surface" x="12" y="20" width="83" height="74" rx="10"/><rect class="fx-surface" x="187" y="20" width="83" height="74" rx="10"/><path class="fx-document" d="M41 48V30H59L67 38V48M59 30V38H67M47 42H59M47 46H59"/><text x="53" y="65" text-anchor="middle" class="svgtext">${labels[0]}</text><path class="fx-detail-line" d="M34 76H72M40 82H66"/><path class="fx-bank" d="M217 44V34H240V44M212 32L228.5 24L245 32ZM211 47H246M219 35V42M228.5 35V42M238 35V42"/><text x="228" y="65" text-anchor="middle" class="svgtext">${labels[1]}</text><path class="fx-detail-line" d="M209 76H247M215 82H241"/><path class="fx-grid" d="M105 55H177"/><path class="fx-route" d="M105 55H177M170 50L177 55L170 60"/><circle class="fx-disc" cx="130" cy="55" r="8"/><circle class="fx-disc" cx="153" cy="55" r="8"/><circle class="fx-core" cx="130" cy="55" r="2.5"/><circle class="fx-core" cx="153" cy="55" r="2.5"/>`,true);
    }
  }
  async function mount(host){
    if(!host||host.tagName!=='CYSURE-MOCKUP'||!ids.has(host.getAttribute('agent')))return;
    const sr=host.shadowRoot;if(!sr?.querySelector('.card')||sr.getElementById('cy-frost-proposal'))return;
    const text=await css;if(sr.getElementById('cy-frost-proposal'))return;
    if(!text.trim()){host.dataset.frostReady='';host.dataset.frostError='css';return;}
    const st=document.createElement('style');st.id='cy-frost-proposal';st.textContent=text;sr.append(st);details(host);
    /* New SVG labels enter the existing bilingual runtime with canonical ES. */
    for(const e of sr.querySelectorAll('.fx-detail text')){
      const n=e.firstChild;if(!n)continue;
      const pair=Object.entries(host.dictionary||{}).find(([es,en])=>en===n.textContent);
      host.originalTexts?.set(n,pair?pair[0]:n.textContent);
    }
    host.localize?.();
    host.dataset.frostReady='';host.dispatchEvent(new CustomEvent('cysure:frost-ready',{bubbles:true}));
  }
  document.addEventListener('cysure:art-owner-ready',e=>mount(e.target),true);
  document.querySelectorAll('cysure-mockup').forEach(mount);
})();
