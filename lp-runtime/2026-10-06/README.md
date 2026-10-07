# Cysure LP · versiones finales servidas · 6 oct 2026

Corte: **2026-10-06T15:24:08Z**. Producción (cysure.ai / www) = staging (cysure.webflow.io) en las 12 rutas (ES/EN: inicio, cómo funciona, nosotros, tesis, blog, agenda).
Todo lo que hay aquí es **idéntico byte a byte a lo servido** (sha256 en `inventario/inventario-servido.json`). No se ha regenerado nada.

## Contenido
| Carpeta | Qué |
|---|---|
| `fuentes/mockups/` | Runtime del web component `<cysure-mockup>`: `cy-mockups-v6g.js`, `cy-mockups-v3i.css` (CSS del shadow), plantillas e i18n EN (JSON), `st-mockups-adapter-v9.js` / `-v1.css`, `cy-mockups-cysure-v26.css` |
| `fuentes/glass/` | Material cristal: `cy-glass-desktop-v2.2.css`, `cy-cristal-mobile-v1.2.css`, `cy-glass-sobrio-v8.css` |
| `fuentes/sitio/` | `st-pages-v99.js`, bloque R3 (reserva del hero móvil 403–430 px en Cómo funciona), bloque 6.1b (tema/idioma por visita) |
| `cajas/` | Las 4 cajas de código vivas: cabecera y pie del sitio, cabecera y pie de Cómo funciona |
| `inventario/inventario-servido.json` | Las 43 hojas/scripts que referencian las cajas, con asset id, URL, bytes y sha256 medidos en el CDN; las 11 incluidas aquí marcan `paquete_igual_a_servido: true` |

## Versiones vigentes (sustituyen a las anteriores)
| Pieza | Vigente | Sustituye | Asset id | sha256 (prefijo) |
|---|---|---|---|---|
| Módulo mockups | cy-mockups-v6g.js | v6 / v6f | 6ac4e62205972b4d2b794f27 | 7709efde |
| CSS del shadow | cy-mockups-v3i.css | v3d / v3f / v3g / v3h | 6ac4fe7564f2ed87bccd444f | 65d8ac76 |
| Capa marca mockups | cy-mockups-cysure-v26.css | v25 | 6ac4f966e9d43de425b864af | 241ad19f |
| Cristal sobrio | cy-glass-sobrio-v8.css | v7 | 6ac4f966174b830d7f1b6aa8 | de13a914 |
| Cristal escritorio | cy-glass-desktop-v2.2.css | v2.1 | 6ac49fd0f80e71323bad54c4 | dc5ca83e |
| Cristal móvil | cy-cristal-mobile-v1.2.css | v1.1 | 6ac49fd05c9b7a20a6c988cd | acd18987 |
| Motor de páginas | st-pages-v99.js | v97b / v98 | 6ac4d7da72204f5e382f829f | e6a5acf9 |
| Adapter mockups | st-mockups-adapter-v9.js | v8 | 6ac426c4e59b0a41ea148763 | ae94bdd3 |

Cajas: cabecera sitio `0b5f88b9` (40.655 car.) · pie sitio `6ab362ff` (48.021) · cabecera CF `a69cbde5` (43.638) · pie CF `60474220` (47.887).

## Contratos de comportamiento
1. **UI mockups, una sola salida.** El UI se ve desde la entrada hasta UNA desaparición final (revelado del arte) y nunca reaparece ni se relanza: ni por hover, autoplay, carrusel, tema ni idioma. Con movimiento reducido no hay ciclo y el UI queda visible.
   - JS: `play()` no hace nada si `done`; al final del ciclo conserva `.reveal` y añade `done` + `.cy-fin`; `cancelCycle` termina si ya estaba revelando; `refreshArt` respeta `done`.
   - CSS: `.card.cy-fin .glass` queda oculto definitivo y la transición de opacidad del `.glass` solo corre en `.reveal`.
2. **Sin tinte detrás del UI.** `.scene::after{display:none!important}` en los 13 mockups.
3. **Frosted alrededor del arte en los capítulos III–VI** (VI incluido): las capas de `frostMock` (`.cy-frost-art/-velo/-refr`, banda de ~14 px) son visibles en III–VI. Los 9 agentes no las llevan.
4. **Material Liquid Glass del panel**, sin cambios respecto a la referencia v7 (radio, borde, edge-light, día/noche, fallback blur en Safari/Firefox/≤991 px).
5. **Lentes de bloque idempotentes** (st-pages v99): `lentesBloque` no duplica el clon al re-ejecutarse (tema, resize, vuelta).
6. **Hero móvil 403–430 px (Cómo funciona):** la reserva `min-height` va por tramos e idioma, 2,1 px por debajo del alto final, para que el script del hero escriba siempre el valor exacto y no haya salto. Para revertirlo, se borra el bloque.
7. **Tema e idioma por visita (6.1b):** en cada visita nueva manda el dispositivo (`prefers-color-scheme` e idioma del navegador). La elección manual con los botones dura solo esa visita (`sessionStorage cy-visita`).

## Dependencia anotada
`cy-arte28-v17.js` parchea `refreshArt` y quita `.reveal` al cambiar de tema; v6g lo neutraliza con `.cy-fin`. Si se rehace cy-arte28, debe respetar `done`.

## Rollback
Cada pieza anterior sigue en el CDN. Para volver atrás, basta con reapuntar la caja correspondiente a la versión previa de la tabla y publicar.
