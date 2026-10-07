/* st-mockups-adapter-v9.js · v9 r3e (5 oct 2026, feedback iPhone y escritorio de Toño): en la ruta genérica (11 claves) el componente v7
   se monta encima del hueco del embed, invisible (opacity 0, sin eventos, data-st-pendiente), y se funde cuando está completo: .card +
   hoja + fuentes + arte decodificado + vidrio en reposo, con dos fotogramas pintados. Fundido de 180 ms si ocupa la misma caja (±2 px),
   si no un solo fotograma; con prefers-reduced-motion, un solo fotograma; fuera de pantalla, inmediato. El article.cxm heredado (diseño
   retirado) NO se ve nunca: lo oculta cy-mockups-cysure-v25.css desde la cabecera y aquí solo sirve para medir la caja reservada.
   Fallo seguro: sin .card a los 8 s se retira el componente y queda el espacio reservado (nunca el diseño retirado). Tras el cambio se
   vuelve a observar el IO del componente. Score/payout: ruta transaccional v7/v8 sin cambios. */
/* st-mockups-adapter-v8.js · v8 (20 sep 2026): ruta transaccional tambien para payout (ver bloque H/TPLS). Sin otro cambio.
   st-mockups-adapter-v7.js · Cysure LP · monta los 13 <cysure-mockup> v3 en /como-funciona
   v7 (2026-09-20, H2-b, DIAGNOSTICO-MAESTRO-LEGACY-SCORE-PUB83-20SEP.md): montaje TRANSACCIONAL de score. El embed ya no
   trae el maestro legacy en <img> (va en <template data-st-score-art-fallback> + <noscript>, sin descarga). El article.cxm
   viejo se conserva mientras el componente nuevo (oculto, display:none) no tenga .card + .scene y la hoja (≥20 reglas) en su shadow; entonces se retira
   el viejo y se muestra el nuevo (no se espera a data-assets-ready). Si el módulo no importa, el componente no termina
   (8 s, MutationObserver finito sobre el shadow) o falta la plantilla, window.__stScoreArt.restaura() (pie LP v19) repone
   la lámina -p-N del tema/encuadre activo en el article viejo y retira el componente incompleto; el embed queda marcado
   data-st-mock="fallback" y no se vuelve a reemplazar en esa carga. La caja para elegir -p-N sigue siendo anchoEmbed×440
   (igual que v6, que medía el embed vacío). Sin cambios para las otras 12 claves ni para score sin template (camino v6).
   v6 (2026-09-20, H2 publish 83): variante responsive del arte "vigente" de score (PL-oraculo-score / PL-oraculo-score-m,
   ambos temas). El componente pinta el arte como background (cover) de la .scene y lo descarga al entrar en viewport
   (data-assets-ready); v5 le pasaba el maestro (2880×3840 = 721 KB / 3840×2400 = 538 KB). v6 elige la variante -p-N del
   CDN de Webflow (500·800·1080·1600·2000·2600, +3200 en apaisado) al asignar art-day/art-night, ANTES de la descarga:
   ancho necesario = max(anchoCaja, altoCaja×aspecto) × devicePixelRatio (matemática de cover; aspecto 0,75 vertical,
   1,6 apaisado). Se recalcula por el mismo camino de siempre (cruce 680 y 991); sin observadores nuevos. Mismo encuadre:
   las variantes conservan el aspecto del maestro y --pos no cambia. Otras claves: sin cambio respecto a v5.
   v5 (2026-09-18, FEEDBACK-SEGUNDA punto 5 + DECISIONES-TONO-IMPACT-PAYOUT-CARTA-18SEP.md): (a) solo se monta el arbol
   activo (.st-mb a <=991, #top.st-dt a >=992; RENDIMIENTO-Y-RENDER-18SEP.md §4: 13 componentes en vez de 26, la mitad de
   observadores y copias de CSS); al cruzar 991 se monta el otro arbol (idempotente). (b) par movil aprobado de payout:
   manifiesto arte.payout.movil={dia,noche} → art-day/art-night SOLO en telefono (<=680) y arbol movil; el template lleva
   .scene.inverted, asi que art-day (fichero light) se ve con el sitio en NOCHE y art-night (fichero dark) con el sitio en DIA
   (inversion de temas decidida por Tono). Por encima de 680 se retiran los atributos y vuelven los --day/--night del template.
   v4 (2026-09-18, Integración Max; REENCUADRES-APROBADOS-18SEP.json, VoBo Toño): posMovil del manifiesto se aplica en
   teléfono (≤680) también sin claveMovil y en modo "paquete" (mdr, superficie, explorador, correo, redteam) → --pos de la
   .scene del shadow, ambos temas; al cruzar 680 se restaura el --pos del template. Sin más cambios respecto a v3.
   v3 (2026-09-18, Integración Max; D-1 retest pub65): claveMovil solo en teléfono (max-width: 680px), no en todo
   .st-mb (que llega a 991 y recortaba el arte vertical 1024×1536 en 681–991). Al cruzar la cota se reaplica el arte
   y se fija --pos o se restaura el del template. v2: arte vigente móvil con encuadre propio: si el manifiesto trae posMovil y se usa
   claveMovil, fija --pos en la .scene del shadow (gana al --pos inline del template). Sin más cambios respecto a v1.
   Requiere antes: <script>window.CY_MOCK_MANIFEST={…}</script> (snippet-pagina.html).
   Hace: (1) importa cy-mockups-v3.js desde la URL del manifiesto; (2) por cada [data-cy-mockup] crea
   <cysure-mockup agent theme lang art-day art-night>, retira el article.cxm viejo de ESE consumidor y
   marca data-st-mock="v3"; (3) CapV móvil: monta en el marco visible [data-cy-capvg], no en el embed
   oculto; (4) tema: html[data-cy-theme] dia→light, noche→dark, con MutationObserver; (5) idioma:
   main[data-cy-lang] / html[lang] / ruta, con MutationObserver; (6) arte: modo "paquete" (asset subido)
   o "vigente" (window.CY_ARTE[clave].dia/noche; clave móvil solo en .st-mb Y ≤680 px, con posMovil opcional).
   No reimplementa secuencia, revelado ni reduced-motion: los trae el componente. Idempotente. */
(async function(){
  'use strict';
  const M = window.CY_MOCK_MANIFEST;
  if (!M || !M.module || !M.module.url) { console.warn('[st-mockups] falta CY_MOCK_MANIFEST.module.url'); return; }
  const IDS = ['mdr','superficie','explorador','nube','correo','auditoria','redteam','vendor','gasto','lead','score','alignment','payout'];
  const html = document.documentElement;
  const mqTel = window.matchMedia('(max-width: 680px)');                 // teléfono: única cota donde va el arte vertical
  const mqMb  = window.matchMedia('(max-width: 991px)');                 // v5: árbol activo (.st-mb ≤991, #top.st-dt ≥992)

  const themeOf = () => {
    const v = (html.getAttribute('data-cy-theme') || '').toLowerCase();
    return (v === 'noche' || v === 'dark') ? 'dark' : 'light';            // dia|light|'' -> light
  };
  const langOf = () => {
    const main = document.querySelector('main[data-cy-lang]');
    const v = (main && main.getAttribute('data-cy-lang')) || html.lang || (location.pathname.startsWith('/en') ? 'en' : 'es');
    return String(v).toLowerCase().startsWith('en') ? 'en' : 'es';
  };
  const arteDe = (id, movil) => {
    const a = (M.arte || {})[id];
    if (!a) return null;
    const posTel = (movil && mqTel.matches && a.posMovil) ? a.posMovil : null;   // v4: encuadre móvil propio (≤680)
    if (a.modo !== 'vigente') {                                           // "paquete": el template ya trae el asset subido
      const mv = a.movil;                                                 // v5: par móvil aprobado (payout), solo ≤680 y árbol móvil
      if (movil && mqTel.matches && mv && mv.dia && mv.noche) return { day: mv.dia, night: mv.noche, pos: posTel };
      return { pos: posTel, quitar: !!mv };                               // fuera de teléfono: sin atributos → --day/--night del template
    }
    const mapa = window.CY_ARTE || {};
    const k = (movil && mqTel.matches && a.claveMovil && mapa[a.claveMovil]) ? a.claveMovil : a.clave;
    const e = mapa[k];
    if (!e || !e.dia || !e.noche) return { pendiente: k };                // CY_ARTE aún no cargado: se reintenta
    return { day: e.dia, night: e.noche, clave: k, pos: (a.claveMovil && k !== a.claveMovil) ? null : posTel };   // con claveMovil, el encuadre va con el arte vertical
  };
  const ponPos = (el, n) => {                                             // la .scene existe tras `ready` del componente
    const s = el.shadowRoot && el.shadowRoot.querySelector('.scene');
    if (s) {                                                              // el template trae --pos inline en .scene: se guarda y se restaura
      if (s.dataset.stPosOrig === undefined) s.dataset.stPosOrig = s.style.getPropertyValue('--pos');
      if (el.dataset.stMockPos) s.style.setProperty('--pos', el.dataset.stMockPos);
      else if (s.dataset.stPosOrig) s.style.setProperty('--pos', s.dataset.stPosOrig); else s.style.removeProperty('--pos');
      return;
    }
    if ((n || 0) < 60) setTimeout(() => ponPos(el, (n || 0) + 1), 100);
  };

  // v6: variante -p-N del CDN para el arte vigente de score (solo estas dos claves; el resto sigue con su URL tal cual)
  const VAR = { 'PL-oraculo-score': { asp: 1.6, esc: [500, 800, 1080, 1600, 2000, 2600, 3200] },
                'PL-oraculo-score-m': { asp: 0.75, esc: [500, 800, 1080, 1600, 2000, 2600] } };
  const cajaDe = (el) => {                                                // el <cysure-mockup> aún no está en el DOM en crea(): se mide el anfitrión
    let r = el.getBoundingClientRect();
    if (!(r.width > 0) && el.__stCaja) r = el.__stCaja.getBoundingClientRect();
    return { w: r.width > 0 ? r.width : Math.min(window.innerWidth, 1619), h: el.__stAlto || (r.height > 0 ? r.height : 440) };   // 440 = alto de la .scene del template; v7: el anfitrión aún tiene el article viejo → alto fijo
  };
  const variante = (url, el, k) => {
    const v = VAR[k];
    if (!v || typeof url !== 'string' || !/\.webp$/i.test(url) || /-p-\d+\.webp$/i.test(url)) return url;
    const c = cajaDe(el), dpr = Math.min(window.devicePixelRatio || 1, 3);
    const nec = Math.ceil(Math.max(c.w, c.h * v.asp) * dpr);            // cover: gana el eje que más amplía
    const n = v.esc.find(x => x >= nec);
    el.dataset.stMockVar = n ? String(n) : 'maestro';
    return n ? url.replace(/\.webp$/i, '-p-' + n + '.webp') : url;
  };

  // v8 (2026-09-20, payout-rendimiento §3.3): la ruta transaccional de v7 (el viejo se queda hasta que el nuevo tenga .card, 8 s)
  // se aplica tambien a payout cuando su embed trae <template data-st-payout-art-fallback> y existe window.__stPayoutArt.
  // Score sigue exactamente igual (mismo objeto, misma plantilla, mismo plazo). Cierra la carrera: en estado "fallback" la ruta
  // generica retiraba el article repuesto y montaba un componente sin vigilancia.
  const H = { score: window.__stScoreArt, payout: window.__stPayoutArt };   // respaldos nativos (pie LP)
  const TPLS = { score: ':scope > article.cxm template[data-st-score-art-fallback]', payout: ':scope > article.cxm template[data-st-payout-art-fallback]' };
  const conRespaldo = (embed, id) => !!(H[id] && embed.querySelector(TPLS[id]));
  const caeRespaldo = (motivo) => { for (const id of ['score','payout']) if (H[id]) document.querySelectorAll('[data-cy-mockup="' + id + '"]').forEach(e => { if (e.querySelector(TPLS[id])) H[id].restaura(e, motivo); }); };
  try { await import(M.module.url); } catch (e) { console.warn('[st-mockups] no cargó el módulo', e); caeRespaldo('modulo'); return; }
  await customElements.whenDefined('cysure-mockup');

  const montados = [];
  function crea(id, movil, caja, el) {
    el = el || document.createElement('cysure-mockup');                  // v7: montaScore trae el elemento con __stAlto
    el.setAttribute('agent', id); el.setAttribute('theme', themeOf()); el.setAttribute('lang', langOf());
    el.dataset.stMockMovil = movil ? '1' : '0';
    if (caja) el.__stCaja = caja;                                         // v6: anfitrión (embed o marco) para medir la caja antes de montar
    aplicaArte(el);
    montados.push(el); return el;
  }
  function aplicaArte(el) {
    const r = arteDe(el.getAttribute('agent'), el.dataset.stMockMovil === '1');
    if (!r) return;
    if (r.pendiente) { el.dataset.stMockArte = 'pendiente:' + r.pendiente; return; }
    if (r.day) {                                                          // v4: en modo "paquete" solo llega pos (v5: o el par móvil)
      const day = variante(r.day, el, r.clave), night = variante(r.night, el, r.clave);   // v6: -p-N antes de la descarga
      if (el.getAttribute('art-day') !== day) el.setAttribute('art-day', day);
      if (el.getAttribute('art-night') !== night) el.setAttribute('art-night', night);
      delete el.dataset.stMockArte;
    } else if (r.quitar) {                                                // v5: vuelta por encima de 680 → el template recupera su arte
      if (el.hasAttribute('art-day')) el.removeAttribute('art-day');
      if (el.hasAttribute('art-night')) el.removeAttribute('art-night');
    }
    if (r.pos) { el.dataset.stMockPos = r.pos; ponPos(el); }
    else if (el.dataset.stMockPos) { delete el.dataset.stMockPos; ponPos(el); }   // vuelta al arte apaisado: --pos del template
  }
  function monta(embed) {
    const id = embed.getAttribute('data-cy-mockup');
    if (!IDS.includes(id) || embed.getAttribute('data-st-mock') === 'v3') return;
    const movil = !!embed.closest('.st-mb');
    if (movil !== mqMb.matches) return;                                   // v5: árbol inactivo, no se monta (se montará al cruzar 991)
    const oculto = getComputedStyle(embed).display === 'none';
    const marco = movil && oculto && id === 'alignment' ? embed.closest('[data-cy-capvg]') : null;
    if (marco) {                                                          // CapV móvil: marco visible, embed oculto
      if (marco.querySelector(':scope > cysure-mockup')) return;
      for (const h of marco.children) if (h !== embed && !h.matches('cysure-mockup')) {
        h.setAttribute('data-st-mock-old', '');
        h.style.setProperty('display', 'none', 'important');            // st-capv-astra-css fija display con selector de ID: solo gana el inline
      }
      for (const viejo of embed.querySelectorAll(':scope > article.cxm')) viejo.remove();   // el embed oculto tampoco conserva el mockup viejo
      marco.prepend(crea(id, true, marco)); marco.setAttribute('data-st-mock', 'v3');
      embed.setAttribute('data-st-mock', 'v3'); return;
    }
    if (embed.querySelector('cysure-mockup')) return;
    if ((id === 'score' || id === 'payout') && conRespaldo(embed, id)) { montaRespaldo(embed, movil, id); return; }   // v7/v8: transaccional
    const viejos = [...embed.querySelectorAll(':scope > article.cxm')].filter(v => v.getBoundingClientRect().height > 0);
    if (!viejos.length) {                                                // sin estático visible: como v8
      embed.appendChild(crea(id, movil, embed));
      embed.setAttribute('data-st-mock', 'v3');
      const card = embed.closest('[data-st-ag]'); if (card) card.setAttribute('data-st-mock', 'v3');
      return;
    }
    montaSinHueco(embed, movil, id, viejos);                             // v9
  }
  const rmq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const enVista = (el) => { const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth; };
  const fuentesOk = () => { try { return document.fonts.check('500 16px "Space Grotesk"') && document.fonts.check('400 16px "DM Sans"'); } catch (e) { return true; } };
  function montaSinHueco(embed, movil, id, viejos) {
    const nuevo = crea(id, movil, embed);
    const posOrig = embed.style.getPropertyValue('position');
    if (getComputedStyle(embed).position === 'static') embed.style.setProperty('position', 'relative');
    const v0 = viejos[0], er = embed.getBoundingClientRect(), vr = v0.getBoundingClientRect();
    nuevo.setAttribute('data-st-pendiente', '');
    nuevo.style.cssText += ';position:absolute;left:' + (vr.left - er.left) + 'px;top:' + (vr.top - er.top) + 'px;width:' + vr.width + 'px;opacity:0;pointer-events:none;z-index:2';
    embed.appendChild(nuevo);
    embed.setAttribute('data-st-mock', 'v3-pendiente');
    const t0 = performance.now(); let hecho = false;
    const listo = () => {
      const sr = nuevo.shadowRoot; if (!sr) return false;
      const c = sr.querySelector('.card'), g = sr.querySelector('.glass'); if (!c || !g || !sr.querySelector('style')) return false;
      if (!fuentesOk()) return false;
      const agente = ['mdr','superficie','explorador','nube','correo','auditoria','redteam','vendor','gasto'].includes(id);
      if (agente ? !nuevo.hasAttribute('data-art-decoded') : !nuevo.hasAttribute('data-assets-ready')) return false;
      const lg = nuevo.getAttribute('data-lg'); return !lg || lg === 'float' || lg === 'pre';
    };
    const fin = (fundido) => {
      if (hecho) return; hecho = true;
      const quita = () => {
        for (const v of embed.querySelectorAll(':scope > article.cxm')) v.remove();
        nuevo.style.removeProperty('position'); nuevo.style.removeProperty('left'); nuevo.style.removeProperty('top'); nuevo.style.removeProperty('width');
        nuevo.style.removeProperty('opacity'); nuevo.style.removeProperty('pointer-events'); nuevo.style.removeProperty('z-index'); nuevo.style.removeProperty('transition');
        if (posOrig) embed.style.setProperty('position', posOrig); else embed.style.removeProperty('position');
        nuevo.removeAttribute('data-st-pendiente'); embed.setAttribute('data-st-mock', 'v3');
        const card = embed.closest('[data-st-ag]'); if (card) card.setAttribute('data-st-mock', 'v3');
        try { if (nuevo.io) { nuevo.io.unobserve(nuevo); nuevo.io.observe(nuevo); } } catch (e) {}
      };
      if (!fundido) { quita(); return; }
      nuevo.style.setProperty('transition', 'opacity 180ms linear'); requestAnimationFrame(() => { nuevo.style.setProperty('opacity', '1');
        setTimeout(() => requestAnimationFrame(quita), 190); });
    };
    const mira = () => {
      if (hecho) return;
      const sr = nuevo.shadowRoot, tieneCard = !!(sr && sr.querySelector('.card'));
      if (!tieneCard && performance.now() - t0 > 8000) {                // fallo seguro: queda el espacio reservado (el cxm lo oculta v25)
        hecho = true; nuevo.remove(); const i = montados.indexOf(nuevo); if (i >= 0) montados.splice(i, 1);
        if (posOrig) embed.style.setProperty('position', posOrig); else embed.style.removeProperty('position');
        embed.setAttribute('data-st-mock', 'fallback-v9'); return;
      }
      if (tieneCard && !enVista(embed)) { fin(false); return; }          // fuera de pantalla: cambio inmediato
      if (listo()) {
        requestAnimationFrame(() => requestAnimationFrame(() => {        // dos fotogramas: hoja, arte y vidrio pintados
          if (hecho) return;
          const nr = nuevo.getBoundingClientRect(), mismo = Math.abs(nr.height - vr.height) <= 2 && Math.abs(nr.width - vr.width) <= 2;
          fin(mismo && !rmq.matches);
        }));
        return;
      }
      setTimeout(mira, 80);
    };
    mira();
  }
  function montaRespaldo(embed, movil, id) {                              // v7: el viejo se queda hasta que el nuevo tenga .card (v8: score y payout)
    const SA = H[id];
    if (embed.getAttribute('data-st-mock') === 'fallback') return;      // ya cayó al respaldo en esta carga: no se reemplaza otra vez
    const el = document.createElement('cysure-mockup'); el.__stAlto = 440;
    const nuevo = crea(id, movil, embed, el);
    nuevo.setAttribute('data-st-pendiente', ''); nuevo.style.setProperty('display', 'none', 'important');
    embed.appendChild(nuevo);
    let hecho = false, mo = null, t = 0;
    const cierra = () => { hecho = true; if (mo) mo.disconnect(); clearTimeout(t); };
    const listo = () => {
      if (hecho || !nuevo.isConnected) return false;
      if (!SA.terminado(nuevo)) return false;                            // .card + .scene + hoja (≥20 reglas): un solo criterio, el del pie (fetch 500 de la hoja → texto vacío)
      cierra();
      for (const viejo of embed.querySelectorAll(':scope > article.cxm')) viejo.remove();
      nuevo.style.removeProperty('display'); nuevo.removeAttribute('data-st-pendiente');
      embed.setAttribute('data-st-mock', 'v3');
      const card = embed.closest('[data-st-ag]'); if (card) card.setAttribute('data-st-mock', 'v3');
      return true;
    };
    if (listo()) return;
    if (nuevo.shadowRoot) { mo = new MutationObserver(listo); mo.observe(nuevo.shadowRoot, { childList: true }); }
    t = setTimeout(() => { if (hecho) return; if (listo()) return; cierra(); const i = montados.indexOf(nuevo); if (i >= 0) montados.splice(i, 1); SA.restaura(embed, 'timeout'); }, 8000);
  }
  const montaTodos = () => document.querySelectorAll('[data-cy-mockup]').forEach(monta);
  montaTodos();

  // tema / idioma en vivo (sin recarga)
  const sync = () => { const t = themeOf(), l = langOf(); for (const el of montados) { if (el.getAttribute('theme') !== t) el.setAttribute('theme', t); if (el.getAttribute('lang') !== l) el.setAttribute('lang', l); } };
  new MutationObserver(sync).observe(html, { attributes: true, attributeFilter: ['data-cy-theme', 'lang'] });
  const main = document.querySelector('main[data-cy-lang]');
  if (main) new MutationObserver(sync).observe(main, { attributes: true, attributeFilter: ['data-cy-lang'] });
  window.addEventListener('pageshow', sync);                              // navegación de vuelta (bfcache)
  mqTel.addEventListener('change', () => montados.forEach(aplicaArte));  // cruce 680: arte vertical ↔ apaisado
  mqMb.addEventListener('change', montaTodos);                            // v5: cruce 991: monta el árbol que pasa a estar activo

  // arte vigente: si CY_ARTE llegó después, reintentar unos segundos y soltar
  let intentos = 0;
  const reintento = setInterval(() => {
    const pend = montados.filter(el => el.dataset.stMockArte);
    pend.forEach(aplicaArte);
    if (!pend.length || ++intentos > 20) clearInterval(reintento);
  }, 250);

  // anclajes que el boot añada tarde (una sola pasada diferida, sin observador permanente)
  setTimeout(montaTodos, 1500);
  window.__stMockups = { montados, sync, montaTodos, version: 'v9' };
})();
