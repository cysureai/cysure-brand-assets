# Covers del blog: spec de estilo + prompts por post (H5b)

**Estado:** entregable de especificación. Las ilustraciones no se generaron en esta ronda
(el agente de ejecución no produce imágenes); este documento deja el estilo cerrado y un
prompt listo por post para generarlas con la herramienta de imagen que elija Toño
(Midjourney, GPT-image, Ideogram, o ilustrador humano).

**Nota de gobernanza:** el estilo caricatura/editorial es una **desviación autorizada**
del design system v4.2 (aplica solo a covers del blog, nunca a UI del producto ni a
secciones del sitio).

---

## 1. Estilo base (aplica a TODOS los covers)

- **Formato:** 1600 × 900 px (16:9), margen de seguridad 120 px por lado.
- **Técnica:** ilustración plana editorial con personajes caricaturizados de trazo
  simple (estilo *editorial cartoon* moderno: figuras geométricas, manos de 4 dedos,
  rostros mínimos), sin degradados fotográficos, sin 3D, sin stock.
- **Paleta estricta Cysure:** fondo dominante ink `#0E1116` **o** hueso `#F6F6F3`;
  acentos royal `#3B5BFF`, periwinkle `#7C92FF`, navy `#3A5BA8`; mint `#34E0AE`
  únicamente como acento pequeño sobre fondos oscuros; neutros `#5A6068` / `#9AA0A8`.
  Nada de rojos/naranjas salvo un solo elemento de "amenaza" si el tema lo pide
  (ámbar `#F59E0B` apagado).
- **Composición:** un solo concepto por cover, centro-derecha, con aire generoso;
  sin texto dentro de la ilustración (el título vive en la card/página).
- **Línea:** contorno grueso uniforme (aprox. 6 px al tamaño final) en ink sobre
  claro o en blanco roto sobre oscuro.
- **Prohibido:** candados genéricos, hackers con capucha, calaveras, matrix rain,
  logos de terceros, código legible real.

### Bloque de estilo para pegar al final de cada prompt

> Flat editorial cartoon illustration, thick uniform outlines, geometric simplified
> characters, generous negative space, single focal concept, palette strictly:
> near-black #0E1116, off-white #F6F6F3, royal blue #3B5BFF, periwinkle #7C92FF,
> navy #3A5BA8, mint #34E0AE as small accent only, muted gray #5A6068. No text,
> no logos, no photorealism, no gradients, no hooded hackers, 16:9.

---

## 2. Prompts por post (los 7 existentes en el CMS)

1. **El seguro tradicional no puede cubrir lo que no puede ver** (featured)
   > A cartoon insurance agent wearing a blindfold sits at a tiny desk stamping
   > papers, while behind him a huge translucent periwinkle server-room landscape
   > glows unnoticed; one small mint signal lamp blinks on a dark ink background.

2. **Del incidente al payout: cómo se activa tu cobertura de AI**
   > A minimalist cartoon assembly line on off-white: an alarm bell piece enters on
   > a royal-blue conveyor belt and exits as a neat banknote landing into a small
   > open bank vault, three simple robot arms doing the work, navy accents.

3. **Shadow AI: el riesgo que tu equipo ya está corriendo**
   > A cartoon office worker at a laptop on off-white background, casting a long
   > ink-colored shadow that is shaped like a friendly but oversized robot leaning
   > over the desk, periwinkle screen glow, single mint indicator on the robot.

4. **AI Native: por qué no basta con montarle software al seguro**
   > A cartoon vintage steam car with a shiny royal-blue rocket engine strapped on
   > top with rope, wobbling, versus a sleek low navy vehicle built as one piece
   > gliding past it, ink background, mint headlight trail.

5. **Checklist de readiness para EU AI Act e ISO 42001**
   > A cartoon robot standing straight like at a doctor's checkup while a
   > clipboard-holding auditor character measures its height against a giant ruler,
   > off-white background, royal and navy accents, oversized checkmarks floating.

6. **Cómo leer tu Risk Score y qué mueve la aguja**
   > A cartoon character climbing a huge semicircular gauge like a hill, planting a
   > small flag near the top, gauge arc in periwinkle-to-royal segments on ink
   > background, one mint tick mark at the summit.

7. **BEC 2.0: el fraude con deepfake que creció más de 200%**
   > Two identical cartoon CEO faces on a video-call window, one of them subtly
   > made of loose puzzle pieces coming apart at the edge, a small suspicious
   > accountant character squinting at the screen, off-white background, navy and
   > royal accents, single amber warning dot.

---

## 3. Integración en Webflow

- Subir cada cover como asset (webp, ~200 KB máx) y asignarlo al campo **Cover**
  del post en la colección *Blog Posts* (`6a563727806b5b7a10c1768d`).
- La card del Home (sección `cy-blog6`) hoy es tipográfica; cuando existan covers,
  agregar un bloque de imagen bound al campo Cover en la parte superior de
  `cy-blog6-card` (radio 10 px, aspect 16:9, object-fit cover).
- Alt text: título del post, tal cual.
