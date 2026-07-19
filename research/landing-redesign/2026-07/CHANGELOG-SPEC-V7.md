# Changelog · Ejecución del spec "Cysure Launch Landing" v7 (jul 2026)

Sitio: Launch Landing Page (`6a553f8c569e3148ffc68415`, `cysurelanding.webflow.io`).
**Estado de publicación: NO publicado.** Todos los cambios viven en el Designer,
pendientes de autorización de Toño (regla §0 del spec).

---

## Globales

### G1 · Nav claro al pasar el hero
- El nav sigue oscuro (ink) sobre el hero; al hacer scroll más allá del hero el JS
  global le agrega `.cy-nav-lt` (fondo blanco 96% + blur, links ink, logo ink, CTA
  ink). Transición con el easing de marca.
- El umbral se calcula con el atributo `data-cy-hero="1"` que ahora lleva la primera
  sección de cada página (fallback 320 px si no existe).

### G2/G4 · Primera sección oscura + gutters + divisores curvos
- Patrón aplicado en Home (ya lo tenía) y replicado por agentes en todas las
  subpáginas: sección hero como card ink radius 20 con gutter de 14/16 px, secciones
  siguientes como cards claras con esquinas redondeadas.

### G3 · Animaciones decorativas eliminadas
- Head del sitio v7: se eliminaron keyframes decorativos (pulse, sweep, ping,
  marquee, scan, drift) y los 3 scripts de scroll-reveal del footer.
- Regla de seguridad site-wide: `[class*="cy-anim-"]:not([class*="cy-anim-nav-"])
  { animation-duration: 0s }` congela cualquier animación vieja que quede en páginas
  (duration 0 conserva los estados finales de overlays con `forwards`).
- La banda de conectores del Home pasó de marquee infinito a banda estática con
  wrap (se borraron los 7 tiles duplicados de la segunda copia).
- El radar del modal "Cómo funciona" (sweep + ping) quedó oculto; el modal conserva
  su ring estático, icono y métricas.
- Se conservan (funcionales): fades de apertura de modales y mega-menús, hovers
  (brightness/lift/underline/dim), crossfade de tabs de flota, la calculadora y el
  toggle del nav (G1). Todo respeta `prefers-reduced-motion`.
- El contador 0→360 del quiz (script registrado `cysurescorecounter`) se quitó del
  Home.

### G5 · Logos de vendors (agente)
9/9 conseguidos y subidos como assets (fuente oficial/Wikimedia/svgl):
Slack `6a5cddde4cd40be74ae2b5f0`, Google Cloud `6a5cddde4cd40be74ae2b629`,
AWS `6a5cddde9a60ab3cb311d4a9`, Azure `6a5cddde46eb862f1b2e4d53` (⚠ icono oficial
2021; no existe SVG público del lockup horizontal vigente),
SentinelOne `6a5cddde2d9bea309a9c70e9`, CrowdStrike `6a5cdddf46eb862f1b2e4e58`,
Notion `6a5cdddf46eb862f1b2e4e8d`, Trend Micro `6a5cdddf9f24612fc90f5ef0`,
Bitdefender `6a5cdddf4cd40be74ae2b74a`.

### G6 · Mega-menús con visual
- Los 3 paneles destacados (`cy-mm-feat6`) llevan ahora un motivo generativo de
  marca: anillos concéntricos estáticos + punto royal sobre mini-card ink
  (`cy-mm-motif`). Sin animación (decisión D pendiente de Toño: si prefiere estilo
  caricatura, se cambia el motivo).
- Labels del mega actualizados: "Cobertura Cyber Risks" → `/cobertura-cyber-risks`,
  "Cobertura AI Risks" → `/cobertura-ai-risks`, "Resilience Lead" →
  `/resilience-lead`. Fix de copy: "Doce agentes" → "Once agentes".

### Otros globales
- Acento serif cambia de mint a navy: `#3A5BA8` en claro / `#AEBEE6` sobre ink
  (overrides en head sobre las clases `cy-serif-a/ad`, `cy-*-em/em2`).
- Fix X de modales (S10): `cy-demo-close`, `cy-how-close` y la nueva `cy-inc-close`
  ahora absolutas arriba a la derecha del diálogo.
- Script registrado nuevo `cysurev7chrome`: inyecta CSS responsive de las secciones
  nuevas (footer 5→2→1 columnas, blog 3→1, grid del modal de incidente) y marca el
  chip 0 de la flota como activo al cargar.
- STEPS del modal "Cómo funciona": "12 agentes" → "11 agentes".
- Se mantiene el `noindex` de staging (quitar antes del launch a producción).

## Home

- **H1 video:** placeholder de video en el hero (`cy-vid6`): frame ink 16:9 con
  sombra, botón de play blanco y "VIDEO PRÓXIMAMENTE". Sin comportamiento de click
  (no hay video aún).
- **H2 flota:** sección reconstruida con la flota canónica del prototipo en 2
  grupos: CYBER RISKS (AI Augmented MDR, Attack Surface Agent, Red Team Agent BETA,
  Cloud Security Agent, Email Security Agent, Deep Security Agent) y AI RISKS
  (Scout Agent, Audit Agent, Vendor Watcher Agent, Adversary Agent, Gateway Agent).
  11 chips → panel con título/cuerpo/métrica por agente (array FLEET nuevo en el JS
  global). ⚠ "Spending Agent" aparece en el spec pero NO existe en el prototipo de
  la app: se omitió a propósito.
- **H3 comparativa (agente):** el texto plano "cysure" del encabezado se reemplazó
  por el lockup SVG oficial (22 px, currentColor); tabla desarrollada a 6 filas
  sustantivas con ángulo Detection-Coverage (detección y respuesta incluidas,
  Express Payout 24 a 48 h, Risk Score continuo, 9 riesgos de AI, verificación T+0,
  precio alineado a postura real) con ✓ mint en chip ink para Cysure y columna
  tradicional en gris neutro.
- **H4 calculadora:** arranca en 0 / 1000 (antes 360); los puntajes se reescalaron
  para que el máximo sea exactamente 1000; umbrales 700/600 intactos; "Volver a
  empezar" resetea a 0. Gauge reducido ~40% (SVG 250→150 px, número 46→28 px).
- **H5 blog:** nueva sección "DEL BLOG" antes del CTA final: Collection List
  enlazada a la colección Blog Posts (límite 3, orden Published On descendente),
  cards con título, excerpt y tiempo de lectura bound a CMS y link al post.
  Covers: ver `BLOG-COVERS-SPEC.md` (H5b, prompts listos; imágenes no generadas).
- **H6 footer (componente SiteFooter):** reconstruido estilo Coalition: lockup +
  4 iconos sociales (LinkedIn, X, + nuevos YouTube e Instagram; hrefs "#" ⚠ faltan
  URLs reales) + 5 columnas (Producto / Cobertura / Recursos / Compañía / Legal)
  con las 17 páginas + footnotes y disclaimer regulatorio intactos + barra inferior
  México/legal intacta. La fila plana de 14 links se eliminó.
- **S10 incidente:** nuevo modal global de incidente en SiteNav (`data-nav-inc`),
  tono urgente-pero-calmado, form real (nombre, empresa, correo, teléfono, detalle)
  con mensajes de éxito/error en español; el link "incidente" del nav ahora abre el
  modal (`data-nav-open-inc`) y `/incidente` queda como fallback (link dentro del
  modal). Botones y textos tipo "incidente activo" también lo abren.

## Páginas nuevas creadas
- `/cobertura-cyber-risks` (6a5ce02031c8a1455c6eedf5) · `/cobertura-ai-risks`
  (6a5ce02146eb862f1b3031f1) · `/resilience-lead` (6a5ce02208be4027db8f3f2a) ·
  `/integraciones` (6a5ce022a7b58bea14aed7e2), con SEO title/description.

## Subpáginas

### S7 · /resilience-lead (agente, nueva)
Hero ink "Un humano al frente de tu resiliencia" → Qué hace por ti (4 cards: plan
de Risk Score, priorización de hallazgos de los 11 agentes, acompañamiento en
incidentes, evidencia ISO/IEC 42001 y SOC 2) → Cómo trabaja contigo (3 pasos) →
Complementa a tu equipo → CTA. Rol genérico, sin nombres inventados.

### S9 · /nosotros (agente, reconstruida)
Hero con misión → Por qué existimos (Detection-Coverage Alignment) → Cómo lo
hacemos (flota + T+0 + Express Payout) → Hechos para LATAM → Fundadores (solo
Toño Arellano CEO y Diego Silveira CTO, en ese orden, con sus fotos reales como
assets y bios sobrias de rol) → CTA.

### S1 · Split de cobertura (agente)
- **/cobertura-cyber-risks** (nueva): hero ink → "Qué cubre" con las 4 risk-cards
  cyber del copy aprobado (brecha de datos, ransomware confirmado, interrupción de
  operación, fraude electrónico BEC), cada una con "la señal que lo detecta" →
  "Cómo se dispara el pago" (T+0, telemetría propia, sin peritajes) → "Límites y
  pago" (USD 250K por evento, 24 a 48 h, moneda local, carrier de fronting
  regulado) → "Elegibilidad" (700 / 1000 con Resilience Lead) → CTA.
- **/cobertura-ai-risks** (nueva): misma estructura con los 9 riesgos de AI del
  copy aprobado (caída de proveedor de AI, fuga de datos por IA, manipulación con
  impacto, error con pérdida material, falla de auditoría, costo descontrolado,
  compromiso vinculante, sesgo discriminatorio, degradación de modelo) y sus
  badges de casos reales existentes.
- **/cobertura** → índice: hero corto + 2 cards grandes (AI Risks primero, luego
  Cyber Risks) + banda "Solo aseguramos lo que detectamos con nuestra propia
  telemetría." Se eliminó el efecto de grid + línea de escaneo con las secciones
  viejas.
- ⚠ Copy del índice viejo que quedó sin hogar (por si se quiere rescatar en otra
  página): "¿Para quién?" (industrias), "Sigue explorando" y "¿Cómo funciona la
  cobertura?".

### S3/S4 · Planes + Risk Score (agente)
- **/risk-score** (reconstruida a fondo): hero ink con gauge SVG estático (arco
  mint sobre ink, ejemplo 800 / 1000 con marca del umbral 700 y leyenda "ejemplo
  ilustrativo") → "Qué lo mueve" (6 señales, las mismas dimensiones de la
  calculadora del Home) → "Los rangos" (menos de 600 / 600 a 699 / 700 o más, con
  qué hacer en cada uno) → Detection-Coverage Alignment → CTA doble ("Calcula tu
  score preliminar" → /#calculadora y "Agenda una evaluación" → modal).
- **/planes** (solo restyle, copy y precios verbatim): hero a ink card + gutters;
  pricing conservado tal cual (Cysure Starter USD 349 / mes, Cysure Active USD 899
  / mes destacado, Cysure Enterprise USD 2,400 / mes, 15 líneas de features,
  footnote «desde»); tabla comparativa de 7 filas reconstruida con columna Active
  resaltada; 10 add-ons (6 AI + 4 Cyber) con sus iconos originales; overlays
  decorativos del CTA viejo eliminados.
- ⚠ Nota de nomenclatura: la página usa los nombres comerciales Cysure
  Starter/Active/Enterprise; los docs internos hablan de tiers
  Essential/Professional/Enterprise SME. Se conservó el copy existente (S3 prohíbe
  cambiarlo); renombrar es decisión de copy aparte.

### S5/S6/S2 · Cómo funciona + FAQ + Express Payout (agente)
- **/como-funciona** (reconstruida a fondo): hero ink con strip de pasos 01 a 04 →
  timeline vertical con icon-chips SVG y métrica por paso (24/7 con 11 agentes,
  700 / 1000, T+0, 24 a 48 h) → banda "Detrás: Detection-Coverage Alignment" con
  4 stats → CTA final. Copys canónicos (sin agentes invasivos ni SOC propio, sin
  cuestionarios anuales, sin peritajes, siempre fiat).
- **/faq** (expandida): se conservaron las 21 preguntas existentes y se agregaron
  6 nuevas (total 27) con el mismo patrón de acordeón: score bajo 700 después de
  contratar, carrier de fronting regulado, Resilience Lead en el día a día, qué
  datos lee Cysure, y un grupo nuevo "Cumplimiento" (marcos ISO/IEC 42001, EU AI
  Act, NIST AI RMF, SOC 2; AI de vendors externos). Hero convertido a ink card.
- **/express-payout** (solo estilo, cero copy): hero a ink card con gutter;
  eliminados el botón "Reproducir simulación", el radar cónico, el grid y la
  línea de barrido; todas las secciones con el patrón de gutters y cards.
- ⚠ Notas: los estilos huérfanos `cy-cf-*` viejos quedaron sin uso (limpieza
  posterior opcional); los paneles legacy ocultos del FAQ viejo no se tocaron para
  no alterar el JS; la banda CTA final de express sigue full-bleed a propósito
  (patrón compartido del cierre de página, decisión a nivel sitio).

### S8 + pack G2/G4 · Integraciones + producto/recursos/brokers/legal (agente)
- **/integraciones** (nueva): hero ink ("Conecta lo que ya usas. Sin cambiar cómo
  trabajas.") + 4 secciones de categoría con 15 cards blancas con logo real:
  Identidad y productividad (Google Workspace, Microsoft 365, Okta, Slack,
  Notion), Nube y desarrollo (Google Cloud, AWS, Azure, GitHub), Seguridad
  (SentinelOne, CrowdStrike, Trend Micro, Bitdefender) y AI (OpenAI, Anthropic
  Claude). Los 7 conectores del prototipo llevan chip oscuro "Conector nativo";
  el resto, chip claro "Señales soportadas". Sin JS de filtros: el "filtrado" es
  por secciones estáticas.
- Logos adicionales conseguidos y subidos (ya no faltan): Okta
  `6a5ce21c709930699f196077`, GitHub `6a5ce21dca6896f20c371ec9`, OpenAI
  `6a5ce21d159a5037138393de`, Anthropic Claude `6a5ce21dd53727dee341465a`.
- **Pack G2/G4** (solo estilo, cero copy): heroes de producto, recursos, brokers y
  legal convertidos a ink card con gutter + `data-cy-hero`; eliminados 14
  overlays decorativos en total (retículas, barridos de luz, radares cónicos,
  glow blobs); botones de hero invertidos a modo oscuro; en legal se separó el
  contenido en hero + card clara sin tocar textos ni links.

---

## Ronda "luz verde" (19 jul 2026, decisiones de Toño aplicadas)

Toño respondió: publicar autorizado; caricaturas para el mega-menú; adelante con
los covers; tiers públicos = Starter/Active/Enterprise; URLs de redes aún
pendientes.

- **Covers del blog (H5b ejecutado):** 7 ilustraciones SVG planas estilo
  caricatura editorial (paleta Cysure, compuestas a mano siguiendo los prompts de
  `BLOG-COVERS-SPEC.md`), subidas como assets y asignadas al campo Cover de los
  7 posts (publicados). La card del Home ahora muestra el cover bound al CMS
  (`cy-blog6-cov`, 150 px, object-fit cover). Si Toño prefiere versiones raster
  generadas con IA, los prompts siguen listos en el spec.
- **Mega-menú a caricatura (decisión D):** los anillos se reemplazaron por 3
  escenas cartoon SVG: escudo amigable con paloma mint (Seguro), tres bots de la
  flota (Seguridad) y cohete con estela mint (Soluciones).
- **Tiers:** confirmados los nombres comerciales Cysure Starter/Active/Enterprise.
  Codificado como regla 12 de `nomenclatura.md` (repo + instrucción del sitio,
  v3). Se corrigió un leak de los nombres internos en la descripción de "Planes
  y precios" del mega-menú.
- **Fix de census:** una pregunta del FAQ decía el descriptor en orden inverso;
  corregida a "AI & Cyber Insurance".
- **PUBLICADO a staging** (`cysurelanding.webflow.io`; publish base + 2 fixes).
  Census final sobre las 18 páginas publicadas: 0 codenames internos, 0 «—»,
  0 «·», 0 descriptores en orden inverso, 0 nombres internos de tiers,
  `data-cy-hero` presente en todas. El `noindex` de staging sigue puesto
  (quitar antes del dominio de producción).

## ⚠ Pendientes
1. URLs reales de LinkedIn, X, YouTube e Instagram (hoy `href="#"`); se conectan
   en cuanto Toño las comparta.
2. "Spending Agent" del spec no existe en el prototipo: ¿se agrega al prototipo o
   se elimina del spec?
3. Logo Azure: solo existe el icono oficial vigente en SVG público (sin wordmark).
   Los demás 12 logos (incl. Okta, GitHub, OpenAI y Anthropic) sí se consiguieron.
4. El middot «·» que sugiere el guardrail del spec NO se reintrodujo: choca con las
   reglas v4.2 instaladas en el sitio (sin «·» ni «—» en copy).
5. Covers: si se prefieren ilustraciones raster generadas con IA en lugar de los
   SVG actuales, usar los prompts de `BLOG-COVERS-SPEC.md` y reemplazar el campo
   Cover de cada post.

## Ronda de feedback visual (19 jul 2026, 10 puntos de Toño)

1. **Nav alineado con las cards:** el nav ahora flota con margen de 16 px por
   lado y radius 14 (mismo ancho que la card del hero), en oscuro y en claro.
2. **Video a la derecha del hero:** hero convertido a grid de 2 columnas
   (texto en wrapper `cy-hero6-left`, frame de video a la derecha con un bot
   caricatura asomándose); apila en móvil.
3. **Iconos en la banda de integraciones:** los 7 conectores tienen logo real
   (Okta y Google Cloud como wordmark solo, GitHub/OpenAI/Anthropic icono +
   nombre). El duplicado que se veía en el screenshot era del publish
   intermedio; la banda publicada tiene 7 tiles.
4. **Iconos en los 11 agentes:** cada chip de la flota lleva su icono SVG de
   trazo (escudo, globo, mira, nube, correo, capas, ojo, checklist, edificio,
   rayo, embudo).
5. **Ilustración en "Sin señal, no hay cobertura":** sección a 2 columnas con
   ilustración caricatura original (bot con antena captando señal mint que
   conecta con un escudo con paloma).
6. **Quiz:** botón «← Anterior» ahora es visible (era ink sobre fondo oscuro:
   invisible); el arco del gauge se llena en proporción al score y cambia
   rojo → ámbar (600) → verde (700), igual que el badge; al iniciar, el arco
   está vacío en 0.
7. **Blog en carrusel:** una sola fila con scroll-snap, 6 posts y flechas
   ‹ › como indicador en el encabezado de la sección.
8. **Negritas del mega-menú:** el selector castigaba a los spans anidados
   (`span:last-child` descendiente); se cambió a hijos directos + reglas de
   herencia. "Cobertura Cyber Risks"/"AI Risks" ya pesan igual que el resto.
9. **Hover en nav claro:** el estado activo del mega-menú pasó de estilos
   inline (color de modo oscuro) a la clase `cy-mmbtn-on`, con variante gris
   clara cuando el nav está blanco.
10. **Pass "friendly" estilo Coalition** (análisis estructural de
    coalitioninc.com; copy 100% original): kickers pill, icon-chips, bandas de
    stats con cifras aprobadas, escenarios ilustrativos narrativos y mini-FAQs
    agregados por agentes en cobertura-cyber-risks, cobertura-ai-risks,
    cobertura (índice), resilience-lead e integraciones.

Publicado a staging y verificado por census de HTML (hero 2-col, 7 tiles con
logos, 11 chips con icono, carrusel, fixes de nav; 0 codenames, 0 «—», orden
AI & Cyber correcto). Pendiente: QA visual en Designer (los screenshots
automatizados fallaron por red del sandbox) y la frase cortada de Toño sobre
el inicio del cuestionario.

## Ronda 4 (19 jul): fixes de QA de Toño + AUDITORÍA de código viejo

### Fixes
1. **Banda de integraciones duplicada:** la causa era el script legacy
   `cysurepunchmotion` (era v5) que clonaba los tiles en el navegador
   (`track.innerHTML += track.innerHTML`); curl veía 7 tiles pero el browser
   mostraba 14. Script removido y banda estática correcta.
2. **Modal de evaluación cortado:** los 3 modales (demo, cómo funciona,
   incidente) ahora centran con `margin:auto` + overlay con scroll: nunca se
   corta arriba y hacen scroll interno si no caben.
3. **CTA de incidente:** pill rojo con icono de alerta (rojo claro sobre nav
   oscuro, rojo pleno sobre nav claro) y el modal abre con banda de hotline
   roja "Línea de incidentes 24/7". ⚠ El número real está pendiente de Toño;
   mientras, la banda dice "número disponible al lanzamiento".
4. **Nav fusionado + liquid glass:** 3 estados: transparente fusionado con el
   hero al tope, glass oscuro (blur+saturate) al hacer scroll dentro del hero,
   y glass blanco de borde a borde al pasar el hero. Los heros de todas las
   páginas se pegan al tope (gutter superior removido y compensado).
5. **Hero redistribuido:** h1 a clamp(34-50px), lead 16px/46ch, tag de Express
   Payout compacto tipo pill con texto corto.
6. **Checks de la comparativa** alineados: chip ✓ fijo + texto a la izquierda
   en bloque centrado de 430px.
7. **/flota completada a fondo:** hero + banda de stats + 6 agentes Cyber
   Risks y 5 AI Risks en cards con icono y "Alimenta:" (qué parte de la
   cobertura nutre cada agente) + panel Detection-Coverage Alignment + sección
   del Resilience Lead + mini-FAQ + CTA.

### Auditoría de código (pedida por Toño)
- **Scripts registrados:** removidos de aplicación los 2 legacy
  (`cysurepunchcorev3`, `cysurepunchmotion`); quedan aplicados solo
  `cysurev7chrome` (responsive + chip inicial). El interino `cysurev7navglass`
  se consolidó al head y se removió. Los registros muertos (heronet,
  fleetnames, scorecounter, responsive, punch ×2) no cargan ni un byte; la API
  devuelve 400 al intentar borrarlos del registro (limitación de Webflow).
- **Custom code por página:** limpiados 10 bloques con CSS de animaciones
  muerto y 6 scripts de scroll-reveal legacy (violaban G3 a nivel página) en
  producto, cobertura, planes, recursos, faq, nosotros, brokers,
  express-payout, legal y el template de artículo. Se conservó el filtro de
  categorías de /recursos (funcional).
- **Head del sitio consolidado a v8:** de 8 bloques históricos a 4; podadas
  34 reglas hover de clases que ya no existen en ningún HTML publicado
  (census), más `cy-und/cy-dim/cy-tabp/cy-ft6-*/cy-nav2-lnk` sin uso.
- **Footer del sitio consolidado a v8:** podados el dropdown legacy
  (`data-nav-dropdown`) y el marcador de link activo (`data-nav`), ambos con
  0 usos en el HTML publicado; el toggle del nav ahora maneja los 3 estados.
- Las clases `cy-anim-*` que persisten en atributos de elementos viejos son
  inertes (sin CSS y congeladas por la kill-rule); limpiarlas elemento por
  elemento es cosmético y queda como opcional.

Census final post-publish: 0 codenames, 0 «—», 0 descriptores invertidos,
0 tiers internos; scripts legacy fuera del HTML; /flota completa con los 11
agentes canónicos.
