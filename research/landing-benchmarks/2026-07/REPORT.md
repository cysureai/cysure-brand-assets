# Benchmark de landing pages para Cysure (julio 2026)

Auditoría en vivo de 6 landings con Playwright (5 iniciales + UMA agregado como caso de estudio en sencillez) (Chromium headless, viewport 1440x900, locale es-MX/en-US según sitio). Por sitio: screenshot de hero, 6-8 paradas de scroll lento, full-page, estados hover antes/después y extracción programática (librerías de motion, keyframes, transiciones computadas, fuentes, paleta, secciones, prueba social, funnel). Evidencia: `shots/` (JPEG q75, ancho máx 1280) y `data/` (JSON crudos por sitio).

Nota de método: en Delta Protect el dropdown "SERVICIOS" del nav no abrió en headless (ni hover ni click); todo lo demás se capturó completo. Stoik redirige de stoik.io a stoik.com/en-us.

---

## 1. Delta Protect (deltaprotect.com) - benchmark principal

**Stack detectado:** Webflow + IX2 (34 elementos con data-w-id), GSAP 3.15.0 con ScrollTrigger, ScrollToPlugin y SplitText, Splide con extensión auto-scroll (marquees), Lottie, jQuery 3.5.1, HubSpot forms. Chat: HubSpot.

**Identidad visual:** fondo negro absoluto (#000000 en las 7 secciones), tipografía única Funnel Display (h1 40px/500, botones 14px/600 en mayúsculas con letter-spacing), CTAs pill blancos (radius 48-999px, texto negro). Acento azul eléctrico para glows y neones; cada producto tiene color propio (dATTACK rojo, dSOC índigo, dCISO verde).

### Hero
- Composición centrada. H1: "El Centro de Comando de Ciberseguridad, impulsado por IA, que tu Empresa necesita." Sin eyebrow.
- Video de fondo cinematográfico (webm, analista frente a monitores en un SOC, tinte oscuro) + canvas WebGL `#fluid` (clase `smoke-mouse home-smoke`): humo que sigue el cursor por encima de todo el hero y del navbar. Es el detalle que más grita "agencia".
- CTA único: pill blanco "PROTEGE TU EMPRESA" con badge de escudo.
- Debajo del fold inmediato: marquee de logos de clientes (Splide auto-scroll) con caption "+350 empresas han confiado en Delta Protect como su aliado en ciberseguridad".

### Motion (inventario completo)
- **ScrollTriggers activos: 28.** `hero-content` con `scrub: true` (parallax/fade del hero al scrollear) y ~6 triggers en `tools-section` con `start: top 30%` (reveals por sección). Sin pins.
- **SplitText cargado:** reveals de texto por líneas/palabras en headlines.
- **Marquees (Splide auto-scroll):** 2, logos de clientes en hero y logos de certificaciones (ISO, SOC 2, etc.) más abajo. Loop infinito continuo.
- **Keyframes CSS declarados:** `spin`, `bg-btn-blue-gradient`, `underline-draw` (subrayado que se dibuja en links del nav), `cardBorderRun` (5s infinite: un punto de luz que recorre el borde de las cards, clase `card-glow-dot`), `ringFill` (4s, anillos SVG que se llenan una vez al entrar en viewport).
- **Transiciones computadas más usadas:** 0.3s ease all, 0.4s ease opacity, 0.3s ease background-color, 0.6s ease transform. Rango consistente 0.3-0.6s, todo ease.
- **Cards apiladas tipo deck:** en la sección de soluciones (6 tabs: dATTACK, dSTANDARD, dSOC, dTOOLS, dCLOUD, dCISO) las cards anteriores quedan apiladas detrás de la activa como baraja (ver `deltaprotect-card-deck-dciso.jpg`).
- Globo/esfera oscura como fondo de la sección de diferenciadores y un arco de luz azul gigante tipo horizonte sobre el footer (ver `deltaprotect-blog-neon-footer-glow.jpg`).

### Hovers (uno por uno)
- **CTA primario:** el badge de escudo viaja del lado izquierdo al derecho del pill y el texto se desplaza (transiciones internas: `arrow-btn` con opacity 0.4s, `translateX` 0.6s). Capturado en `deltaprotect-hover-cta-antes/despues.jpg`.
- **Card de producto:** la card entera se enciende con wash de gradiente y borde glow del color del producto (dATTACK: rojo profundo). Ver `deltaprotect-hover-card-despues.jpg`.
- **Link de nav:** subrayado que se dibuja (keyframe `underline-draw`) y los demás items del nav se atenúan a gris. Patrón "dim siblings".
- **Tabs de soluciones:** el icono activo lleva anillo glow del color del producto.

### Estructura de secciones (orden literal)
1. Hero video + marquee de +350 empresas (Hooters, Grupo Gigante, Endeavor, Ontop, Nivada, Runa, Bitso, Office Depot, BBB, Sofía, Covalto, Foxconn)
2. "Soluciones que se adaptan al entorno y ritmo de tu empresa" (eyebrow: dSERVICES), 6 productos en tabs con deck de cards
3. "Seguridad Inteligente, Ejecución y Supervisión Humana" (eyebrow: POR QUÉ DELTA PROTECT ES LA EVOLUCIÓN DEL SECTOR) + 4 diferenciadores (Agnósticos a la Industria, AI-Driven Security, Escalabilidad "Plug & Play", Simplicidad en el Cumplimiento)
4. "Conoce nuestro servicio a través de sus palabras" (eyebrow: CLIENTES QUE NOS RESPALDAN): slider de testimonios con foto, logo del cliente, 5 estrellas, cargo (CTOs y founders de minu, Sensify, etc.)
5. "Los estándares más altos en la industria" (eyebrow: NUESTRAS CERTIFICACIONES): marquee de badges del equipo (OSCP, Burp Suite Certified, eCPPT, eWPTX, eJPT, eMAPT, CEH)
6. "Descubre cómo mantener tu empresa segura y en cumplimiento": 3 cards de blog con iconos neón animados (escudo, hexágono ISO, candado con anillos punteados que giran)
7. "Preguntas frecuentes" (acordeón)
8. Form de contacto de 7 campos (Nombre, Apellidos, Correo Empresarial, Celular con lada, Tamaño de empresa, Servicio de interés, ¿En dónde nos viste?) con CTA "AGENDA UNA DEMO" + footer con mega-columnas

### Prueba social
- 12 logos de clientes en marquee + caption "+350 empresas".
- Testimonios con foto real, logo, cargo y 5 estrellas.
- Certificaciones del equipo como marquee (no logos de compliance corporativo: certificaciones ofensivas individuales, mucho más creíble para pentest).
- Badges dSOC2/dCISO propios.

### Funnel
- Un solo CTA repetido ("Protege tu empresa" / "Agenda una demo"), sin pricing, sin self-service. Form largo al final de la página (calificación de lead). Chat HubSpot. Selector de país (MX) en nav.

### Qué le da el look "de agencia"
1. El humo WebGL que sigue al cursor (canvas #fluid) sobre hero y navbar.
2. Video cinematográfico oscuro como fondo del hero (no ilustración, no screenshot).
3. Navbar pill flotante con blur, separada del borde superior.
4. Una sola tipografía display (Funnel Display) usada con disciplina en caps pequeñas para labels/eyebrows.
5. Negro absoluto + un solo acento por producto (color coding) + glows y neones bien dosificados.
6. Micro-detalles: punto de luz recorriendo bordes de cards, subrayados que se dibujan, badge que viaja dentro del CTA, anillos SVG que se llenan.
7. Iconografía custom animada (los iconos de blog parecen instrumentos de un mismo sistema visual).
8. Ritmo de scroll: cada sección tiene un momento (deck de cards, globo, marquee, arco de luz final).

---

## 2. Sofía (sofiasalud.com)

**Stack:** Webflow + IX2 (ligero: 7 data-w-id), Splide para el loop de logos, jQuery. Sin GSAP. El motion es mínimo: transiciones cortas y un marquee. Su fuerza no es el motion, es el sistema visual y el copy.

**Identidad:** fondo crema #fcf7f2, morado #4a25aa como color primario (CTAs pill radius 100px), tipografía Moderat (h1 56px/700). Pastel de soporte: lila, menta, durazno. Chips de texto resaltado (highlight pills) como recurso de marca: "Para empresas" sobre lila, "Para individuos" sobre menta.

### Hero
- Asimétrico: texto a la izquierda, visual a la derecha. H1: "Seguros médicos, pero diferentes". Sub: "Cobertura completa, sin deducible y todo desde una app".
- Visual: blob morado con foto recortada de doctora dentro de un teléfono + iconos flotantes pastel (hospital, medicina, botiquín). Fotografía real integrada a ilustración plana, no ilustración pura.
- Dos cards de segmentación inmediatas: "Para empresas" / "Para individuos", cada una con chip de color y CTA "Conoce más".

### La comparativa "vs seguro tradicional" (documentada a detalle, ver `sofia-comparativa-completa.jpg` y `data/sofia-comparativa.json`)
- Headline: "Sofía es la opción ideal para tus colaboradores".
- Estructura de 3 columnas: izquierda = nombre del beneficio (negritas, texto corto); centro = columna Sofía destacada con fondo crema, encabezada por el logo de Sofía, con una frase de beneficio en lenguaje humano; derecha = "Seguro médico tradicional" en gris con X circulares grises.
- 11 filas: Cuidados médicos mayores ("Hospitalizaciones y cirugías cubiertas desde el día 1"), Cuidados menores, Preventivos, Deducible 0 ("Tu equipo lo usa desde el primer peso, sin barreras"), Cobertura anual renovable, Videoconsultas ilimitadas sin costo, Atención directa con la aseguradora 24/7 ("Habla con Sofía directo, sin intermediarios"), Atención inmediata de internistas, Medicinas sin cantidad máxima, Gestión desde una app, Portal administrativo para RRHH.
- Claves del patrón: la columna propia no lleva palomita seca, lleva UNA FRASE de beneficio; la columna del rival ni siquiera lleva texto, solo X gris (no insulta, solo muestra ausencia); los primeros renglones concede lo que el tradicional sí cubre (palomitas negras arriba a la derecha) para ganar credibilidad.

### Sistema de ilustración
- No usa ilustración de personajes: usa FOTOGRAFÍA recortada sobre blobs y arcos de color pastel (durazno, lila, menta) + iconos de línea simples dentro de círculos de color.
- Los iconos son line icons morados/pastel con esquinas redondeadas, siempre dentro de contenedores suaves (círculos, blobs).
- Mapa de México en morado para la red médica, con logos de hospitales reales al lado (Christus Muguerza, Star Médica, Médica Sur, ABC, Dalinde San Ángel Inn, Chopo).
- El resultado: se siente humano y cálido sin caricaturas, y la foto real da confianza de "esto existe".

### Secciones (orden)
1. Hero segmentado empresas/individuos
2. "Todo para cuidar la salud de tu equipo en un mismo seguro": 3 tipos de cuidado (mayores, menores, preventivos) con iconos
3. Comparativa vs seguro tradicional
4. "SofiaMed nuestra red médica completa": mapa + logos de hospitales
5. "Beneficios de Sofía" con tabs (Para tus colaboradores / Para tu empresa) y screenshot de app sobre blob durazno
6. CTA intermedio en card durazno: "Para cuidar a tu equipo todos los días. El único seguro médico completo para startups y empresas en México"
7. "¿Por qué elegir Sofía? Nuestros números hablan por sí mismos": stats en cards pastel
8. "Lo que dicen nuestros clientes": testimonios en VIDEO de YouTube con miniatura estilizada (chip "Testimonial", nombre, cargo, foto recortada sobre blob de color) de CocoFact y Clara
9. "Somos una aseguradora 100% mexicana" + sellos de reguladores (CNSF, Secretaría de Salud, CONDUSEF)
10. Cierre: "¡Cuida a tu equipo con SofíaBusiness!" con form/CTA demo

### Funnel y hovers
- CTA único "Solicita tu Demo" (pill morado, nav y cierre). Hover: oscurece el morado, transición corta. Sin quiz ni cotizador self-service en home; el funnel es demo B2B.
- Clientes en logos: Fintual, Buk, UnDosTres, Enlight y más.
- Sin chat widget (interesante: apuestan al form).

---

## 3. Coalition (coalitioninc.com) - categoría "Active Insurance"

**Stack:** React/MUI (transiciones cubic-bezier(0.4,0,0.2,1) en 55 elementos), Swiper, OneTrust, FontAwesome. Sin GSAP: el motion es sobrio, casi todo hover states y videos embebidos.

**Identidad:** alterna gris claro #f5f5f3 y negro #000000 en bloques con esquinas muy redondeadas (cards gigantes de sección). Tipografía Degular para headlines (60px/300, light) + Public Sans para body. CTAs rectangulares SIN radius: amarillo #ffbb3c (primario) y menta #baf6eb (secundario), con flecha →. Eyebrows en azul, caps, letter-spacing ancho.

**Hero:** card negra redondeada sobre fondo claro. H1 "Protect your business with cyber insurance and security, together". Doble CTA segmentado por audiencia: "Brokers: Get Appointed" (amarillo) + "Free Security Assessment" (menta). Debajo, banner pill con caso real: "See how Coalition's active approach helped a policyholder claw back $1.5 million after a fraudulent funds transfer scam. Watch Now".

**Lo más robable:**
- **"Cyber Incident? Get Help"** siempre visible en el nav: posiciona urgencia y respuesta a incidentes como parte del producto.
- **Mega-menu de 3 columnas** (ver `coalition-megamenu-insurance.jpg`): card destacada a la izquierda ("What is Active Insurance?" con icono y Learn More) + 2 columnas de links con descripción corta debajo de cada título. Educación de categoría dentro del menú.
- **Headline staccato:** "Ransomware. Funds transfer Fraud. AI-phishing. And whatever's next." + eyebrow "ACTIVE THREATS REQUIRE ACTIVE INSURANCE". Nombra la categoría y la amenaza en 4 golpes.
- **Números con asterisco creíble:** "Policyholders experience 73% fewer claims*", "100k+ clients: Here are just a few of their stories" con casos lincados por icono.
- **"Backed by the world's leading insurers":** logos de Ascot, Fortegra, Lloyd's, Swiss Re. La capacidad de respaldo como prueba social, clave en seguros.
- Patrón geométrico tipo Bauhaus (formas de colores) para la sección de recursos: le quita frialdad al negro sin fotos.
- Hover de CTA: la flecha → se desliza y el fondo cambia (background-color 0.25s cubic-bezier); cards de recursos levantan sombra y borde (0.22s ease-in).
- Funnel: doble puerta broker/cliente en todo el sitio, assessment gratuito como lead magnet, chat widget propio.

---

## 4. At-Bay (at-bay.com) - categoría "InsurSec"

**Stack:** GSAP 3.15 + ScrollTrigger + Swiper, Intercom. Transición house-style: 0.1s ease-in-out all (rápida, seca). Tipografía GT-America en pesos light (h1 60px/300). CTAs rectangulares sin radius, azul eléctrico #2020ee sobre navy #002050 y blanco.

**Hero:** centrado, gradiente azul-morado. H1 "Finally, a Security Platform with Skin in the Game" (la mejor línea de posicionamiento del lote: el seguro como prueba de que confían en su propia seguridad). Sub con asterisco de honestidad legal. Doble CTA: "Book a demo" (blanco) + "Explore the platform →" (ghost). Debajo: screenshot grande del producto (dashboard Stance con score de seguridad 55, incidentes, gráficas) con cards flotantes.

**Lo más robable:**
- **Nombró su categoría: "InsurSec"** y la explica con dos cards de vidrio esmerilado (PREVENTION: At-Bay Stance Security Platform / PROTECTION: At-Bay Cyber Insurance) unidas por "One partner, one solution" al centro, sobre fondo navy con patrón de líneas topográficas. Es el diagrama de la propuesta de valor de un vistazo (ver `atbay-insursec-glass-cards.jpg`).
- **Stats en dark section:** 40,000+ insureds, $60B, 1.5 million, 15 minutes bajo el headline "Security That Speaks for Itself".
- **Slider de testimonios alternando** cards navy de quote (con chip "TESTIMONIAL", frase clave en bold dentro de la cita, nombre y cargo) y cards de caso con foto ("At-Bay Helps Ransomware Victim Resume Operations in 4 Days").
- **Pricing por paquetes visible:** CORE / ADVANCED / COMPLETE ("Foundational Cyber Protection", "Enhanced Ransomware Protection", "Ransomware & Financial Fraud Protection") con banner "PREMIUM CREDIT AVAILABLE" (mejor seguridad = crédito en la prima; el incentivo económico hecho UI, ver `atbay-paquetes-pricing.jpg`). Headline: "Security So Good We're Willing to Bet on It".
- Eyebrows azules en caps (UNIFIED SECURITY, STANCE MDR, PREVENTION...) como sistema de navegación visual.
- Fotografía lifestyle cálida + chips de UI flotantes encima (mezcla humano/producto).
- Honestidad regulatoria en footnotes con superíndices por toda la página (¹ ² ³): para un producto de seguros da seriedad.

---

## 5. Stoïk (stoik.com, redirige de stoik.io) - seguro + software de monitoreo

**Stack:** Next.js (CSS Modules), HubSpot chat, Axeptio (cookies). Motion mínimo: transiciones 0.25s ease y un par de keyframes de botón. Sitio corto (3989px, el más corto del lote).

**Identidad:** azul saturado #1362dd como color de bloque (no de acento), lavanda/morado oscuro para dashboards, rosa salmón para acentos tipográficos. Tipografía Lazzer para headlines + Inter para body. Botones rectangulares radius 4px, muy sobrios.

**Hero:** split asimétrico. Panel azul izquierdo con H1 bicolor "Insurance and cybersecurity" (palabras clave en rosa) y doble CTA broker-first ("Become a partner broker" / "Talk to a broker"); derecha foto + panel morado con el Score /100, vulnerabilidades críticas y gráfica de historial de score: el producto de monitoreo como visual del hero.

**Lo más robable:**
- **El cyber score /100 como imagen de hero:** vende el software de monitoreo antes de hablar del seguro. Cysure puede hacer lo mismo con un "score de riesgo" del cliente.
- **Palabras pintadas dentro del headline** ("an active approach for a perfect management of risk", "biggest actors", "2,000 brokers" en rosa/azul): jerarquía sin negritas.
- **Funnel 100% broker:** todo el sitio habla al canal, no al asegurado final. Incluye simulador de pricing (Stoïk insurance 1126€, taxes, total) como screenshot del Broker Platform.
- **Reaseguradoras como cards dedicadas:** Tokio Marine HCC, Swiss Re, Axeria en cards individuales bajo "Comprehensive coverage backed by the biggest actors in the insurance industry", con límites explícitos ("limit up to 10 million euros").
- Cards con doble chip de icono (icono pastel + flecha →) arriba del título: patrón limpio y repetible.
- Banda azul de cierre: "More than 2,000 brokers support their customers with Stoïk" + CTA.

---

## 6. UMA (uma.xyz) - caso de estudio en sencillez (agregado post-auditoría inicial)

Auditado con el mismo método. Se incluye por una razón distinta a los demás: es el mejor ejemplo del lote de cómo comunicar una herramienta compleja (un oráculo optimista para blockchain) con una landing radicalmente simple. Ese es el atributo que Cysure debe copiar.

**Stack:** Next.js + Tailwind (transiciones 0.3s cubic-bezier(0.4,0,0.2,1), la curva default de Tailwind, en 21 elementos). Sin GSAP, sin Webflow, sin Lottie, sin Swiper, sin chat, sin formularios. Keyframes contados con una mano: `arrow-enter` (2s infinite, la flecha del link), `fade-in/out`, `accordion-slide-up/down`. Video del hero en webm con `opacity-10 mix-blend-luminosity`: textura, no protagonista.

**El presupuesto de diseño es mínimo y por eso funciona:**
- UNA tipografía: Halyard Display, en un solo peso (400). La jerarquía se hace solo con tamaño (H1 96px, el más grande del benchmark, sobre body 16px).
- DOS fondos: #272528 (casi negro) para hero/cierre y blanco para el contenido. Nada más.
- UN acento: rojo, racionado con disciplina quirúrgica: números de etapa, la palabra clave del headline ("Participate as a **Voter**"), los X de disputa, links con flecha. Nunca en bloques grandes.
- UN CTA en toda la página: "Launch app" (blanco, radius 8px, hover apenas gris). No hay demo, no hay form, no hay newsletter en el flujo principal.

**Cómo comunica el propósito de la herramienta:**
1. **H1 de 5 palabras que ES la definición del producto:** "A decentralized truth machine", con el logo (los dos círculos "OO") incrustado DENTRO del texto del headline entre "truth" y "machine". El logo funciona como palabra. Lo repiten en "Launch products with the OO as your backbone": la marca se vuelve sintaxis.
2. **Una sola metáfora visual para todo el sitio:** una fábrica isométrica en line-art (banda transportadora de cajas = statements que se verifican). El hero la muestra de fondo; la sección "How UMA works" la desarma en 4 etapas numeradas (01 Statement, 02 Challenge period, 03 Dispute, 04 Voting), cada una con un fragmento de la misma fábrica: cajas avanzando, un robot inspeccionando, una caja marcada con X roja, la urna de votación. Un hilo rojo vertical conecta las 4 etapas. Nada de stock, nada de 3D, nada de dashboards.
3. **Headlines que son oraciones de sujeto y verbo, no slogans:** "A statement is proposed as true", "Most statements go undisputed", "Anyone can dispute a statement", "Tokenholders vote on disputes and earn rewards". Leyendo solo los H2/H3 entiendes el protocolo completo. Un párrafo corto por etapa, cero bullets.
4. **La página se estructura por audiencia, no por features:** How it works, luego "Participate as a Voter" (Stake / Vote / Earn: tres palabras, tres iconos line-art, tres oraciones) y "Participate as a Builder" (4 casos de uso en tabs: Prediction Markets, Insurance, Cross-Chain, Real World Assets). El nav replica exactamente eso: How it works, For Voters, For Builders, Docs, Blog. Cinco items.
5. **Prueba social = producto vivo, no logos con humo:** un ticker fijo arriba y abajo de la página con la votación real en curso ("Time to reveal vote: 10:13:39, 31 votes"). Además: pregunta real usada por Polymarket ("Did the Chiefs beat the Eagles in the 2022-2023 NFL Superbowl?"), snippet de Solidity real por caso de uso, y grid de logos de proyectos en monocromo. Cero testimonios, cero stats inflados.
6. **Hovers casi invisibles pero consistentes:** CTA blanco a gris claro, links a opacity 50%, todo a 0.3s con la misma curva. La sobriedad del motion es parte del mensaje ("somos infraestructura seria").

**El costo de esa sencillez (para no idealizarla):** no hay funnel de conversión clásico (ni form, ni chat, ni lead magnet), porque UMA no vende: recluta usuarios de protocolo. Cysure sí necesita convertir, así que debe copiar la claridad, no la ausencia de funnel.

---

# Qué robarle a cada uno para Cysure

Prioridad 1 = hacerlo ya en la landing; Prioridad 2 = siguiente iteración; Prioridad 3 = cuando haya presupuesto/tiempo.

## Prioridad 1 (define la página)

1. **De Sofía: la comparativa "Cysure vs seguro cyber tradicional / vs no tener nada".** Es el patrón más efectivo del lote para explicar una categoría nueva en México. Copiar la estructura exacta: 3 columnas, columna Cysure destacada con FRASES de beneficio en es-MX humano ("Te pagamos desde el día 1", "Monitoreamos tu empresa 24/7, no solo te aseguramos"), columna rival solo con X grises, y conceder 2-3 palomitas al rival arriba para credibilidad. 11 filas máximo.
2. **De At-Bay: nombrar la categoría y diagramarla en el primer scroll.** Cysure = "AI & Cyber Insurance": dos cards (PREVENCIÓN: monitoreo con IA / PROTECCIÓN: seguro cyber) unidas por "Un solo aliado". El patrón de las glass cards de At-Bay es directamente adaptable.
3. **De Delta: la disciplina de sistema.** Un fondo (oscuro), UNA tipografía display con caps para eyebrows, CTAs pill de un solo color, acentos por producto. El look de agencia es 70% disciplina y 30% efectos.
4. **De Coalition: doble CTA segmentado en el hero** (¿brokers y empresas?, ¿empresas y CISOs?) + un lead magnet de diagnóstico: "Escaneo de riesgo gratuito" (equivalente al Free Security Assessment). Para Cysure el assessment ES el producto de IA enseñando músculo.
5. **De Stoïk: el score de riesgo /100 como visual del hero.** Un dashboard con score, vulnerabilidades y tendencia comunica "software + seguro" sin una palabra. Si el producto aún no lo tiene, un mock honesto del score del diagnóstico.

## Prioridad 2 (conversión y confianza)

6. **De Delta: motion kit concreto para replicar:** GSAP + ScrollTrigger (reveals `top 30%`, sin scrub salvo hero), SplitText para headlines, transiciones 0.3-0.6s ease, marquee de logos con Splide auto-scroll, keyframes firma (subrayado que se dibuja en nav, punto de luz recorriendo bordes de cards, anillos que se llenan al entrar en viewport). Con eso se cubre el 90% de la sensación premium de Delta.
7. **De Delta: hover states con intención:** badge/flecha que viaja dentro del CTA, cards que se encienden con el color de su producto, "dim siblings" en nav. Definir los 4 hovers (CTA, card, link, tab) antes de construir.
8. **De Coalition: "¿Incidente cyber? Obtén ayuda" persistente en el nav.** Para una aseguradora cyber es posicionamiento puro: vendemos la respuesta, no el papel.
9. **De At-Bay: pricing por paquetes con incentivo visible.** Aunque sea "desde $X", el patrón CORE/ADVANCED/COMPLETE con "PRIMA PREFERENTE" para quien usa el monitoreo replica el mecanismo económico de Cysure (mejor postura = mejor prima).
10. **De Sofía + Coalition + Stoïk: apilar 3 tipos de prueba social distintos:** logos de clientes (marquee estilo Delta con "+N empresas"), respaldo de capacidad (reaseguradoras/socios, estilo "Backed by" de Coalition/Stoïk), y sellos regulatorios mexicanos (CNSF/CONDUSEF, como Sofía). En seguros el respaldo pesa más que los logos de clientes.

## Prioridad 3 (pulido)

11. **De Delta: un solo efecto "wow" bien hecho** (equivalente al humo WebGL). Para Cysure: partículas/red de nodos que reacciona al cursor sobre el hero. Uno solo; dos ya es ruido.
12. **De Sofía: testimonios en video de YouTube con miniatura estilizada** (chip de categoría, nombre, cargo, foto sobre blob). Mucho más creíble que quotes de texto para un mercado escéptico.
13. **De At-Bay: footnotes con superíndices** para todas las afirmaciones de cobertura: honestidad regulatoria que da seriedad de aseguradora, no de startup.
14. **De Coalition: mega-menu educativo** con card "¿Qué es AI & Cyber Insurance?" cuando el sitio crezca de una landing a varias páginas.
15. **De Delta: certificaciones del EQUIPO como marquee** (OSCP, CEH, etc. del equipo de seguridad de Cysure) en lugar de solo logos de compliance: humaniza y da credibilidad técnica.

## La lección de sencillez de UMA (aplicada a Cysure)

Estas van ANTES que todo lo demás: son decisiones de resta, no de suma, y definen si la landing se entiende en 5 segundos.

1. **H1 que sea la definición del producto en una oración, no un slogan.** El equivalente Cysure de "A decentralized truth machine": algo como "El seguro cyber que vigila tu empresa" o "Una máquina de proteger empresas". Si el lockup de Cysure puede incrustarse en el headline como hace UMA con su "OO", mejor: marca = sintaxis.
2. **Una sola metáfora visual desarrollada en etapas numeradas.** En vez de 6 productos con 6 estilos (riesgo del enfoque Delta), UNA ilustración continua del ciclo Cysure: 01 Monitoreamos, 02 Detectamos, 03 Corregimos, 04 Si algo pasa, pagamos. La misma escena evolucionando, con un hilo de color conectando etapas. Leyendo solo los headlines se debe entender el negocio completo.
3. **Presupuesto de diseño cerrado antes de diseñar:** 1 tipografía, 2 fondos, 1 color de acento racionado, 1 CTA repetido. Cada elemento extra necesita justificar por qué existe. La sensación premium de UMA es la disciplina, sin un solo efecto WebGL.
4. **Estructura por audiencia con nav espejo.** "Para empresas / Para brokers / Cómo funciona" y que el nav diga exactamente eso. El usuario nunca duda de dónde está.
5. **Prueba social de producto vivo:** el equivalente Cysure del vote ticker de UMA es un ticker discreto de actividad real: "N amenazas detectadas esta semana en empresas monitoreadas" o el score de riesgo promedio moviéndose. Un dato real y vivo vale más que tres secciones de testimonios.
6. **Headlines sujeto+verbo en es-MX plano.** "Cualquiera puede disputar un statement" es el tono: "Tu empresa se monitorea sola", "Si algo pasa, pagamos". Cero jerga de seguros, cero "soluciones integrales".

## Anti-patrones a evitar
- Delta: el texto de un `<style>` embebido se filtra al textContent del CTA (bug menor de Webflow); y ningún dropdown de nav funcionó en headless (riesgo de SEO/accesibilidad). Revisar accesibilidad de menús custom.
- Coalition: botones con font Arial computada (fallback visible en la extracción): cuidar el fallback stack de fuentes.
- Stoïk: el banner de cookies (Axeptio) tapa el primer scroll completo si no se cierra; con es-MX y CDPA mexicana, usar un banner discreto de una línea.
- At-Bay/Coalition: 0 presencia es-MX. Nadie del lote (salvo Delta y Sofía) habla español: la localización es-MX con copy nativo es en sí misma la ventaja de Cysure frente a los gringos.

## Assets
- `shots/`: 62 capturas curadas (hero, scroll, hovers antes/después, mega-menu, full-page por sitio).
- `data/`: extracción programática por sitio (delta.json + delta-extra.json con ScrollTriggers y hovers, sofia.json + sofia-comparativa.json con las 11 filas literales, coalition.json, atbay.json, stoik.json, uma.json).
