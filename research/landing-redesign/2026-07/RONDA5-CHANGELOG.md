# Ronda 5 — Fixes de QA, ilustraciones de módulos y SEO+GEO (20 jul 2026)

Sitio: Launch Landing Page (cysurelanding.webflow.io). Todo verificado visualmente con screenshots del sitio publicado.

## A. Fixes de QA reportados por Toño

1. Nav invisible al inicio (100% transparente sobre fondo blanco). Fix: la nav ahora se superpone al hero card oscuro en todas las páginas con `data-cy-hero` (margen inferior negativo del alto real de la nav, medido por JS y con fallback CSS `body:has([data-cy-hero])`); el contenido del hero compensa con `padding-top: var(--cy-navh) + 32px`. En páginas sin hero (/incidente, /blog) la nav arranca en estado glass claro (hb=0 en el script).
2. Tags de "enviado" y "error" siempre visibles bajo el form de evaluación. Causa: `cy-demo-done`/`cy-demo-fail` con `display:block` pisando el default oculto de Webflow. Fix: `display:none` en ambos estilos; Webflow los muestra solo al enviar.
3. Hero apretado. Fix: `cy-hero6-left` con `row-gap: 20px`, lead a 16.5px/1.62, H1 line-height 1.09, `padding-top` interno de 96px a 44px (menos aire muerto arriba del eyebrow).
4. Form de incidente en rojo para diferenciarlo del de evaluación: barra superior roja de 5px en el diálogo, kicker rojo, bordes de inputs en rojo 30%, focus ring rojo y botón "Enviar reporte" (antes "Submit" en inglés) en #DC2626 con loading "Enviando…".
5. Selector de lada en el teléfono del form de evaluación: select `+52 MX` por default con 19 códigos (LATAM + US/CA + ES), inyectado por el script v8; al enviar combina lada + número en el valor del campo. Placeholder ahora "55 1234 5678".
6. Icono de Instagram del footer corregido (glyph estándar con pesos consistentes; viewBox 448x512).
7. Score del quiz de Risk Score más grande y protagonista: Space Grotesk 700 en `clamp(48px, 4.6vw, 64px)` con color semáforo (rojo → ámbar 600 → verde 700) sincronizado con el arco.

## B. Ilustraciones de módulos (29 pares desktop+mobile)

Los ZIPs de Toño se evaluaron así: los HTML son un kit React autocontenible de ~143 KB por archivo (inviable como embed en Webflow); se usaron los PNG @2x convertidos a WebP q88 (16 MB → 4.5 MB, promedio 78 KB) y subidos como 58 assets (`cy-illu-NN-nombre-{d|m}.webp`) + patrón responsivo `.cy-illu` (variante desktop ≥768px, mobile <768px, con fallback por posición `nth-of-type` que no depende de clases).

Colocación (todas verificadas):

| Ilustración | Página / lugar |
|---|---|
| 29-hero-video | Home, frame del video del hero (cover "Ve Cysure en 90 segundos"; play y tag viejos ocultos, no borrados) |
| 27-form-success | Mensaje de éxito del modal de evaluación (site-wide) |
| 01-app, 03-console, 05-mdr, 06-decisiones, 09-reportes | /producto (portal, consola, MDR, capa humana, métricas) |
| 07-integraciones | /integraciones |
| 21-onboarding, 22-detection-coverage | /como-funciona |
| 04-payout, 23-payout-timeline, 26-cvl | /express-payout |
| 02-risk-score (sustituye gauge decorativo, oculto), 25-evaluacion | /risk-score |
| 12-coverage-map | /cobertura-cyber-risks |
| 08-polizas | /planes |
| 10-brokers | /brokers |
| 24-incident | /incidente |
| 11, 13, 14, 15, 16, 17, 18, 19, 20 | /flota, una por card de agente |

Pendiente: 28-notfound para una página 404 personalizada (asset ya subido; crear la utility page es Tier B).

## C. SEO + GEO

Ver `research/seo-geo/2026-07/AUDITORIA-SEO-GEO.md` (auditoría completa, keyword map, ejecución Tier A: metas+OG+schema en 18 páginas, 4 artículos draft, calendario editorial de 26 semanas, llms.txt propuesto, backlog de autoridad y plan de medición).

## Notas técnicas para próximas rondas

1. El importador whtml NO adjunta clases a `<img>` de forma confiable (los wrappers sí): por eso el patrón responsivo usa `nth-of-type`. Si se insertan más pares, mantener el orden desktop primero, mobile después.
2. `create_asset` del MCP + POST S3 con la policy por asset (la policy fija el key exacto). CDN URL: `cdn.prod.website-files.com/{site}/{assetId}_{fileName}`.
3. El estilo Webflow `cy-illu-m` fue volteado a `display:block` por el importador en algún momento de la ronda; el CSS del head lo re-asegura. Si se ve doble imagen, revisar ese estilo.
4. `cy-vid6-frame` necesita `width/height: 100%` (es hijo flex; con contenido absoluto colapsa a 0).
