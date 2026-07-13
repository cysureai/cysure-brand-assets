# Componentes y patrones de sección

La librería viva tiene 15 componentes. En Webflow se recrean como componentes
o clases con estas especificaciones. Nombres de clase en kebab-case con
prefijo `cy-`.

## Componentes base

### Logo
Mark shield-knot v2.1 + wordmark lowercase **cysure** en Space Grotesk 600.
Variantes: con o sin wordmark, sobre claro (ink) o sobre oscuro (blanco).
Ratios aprobados del lockup: wordmark 0.81× la altura del mark, gap 0.257×,
x-height centrada ópticamente. Usar los SVG oficiales (ver skill de asset
guidelines), nunca reconstruirlo con texto.

### Button
Alturas 32 / 38 / 46 px, radius 9 a 11px, DM Sans.

| Variante | Estilo |
|---|---|
| primary | **Ink fill** (`#0E1116`, texto blanco). El CTA principal. En dark invierte a fill claro con texto ink |
| secondary | Fondo transparente, borde border-strong, texto ink |
| subtle | Fill sunken suave (`#F6F6F3`), sin borde |
| ghost | Solo texto, hover con wash |
| danger / success | Solo para acciones destructivas o confirmatorias en producto |
| royal | Acento, usar con mucha moderación |

Press y hover: brightness filter, nunca cambio de color.

### Eyebrow
Signpost uppercase Space Grotesk bold. Tamaños: md 11px tracking 0.16em, sm
10px tracking 0.14em. Tonos: muted (default), royal, emerald, amber, coral.
Opción de dot de color al inicio. El eyebrow editorial de marketing que
acompaña al hero usa el tono serif-accent (royal).

### Badge
Pill de estado uppercase, radius 6 a 7px, texto 9px bold tracked. Tonos: ok
(emerald), warn (amber), critical (coral), info (royal), neutral, ink. Fill
soft del tono + texto del tono. Variante outline = estado apagado o quiet.
Misma semántica que en producto: color = urgencia. No inventar pills nuevos.

### Card
El contenedor universal: fondo surface, borde 1px border, radius 16px
(estándar) o 18px (feature), sombra shadow-card, padding 18 a 24px.

| Tono | Uso |
|---|---|
| default | Card blanca estándar |
| ink | Feature surface oscura: hero strips, score cards. Texto blanco, secundario ink-muted. Ahí, y solo ahí, vive el mint |
| sunken | Inset quieto |
| royal / emerald / amber / coral | Alert card: fill soft del tono + borde del mismo tono + eyebrow del tono |

### Avatar
Circular. Royal = usuario firmado, muted = filas de equipo, ink = burbujas de
chat o agente.

### Input
Altura 38px, radius 14px, label bold arriba, borde border-strong, focus con
borde royal + halo shadow-ring-royal.

### Tabs
Tres sabores: underline (detail), segment (view switch), pill (filtros).

## Componentes de datos

### StatTile
Big number Space Grotesk bold con tabular-nums + caption. La unidad métrica
de los hero strips oscuros y grids de KPI. Sobre ink los números van en
blanco y el **mint solo para valor de regreso** (payout, return).

### ScoreGauge
Arco 220° del Risk Score con gradiente mint a verde. Siempre sobre card ink,
acompañado de badge de TIER.

### MeterBar
Fila de componente del score: label + barra de progreso fina.

### AISummary
El marco obligatorio de todo texto generado por IA: header con glifo sparkle
+ label "Resumen IA", shimmer que resuelve a texto. Nunca presentar output de
IA sin este marco.

## Patrones que definen la marca

### Icon-chip (el acento de la casa)
Ícono de color dentro de un cuadro con fill soft del tono, radius ~11px,
tamaño ~38px, más label bold al lado. **Reemplaza cualquier accent bar.**

### Feature surface ink
Hero strips y paneles feature van sobre fondo ink con texto blanco. Su
decoración: radar sweep cónico lento y anillos concéntricos tenues. En la
landing pueden usar shadow-elevated (solo marketing).

### Sección típica
Eyebrow → título h3 Space Grotesk 600 → body DM Sans 15px line-height 1.55 →
cards en grid.

## Iconografía

Set propio de 56 glifos de línea: stroke 1.6px, caps redondos, grid 24×24,
color vía currentColor. Bloques: vocabulario de producto (home, decision,
gauge, plug, mdr, target, bug, cloud, mail, radar, search, audit, eye, userx,
route, umbrella, banknote, bolt, users, message, cpu, file, cog), UI común
(bell, check, close, chevrons, arrowUpRight, download, clock, lock, send,
shieldCheck, phone, plus, sparkle), marketing (arrowRight, coins, fileCheck,
globe, layers) e industrias (landmark, cart, heart, truck, factory,
briefcase, grad, sprout, mountain, building, car, antenna, film, bed).

1. **sparkle** (filled) es el marcador de AI, reservado a contenido generado
   por IA.
2. Cero emoji en la UI (excepción: banderas del language picker y logos SVG
   de integraciones a color).
3. No dibujar iconos nuevos que diverjan del estilo de línea 1.6px.

## Estructura típica de la landing

1. **Hero:** eyebrow editorial (tono royal) → headline con UNA palabra serif
   italic acento → lead en muted → CTA primario ink + secundario con borde.
2. **Prueba social / logos:** marcas reales como tiles SVG pequeños a color
   (Google, Microsoft 365, AWS, Okta, Slack, GitHub, OpenAI, Claude). Copiar
   el SVG oficial exacto de cada marca, nunca redibujarlo.
3. **Módulos de producto:** cards con icon-chips.
4. **Feature surface ink** con StatTiles: métricas grandes, mint para valor
   de regreso.
5. **Industrias que aseguramos:** grid de icon-chips con el bloque de íconos
   de sector. Nunca clip-art ni emoji.
6. **CTA final.**

Fondos flat; el drama lo ponen las superficies ink y las sombras de marketing
(shadow-frame para frames de screenshots, shadow-elevated para paneles
oscuros), no gradientes.
