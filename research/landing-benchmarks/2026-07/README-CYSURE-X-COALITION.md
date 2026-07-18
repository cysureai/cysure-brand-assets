# README · Landing cysure.ai con la estructura de Coalition

**Para la sesión que va a construir la landing.** Este documento es el brief completo: la auditoría exhaustiva de coalitioninc.com (estructura, estilo, medidas, copy, componentes, motion), el mapeo elemento por elemento hacia el design system de Cysure, y el blueprint final sección por sección con copy es-MX propuesto. La premisa: **la arquitectura, jerarquía y patrones de conversión son de Coalition; la piel (tokens, tipografía, color, voz) es 100% Cysure.** Como si las dos compañías hubieran diseñado juntas.

**Antes de escribir una línea de código:**
1. Carga el skill `cysure-brand` y lee `references/landing.md` + `references/product-ui.md` + `references/voice.md`. El Design System (`assets/design-system/`) manda sobre cualquier cosa que diga este README si llegan a diferir.
2. Copia `assets/design-system/` al proyecto y linkea `styles.css` (trae fonts y tokens).
3. Ten a la mano la evidencia visual: `shots/coalition-*.jpg` (17 capturas) y `data/coalition.json` + `data/coalition-deep.json` (medidas crudas).

---

# PARTE 1 · Auditoría exhaustiva de Coalition

Auditada en vivo (2026-07-17, viewport 1440x900, Chromium). Coalition es la referencia de categoría "Active Insurance": seguro cyber + seguridad activa en un solo producto. Su landing es sobria, editorial y convierte con doble audiencia (brokers y empresas).

## 1.1 Arquitectura general de la página

El patrón maestro: **la página es una pila de "section cards" full-bleed con esquinas muy redondeadas (48-50px) que alternan tres fondos**: blanco, negro #000000 y gris claro #f5f5f3. El contenido vive en un container centrado de **1196-1296px** con padding vertical de **64-96px** por sección. El negro nunca es una franja cuadrada: siempre es una tarjeta gigante redondeada flotando sobre el blanco de la página. Ese gesto (bloques redondeados alternados) es el 80% de su personalidad visual.

Orden vertical completo (medido, alturas reales):
| # | Sección | y | Alto | Fondo | Radius |
|---|---------|-----|------|-------|--------|
| 0 | Announcement bar | 0 | 41px | #2b70d7 | 0 |
| 1 | Navbar sticky | 41 | 70px | #000000 | 0 |
| 2 | Hero | 111 | ~620px | #000000 (card redondeada abajo) | ~48px |
| 3 | Intro claim | 732 | 308px | blanco | - |
| 4 | Trío de features (Prevent/Respond/Coverage) | 1040 | 1552px | blanco (card) | 48px |
| 5 | Security (Wirespeed/Control) | 2672 | 756px | #000000 | 50px |
| 6 | Staccato "Active Threats" | 3508 | 445px | #f5f5f3 | 48px |
| 7 | Stories 100k+ clientes | 4033 | 588px | #000000 (video bg) | 48px |
| 8 | Backed by insurers | 4701 | 312px | #f5f5f3 | 48px |
| 9 | Knowledge/recursos | 5093 | 859px | #000000 | 48px |
| 10 | Sources/footnotes bar | 5953 | 273px | #000000 | - |
| 11 | Footer | ~6226 | ~880px | #000000 | - |

## 1.2 Chrome superior

**Announcement bar** (41px, bg azul #2b70d7, texto blanco 16px Public Sans):
> "Now Available: Active Cyber Insurance for Enterprises — **Find Out More →**" (link bold con flecha, X de cierre a la derecha).

**Navbar** (sticky, negro, 70px, logo zona 160x70):
- Izquierda: logo Coalition (mark espiro + wordmark, blanco).
- Centro: 5 items dropdown: Insurance · Security · Solutions · Resources · Company. Cada uno es `<button>` Public Sans **14px/500 blanco, padding 9px 18px**, con chevron ⌄.
- Derecha: **"Cyber Incident? Get Help"** (el texto "Cyber Incident?" en gris, "Get Help" en amarillo subrayado; hover con transición lenta de 1.2s cubic-bezier(0.22,1,0.36,1)), botón **Log In** (amarillo #ffbb3c en reposo; en la variante sticky post-scroll se ve azul #2b70d7 con chevron), e ícono de búsqueda.
- Detalle clave de posicionamiento: **la ayuda ante incidentes vive permanentemente en el nav.** Vendes la respuesta, no el papel.

**Mega-menus** (ver `coalition-megamenu-*.jpg`): panel blanco full-width que cae debajo del nav; el resto de la página se atenúa con overlay negro 50%. Estructura de 3 zonas:
1. **Card destacada izquierda** (~300px, fondo gris claro, borde 1px): título bold ("What is Active Insurance?" / "Case Studies" / "Blog"), párrafo gris de 2-4 líneas, link azul "Learn More ›". En Resources la card trae sublinks azules (Cyber Insurance › · Broker Education › · Security › · All Blog Posts ›).
2-3. **Dos columnas de links** con kicker SMALL-CAPS gris con hairline debajo ("INSURANCE" / "SECURITY", "CYBER INSURANCE" / "ADDITIONAL COVERAGES"): cada link = **título bold 16px negro + descripción gris de 2 líneas**. Ejemplos reales del menú Solutions: For Brokers ("Build your cyber expertise. Grow your book of business with the Active Insurance leader."), For SME Leaders, For Enterprise Security Teams, For Managed Service Providers, For Value Added Resellers. En Resources hay una cuarta fila inferior con íconos: "Claims Report" y "Automated Detection & Response Guide".

## 1.3 Hero (ver `coalition-hero.jpg`)

Card negra con esquinas inferiores redondeadas sobre página blanca:
- **H2 (no usan h1, dato curioso):** "Protect your business with cyber insurance and security, together" — Degular ~72px, weight 300, blanco, alineado a la izquierda, 3 líneas.
- Sub: "Coalition's Active Insurance helps businesses spot and stop fast-moving cyber threats before they strike." — Public Sans 18px gris claro.
- **Doble CTA por audiencia:** "Brokers: Get Appointed →" (amarillo #ffbb3c) + "Free Security Assessment →" (menta #baf6eb). Ambos: 16px/700, padding 16x24, **radius 0** (todo botón en Coalition es rectangular puro).
- Debajo, **banner pill de caso real** (gris oscuro, full-width del container, radius pill): "See how Coalition's active approach helped a policyholder claw back $1.5 million after a fraudulent funds transfer scam. — Watch Now →" (link amarillo).
- Sin video de fondo ni ilustración en el hero: el drama es tipográfico.

## 1.4 Secciones, una por una (copy literal + medidas)

**S3 · Intro claim (blanco, container 1200):**
- H2: "Insurance that can stop cyber threats in their tracks? Meet Coalition." — Degular **60px/300, lh 60px, negro**.
- Sub: "Policyholders experience **73% fewer claims\*** and a seamless claims process when they do." — Public Sans 18px #6b6b6a. El asterisco remite a la sources bar del final. Patrón: **afirmación fuerte + footnote honesto.**

**S4 · Trío de features (card blanca radius 48px, 1552px de alto):** tres filas alternadas texto/media:
1. "Prevent cyber risks before they happen" (Degular 40px/400) + 3 sub-items, cada uno: título bold 16px + link azul #2b70d7 con › ("Know and act on your business's risks with ease → Try our easy-to-use risk management platform, for free ›", "Discover how we analyze threats to your business", "Strengthen your security with premium add-ons").
2. "Our security experts respond to threats fast" + ("Mitigate threats, recover systems, recoup funds → Learn about our affiliate, Coalition Incident Response ›", "Put cyber pros to work for your business, 24/7 ›").
3. "Get cyber coverage designed for digital risk" + ("From incident to recovery, we've got your back", "Our industry-leading cyber coverages", "Broad coverage for a spectrum of cyber risks").
- Media: **videos de producto autoplay-loop** (Homepage-1/2/3.mp4, ~464px de ancho) con botón de play circular naranja. Los separadores entre sub-items son hairlines grises.

**S5 · Security (card negra radius 50px, padY 96px):**
- H3: "Level up your cyber defenses with Coalition Security®" — Degular 48px/400 blanco, centrado.
- **Tabs pill** (radius 16px, borde 1px #8c8d8d, texto blanco 16px; activa = fondo blanco texto negro, con ícono svg 18px: shield/teach/lock_mail): Wirespeed · Security Training · Coalition Control · Vulnerability Management.
- Panel activo: "Stop attacks in seconds with Wirespeed ADR" (40px), sub "Automated detection & response helps keep you ahead of AI-powered threats.", stat gigante "**1.8 seconds** median time to verdict\*\*" (Degular 40px), screenshot del producto + mock de chat de alertas ("Hi Alex! How can I help?").

**S6 · Staccato (card gris #f5f5f3 radius 48px):**
- Eyebrow: "ACTIVE THREATS REQUIRE ACTIVE INSURANCE" — **Degular Mono 14px/300, letter-spacing 1px, uppercase, azul #2b70d7**. (Así hacen TODOS sus eyebrows.)
- Staccato de 4 líneas Degular 48px negro: "Ransomware. / Funds transfer Fraud. / AI-phishing. / And whatever's next."
- Párrafo: "Traditional insurance wasn't built for cyber threats that evolve daily. So we pioneered Active Insurance: protection that adapts as fast as the threats do."
- CTA: "Learn More About Active Insurance →" (azul #2b70d7, texto blanco, rectangular). Video pequeño a la derecha.

**S7 · Stories (card negra radius 48px, video de fondo del ancho del container 1196x584):**
- H3: "100k+ clients: Here are just a few of their stories" — 48px blanco.
- CTA outline: "See All Case Studies →" (borde 2px #ffbb3c, texto amarillo).
- Lista de casos con ícono circular amarillo + título bold blanco + flecha: "Retailer strengthens their small team with cybersecurity ›", "Law firm stops a social engineering attack ›", "Non-profit claws back $1.5 million ›".

**S8 · Backed by (card gris radius 48px, padY 64px):**
- H4: "Backed by the world's leading insurers" — 40px negro, a la izquierda.
- Logos de aseguradoras en grayscale, 40px de alto: Allianz, Arch, Aspen, Ascot, Chaucer, Fortegra, Lloyd's Coverholder, MSIG USA, Vantage, Zurich (en home muestran un subset con carrusel; el set completo vive en el footer).

**S9 · Knowledge (card negra radius 48px, container 1296):**
- H2: "Stay ahead of threats with exclusive insights" — 60px/300 blanco.
- Sub + CTA amarillo "Explore Knowledge Center →".
- Decoración: **patrón geométrico tipo Bauhaus** (cuadrados, semicírculos, estrellas en amarillo/naranja/lila) en la esquina inferior izquierda.
- 3 cards de recurso (borde 1px gris oscuro, radius ~12px, fondo negro): ícono cuadrado azul 56px + título bold blanco + desc gris + link amarillo: "2026 Cyber Claims Report → Download Report ›" · "Broker IQ → Get Appointed ›" · "Security Cost Savings Calculator → Uncover Savings ›".

**S10 · Sources bar (negra):** los footnotes de los asteriscos, links gris azulado #cad3db: "*Coalition 2025 Cyber Claims Report", "**StationX Phishing Statistics for 2026", etc. **Toda cifra fuerte del sitio tiene su fuente aquí.**

**S11 · Footer (negro, ver `coalition-footer-completo.jpg`):**
- Fila 1: logo grande + social (LinkedIn, X, YouTube, Instagram, Facebook).
- 5 columnas con kicker SMALL-CAPS gris: INSURANCE (Cyber Insurance, Technology E&O, Executive Risks, Miscellaneous Professional Liability, AI Coverages, Claims Experience, Broker IQ Platform) · CYBERSECURITY (Coalition Control, Automated MDR, Coalition Incident Response, Security Awareness Training) · SOLUTIONS (For Brokers/Businesses/SOCs/MSPs/VARs) · RESOURCES (Knowledge Centers, Help Center, Case Studies, Industry Guides, Webinars, Active Data Graph, CoalitionAI, Activate Conference) · COMPANY (About, Careers, Newsroom, Blog, Licenses) + bloque **CONTACT →**: "Report a Claim: +1 (833) 866-1337" y "Email Support: help@coalitioninc.com".
- Fila legal: selector de país pill "USA ⌄" + Sitemap · Legal · Privacy · Disclaimers · Producer Compensation · Fraud Awareness · Your Privacy Choices (con toggle).
- **Strip de 10 logos de aseguradoras** (grayscale) + microcopy legal de 2 líneas + copyright.

## 1.5 Sistema de botones (census medido)

| Variante | Fondo | Texto | Radius | Padding | Font | Uso |
|---|---|---|---|---|---|---|
| Primario | #ffbb3c amarillo | #000 | 0 | 16px 24px | Public Sans 16/700 | CTA principal, brokers |
| Secundario | #baf6eb menta | #000 | 0 | 16px 24px | Public Sans 16/700 | Assessment gratuito |
| Azul | #2b70d7 | #fff | 0 | 8-16px | 16/700 | Learn More, Log In sticky |
| Outline | transparente, borde 2px #ffbb3c | #ffbb3c | 0 | 14px 22px | 16/700 | Sobre fondos negros |
| Text-link | - | #2b70d7 (o #ffbb3c en dark) | - | - | 16/700 + › | Sub-items, cards |

Todos con flecha → o › al final. El rectangular sin radius es firma de marca.

## 1.6 Tipografía y color

**Fuentes:** Degular (display; pesos 300 en 60px+, 400 en 40-48px; lh apretado = 1.0-1.1) · **Degular Mono** (solo eyebrows: 14px/300, ls 1px, uppercase, azul) · Public Sans (body 16-18px/400, gris #6b6b6a sobre claro, #f5f5f3 sobre oscuro; botones 16px/700).
**Escala medida:** 72 (hero) · 60/300 (H2 sección) · 48/400 (H3) · 40/400 (H4 bloque) · 18 body-lead · 16 body/botones · 14 eyebrow/nav.
**Paleta completa:** #000000 (secciones oscuras) · #ffffff (página) · #f5f5f3 (secciones suaves) · #ffbb3c (amarillo primario) · #baf6eb (menta secundario) · #2b70d7 y #2773e0 (azul links/eyebrows/announcement) · #6b6b6a (texto secundario) · #cad3db (links footer) · naranja (botones play de video). Color con roles fijos: amarillo = acción, menta = gratis/entrada suave, azul = aprender/navegar.

## 1.7 Motion y hovers (medido)

- Librerías: **ninguna de scroll-animation.** Sin GSAP, sin AOS, sin parallax. React + MUI + Swiper. El sitio casi no anima al scroll: el movimiento viene de los videos de producto autoplay.
- Transición house: `cubic-bezier(0.4, 0, 0.2, 1)`. Census: **box-shadow 0.3s en 55 elementos** (cards que levantan sombra al hover), background-color 0.15s, y 0.25s bg/borde/color en CTAs.
- Hover CTA: cambio de tono del fondo + la flecha → se desplaza ~4px a la derecha.
- Hover card de recurso: aparece borde + sombra (0.22s ease-in).
- Hover nav "Get Help": color 1.2s cubic-bezier(0.22,1,0.36,1), lentísimo y elegante.
- Chat widget flotante abajo-derecha (círculo negro con burbuja).

## 1.8 Funnel y prueba social (los patrones que convierten)

1. **Doble puerta en todo el sitio:** cada zona de conversión ofrece el par broker/empresa (Get Appointed / Free Assessment).
2. **Lead magnet = producto:** el "Free Security Assessment" enseña el músculo de la plataforma antes de vender la póliza.
3. **Incidente como CTA permanente** en nav y footer (Report a Claim con teléfono).
4. **Números con asterisco** (73% fewer claims*, 1.8 seconds**) siempre con fuente citada al pie.
5. **Respaldo de capacidad** (10 aseguradoras/reaseguradoras) como sección propia + strip en footer: en seguros, esto pesa más que los logos de clientes.
6. **Casos con verbo y resultado** ("Non-profit claws back $1.5 million"), no testimonios genéricos.
7. Sin pricing público; todo lleva a demo/appointment/assessment.

---

# PARTE 2 · El mapeo: Coalition → Cysure

Regla de la fusión: **se copia el esqueleto, no la piel.** Donde Coalition pone su token, entra el token Cysure equivalente. Tabla de equivalencias obligatorias:

| Elemento Coalition | Valor Coalition | Equivalente Cysure (usar SIEMPRE) |
|---|---|---|
| Display font | Degular 300/400 | **Space Grotesk 600** (`--font-display`), tracking -0.02em en grandes |
| Eyebrow | Degular Mono 14/300 ls1px azul | **Eyebrow tone navy/royal**: Space Grotesk 700, 11px, tracking 0.16em, uppercase |
| Body | Public Sans 16-18 | **DM Sans** 15px (`--font-sans`) |
| Palabra clave del heading | (no tienen) | **UNA palabra DM Serif Display italic** color `--serif-accent` #3A5BA8 por heading |
| Números/stats (1.8 seconds) | Degular 40px | **Space Grotesk + tabular-nums** (`--font-number`) |
| Negro de sección #000000 | #000000 | **`--ink` #0E1116** con `--shadow-elevated` (exclusiva de marketing) |
| Gris de sección #f5f5f3 | #f5f5f3 | **`--sunken` #F6F6F3** |
| Azul link/eyebrow #2b70d7 | #2b70d7 | **`--royal` #3B5BFF** |
| Amarillo CTA #ffbb3c | #ffbb3c | **Button `primary` = ink fill** (#0E1116, texto blanco). El amarillo NO existe en Cysure |
| Menta CTA #baf6eb | #baf6eb | **Button `secondary`** (borde) para el CTA suave; el mint Cysure #34E0AE se reserva para VALOR DE REGRESO (payout) y solo sobre ink |
| Radius de botones 0px | 0 | **9-11px** (radius Cysure de botones; el rectangular puro no es de la casa) |
| Radius de section cards 48-50px | 48-50px | **Mantener el gesto: 32-48px.** Es layout, no token de componente; conserva la firma Coalition |
| Íconos svg + patrón Bauhaus | decorativo | **Icon-chips** (ícono del set propio dentro de cuadro `--<tone>-soft` radius 11) + anillos concéntricos tenues. **Cero clip-art, cero Bauhaus shapes** |
| Videos de producto autoplay | mp4 en loop | **Sin video ni foto.** Screenshots del producto (UI kits del DS) en frames `--shadow-frame`, superficies generativas: radar sweep en heros ink, arc gauge del Risk Score, tiles del Detection Coverage Map, shimmer AISummary |
| Play button naranja | naranja | No aplica (no hay video) |
| Hover: shadow 0.3s + flecha | MUI easing | **Un solo easing `cubic-bezier(.2,.7,.2,1)`**, 140/220/280ms; hover/press = brightness (.cy-press), cards `.cy-lift` 2px. La flecha → sí puede desplazarse 4px |
| Announcement bar azul | #2b70d7 | Bar `--royal` #3B5BFF, texto blanco, DM Sans 14 |
| "Cyber Incident? Get Help" amarillo | amarillo | **"¿Incidente activo? · Repórtalo"** en `--coral` #EF4444 (color = urgencia; este es EL caso semántico correcto para coral). Pill coral-soft opcional |
| Footnotes con asterisco | #cad3db | Mantener el patrón tal cual: sources bar con `--faint`, asteriscos en superíndice |
| Chat widget | negro | Opcional; si va, botón ink con radius 9999 |

**Reglas duras Cysure que NO se negocian (aunque Coalition haga lo contrario):**
- Sentence case en títulos (nada de Title Case inglés).
- Sin gradientes de superficie, sin fotografía, sin emoji, sin accent bars.
- Color = urgencia: emerald/amber/coral solo con su significado. Mint solo sobre ink.
- Wordmark lowercase **cysure**. Nunca "Cysure AI" con espacio.
- Copy: español mexicano de tú; términos de producto en inglés (Risk Score, Resilience Lead, Express Payout, Detection-Coverage Alignment); separador ·; dinero `USD 250K`.
- Métricas SOLO de `references/data.md`; lo que no exista ahí va como `[TBD]`, jamás inventado.

---

# PARTE 3 · Blueprint de la landing cysure.ai (sección por sección)

Estructura espejo de Coalition, 12 bloques. El copy es borrador listo para iterar; los `[TBD]` requieren dato o decisión de Toño. Cada heading marca su palabra serif-accent entre \*asteriscos\*.

**B0 · Announcement bar** (royal, 40px):
> "Nuevo: cobertura paramétrica hasta USD 250K por evento · **Conoce más →**"

**B1 · Navbar** (sticky, ink, 68-70px):
- Logo: `<Logo onDark withWordmark>` (cysure lowercase).
- Items (5, espejo de Coalition): **Seguro ⌄ · Seguridad ⌄ · Soluciones ⌄ · Recursos ⌄ · Nosotros ⌄** — DM Sans 14/500.
- Derecha: **"¿Incidente activo? · Repórtalo"** (coral, el único elemento coral del chrome) + botón **Entrar** (secondary chico) + búsqueda opcional.
- Mega-menu de 3 zonas igual que Coalition: card destacada izquierda ("¿Qué es AI & Cyber Insurance?" con párrafo y "Conoce más ›" royal) + 2 columnas con kicker eyebrow ("SEGURO" / "COBERTURAS", "SEGURIDAD" / "AGENTES") con links bold + descripción de 2 líneas. Contenido menú Seguro: Cobertura cyber (B1-B4) · Cobertura AI risk (A1-A9) · Express Payout · Claims. Menú Seguridad: Sentinel · Hunter · EASM · Dark Web Monitoring · AI Scout · AI Auditor · AI Adversary · AI Vendor Watcher. Menú Soluciones: Para brokers · Para PyMEs · Para CISOs · Para MSPs.

**B2 · Hero** (card ink redondeada abajo, radar sweep de fondo, `--shadow-elevated`):
- Eyebrow navy: "AI & CYBER INSURANCE · LATAM"
- H1 (sí h1, corrigiendo a Coalition), Space Grotesk 64px, izquierda: "Protege tu empresa con seguro y seguridad, \*juntos\*."
- Lead (DM Sans 17, muted-on-dark): "Cysure detecta el riesgo con su propia telemetría, lo asegura y paga en 24-48 h. Sin señal, no hay cobertura."
- **Doble CTA:** primario ink-inverso (blanco sobre ink o ink sobre blanco según contraste del DS) "Obtén tu Risk Score →" + secundario borde "Brokers: únete →".
- **Banner pill de caso** (equivalente al claw-back de Coalition): "Así funciona Express Payout: detección T+0 y pago en moneda local en 24-48 h · **Ver cómo →**" (link royal; cuando exista un caso real con monto, sustituir por el caso).

**B3 · Intro claim** (blanco):
- H2 44px: "¿Un seguro que \*detiene\* amenazas antes de que peguen? Conoce Cysure."
- Sub 17 muted: "Solo aseguramos lo que detectamos con nuestra propia telemetría. Detection-Coverage Alignment: menos siniestros, cero letra chica.\*" (el asterisco apunta a la sources bar; si hay % real de reducción, va aquí como `[TBD]`).

**B4 · Trío de features** (card blanca radius 32-48, tres filas texto/media alternadas):
1. **"Prevenimos el riesgo antes de que sea siniestro"** + 3 sub-items con icon-chip + link royal ›: "Conoce tu Risk Score en minutos ›" · "Vemos lo que cada integración emite. Decimos lo que no. ›" · "Agentes de AI monitoreando 24/7 ›". Media: **arc gauge del Risk Score** (800 / 1000) en frame `--shadow-frame`.
2. **"Tu Resilience Lead responde en minutos, no en días"** + "Un humano al frente de tu cuenta, una flota de agentes detrás ›" · "Qué pasó · por qué te toca a ti · qué sigue ›". Media: screenshot de la Console (UI kit del DS).
3. **"Cobertura diseñada para riesgo digital, pagada como debe ser"** + "Triggers paramétricos A1-A9 · B1-B4 ›" · "Express Payout: fiat local en 24-48 h ›" · "Póliza y payout sellados on-chain ›". Media: **Detection Coverage Map tiles** + timeline de payout con el monto en **mint sobre ink**.

**B5 · Sección Seguridad** (card ink radius 32-48, `--shadow-elevated`):
- H2 44px blanco centrado: "Sube tus defensas con la \*flota\* Cysure."
- **Tabs pill** (radius 9-11, borde hairline-on-dark; activa = blanca con texto ink + ícono del set): Sentinel · Hunter · EASM · Dark Web · AI Scout · AI Auditor.
- Panel: título 28px + párrafo + **stat gigante en Space Grotesk tabular:** "T+0 detección · 24-48 h payout\*\*" (el valor de payout en mint) + screenshot consola en frame.

**B6 · Staccato** (card sunken radius 32-48):
- Eyebrow royal: "AMENAZAS ACTIVAS REQUIEREN SEGURO ACTIVO"
- Staccato Space Grotesk 34-44px ink, 4 líneas: "Ransomware. / Fraude de transferencias. / Phishing con AI. / Y lo que \*siga\*."
- Párrafo: "El seguro tradicional no se construyó para amenazas que evolucionan a diario. Por eso el nuestro detecta, responde y paga a la velocidad del riesgo."
- CTA primario ink: "Conoce la cobertura →".

**B7 · Casos** (card ink):
- H2: "Cada póliza empieza con una \*detección\*."
- Sin video: fondo con anillos concéntricos tenues o radar sweep. Lista de casos con icon-chip + título bold + › (usar casos reales cuando existan; mientras: "Fintech detecta exfiltración y cobra Express Payout en 36 h `[TBD]` ›"). CTA outline-on-dark: "Ver casos →".

**B8 · Respaldo de capacidad** (card sunken):
- H3 28-34px: "Capacidad \*real\*, sellada on-chain."
- Tiles de partners (grayscale, 40px): Ensuro · Etherisc · fronting carrier CNSF `[TBD nombre]` · Bridge/Stripe (off-ramp) `[confirmar cuáles son públicos]`. Microcopy: "MGA bajo CNSF vía fronting carrier · settlement en USDC · legal twin de cada póliza."

**B9 · Recursos** (card ink, container ancho):
- H2: "Adelántate a las amenazas con \*criterio\*, no con miedo."
- 3 cards (borde hairline-on-dark, radius 16, icon-chip royal 56px): "Reporte de riesgo AI & cyber LATAM `[TBD]` → Descargar ›" · "Portal de brokers → Únete ›" · "Calculadora de Risk Score → Pruébala gratis ›". Decoración: NADA de shapes; anillos concéntricos tenues.

**B10 · Sources bar** (ink): footnotes en `--faint`: "\*Metodología Detection-Coverage Alignment, whitepaper Cysure `[TBD]`" · "\*\*SLA de Express Payout según póliza". **Toda cifra del sitio se cita aquí.**

**B11 · Footer** (ink, espejo estructural de Coalition):
- Fila 1: logo cysure grande + social (LinkedIn · X · YouTube `[TBD cuáles existen]`).
- 5 columnas con kicker eyebrow: SEGURO (Cobertura cyber, Cobertura AI, Express Payout, Claims) · SEGURIDAD (Sentinel, Hunter, EASM, Dark Web Monitoring, agentes AI) · SOLUCIONES (Brokers, PyMEs, CISOs, MSPs) · RECURSOS (Docs, Blog, Casos, Calculadora) · COMPAÑÍA (Nosotros, Careers, Contacto) + bloque **CONTACTO →**: "Reporta un siniestro: `[TBD teléfono]`" · "Soporte: hola@cysure.ai `[TBD]`".
- Fila legal: selector de país pill "🇲🇽 México ⌄" (única excepción de emoji permitida) + Aviso de privacidad · Términos · Licencias CNSF `[TBD]`.
- Strip de logos de capacidad (los mismos de B8) + microcopy legal de 2 líneas + "© 2026 cysure. Detection-Coverage Alignment®`[TBD registro]`".

---

# PARTE 4 · Especificaciones de implementación

**Stack sugerido:** HTML/CSS/JS estático o Next.js. Cero librerías de animación (Coalition no las usa y el DS tampoco las necesita). Copia `assets/design-system/` y linkea `styles.css`; componentes UMD en `_ds_bundle.js` (`window.CysureDesignSystem_acdda2`).

**Layout:** container 1200px máx, gutter 24px. Section cards full-bleed con radius 32-48px y margen lateral 0 (el radius es del bloque, no del container). Padding vertical de sección: 64-96px. Navbar sticky 68px + announcement 40px.

**Tipografía:** escala Cysure (64 display-xl hero · 44 display-l secciones · 28-34 bloques · 22 cards · 15 body · 11 eyebrows). Nunca los pesos light de Coalition: Space Grotesk 600 siempre en display. Una palabra serif italic navy por heading, exactamente una.

**Motion spec:** easing único `cubic-bezier(.2,.7,.2,1)`; 140ms (micro) / 220ms (hover) / 280ms (entradas). Hover botones = brightness .93; press .86. Cards interactivas `.cy-lift` (translateY -2px + shadow). Flecha de CTAs se desplaza 4px. Entradas al scroll: opcional un fade-up sobrio de 280ms con IntersectionObserver, sin stagger dramático, respetando `prefers-reduced-motion`. Los mega-menus abren en 220ms con fade + overlay 50% ink sobre la página.

**Checklist de aceptación (antes de entregar):**
- [ ] Estructura de 12 bloques espejo Coalition (announcement → footer con sources bar)
- [ ] Section cards redondeadas alternando `--page` / `--ink` / `--sunken`; cero gradientes, cero fotos, cero video
- [ ] Doble CTA por audiencia en hero y repetido en cierre; "¿Incidente activo? · Repórtalo" en coral en el nav
- [ ] Mega-menu de 3 zonas con card destacada + columnas con descripción
- [ ] Toda cifra con asterisco y su fuente en la sources bar; nada inventado, `[TBD]` visible donde falte dato
- [ ] Tokens del DS (no hex de Coalition, no hex inventados); dark surfaces vía `--ink`, no #000
- [ ] DM Sans body · Space Grotesk display/labels/números tabulares · una palabra DM Serif italic navy por heading
- [ ] Eyebrows uppercase Space Grotesk tracking 0.16em; sentence case en todo lo demás
- [ ] Iconos solo del set propio en icon-chips; sparkle solo para contenido AI; cero emoji (salvo bandera del selector de país)
- [ ] Copy es-MX de tú, outcome-first, cero miedo; términos de producto en inglés; separador ·
- [ ] Wordmark lowercase cysure; cero rastro de Coalition (nombre, logos, amarillo #ffbb3c) y cero rastro de Delta Protect u Orbit en el resultado final

**Evidencia disponible en este repo:**
- `shots/coalition-hero.jpg` · `coalition-chrome-anuncio-nav.jpg` · `coalition-megamenu-insurance.jpg` · `coalition-megamenu-solutions.jpg` · `coalition-megamenu-resources.jpg` · `coalition-megamenu-company.jpg` · `coalition-bloques-video.jpg` · `coalition-cobertura-y-security.jpg` · `coalition-headline-staccato.jpg` · `coalition-casos-y-aseguradoras.jpg` · `coalition-recursos-geometrico.jpg` · `coalition-claim-73pct.jpg` · `coalition-stories-video.jpg` · `coalition-footer-completo.jpg` · `coalition-hover-cta-antes/despues.jpg` · `coalition-fullpage.jpg`
- `data/coalition.json` (extracción original: libs, transiciones, fuentes, secciones, funnel) · `data/coalition-deep.json` (chrome, mega-menus, walk sección por sección con medidas, census de botones, footer)
- Contexto competitivo completo: `REPORT.md` en esta misma carpeta.
