# Auditoría y ejecución SEO + GEO de cysure.ai (staging Launch Landing Page)

Fecha: 20 de julio de 2026. Sitio: `Launch Landing Page` (cysurelanding.webflow.io, siteId 6a553f8c569e3148ffc68415), el staging que será cysure.ai.
Nota de alcance: esta sesión trabajó sobre el sitio de esta landing. "La Tesis" (página de inversores en el cysure.ai actual) vive en otro sitio de Webflow y no se tocó. El skill `cysure-webflow` no está disponible en esta sesión; se aplicó el tiering descrito en el prompt maestro (Tier A auto-aplicado y staged, Tier B solo propuesto).

## 1. Reporte de auditoría técnica (Fase 0-1)

Inventario: 18 páginas estáticas + 3 colecciones CMS (Blog Posts con 7 items, Autores con 3, Categorías con 4). Estado ANTES de esta ronda y fix aplicado:

| Hallazgo | Severidad | Estado |
|---|---|---|
| 0 páginas con Open Graph (título, descripción, imagen) | Alto | CORREGIDO: OG completo en las 18 páginas + cover 1200x630 nuevo generado desde assets de marca (`og-cysure-1200x630.png`, asset 6a5d77d57c0068b53838d1d5) |
| 0 páginas con schema JSON-LD | Alto (crítico para GEO) | CORREGIDO: Organization+WebSite en Home, Service en 11 páginas de oferta, FAQPage con 20 preguntas reales en /faq, AboutPage, ContactPage, CollectionPage |
| Titles genéricos "Página \| Cysure" sin keyword | Alto | CORREGIDO: title con keyword primaria al inicio en las 18 páginas (55-61 chars), metas 108-155 chars con propuesta de valor y CTA |
| robots.txt en staging: `Disallow: /` | Informativo | Comportamiento por diseño de Webflow en *.webflow.io. Al publicar en cysure.ai se abre solo. Verificar entonces que NO bloquee GPTBot, ClaudeBot, PerplexityBot ni Google-Extended |
| sitemap.xml: 404 en staging | Informativo | Webflow lo genera al publicar en dominio custom. El plan del sitio no soporta controles de sitemap por página (API devolvió 403); revisar al migrar de plan |
| Blog Posts sin campos SEO (meta title/description, updated-on) | Medio | TIER B propuesto: agregar campos `seo-title`, `seo-description`, `updated-on` a la colección y bindearlos en el template |
| 6 de 7 posts del blog son esqueleto ("Contenido completo en redacción") | Medio | Parcial: +4 artículos pilar completos creados como drafts (ver Fase 6) |
| Página 404 sin personalizar | Bajo | TIER B: crear utility page 404 con la ilustración 28-notfound ya subida como asset |
| Links de redes sociales del footer apuntan a "#" | Medio (consistencia de entidad GEO) | PENDIENTE de URLs reales (LinkedIn, X, YouTube, Instagram); el schema Organization quedó sin sameAs a propósito hasta tenerlas |
| Contenido server-rendered | OK | Todo el copy clave está en el HTML inicial; los scripts custom solo animan/mejoran. Crawlers de IA sin JS ven el contenido completo |
| es-MX vs "LATAM" en metas | Bajo | Corregido en Home ("empresas en México"); el resto usa México/LATAM según la página |

## 2. Inteligencia competitiva y GEO gap (Fase 2-3)

Reporte completo con keyword map de ~55 keywords en 6 clusters: `research-competitivo.md`. Hallazgos clave:

1. "Seguro paramétrico cibernético" y "seguro contra riesgos de IA" son SERPs casi vacías en español: nadie con producto responde. Es la apuesta número uno.
2. La SERP transaccional mexicana está blanda: brokers chicos (AGLO, SGroup) rankean con landings simples; Chubb/GNP/AXA tienen páginas desactualizadas sin FAQ ni answer-first.
3. Nadie comunica velocidad de pago ni rangos de precio en pesos: dos quick wins transaccionales.
4. Contenido de España domina SERPs informacionales; la geo-relevancia mexicana (LFPDPPP, CNSF, SPEI) es palanca real.
5. GEO: los motores citan glosarios answer-first (IBM, Fortinet) y a Marsh/despachos para datos; publicar datos propios citables (radar trimestral con telemetría Cysure) es la jugada de mayor impacto.
6. Datos ancla verificados con fuente: penetración de ciberseguro <1% (Marsh vía IT Masters Mag 2025), costo de brecha LATAM 2.51 MUSD (IBM CoDB 2025), 324 mil millones de intentos de ataque a México en 2024 (FortiGuard). El dato AMECI/AON (94%) queda "pendiente de confirmar" con primario.

## 3. Ejecución Tier A staged (Fase 5) — changelog

Todo vía MCP de Webflow, publicado a staging (cysurelanding.webflow.io):

1. `update_page_settings` x18: SEO title + meta description + OG title/description/imageAssetId.
2. `bulk_update_pages_schema_markup` x17 páginas: schemas descritos arriba (JSON exacto en `schemas.json`; usan URLs canónicas https://cysure.ai).
3. Asset nuevo: `og-cysure-1200x630.png` (ink #0E1116, lockup blanco, mint dot, DM Sans/Space Grotesk embebidas).
4. Alt text descriptivo es-MX en las 58 imágenes de ilustraciones colocadas en esta ronda (ver changelog de ronda 5).
5. Sin tocar: slugs, redirects, robots.txt, código del gate de inversores (otro sitio), estructura de páginas.

## 3b. Copy pass on-page (aprobado por Toño, mismo día)

Segunda pasada Tier A: integración de la keyword asignada de cada página en el copy visible (H1, H2 o lead), conservando la voz de marca y la palabra con acento serif de cada heading. 11 ediciones en 9 páginas, publicadas a staging y verificadas en el HTML publicado:

| Página | Antes | Después |
|---|---|---|
| Home (lead del hero) | "Cysure detecta el riesgo con su propia telemetría, lo asegura y paga en 24 a 48 horas..." | "El seguro cibernético y de IA para empresas: Cysure detecta tu riesgo con telemetría propia, lo asegura y paga en 24 a 48 horas. Sin señal, no hay cobertura." |
| /producto (H2) | "Un MDR *AI-augmented*" | "Tu seguro de ciberriesgo empieza en un MDR *AI-augmented*" |
| /cobertura-cyber-risks (H1) | "Tu cobertura cyber, sin letras *chiquitas*" | "Tu seguro de ciberriesgo, sin letras *chiquitas*" |
| /cobertura-ai-risks (H1) | "Nueve formas en que la AI te puede costar *caro*" | "Nueve formas en que la inteligencia artificial te puede costar *caro*" |
| /cobertura-ai-risks (H2) | "Los 9 riesgos de AI, con disparador *claro*" | "Seguro contra riesgos de IA: 9 coberturas con disparador *claro*" |
| /como-funciona (H2) | "Del riesgo vivo al depósito, sin *fricción*" | "¿Cómo se activa el pago de tu seguro paramétrico? Sin *fricción*" |
| /express-payout (H2) | "Blockchain por debajo, *fiat* por delante" | "Seguro cibernético con pago automático: blockchain por debajo, *fiat* por delante" |
| /planes (H2) | "¿Qué incluye cada *plan*?" | "¿Qué incluye cada *plan* de seguro cibernético para empresas medianas?" |
| /planes (H2 CTA) | "¿Listos para elegir tu *plan*?" | "¿Listos para cotizar tu *plan*?" |
| /risk-score (H2) | "Las señales que *mueven* tu score" | "Las señales que *mueven* el Risk Score cibernético de tu empresa" |
| /brokers (H2) | "Cyber que se vende con *evidencia*, no con promesas" | "El MGA de seguros cibernéticos que vende con *evidencia*, no con promesas" |

Criterio: una keyword por página, en formato pregunta citable donde sonara natural (como-funciona, planes); H1 punchy intactos salvo cobertura-cyber y cobertura-ai donde la keyword cabía sin forzar; términos de producto en inglés (Risk Score, Express Payout); sin claims nuevos.

## 4. Tier B / Requiere input (para decisión de Toño)

1. llms.txt: propuesta lista en `llms-txt-propuesta.txt`. Hosting en Webflow requiere: (a) reverse proxy delante de cysure.ai, (b) redirect 301 de /llms.txt a un archivo hospedado, o (c) plan Enterprise (well-known files). Requiere input.
2. Campos SEO en la colección Blog Posts (seo-title, seo-description, updated-on) + binding en template.
3. Página 404 personalizada (la ilustración ya está subida).
4. sameAs del schema Organization: pasar URLs reales de LinkedIn/X/YouTube/Instagram y conectar los iconos del footer.
5. Al pasar a cysure.ai: quitar el meta robots noindex del head (marcado con comentario STAGING), verificar robots.txt amistoso con bots de IA, enviar sitemap a GSC y Bing.
6. Decisión sobre La Tesis (noindex vs metadata mínima): aplica al sitio del dominio actual, no a este staging.

## 5. Motor de contenido (Fase 6)

1. 4 artículos del cluster nicho propietario redactados y cargados como DRAFTS de CMS (no publicados), con bylines de Toño Arellano y Diego Silveira, answer-first, fuentes citadas con link y "Última actualización". Fuentes: `scratchpad seo/articulos/` y drafts en la colección Blog Posts.
2. Calendario editorial de 26 semanas con briefs completos: `calendario-editorial.md`.
3. Covers de los 4 artículos: pendientes de diseño (los drafts quedaron sin cover a propósito).

## 6. Backlog de autoridad externa (Fase 7)

`backlog-autoridad.md` — 10 acciones priorizadas P1-P3 (LinkedIn + consistencia de entidad primero). Nada ejecutado desde esta sesión.

## 7. Medición (Fase 8)

`plan-medicion.md` — setup GSC/Bing al pasar a dominio, KPIs mensuales por cluster, muestreo GEO mensual de 10 preguntas, baseline hoy = 0 (staging noindex) y expectativas honestas por ventana de 30/90/180 días.

## Criterios de aceptación

1. Nada publicado fuera de staging (el sitio ya operaba en staging publicado; los drafts de CMS NO se publicaron). ✓
2. Cifras de negocio: solo datos del sitio/skill canónico; datos de mercado con fuente o marcados pendientes. ✓
3. Copy nuevo en voz de marca (de tú, sentence case, sin em dash ni middot). ✓
4. Las 18 páginas con title, meta, OG y schema únicos. ✓ (schema: 17 con markup; /legal solo metas por ser página utilitaria)
5. La Tesis intacta (vive en otro sitio; no se tocó). ✓
6. Keyword map con 6 clusters, nicho propietario y GEO priorizados. ✓
7. Changelog completo con Tier B listado. ✓ (este documento)
