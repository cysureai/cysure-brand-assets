---
name: Design system Cysure
description: >
  Design system oficial de Cysure (cysure.ai) para construir el sitio de
  marketing en Webflow: tokens de color light y dark, tipografía, espaciado,
  forma, elevación, motion y la librería de componentes. Usar SIEMPRE que se
  cree o edite cualquier sección, página, estilo o componente del sitio.
---

# Design system Cysure v4.2

Cysure (**cysure.ai**) es la **Cyber & AI Insurance Company de LATAM**: un
servicio gestionado AI-augmented de AI risk y cyber-resilience, con un
**Resilience Lead** humano al frente de cada cuenta. El principio organizador
es **Detection-Coverage Alignment**: "solo aseguramos lo que detectamos con
nuestra propia telemetría".

El sitio de marketing se compone con **los mismos tokens y componentes que el
producto**. No existe un kit de landing separado: las secciones son layout que
tú compones; todo lo brandeado sale de este design system.

## Cómo usar este skill

Antes de tocar estilos o construir secciones, lee la referencia que aplique:

1. Color: `references/color.md` (paleta completa light y dark, reglas de uso).
2. Tipografía: `references/tipografia.md` (familias, escala, tracking, casing).
3. Espaciado, forma y motion: `references/espaciado-forma-motion.md`.
4. Componentes y patrones de sección: `references/componentes.md`.

## Resumen ejecutivo (los 10 valores que más se usan)

| Rol | Valor light | Valor dark |
|---|---|---|
| Ink (texto, superficies feature, botón primario) | `#0E1116` | texto `#EAEDF1`, feature surface `#171C23` |
| Royal (único acento cromático) | `#3B5BFF` | `#7C92FF` |
| Emerald (OK, cubierto) | `#10B981` | `#34D399` |
| Amber (esperando, tu turno) | `#F59E0B` | `#FBBF24` |
| Coral (crítico, te necesita) | `#EF4444` | `#FF6B6B` |
| Mint (valor que regresa, SOLO sobre ink) | `#34E0AE` | `#34E0AE` |
| Muted (texto secundario) | `#5A6068` | `#9CA3AD` |
| Página / superficie | `#FFFFFF` | `#0A0C10` / `#13171D` |
| Sunken (insets) | `#F6F6F3` | `#0F1318` |
| Borde de card | `rgba(14,17,22,.12)` | `rgba(255,255,255,.10)` |

Tipografía: **Space Grotesk 600** para títulos, números grandes y labels
uppercase; **DM Sans** para body y UI; **DM Serif Display italic** para
exactamente UNA palabra-acento por heading, en royal.

## Reglas que definen la marca

1. **Color = urgencia.** Emerald, amber y coral tienen significado fijo, jamás
   se usan decorativamente. Mint significa dinero o valor que regresa al
   cliente y solo vive sobre superficies ink.
2. **Una sola palabra serif por heading**, en DM Serif Display italic, color
   royal (`#3B5BFF` claro, `#7C92FF` sobre oscuro). Nunca una línea completa
   en italic, nunca en body.
3. **Sin accent bars.** El acento de la casa es el icon-chip: ícono de color
   dentro de un cuadro con fill soft del tono, radius ~11px, más label bold.
4. **Fondos flat.** Sin gradientes en superficies, sin fotografía, sin
   ilustración, sin clip-art, sin emoji. La única "imagen" es generativa:
   radar sweep en heros ink, arc gauge del score, tiles de logos de
   integraciones.
5. **Botón primario = ink fill**, no royal. Royal es acento y se usa con
   moderación.
6. Wordmark siempre lowercase **cysure** en Space Grotesk 600. Nunca
   "Cysure AI" con espacio.
7. Hover y press son un **filtro de brillo** (brightness .93 hover, .86
   active), nunca un swap de color.
8. Dark theme es un **re-map completo de tokens**, no un tint. Nunca
   hardcodear un hex de light en un contexto que también renderiza en dark.

## Aplicación en Webflow

1. Crear los tokens como **variables de Webflow** (colores, tipografía,
   tamaños, radios) con los valores de las referencias, en sus dos modos
   (light y dark). Nunca escribir hex sueltos en estilos de elementos.
2. Clases en **kebab-case** con prefijo `cy-` (ej. `cy-card`,
   `cy-eyebrow`, `cy-icon-chip`, `cy-hero-ink`).
3. Fuentes vía Google Fonts: DM Sans, Space Grotesk y DM Serif Display, sin
   sustitutos. Caveat: la landing viva actual usa Inter en body como
   desviación autorizada; no "corregirla" ahí, pero todo trabajo nuevo usa
   DM Sans.
4. Componer secciones con los patrones de `references/componentes.md`
   (hero, cards con icon-chip, feature surface ink con StatTiles, grid de
   industrias, CTA final).
5. Métricas y cifras del negocio: nunca inventarlas ni copiarlas de memoria.
   Si el copy necesita una cifra, dejarla marcada como pendiente de confirmar.

## Checklist antes de publicar cualquier cambio

- [ ] Tokens desde variables, no hex inventados; se ve bien en light y dark
- [ ] DM Sans body, Space Grotesk títulos y labels, UNA palabra serif royal
      por heading
- [ ] Eyebrows uppercase Space Grotesk, tracking 0.16em; sentence case en todo
      lo demás
- [ ] Sin accent bars, sin gradientes de superficie, sin emoji, sin status
      hues decorativos
- [ ] CTA primario ink; jerarquía primary, secondary, subtle o ghost
- [ ] Copy en español de tú, términos de producto en inglés, sin «·» ni «—»
