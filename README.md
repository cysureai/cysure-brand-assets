# cysure-brand-assets

Assets públicos de marca Cysure servidos por URL raw (covers de Notion, LinkedIn, Drive, firma, portadas de los sistemas de diseño, logo grids e ilustraciones de agentes).

Uso: URL raw del archivo, p. ej.
`https://raw.githubusercontent.com/cysureai/cysure-brand-assets/main/<archivo>`

Para fijar una versión, usa el SHA de un commit en lugar de `main`:
`https://raw.githubusercontent.com/cysureai/cysure-brand-assets/<commit>/<archivo>`

## Qué es este repositorio (y qué no)

Es **distribución versionada** de assets ya aprobados. **No es una cuarta biblioteca canónica.** La fuente de verdad son los Files y el almacén de activos de las tres bibliotecas de Claude Design:

| Biblioteca | Artifact | Versión comprobada | Estado |
|---|---|---|---|
| Cysure · Landing Page | `2eE7Et7U5ncfhXFWiLwKrQ` | 1791163080-8473 · DS 38.4 | **en afinación**: sincronización final pendiente |
| Cysure · Presentaciones y Documentos | `Fg2g2h34stb1rSW7i4uk4h` | 1791163078-a0df · tokens 2 (4 oct 2026) | estable |
| Cysure · Producto | `GCo5W1nJTUGzBWiNEMWtFx` | 1791163082-fce4 · 1.5.1 (4 oct 2026) | estable |

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

### Ilustraciones de agentes — `ilustraciones/agentes/`

Los 9 agentes en pareja día/noche más el recorte vertical móvil de Vendor: 20 WebP derivados aprobados y servidos, **homologados** (mismo sha256 en las tres bibliotecas). Nombre de archivo igual al del banco de Presentaciones; el id del CDN de Webflow va en el manifiesto.

| Agente | Día | Noche | Dimensiones |
|---|---|---|---|
| MDR | `ilustraciones/agentes/AG-mdr.webp` | `ilustraciones/agentes/AG-mdr-dark.webp` | 1671×941 |
| Superficie | `ilustraciones/agentes/AG-superficie.webp` | `ilustraciones/agentes/AG-superficie-dark.webp` | 1672×941 |
| Red Team | `ilustraciones/agentes/AG-redteam.webp` | `ilustraciones/agentes/AG-redteam-dark.webp` | 1586×992 / 1584×993 |
| Correo | `ilustraciones/agentes/AG-correo.webp` | `ilustraciones/agentes/AG-correo-dark.webp` | 1585×992 |
| Nube | `ilustraciones/agentes/AG-nube.webp` | `ilustraciones/agentes/AG-nube-dark.webp` | 1672×941 |
| Explorador | `ilustraciones/agentes/AG-explorador.webp` | `ilustraciones/agentes/AG-explorador-dark.webp` | 1672×941 |
| Auditoría | `ilustraciones/agentes/AG-auditoria.webp` | `ilustraciones/agentes/AG-auditoria-dark.webp` | 1672×941 / 1671×941 |
| Vendor | `ilustraciones/agentes/AG-vendor.webp` | `ilustraciones/agentes/AG-vendor-dark.webp` | 1672×941 |
| Vendor (móvil) | `ilustraciones/agentes/AG-vendor-mobile-18sep.webp` | `ilustraciones/agentes/AG-vendor-mobile-18sep-dark.webp` | 1024×1536 |
| Gasto | `ilustraciones/agentes/AG-gasto.webp` | `ilustraciones/agentes/AG-gasto-dark.webp` | 1672×941 |

Reglas de uso (de las bibliotecas):

- **La pareja viaja junta.** El tema intercambia la gemela; no se filtra ni se recolorea la misma imagen, y nunca se forma `-dark` a partir del nombre de otro archivo.
- Cero texto dentro de la ilustración: el copy va en HTML.
- Sólo se funde el borde hacia el fondo del mismo tema; no se lava, no se estira, no se baja la opacidad.
- No va detrás de datos, tablas, evidencia o decisiones de producto.
- Correo es Argos reconociendo a Odiseo; Gasto es operador, canal y monedas. No se infieren escenas del nombre del archivo.

## Pendientes (no incluidos en esta versión)

Detalle y qué hace falta para cerrarlos en `manifest.json` → `pending`.

- **Favicons frosted de esquinas curvas.** Publicados sólo en Webflow staging; no están en ninguna de las tres bibliotecas.
- **Nueve metas ES dark v3 (OG 1200×630).** Las bibliotecas tienen el generador y los maestros 4K, no las salidas raster aprobadas.
- **Card + animación refinada (`CardMockup`).** Sólo existe dentro del bundle de la LP, marcada «candidato autorizado, no servido»; falta el paquete portable aprobado o la LP estable.
- **Sincronización final de la LP.** Portada y logo grid LP entran como provisionales.

## Licencias y dependencias

- **Marca e ilustraciones:** © Cysure. Todos los derechos reservados. Que un archivo sea accesible por URL pública no concede licencia de uso, modificación ni redistribución fuera de comunicaciones de Cysure. El logo no se redibuja, no se recolorea y no se deforma.
- **Logos de terceros:** no se distribuyen aquí (Microsoft, Google, Google Cloud, CrowdStrike, SentinelOne viven en las bibliotecas con sus reglas de placa). `firma-icon-whatsapp.png`, `firma-icon-linkedin.png` y `firma-icon-x.png` reproducen marcas de sus titulares y sólo se usan como enlace a esas redes.
- **Tipografías:** no se distribuyen aquí. DM Sans, DM Serif Display y Space Grotesk viajan como TTF originales dentro de las bibliotecas, bajo SIL Open Font License 1.1 (`project/fonts/LICENCIAS.md`).
- **Dependencias de render:** ninguna para PNG, JPG y WebP. Los SVG del logo son autocontenidos (`currentColor`, sin fuentes ni recursos externos). Los SVG de logo grid usan la fuente del sistema Arial para sus rótulos.
- **Verificación:** `scripts/verify-manifest.py` sólo necesita Python 3.8+.

Fuente canónica de diseño: las tres bibliotecas de Claude Design citadas arriba (mark/lockup v2.1).
