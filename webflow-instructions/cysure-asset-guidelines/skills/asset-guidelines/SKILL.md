---
name: Asset guidelines Cysure
description: >
  Guía de assets de marca de Cysure (cysure.ai): logo, favicons, covers
  sociales, fotos de fundadores y logos de integraciones. Usar SIEMPRE que se
  agregue, genere o reemplace una imagen, ícono o logo en el sitio.
---

# Asset guidelines Cysure

Regla número uno: **nunca regenerar un asset que ya existe**. La librería de
marca ya trae todos los derivados publicables. Si hace falta un tamaño o
variante nueva, se deriva siempre del vector oficial, nunca de un PNG
reescalado. El catálogo completo con URLs está en
`references/catalogo-assets.md`.

## Logo

1. **Mark:** el shield-knot v2.1 (Jul 2026). Vector oficial:
   `cysure-mark.svg` (single path, currentColor). Variantes de color fijo:
   ink `#0E1116` sobre fondos claros, blanco sobre fondos ink u oscuros.
2. **Lockup:** mark + wordmark. Vector oficial: `cysure-lockup.svg`, con el
   wordmark ya vectorizado (sin dependencia de fuentes). Ratios aprobados:
   wordmark 0.81× la altura del mark, gap 0.257×, x-height centrada
   ópticamente. **Nunca reconstruir el lockup colocando texto junto al
   mark**: usar el SVG.
3. **Wordmark:** siempre lowercase **cysure** en Space Grotesk 600. Nunca
   "Cysure AI" con espacio, nunca uppercase, nunca otra fuente.
4. No distorsionar, no rotar, no recolorear fuera de ink y blanco, no aplicar
   sombras ni contornos al logo.

## Favicons y app icons

Usar el set oficial ya generado: favicon.ico multi-resolución (16, 32, 48),
PNGs individuales, apple-touch-icon 180, iconos PWA 192 y 512, y maskable 512
(este último trae zona segura: no recortar ni reencuadrar).

## Covers e imágenes sociales

Kit oficial en par light y dark: Open Graph 1200×630, header de X 1500×500,
banner de LinkedIn 1128×191, cover de Notion 1500×600. Para OG del sitio usar
el par `og-1200x630-{light,dark}`. No componer covers nuevos si el kit ya
cubre el caso.

## Fotos de fundadores

Usar las fotos oficiales de perfil (1024×1024) y retratos master. Nunca
exports viejos ni recortes propios. Al citarlos juntos, orden canónico:
**Toño Arellano (Co-founder & CEO) y Diego Silveira (Co-founder & CTO)**.

## Logos de integraciones y vendors

Marcas reales como tiles SVG pequeños a **color oficial** (Google, Microsoft
365, AWS, Okta, Slack, GitHub, OpenAI, Claude). Copiar el SVG upstream exacto
de cada marca, nunca redibujarlo, nunca versión monocroma inventada, nunca
clip-art.

## Imaginería general del sitio

1. **Sin fotografía de stock, sin ilustración, sin clip-art, sin emoji.**
2. La única "imagen" de la marca es generativa: radar sweep sobre paneles
   ink, arc gauge del Risk Score, tiles de logos de integraciones, anillos
   concéntricos tenues.
3. Screenshots de producto van dentro de frames con la sombra de marketing
   (shadow-frame del design system).
4. El marcador visual de AI es el glifo sparkle del design system, nunca un
   emoji ni un ícono ajeno.

## Prohibiciones duras

1. Nunca usar PNGs "transparentes" generados por herramientas de IA con
   checkerboard horneado sin alpha real.
2. Nunca derivar un tamaño nuevo escalando un PNG: siempre desde el vector.
3. Nunca renombrar los archivos del repositorio público de assets: hay URLs
   externas apuntando a ellos.
4. Nunca mezclar assets o paletas de otras marcas en material de Cysure.
