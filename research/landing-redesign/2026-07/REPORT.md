# Rediseño Coalition → Cysure · Launch Landing Page (jul 2026)

Ejecución del blueprint `research/landing-benchmarks/2026-07/README-CYSURE-X-COALITION.md`
sobre el sitio Webflow **Launch Landing Page** (`6a553f8c569e3148ffc68415`,
staging: https://cysurelanding.webflow.io/). Sesión nocturna del 17 al 18 de
julio de 2026. Regla de la fusión aplicada: **se copia el esqueleto de
Coalition, no la piel** — todo token, tipografía y voz salen del design system
Cysure v4.2 (`webflow-instructions/` de este repo) y las cifras del Notion
(Métricas canónicas, BP v3.1).

## 1 · Qué se auditó primero

| Área | Hallazgo | Estado |
|---|---|---|
| Variables Webflow | Colección "Base collection" vacía: cero tokens, un solo modo (sin dark) | Documentado (deuda) |
| Agent instructions | Ninguna instalada en el sitio | ✅ Resuelto: 11 paths instalados (design-system + brand-voice + asset-guidelines + regla dura) |
| SEO metadata | Los 10 titles usaban «—» (prohibido por voz v4.2) | ✅ Resuelto: formato "Página \| Cysure", descriptor canónico |
| OG images | `null` en todas las páginas; el par og-1200x630 oficial no está en el repo | Pendiente equipo (regla: no componer covers nuevos) |
| Assets | 21 assets sin alt text; fundadores con SVG placeholder | ✅ Resuelto: alt ES en 14 assets; fotos oficiales subidas y colocadas en Nosotros |
| Estilos | 2,708 clases; 100% kebab-case; 88% autogeneradas (`cy-div-*`); 241 nombres duplicados (`cy-reveal` ×137); 62 clases de prueba (`cyx-`, `t-`, `tx-`, `probe-`, `sz-test`); hovers como combos por página | Documentado (deuda; ver §5) |
| Copy subpáginas | 24 hallazgos en Producto/Cobertura/Planes/Recursos/FAQ + 19 en Nosotros/Brokers/Express Payout/Legal/nav/footer (middots en Recursos, "AI & Cyber" en orden no canónico, acentos serif de 2-3 palabras, "security score" por "Risk Score") | ✅ En aplicación (agente ejecutor con log en scratchpad) |
| Rediseño Coalition | Solo existían prototipos (`cyx-hero-grid`, `cyx-comp`, `cyx-proof`); el rebuild de 12 bloques nunca se ejecutó | ✅ **Ejecutado esta noche** (ver §2) |

## 2 · El rebuild: Home espejo de Coalition, piel Cysure

Estructura final del Home (orden real publicado):

| # | Bloque (equiv. Coalition) | Implementación Cysure |
|---|---|---|
| B0 | Announcement bar | Barra ink 40px: "Nuevo: cobertura paramétrica hasta USD 250K por evento. Conoce más →" + X con dismiss en localStorage (`cyAnnClosed`) |
| B1 | Navbar sticky ink 68px | Wordmark `cysure` blanco · Seguro ⌄ · Seguridad ⌄ · Soluciones ⌄ · Recursos · Nosotros · "¿Incidente activo? Repórtalo" (coral, único elemento coral del chrome) · CTA "Agenda una evaluación" (invertido). **Mega-menus de 3 zonas** (card destacada sunken + 2 columnas con kicker + links con descripción), overlay ink 50%, fade 220ms |
| B2 | Hero card ink redondeada | Eyebrow royal "CYBER & AI INSURANCE PARA LATAM" → H1 64px Space Grotesk con serif-accent *juntos* → lead → doble CTA por audiencia (Risk Score / Brokers) → pill de caso Express Payout (dot mint) → radar sweep cónico + anillos |
| B3 | Intro claim | "¿Un seguro que *detiene* amenazas antes de que peguen? Conoce Cysure." + Detection-Coverage Alignment con asterisco → sources bar |
| — | Prueba social | Banda de logos existente conservada (marquee); quitado el `grayscale` (regla DS: logos a color) |
| B4 | Trío de features (card blanca radius 40) | 3 filas texto/media con hairlines: Prevención (Risk Score, integraciones, agentes 24/7) · Resilience Lead · Cobertura (triggers A1-A9/B1-B4, Express Payout, on-chain). Screenshots de la Console/Cliente en frames `shadow-frame` |
| B5 | Security (card ink radius 40) | "Sube tus defensas con la *flota* Cysure." + 6 tabs pill con **nombres canónicos del Registro de agentes** (Sentinel · Hunter · Watcher EASM · Watcher Dark Web · AI Scout · AI Auditor), panel dinámico por JS, stat por agente, banda "detección T+0 y payout en 24 a 48 h**" con el payout en mint sobre ink |
| B6 | Staccato (card sunken radius 40) | Eyebrow royal "SIN SEÑAL, NO HAY COBERTURA" + "Ransomware. / Fraude de transferencias. / Phishing con AI. / Y lo que *siga*." + CTA ink |
| — | Comparativa (P1 Sofía) | Tabla comparativa existente conservada (patrón prioridad 1 del benchmark); acento serif del heading reducido a una palabra |
| B7 | Casos (card ink) | "Cada póliza empieza con una *detección*." + 3 escenarios con icon-chips royal (ransomware T+0, dark web B1, shadow AI) — **sin casos inventados**, mecánica real del producto |
| B8 | Backed by (card sunken) | "Capacidad *real*, sellada on-chain." + tiles texto (Ensuro · Etherisc · USDC · Bridge y Stripe · MGA bajo CNSF) — fallback autorizado del blueprint mientras no haya SVGs oficiales |
| — | Calculadora Risk Score | Quiz existente conservado (lead magnet P1, el assessment de Coalition) + ancla `#calculadora` vía JS |
| B9 | Knowledge (card ink) | "Adelántate a las amenazas con *criterio*, no con miedo." + 3 cards (Recursos, Brokers, Calculadora) |
| B-cta | Cierre | "Del incidente al payout en *horas*." + doble CTA espejo del hero |
| B10 | Sources bar | En el footer (todas las páginas): metodología DCA, SLA Express Payout, cap USD 250K |
| B11 | Footer ink 5 columnas | Kickers SEGURO/SEGURIDAD/SOLUCIONES/RECURSOS/COMPAÑÍA + contacto (hola@cysure.ai) + párrafo regulatorio existente conservado + fila legal (🇲🇽 México, única excepción de emoji) + strip de capacidad + "cysure.ai © 2026" |

Secciones viejas eliminadas del Home: 13 (hero v5, stats band, propuesta,
pasos, plataforma, flota 12, equipo, el problema, payout timeline, cumplimiento,
FAQ — vive en `/faq` — y CTA final v5). El chrome propaga a las 11 páginas vía
componentes SiteNav/SiteFooter. Los modales existentes (demo con gate de correo
corporativo, "Cómo funciona" de 4 pasos) se conservaron y se recablearon a los
nuevos CTAs.

### Adaptaciones v4.2 sobre el blueprint (donde el blueprint quedó viejo)
1. Serif-accent en **royal** (`#3B5BFF` / `#7C92FF` sobre ink), no navy: navy es legacy en v4.2.
2. **Cero middots «·» y cero em dashes «—»** en todo el copy (el blueprint aún los usaba); verificado con grep sobre el HTML publicado: 0 ocurrencias visibles.
3. Botones radius 11 (nunca el rectangular Coalition), primario ink / invertido sobre ink, hover brightness + flecha 4px.
4. Cifras solo de Métricas canónicas (Notion): USD 250K por evento, T+0, 24 a 48 h, A1-A9/B1-B4, Ensuro/Etherisc/USDC/Bridge-Stripe, tiers Essential/Professional/Enterprise SME.
5. Flota con nombres canónicos del Registro de agentes (no los del blueprint: "EASM" → "Watcher EASM", etc.).

## 3 · Motion y JS (site-wide)
- Easing único `cubic-bezier(.2,.7,.2,1)`; mega-menus 220ms fade + overlay; announcement dismiss persistido; tabs de flota con swap de contenido; scroll-reveal y elevación de nav conservados; `prefers-reduced-motion` respetado.
- Hovers viven en el head del sitio (el import WHTML no trae `:hover`): capa `v6` añadida sin tocar las capas previas.
- El radar del hero se corrigió a `background-image: conic-gradient(...)` explícito (el shorthand se aplanaba a gris sólido).

## 4 · Cambios fuera del Home
- **SEO**: 10 páginas re-tituladas sin «—» (ya publicado).
- **Copy**: correcciones de las 2 tablas de findings en aplicación (descriptor "Cyber & AI Insurance", "Risk Score", `700 / 1000`, acentos serif a una palabra, middots de Recursos, mensajes de éxito/error del form de demo en español).
- **Assets**: fotos oficiales de fundadores en Nosotros; alt text ES en todos los assets de contenido.
- **Instructions**: las 3 skills + regla dura de `webflow-instructions/` instaladas en el sitio (11 paths).

## 4.1 · Ronda v6.1 (feedback de Toño, aplicada y publicada)
1. **Links azules subrayados / tipografías rotas**: causa raíz — el importador WHTML eliminó el atributo `class` de 37 anchors (items del nav, links de mega-menus y footer), que caían al default del navegador (Arial azul subrayado). Recuperados por selectores de contexto en la capa `v6.1` del head; también se restauró el hover de botones (brightness + flecha 4px) que dependía de clases perdidas.
2. **Radios**: section cards de 40px → **20px** (hero `0 0 20px 20px`), alineado al techo del DS.
3. **Tags de capacidad**: el bloque "Capacidad real, sellada on-chain" (Ensuro · Etherisc · USDC · Bridge y Stripe) venía del vocabulario BP v3.0. Contrastado contra el **Modelo de negocio BP v3.1** (Notion): la Fase 2 coloca cobertura vía **MGA partner / carrier de fronting regulado**, con payout en stablecoin y off-ramp instantáneo. El bloque se reconstruyó como "Cobertura con respaldo *regulado*" (carrier de fronting regulado · 9 triggers AI y 4 cyber · off-ramp instantáneo · CFDI) y la strip del footer igual. **Polygon** y **Ensuro** se retiraron también de la banda de integraciones (texto e imagen) — no son integraciones del producto.
4. **Copy fixes** de las 2 auditorías de subpáginas aplicados (28 hallazgos, 0 fallos): descriptor "Cyber & AI Insurance", "Risk Score", `700 / 1000`, acentos serif reducidos a una palabra, middots de Recursos, "¿Listo" singular, y mensajes de éxito/error del formulario de demo en español.
5. **Animaciones nuevas** (easing DS `cubic-bezier(.2,.7,.2,1)`, respetan `prefers-reduced-motion`): rise-in al scroll de cada bloque nuevo; **stagger** de 90ms en las líneas del staccato y de 70ms en cards de recursos y escenarios; **crossfade** del panel de la flota al cambiar de tab; ya existentes: radar del hero (corregido a `conic-gradient` con alpha), marquee de integraciones, pulso del dot mint, flecha de CTAs.

## 4.2 · Ronda v6.2 (4 animaciones aprobadas por Toño, publicadas)
1. **Subrayado que se dibuja** al hover en links del footer y en la card destacada de los mega-menus (patrón Delta, 300ms, easing DS).
2. **Dim siblings** en el nav: al hacer hover sobre un item, los demás bajan a 50% de opacidad.
3. **Contador del Risk Score**: el 360 de la calculadora sube animado de 0 a 360 al entrar en viewport (900ms, ease-out; termina exacto en 360 para no romper el quiz). Registrado como inline script `CysureScoreCounter` aplicado solo al Home.
4. **Red de nodos en el hero** (el único efecto "wow"): canvas con ~30-44 nodos y enlaces royal-dark de baja opacidad que reaccionan suavemente al cursor. Pausada fuera de viewport, DPR-aware, sin librerías (~1.5KB). Registrado como inline script `CysureHeroNet` aplicado solo al Home.
Todas respetan `prefers-reduced-motion`. Nota operativa: los bloques grandes de custom code se llevaron al mecanismo de registered scripts de Webflow para evitar los timeouts del prompt de permisos con payloads gigantes.

## 4.3 · Ronda v6.3 (feedback de Toño, aplicada y publicada)
1. **Logo**: el wordmark de texto se reemplazó por el `cysure-lockup.svg` oficial (currentColor, blanco) en nav y footer.
2. **Gutters**: las section cards ya no tocan el borde de la página (14 a 16px de aire); el hero ahora es card flotante con 4 esquinas a 20px.
3. **Final del Home aligerado**: Recursos pasó a tono claro (sunken) con chips y acento serif en variantes light; los únicos bloques ink del cierre son Casos, CTA y footer. Se eliminaron los anillos decorativos de Casos.
4. **Radar del hero y red de nodos eliminados** (elemento y script fuera).
5. **Descriptor corregido a "AI & Cyber Insurance"** (decisión del founder, AI primero) en hero, mega-menu, SEO, footer y las 8 ubicaciones de subpáginas; `nomenclatura.md` actualizado en repo y en las instructions del sitio. Nota: la wiki de Notion aún dice "Cyber & AI" en varios puntos — pendiente de actualizar en HQ.
6. **Codenames A1-A9/B1-B4 retirados del copy público** (Home, mega-menus, JS de la flota; subpáginas ya estaban limpias) y regla nueva en nomenclatura: los códigos de triggers son internos.
7. **4 páginas nuevas** con chrome completo: `/como-funciona` (4 pasos), `/risk-score` (score, fuentes del cálculo), `/flota` (6 agentes canónicos + human-in-the-loop), `/incidente` (**formulario propio de reporte de incidente**, ya no el modal de demo). Mega-menus y nav recableados a páginas reales.
8. **Footer simplificado**: lockup SVG + iconos de LinkedIn y X (URLs de perfiles pendientes de confirmar) + fila única con TODAS las páginas + footnotes + párrafo regulatorio + fila legal compacta. Fuera las 5 columnas con kickers y la strip de tiles.

## 4.4 · Ronda v6.4 (integraciones del prototipo + footer a detalle)
1. **Banda de integraciones alineada al prototipo de la Cysure App**: los tiles ahora son exactamente los 7 conectores de la pantalla Conexiones del UI kit Cliente (Google Workspace, Okta, OpenAI, GitHub, Google Cloud, Microsoft 365, Anthropic Claude). Fuera CISA KEV, NVD, crt.sh y Have I Been Pwned (fuentes de threat intel, no integraciones) y fuera Polygon/Ensuro.
2. **Footer depurado a detalle**: se eliminó la banda CTA legacy v5 que sobrevivía dentro del contenedor del footer del Home ("¿Listo para controlar tu AI & cyber risk?", duplicaba el cierre nuevo) y su spacer; el párrafo regulatorio se integró al cluster de small-print del footer (fuera el wrapper viejo con su padding). El footer queda: logo + redes, fila de 14 páginas, small-print (footnotes + disclaimer), fila legal.

## 5 · Deuda y pendientes (siguiente iteración)
1. **Variables Webflow**: crear la colección de tokens (colores light/dark, radios, tipografía) y recablear las clases `cy-*6` — hoy los valores son hex canónicos pero hardcodeados.
2. **Higiene de estilos**: purgar las 62 clases de prueba y consolidar los 241 nombres duplicados (censo completo en curso; ver scratchpad `styles-census.md`).
3. **Subpáginas**: reciben el chrome nuevo automáticamente; sus cuerpos aún usan el layout v5. Migrarlos a section cards radius 40 alternando page/ink/sunken.
4. **OG images**: pedir al equipo el par `og-1200x630-{light,dark}` y asignarlo.
5. **Lockup SVG en nav/footer**: hoy el wordmark es texto en Space Grotesk (heredado de v5); sustituir por `cysure-lockup.svg` blanco según asset guidelines.
6. **Headings sin acento serif** en Legal y "Sigue explorando" (Producto/Cobertura/Express Payout): requieren insertar `em` nuevo, fuera del alcance nocturno.
7. **Móvil**: los bloques usan grids auto-fit y clamp(); falta QA fino < 960px (mega-menus caen a panel fijo).
8. Quitar el `noindex` de staging antes del lanzamiento a producción (nota ya presente en el head).

## 6 · Referencias técnicas
- Clases nuevas del rebuild: prefijo `cy-*6` (`cy-hero6-*`, `cy-trio6-*`, `cy-fleet6-*`, `cy-stac6-*`, `cy-cases6-*`, `cy-cap6-*`, `cy-res6-*`, `cy-end6-*`, `cy-ann*`, `cy-nav6-*`, `cy-mm-*6`, `cy-ft6-*`).
- CSS: head del sitio, capa "v6 (rediseno Coalition jul 2026)". JS: footer del sitio, segundo `<script>` (v6: announcement + mega menus + fleet tabs + ancla quiz).
- Cifras: database Métricas canónicas (Notion HQ) · nombres de flota: Arquitectura multi-agente (Notion) · reglas: `webflow-instructions/` (DS v4.2).
