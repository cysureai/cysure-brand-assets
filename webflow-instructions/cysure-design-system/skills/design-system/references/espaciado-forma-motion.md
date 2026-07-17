# Espaciado, forma, elevación y motion

## Escala de espaciado

Ritmo de ~4px: 0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 56 (px).

Paddings interiores comunes: card chica 18px, feature card 24px, gutter de
contenido de página 30px vertical y 34px horizontal.

Gaps entre cards y celdas de grid: 12px (tight) o 16px (default). Dashboards
y secciones tipo bento usan estos gaps.

Alturas de control: 32 (sm), 38 (default de botón e input), 46 (lg).

## Radios de esquina

| Token | Valor | Uso |
|---|---|---|
| xs | 5px | Chips de código |
| sm | 7px | Status pills, badges chicos |
| md | 9px | Botones, links de sidebar |
| lg | 11px | Botones primarios, segmented control, icon-chips |
| xl | 14px | Cards chicas, grupos de inputs |
| 2xl | 16px | Card estándar |
| 3xl | 18px | Feature card, hero strip |
| modal | 20px | Diálogos |
| pill | 9999px | Avatares, pills redondos |

## Elevación

Cards: borde 1px (token border) + radius generoso + sombra suave. Nunca
sombras pesadas ni de color en la UI core.

| Sombra | Valor light | Uso |
|---|---|---|
| shadow-card | `0 1px 2px rgba(14,17,22,.04), 0 1px 3px rgba(14,17,22,.05)` | Cards en reposo |
| shadow-pop | `0 18px 50px rgba(14,17,22,.16)` | Popovers, menús, modals |
| shadow-ring-royal | `0 0 0 3px rgba(59,91,255,.20)` | Focus ring, halo de live dot |

**Exclusivas de marketing** (solo en la landing, nunca en producto):

| Sombra | Valor light | Uso |
|---|---|---|
| shadow-frame | `0 40px 90px -36px rgba(8,10,13,.6), 0 12px 32px -16px rgba(14,17,22,.45)` | Frames de screenshots y media del hero |
| shadow-elevated | `0 50px 100px -40px rgba(8,10,13,.55), 0 24px 48px -24px rgba(14,17,22,.4), 0 0 0 1px hsla(0,0%,100%,.06)` | Paneles feature oscuros |

En dark las sombras se re-mapean (más opacas, base negra): shadow-card
`0 1px 2px rgba(0,0,0,.45), 0 2px 8px rgba(0,0,0,.35)`; shadow-pop
`0 22px 60px rgba(0,0,0,.62)`.

## Fondos e imaginería

Fondos **flat**: sin gradientes en superficies, sin fotografía, sin
ilustración. La única "imagen" es generativa o CSS:

1. Radar sweep cónico lento (6s) en hero cards ink.
2. El arc gauge del Risk Score con gradiente mint a verde profundo.
3. Tiles de logos de integraciones a color.
4. El shimmer del bloque AISummary resolviendo a texto.
5. Anillos concéntricos tenues sobre heros ink.

## Motion

Un solo easing para casi todo: `cubic-bezier(.2,.7,.2,1)`. Duraciones 140,
220 y 280ms. Entradas: fades cortos y rise-ins (10px hacia arriba).

Loops firmados, deliberadamente lentos: radar sweep 6s, AI shimmer ~1.1s que
resuelve a texto ~1.2s, sweep de luz del arco del score 3.2s, pulso del live
dot. Respetar siempre `prefers-reduced-motion`.

## Estados e interacción

1. **Hover y press son un filtro de brillo**, nunca un swap de color:
   `filter: brightness(.93)` en hover, `.86` en active.
2. Cards interactivas levantan 2px y refuerzan su borde.
3. Focus: borde royal + halo suave (shadow-ring-royal).
4. Hover de nav: wash tenue (token hover). El item activo es un pill sólido
   ink (invierte a pill claro en dark).
5. Transparencias con moderación: soft tints al 10 a 15%, scrim de modal
   `rgba(8,10,14,.55)`. Backdrop blur raro.
6. Sin transiciones de color al cambiar de tema.

## Layout de página

En el sitio de marketing las secciones son layout libre compuesto con estos
tokens. Referencia del shell de producto (por si se recrea UI en mockups):
sidebar fija colapsable 218px (72px colapsada), topbar 64px, contenido
full-width con scroll, gutter 30 a 34px, grids bento con gaps de 12 a 16px.
