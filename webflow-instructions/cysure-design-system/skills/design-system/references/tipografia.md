# Tipografía

Tres familias con roles estrictos. Cargar vía Google Fonts (DM Sans, Space
Grotesk, DM Serif Display), sin sustitutos.

## Familias y roles

| Familia | Rol |
|---|---|
| **Space Grotesk** (600) | Títulos, números grandes, labels ALL-CAPS, el wordmark. Títulos grandes traquean a −0.02em |
| **DM Sans** | Default: body, UI, botones, form labels |
| **DM Serif Display** italic | Exactamente UNA palabra-acento dentro de un heading |
| Space Grotesk + `tabular-nums` | Datos, KPIs, scores, hashes, códigos |

Pesos: 400 regular, 500 medium, 600 semibold (el peso de heading de la casa),
700 bold.

**Caveat de la landing viva:** el body actual del sitio usa Inter como
desviación explícitamente autorizada (los títulos siguen en Space Grotesk).
No "corregirlo" de vuelta a DM Sans en lo ya publicado. Todo trabajo nuevo,
salvo indicación contraria, usa DM Sans.

## La palabra-acento serif

Exactamente **una palabra por heading**, en DM Serif Display italic, color
serif-accent (royal `#3B5BFF` en claro, `#7C92FF` sobre oscuro). Ejemplo:
"Solo aseguramos lo que *detectamos*". Nunca una línea completa en italic,
nunca en body, nunca en violet, nunca en navy.

## Escala (px)

| Token | Tamaño | Uso |
|---|---|---|
| display-xl | 64 | Hero stat |
| display-l | 44 | Score readout, hero display |
| h1 | 34 | Page title |
| h2 | 28 | Hero headline |
| h3 | 22 | Título de sección o card |
| xl | 20 | |
| lg | 17 | |
| body | 15 | Lectura default |
| base | 14 | UI densa |
| sm | 13 | |
| xs | 12 | |
| eyebrow | 11 | Label de sección uppercase |
| micro | 10 | Kicker de card |
| nano | 9 | Texto de status pill |

Line-height: tight 1.04 (display), snug 1.2 (títulos), normal 1.45, relaxed
1.55 (body de lectura).

Tracking: display −0.02em, tight −0.01em, label 0.14em, eyebrow 0.16em, caps
inline 0.08em.

## Casing

1. **Sentence case** en títulos y body: solo la primera palabra en mayúscula,
   salvo nombres propios, marcas y acrónimos.
2. **UPPERCASE solo** en eyebrows, kickers y badges (Space Grotesk bold,
   tracking 0.16em eyebrow, 0.14em label).
3. Status pills: una o dos palabras uppercase (Activa, Crítico, TIER A).

## Roles listos para clases de Webflow

| Clase sugerida | Especificación |
|---|---|
| `cy-display` | Space Grotesk 600, tracking −0.02em, line-height 1.04, color text |
| `cy-title` | Space Grotesk 600, tracking −0.01em, line-height 1.2, color text |
| `cy-eyebrow` | Space Grotesk 700, 11px, tracking 0.16em, uppercase, color muted |
| `cy-kicker` | Space Grotesk 700, 10px, tracking 0.14em, uppercase, color faint |
| `cy-body` | DM Sans 400, 15px, line-height 1.55, color text |
| `cy-serif` | DM Serif Display italic 400, color serif-accent |
| `cy-num` | Space Grotesk, tabular-nums, tracking 0 |
