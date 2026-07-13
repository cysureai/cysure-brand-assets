# Catálogo de assets

## Assets públicos servidos por URL

El repositorio público `cysureai/cysure-brand-assets` (rama `main`) sirve los
assets estables por URL raw. Base:
`https://raw.githubusercontent.com/cysureai/cysure-brand-assets/main/<archivo>`

Nombres estables, no renombrar: hay URLs externas apuntando a ellos.

| Archivo | Qué es | Uso |
|---|---|---|
| `cysure-mark.svg` | Mark shield-knot v2.1, vector oficial, currentColor | Cualquier render del mark |
| `cysure-lockup.svg` | Lockup completo v2.1, wordmark vectorizado | Cualquier render del lockup |
| `cysure-mark-firma-1024.png` | Mark sobre blanco, 1024×1024 | Firma electrónica |
| `cover-notion-linkedin-drive-blanco-2400x600.png` | Cover claro 2400×600 | Notion, LinkedIn, Drive |
| `cover-notion-linkedin-drive-dark-2400x600.png` | Cover oscuro 2400×600 | Notion, LinkedIn, Drive |
| `google-workspace-logo-320x132.png` | Lockup horizontal 320×132, fondo blanco | Google Workspace |
| `firma-icon-whatsapp.png` / `firma-icon-linkedin.png` / `firma-icon-x.png` | Íconos sociales 512×512, colores oficiales | Firma electrónica |
| `firma-icon-calendar.png` | Ícono de agenda 512×512, línea blanca sobre transparente | Botón "Agendar reunión" de la firma |
| `perfil-tono-1024.jpg` | Foto de perfil de Toño, 1024×1024 | Sección de equipo, avatares |
| `perfil-diego-1024.jpg` | Foto de perfil de Diego, 1024×1024 | Sección de equipo, avatares |

## Librería extendida (pedir al equipo si hace falta)

La librería completa de marca incluye además, ya generados:

1. **Logo raster masters:** mark ink y blanco 1738×2000, lockup ink y blanco
   3000×813.
2. **Favicons y app icons:** `favicon.ico` (16, 32, 48), `favicon-16/32/48.png`,
   `apple-touch-icon-180.png`, `pwa-192.png`, `pwa-512.png`, `maskable-512.png`
   (con zona segura, no recortar), avatares light y dark 1024.
3. **Covers sociales** en par light y dark: OG 1200×630, X header 1500×500,
   LinkedIn banner 1128×191, Notion cover 1500×600, y covers HD 4800×1200 en
   PNG y JPG (el contenido vive en la banda central para sobrevivir los crops
   de cada plataforma).
4. **Fotos de perfil de redes** 1024×1024: mark blanco sobre ink (la
   recomendada) y mark ink sobre claro.
5. **Retratos master de fundadores** 2184×2160.
6. **Space Grotesk TTF** (fuente variable) para flujos sin acceso a Google
   Fonts.

## Al subir assets a Webflow

1. Subir el archivo oficial tal cual, con su nombre original, sin recomprimir
   ni reescalar.
2. Todo `<img>` lleva alt text en español, misma voz del sitio.
3. Para el logo en el sitio usar SVG (mark o lockup según espacio), variante
   ink sobre claro y blanca sobre paneles ink.
4. OG image del sitio: el par `og-1200x630` light o dark de la librería
   extendida (pedirlo al equipo si aún no está en los assets del proyecto).
