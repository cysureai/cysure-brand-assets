# Entrega mínima: sólo card UI mockup y animación

Este paquete contiene exclusivamente el complemento de la card y sus figuras/animación. **No contiene arte, ilustraciones, fondos, galería, fuentes, plantillas, runtime ni adaptadores ajenos.** El copy vigente en el componente de la LP sigue siendo la autoridad.

## Integración recomendada

1. Conservar el runtime vigente `cysure-mockup` v5, su Shadow DOM, plantillas, copy, traducciones, fuentes, arte y adaptadores actuales. No reemplazar ninguno con los de la galería local.
2. Cargar **sólo `cysure-card-13.inline.js`**, que ya contiene las reglas de material y la animación. No cargar además el CSS/JS separado. No requiere recursos externos del paquete.
3. Activar `data-cy-frost="proposal"` exclusivamente en los hosts de los 13 IDs aprobados: mdr, superficie, explorador, nube, correo, auditoria, redteam, vendor, gasto, lead, score, alignment, payout.
4. El script inyecta CSS dentro del Shadow DOM y añade detalles dentro de `.glass .visual > svg`. Conserva runtime, controles y secuencia; aprovecha `running`/`reveal` originales. Las etiquetas SVG nuevas se registran con el diccionario original para ida y vuelta ES/EN.
5. Validar en la LP real y su copy vigente antes de publicación: padding, títulos/notas largos, etiquetas e iconos, tema invertido Payout, lente/carrusel, carga, reveal, scroll y performance. Si cambió el contrato DOM, adaptar únicamente el complemento a la fuente vigente; no reinstalar plantillas antiguas.

Alternativa: los dos archivos separados `cysure-card-13.css` y `cysure-card-13.js`. El JS resuelve el CSS por nombre hermano; si Webflow cambia las URLs/nombres, proporcionar primero `window.CY_FROST_CSS` con el contenido CSS o usar el inline recomendado. No mezclar ambos modos.

## Material y espacio

- Padding horizontal simétrico: 20 px móvil / 24 px a partir de contenedor 480 px. Caja de contenido alineada; los textos siguen a la izquierda, sin centrarlos por su longitud.
- Padding vertical: 18 px móvil / 22 px escritorio. Grid mantiene título y nota con holgura; diagrama usa espacio restante. Exterior, arte y radio se conservan.
- Contorno frosted de 14 px, filo y relieve. Centro gráfico nítido. Respaldo claro .80/.70 y oscuro .70/.78 usando paleta existente, documentados como cambio de material para validar físicamente.
- No copy nuevo, cifras nuevas, pagos completados ni acciones sobre recursos reales. Gasto de IA conserva carácter de gestión, no cobertura. No filtros animados.

## Reversión

Retirar `data-cy-frost` de los hosts restaura las figuras y presentación base. No sustituye ningún recurso del runtime o arte. Se puede retirar el script del complemento después.

Estado: propuesta preparada con QA local; no acredita integración, publicación ni Safari/iPhone nativos. Evidencia de márgenes en `DISTANCIAS-Y-QA.json`; capturas e informes completos fuera de este paquete, en `work/propuestas-mockups-13-04oct/qa/`.
