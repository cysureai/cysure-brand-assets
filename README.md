# cysure-brand-assets

Assets públicos de marca Cysure servidos por URL raw: covers de Notion, LinkedIn y Drive, firma, favicons, metas OG, portadas de los sistemas de diseño, logo grids, ilustraciones y la card de mockup.

Uso: URL raw del archivo, p. ej.
`https://raw.githubusercontent.com/cysureai/cysure-brand-assets/main/<archivo>`

Para fijar una versión, usa el SHA de un commit en lugar de `main`:
`https://raw.githubusercontent.com/cysureai/cysure-brand-assets/<commit>/<archivo>`

## Qué es este repositorio (y qué no)

Es **distribución versionada** de assets ya aprobados. **No es una cuarta biblioteca canónica.** La fuente de verdad son los Files y el almacén de activos de las tres bibliotecas de Claude Design:

| Biblioteca | Artifact | Versión comprobada | Estado |
|---|---|---|---|
| Cysure · Landing Page | `2eE7Et7U5ncfhXFWiLwKrQ` | 1791165084-c0b1 · DS 38.5 | **en afinación**: sincronización final pendiente |
| Cysure · Presentaciones y Documentos | `Fg2g2h34stb1rSW7i4uk4h` | 1791165087-2a1c · tokens 2 (4 oct 2026) | comprobada; sincronización final tras conciliación con Webflow |
| Cysure · Producto | `GCo5W1nJTUGzBWiNEMWtFx` | 1791165088-f7bb · 1.5.1 (4 oct 2026) | comprobada; sincronización final tras conciliación con Webflow |

Favicons, metas ES dark v3 y la card llegaron en un sobre de transferencia (5 oct 2026, sha256 `b1b48060…71a0`) con los ZIP originales sin regenerar; el manifiesto registra el sobre y el paquete de cada archivo. El escritor del sistema de diseño ya incorporó su copia canónica a la LP 38.5 (grupos «Favicons» y «Meta ES dark v3», Files `entregas/card-13-minimo-04oct/`), con sha256 idéntico al de este repositorio; el manifiesto lo registra en `canonical`.

Toda corrección se hace en la biblioteca y se redistribuye aquí con nuevo sha256. Aquí no se redibuja, no se recolorea, no se recomprime ni se renombra un asset existente.

`manifest.json` lista **cada** archivo con origen (biblioteca, versión, grupo, nombre, blob), versión, estado, aprobación, dimensiones, peso y sha256, más los pendientes y las exclusiones. `python3 scripts/verify-manifest.py` comprueba bytes, sha256 y dimensiones contra el disco, que no haya archivos sin registrar ni duplicados por sha256, y que las rutas citadas en este README existan.

## Archivos

### Históricos (nombres estables — no renombrar, hay URLs externas apuntando a ellos)

- `cysure-mark.svg` / `cysure-lockup.svg` — vectores oficiales del mark y del lockup (v2.1). `cysure-lockup.svg` es equivalente C14N al maestro *project/marca/cysure-lockup-master.svg* de las tres bibliotecas (mismo trazado y viewBox `0 0 490.92 133`; sólo cambia la serialización), por eso no se añade otra copia. Monocromo con `fill="currentColor"`: en `<img>` pinta negro; para heredar la tinta del tema, insértalo en línea.
- `cysure-mark-firma-1024.png` — mark sobre blanco, 1024×1024 (firma electrónica)
- `cover-notion-linkedin-drive-blanco-2400x600.png` — cover claro (Notion HQ, LinkedIn, Drive)
- `cover-notion-linkedin-drive-dark-2400x600.png` — cover oscuro: escena completa con el lockup Cysure centrado, sin frase ni subtítulo (Notion HQ, LinkedIn, Drive). Dimensiones reales 2400×800; el nombre legado `2400x600` se conserva para no romper las URLs externas
- `google-workspace-logo-320x132.png` — lockup horizontal (Google Workspace)
- `firma-icon-whatsapp.png` / `firma-icon-linkedin.png` / `firma-icon-x.png` — íconos sociales 512×512 para la firma electrónica (tile redondeado, colores oficiales)
- `firma-icon-calendar.png` — ícono de agenda 512×512, línea blanca sobre transparente (pill "Agendar reunión" de la firma)
- `firma-meandro-transparente-110x24-v2.png` — meandro transparente de la firma, 110×24
- `perfil-diego-1024.jpg` / `perfil-tono-1024.jpg` — retratos preexistentes. Se conservan sin cambios; las bibliotecas no registran aprobación de publicación para fotos de perfil, así que no se promueven ni se enlazan desde material nuevo.

### Portadas de los sistemas de diseño — `portadas-ds/`

PNG 1920×1080 (16:9), bytes idénticos a la portada aprobada de cada biblioteca.

- `portadas-ds/Cysure-DS-landing-page-cover.png` — Landing Page (**provisional**: LP en afinación)
- `portadas-ds/Cysure-DS-presentaciones-cover.png` — Presentaciones y Documentos
- `portadas-ds/Cysure-DS-producto-cover.png` — Producto

### Logo grid — `logo-grid/`

Lámina 1600×1000 que documenta la geometría del maestro del lockup, una por biblioteca, en claro y oscuro, en SVG y PNG. **Documenta, no reproduce**: para usar el logo se toma `cysure-lockup.svg`, nunca se traza desde la lámina. Área de respeto y mínimos de uso no se infieren de esta retícula.

- `logo-grid/logo-grid-landing-page-light.svg` / `.png`, `logo-grid/logo-grid-landing-page-dark.svg` / `.png` (**provisional**: LP en afinación)
- `logo-grid/logo-grid-presentaciones-light.svg` / `.png`, `logo-grid/logo-grid-presentaciones-dark.svg` / `.png`
- `logo-grid/logo-grid-producto-light.svg` / `.png`, `logo-grid/logo-grid-producto-dark.svg` / `.png`

Los rótulos de la lámina SVG están en Arial (fuente del sistema), así que su texto puede variar entre equipos; el PNG es la referencia de pintura.

### Favicons — `favicons/`

PNG 512×512 RGBA, frosted y con esquinas curvas, publicados por Toño y cotejados en staging. Llegaron en el sobre de transferencia del 5 oct; su copia canónica está en la LP 38.5 con el mismo sha256.

- `favicons/01-favicon-claro-512.png` — símbolo oscuro sobre vidrio claro (favicon light)
- `favicons/02-favicon-oscuro-512.png` — símbolo blanco sobre vidrio oscuro (favicon dark)
- `favicons/03-webclip-iPhone-512.png` — webclip/Apple touch; **byte a byte idéntico** a `favicons/02-favicon-oscuro-512.png` (declarado como `duplicateOf` en el manifiesto)

Son maestros: la plataforma genera los tamaños pequeños (32, 48, 180, 192, 256). En iOS las esquinas transparentes pueden recibir máscara del sistema; la validación física en iPhone sigue pendiente.

### Metas OG ES dark v3 — `metas/es-dark-v3/`

Nueve imágenes 1200×630 aprobadas (logo + título + subtítulo sobre arte aprobado y vidrio oscuro), una por página: `metas/es-dark-v3/home.png`, `metas/es-dark-v3/como-funciona.png`, `metas/es-dark-v3/nosotros.png`, `metas/es-dark-v3/agenda.png`, `metas/es-dark-v3/blog.png`, `metas/es-dark-v3/el-seguro-que-no-ve.png`, `metas/es-dark-v3/un-solo-motor.png`, `metas/es-dark-v3/riesgos-de-ia-operativos.png`, `metas/es-dark-v3/un-seguro-que-responde.png`. Título y subtítulo de cada una en el manifiesto. Sólo ES y sólo dark: no hay variantes EN ni light en esta entrega.

### Card + animación de mockup — `mockup-card/cysure-card-13/`

Paquete mínimo **sólo card y animación** (sin paisaje, arte, fuentes ni runtime), autorizado para integrar y **no certificado como servido final**. Se distribuye tal cual llegó:

- `mockup-card/cysure-card-13/cysure-card-13.inline.js` — modo recomendado: un solo script con CSS y animación.
- `mockup-card/cysure-card-13/cysure-card-13.css` + `mockup-card/cysure-card-13/cysure-card-13.js` — modo alternativo; no mezclar con el inline.
- `mockup-card/cysure-card-13/LEEME-CLAUDE.md` (integración y reversión), `mockup-card/cysure-card-13/DISTANCIAS-Y-QA.json` (QA local: 1 248 estados, 0 fallos), `mockup-card/cysure-card-13/MANIFIESTO.json`.

**Dependencia:** requiere el runtime `cysure-mockup` v5 de la LP (Shadow DOM) y se activa con `data-cy-frost="proposal"` sólo en los 13 hosts aprobados. Sin ese runtime el script carga sin errores pero no hace nada. Falta QA integrado en la LP real y en Safari/iPhone nativo.

### Ilustraciones — `ilustraciones/`

Arte aprobado y servido, con bytes idénticos a los almacenes de las bibliotecas. **No se recolorea, no se recorta, no se recomprime.** Cada archivo conserva su nombre de origen sin el prefijo del CDN (el id del CDN, el blob y la URL servida están en el manifiesto).

- `ilustraciones/agentes/` — los 9 agentes en día/noche y los recortes verticales móviles de Vendor, Nube, Auditoría y Gasto (26 archivos). Aprobación y uso por biblioteca: arte servido de la LP, banco v21 de Presentaciones y `MarcoArte` de Producto.
- `ilustraciones/arte-servido/` — el resto del banco servido de la LP (120 archivos): heroes de Inicio, Cómo funciona y Nosotros (escritorio, tablet y móvil), Atalayas con su escalera de anchos, Arco, Consejo, cantos y tesis de Nosotros, riesgos cubiertos (RC-*), riesgos de IA (cy-riai-*), splash v4, Hermes, payout y portadas del blog.
- `ilustraciones/retratos/` — retratos ilustrados CEO y CTO, día y noche (VoBo en el registro de Presentaciones, servidos en staging).

Cada formato es un **recorte propio**: el móvil, la tablet y cada ancho `-wNNNN` no se sustituyen entre sí ni por el de escritorio. El manifiesto registra por archivo la variante, el estado de consumo medido en la LP, las páginas y secciones que lo usan y en qué bibliotecas está aprobado.

Reglas de uso (de las bibliotecas):

- **La pareja viaja junta.** El tema intercambia la gemela; nunca se forma `-dark` a partir del nombre de otro archivo.
- Cero texto dentro de la ilustración: el copy va en HTML.
- Sólo se funde el borde hacia el fondo del mismo tema; no se lava, no se estira, no se baja la opacidad.
- En producto, el arte no va detrás de datos, tablas, evidencia o decisiones.
- Correo es Argos reconociendo a Odiseo; Gasto es operador, canal y monedas. No se infieren escenas del nombre del archivo.

### Maestros de arte para metas — `meta-maestros/`

Los 18 maestros (9 parejas light/dark, 3840×2160; Cómo funciona 4032×1728; Agenda 1400×788 porque no existe maestro 4K) que consume el generador de metas de la LP. **Son insumo, no OG publicables**: las OG están en `metas/`. «Nombre igual no es archivo igual»: `meta-maestros/un-solo-motor-light.webp` (maestro) no es la portada del blog `ilustraciones/arte-servido/cy-cover-un-solo-motor-light.webp`.

## Estados

| Estado | Qué significa |
|---|---|
| `publicado` | Aprobado, servido y verificado en una biblioteca estable. |
| `publicado · arte servido verificado (30 sep)…` | Bytes servidos en staging y verificados; se re-cotejan cuando la LP sea estable. |
| `publicado-provisional · LP en afinación…` | Versión comprobada de la LP en afinación; sincronización final pendiente. |
| `publicado en staging (cotejado)…` / `aprobado · ES dark v3…` | Llegaron por el sobre de transferencia; copia canónica en LP 38.5 con sha256 idéntico. |
| `autorizado para integración · NO certificado servido final` | Card + animación: listo para integrar, no publicado ni verificado servido. |
| `existente · conservado sin cambios` | Archivos históricos con URL externa estable. |

## Pendientes

Detalle en `manifest.json` → `pending`.

- **Sincronización final** de las tres bibliotecas: sólo tras la versión estable final conciliada con Webflow. La LP sigue en afinación.
- **Card servida final:** integración en la LP real y QA en Safari/iPhone.
- **retrato-iii-advisor:** sin VoBo de publicación; no se incluye.

## Licencias y dependencias

- **Marca, ilustraciones, metas, favicons y código de la card:** © Cysure. Todos los derechos reservados. Que un archivo sea accesible por URL pública no concede licencia de uso, modificación ni redistribución fuera de comunicaciones de Cysure. El logo no se redibuja, no se recolorea y no se deforma.
- **Logos de terceros:** no se distribuyen aquí (Microsoft, Google, Google Cloud, CrowdStrike, SentinelOne viven en las bibliotecas con sus reglas de placa). `firma-icon-whatsapp.png`, `firma-icon-linkedin.png` y `firma-icon-x.png` reproducen marcas de sus titulares y sólo se usan como enlace a esas redes.
- **Tipografías:** no se distribuyen aquí. DM Sans, DM Serif Display y Space Grotesk viajan como TTF originales dentro de las bibliotecas, bajo SIL Open Font License 1.1 (`project/fonts/LICENCIAS.md`).
- **Dependencias de render:** ninguna para PNG, JPG y WebP (WebP requiere un navegador o visor actual). La card de mockup depende del runtime `cysure-mockup` v5 de la LP y de sus fuentes; no las trae. Los SVG del logo son autocontenidos (`currentColor`, sin fuentes ni recursos externos). Los SVG de logo grid usan la fuente del sistema Arial para sus rótulos.
- **Verificación:** `scripts/verify-manifest.py` sólo necesita Python 3.8+.

Fuente canónica de diseño: las tres bibliotecas de Claude Design citadas arriba (mark/lockup v2.1).
