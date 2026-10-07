// v99 (6 oct 2026, hilo principal: work/stpages-lentes-06oct/DIAGNOSTICO.md) = v98 (4f463669) + lentesBloque no destruye ni recrea las lentes de bloque si el plan medido (imagen, padre, lados, radios, object-fit/position, reduced-motion, arte invertido) es identico al de la pasada anterior y no hay lentes hijas directas de una tira: recoloca/sincroniza las existentes y repite cyRecorta/cyPistas. Si algo difiere, camino v98 intacto. Rollback: v98.
// v98 (6 oct 2026, esquinas del Blog de Home a 1440: work/blog-esquinas-06oct/DIAGNOSTICO.md) = v97b (525ceff3) + esquinasBlq mide las portadas por la cadena de offsetParent (esqOff) y no solo cuando la tarjeta es su offsetParent.
// v97b (5 oct 2026, QA Fable C5) = v97 (fe937dd5) + el escalado de las bandas de constelacion solo por debajo de 992 px de ventana; de 992 en adelante k = 1 y el dibujo es el de v96.
// v97 (5 oct 2026, carga movil: work/carga-cinematica-05oct/DIAGNOSTICO.md) = v96 (57900cd6) + (1) titulos y bloques ya pintados (en vista cuando corre este guion o en la primera pasada de setup) no se vuelven a ocultar: data-cy-visto y mountMar decide con el alto de ventana entero; (2) <=991: el enfoque de titulos (wipe) y el de h2[data-st-rev] desenfocan 4 px y terminan a la vez que el fundido (.6 s), sin cola de nitidez; (3) autoDots corre tambien al final de cada pasada de setup y, si en la primera crea filas de puntos, emite un resize: st-carr-ctrl (que solo escucha resize, DCL+1,2 s y +3,2 s) monta sus controles a +150 ms en vez de a DCL+1,2 s, cuando empujaban 50 px el contenido ya visible; (4) html.cy-asentado tras la primera pasada (lo usa la puerta de cy-hero-cine); (5) bandas de constelacion: trazo, halos y puntos escalan con el alto de la banda (38 px en movil: antes eran manchas) y figuras mas altas; ResizeObserver en vez de solo resize; (6) cielo del pie: estrellas con semilla y sin reconstruir si la caja no cambia (la barra de Safari las rebarajaba).
// v96 (5 oct 2026) = v95 (fe0c88a6) + v96-scroll (2a5e9d83: revelados moviles sin desplazamiento con fundido y desenfoque, lentesRevisa fuera del scroll movil, lentes del Acto III en capa propia, arte de la flota de CF) + v96-home (ae7b70cb: tinta frosted de noche de la tarjeta clara del Acto IV La ruta). Fusion por lineas sin solapes; detalle de cada parte en las dos lineas siguientes. Rollback: v95.
// v96-scroll (5 oct 2026, temblor al hacer scroll en iPhone y arte de agentes al volver en CF; diagnostico work/scroll-temblor-arte-05oct/DIAGNOSTICO.md): (1) movil <=991: los revelados por scroll ([data-st-rev], [data-st-wipe] de titulos, fundido de imagen data-st-img y su lente) conservan opacidad y desenfoque pero ya no desplazan ni escalan: el contenido no se mueve respecto de la pagina mientras se hace scroll; (2) movil: lentesRevisa deja de correr en cada scroll (sigue en load/transitionend/animationend/resize); (3) Acto III de Home: las lentes frosted de las tarjetas sticky van en capa propia (antes se repintaban con su filtro SVG en cada fotograma: 46 -> 17 ms por fotograma en WebKit); (4) carrusel de agentes de CF: el arte ya decodificado no se oculta al dejar de ser activo/siguiente, se pide en cuanto la tarjeta asoma al deslizar y se precalienta la anterior. Rollback: v95.
// v96-home (5 oct 2026, Home La ruta, contorno frosted de la tarjeta clara de noche): mateBloques/superficie usa de noche una tinta oscura (rgba(41, 72, 123, .24)) en las superficies claras, en lugar de la tinta clara de dia que casi igualaba el relleno lavanda de la tarjeta III. Mismo grosor (14 px), mismos lados. Base v95 (fe0c88a6). Rollback: v95.
// v95 (4 oct 2026, coberturas de Como funciona, contorno frosted): el arte (img a sangre) y el panel de texto de las coberturas (.st-i-2949f424 / .st-i-ac51406e) pintan encima del box-shadow inset de la tarjeta, asi que el contorno solo se veia en la franja libre bajo el panel (1.a tarjeta sin filo en el extremo izquierdo, ultima con una L en el derecho, O1/O1-bis). El mismo inset (mismos lados de v93, grosor 14 px y tinta) va ahora en una capa [data-cy-marco][data-cy-filo] hija de la tarjeta, encima del contenido y sin eventos; la tarjeta deja de llevarlo inline. Solo esas tarjetas, en todos los anchos. (2) Sin backdrop-filter en las celdas de las rejillas .st-i-70d0a8bc de CF (Cap. I, Cap. II movil, Cap. V), cuyo padre tiene fondo opaco: el desenfoque no se veia y la capa compuesta desregistraba las celdas (borde inferior mas grueso). Base v94 (dbcf205e). Rollback: v94 (o v93).
// v94 (4 oct 2026, Safari iOS): v93 + el touchmove no pasivo del bloqueo del menu movil solo existe mientras el menu esta abierto (menuTouch en bloqueaScroll/liberaScroll). Rollback: v93.
// v93 (4 oct 2026, coberturas de Como funciona, juntas claras): los lados con inset de una tarjeta se calculan por sus VECINAS reales en el layout medido (offset*, inmune al transform del revelado), no por su posicion en el bloque: un lado lleva inset si no hay ninguna tarjeta adyacente (<3 px, solape >4 px) en ese lado. (1) Bloques [data-st-blq]/[data-st-blqx] unidos (alguna junta) no tira: 992-1199 la fila 2+2+1 conserva el inset de Data Breach y de la 5.a sobre el hueco. Bloques sin ninguna junta: regla de v91. (2) Carrusel con scroll horizontal cuyas tarjetas son VID_SUELTAS (coberturas <992, .st-i-ba6c41c2): se trata como conjunto, todas sus tarjetas (tambien la 5.a, que en escritorio ya era superficie del bloque) sin inset en las juntas y con el en el contorno de la tira (arriba, abajo, extremo izquierdo de la 1.a y derecho de la ultima). Se recalcula en cada pasada de mateBloques (resize/tema), como antes. H3 sigue inerte. Base v92 (44e7dcdc).
// v92 (4 oct 2026, coberturas de Como funciona): una superficie de VID_SUELTAS que ya trato su grupo [data-st-blq] (hija directa, ya marcada con los lados EXTERIORES del grupo) no se vuelve a tratar como suelta con los 4 lados: el inset lateral caia en las juntas y, sumado al inferior, dejaba triangulos claros junto a la divisoria bajo el rombo (24,41,89 vs 12,28,73). Fuera de [data-st-blq], identico a v91. Incluye VID_SIN_BF_MOCKUP (H3, vidrio anidado con cysure-mockup) DESACTIVADO. Base v91 (fcfc898e).
// v90 (1 oct 2026, cierre LP): el cierre de los articulos del blog («Habla con los fundadores» y «Sigue leyendo») con el vidrio y el carrusel de los bloques de la LP (blogCierre + VID_SUELTAS). Base v89.
// v89 (candidato, 1 oct 2026, cierre LP N04): el hero de Home movil ya no se funde dos veces. La regla de cy-par cambiaba la primera animacion de cyHeroInImg (cabecera) a cyHeroInOp y el navegador la reiniciaba desde opacidad 0 a ~0,9 s (visible -> negro -> visible en Safari). Ahora conserva el nombre cyHeroInImg en primera posicion y #cy-hero-par lo redefine como solo opacidad (misma entrada de v75, sin escala, en el compositor). Base v88.
// v88 (candidato, 1 oct 2026, cierre LP; mascara x0,33 para igualar la caida del relieve del bloque): N03 ilustracion de La ruta sin lente; N02 pista del blog recortada a la caja de las tarjetas (path) y capas de lente con clip-path; N01: banda del frosted/lupa de ilustraciones y maquetas de 46 a 14 px (misma distancia de relieve que los bloques normales: sombra interior 0 14px 14px -14px), misma curva escalada. Base v87.
// v87 (candidato, 1 oct 2026): carga sin cambio estetico: las lentes (ilustraciones y bloques) se insertan y colocan en lote (lee todo, luego escribe todo) con un ResizeObserver compartido por pasada; antes cada lente forzaba un recalculo de estilo (:has del sitio) al insertarse y otra vez al arrancar su ResizeObserver. Base v84. RESPALDO v84: 6abd7ac8ceb864d1ed5569c2.
// v84 (30 sep 2026, pedido de Toño): frosted algo mas suave dentro de las ilustraciones (desenfoque stdDeviation 5 -> 4; velo dia .16/.42/.20 -> .12/.34/.15, noche .10/.27/.15 -> .075/.21/.11), misma extension de 46 px y misma curva de borde a centro; incluye mockups III-VI. Fundida de tema identica a v82 (el candidato v83 de captura con tema nuevo no mostro efecto medible y no se publica). Base v82. RESPALDO v82: 6abd66a7ddc0bba307253410.
// v82 (30 sep 2026): sobre v81, la captura vieja que sigue al scroll se prolonga arriba y abajo con el fondo que habia a la vista, asi que la franja que entra durante la fundida funde desde el color anterior como la seccion en la fundida CSS (sin borde duro ni imagen fija).
// v81 (30 sep 2026): en la View Transition de WebKit la captura vieja sigue al scroll y se funde por opacidad sobre la nueva, y la nav fija se funde aparte en su sitio: si se hace scroll durante la fundida no queda una imagen fija encima; lo que entra por abajo ya esta en el tema nuevo, como en la fundida CSS. Base v80.
// v80 (30 sep 2026, raiz: v79 quitaba la fundida de tema en Safari y eso cambia un efecto visible). En WebKit la fundida se hace con una View Transition del documento (captura del tema anterior fundida sobre la del nuevo en el compositor, .35 s ease como la fundida CSS) y no con transiciones por elemento, que son las que Safari pierde; al terminar solo queda el DOM con su estilo final. Clic retenido en captura y repetido dentro de la transicion; salto de seguridad a 1,5 s. Chromium sin cambios. Base v79. RESPALDO v79: 6abd4f062099271c8a8ca505.
// v79 (30 sep 2026, raiz Safari nativo sobre v78, direccion inversa en movil: Nosotros dia 1440 -> resize 390 sin recargar -> menu -> noche -> cerrar -> scroll: fondo de Canto I y nav blancos, logo blanco invisible, parrafos claros; las secciones estaban VISIBLES al pulsar, asi que fundian y la transicion de fondo se atasca tambien a la vista). En WebKit (Safari y todo iOS) el cambio de tema ya no crea transiciones (html.cy-wk-sinfundido): todo cambia en el mismo fotograma (los revelados no pierden nada: durante la ventana cy-dither ya sustituye su lista de transiciones). Chromium conserva el fundido. Base v78. RESPALDO v78: 6abd460b86543a13daa9bbb8.
// v78 (30 sep 2026, medida del gesto del hero movil a CPU x4 tras v76): armar las franjas de la lupa durante el scroll anadia un fotograma largo (~66 ms frente a ~42 ms de v75) en Como funciona y Home. La traza muestra que el coste es un recalculo de estilo de todo el main (1.718 elementos, reglas :has() del sitio) al insertar nodos, igual para una lente que para todas: ahora se arman todas las pendientes en un solo lote, en tiempo ocioso y con el scroll quieto 200 ms (al terminar de cargar), con fundido de 400 ms; las franjas usan la etiqueta cy-rf. Y Mensaje 63 (persiste en Safari nativo con v77, solo el fondo): las secciones fuera de la vista al cambiar de tema cambian sin fundido y, tras la fundida, un cambio de fondo de 1/255 durante un fotograma obliga a Safari a repintarlas. Mismo aspecto final. Base v77. RESPALDO v77: 6abd388dad22140adc34744c.
// v77 (30 sep 2026, Mensajes 59/63 de raiz, Safari nativo): al cambiar de tema tras navegar y hacer scroll enseguida, las transiciones de la fundida de cy-dither (.cy-theme-anim: fondo, borde y color, 350 ms) pueden no avanzar: lo que transiciona (fondos de seccion, titulos y enlaces con color propio) se queda en el tema anterior y lo que no transiciona (parrafos) cambia, asi que queda fondo claro con texto claro o fondo noche con parrafos oscuros, hasta recargar. Pausar esas transiciones en 0 reproduce la misma firma en WebKit y Chromium. Ahora cada cambio de tema lleva un cierre: a los 900 ms se terminan las transiciones de 350 ms (fondo, borde y color de la fundida; sombra de los controles) que no avanzaron desde la muestra de 650 ms, y a los 1.600 y 3.000 ms todas las que sigan vivas (una fundida sana dura 350 ms); tambien al volver la pestana visible tras un cambio reciente. Nada mas cambia. Base v76. RESPALDO v76: 6abd3392af9a2af25214fc4d.
// v76 (30 sep 2026, pedido de Tono: frosted un poco menor y, hacia el centro, lupa estilo Liquid Glass): (1) velo del frosted ~20 % mas suave (dia .20->.16, filo .50->.42, brillo .26->.20; noche .12->.10, .32->.27, .18->.15). (2) lupa Liquid Glass [data-cy-lente-refr]: por lado de contorno, tres franjas anidadas (46/30/15 px) que estiran 4,5 % cada una desde su limite interior (refraccion continua que crece hacia el filo, sin imagen doble; solo transform y clip-path, compatible con Safari; se construyen al acercarse a la ventana), bajo el frosted; el frosted desenfocado ya no se amplia desde el centro para coincidir con esa geometria: del borde al centro va de frosted a vidrio claro que refracta y amplia, y el centro queda intacto. Mismos lados que el frosted (sueltas 4, bloques solo contorno). Mockups III-VI: las mismas franjas (.cy-frost-refr). Base v75. RESPALDO v75: 6abd1b8d5af6804c0a4d8d37.
// v75 (30 sep 2026, pedidos de Tono y medida de por que Nosotros va fluido y Home/Como funciona no): (1) parallax reducido y sin escala: translate 0 -> 18vh escritorio / 14vh movil (v74: 40/32vh + scale 1,09/1,07). Sin scale Chrome deja de re-rasterizar la capa del hero en cada fotograma (medido 766 teselas por gesto a 2504 px -> 0). (2) Home movil: la entrada pasa a solo opacidad (cyHeroInOp) y el parallax ya no se compone con add: Chrome la ejecuta en el compositor (antes TargetHasIncompatibleAnimations, en el hilo principal). (3) Movil: los titulos que se revelan justo debajo del hero (Home Acto I, CF Capitulo I) animaban text-shadow junto con filter; text-shadow obliga a layout en cada fotograma (medido ~100 layouts por gesto en Home, 63 en CF, 4 en Nosotros) y en Safari hasta 26.3 y en Chrome movil la animacion del hero va por el hilo principal: por eso Nosotros iba fluido y los otros dos se trababan. Se quita text-shadow de la transicion (el titulo sigue enfocando con filter, opacidad y escala; parte de opacidad 0, sin salto visible). (4) Frosted/lupa: capa de velo (tono lechoso, filo claro y grano de vidrio) con la misma mascara por lado, para que el efecto se vea tambien sobre cielos lisos (medido: 49 % de los bordes superiores imperceptibles en v74). Base v74. RESPALDO v74: 6abc9781bc2d2ef7cf12a4d7.
// v74 (30 sep 2026, pedidos de Tono): (1) parallax del hero en el compositor: animacion CSS ligada al scroll (animation-timeline: scroll(root)) sobre translate/scale, sin JS por fotograma; respaldo rAF con lista cacheada donde no hay soporte. (2) frosted en TODAS las ilustraciones de contenido: sueltas sin lista cerrada (tambien sin radio propio) y tarjetas de tira sin [data-cy-vid]. (3) la lente vive en el marco de su imagen (mismo padre), asi que el revelado por scroll la mueve junto con la ilustracion. (4) alcance del frosted 66 -> 46 px. Base v73. RESPALDO v73: 6abc8a634b44ec7e1b907b29.
// v73 (30 sep 2026): el pintor nocturno de tarjetas ya no repinta los mensajes del formulario (.w-form-done/.w-form-fail), que llevan su vidrio verde de cy-botones v22. Base v72. RESPALDO v72: 6abc847f31d0d646d786b238_st-pages-v72.js
// v72 (30 sep 2026, pedidos de Tono): parallax del hero mas marcado en los tres heroes (movil y escritorio); frosted de las ilustraciones mas amplio hacia el centro (34 -> 66 px, caida suave) con leve efecto lupa (clon ampliado ~8 px en el borde) en sueltas, bloques, Atalayas y mockups. Base v71. RESPALDO v71: 6abc810d88f7adbf4da9fe71_st-pages-v71.js
// v71 (29 sep 2026, pedidos de Tono): (1) frosted en el contorno de los bloques con ilustracion [data-cy-vid], solo en los lados de la imagen que tocan el contorno exterior del bloque (juntas de tira y lados interiores nitidos); (2) el carrusel del Blog movil vuelve a la tira unida con juntas y rombos (se retiran las excepciones de v68, se conserva el filo nocturno). Base v70b (Atalayas). RESPALDO v69: 6abc388a7347910da7a13419_st-pages-v69.js
// v70 (29 sep 2026, RECEPCION18-CIERRE issue A; v70b: la lente de las Atalayas sigue el fundido de entrada de la imagen, sin anillo fantasma, y el marco solo se toca tras los filtros; contorno frosted de las Atalayas del capitulo II de Como funciona, dia y noche, escritorio y movil): las Atalayas no tenian lente. La seleccion de v63-v69 exige clase o seccion de la lista y border-radius de la img distinto de 0px, y la img de las Atalayas no tiene clase ni radio (el radio de 18 px en escritorio y 16 px en movil lo da el marco .st-i-49476a32 / .st-i-df1b52a2, overflow hidden), asi que quedaban con el canto duro. Se anaden a la seleccion ([data-screen-label^="Capitulo II,"] img[src*="watchtowers"]) con el mismo tratamiento v67 (feGaussianBlur 5 duplicate, mascara de 34 px, filo de 0,5 px). lenteMarco() toma el radio visible del marco y lo hace posicionado para que la lente viva dentro del revelado (su offsetParent era la columna entera, fuera de data-st-rev); esa lente ocupa el marco al 100 % (sin redondeo de offsetWidth ni correccion por centros). Su clon es un div con background-image = currentSrc de la imagen ya cargada (cover + object-position): un <img> clon lo reescribe cy-arte28 (srcset de familia) y en WebKit pedia w3300, adelantaba la carga diferida o mostraba otra variante que la imagen. Se actualiza en cada load de la imagen (gemela de tema) y con un seguimiento acotado (400 ms, 30 s) por si WebKit la completa sin load. Resto de lentes sin cambio. RESPALDO v69: 6abc388a7347910da7a13419_st-pages-v69.js
// v67 (29 sep 2026, RELEVO-BORDE-MENU-29SEP P1 + RELEVO-AJUSTES-ARTE-CONTORNO P3: difuminado 26 -> 34 px, misma curva y misma intensidad): frosted maximo en el extremo y transicion continua hasta transparencia total al centro. El desenfoque pasa a feGaussianBlur stdDeviation 5 con edgeMode duplicate (el blur CSS dejaba el borde de la copia semitransparente y asomaba un filo nitido: la junta que se veia), y la mascara es una curva suave de 10 paradas en 26 px. Filo de 0,5 px casi invisible. Mismo tratamiento en capitulos III-V (filtro dentro de cada shadow). Colocacion v65 intacta. RESPALDO v66: 6abbc0dfcb49af898e55af7c_st-pages-v66.js
// v66 (29 sep 2026, RELEVO-FROSTED-SUAVE): la lente deja de ser lupa: sin ampliacion ni anillo con salto; la copia de la imagen va a escala 1 con blur(2px) muy suave y una mascara de degradado de 14 px que se desvanece hacia el centro (borde frosted difuminado, centro nitido, sin linea interior ni franja). Mismo tratamiento en las ilustraciones de los capitulos III, IV y V de Como funciona (div.art dentro del shadow de cysure-mockup, por un div.cy-frost-art hijo de .art con background:inherit (WebKit no aplica filter:url() a ::after dentro de shadow)). Colocacion v65 intacta. Fallback sin mask-image: solo el filo. RESPALDO v65: 6abb931d0fda7fed4825dba3_st-pages-v65.js
// v65 (29 sep 2026, RELEVO-NOS-PALETA-LENTE P2): la lente se recoloca sobre su imagen por diferencia de centros en pantalla. En v63/v64 se fijaba una vez con im.offsetLeft/Top; cuando el revelado por scroll quitaba el transform de la rejilla que la contiene, el bloque contenedor de la lente pasaba a otro ancestro y la lente caia 18-32 px a la izquierda y 148-913 px arriba, sobre texto (Nosotros, Home Actos II/VIII, CF Contacto). Se recomprueba con ResizeObserver, load, transitionend/animationend y scroll (un rAF). Lupa v64 intacta. RESPALDO v64: 6abb8cf533983b0338709302_st-pages-v64.js
// v64 (29 sep 2026, RELEVO-NOS-PALETA-LENTE P2): la lente de las ilustraciones sueltas pasa de solo desenfoque a lupa real: dentro del anillo de 7 px va una copia de la misma imagen (currentSrc, object-fit y object-position) ampliada desde el centro para desplazar 4 px la imagen en el borde; el centro sigue siendo la imagen original nitida. Mismo marco, mismos radios, sin sombra. Fallback: sin mask-composite o sin currentSrc queda solo el filo transparente de 0,5 px. RESPALDO v63: 6abb7b2baceb480006892bc8_st-pages-v63.js
// v63 (29 sep 2026, RELEVO-FOTOS-MOBILE P2/P5): P5 los carruseles moviles vuelven al tratamiento v61 (filo y modulacion en las tarjetas; sin el marco [data-cy-marco] de v62, que dejaba un panel redondeado detras de las tarjetas al llegar al final); P2 anillo de lente de vidrio sobre el perimetro de las ilustraciones de contenido sueltas. P06/P09/P17 de v62 intactos. RESPALDO v62: 6abb450c0112340ac2f498a7_st-pages-v62.js
// v62 (29 sep 2026, RELEVO-CIERRE-NOCTURNO-29SEP): P09 modulacion uniforme del vidrio (sin parche de luz en esquina: degradado vertical suave), P10 carrusel movil con el vidrio en el borde del bloque exterior completo (marco [data-cy-marco] fijo sobre la tira; las tarjetas conservan su relleno sin modulacion ni filo propios) y P06 ultimo bloque de La ruta de noche en azul claro rgba(201,211,255,.97) en lugar de blanco y P17 bandas de constelaciones con el color local del divisor de tag (dia #29487B, noche #9FB0FF; antes royal). RESPALDO v61: 6abae57b00b26b90a08a91e6_st-pages-v61.js
// v61 (28 sep 2026, RELEVO-SUPERFICIE-VIDRIO-FINAL): vidrio esmerilado en toda la superficie (translucidez, desenfoque y modulacion difusa), filo menos iluminado, superficies sueltas (Acto III, Industrias, FAQ, formularios, riai, fundadores) y sin material anidado. Respaldo: st-pages-v60.js.
// v60 (28 sep 2026, RELEVO-VIDRIO-BORDES-Y-CONTROLES): mateBloques() sin sombra proyectada; vidrio por curvatura mate interior del perimetro exterior de cada grupo; todos los bloques de contenido incluidos; esquinasBlq mide las portadas por su caja de maqueta (offset*), no por getBoundingClientRect, que el revelado escala a 0,965. Respaldo: st-pages-v59.js.
// v59 (28 sep 2026, RELEVO-FEEDBACK-VISUAL-TOGGLES-ARTE): mateBloques() reescrita: relleno propio 100 %, profundidad mate solo en el perimetro del bloque, --cy-serif por seccion para los controles; rombos de Acto II como v58. Respaldo: st-pages-v58.js.
// v58 (28 sep 2026, bloques-vidrio RELEVO-INTEGRACION-APROBADA, VoBo de Tono): dos cambios sobre v57, en una pasada nueva mateBloques() que corre al final de cada pasada de bloques (pasadaBloques) y escribe con bqGuarda, asi que bqRestaura la deshace y rehace en cada cambio de tema igual que el resto del motor. 1) Vidrio mate en los bloques de contenido [data-st-blq]/[data-st-blqx]: cada tarjeta conserva SU relleno (el que ya tenia: hoja o pintado del motor) a 94 % de opacidad con backdrop-filter blur(30px) saturate(1.03), sin reflejos ni brillos; donde la linea era el fondo del contenedor (escritorio, gap 1 px) el contenedor pasa a transparente y cada tarjeta dibuja la misma linea con box-shadow 0 0 0 1px del mismo color, para que el fondo del contenedor no tina la tarjeta. Contorno, radios, rombos (solo en juntas) y grosor de 1 px sin cambio. Excluidos: bloques con imagenes, mockups o cristal propio (img/picture/video/canvas/cysure-mockup/[data-cy-glass]/mockup de agentes), nav, hero, formularios, bandas y pie. Sin backdrop-filter o con prefers-reduced-transparency no se aplica nada (respaldo opaco = v57). 2) Home, Acto II: los rombos de junta toman el color efectivo computado de la palabra serif del acto (em.cy-dser[data-st-invert]) por tema; se lee solo con colores fiables y sin transicion viva (la re-medida tras la fundida lo fija). Otros rombos, sin cambio. Respaldo: st-pages-v57.js.
// v57 CANDIDATO (20 sep 2026, Cards · render-carga): un solo cambio sobre v56, en rombosCarrusel(): el relleno vertical minimo del contenedor de scroll pasa de ceil(nodo*raiz2/2) a ceil(nodo*raiz2/2 + 1.5) para que el vertice superior e inferior de cada rombo de junta quede a >= 1 px CSS del borde de recorte (overflow-y:hidden) en vez de 0,14-0,79 px. Rombo, centrado en la linea de borde de la tarjeta, colores y radios sin cambio; el carrusel movil crece 2 px de alto (1 arriba, 1 abajo). Mejora de margen geometrico comprobable: NO explica ticks/tags/botones ni es causa comprobada del recorte en iPhone.
// v56 (18 sep 2026, integracion Max; FEEDBACK-LP-TONO-18SEP-SEGUNDA punto 1, CASO-ROMBOS-TAGS-18SEP): tres causas acreditadas del "rombos/tags intermitentes" al cambiar tema, corregidas en origen. (a) rombosCarrusel() ya no borra y recrea todos los rombos de junta en cada pasada: reutiliza los nodos existentes por contenedor (actualiza left/top, crea los que faltan, quita los que sobran), asi conservan la pintura en linea de pintaContenedor y siguen la misma fundida que las tarjetas (antes la segunda llamada de bloquesNoche los recreaba sin color: cambiaban por hoja a t=0 mientras las tarjetas cambiaban en linea 60-400 ms despues). (b) bloquesRapida() sin cache del tema destino (primer cambio a ese tema en la carga) no reproducia las lineas de carrusel: hasta la remedida (1-6 s, con transiciones vivas) el carrusel volvia al gap y al borde de hoja (fondo LN entre tarjetas en los bloques pintados; en Home el carrusel de publicaciones cambiaba 1 px de alto/gap con los rombos anclados a la geometria anterior, 1-3 px fuera de la linea); ahora replica lineasEscribe con la geometria cacheada (cand.lin) y LN por seccion. (c) La pasada rapida tras el cambio de tema corre en el mismo tick que el atributo (MutationObserver, antes del siguiente frame) cuando ya hay cache; el retardo de 60 ms dejaba un frame con los elementos por hoja (rombos, ticks, tags) ya en el tema nuevo y las tarjetas en el viejo, y el bloqueo de render posterior alargaba ese frame 250-470 ms. Sin cache se mantiene el paso a 60 ms. Sin mas cambios.
// v55 (17 sep 2026, integracion Max; ola visual 16 sep P2/P3/P9/P10 + AUDIT-B H2): (a) rombosCarrusel(): el relleno vertical minimo del contenedor pasa de ceil(nodo/2)+1 = 6 a ceil(nodo*raiz2/2) = 7 (media diagonal del rombo rotado), asi el vertice ya no se recorta 0,36/0,47 px; el CSS del core (6 px) queda por debajo y se impone en linea como antes. (b) El bloque CSS 9.62b/9.62d/9.62e (splash en Space Grotesk, indicador de biografia de 28 px, CTA del menu abierto en noche) sale del pie del sitio y se inyecta aqui al final del body (misma posicion que tenia en el pie; <style id="st-pages-v56-ola16sep">, distinto del id cy-ola-visual-16sep que conserva 9.62a en el pie) para que el pie quede sin CSS nuevo. 9.62a sigue en el pie (unico consumidor: flota movil) y 9.62c (hero) NO se publica (contraste 1,95-4,46, decision de Tono pendiente). RESPALDO v54: .../6aa7728cd3c3e4d661e47171_st-pages-v54.js
/* Cysure st-pages v69 (29 sep 2026): v68 + borde frosted suave en la ilustracion del capitulo VI de Como funciona (mismo tratamiento que III-V, solo la capa .art; el .glass de los mini-bloques no se toca). RESPALDO v68: 6abc2c3db70082e6632d18bd_st-pages-v68.js */
/* Cysure st-pages v68 (29 sep 2026): v67 + carrusel del Blog movil con tarjetas sueltas (radio completo por tarjeta, hueco 12 px, sin juntas ni rombos). */
/* st-pages v52 (13 sep 2026, PF-03b): dos aplazamientos mientras html lleve .cy-theme-anim (fundida de tema de cy-dither): (a) progreso() via
// v54 (14 sep 2026, RV-8; ajuste reversible autorizado por Astra): el autoplay del carrusel de AGENTES (data-st-carr="flota") pasa de 5 s a 8 s por tarjeta (4,2 s de UI + fundido + ~3 s de arte de st-mockups-auto v2), se PAUSA mientras hay interaccion (pointer/touch sobre una tarjeta, arrastre, foco de teclado dentro) y se reanuda al soltar/salir (3,6 s de gracia), y se apaga si prefers-reduced-motion cambia a reduce (con reduce desde la carga ya no habia autoplay). Los demas carruseles (coberturas, riesgos, pubs) siguen exactamente como en v53. Ver initCarruseles(). RESPALDO v53: .../6aa735f8fe3b742a26041d4a_st-pages-v53.js
// v53 (13 sep 2026): bloquesNoche() no pinta las tarjetas con material de cristal ([data-cy-glass="sobrio"]); ver comentario en el paso 2. RESPALDO v52: .../6aa6a08912ec5dee93e83278_st-pages-v52.js
   ResizeObserver/rAF (leia scrollHeight en plena fundida: 900 ms a CPU x4 en la LP 1440) y (b) run() (el arranque diferido de 4.200 ms y late():
   desplazate() lee getComputedStyle: 200-880 ms en la fundida). Ambos se reintentan cada 200 ms hasta que la clase desaparece y esperan 250 ms mas (las transiciones creadas sobreviven a la clase). Resto identico a v51. */
/* st-pages v51 (13 sep 2026, PF-03 de Fable pub17: cambio de tema en /como-funciona 3,8-4,5 s de tareas largas). Cuatro cambios, todos
   en el camino del cambio de tema: (a) arbolMovil() ya no lee window.innerWidth en cada llamada (con viewport movil esa lectura fuerza
   un layout completo: 7 forzados = 0,9 s a CPU x4); la cache se invalida en resize. (b) marcaBloques() no reescribe data-st-blqx en
   contenedores que ya lo llevan (cada reescritura invalidaba estilo y el getComputedStyle siguiente forzaba un recalculo en plena fundida).
   (c) La pasada RAPIDA (60 ms tras el cambio) ya no lee el DOM: reproduce las lecturas de la ultima pasada completa (por tema) o, si ese
   tema aun no se midio, pinta solo contenedores y tarjetas con los veredictos cacheados; descendientes y textos los pinta la pasada
   completa, como hasta ahora. (d) La pasada completa tras la fundida espera ademas a que no quede ninguna CSSTransition viva
   (quitar .cy-theme-anim no las cancela y arrancan tarde): medida en plena fundida costaba 2,9 s y se repetia (bqPendiente); fuera,
   0,45 s. Resultado final identico (mismos elementos, mismos colores). Respaldo: st-pages-v50.js. */
/* st-pages v50 (13 sep 2026, O-1 de Fable pub15): aria-current del CTA de la nav por ruta normalizada en ES y EN. v49: el enlace de seccion queda actual tambien en sus rutas hijas (/blog/<slug> -> Blog). Sin otros cambios sobre v48. */
/* st-pages v48 (12 sep 2026, noche; A-05 landmark-unique de QA32): regiones() nombra cada carrusel por el titulo mas cercano que lo
   precede y anade un ordinal si el nombre se repite en la pagina (Home movil: c3 y c4 se llamaban igual). Resto identico a v47. */
/* st-pages v43 (12 sep 2026): v42 + corte de arboles 680 -> 992. Las tres comprobaciones `innerWidth <= 680` /
   `> 680` (carruseles como bloque, rombos y lineas de carrusel del arbol movil) pasan a arbolMovil(), que mira si
   .st-mb esta visible: asi el guion sigue al corte real del CSS (hoy 991 por st-corte992-core-v1.css) sin numero
   propio. Respaldo: st-pages-v42.js (parpadeo) y st-pages-v41.js. */
/* st-pages v42 (12 sep 2026): v41 + arreglo de raiz del PARPADEO / capitulos invertidos al cambiar de tema. Ver el bloque
   "v42" en seccionOscura y en mountBloques: el veredicto de seccion invertida ya no se mide durante la fundida de tema ni
   con la pestana oculta (colores congelados); se re-mide cuando la fundida termina y la pestana es visible, y al volver
   a ser visible. Aprobado por Tono el 11 sep ("arregla el parpadeo"); solo staging. Respaldo: st-pages-v41.js. */
/* st-pages v40 (6 sep 2026): v39 con el CTA inyectado en las publicaciones renombrado de "Lee la carta" a "Lee nuestra tesis" / "Read our thesis", para que cuadre con el renombre de la LP a Nuestra Tesis. */
/* st-pages v39 (5 sep 2026): AUTOPLAY DE CARRUSELES MOVILES. Tono: "no veo la regla en donde al pasar por un carrusel a los
   5 segundos se mueva al siguiente bloque automaticamente". El autoplay existia desde v25 pero se apagaba solo. Cuatro
   reglas existentes tocadas, todas en initCarruseles/slideTo: (1) la pasada unica de v27 se retira -al llegar al final
   vuelve al principio-; (2) el scroll que provoca el propio avance ya no se confunde con un gesto de la persona
   (slideTo marca sc._prog y el listener de scroll ya no empuja _pausa durante ese tramo); (3) el umbral del
   IntersectionObserver baja de 0.4 fijo a 0.35 de ratio o 220 px a la vista, para carruseles mas altos que la pantalla;
   (4) el guard carrDone pasa a ser por elemento (sc.__stCarr) para que los carruseles que reciben data-st-carr en la
   pasada tardia de autoDots tambien tengan autoplay. Se anade parada por foco de teclado (focusin). */
/* st-pages v35 (5 sep 2026): v34 + Acto V del Home (sx1/sx2) fuera de pintaTarjeta para que la hoja del Home invierta la progresion en noche.
/* st-pages v34 (5 sep 2026): v33 + Q14 (el guard [data-st-form] excluia el formulario real de Agenda: ahora solo se salta si ademas no hay .w-form) + Q07 tablet 681-1060 (chips del nav a 44 px de ancho, grupos Tema/Idioma y CTA con area de 44 px) + enlace de regreso del post con area de 44 px.
   st-pages v33 (5 sep 2026, lote A): ver el bloque "===== v33" al final (Q03, Q18, Q14, Q11, Q24, N10, N11, N14, Q06 mecanismo) y las reglas
   existentes tocadas, declaradas en su sitio: T8 (bloquesNoche/pintaTarjeta/rombosCarrusel/lineasCarrusel/esquinasBlq por fases de lectura y
   escritura; mountBloques/mountAutoDots/mountEsquinas idempotentes; 2 pasadas por cambio de tema), Q18 (slideTo expuesto), N04 (dpr 2 en
   mountBandas/mountCielo), Q12/N11 (etiquetas del cielo medidas, ancladas, sin pisar el rotulo HTML y en ES/EN). */
/* st-pages v31 (4 sep 2026): carruseles moviles tratados como bloque en todas las paginas (paleta, lineas y esquinas homologadas); esquinas de carrusel fijas (primera curva izq., ultima curva der.); lineas = bordes de tarjeta (gap 0, contenedor transparente); noche linea = color del rombo; rombos JS centrados y nunca en flujo; autoplay de una pasada; ctaTesis "Lee nuestra tesis". */
/* st-pages.js v47 (12 sep 2026, QA32 de Fable, axe serious): A-02 regiones() da foco de teclado, role=region y aria-label a los
   scrollers del arbol movil ([data-st-carr] con desplazamiento real y .st-bio de las fichas del equipo, que hace scroll cuando
   la bio no cabe); A-03 desplazate() ya no hace enfocable el cue "Desplazate" cuando su envoltorio lleva aria-hidden=true
   (tabindex=-1, sin role/aria-label; el click/tap sigue); F-6 (QA31) mousedown.preventDefault en .st-bio para que el tap de
   cierre no la deje enfocada; A-01 (dianas 24x24 de los puntos) va en CSS, pie del sitio 9.31.
   Respaldo: st-pages-v46.js. */
/* st-pages.js v46 (12 sep 2026: altLocal() honra window.CY_ALT_EN, alts EN corregidos por clave de arte; ver cy-alt-es v2) — v45 (12 sep 2026, orden de Toño: articulos en /blog/<slug> en vez de /recursos/<slug>; 'Sigue leyendo' enlaza a /blog/, norm() alias /recursos -> /blog tambien con slug; sin otros cambios sobre v44) — v36 (Toño, 5 sep: mockups de agentes en noche como módulo de plataforma: header negro #000000, filas #0E1936, líneas #26397A; título de tarjeta centrado con el icono) — v17 (las imágenes dentro de la tarjeta heredan el radio en las esquinas que tocan; esquinas de tarjetas siguen la curva del contenedor en cualquier rejilla; referencia exacta del Acto II desktop en día: tarjeta #0C1D4B, línea/contenedor #26397A, rombo borde #8FA3FF, texto #EDF1FF/#93A0C2; referencia fija: tarjetas del Acto II en light = #0E1936 sobre línea #2B2E32, texto #E8ECF8/#A9B2C8; las secciones invertidas de fondo claro, p.ej. Acto II en noche, se dejan como están; indicadores automáticos para cualquier bloque que se corte en pantalla; contenedores blq claros → línea oscura; alfa<0.5 se ignora; valores literales del root para no heredar variables locales de tarjeta; bloques uniformes en noche; sin etiquetas; polvo dinámico restaurado; bandas: constelaciones de la Odisea con nombre, sin polvo estático; locales /en + marca de pagina actual) — runtime de páginas Stealth portado del dc-script.
   Cargar en el footer DESPUÉS de cy-arte-map, cy-dither-ui, pubs-stealth y stealth-webflow. */
(function () {
  'use strict';
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* v43 (12 sep 2026): el corte de arboles ya no es un numero fijo (era 680; ahora la hoja st-corte992 muestra .st-mb
     hasta 991). Se pregunta al DOM que arbol esta visible en vez de comparar innerWidth con una cota. */
  /* v44: memorizado por fotograma. Cada llamada leia offsetParent tras las escrituras en linea de la pasada anterior
     y forzaba un layout completo (medido: 3 layouts, 0,9 s a CPU x4 por cambio de tema en Inicio movil). El valor
     solo puede cambiar con el ancho de la ventana, y las pasadas de resize ya se disparan aparte. */
  /* v51 (PF-03): window.innerWidth con viewport movil (Chromium con viewport meta, Android) fuerza un layout completo en cada
     lectura, asi que la memoria por ancho seguia costando 7 layouts por cambio de tema. Ahora la cache se invalida en resize
     (listener registrado antes que los demas de este guion) y la funcion no lee nada mientras no haya resize. */
  var amCache = null;
  window.addEventListener('resize', function () { amCache = null; }, { passive: true });
  function arbolMovil() {
    if (amCache !== null) return amCache;
    var m = document.querySelector('.st-mb'); amCache = !!(m && m.offsetParent !== null);
    return amCache;
  }
  var A = window.CY_ARTE || {};

  /* ---------- idioma ---------- */
  /* v4: el idioma lo define el LOCALE de la URL (/en/... = ingles). */
  function langActual() {
    var p = location.pathname;
    return (p === '/en' || p.indexOf('/en/') === 0) ? 'en' : 'es';
  }
  function aplicaLang(l) {
    document.querySelectorAll('[data-cy-lang]').forEach(function (c) { c.setAttribute('data-cy-lang', l); });
    document.querySelectorAll('[data-ph-en]').forEach(function (el) {
      el.setAttribute('placeholder', el.getAttribute(l === 'es' ? 'data-ph-es' : 'data-ph-en') || '');
    });
    document.documentElement.removeAttribute('data-cy-lang-boot');
    pubAttrs();
    if (window.STEALTH) { requestAnimationFrame(function () { STEALTH.rampas(); }); setTimeout(function () { STEALTH.rampas(); }, 140); }
  }
  function setLang(l) {
    try { localStorage.setItem('cy-lang', l); } catch (e) {}
    aplicaLang(l);
  }

  /* ---------- menú mobile ---------- */
  function menuDe(el) {
    var root = el.closest('.st-dt,.st-mb') || document;
    return root.querySelector('[data-st-menu-root]');
  }
  /* los formularios decorativos no se envían (fidelidad con el original) */
  document.addEventListener('submit', function (e) {
    if (e.target && e.target.closest && e.target.closest('[data-st-form]')) e.preventDefault();
  }, true);

  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var lb = e.target.closest('[data-lang-btn]');
    if (lb) {
      var want = lb.getAttribute('data-lang-btn');
      try { localStorage.setItem('cy-lang', want); localStorage.setItem('cy-user-lang', '1'); } catch (err) {}
      if (want !== langActual()) {
        e.preventDefault();
        var pth = location.pathname;
        var dest = want === 'en' ? ('/en' + (pth === '/' ? '' : pth)) : (pth.replace(/^\/en(?=\/|$)/, '') || '/');
        location.href = dest + location.search + location.hash;
        return;
      }
      setLang(want); return;
    }
    var tb = e.target.closest('[data-cy-tema]');
    if (tb) return; /* lo maneja cy-dither-ui */
    var burger = e.target.closest('[data-st-burger]');
    if (burger) {
      var menu = menuDe(burger);
      if (menu) {
        var abierto = menu.style.display !== 'none';
        menu.style.display = abierto ? 'none' : 'flex';
        burger.setAttribute('aria-expanded', abierto ? 'false' : 'true');
      }
      return;
    }
    var mlink = e.target.closest('[data-st-menu-root] a');
    if (mlink) {
      var m2 = e.target.closest('[data-st-menu-root]');
      if (m2) m2.style.display = 'none';
      var b2 = document.querySelector('[data-st-burger]');
      if (b2) b2.setAttribute('aria-expanded', 'false');
      return;
    }
    var pb = e.target.closest('[data-st-pub]');
    if (pb) { pubStep(pb.getAttribute('data-st-pub') === 'next' ? 1 : -1); return; }
  });

  /* ---------- carruseles mobile (con autoplay) ---------- */
  var carrDone = false;
  function slidesOf(sc) { return Array.prototype.filter.call(sc.children, function (k) { return !k.classList.contains('st-n'); }); }
  function indiceActual(sc) {
    var r = sc.getBoundingClientRect();
    var c = r.left + r.width / 2, cur = 0, bd = 1e9;
    slidesOf(sc).forEach(function (k, i) {
      var kr = k.getBoundingClientRect();
      var dd = Math.abs(kr.left + kr.width / 2 - c);
      if (dd < bd) { bd = dd; cur = i; }
    });
    return cur;
  }
  function slideTo(sc, i) {
    var kids = slidesOf(sc); /* v25: los rombos (st-n) no son slides: el autoplay se volvia infinito */
    if (!kids.length) return false;
    var k = kids[Math.max(0, Math.min(kids.length - 1, i))];
    var max = sc.scrollWidth - sc.clientWidth;
    var to = Math.max(0, Math.min(max, k.offsetLeft - sc.offsetLeft - (sc.clientWidth - k.offsetWidth) / 2));
    var from = sc.scrollLeft;
    if (Math.abs(to - from) < 1) return false; /* v39: avisa de que no se movio (destino ya alcanzado) */
    if (sc._raf) cancelAnimationFrame(sc._raf);
    var prevSnap = sc.style.scrollSnapType;
    sc.style.scrollSnapType = 'none';
    var dur = RM ? 0 : 320, t0 = performance.now();
    /* v39 (regla existente tocada): mientras dura el tramo -y 900 ms mas, lo que tarda el scroll-snap y la inercia
       en asentarse al devolver scrollSnapType- los eventos 'scroll' que genere este desplazamiento son NUESTROS.
       Antes el listener de scroll no distinguia y cada avance del autoplay se auto-castigaba con _pausa. */
    sc._prog = performance.now() + dur + 900;
    var step = function (now) {
      var p = dur ? Math.min(1, (now - t0) / dur) : 1;
      sc.scrollLeft = from + (to - from) * (1 - Math.pow(1 - p, 3));
      sc._prog = now + 900;
      if (p < 1) { sc._raf = requestAnimationFrame(step); }
      else { sc._raf = null; sc.style.scrollSnapType = prevSnap; }
    };
    sc._raf = requestAnimationFrame(step);
    return true;
  }
  /* v39: true si el scroll que se esta oyendo lo provoco slideTo (no la persona). */
  function esProgramado(sc) { return !!sc._prog && performance.now() < sc._prog; }
  window.__stSlideTo = slideTo; /* v33 Q18 (regla existente tocada, solo se expone): los puntos clicables del bloque v33 usan la misma animacion que el autoplay */
  function pubStep(dir) {
    var sc = document.querySelector('.st-mb [data-st-pubs]');
    if (!sc) return;
    sc._pausa = Date.now() + 9000;
    slideTo(sc, indiceActual(sc) + dir);
  }
  var upds = [];
  function initCarruseles() {
    /* v39 (regla existente tocada): antes un guard global (carrDone) hacia que esto corriera UNA sola vez, en la
       primera pasada de setup(); los carruseles que reciben data-st-carr mas tarde (autoDots, 900/2500 ms) se
       quedaban sin autoplay para siempre. Ahora el guard es por elemento y setup() puede volver a llamar. */
    document.querySelectorAll('.st-mb [data-st-carr],.st-mb [data-st-pubs]').forEach(function (sc) {
      if (sc.__stCarr) return;
      sc.__stCarr = 1;
      var key = sc.getAttribute('data-st-carr') || 'pubs';
      var rootv = sc.closest('.st-dt,.st-mb') || document;
      var row = rootv.querySelector('[data-st-dots="' + key + '"]');
      var ds = row ? Array.prototype.slice.call(row.querySelectorAll('[data-st-dot]')) : [];
      var upd = function () {
        var cur = indiceActual(sc);
        ds.forEach(function (el, i) { if (i === cur) el.setAttribute('data-on', ''); else el.removeAttribute('data-on'); });
      };
      var t = null;
      sc.addEventListener('scroll', function () {
        clearTimeout(t); t = setTimeout(upd, 60);
        /* v39 (regla existente tocada): el desplazamiento que provoca el propio autoplay ya no cuenta como
           interaccion. Antes cada avance se ponia _pausa = ahora + 3600 ms; con el tramo de 320 ms mas el
           asentamiento del scroll-snap, la pausa se solapaba con el tick de 5 s y el carrusel se saltaba
           avances (o se quedaba quieto del todo en cuanto el snap seguia emitiendo scroll). */
        if (esProgramado(sc)) return;
        sc._pausa = Date.now() + 3600;
      }, { passive: true });
      /* v27: si la persona toca el carrusel, el autoplay se apaga para ese carrusel (antes volvia a los 9 s) */
      var apaga = function () { sc._done = true; if (sc._timer) { clearInterval(sc._timer); sc._timer = null; } };
      /* v54 (14 sep 2026, RV-8): el carrusel de AGENTES ('flota') no se apaga con la interaccion: se PAUSA (sc._hold) mientras hay pointer/touch
         sobre el (tap, arrastre) o foco de teclado dentro, y se reanuda al soltar / al salir el foco con 3,6 s de gracia (sc._pausa, la misma marca
         que ya usa el scroll manual). Tick de 8 s (sc._tick) en vez de 5: 4,2 s de UI legible + fundido + ~3 s de arte de st-mockups-auto v2.
         st-flota-ctrl y el tap de v2 siguen pudiendo apagarlo del todo con apaga() (sc._done). Los demas carruseles: como en v53. */
      var v54 = key === 'flota';
      sc._tick = v54 ? 8000 : 5000;
      var tx0 = 0, ty0 = 0;
      if (v54) {
        var suelta = function () { if (!sc._hold) return; sc._hold = false; sc._pausa = Date.now() + 3600; };
        sc.addEventListener('pointerdown', function () { sc._hold = true; }, { passive: true });
        sc.addEventListener('pointerup', suelta, { passive: true });
        sc.addEventListener('pointercancel', suelta, { passive: true });
        sc.addEventListener('touchstart', function () { sc._hold = true; }, { passive: true });
        sc.addEventListener('touchend', suelta, { passive: true });
        sc.addEventListener('touchcancel', suelta, { passive: true });
        sc.addEventListener('focusin', function () { sc._hold = true; });
        sc.addEventListener('focusout', function (e) { if (!e.relatedTarget || !sc.contains(e.relatedTarget)) suelta(); });
        if (window.matchMedia) { var rmq = window.matchMedia('(prefers-reduced-motion: reduce)'); var rmOff = function () { if (rmq.matches) apaga(); }; if (rmq.addEventListener) rmq.addEventListener('change', rmOff); else if (rmq.addListener) rmq.addListener(rmOff); }
      } else {
      /* v37: solo un deslizamiento horizontal sobre el carrusel apaga el autoplay; el scroll vertical de la pagina con el dedo encima ya no lo mata */
      sc.addEventListener('touchstart', function (e) { var t = e.touches && e.touches[0]; if (t) { tx0 = t.clientX; ty0 = t.clientY; } }, { passive: true });
      sc.addEventListener('touchmove', function (e) { var t = e.touches && e.touches[0]; if (!t) return; var dx = Math.abs(t.clientX - tx0), dy = Math.abs(t.clientY - ty0); if (dx > 10 && dx > dy) apaga(); }, { passive: true });
      sc.addEventListener('pointerdown', function (e) { if (e.pointerType === 'mouse') apaga(); }, { passive: true });
      /* v39: el foco de teclado dentro del carrusel tambien lo detiene (quien tabula no quiere que la tarjeta se le escape). */
      sc.addEventListener('focusin', apaga);
      }
      upd();
      upds.push(upd);
      if (!RM && ('IntersectionObserver' in window)) {
        /* v39 (regla existente tocada): el umbral fijo de 0.4 dejaba sin autoplay a cualquier carrusel mas alto
           que 2.5 pantallas, porque su ratio nunca llega a 0.4. Ahora vale con 0.35 de ratio O con 220 px (o el
           30 % de la pantalla) de carrusel a la vista, lo que ocurra antes. */
        var aLaVista = function (e) {
          if (!e.isIntersecting) return false;
          if (e.intersectionRatio >= 0.35) return true;
          var h = e.intersectionRect ? e.intersectionRect.height : 0;
          return h >= Math.min(220, (window.innerHeight || 800) * 0.3);
        };
        new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            if (aLaVista(e)) {
              if (!sc._timer && !sc._done) sc._timer = setInterval(function () {
                if (document.hidden) return;
                if (sc._hold) return; /* v54: pausa mientras dura la interaccion o el foco (solo 'flota' la pone) */
                if (sc._pausa && Date.now() < sc._pausa) return;
                if (sc.scrollWidth <= sc.clientWidth + 4) return;
                var n = slidesOf(sc).length;
                if (n < 2) return;
                var cur = indiceActual(sc);
                /* v39 (regla existente tocada): Tono, 5 sep - "al pasar por un carrusel a los 5 segundos se mueve
                   al siguiente bloque automaticamente". Se retira la pasada unica de v27 (al llegar a la ultima
                   tarjeta marcaba _done y no volvia a moverse nunca): ahora al final vuelve al principio.
                   Tambien se cubre el caso de la ultima tarjeta que no se puede centrar (el destino queda
                   recortado por scrollWidth y slideTo no movia nada: el carrusel se quedaba clavado). */
                if (sc.scrollLeft >= sc.scrollWidth - sc.clientWidth - 2) { slideTo(sc, 0); return; }
                if (!slideTo(sc, cur + 1)) slideTo(sc, 0);
              }, sc._tick || 5000); /* v54: 8 s en 'flota', 5 s en el resto */
            } else if (sc._timer) { clearInterval(sc._timer); sc._timer = null; }
          });
        }, { threshold: [0, 0.15, 0.35, 0.6, 1] }).observe(sc);
      }
    });
    if (carrDone) return;
    carrDone = true;
    window.addEventListener('resize', function () { upds.forEach(function (f) { f(); }); }, { passive: true });
  }

  /* ---------- acto III desktop: cards de igual tamaño ---------- */
  function igualaCards3() {
    var cs = Array.prototype.filter.call(document.querySelectorAll('[data-st-card3]'), function (c) { return c.offsetParent !== null; });
    if (cs.length < 2) return;
    var col = cs[0].parentElement;
    var colW = col ? col.clientWidth - 2 : cs[0].offsetWidth;
    if (colW < 40) return;
    var avail = (window.innerHeight || 800) - 104;
    var mide = function (w) {
      cs.forEach(function (c) { c.style.setProperty('width', w + 'px', 'important'); c.style.setProperty('height', 'auto', 'important'); c.style.setProperty('min-height', '0', 'important'); });
      var n = 0;
      cs.forEach(function (c) { var st = c.querySelector('[data-st-strip]'); if (st) n = Math.max(n, st.offsetHeight); });
      return n;
    };
    /* RATIO es la proporcion de la caja de la ilustracion y el numero con el
       que se resuelve el ancho. Tienen que ser el MISMO numero: el ancho se
       despeja de la altura libre (avail - need) y la altura se recompone
       sumando la ilustracion. Si divergen, la card desborda su contenedor,
       que lleva overflow:hidden, y la ilustracion se corta por abajo.
       Estaba en 16/9 = 1.7778. Toño pidio que la ilustracion domine sobre el
       texto y gane ancho en pantallas chicas. Con 2.15 la caja es mas
       cinematografica: para la misma altura libre el ancho crece un 21%.
       La ilustracion es object-fit:cover, asi que recorta arriba y abajo en
       vez de encogerse. El mismo 2.15 va en la regla de aspect-ratio de
       .st-i-b84d4cee en el Footer del sitio; si cambias uno, cambia el otro. */
    var RATIO = 2.15;
    var w = colW, need = mide(w);
    for (var k = 0; k < 3; k++) {
      var w2 = Math.min(colW, Math.max(620, (avail - need) * RATIO));
      if (Math.abs(w2 - w) < 8) { w = w2; break; }
      w = w2; need = mide(w);
    }
    if (!need) return;
    var h = Math.round(need + w / RATIO);
    cs.forEach(function (c) {
      c.style.setProperty('width', Math.round(w) + 'px', 'important');
      c.style.setProperty('height', h + 'px', 'important');
      var st = c.querySelector('[data-st-strip]');
      if (st) st.style.setProperty('min-height', need + 'px', 'important');
    });
  }

  /* ---------- hero: parallax + enfoque de títulos de acto ---------- */
  var marOn = false, wipeIO = null, marRaf = 0;
  function mountMar() {
    if (!wipeIO && !RM && ('IntersectionObserver' in window)) {
      wipeIO = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.dataset.stWipe = 'on'; wipeIO.unobserve(x.target); } }); }, { threshold: 0.2 });
    }
    document.querySelectorAll('[data-screen-label^="Acto"] h2').forEach(function (h) {
      if (h.dataset.stWipe === 'on') return;
      h.removeAttribute('data-st-rev');
      if (RM || !wipeIO) { h.dataset.stWipe = 'on'; return; }
      var r = h.getBoundingClientRect();
      if (h.hasAttribute('data-cy-visto') || r.top < (window.innerHeight || 800) * 0.9) { h.dataset.stWipe = 'on'; }
      else { h.dataset.stWipe = 'off'; wipeIO.observe(h); }
    });
    if (marOn) return;
    marOn = true;
    var doc = document.documentElement;
    /* v74: parallax en el compositor. La ilustracion baja al 40 % (32 % en movil) del primer alto de ventana y crece hasta 1,09 (1,07),
       igual que v72, pero como animacion CSS ligada al scroll sobre las propiedades translate y scale: no pasa por el hilo principal,
       asi que va pegada al desplazamiento sin saltos (v72 escribia transform desde un rAF en cada scroll, con querySelectorAll y
       offsetParent por fotograma, y la imagen, sin capa propia, se repintaba al cambiar de escala). translate/scale son independientes
       de transform, asi que no chocan con la regla 9.75 del pie (transform:none!important en movil). La entrada de Home movil
       (cyHeroInImg, opacidad y escala 1,04 -> 1) se conserva como primera animacion y la del parallax se compone encima (add). */
    /* v75: sin scale (re-rasterizado por fotograma) y magnitud reducida a 18vh / 14vh; Home movil sin composicion add. */
    var PAR_CSS = !RM && !!(window.CSS && CSS.supports && CSS.supports('animation-timeline', 'scroll()') && CSS.supports('animation-range', '0px 100vh') && CSS.supports('translate', '0 1px'));
    if (PAR_CSS && !document.getElementById('cy-hero-par')) {
      var PK = 'html:root.cy-par body ', PT = 'animation-timeline:scroll(root block)!important;animation-range:0px 100vh!important;will-change:translate!important;';
      var pst = document.createElement('style'); pst.id = 'cy-hero-par';
      pst.textContent = '@keyframes cyHeroParD{from{translate:0 0}to{translate:0 18vh}}@keyframes cyHeroParM{from{translate:0 0}to{translate:0 14vh}}@keyframes cyHeroInOp{from{opacity:0}to{opacity:1}}@keyframes cyHeroInImg{from{opacity:0}to{opacity:1}}'
        + PK + '.st-dt [data-cy-lang] [data-st-hero] img{animation:cyHeroParD 1s linear both!important;' + PT + '}'
        + PK + '.st-mb [data-cy-lang] [data-st-hero] img{animation:cyHeroParM 1s linear both!important;' + PT + '}'
        + PK + '.st-mb [data-cy-lang] .st-i-692af1d3[data-st-hero]>img.st-i-d3fb8b19{animation-name:cyHeroInImg,cyHeroParM!important;animation-duration:.9s,1s!important;animation-timing-function:cubic-bezier(.22,.61,.36,1),linear!important;animation-delay:0s,0s!important;animation-iteration-count:1,1!important;animation-direction:normal,normal!important;animation-fill-mode:both,both!important;animation-play-state:running,running!important;animation-timeline:auto,scroll(root block)!important;animation-range:normal,0px 100vh!important;animation-composition:replace,replace!important;scale:none!important}'
        + 'html:root.cy-par[data-cy-splash-activo]:not([data-cy-splash-saliendo]) body .st-mb [data-cy-lang] .st-i-692af1d3[data-st-hero]>img.st-i-d3fb8b19{animation-play-state:paused,running!important}';
      (document.head || document.documentElement).appendChild(pst);
    }
    if (PAR_CSS) doc.classList.add('cy-par');
    /* v75: en el arbol movil, quita text-shadow de las transiciones de titulos y textos que se revelan (conserva el resto de propiedades,
       duraciones, retardos y curvas). text-shadow fuerza layout y repintado en cada fotograma de la transicion. */
    var partes = function (v) { var o = [], d = 0, c = ''; for (var i = 0; i < v.length; i++) { var ch = v[i]; if (ch === '(') d++; if (ch === ')') d--; if (ch === ',' && !d) { o.push(c.trim()); c = ''; } else c += ch; } if (c.trim()) o.push(c.trim()); return o; };
    var sinSombra = function () {
      var ns = document.querySelectorAll('.st-mb :is(h1,h2,h3,h4,p,span,div)[data-st-wipe], .st-mb :is(h1,h2,h3,h4,p,span,div)[data-st-rev]');
      for (var q = 0; q < ns.length; q++) {
        var e = ns[q]; if (e.__cyTs) continue; var c = getComputedStyle(e), pr = partes(c.transitionProperty); if (pr.indexOf('text-shadow') < 0) continue;
        var du = partes(c.transitionDuration), de = partes(c.transitionDelay), tf = partes(c.transitionTimingFunction), P = [], D = [], L = [], T = [];
        for (var k = 0; k < pr.length; k++) { if (pr[k] === 'text-shadow') continue; P.push(pr[k]); D.push(du[k % du.length]); L.push(de[k % de.length]); T.push(tf[k % tf.length]); }
        e.__cyTs = 1; e.style.setProperty('transition-property', P.join(','), 'important'); e.style.setProperty('transition-duration', D.join(','), 'important'); e.style.setProperty('transition-delay', L.join(','), 'important'); e.style.setProperty('transition-timing-function', T.join(','), 'important');
      }
    };
    sinSombra(); setTimeout(sinSombra, 1500); window.addEventListener('load', sinSombra);
    if (!document.getElementById('cy-titulos-v75')) { var tst = document.createElement('style'); tst.id = 'cy-titulos-v75';
      /* la transicion del enfoque de titulos de acto solo existe en data-st-wipe="on": mismos valores medidos (filter 1,15 s, transform 1,15 s, opacity 0,6 s, curva .2,.7,.2,1) sin text-shadow */
      tst.textContent = '@media (max-width:991px){html:not(#cy-t1):not(#cy-t2):not(#cy-t3) body .st-mb [data-cy-lang] :is(h1,h2,h3,h4)[data-st-wipe="on"]{transition-property:filter,transform,opacity!important;transition-duration:1.15s,1.15s,.6s!important;transition-delay:0s,0s,0s!important;transition-timing-function:cubic-bezier(.2,.7,.2,1)!important}}';
      (document.head || document.documentElement).appendChild(tst); }
    var parL = null, parN = 0;
    var parJs = function (y, vh2) {
      if (!parL || ++parN > 90) { parN = 0; parL = [].slice.call(document.querySelectorAll('[data-st-hero] img')).map(function (im) { var mb = !!im.closest('.st-mb'); im.style.setProperty('will-change', 'transform', 'important'); return { im: im, mb: mb }; }); }
      var k = Math.max(0, Math.min(1, y / vh2)), yy = Math.min(y, vh2);
      for (var q = 0; q < parL.length; q++) { var o = parL[q]; if (!o.im.isConnected) { parL = null; return; }
        o.im.style.setProperty('transform', 'translate3d(0,' + (yy * (o.mb ? 0.14 : 0.18)).toFixed(1) + 'px,0)', 'important'); } /* v75: sin escala */
    };
    window.addEventListener('resize', function () { parL = null; }, { passive: true });
    var tick = function () {
      marRaf = 0;
      var y = window.scrollY || doc.scrollTop || 0;
      var vh2 = window.innerHeight || 800;
      document.querySelectorAll('[data-st-wipe="off"]').forEach(function (h) { if (h.getBoundingClientRect().top < vh2 * 0.9) h.dataset.stWipe = 'on'; });
      if (!RM && !PAR_CSS) parJs(y, vh2); /* v74: sin soporte de animation-timeline, respaldo rAF */
    };
    var onMar = function () { if (!marRaf) marRaf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', onMar, { passive: true });
    window.addEventListener('resize', onMar, { passive: true });
    tick();
  }

  /* ---------- bandas de constelación ---------- */
  /* Constelaciones de la Odisea (coordenadas normalizadas en caja ar:1). b = estrella guía. */
  var ODY = [
    { n: 'LA NAVE DE ODISEO', en: 'THE SHIP OF ODYSSEUS', ar: 1.35, b: 5, p: [[.04,.72],[.27,.92],[.73,.92],[.96,.70],[.50,.92],[.50,.10],[.84,.36]], e: [[0,1],[1,4],[4,2],[2,3],[4,5],[5,6],[6,4]] },
    { n: 'EL ARCO DE ÍTACA', en: 'THE BOW OF ITHACA', ar: 1.25, b: 6, p: [[.22,.06],[.09,.30],[.06,.50],[.09,.70],[.22,.94],[.60,.50],[.96,.50],[.84,.40],[.84,.60]], e: [[0,1],[1,2],[2,3],[3,4],[0,4],[2,5],[5,6],[6,7],[6,8]] },
    { n: 'EL OJO DEL CÍCLOPE', en: 'THE CYCLOPS EYE', ar: 1.4, b: 6, p: [[.50,.06],[.88,.28],[.88,.72],[.50,.94],[.12,.72],[.12,.28],[.50,.50]], e: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[6,0]] },
    { n: 'EL FARO', en: 'THE LIGHTHOUSE', ar: 1.1, b: 4, p: [[.38,.96],[.62,.96],[.44,.30],[.56,.30],[.50,.14],[.12,.06],[.88,.06]], e: [[0,2],[2,3],[3,1],[2,4],[3,4],[4,5],[4,6]] },
    { n: 'ARGOS, EL GUARDIÁN', en: 'ARGOS, THE WATCHDOG', ar: 1.5, b: 4, p: [[.16,.58],[.42,.48],[.70,.54],[.86,.38],[.96,.26],[.24,.92],[.66,.92],[.04,.32]], e: [[7,0],[0,1],[1,2],[2,3],[3,4],[0,5],[2,6]] },
    { n: 'EL CABALLO', en: 'THE HORSE', ar: 1.3, b: 3, p: [[.10,.92],[.24,.46],[.44,.20],[.70,.14],[.92,.30],[.80,.50],[.56,.56],[.42,.92]], e: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { n: 'LA LIRA DE LAS SIRENAS', en: 'THE SIRENS LYRE', ar: 1.0, b: 0, p: [[.20,.08],[.14,.50],[.30,.88],[.70,.88],[.86,.50],[.80,.08],[.34,.32],[.66,.32]], e: [[0,1],[1,2],[2,3],[3,4],[4,5],[6,7]] },
    { n: 'EL TRIDENTE', en: 'THE TRIDENT', ar: 1.0, b: 6, p: [[.50,.96],[.50,.42],[.20,.42],[.20,.08],[.80,.42],[.80,.08],[.50,.04]], e: [[0,1],[1,2],[2,3],[1,4],[4,5],[1,6]] }
  ];

  /* ---------- v9: relleno uniforme de bloques en modo noche ---------- */
  /* Toño (2 sep): en dark mode todos los bloques deben tener el mismo relleno. Algunas tarjetas
     traen variantes "papel" (blanco, azul medio, casi negro) con colores de texto fijos. En noche se
     normalizan a --cy-card y el texto oscuro pasa a --cy-ink / --cy-mut; en día se restaura. */
  function lumRGB(c) {
    var m = /rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/.exec(c || '');
    if (!m) return null;
    if (m[4] !== undefined && parseFloat(m[4]) < 0.5) return null;
    return (0.2126 * m[1] + 0.7152 * m[2] + 0.0722 * m[3]) / 255;
  }
  var bqTocados = [];
  function bqGuarda(el, prop) {
    if (!el.__bq) el.__bq = {};
    if (!(prop in el.__bq)) { el.__bq[prop] = [el.style.getPropertyValue(prop), el.style.getPropertyPriority(prop)]; bqTocados.push(el); }
  }
  function bqRestaura() {
    bqTocados.forEach(function (el) {
      var o = el.__bq || {};
      Object.keys(o).forEach(function (p) { el.style.removeProperty(p); if (o[p][0]) el.style.setProperty(p, o[p][0], o[p][1]); });
      el.__bq = null;
    });
    bqTocados = [];
  }
  /* ---------- v19: bloques homologados por tema ----------
     Toño (2 sep): "todos los bloques, en dark mode, del mismo color (tarjeta #0C1D4B, línea #26397A, rombo #8FA3FF)";
     las bandas invertidas (oscuras en día: Acto II Home, Cap VI LP) llevan la MISMA referencia; las bandas "papel"
     (claras en noche: Acto II) llevan tarjetas blancas. La decisión se toma por la luminancia real de la sección, no
     por el tema, y se reaplica al cambiar de tema, al cargar y al volver con pageshow. */
  var PAL_D = { CARD: '#0C1D4B', LN: '#26397A', NODE: '#8FA3FF', INK: '#EDF1FF', MUT: '#93A0C2' }; /* v29 (Toño, 4 sep): en noche la linea lleva el color del rombo, como en dia */
  var PAL_L = { CARD: '#FFFFFF', LN: '#C4CFE4', NODE: '#3B5BFF' }; /* v38 (lote 5 sep, HOME-07): el rombo de una banda invertida a claro usa el azul de «alignment» --st-tag en su version de dia; antes copiaba la linea y quedaba invisible */
  /* tonos "UI oscura" heredados de las hojas (mockups de agentes, celdas) que deben fundirse con la tarjeta */
  var TONOS_CARD = { 'rgb(14, 25, 54)': 1, 'rgb(7, 11, 18)': 1, 'rgb(11, 16, 25)': 1, 'rgb(14, 17, 22)': 1, 'rgb(10, 31, 69)': 1 };
  var TONOS_LN = { 'rgb(43, 46, 50)': 1, 'rgb(38, 57, 122)': 1, 'rgb(41, 72, 123)': 1 };
  /* v36 (Toño, 5 sep): los mockups de UI de los agentes (Cómo funciona, Cap II) en noche se leen como un bloque del módulo
     de la plataforma: header negro, filas en el tono de tarjeta de la UI (#0E1936) y líneas del bloque; antes se fundían con la tarjeta. */
  var MOCK_SEL = '.st-i-0ec5a772', MOCK_HEAD = '.st-i-589588d6';
  var MOD = { HEAD: '#000000', ROW: '#0E1936', LN: '#26397A' };
  function marcaBloques() {
    var ns = document.querySelectorAll('.st-n');
    for (var i = 0; i < ns.length; i++) {
      var P = ns[i].parentElement;
      if (!P || P.hasAttribute('data-st-blq') || P.hasAttribute('data-st-blqx')) continue;
      var kids = [], nodos = [];
      for (var k = 0; k < P.children.length; k++) { (P.children[k].classList.contains('st-n') ? nodos : kids).push(P.children[k]); }
      var cp = getComputedStyle(P);
      if (kids.length >= 2 && /grid|flex/.test(cp.display) && parseFloat(cp.borderRadius) >= 10) { P.setAttribute('data-st-blqx', ''); continue; }
      if (kids.length === 1 && kids[0].children.length >= 2) {
        var C = kids[0], cc = getComputedStyle(C);
        if (C.hasAttribute('data-st-blq') || C.hasAttribute('data-st-blqx') || (/grid|flex/.test(cc.display) && parseFloat(cc.borderRadius) >= 10)) {
          if (!C.hasAttribute('data-st-blq') && !C.hasAttribute('data-st-blqx')) C.setAttribute('data-st-blqx', ''); /* v51: sin reescribir el atributo que ya lleva */
          C.__stNodos = nodos;
        }
      }
    }
    /* v31: los carruseles moviles ([data-st-carr]/[data-st-pubs] con 2+ tarjetas) se tratan como bloque aunque la hoja
       de la pagina no los marque (Como funciona): misma paleta, lineas y esquinas que en el Home. */
    if (arbolMovil()) {
      var cars = document.querySelectorAll('.st-mb [data-st-carr],.st-mb [data-st-pubs]');
      for (var ci = 0; ci < cars.length; ci++) {
        var B = cars[ci];
        if (B.hasAttribute('data-st-blq') || B.hasAttribute('data-st-blqx')) continue;
        var nk = 0;
        for (var q = 0; q < B.children.length; q++) { if (!B.children[q].classList.contains('st-n')) nk++; }
        if (nk >= 2) B.setAttribute('data-st-blqx', '');
      }
    }
  }
  /* v20: la bandera "sección invertida" se mide UNA vez con el tema de carga y se cachea. Al cambiar de tema el
     recoloreo de las secciones llega tarde (rampas/dither) y medir en ese momento invertía todo el sitio. */
  var temaBase = null;
  /* v42 (12 sep 2026): el veredicto "seccion invertida" NO se mide nunca con colores en transito. Antes se re-media al
     volver al tema de carga (temaBase === noche) en la pasada de 60 ms, a mitad de la fundida de .35 s de cy-dither-ui
     (.cy-theme-anim): el fondo iba por el 28 % y se leia "oscuro" en dia, asi que los ocho capitulos se pintaban al reves
     hasta la pasada de 620 ms (el parpadeo). Y si no se pintaban fotogramas (pestana oculta, ahorro de energia) la
     transicion quedaba congelada, la pasada tardia leia lo mismo y el veredicto invertido se quedaba en cache hasta
     recargar. Ahora: (a) con .cy-theme-anim puesta o con la pestana oculta tras un cambio de tema (bqCongelado) no se
     mide: se usa la cache y, si no la hay, se responde `noche` SIN cachear y se deja pendiente; (b) en cada cambio de
     tema la cache se re-mide (bqRemide) solo cuando la fundida termino y la pestana esta visible; (c) al volver a ser
     visible se repite esa re-medida. Las tablas TONOS_* siguen comparando cadenas exactas: ahora solo leen colores
     finales, que es lo que casan. */
  var bqRemide = false, bqCongelado = false, bqPendiente = false;
  /* v51 (PF-03): la re-medida tras el cambio de tema espera ademas a que no quede ninguna CSSTransition viva en el documento (las de
     la fundida arrancan en el primer fotograma tras la tarea larga del clic y siguen vivas cuando el temporizador de 550 ms ya quito
     la clase). SOLO se consulta en la puerta de remedida: document.getAnimations() fuerza un recalculo de estilo, asi que no puede
     llamarse dentro de una pasada (medido: 814 ms en plena fundida y un bucle de re-medidas cada 400 ms). */
  function hayTransiciones() {
    if (!document.getAnimations) return false;
    var as = document.getAnimations();
    for (var i = 0; i < as.length; i++) { var a = as[i]; if (a.transitionProperty !== undefined && a.playState !== 'finished') return true; }
    return false;
  }
  function coloresFiables() { return !document.documentElement.classList.contains('cy-theme-anim') && !bqCongelado; }
  /* v44: quitar .cy-theme-anim NO cancela las transiciones ya creadas (medido en Chromium: tras quitar la clase el
     fondo de la seccion sigue interpolando hasta cumplir sus 350 ms). Y las transiciones no arrancan al clic sino en
     el PRIMER fotograma que se pinta despues: si entre el clic y ese fotograma hay una tarea larga (la pasada de 60 ms,
     las rampas), arrancan tarde y siguen vivas cuando el temporizador de 550 ms ya quito la clase. Con eso la re-medida
     leia colores a medio camino y los ocho capitulos salian invertidos. Ahora, ademas de la clase, se mira si la
     propia seccion (o su primer hijo, que es lo que se lee) tiene alguna transicion viva: si la tiene, se aplaza. */
  function enTransito(el) {
    if (!el || !el.getAnimations) return false;
    var as = el.getAnimations();
    for (var i = 0; i < as.length; i++) { if (as[i].playState !== 'finished') return true; }
    return false;
  }
  function seccionOscura(el, noche) {
    var s = el.closest('[data-screen-label]') || el.closest('footer');
    if (!s) return noche;
    if (s.__stInv === undefined || bqRemide) {
      if (!coloresFiables() || enTransito(s) || enTransito(s.firstElementChild)) { bqPendiente = true; if (s.__stInv === undefined) return noche; }
      else {
        var L = lumRGB(getComputedStyle(s).backgroundColor);
        if (L === null && s.firstElementChild) L = lumRGB(getComputedStyle(s.firstElementChild).backgroundColor);
        var dark = (L === null) ? noche : L < 0.5;
        s.__stInv = (dark !== noche);
      }
    }
    return s.__stInv ? !noche : noche;
  }
  function esControl(t) { return /^(IMG|SVG|CANVAS|VIDEO|BUTTON|A|INPUT|TEXTAREA|SELECT|LABEL)$/.test(t.tagName) || t.classList.contains('st-n') || t.hasAttribute('data-st-hero'); }
  /* v33 T8 (regla existente reescrita): pintaTarjeta se divide en leeTarjeta (solo lecturas: rects y estilos computados de los
     descendientes, decididos con los MISMOS filtros y umbrales de antes) y escribeTarjeta (solo escrituras). Antes cada descendiente
     se medía justo después de escribir el anterior, lo que forzaba un layout por descendiente (miles por pasada): el congelado de T8. */
  function leeTarjeta(el, P, enBlq, oscuro) {
    var job = { el: el, P: P, enBlq: enBlq, ds: [], tx: [] };
    if (!oscuro) return job;
    /* mockups y celdas heredadas dentro de la tarjeta: mismo tono que la tarjeta; sus líneas, color de línea */
    var ds = el.querySelectorAll('div, section, article, ul, li, table, thead, tbody, tr, td, th');
    for (var m = 0; m < ds.length; m++) {
      var q = ds[m];
      if (esControl(q) || q.closest('a,button,[data-st-hero]')) continue;
      if (q.closest('[data-cy-glass="sobrio"]')) continue; /* v53: el mockup de cristal (article .cxm y sus hijos) no recibe fondo ni borde inline */
      var r2 = q.getBoundingClientRect(); if (r2.width < 100 || r2.height < 18) continue;
      var mk = q.closest(MOCK_SEL);
      if (mk) {
        /* v36: raíz del mockup = línea (separa filas y contorno); header negro; filas en tono UI */
        if (q === mk) job.ds.push({ q: q, bg: MOD.LN, bd: MOD.LN });
        else if (q.parentElement === mk) job.ds.push({ q: q, bg: q.matches(MOCK_HEAD) ? MOD.HEAD : MOD.ROW, bd: null });
        continue;
      }
      var qs = getComputedStyle(q), bg = qs.backgroundColor, bd = qs.borderTopColor;
      var bgv = TONOS_CARD[bg] ? P.CARD : (TONOS_LN[bg] ? P.LN : null);
      var bdv = (TONOS_LN[bd] || TONOS_CARD[bd]) ? P.LN : null;
      if (bgv || bdv) job.ds.push({ q: q, bg: bgv, bd: bdv });
    }
    var tx = el.querySelectorAll('h1,h2,h3,h4,h5,p,span,strong,em,b,li,small,label,div');
    for (var k = 0; k < tx.length; k++) {
      var t = tx[k];
      if (t.closest('a,button')) continue;
      if (t.closest('[data-cy-glass="sobrio"]')) continue; /* v53: la tinta del mockup de cristal la fijan los tokens de cy-glass-sobrio */
      var hasText = false;
      for (var c = 0; c < t.childNodes.length; c++) { if (t.childNodes[c].nodeType === 3 && t.childNodes[c].textContent.trim()) { hasText = true; break; } }
      if (!hasText) continue;
      var col = getComputedStyle(t).color, lc = lumRGB(col);
      if (lc === null || lc > 0.45) continue;
      job.tx.push({ t: t, c: lc < 0.2 ? P.INK : P.MUT });
    }
    return job;
  }
  function escribeTarjeta(job) {
    var el = job.el, P = job.P;
    /* v35 (Toño, 5 sep): las tarjetas II y III del Acto V del Home invierten su progresion en noche desde la hoja del Home
       (#1B2A55 / #FFFFFF con texto oscuro); no se les impone el color inline de tarjeta ni el de sus textos. */
    if (el.matches && el.matches('.st-i-47b2561f.sx1,.st-i-47b2561f.sx2')) {
      ['background-color', 'background-image', 'border-color'].forEach(function (pr) { el.style.removeProperty(pr); });
      var txs = el.querySelectorAll('[style*="color"]'); for (var z = 0; z < txs.length; z++) txs[z].style.removeProperty('color');
      return;
    }
    bqGuarda(el, 'background-color'); bqGuarda(el, 'background-image'); bqGuarda(el, 'border-color');
    el.style.setProperty('background-color', P.CARD, 'important');
    el.style.setProperty('background-image', 'none', 'important');
    el.style.setProperty('border-color', (job.enBlq && !(el.parentElement && el.parentElement.hasAttribute('data-st-pubs') && arbolMovil())) ? 'transparent' : P.LN, 'important'); /* v68: las tarjetas sueltas del Blog movil conservan su filo */
    for (var m = 0; m < job.ds.length; m++) {
      var d = job.ds[m];
      if (d.bg) { bqGuarda(d.q, 'background-color'); d.q.style.setProperty('background-color', d.bg, 'important'); }
      if (d.bd) { bqGuarda(d.q, 'border-color'); d.q.style.setProperty('border-color', d.bd, 'important'); }
    }
    for (var k = 0; k < job.tx.length; k++) { bqGuarda(job.tx[k].t, 'color'); job.tx[k].t.style.setProperty('color', job.tx[k].c, 'important'); }
  }
  function pintaContenedor(el, P, tira) {
    /* v22 (Tono, 3 sep): en movil oscuro la linea del bloque (contorno y separacion entre tarjetas) lleva el color
       del rombo. El aire vertical de los carruseles lo quita el core, asi que pintar ya no deja franja azul. */
    var LN = P.LN; /* v25: misma linea en movil y desktop (Toño, 3 sep) */
    bqGuarda(el, 'background-color'); bqGuarda(el, 'border-color');
    el.style.setProperty('background-color', LN, 'important'); el.style.setProperty('border-color', LN, 'important');
    var nds = [].slice.call(el.querySelectorAll('.st-n')).concat(el.__stNodos || []);
    for (var q = 0; q < nds.length; q++) { bqGuarda(nds[q], 'background-color'); bqGuarda(nds[q], 'border-color'); nds[q].style.setProperty('background-color', P.CARD, 'important'); nds[q].style.setProperty('border-color', P.NODE, 'important'); }
  }
  /* v22: rombos divisores en las juntas de los carruseles moviles, para que el carrusel del blog (y el resto)
     se lea como un solo bloque. Van por dentro del borde (el contenedor hace scroll y recorta lo que sobresale). */
  function rombosQuita(b) { /* v56: retira los rombos de junta de un contenedor (o de todos si b es null) */
    var vieja = (b || document).querySelectorAll('.st-n[data-st-auton]');
    for (var v = 0; v < vieja.length; v++) vieja[v].parentNode && vieja[v].parentNode.removeChild(vieja[v]);
  }
  function rombosCarrusel() {
    if (!arbolMovil()) { rombosQuita(null); return; }
    var conts = document.querySelectorAll('.st-mb [data-st-blq],.st-mb [data-st-carr]');
    /* v33 T8 (regla existente reescrita por fases, mismas medidas): antes cada carrusel leia offsetLeft/offsetTop justo despues de
       escribir position/padding del anterior (un layout por carrusel); ahora 1) se decide todo, 2) se escriben position/padding de
       todos, 3) se miden todos (un layout) y 4) se insertan los rombos. */
    var jobs = [];
    var conJobs = []; /* v56: contenedores que conservan rombos; el resto los pierde al final */
    for (var i = 0; i < conts.length; i++) {
      var b = conts[i];
      if (b.offsetParent === null) continue;
      var cs = getComputedStyle(b);
      if (!/auto|scroll/.test(cs.overflowX)) continue;
      if (b.scrollWidth <= b.clientWidth + 4) continue;
      var gap = parseFloat(cs.columnGap || cs.gap) || 0;
      if (gap > 3) continue;
      var kids = [];
      for (var k = 0; k < b.children.length; k++) { var c = b.children[k]; if (!c.classList.contains('st-n')) kids.push(c); }
      if (kids.length < 2) continue;
      conJobs.push(b);
      /* v28: el rombo va centrado en la linea del borde y el scroll-container recorta en su padding-box:
         si el padding vertical no alcanza (p.ej. el carrusel de publicaciones del Home queda en 0), se impone en linea */
      var nodo = parseFloat(cs.getPropertyValue('--st-nodo')) || 9, need = Math.ceil(nodo * Math.SQRT2 / 2 + 1.5); /* v57 (20 sep, render-carga): margen real >= 1 px CSS al vertice en ambos extremos: media diagonal + 1 px de aire + 0,5 px por el redondeo entero de offsetHeight con que se coloca el rombo inferior (9 px: 7 -> 8; 11 px: 8 -> 10). Medido en REPRO-CARGA-NORMAL-20SEP §3.1: con 7 quedaban 0,64 arriba y 0,14-0,79 abajo. */ /* v55: el rombo va rotado 45 grados: media DIAGONAL (9 px -> 6,36 -> 7), no medio lado + 1 (6); con 6 el vertice se recortaba 0,36 px arriba y 0,47 abajo (AUDIT-B H2, 16 sep) */
      jobs.push({ b: b, kids: kids, gap: gap, rel: cs.position === 'static', pt: parseFloat(cs.paddingTop) < need, pb: parseFloat(cs.paddingBottom) < need, need: need });
    }
    for (var j1 = 0; j1 < jobs.length; j1++) {
      var J1 = jobs[j1];
      if (J1.rel) J1.b.style.setProperty('position', 'relative');
      if (J1.pt) J1.b.style.setProperty('padding-top', J1.need + 'px', 'important');
      if (J1.pb) J1.b.style.setProperty('padding-bottom', J1.need + 'px', 'important');
    }
    for (var j2 = 0; j2 < jobs.length; j2++) {
      var J2 = jobs[j2], k0 = J2.kids[0];
      /* v27: centrado en la linea del borde de la tarjeta (arriba y abajo), igual que en los bloques; el
         contenedor lleva padding vertical (core v40) para que el rombo no se recorte */
      J2.top0 = k0.offsetTop; J2.top1 = k0.offsetTop + k0.offsetHeight; J2.xs = [];
      for (var j = 1; j < J2.kids.length; j++) J2.xs.push(Math.round(J2.kids[j].offsetLeft - J2.gap / 2));
    }
    /* v56: se reutilizan los rombos existentes del contenedor (en orden), se crean los que faltan y se quitan los que sobran;
       los nodos reutilizados conservan la pintura en linea (background/border) de pintaContenedor */
    for (var j3 = 0; j3 < jobs.length; j3++) {
      var J3 = jobs[j3], hay = J3.b.querySelectorAll(':scope > .st-n[data-st-auton]'), idx = 0;
      for (var q = 0; q < J3.xs.length; q++) {
        for (var p = 0; p < 2; p++) {
          var n = hay[idx++];
          if (!n) {
            n = document.createElement('i');
            n.className = 'st-n';
            n.setAttribute('data-st-auton', '');
            n.setAttribute('aria-hidden', 'true');
            J3.b.appendChild(n);
          }
          var L = J3.xs[q] + 'px', T = (p === 0 ? J3.top0 : J3.top1) + 'px';
          if (n.style.getPropertyValue('left') !== L) n.style.setProperty('left', L, 'important');
          if (n.style.getPropertyValue('top') !== T) n.style.setProperty('top', T, 'important');
        }
      }
      for (; idx < hay.length; idx++) hay[idx].parentNode && hay[idx].parentNode.removeChild(hay[idx]);
    }
    var todos = document.querySelectorAll('.st-n[data-st-auton]');
    for (var t = 0; t < todos.length; t++) { if (conJobs.indexOf(todos[t].parentNode) === -1) todos[t].parentNode.removeChild(todos[t]); }
  }

  /* v24 (Tono, 3 sep): los numerales romanos de las tarjetas llevan dither sobre el texto con estilos EN LINEA
     e !important (cy-dither), y cada uno genera su propia rampa: el "III" del Acto V salia de otro color.
     En movil se aplanan al color que ya declara la hoja para que los tres se lean igual. */
  function numerosPlanos(replay) {
    /* v44: (a) solo se recorren los candidatos con la tinta de dither EN LINEA (selector de atributo), no todos los
       span/strong/em/b/i de cada bloque (medido: 1,3 s a CPU x4 por pasada en Inicio movil, casi todo en textContent
       y regex); (b) todas las lecturas de color van antes de todas las escrituras, para no forzar un recalculo de
       estilo por numeral. Mismo filtro, mismo resultado. */
    /* v51: con replay (pasada rapida) reproduce los colores finales leidos por la ultima pasada completa de ese tema, sin leer */
    if (replay) { for (var r = 0; r < replay.length; r++) { replay[r].t.style.setProperty('background-image', 'none', 'important'); replay[r].t.style.setProperty('-webkit-text-fill-color', replay[r].c, 'important'); } return replay; }
    if (!arbolMovil()) return [];
    var sp = document.querySelectorAll('.st-mb :is([data-st-blq],[data-st-carr],[data-st-blqx]) :is(span,strong,em,b,i)[style*="text-fill-color"]');
    var jobs = [], j, t;
    for (j = 0; j < sp.length; j++) {
      t = sp[j];
      if (t.children.length) continue;
      if (t.style.getPropertyPriority('-webkit-text-fill-color') !== 'important') continue;
      if (!/^[IVX]{1,4}$/.test((t.textContent || '').trim())) continue;
      jobs.push(t);
    }
    for (j = 0; j < jobs.length; j++) {
      t = jobs[j];
      if (!t.__stNum) {
        t.__stNum = 1;
        t.style.removeProperty('background-image'); t.style.removeProperty('background-size');
        t.style.removeProperty('background-repeat'); t.style.removeProperty('image-rendering');
        t.style.removeProperty('background-clip'); t.style.removeProperty('-webkit-background-clip');
        t.style.removeProperty('-webkit-text-fill-color');
      }
    }
    var cols = [], out = [];
    for (j = 0; j < jobs.length; j++) cols.push(getComputedStyle(jobs[j]).color);
    for (j = 0; j < jobs.length; j++) {
      jobs[j].style.setProperty('background-image', 'none', 'important');
      jobs[j].style.setProperty('-webkit-text-fill-color', cols[j], 'important');
      out.push({ t: jobs[j], c: cols[j] }); /* v51 */
    }
    return out;
  }

  /* v33 T8: el arbol oculto (.st-dt en movil, .st-mb en desktop) no se recorre: sus rects son 0 y se descartaban igual,
     pero costaban closest+getBoundingClientRect+getComputedStyle por nodo. Solo se considera oculto si display:none. */
  function arbolesOcultos() {
    var roots = document.querySelectorAll('.st-dt,.st-mb'), out = [];
    for (var i = 0; i < roots.length; i++) { if (roots[i].offsetParent === null && getComputedStyle(roots[i]).display === 'none') out.push(roots[i]); }
    return out;
  }
  function enOculto(el, ocultos) { for (var i = 0; i < ocultos.length; i++) { if (ocultos[i].contains(el)) return true; } return false; }
  /* v33 T8 (regla existente reescrita): misma seleccion, mismos filtros, mismos umbrales y mismo orden de pintado que antes, pero en
     dos fases: primero TODAS las lecturas (rects, estilos computados, luminancias) y despues TODAS las escrituras inline. Antes cada
     candidato se medía tras las escrituras del anterior (layout forzado por tarjeta y por descendiente). Resultado visual identico:
     ninguna escritura de esta funcion (background/border/color) altera la geometria que se mide. */
  /* v44: pasada RAPIDA (rapida=true) = la de 60 ms tras un cambio de tema. Corre en plena fundida de colores de
     cy-dither (.cy-theme-anim: transition en TODOS los elementos) y ahi cada layout forzado cuesta 6-8 veces mas que
     fuera de la fundida (medido en /como-funciona movil a CPU x4: 3987 ms la pasada de 60 ms contra 546 ms la misma
     pasada tras la fundida). En la rapida se salta lo que NO depende del tema y solo fuerza layouts: marcaBloques
     (los bloques ya estan marcados), rombosCarrusel (misma geometria; los rombos de la pasada anterior siguen en su
     sitio) y esquinasBlq (radios ya escritos y no guardados por bq). La pasada completa tras la fundida (remedida)
     sigue haciendo todo, igual que antes. */
  /* v51 (PF-03): la pasada completa guarda sus lecturas (contenedores, tarjetas con descendientes/textos decididos, lineas de
     carrusel, numerales) por tema, y la lista de candidatos con independencia del tema. La pasada rapida (60 ms tras el cambio,
     en plena fundida, donde cada lectura tras una escritura recalcula el estilo de todo el documento con miles de transiciones
     vivas) ya no lee: reproduce las escrituras del tema destino si ya se midio; si no, pinta contenedores y tarjetas con los
     veredictos cacheados (sin descendientes ni textos, que dependen de los colores finales y ya los pintaba mal a medio camino).
     La pasada completa posterior hace todo, igual que antes. */
  var bqLect = { d: null, n: null, cand: null };
  function bloquesRapida(noche) {
    var L = bqLect[noche ? 'n' : 'd'], m, k;
    if (L) {
      for (m = 0; m < L.conts.length; m++) pintaContenedor(L.conts[m].b, L.conts[m].P, L.conts[m].tira);
      for (m = 0; m < L.jobs.length; m++) escribeTarjeta(L.jobs[m]);
      lineasCarrusel(L.lin);
      numerosPlanos(L.num);
      return;
    }
    var C = bqLect.cand; if (!C) return;
    for (m = 0; m < C.conts.length; m++) {
      var b = C.conts[m].b, osc = seccionOscura(b, noche);
      if (!osc && !noche) continue; /* dia en seccion clara: la hoja ya es blanca (mismo criterio que la pasada completa) */
      var P = osc ? PAL_D : PAL_L;
      pintaContenedor(b, P, C.conts[m].tira);
      for (k = 0; k < C.conts[m].kids.length; k++) escribeTarjeta({ el: C.conts[m].kids[k], P: P, enBlq: true, ds: [], tx: [] });
    }
    for (k = 0; k < C.sueltas.length; k++) {
      if (!seccionOscura(C.sueltas[k], noche)) continue;
      escribeTarjeta({ el: C.sueltas[k], P: PAL_D, enBlq: false, ds: [], tx: [] });
    }
    /* v56: las lineas de carrusel (contenedor transparente, gap 0, borde 1 px por tarjeta) se reproducen tambien sin cache del
       tema destino, con la geometria de la pasada completa (cand.lin) y LN por seccion (PAL_D/PAL_L, los mismos valores que
       lee lineasCarrusel del CSS). Antes, hasta la remedida (hasta 6 s con transiciones vivas), el carrusel volvia a su gap y
       borde de hoja: fondo LN entre tarjetas en los bloques pintados, y en Home el carrusel de publicaciones cambiaba 1 px de
       alto y de gap con los rombos de junta anclados a la geometria anterior (1-3 px fuera de la linea). */
    var lj = [];
    for (k = 0; k < (C.lin || []).length; k++) {
      var bl = C.lin[k].b; if (bl.offsetParent === null) continue;
      lj.push({ b: bl, kids: C.lin[k].kids, LN: (seccionOscura(bl, noche) ? PAL_D : PAL_L).LN });
    }
    if (lj.length) lineasEscribe(lj);
  }
  function bloquesNoche(rapida) {
    var noche = document.documentElement.getAttribute('data-cy-theme') === 'noche';
    bqRestaura();
    if (rapida) { bloquesRapida(noche); return; }
    var cand0 = { conts: [], sueltas: [] };
    marcaBloques();
    rombosCarrusel();
    var numJobs = numerosPlanos();
    var skip = 'nav,[data-st-hero],button,form,[data-st-band],[data-stf-cielo-host]';
    var ocultos = arbolesOcultos();
    var contJobs = [], jobs = [];
    /* --- FASE DE LECTURA --- */
    /* 1) contenedores (bloques con rombos) */
    var conts = document.querySelectorAll('[data-st-blq],[data-st-blqx]');
    for (var i = 0; i < conts.length; i++) {
      var b = conts[i];
      if (b.closest(skip) || b.offsetParent === null) continue;
      var oscuro = seccionOscura(b, noche);
      if (!oscuro && !noche) continue; /* día en sección clara: la hoja ya es blanca */
      var P = oscuro ? PAL_D : PAL_L;
      var csB = getComputedStyle(b);
      var tira = /auto|scroll/.test(csB.overflowX) && b.scrollWidth > b.clientWidth + 4;
      contJobs.push({ b: b, P: P, tira: tira });
      for (var k = 0; k < b.children.length; k++) { var c = b.children[k]; if (c.classList.contains('st-n')) continue; jobs.push(leeTarjeta(c, P, true, oscuro)); }
    }
    /* v51: candidatos de contenedor con independencia del tema (los saltados por "dia en seccion clara" tambien) */
    for (var i0 = 0; i0 < conts.length; i0++) {
      var b0 = conts[i0];
      if (b0.closest(skip) || b0.offsetParent === null) continue;
      var cs0 = getComputedStyle(b0), kids0 = [];
      for (var k0 = 0; k0 < b0.children.length; k0++) { if (!b0.children[k0].classList.contains('st-n')) kids0.push(b0.children[k0]); }
      cand0.conts.push({ b: b0, tira: /auto|scroll/.test(cs0.overflowX) && b0.scrollWidth > b0.clientWidth + 4, kids: kids0 });
    }
    /* 2) tarjetas sueltas redondeadas (mockups, figuras, publicaciones) en secciones oscuras */
    var cand = document.querySelectorAll('[data-screen-label] div, [data-screen-label] article, footer div');
    for (var j = 0; j < cand.length; j++) {
      var el = cand[j];
      if (ocultos.length && enOculto(el, ocultos)) continue;
      if (el.hasAttribute('data-st-blq') || el.hasAttribute('data-st-blqx') || el.classList.contains('st-n')) continue;
      if (el.closest('[data-st-blq],[data-st-blqx]')) continue;
      var r = el.getBoundingClientRect();
      if (r.width < 120 || r.height < 56) continue;
      var cs = getComputedStyle(el);
      if (lumRGB(cs.backgroundColor) === null) continue;
      if (parseFloat(cs.borderRadius) < 10) continue;
      if (el.closest(skip)) continue;
      /* v53 (13 sep 2026, Cristal Sobrio 01 de Astra, VoBo Tono): los mockups con material de cristal ([data-cy-glass="sobrio"], 13 familias
         .cxm de /como-funciona y el panel G) pintan su superficie con cy-glass-sobrio (rgba + backdrop-filter, tokens --cxm-* por tema);
         un fondo inline #0C1D4B con !important tapaba el cristal de noche (y de dia en Express Payout). No se leen ni se escriben. */
      if (el.closest('[data-cy-glass="sobrio"]')) continue;
      if (el.closest('.w-form-done,.w-form-fail')) continue; /* v73: los mensajes del formulario llevan su propio vidrio (cy-botones v22) */
      var enA = el.closest('a'); if (enA && !(el.tagName === 'A' && el.parentElement && el.parentElement.hasAttribute('data-st-blq'))) continue;
      cand0.sueltas.push(el); /* v51 */
      if (!seccionOscura(el, noche)) continue;
      jobs.push(leeTarjeta(el, PAL_D, false, true));
    }
    /* --- FASE DE ESCRITURA (mismo orden de antes: contenedores, tarjetas de bloque, tarjetas sueltas) --- */
    for (var m = 0; m < contJobs.length; m++) pintaContenedor(contJobs[m].b, contJobs[m].P, contJobs[m].tira);
    for (var n = 0; n < jobs.length; n++) escribeTarjeta(jobs[n]);
    /* 3) v29: carruseles y bloques con scroll horizontal: la linea es el borde de cada tarjeta (sin fondo de
       contenedor detras, que asomaba al rebotar el scroll en iOS), y los rombos se recolocan con gap 0. */
    var linJobs = lineasCarrusel();
    rombosCarrusel();
    esquinasBlq(); /* v31: las esquinas se recalculan tras marcar y pintar los carruseles */
    cand0.lin = linJobs; /* v56: geometria de las lineas de carrusel, independiente del tema */
    bqLect[noche ? 'n' : 'd'] = { conts: contJobs, jobs: jobs, lin: linJobs, num: numJobs }; bqLect.cand = cand0; /* v51 */
  }
  /* v51: lineasCarrusel(replay) reproduce las escrituras de una pasada anterior sin leer; sin argumento lee y devuelve sus trabajos */
  function lineasCarrusel(replay) {
    if (replay) { lineasEscribe(replay); return replay; }
    if (!arbolMovil()) return [];
    var conts = document.querySelectorAll('.st-mb [data-st-blq],.st-mb [data-st-carr],.st-mb [data-st-pubs]');
    /* v33 T8 (regla existente reescrita por fases, mismos valores): primero se leen todos los carruseles, luego se escriben */
    var esT = function (v) { return !v || v === 'transparent' || /rgba\(\s*\d+,\s*\d+,\s*\d+,\s*0\)/.test(v); };
    var jobs = [];
    for (var i = 0; i < conts.length; i++) {
      var b = conts[i];
      if (b.offsetParent === null) continue;
      /* v68 (29 sep 2026, QA-RAIZ-CARRUSEL-BLOG): el carrusel del Blog movil deja de ser una tira fundida. Cada tarjeta es una
         superficie propia (radio completo, imagen recortada por el mismo radio, filo y vidrio en su perimetro) separada de las vecinas
         por 12 px que dejan ver el fondo de la LP; sin juntas ni rombos (rombosCarrusel lo salta por gap > 3). Resto de carruseles sin cambio. */
      /* v71: el Blog movil vuelve a la tira unida del design system (juntas compartidas y rombos); v68 lo separaba */
      var cs = getComputedStyle(b);
      if (!/auto|scroll/.test(cs.overflowX)) continue;
      if (b.scrollWidth <= b.clientWidth + 4) continue;
      var kids = [];
      for (var k = 0; k < b.children.length; k++) { var c = b.children[k]; if (!c.classList.contains('st-n')) kids.push(c); }
      if (kids.length < 2) continue;
      var LN = cs.backgroundColor;
      if (esT(LN)) LN = getComputedStyle(kids[0]).borderTopColor;
      if (esT(LN)) LN = cs.borderTopColor;
      if (esT(LN)) LN = '#C4CFE4';
      jobs.push({ b: b, kids: kids, LN: LN });
    }
    lineasEscribe(jobs);
    return jobs;
  }
  function lineasEscribe(jobs) {
    for (var q = 0; q < jobs.length; q++) {
      var J = jobs[q], b2 = J.b;
      bqGuarda(b2, 'background-color'); bqGuarda(b2, 'gap'); bqGuarda(b2, 'column-gap');
      b2.style.setProperty('background-color', 'transparent', 'important');
      b2.style.setProperty('gap', '0', 'important'); b2.style.setProperty('column-gap', '0', 'important');
      for (var j = 0; j < J.kids.length; j++) {
        var t = J.kids[j];
        ['border-color', 'border-style', 'border-width', 'border-left-width'].forEach(function (p) { bqGuarda(t, p); });
        t.style.setProperty('border-color', J.LN, 'important');
        t.style.setProperty('border-style', 'solid', 'important');
        t.style.setProperty('border-width', '1px', 'important');
        t.style.setProperty('border-left-width', j === 0 ? '1px' : '0', 'important');
      }
    }
  }
  /* v33 T8 (regla existente reescrita): setup() corre 3 veces y mountBloques montaba 3 MutationObserver + 3 juegos de listeners y
     timers: cada cambio de tema disparaba 9 pasadas completas (60/500/1500 ms x3). Ahora se monta UNA vez; las llamadas
     siguientes solo re-aplican. Por cambio de tema: una pasada a 60 ms (cambio visible inmediato) y una segunda a ~620 ms, cuando
     ya termino la transicion de colores de cy-dither-ui (.cy-theme-anim, .35 s): a 60 ms getComputedStyle devuelve colores
     interpolados y las tablas TONOS_* / los umbrales de luminancia solo casan con los colores finales (antes lo resolvian las
     pasadas de 500 y 1500 ms). Resize/load/pageshow: una pasada y otra diferida solo si cambio el layout (firma). */
  var bqMount = null;
  function firmaLayout() {
    var d = document.documentElement;
    return window.innerWidth + '|' + d.scrollHeight + '|' + document.querySelectorAll('[data-st-blq],[data-st-blqx],.st-mb [data-st-carr],.st-mb [data-st-pubs]').length;
  }
  function pasadaBloques(rapida) { bloquesNoche(rapida); mateBloques(); if (bqMount && !rapida) bqMount.firma = firmaLayout(); }
  /* ---------- v60: vidrio esmerilado por curvatura mate del borde, serif por seccion y rombos de Acto II ---------- */
  /* v60 (28 sep 2026, RELEVO-VIDRIO-BORDES-Y-CONTROLES): Tono rechaza la sombra inferior de v59 (se leia como bloque 3D). El vidrio se lee ahora
     por la curvatura mate del perimetro: en cada lado EXTERIOR del grupo la tarjeta lleva un borde interior difuso (inset que se desvanece
     hacia dentro), en la linea clara de la casa (#C4CFE4) si la tarjeta es clara y en lavanda tenue si es oscura; nada en las juntas, sin sombra proyectada, reflejos,
     bandas ni brillo. Relleno, contorno, rombos, radios y geometria sin cambio. Incluye todos los bloques de contenido (coberturas, agentes,
     mockups e ilustraciones): el inset se pinta bajo el contenido, asi que no vela arte ni UI. --cy-serif y rombos de Acto II como v59. */
  var MATE = true;
  var MATE_EDGE = 14;
  function mateAlfa(c, a) { var m = /rgba?\(\s*([\d.]+),\s*([\d.]+),\s*([\d.]+)/.exec(c || ''); return m ? 'rgba(' + m[1] + ', ' + m[2] + ', ' + m[3] + ', ' + a + ')' : null; }
  function serifDe(sec) {
    var ems = sec.querySelectorAll('em');
    for (var e = 0; e < ems.length; e++) { var q = ems[e]; if (!q.getClientRects().length) continue; var ce = getComputedStyle(q); if (!/serif/i.test(ce.fontFamily) || /sans/i.test(ce.fontFamily)) continue; if (enTransito(q)) return null; return ce.webkitTextFillColor || ce.color; }
    return null;
  }
  /* v61 (28 sep 2026, RELEVO-SUPERFICIE-VIDRIO-FINAL): el v60 solo se leia en las esquinas y el filo iba demasiado iluminado. Ahora el vidrio
     ocupa TODA la superficie: el relleno propio pasa a translucido (0,9; 0,97 si contrasta con la seccion), con desenfoque de fondo y una
     modulacion difusa de tono en todo el cuerpo (luz mate arriba a la izquierda, tono frio del vidrio abajo a la derecha), sin ruido, reflejo
     especular, bandas ni sombra. El filo exterior baja de intensidad. El cuerpo se pinta en la superficie y en sus paneles pintados que no
     son ilustracion, nunca sobre imagenes. Superficies sueltas: Acto III de Home, Industrias, FAQ, formularios, tarjeta riai y fundadores.
     Sin material anidado: una superficie dentro de otra con material no se trata.
     Familia comun (misma receta que cy-botones-v6 para tags, botones, CTAs, controles y selectores): modulacion VID_MOD_*, filo interior
     rgba(176,192,222,.45) en superficies claras y rgba(159,176,255,.14) en oscuras, sin sombra proyectada. */
  var VID_SUELTAS = '.st-i-09169b46,.st-i-19d42b4f,.st-i-63a9b2be,.st-i-f975453d,.st-i-08df10f3,.st-i-2fc114c9,.st-i-2949f424,.st-i-fd9273fa,.st-hfaq,[data-screen-label="Publicación, cierre"] .st-i-eac238cf'; /* v90: el CTA «Habla con los fundadores» del cierre de los articulos del blog, como superficie suelta de vidrio */
  /* v92 (H3, DESACTIVADO): con VID_SIN_BF_MOCKUP = true, la superficie que contiene un cysure-mockup no recibe backdrop-filter (el .glass del
     shadow DOM ya es vidrio; dos backdrop-filter anidados). Relleno, modulacion y filo sin cambio. Para probarlo sin publicar: window.__cyVidSinBfMockup = true
     antes de la pasada (o en consola y luego cambiar de tema). Para activarlo de forma estable: poner true aqui y subir como version nueva. */
  var VID_SIN_BF_MOCKUP = false;
  var VID_MOD_CLARO = 'linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0) 45%, rgba(176, 192, 222, 0.10) 100%)';
  var VID_MOD_OSCURO = 'linear-gradient(180deg, rgba(159, 176, 255, 0.05) 0%, rgba(159, 176, 255, 0) 45%, rgba(0, 6, 24, 0.14) 100%)';
  function vidRGBA(c) { var m = /rgba?\(\s*([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?/.exec(c || ''); return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : parseFloat(m[4]) } : null; }
  function vidFondo(el) {
    for (var p = el.parentElement; p && p !== document.documentElement; p = p.parentElement) { var q = vidRGBA(getComputedStyle(p).backgroundColor); if (q && q.a >= 0.5) return q; }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  function vidL(q) { return (0.2126 * q.r + 0.7152 * q.g + 0.0722 * q.b) / 255; }
  function vidCuerpos(S) {
    /* la superficie y sus paneles pintados grandes (>=15 % del area) que no son ilustracion (sin imagen que ocupe >=40 % del panel) */
    var out = [S], rs = S.getBoundingClientRect(), A = rs.width * rs.height;
    var ds = S.querySelectorAll('div,section,article,li');
    for (var i = 0; i < ds.length; i++) {
      var d = ds[i], cd = getComputedStyle(d), q = vidRGBA(cd.backgroundColor);
      if (!q || q.a < 0.05 || cd.backgroundImage !== 'none') continue;
      var r = d.getBoundingClientRect(), a = r.width * r.height; if (a < A * 0.15) continue;
      var ilus = false, ims = d.querySelectorAll('img,picture,video,canvas,cysure-mockup');
      for (var j = 0; j < ims.length; j++) { var ri = ims[j].getBoundingClientRect(); if (ri.width * ri.height >= a * 0.4) { ilus = true; break; } }
      if (!ilus) out.push(d);
    }
    return out;
  }
  function mateBloques() {
    var fiable = coloresFiables(), noche = document.documentElement.getAttribute('data-cy-theme') === 'noche';
    var sj = [], tj = [], nj = [], cw = [], sw = [];
    var sinTransp = window.matchMedia && matchMedia('(prefers-reduced-transparency: reduce)').matches;
    var viejos = document.querySelectorAll('[data-cy-vid]');
    for (var v0 = 0; v0 < viejos.length; v0++) viejos[v0].removeAttribute('data-cy-vid');
    if (fiable) {
      var secs = document.querySelectorAll('[data-screen-label]');
      for (var s = 0; s < secs.length; s++) { if (secs[s].offsetParent === null) continue; var col0 = serifDe(secs[s]); if (col0) sj.push({ s: secs[s], c: col0 }); }
    }
    var marcadas = [];
    function yaTiene(el) { for (var m = 0; m < marcadas.length; m++) { if (marcadas[m] !== el && marcadas[m].contains(el)) return true; } return false; }
    function esUltima(c) { for (var n = c.nextElementSibling; n; n = n.nextElementSibling) { if (!n.classList.contains('st-n')) return false; } return true; }
    /* v93: lados sin tarjeta adyacente entre las hermanas hs, por la caja de maqueta (offset*: el revelado escala/desplaza con transform) */
    function vecinas(c, hs) {
      var o = { t: 1, b: 1, l: 1, r: 1, junta: 0 }, cl = c.offsetLeft, ct = c.offsetTop, cr = cl + c.offsetWidth, cb = ct + c.offsetHeight;
      for (var h = 0; h < hs.length; h++) {
        var k = hs[h]; if (k === c || k.offsetWidth < 10 || k.offsetHeight < 10 || k.offsetParent !== c.offsetParent) continue;
        var kl = k.offsetLeft, kt = k.offsetTop, kr = kl + k.offsetWidth, kb = kt + k.offsetHeight;
        var sy = Math.min(cb, kb) - Math.max(ct, kt), sx = Math.min(cr, kr) - Math.max(cl, kl);
        if (sy > 4) { if (Math.abs(kl - cr) < 3) { o.r = 0; o.junta = 1; } if (Math.abs(kr - cl) < 3) { o.l = 0; o.junta = 1; } }
        if (sx > 4) { if (Math.abs(kt - cb) < 3) { o.b = 0; o.junta = 1; } if (Math.abs(kb - ct) < 3) { o.t = 0; o.junta = 1; } }
      }
      return o;
    }
    var marcosV = document.querySelectorAll('[data-cy-marco]');
    for (var mv = 0; mv < marcosV.length; mv++) marcosV[mv].parentNode.removeChild(marcosV[mv]);
    var marcos = [];
    var filos = []; /* v95: inset de las coberturas con arte pintado en una capa encima del contenido (arte y panel lo tapaban) */
    function superficie(c, lados) {
      if (yaTiene(c)) return;
      marcadas.push(c);
      var qc = vidRGBA(getComputedStyle(c).backgroundColor), fs = vidFondo(c);
      var base = (qc && qc.a >= 0.05) ? qc : fs, Lc = vidL(base);
      var oscura = Lc < 0.5, tinta = oscura ? 'rgba(159, 176, 255, 0.14)' : 'rgba(176, 192, 222, 0.45)';
      /* v96-home (5 oct 2026, La ruta de Home): de noche la tarjeta III (sx2, clara por diseno y rellena a rgba(201, 211, 255, .97) mas abajo)
         recibia la tinta clara de dia (176, 192, 222, .45), casi su mismo color: el contorno frosted quedaba en dE 1,6-2,2 junto al borde
         frente a 4,5-5,4 de las otras dos. Una superficie clara de noche lleva una tinta oscura de la misma familia (dser #29487B). */
      if (noche && !oscura) tinta = 'rgba(41, 72, 123, 0.24)';
      var E = MATE_EDGE, sh = [];
      if (lados.t) sh.push('inset 0 ' + E + 'px ' + E + 'px -' + E + 'px ' + tinta);
      if (lados.b) sh.push('inset 0 -' + E + 'px ' + E + 'px -' + E + 'px ' + tinta);
      if (lados.l) sh.push('inset ' + E + 'px 0 ' + E + 'px -' + E + 'px ' + tinta);
      if (lados.r) sh.push('inset -' + E + 'px 0 ' + E + 'px -' + E + 'px ' + tinta);
      /* v95: en las coberturas de Como funciona (.st-i-2949f424 / .st-i-ac51406e) el arte (img a sangre) y el panel de texto son hijos de la
         tarjeta y pintan ENCIMA de su box-shadow inset: el contorno solo se veia en la franja libre bajo el panel. El mismo inset (mismos
         lados, grosor y tinta) va en una capa [data-cy-marco] hija de la tarjeta, por encima del contenido y sin eventos. */
      if (sh.length && c.matches('.st-i-2949f424,.st-i-ac51406e') && c.querySelector('img,picture') && getComputedStyle(c).position !== 'static') filos.push({ c: c, sh: sh.join(', '), l: (lados.t ? 't' : '') + (lados.b ? 'b' : '') + (lados.l ? 'l' : '') + (lados.r ? 'r' : '') });
      else if (sh.length) tj.push({ c: c, sh: sh.join(', ') });
      /* v95 (bloques-titulos 04oct, punto 1): sin backdrop-filter si el fondo inmediato (el padre) es opaco. Ahi el desenfoque no cambia
         nada (detras solo esta ese fondo liso), pero hace de cada celda una capa compuesta que se ajusta al pixel aparte del borde del
         padre: en las rejillas de CF (.st-i-70d0a8bc, gap 1px sobre fondo de linea) las celdas suben y destapan abajo una franja de la
         linea (borde inferior mas grueso). Relleno, modulacion e inset sin cambio. */
      var padOp = (c.parentElement && c.parentElement.matches('.st-i-70d0a8bc')) ? vidRGBA(getComputedStyle(c.parentElement).backgroundColor) : null, fondoOpaco = !!(padOp && padOp.a >= 0.99); /* solo las rejillas .st-i-70d0a8bc (CF Cap. I, II movil, V) */
      var cuerpos = vidCuerpos(c);
      for (var k = 0; k < cuerpos.length; k++) {
        var B0 = cuerpos[k], cb = getComputedStyle(B0), qb = vidRGBA(cb.backgroundColor);
        if (cb.backgroundImage !== 'none' && B0 !== c) continue;
        if (cb.backgroundImage !== 'none' && !/gradient/.test(cb.backgroundImage)) continue;
        var bb = (qb && qb.a >= 0.05) ? qb : fs, Lb = vidL(bb);
        var col = null;
        if (qb && qb.a >= 0.05 && !sinTransp && B0.tagName !== 'A') {
          var fb = vidFondo(B0), alfa = Math.abs(Lb - vidL(fb)) > 0.3 ? 0.97 : 0.9;
          col = 'rgba(' + qb.r + ', ' + qb.g + ', ' + qb.b + ', ' + Math.min(qb.a, alfa) + ')';
        }
        if (noche && B0 === c && vidL(bb) > 0.9 && c.closest('[data-screen-label="Acto V, La ruta"]') && esUltima(c)) col = 'rgba(201, 211, 255, 0.97)';
        cw.push({ e: B0, bg: col, img: Lb < 0.5 ? VID_MOD_OSCURO : VID_MOD_CLARO, bf: (B0 === c && !sinTransp && !fondoOpaco && !((VID_SIN_BF_MOCKUP || window.__cyVidSinBfMockup === true) && c.querySelector('cysure-mockup'))) });
      }
      c.setAttribute('data-cy-vid', '');
    }
    var conts = document.querySelectorAll('[data-st-blq],[data-st-blqx]');
    for (var i = 0; i < conts.length; i++) {
      var b = conts[i];
      if (b.offsetParent === null) continue;
      var sec = b.closest('[data-screen-label="Acto II, La tesis"]');
      if (sec && fiable) {
        var em = null, ems = sec.querySelectorAll('em.cy-dser[data-st-invert]');
        for (var e = 0; e < ems.length; e++) { if (ems[e].getClientRects().length) { em = ems[e]; break; } }
        if (em && !enTransito(em)) {
          var ce = getComputedStyle(em), colA = ce.webkitTextFillColor || ce.color;
          var ns = [].slice.call(b.querySelectorAll('.st-n')).concat(b.__stNodos || []);
          for (var z = 0; z < ns.length; z++) nj.push({ n: ns[z], c: colA });
        }
      }
      if (!MATE || !fiable) continue;
      if (b.closest('nav,[data-st-hero],form,[data-st-band],[data-stf-cielo-host],footer')) continue;
      var csb = getComputedStyle(b);
      var kids = [];
      for (var k2 = 0; k2 < b.children.length; k2++) { if (!b.children[k2].classList.contains('st-n')) kids.push(b.children[k2]); }
      if (!kids.length) continue;
      var br = b.getBoundingClientRect(), bw = parseFloat(csb.borderTopWidth) || 0;
      var L = br.left + bw, T = br.top + bw, Rr = br.right - bw, Bo = br.bottom - bw;
      var tira = /auto|scroll/.test(csb.overflowX) && b.scrollWidth > b.clientWidth + 4;
      var unida = false; /* v93: bloque con alguna junta real entre tarjetas -> lados por vecinas */
      if (!tira) { for (var q1 = 0; q1 < kids.length && !unida; q1++) { if (kids[q1].offsetWidth >= 10 && kids[q1].offsetHeight >= 10 && vecinas(kids[q1], kids).junta) unida = true; } }
      for (var q2 = 0; q2 < kids.length; q2++) {
        var c = kids[q2], r = c.getBoundingClientRect();
        if (r.width < 10 || r.height < 10) continue;
        var lados;
        if (tira) lados = { t: 1, b: 1, l: q2 === 0 ? 1 : 0, r: q2 === kids.length - 1 ? 1 : 0, tira: 1 };
        else if (unida) lados = vecinas(c, kids); /* v93: un lado que da a un hueco de la rejilla (992-1199, fila 2+2+1) es contorno */
        else lados = { t: Math.abs(r.top - T) < 3, b: Math.abs(r.bottom - Bo) < 3, l: Math.abs(r.left - L) < 3, r: Math.abs(r.right - Rr) < 3 };
        superficie(c, lados);
      }
      b.setAttribute('data-cy-mate', '');
    }
    if (MATE && fiable) {
      var su = document.querySelectorAll(VID_SUELTAS);
      /* v93: carrusel con scroll horizontal y tarjetas unidas (coberturas <992): conjunto. Todas sus tarjetas, tambien la que no es de
         VID_SUELTAS (la 5.a, superficie del bloque en escritorio), sin inset en las juntas y con el en el contorno de la tira. */
      var tiras = [];
      for (var u0 = 0; u0 < su.length; u0++) {
        var P0 = su[u0].parentElement;
        if (!P0 || tiras.indexOf(P0) >= 0 || P0.hasAttribute('data-st-blq') || P0.hasAttribute('data-st-blqx') || su[u0].offsetParent === null || P0.closest('nav,[data-st-hero],footer')) continue;
        var cp0 = getComputedStyle(P0);
        if (!(/auto|scroll/.test(cp0.overflowX) && P0.scrollWidth > P0.clientWidth + 4)) continue;
        var hs0 = []; for (var h0 = 0; h0 < P0.children.length; h0++) { if (!P0.children[h0].classList.contains('st-n')) hs0.push(P0.children[h0]); }
        if (!vecinas(su[u0], hs0).junta) continue;
        tiras.push(P0);
        for (var h1 = 0; h1 < hs0.length; h1++) { var y0 = hs0[h1]; if (y0.offsetWidth < 60 || y0.offsetHeight < 40) continue; superficie(y0, vecinas(y0, hs0)); }
      }
      for (var u = 0; u < su.length; u++) {
        var x = su[u];
        if (x.offsetParent === null || x.closest('nav,[data-st-hero],footer')) continue;
        if (marcadas.indexOf(x) >= 0 && x.parentElement && x.parentElement.hasAttribute('data-st-blq')) continue; /* v92: ya lleva los lados exteriores de su grupo; nada en las juntas */
        if (marcadas.indexOf(x) >= 0 && tiras.indexOf(x.parentElement) >= 0) continue; /* v93: tarjeta del carrusel, ya con los lados de la tira */
        var rx = x.getBoundingClientRect(); if (rx.width < 60 || rx.height < 40) continue;
        superficie(x, { t: 1, b: 1, l: 1, r: 1 });
        sw.push(x);
      }
    }
    for (var q = 0; q < sj.length; q++) { bqGuarda(sj[q].s, '--cy-serif'); sj[q].s.style.setProperty('--cy-serif', sj[q].c); }
    for (var a2 = 0; a2 < tj.length; a2++) { bqGuarda(tj[a2].c, 'box-shadow'); tj[a2].c.style.setProperty('box-shadow', tj[a2].sh, 'important'); }
    for (var w2 = 0; w2 < cw.length; w2++) {
      var W = cw[w2];
      if (W.bg) { bqGuarda(W.e, 'background-color'); W.e.style.setProperty('background-color', W.bg, 'important'); }
      bqGuarda(W.e, 'background-image'); W.e.style.setProperty('background-image', W.img, 'important');
      if (W.bf) {
        bqGuarda(W.e, 'backdrop-filter'); bqGuarda(W.e, '-webkit-backdrop-filter');
        W.e.style.setProperty('backdrop-filter', 'blur(16px) saturate(1.05)', 'important'); W.e.style.setProperty('-webkit-backdrop-filter', 'blur(16px) saturate(1.05)', 'important');
      }
    }
    for (var f3 = 0; f3 < filos.length; f3++) {
      var fc = filos[f3].c, cfc = getComputedStyle(fc), fb = parseFloat(cfc.borderTopWidth) || 0, fk = document.createElement('div');
      var rad = [cfc.borderTopLeftRadius, cfc.borderTopRightRadius, cfc.borderBottomRightRadius, cfc.borderBottomLeftRadius].map(function (v) { return Math.max(0, (parseFloat(v) || 0) - fb) + 'px'; }).join(' ');
      fk.setAttribute('data-cy-marco', ''); fk.setAttribute('data-cy-filo', filos[f3].l); fk.setAttribute('aria-hidden', 'true');
      fk.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:4;border-radius:' + rad + ';box-shadow:' + filos[f3].sh + ';';
      fc.appendChild(fk);
    }
    for (var m3 = 0; m3 < marcos.length; m3++) {
      /* v62 P10: el carrusel movil lleva el vidrio en el borde del bloque exterior completo (marco fijo sobre la tira), no en cada tarjeta */
      var mb = marcos[m3].b, cmb = getComputedStyle(mb), pl = parseFloat(cmb.paddingLeft) || 0, pr = parseFloat(cmb.paddingRight) || 0, pt = parseFloat(cmb.paddingTop) || 0, pb = parseFloat(cmb.paddingBottom) || 0, mk = document.createElement('div'), E2 = MATE_EDGE, ti = noche ? 'rgba(159, 176, 255, 0.16)' : 'rgba(176, 192, 222, 0.50)';
      mk.setAttribute('data-cy-marco', ''); mk.setAttribute('aria-hidden', 'true');
      mk.style.cssText = 'position:absolute;pointer-events:none;z-index:3;left:' + (mb.offsetLeft + mb.clientLeft + pl) + 'px;top:' + (mb.offsetTop + mb.clientTop + pt) + 'px;width:' + (mb.clientWidth - pl - pr) + 'px;height:' + (mb.clientHeight - pt - pb) + 'px;border-radius:' + marcos[m3].r + ';box-shadow:inset 0 0 ' + E2 + 'px ' + ti + ';';
      if (getComputedStyle(mb.parentElement).position === 'static') { bqGuarda(mb.parentElement, 'position'); mb.parentElement.style.setProperty('position', 'relative'); }
      mb.parentElement.appendChild(mk);
    }
    /* v63 P2: ilustraciones de contenido sueltas. Anillo de vidrio de 7 px sobre el perimetro de la propia imagen. Filo de 0,5 px.
       No se aplica a las que ya viven en bloques de vidrio, heroes, carruseles, mockups, nav ni pie.
       v64: lupa real. El anillo lleva dentro una copia de la imagen ampliada desde el centro (scale 1+8/ancho, 1+8/alto: 4 px de
       desplazamiento en el borde, igual en cualquier tamano), con un leve desenfoque y brillo de vidrio; la mascara deja ver la copia
       solo en el anillo, asi que el centro es la imagen original sin tocar. Fallback transparente simple: si el navegador no soporta
       mask-composite, solo el filo (sin desenfoque ni copia). */
    if (!document.getElementById('cy-frost-svg')) { var fs = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); fs.id = 'cy-frost-svg'; fs.setAttribute('width', '0'); fs.setAttribute('height', '0'); fs.setAttribute('aria-hidden', 'true'); fs.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden'; fs.innerHTML = '<filter id="cy-frost-f" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="4" edgeMode="duplicate"/></filter>'; (document.body || document.documentElement).appendChild(fs); }
    var LENTE_OK = !!(window.CSS && CSS.supports && (CSS.supports('mask-image', 'linear-gradient(#000,#000)') || CSS.supports('-webkit-mask-image', 'linear-gradient(#000,#000)')));
    /* v75: capa de velo del frosted (tono lechoso + filo claro + grano de vidrio). Misma mascara por lado que el clon desenfocado, asi que
       sigue la regla de lados de Tono (sueltas los 4 lados; en bloque solo los lados que tocan el contorno). Se ve tambien donde la imagen es
       lisa (cielos), que es donde el solo desenfoque no cambiaba nada. Tonos por variables en :root (llegan al shadow DOM de los mockups y
       siguen el cambio de tema sin rehacer lentes); en secciones de arte invertido el velo usa el tono del otro tema. */
    if (LENTE_OK && !document.getElementById('cy-velo-v75')) { var vst = document.createElement('style'); vst.id = 'cy-velo-v75'; vst.textContent = ':root{--cy-velo:rgba(255,255,255,.12);--cy-velo-filo:rgba(255,255,255,.34);--cy-velo-brillo:rgba(255,255,255,.15)}'+'html[data-cy-theme="noche"]{--cy-velo:rgba(196,208,255,.075);--cy-velo-filo:rgba(175,190,255,.21);--cy-velo-brillo:rgba(159,176,255,.11)}'+'html:not([data-cy-theme="noche"]) [data-cy-lente-velo][data-cy-inv]{--cy-velo:rgba(196,208,255,.075);--cy-velo-filo:rgba(175,190,255,.21);--cy-velo-brillo:rgba(159,176,255,.11)}'+'html[data-cy-theme="noche"] [data-cy-lente-velo][data-cy-inv]{--cy-velo:rgba(255,255,255,.12);--cy-velo-filo:rgba(255,255,255,.34);--cy-velo-brillo:rgba(255,255,255,.15)}'+'[data-cy-lente-velo]{position:absolute;inset:0;pointer-events:none;border-radius:inherit;background-color:var(--cy-velo);background-image:'+CY_GRANO+';background-size:140px 140px;box-shadow:inset 0 0 0 1px var(--cy-velo-filo),inset 0 0 12px var(--cy-velo-brillo)}'; (document.head || document.documentElement).appendChild(vst); }
    frostMock();
    lentesBloque(noche, LENTE_OK); /* v71 */
    var lentesV = document.querySelectorAll('[data-cy-lente]');
    for (var lv = 0; lv < lentesV.length; lv++) { if (lentesV[lv].__obs) lentesV[lv].__obs.disconnect(); if (lentesV[lv].__ro) lentesV[lv].__ro.disconnect(); lentesV[lv].parentNode.removeChild(lentesV[lv]); }
    if (!window.__cyLenteLoad) { window.__cyLenteLoad = 1; var lraf = 0, lpide = function () { if (!lraf) lraf = requestAnimationFrame(function () { lraf = 0; lentesRevisa(); }); }; window.addEventListener('load', lpide); window.addEventListener('scroll', function () { if (!window.matchMedia || !matchMedia('(max-width:991px)').matches) lpide(); }, { passive: true }); window.addEventListener('resize', lpide, { passive: true }); /* v96-scroll: en movil la lente ya no persigue a la imagen en cada fotograma de scroll (el revelado movil no desplaza) */ document.addEventListener('transitionend', lpide, true); document.addEventListener('animationend', lpide, true); }
    /* v70: Atalayas del capitulo II de Como funciona (escritorio y movil). La img no tiene radio propio: el que se ve es el del marco que la
       recorta (lenteMarco). Su clon es un div con background-image = currentSrc de la imagen ya cargada (srcset responsive por tema de
       cy-arte28 v10), cover y la misma posicion que object-position. Un <img> clon lo reescribe cy-arte28 con el srcset de la familia y hace
       su propia eleccion: en WebKit pedia w3300 (sin sizes), adelantaba la carga diferida y, cuando la carrera de cy-dither deja la imagen en el
       maestro, mostraba otra variante. El div no elige ni descarga nada: usa exactamente el recurso que la imagen ya tiene. */
    var ATAL = '[data-screen-label^="Cap\u00edtulo II,"] img[src*="watchtowers"]';
    /* v74: todas las ilustraciones de contenido (antes una lista cerrada de clases y secciones, y solo con radio propio) */
    var ils = document.querySelectorAll('[data-cy-lang] [data-screen-label] img, ' + ATAL);
    /* v87: primero se leen y construyen todas las lentes (fuera del documento), luego se insertan juntas y se colocan en lote */
    var lnQ = [], lnRO = null, lnRoMap = [];
    try { lnRO = new ResizeObserver(function (ents) { cyLoteAbre(); try { for (var e = 0; e < ents.length; e++) for (var k = 0; k < lnRoMap.length; k++) if (lnRoMap[k][0] === ents[e].target) lnRoMap[k][1](); } finally { cyLoteCierra(); } }); } catch (e) {}
    for (var il = 0; il < ils.length; il++) {
      var im = ils[il], atal = im.matches(ATAL);
      if (!im.offsetParent || im.offsetWidth < 150 || im.offsetHeight < 60 || im.hasAttribute('data-cy-lente-lupa') || /\.svg(\?|$)/i.test(im.getAttribute('src') || '') || im.closest('[data-st-hero],[data-cy-vid],[data-st-blq],[data-st-blqx],[data-st-carr],[data-st-pubs],[data-cy-covcarr],[data-cy-lente],[data-cy-lente-blq],cysure-mockup,nav,footer,a') || im.closest('[data-screen-label^="Acto V, La ruta"] [data-st-ruta]')) continue; /* v88 (N03): la ilustracion de La ruta (Acto IV visible) va sin lente: encargo de Tono */
      /* v74: la lente vive en el marco de la imagen (su padre) siempre que se pueda: si el padre recorta con radio y mide lo mismo
         (lenteMarco) va al 100 % del marco; si no, el padre pasa a position:relative (solo si ningun descendiente posicionado cambia
         de referencia) y la lente toma los offsets de la imagen. Asi el revelado por scroll mueve lente e imagen juntas. Solo si el
         padre no se puede tocar se usa el offsetParent con la correccion por diferencia de centros de v65. */
      var radM = lenteMarco(im), op = (radM || lenteHost(im)) ? im.parentElement : im.offsetParent; /* v70b: el marco solo se toca si la imagen pasa los filtros */
      var ci = getComputedStyle(im), radL = radM || ci.borderTopLeftRadius; /* v74: tambien sin radio (esquinas rectas) */
      var ln = document.createElement('div'); ln.setAttribute('data-cy-lente', ''); ln.setAttribute('aria-hidden', 'true');
      var oscIl = (noche && !im.closest('[data-cy-arte="invert"],[data-screen-label="Acto II, La tesis"]')) || (!noche && !!im.closest('[data-cy-arte="invert"],[data-screen-label="Acto II, La tesis"]'));
      ln.style.cssText = 'position:absolute;pointer-events:none;z-index:2;box-sizing:border-box;left:' + im.offsetLeft + 'px;top:' + im.offsetTop + 'px;width:' + im.offsetWidth + 'px;height:' + im.offsetHeight + 'px;border-radius:' + radL + ';padding:0;overflow:hidden;border:.5px solid ' + (oscIl ? 'rgba(159,176,255,.16)' : 'rgba(255,255,255,.22)') + ';transition:opacity .9s cubic-bezier(.2,.7,.2,1);opacity:' + (im.getAttribute('data-st-img') === '1' ? '0' : '1');
      if (!LENTE_OK) { }
      else {
        ln.style.overflow = 'hidden';
        var cl = document.createElement('div'), cw2 = im.offsetWidth, ch2 = im.offsetHeight; /* v70: Atalayas, clon div con fondo; v74: todas (el clon usa el recurso ya cargado, sin descargas) */
        cl.setAttribute('data-cy-lente-lupa', ''); cl.alt = ''; cl.setAttribute('aria-hidden', 'true'); cl.decoding = 'async';
        cl.style.cssText = 'position:absolute;left:-.5px;top:-.5px;width:' + cw2 + 'px;height:' + ch2 + 'px;max-width:none;margin:0;padding:0;border:0;border-radius:inherit;object-fit:' + ci.objectFit + ';object-position:' + ci.objectPosition + ';transform:none;transform-origin:50% 50%;filter:url(#cy-frost-f) saturate(1.04) brightness(1.02);-webkit-mask-image:linear-gradient(90deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px)),linear-gradient(180deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px));mask-image:linear-gradient(90deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px)),linear-gradient(180deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px));opacity:1;visibility:visible;animation:none;transition:none';
        cl.style.backgroundSize = ci.objectFit === 'contain' ? 'contain' : (ci.objectFit === 'fill' ? '100% 100%' : 'cover'); cl.style.backgroundRepeat = 'no-repeat'; cl.style.backgroundPosition = ci.objectPosition; /* = object-fit + object-position */
        ln.appendChild(cyRefr(cl, ['l', 'r', 't', 'b'], true)); /* v76: lupa Liquid Glass bajo el frosted */
        ln.appendChild(cl);
        ln.appendChild(cyVelo(cl.style.webkitMaskImage || cl.style.maskImage, !!im.closest('[data-cy-arte="invert"],[data-screen-label="Acto II, La tesis"]'))); /* v75 */
      }
      if (radM) { ln.__fijo = 1; ln.style.left = '0px'; ln.style.top = '0px'; ln.style.width = '100%'; ln.style.height = '100%'; if (LENTE_OK && cl) { cl.style.width = 'calc(100% + 1px)'; cl.style.height = 'calc(100% + 1px)'; } } /* v70: geometria del marco, sin redondeo ni centros */
      { /* v74: todas; v70b: la lente sigue el fundido de entrada de la imagen (pie: opacity .9s y scale(.965) -> 1 en 1,1 s, origen 50% 55%) para que no se vea un anillo fuera de la imagen aun encogida */
        var rmo = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
        ln.style.transformOrigin = '50% 55%'; ln.style.transition = rmo ? 'none' : 'opacity .9s cubic-bezier(.2,.7,.2,1),transform 1.1s cubic-bezier(.2,.7,.2,1)';
        ln.__sync = (function (im, ln, rmo) { return function () { var pe = im.getAttribute('data-st-img') === '1'; ln.style.opacity = pe ? '0' : '1'; ln.style.transform = (pe && !rmo) ? 'scale(.965)' : 'none'; }; })(im, ln, rmo);
        ln.__sync();
      }
      lnQ.push({ op: op, ln: ln, run: (function (im, ln, clc, cl, atal, op) { return function () {
      lenteColoca(im, ln, clc);
      (function (im, ln, cl, atal) {
        if (lnRO) { var f = function () { lenteColoca(im, ln, cl); }; lnRoMap.push([op, f]); lnRoMap.push([im, f]); lnRO.observe(op); lnRO.observe(im); ln.__ro = lnRO; }
        var pon = function () {
          if (!cl) return;
          var ua = im.complete && im.naturalWidth ? im.currentSrc : ''; if (ua && cl.__cyU !== ua) { cl.__cyU = ua; cl.style.backgroundImage = 'url("' + ua + '")'; var rf = cl.parentNode && cl.parentNode.querySelector('[data-cy-lente-refr]'); if (rf) rf.style.setProperty('--cy-rf-i', cl.style.backgroundImage); } /* v70: solo el recurso ya cargado; v76: y la capa de refraccion */
        };
        pon();
        if (cl) {
          if (im.__cyLpon) im.removeEventListener('load', im.__cyLpon); im.__cyLpon = pon; im.addEventListener('load', pon); /* v70: cada carga (tambien la gemela de tema) */
          /* v70: y un seguimiento acotado (400 ms, 30 s) hasta que el clon tenga el recurso cargado de la imagen: en WebKit, con el error y reintento
             de cy-dither al cambiar de tema, la imagen puede completarse sin evento load y la lente recreada quedaba sin clon */
          ln.__sigue = function () { clearTimeout(ln.__cyT); var n = 0, tick = function () { if (!ln.isConnected) return; pon(); if (im.complete && im.naturalWidth && cl.__cyU === im.currentSrc) return; if (++n < 75) ln.__cyT = setTimeout(tick, 400); }; tick(); };
          ln.__sigue();
        }
        var mo = new MutationObserver(function () { if (ln.__sync) ln.__sync(); else ln.style.opacity = im.getAttribute('data-st-img') === '1' ? '0' : '1'; if (cl) { pon(); setTimeout(pon, 400); if (ln.__sigue) ln.__sigue(); } setTimeout(function () { lenteColoca(im, ln, cl); }, 1200); });
        mo.observe(im, { attributes: true, attributeFilter: ['data-st-img', 'src', 'srcset'] }); ln.__obs = mo;
      })(im, ln, LENTE_OK ? cl : null, atal);
      }; })(im, ln, cl && LENTE_OK ? cl : null, cl, atal, op) });
    }
    for (var iq = 0; iq < lnQ.length; iq++) lnQ[iq].op.appendChild(lnQ[iq].ln);
    cyLoteAbre(); try { for (var iq2 = 0; iq2 < lnQ.length; iq2++) lnQ[iq2].run(); } finally { cyLoteCierra(); }
    cyRecorta(lnQ.map(function (x) { return x.ln; }), null, 'il'); /* v88 (N02) */
    for (var r2 = 0; r2 < nj.length; r2++) { bqGuarda(nj[r2].n, 'border-color'); nj[r2].n.style.setProperty('border-color', nj[r2].c, 'important'); }
    window.CY_MATE = { v: 11, frost: document.querySelectorAll('cysure-mockup').length, marcos: marcos.length, lentes: document.querySelectorAll('[data-cy-lente]').length, lupas: document.querySelectorAll('[data-cy-lente-lupa]').length, lenteOk: LENTE_OK, superficies: marcadas.length, cuerpos: cw.length, sueltas: sw.length, secciones: sj.length, rombosActoII: nj.length };
  }




  /* v65: coloca la lente sobre su imagen. El bloque contenedor de la lente puede cambiar sin que cambie ningun tamano (el revelado por
     scroll pone y quita transform en la rejilla que la contiene), asi que se corrige por la diferencia de centros en pantalla entre imagen
     y lente, y se recomprueba en ResizeObserver, load, fin de transiciones y scroll (un rAF, solo lentes cerca de la ventana). */
  /* v66: borde frosted suave en las ilustraciones de los capitulos III, IV y V de Como funciona. Solo se inyecta cuando el componente ya pinto su .art (si el shadow tiene hijos antes de pintar, cysure-mockup no pinta) y se repone si repinta. Viven como div.art (fondo) dentro del shadow de
     cysure-mockup; la interfaz del mockup (.glass, boton) va encima y no se toca. ::after hereda el fondo (misma imagen, encuadre y tema). */
  var CY_GRANO = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.16'/%3E%3C/svg%3E\")";
  /* v76: lupa estilo Liquid Glass. Una franja de 46 px por lado de contorno con la misma imagen estirada desde el borde INTERIOR de la
     franja hacia el filo (scaleX/scaleY 1,14 con origen en el limite interior): en ese limite coincide con la imagen original (sin
     imagen doble) y cuanto mas cerca del filo mas amplia y refracta, como el bisel de una lente. Va debajo del frosted desenfocado,
     asi que del borde al centro se ve frosted, luego vidrio claro que refracta y al final la ilustracion intacta. */
  /* v76: tres niveles anidados por lado (46, 30 y 15 px), cada uno estira 4,5 % desde su limite interior: la refraccion crece de forma
     continua hacia el filo (sin salto en las uniones ni imagen doble) y solo usa transform y clip-path (funciona en Safari). */
  var CY_RF = { l: function (b) { return ['inset(0 calc(100% - ' + b + 'px) 0 0)', b + 'px 50%', 'scaleX(1.045)']; }, r: function (b) { return ['inset(0 0 0 calc(100% - ' + b + 'px))', 'calc(100% - ' + b + 'px) 50%', 'scaleX(1.045)']; }, t: function (b) { return ['inset(0 0 calc(100% - ' + b + 'px) 0)', '50% ' + b + 'px', 'scaleY(1.045)']; }, b: function (b) { return ['inset(calc(100% - ' + b + 'px) 0 0 0)', '50% calc(100% - ' + b + 'px)', 'scaleY(1.045)']; } };
  function cyRfNivel(lado, bandas) { var w = document.createElement('cy-rf'), c = document.createElement('cy-rf'), k = CY_RF[lado](bandas[0]); /* v78: etiqueta propia; un div insertado invalidaba por :has() todo el main (1.718 elementos) */
    w.style.cssText = 'display:block;position:absolute;inset:0;clip-path:' + k[0] + ';-webkit-clip-path:' + k[0];
    c.style.cssText = 'display:block;position:absolute;inset:0;background-image:var(--cy-rf-i);background-size:var(--cy-rf-s);background-position:var(--cy-rf-p);background-repeat:no-repeat;transform-origin:' + k[1] + ';transform:' + k[2];
    w.appendChild(c); if (bandas.length > 1) c.appendChild(cyRfNivel(lado, bandas.slice(1))); return w; }
  function cyRefr(ref, lados, filo) { var r = document.createElement('div'); r.setAttribute('data-cy-lente-refr', ''); r.setAttribute('aria-hidden', 'true'); var o = filo ? '-.5px' : '0px', z = filo ? 'calc(100% + 1px)' : '100%';
    r.style.cssText = 'position:absolute;left:' + o + ';top:' + o + ';width:' + z + ';height:' + z + ';pointer-events:none;border-radius:inherit;overflow:hidden;--cy-rf-s:' + ref.style.backgroundSize + ';--cy-rf-p:' + ref.style.backgroundPosition + ';';
    if (ref.style.backgroundImage) r.style.setProperty('--cy-rf-i', ref.style.backgroundImage);
    /* construccion diferida: las franjas se crean cuando la ilustracion se acerca a la ventana (menos trabajo al cargar) */
    r.__cyLados = lados; cyRfIO(r);
    return r; }
  var cyRfObs = null;
  function cyRfArma(r) { if (r.__cyArmado) return; r.__cyArmado = 1; for (var q = 0; q < r.__cyLados.length; q++) if (CY_RF[r.__cyLados[q]]) r.appendChild(cyRfNivel(r.__cyLados[q], [14, 9, 5])); }
  /* v78: armar franjas durante el scroll costaba un fotograma largo (~66 ms a CPU x4 en Como funciona y Home movil, medido en el
     gesto del hero). Medido con traza: el coste no es por lente sino un recalculo de estilo de todo el main (1.718 elementos) que
     disparan las reglas :has() del sitio al insertar nodos, igual para una lente que para todas. Ahora se arman TODAS las pendientes
     de una vez, en tiempo ocioso y con el scroll quieto 200 ms (en la practica, al terminar de cargar), y entran con un fundido. */
  var cyRfCola = [], cyRfUlt = 0, cyRfTm = 0;
  function cyRfBombea() {
    cyRfTm = 0;
    if (!cyRfCola.length) return;
    var quieto = Date.now() - cyRfUlt;
    if (quieto < 200) { cyRfTm = setTimeout(cyRfBombea, 220 - quieto); return; }
    var go = function () {
      cyRfTm = 0;
      if (Date.now() - cyRfUlt < 200) { cyRfTm = setTimeout(cyRfBombea, 220); return; }
      var lote = cyRfCola.splice(0), hechos = [];
      for (var i = 0; i < lote.length; i++) { var r = lote[i]; if (r && r.isConnected && !r.__cyArmado) { r.style.opacity = '0'; cyRfArma(r); hechos.push(r); } }
      if (hechos.length) requestAnimationFrame(function () { for (var j = 0; j < hechos.length; j++) { hechos[j].style.transition = 'opacity .4s cubic-bezier(.2,.7,.2,1)'; hechos[j].style.opacity = '1'; } });
    };
    cyRfTm = 1;
    if (window.requestIdleCallback) requestIdleCallback(go, { timeout: 1500 }); else setTimeout(go, 50);
  }
  function cyRfIO(r) {
    if (!cyRfUlt && !cyRfIO.l) { cyRfIO.l = 1; window.addEventListener('scroll', function () { cyRfUlt = Date.now(); }, { passive: true }); }
    cyRfCola.push(r);
    if (!cyRfTm) cyRfTm = setTimeout(cyRfBombea, 120);
  }
  function cyVelo(mk, inv) { var v = document.createElement('div'); v.setAttribute('data-cy-lente-velo', ''); v.setAttribute('aria-hidden', 'true'); if (inv) v.setAttribute('data-cy-inv', ''); v.style.webkitMaskImage = mk; v.style.maskImage = mk; return v; }
  function frostMock() {
    var ms = document.querySelectorAll('[data-screen-label^="Cap\u00edtulo III,"] cysure-mockup,[data-screen-label^="Cap\u00edtulo IV,"] cysure-mockup,[data-screen-label^="Cap\u00edtulo V,"] cysure-mockup,[data-screen-label^="Cap\u00edtulo VI,"] cysure-mockup');
    for (var q = 0; q < ms.length; q++) {
      var sr = ms[q].shadowRoot; if (!sr) continue;
      if (!sr.__cyFo) { sr.__cyFo = 1; try { new MutationObserver(function () { clearTimeout(frostMock.t); frostMock.t = setTimeout(frostMock, 60); }).observe(sr, { childList: true }); } catch (e) {} }
      var art = sr.querySelector('.art'); if (!art) continue;
      if (!art.querySelector('.cy-frost-art')) { var fd = document.createElement('div'); fd.className = 'cy-frost-art'; fd.setAttribute('aria-hidden', 'true'); art.appendChild(fd); }
      if (!art.querySelector('.cy-frost-velo')) { var fv = document.createElement('div'); fv.className = 'cy-frost-velo'; fv.setAttribute('aria-hidden', 'true'); art.appendChild(fv); } /* v75 */
      if (!art.querySelector('.cy-frost-refr')) { var fr = document.createElement('div'); fr.className = 'cy-frost-refr'; fr.setAttribute('aria-hidden', 'true'); ['l', 'r', 't', 'b'].forEach(function (k) { var par = fr; [14, 9, 5].forEach(function (n) { var w = document.createElement('i'); w.className = 'cy-rf-' + k + n; var bb = document.createElement('b'); w.appendChild(bb); par.appendChild(w); par = bb; }); }); art.insertBefore(fr, art.querySelector('.cy-frost-art')); } /* v76 */
      if (sr.getElementById('cy-frost')) continue;
      var st = document.createElement('style'); st.id = 'cy-frost';
      st.textContent = '.art{overflow:hidden}@supports (mask-image:linear-gradient(#000,#000)) or (-webkit-mask-image:linear-gradient(#000,#000)){.art>.cy-frost-art{position:absolute;inset:0;border-radius:inherit;background:inherit;transform:none;transform-origin:50% 50%;filter:url(#cy-frost-g) saturate(1.04) brightness(1.02);-webkit-mask-image:linear-gradient(90deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px)),linear-gradient(180deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px));mask-image:linear-gradient(90deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px)),linear-gradient(180deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px));pointer-events:none}.art>.cy-frost-velo{position:absolute;inset:0;pointer-events:none;border-radius:inherit;background-color:var(--cy-velo,rgba(255,255,255,.12));background-image:' + CY_GRANO + ';background-size:140px 140px;box-shadow:inset 0 0 0 1px var(--cy-velo-filo,rgba(255,255,255,.34)),inset 0 0 12px var(--cy-velo-brillo,rgba(255,255,255,.15));-webkit-mask-image:linear-gradient(90deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px)),linear-gradient(180deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px));mask-image:linear-gradient(90deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px)),linear-gradient(180deg,rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px,rgba(0,0,0,0) calc(100% - 14px),rgba(0,0,0,0.02) calc(100% - 12.8px),rgba(0,0,0,0.043) calc(100% - 11.6px),rgba(0,0,0,0.073) calc(100% - 10px),rgba(0,0,0,0.109) calc(100% - 8.5px),rgba(0,0,0,0.152) calc(100% - 7px),rgba(0,0,0,0.198) calc(100% - 5.5px),rgba(0,0,0,0.244) calc(100% - 4px),rgba(0,0,0,0.284) calc(100% - 2.4px),rgba(0,0,0,0.314) calc(100% - 1.2px),rgba(0,0,0,0.33) calc(100% - 0px))}.art>.cy-frost-refr{position:absolute;inset:0;pointer-events:none;border-radius:inherit;overflow:hidden;background:inherit}.cy-frost-refr i{position:absolute;inset:0;display:block;background:inherit}.cy-frost-refr b{position:absolute;inset:0;display:block;background:inherit}.cy-rf-l14{clip-path:inset(0 calc(100% - 14px) 0 0)}.cy-rf-l14>b{transform-origin:14px 50%;transform:scaleX(1.045)}.cy-rf-r14{clip-path:inset(0 0 0 calc(100% - 14px))}.cy-rf-r14>b{transform-origin:calc(100% - 14px) 50%;transform:scaleX(1.045)}.cy-rf-t14{clip-path:inset(0 0 calc(100% - 14px) 0)}.cy-rf-t14>b{transform-origin:50% 14px;transform:scaleY(1.045)}.cy-rf-b14{clip-path:inset(calc(100% - 14px) 0 0 0)}.cy-rf-b14>b{transform-origin:50% calc(100% - 14px);transform:scaleY(1.045)}.cy-rf-l9{clip-path:inset(0 calc(100% - 9px) 0 0)}.cy-rf-l9>b{transform-origin:9px 50%;transform:scaleX(1.045)}.cy-rf-r9{clip-path:inset(0 0 0 calc(100% - 9px))}.cy-rf-r9>b{transform-origin:calc(100% - 9px) 50%;transform:scaleX(1.045)}.cy-rf-t9{clip-path:inset(0 0 calc(100% - 9px) 0)}.cy-rf-t9>b{transform-origin:50% 9px;transform:scaleY(1.045)}.cy-rf-b9{clip-path:inset(calc(100% - 9px) 0 0 0)}.cy-rf-b9>b{transform-origin:50% calc(100% - 9px);transform:scaleY(1.045)}.cy-rf-l5{clip-path:inset(0 calc(100% - 5px) 0 0)}.cy-rf-l5>b{transform-origin:5px 50%;transform:scaleX(1.045)}.cy-rf-r5{clip-path:inset(0 0 0 calc(100% - 5px))}.cy-rf-r5>b{transform-origin:calc(100% - 5px) 50%;transform:scaleX(1.045)}.cy-rf-t5{clip-path:inset(0 0 calc(100% - 5px) 0)}.cy-rf-t5>b{transform-origin:50% 5px;transform:scaleY(1.045)}.cy-rf-b5{clip-path:inset(calc(100% - 5px) 0 0 0)}.cy-rf-b5>b{transform-origin:50% calc(100% - 5px);transform:scaleY(1.045)}}';
      sr.appendChild(st);
      var gs = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); gs.setAttribute('width', '0'); gs.setAttribute('height', '0'); gs.setAttribute('aria-hidden', 'true'); gs.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden'; gs.innerHTML = '<filter id="cy-frost-g" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="4" edgeMode="duplicate"/></filter>'; sr.appendChild(gs);
    }
    if (window.customElements && !frostMock.w) { frostMock.w = 1; customElements.whenDefined('cysure-mockup').then(function () { setTimeout(frostMock, 50); setTimeout(frostMock, 1500); }); }
  }

  /* v70: radio visible de una imagen sin radio propio: el del marco que la recorta (padre directo del mismo tamano, overflow no visible,
     radio > 0). El marco pasa a position:relative sin desplazamiento (la maqueta no cambia) para ser el offsetParent: la lente vive dentro,
     hereda el revelado (data-st-rev: opacidad y translateY) y su recorte redondeado, y su bloque contenedor ya no cambia al revelar.
     Por eso esa lente va a left/top 0 y 100 % del marco (el clon a calc(100% + 1px) por el filo de 0,5 px) y no pasa por la diferencia de
     centros: medida en Chromium 991 noche, la imagen aun en scale(.965) del fundido de entrada dejaba la lente 0,6 px baja. */

  /* v71 (29 sep 2026, pedido de Tono): frosted en el contorno de los bloques con ilustracion ([data-cy-vid]). Solo en los lados de la
     imagen que coinciden con el contorno exterior del bloque, para que el frosted de la ilustracion se una con el vidrio del bloque; los
     lados hacia dentro del bloque (p.ej. la division imagen/texto) quedan nitidos. En tiras (carruseles y filas de tarjetas con juntas
     compartidas) las juntas entre tarjetas no son contorno. Esquinas con el radio del bloque solo donde coinciden los dos lados.
     Misma receta que las ilustraciones sueltas (feGaussianBlur 5 duplicate, mascara de 34 px). Clon = div con el currentSrc ya cargado
     (sin descargas nuevas) y la lente sigue el fundido de entrada de la imagen (data-st-img). */
  function lbGrad(dir) { return 'linear-gradient(' + dir + ',rgba(0,0,0,0.33) 0px,rgba(0,0,0,0.314) 1.2px,rgba(0,0,0,0.284) 2.4px,rgba(0,0,0,0.244) 4px,rgba(0,0,0,0.198) 5.5px,rgba(0,0,0,0.152) 7px,rgba(0,0,0,0.109) 8.5px,rgba(0,0,0,0.073) 10px,rgba(0,0,0,0.043) 11.6px,rgba(0,0,0,0.02) 12.8px,rgba(0,0,0,0) 14px)'; }
  /* posicion de maquetacion en la pagina (offsets acumulados): ignora transform (fundido de entrada, revelado por scroll) */
  function lbAbs(el) { var x = 0, y = 0, e = el; while (e) { x += e.offsetLeft + (e !== el ? e.clientLeft : 0); y += e.offsetTop + (e !== el ? e.clientTop : 0); e = e.offsetParent; } return { x: x, y: y }; }
  function lbLados(im, bk) {
    var s = getComputedStyle(bk), T = 2.5, A = lbAbs(im), B = lbAbs(bk);
    var l = A.x - B.x - bk.clientLeft, t = A.y - B.y - bk.clientTop;
    var ld = { l: Math.abs(l) < T, t: Math.abs(t) < T, r: Math.abs(bk.clientWidth - (l + im.offsetWidth)) < T, b: Math.abs(bk.clientHeight - (t + im.offsetHeight)) < T };
    /* juntas: el bloque (o la unidad que lo contiene) es hijo de una tira; los lados pegados a otra unidad no son contorno */
    var p = bk.closest('[data-st-carr],[data-st-pubs],[data-st-blq],[data-st-blqx],[data-cy-covcarr]'), u = bk;
    if (p === bk) p = null;
    if (p) { while (u && u.parentElement !== p) u = u.parentElement; if (!u) p = null; }
    var U = p ? lbAbs(u) : B, uw = u.offsetWidth, uh = u.offsetHeight, bw = bk.offsetWidth, bh = bk.offsetHeight;
    var cL = Math.abs(B.x - U.x) < T, cR = Math.abs((B.x + bw) - (U.x + uw)) < T, cT = Math.abs(B.y - U.y) < T, cB = Math.abs((B.y + bh) - (U.y + uh)) < T;
    if (p) for (var k = 0; k < p.children.length; k++) {
      var c = p.children[k]; if (c === u || (c.classList && c.classList.contains('st-n')) || !c.offsetParent) continue;
      var C = lbAbs(c), cw = c.offsetWidth, ch = c.offsetHeight; bw = uw; bh = uh; B = U;
      var vo = Math.min(C.y + ch, B.y + bh) - Math.max(C.y, B.y) > 10, ho = Math.min(C.x + cw, B.x + bw) - Math.max(C.x, B.x) > 10;
      if (vo && Math.abs(C.x + cw - B.x) <= 2 && cL) ld.l = false;
      if (vo && Math.abs(C.x - (B.x + bw)) <= 2 && cR) ld.r = false;
      if (ho && Math.abs(C.y + ch - B.y) <= 2 && cT) ld.t = false;
      if (ho && Math.abs(C.y - (B.y + bh)) <= 2 && cB) ld.b = false;
    }
    if (!ld.t && !ld.b && !ld.l && !ld.r) return null;
    var bl = bk.clientLeft, bt = bk.clientTop, ri = function (v, w) { return Math.max(0, (parseFloat(v) || 0) - w) + 'px'; };
    ld.rad = [(ld.t && ld.l) ? ri(s.borderTopLeftRadius, bl) : '0px', (ld.t && ld.r) ? ri(s.borderTopRightRadius, bl) : '0px', (ld.b && ld.r) ? ri(s.borderBottomRightRadius, bt) : '0px', (ld.b && ld.l) ? ri(s.borderBottomLeftRadius, bt) : '0px'];
    return ld;
  }
  function lentesBloque(noche, ok) {
    var vj = document.querySelectorAll('[data-cy-lente-blq]');
    if (ok && lbReusa(vj)) return; /* v99 */
    lentesBloque.prev = null; /* v99 */
    for (var q = 0; q < vj.length; q++) { var v = vj[q]; if (v.__ro) v.__ro.disconnect(); if (v.__mo) v.__mo.disconnect(); clearTimeout(v.__t); if (v.parentNode) v.parentNode.removeChild(v); }
    if (!ok) return;
    var bq = [], bRO = null, bRoMap = []; /* v87: insercion y colocacion en lote, ResizeObserver compartido */
    try { bRO = new ResizeObserver(function (ents) { cyLoteAbre(); try { for (var e = 0; e < ents.length; e++) for (var k = 0; k < bRoMap.length; k++) if (bRoMap[k][0] === ents[e].target) bRoMap[k][1](); } finally { cyLoteCierra(); } }); } catch (e) {}
    var ims = document.querySelectorAll('[data-cy-vid] img, [data-cy-covcarr] img, [data-st-carr] img, [data-st-pubs] img, [data-st-blq] img, [data-st-blqx] img'); /* v74: tambien tarjetas de tira sin [data-cy-vid] */
    for (var i = 0; i < ims.length; i++) {
      var im = ims[i];
      if (!im.offsetParent || im.offsetWidth < 150 || im.offsetHeight < 60 || im.hasAttribute('data-cy-lente-lupa') || im.closest('[data-st-hero],nav,footer,cysure-mockup,[data-cy-lente],[data-cy-lente-blq]')) continue;
      if (/\.svg(\?|$)/i.test(im.getAttribute('src') || '')) continue;
      var bk = im.closest('[data-cy-vid]'), par = im.parentElement;
      if (!bk) { var sp = im.closest('[data-cy-covcarr],[data-st-carr],[data-st-pubs],[data-st-blq],[data-st-blqx]'); if (sp) { bk = im; while (bk && bk.parentElement !== sp) bk = bk.parentElement; } } /* v74: la tarjeta de la tira hace de bloque */
      if (!bk || !par) continue;
      var ld = lbLados(im, bk); if (!ld) continue;
      (function (im, par, ld) {
        if (getComputedStyle(par).position === 'static') { bqGuarda(par, 'position'); par.style.setProperty('position', 'relative'); }
        var ci = getComputedStyle(im), ln = document.createElement('div'), cl = document.createElement('div');
        ln.setAttribute('data-cy-lente-blq', ''); ln.setAttribute('aria-hidden', 'true');
        var gs = []; if (ld.l) gs.push(lbGrad('90deg')); if (ld.r) gs.push(lbGrad('270deg')); if (ld.t) gs.push(lbGrad('180deg')); if (ld.b) gs.push(lbGrad('0deg'));
        var mk = gs.join(','), fit = ci.objectFit === 'contain' ? 'contain' : (ci.objectFit === 'fill' ? '100% 100%' : 'cover');
        var rmo = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
        ln.__cySig = lbSig(ld, fit, ci.objectPosition, rmo, !!im.closest('[data-cy-arte="invert"],[data-screen-label="Acto II, La tesis"]')); ln.__cyIm = im; ln.__cyPar = par; /* v99 */
        ln.style.cssText = 'position:absolute;pointer-events:none;z-index:2;overflow:hidden;margin:0;padding:0;border-radius:' + ld.rad.join(' ') + ';transform-origin:50% 55%;transition:' + (rmo ? 'none' : 'opacity .9s cubic-bezier(.2,.7,.2,1),transform 1.1s cubic-bezier(.2,.7,.2,1)') + ';';
        cl.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;transform:none;transform-origin:50% 50%;background-repeat:no-repeat;background-size:' + fit + ';background-position:' + ci.objectPosition + ';filter:url(#cy-frost-f) saturate(1.04) brightness(1.02);-webkit-mask-image:' + mk + ';mask-image:' + mk + ';';
        var lados = []; if (ld.l) lados.push('l'); if (ld.r) lados.push('r'); if (ld.t) lados.push('t'); if (ld.b) lados.push('b');
        ln.appendChild(cyRefr(cl, lados, false)); /* v76 */
        ln.appendChild(cl); ln.appendChild(cyVelo(mk, !!im.closest('[data-cy-arte="invert"],[data-screen-label="Acto II, La tesis"]'))); /* v75: velo; v87: se inserta en lote */
        bq.push({ par: par, ln: ln, run: function () {
        var col = function () { if (cyLote) { cyLoteQ.push({ im: im, ln: ln, col: 1 }); return; } if (!im.isConnected || !ln.isConnected) return; ln.style.left = im.offsetLeft + 'px'; ln.style.top = im.offsetTop + 'px'; ln.style.width = im.offsetWidth + 'px'; ln.style.height = im.offsetHeight + 'px'; };
        var sync = function () { var pe = im.getAttribute('data-st-img') === '1'; ln.style.opacity = pe ? '0' : '1'; ln.style.transform = (pe && !rmo) ? 'scale(.965)' : 'none'; };
        var pon = function () { var u = im.complete && im.naturalWidth ? im.currentSrc : ''; if (u && cl.__u !== u) { cl.__u = u; cl.style.backgroundImage = 'url("' + u + '")'; var rf = ln.querySelector('[data-cy-lente-refr]'); if (rf) rf.style.setProperty('--cy-rf-i', cl.style.backgroundImage); } };
        col(); sync(); pon(); ln.__cyRe = function () { col(); sync(); pon(); }; /* v99 */
        var n = 0, tick = function () { if (!ln.isConnected) return; pon(); col(); if (im.complete && im.naturalWidth && cl.__u === im.currentSrc) return; if (++n < 75) ln.__t = setTimeout(tick, 400); };
        tick();
        im.addEventListener('load', function () { pon(); col(); });
        if (bRO) { bRoMap.push([im, col]); bRoMap.push([par, col]); bRO.observe(im); bRO.observe(par); ln.__ro = bRO; }
        try { var mo = new MutationObserver(function () { sync(); pon(); n = 0; tick(); }); mo.observe(im, { attributes: true, attributeFilter: ['data-st-img', 'src', 'srcset'] }); ln.__mo = mo; } catch (e) {}
        } });
      })(im, par, ld);
    }
    for (var b1 = 0; b1 < bq.length; b1++) bq[b1].par.appendChild(bq[b1].ln);
    cyLoteAbre(); try { for (var b2 = 0; b2 < bq.length; b2++) bq[b2].run(); } finally { cyLoteCierra(); }
    lentesBloque.prev = bq.map(function (x) { return x.ln; }); /* v99 */
    cyRecorta(bq.map(function (x) { return x.ln; }), '[data-cy-covcarr],[data-st-carr],[data-st-pubs],[data-st-blq],[data-st-blqx]', 'blq');
    cyPistas(); /* v88 (N02) */
  }
  /* v99: idempotencia de lentesBloque. Cada pasada de bloques (hasta 6 al cargar) borraba y recreaba todas las lentes de bloque: N
     extracciones + N inserciones en el main (cada insercion invalida el main entero por las reglas :has() del sitio, ver v78), N
     ResizeObserver/MutationObserver nuevos, un listener load mas por imagen, el dither de cy-d1 rehaciendo mascaras y las franjas de
     refraccion rearmandose con fundido. lbReusa mide EXACTAMENTE lo mismo que la pasada v98 (misma seleccion, mismo orden, mismo
     lbLados, mismo position:relative del padre en el mismo punto) y solo reutiliza si cada lente existente coincide con su entrada
     del plan en imagen, padre y firma. Las lentes son capas absolutas sin flujo: estar presentes no cambia ninguna medida, salvo
     como hijas directas de una tira (lbLados recorre los hijos de la tira); en ese caso no se reutiliza nunca. */
  function lbSig(ld, fit, op, rmo, inv) { return [ld.l ? 1 : 0, ld.r ? 1 : 0, ld.t ? 1 : 0, ld.b ? 1 : 0, ld.rad.join(' '), fit, op, rmo ? 1 : 0, inv ? 1 : 0].join('|'); }
  function lbReusa(vj) {
    var LB_TIRA = '[data-cy-covcarr],[data-st-carr],[data-st-pubs],[data-st-blq],[data-st-blqx]', P = lentesBloque.prev; if (!P || !P.length || P.length !== vj.length) return false;
    for (var k = 0; k < P.length; k++) { var x = P[k]; if (!x.isConnected || x.parentNode !== x.__cyPar || !x.__cyRe || x.__cyPar.matches(LB_TIRA)) return false; }
    var ims = document.querySelectorAll('[data-cy-vid] img, [data-cy-covcarr] img, [data-st-carr] img, [data-st-pubs] img, [data-st-blq] img, [data-st-blqx] img'), j = 0;
    for (var i = 0; i < ims.length; i++) {
      var im = ims[i];
      if (!im.offsetParent || im.offsetWidth < 150 || im.offsetHeight < 60 || im.hasAttribute('data-cy-lente-lupa') || im.closest('[data-st-hero],nav,footer,cysure-mockup,[data-cy-lente],[data-cy-lente-blq]')) continue;
      if (/\.svg(\?|$)/i.test(im.getAttribute('src') || '')) continue;
      var bk = im.closest('[data-cy-vid]'), par = im.parentElement;
      if (!bk) { var sp = im.closest(LB_TIRA); if (sp) { bk = im; while (bk && bk.parentElement !== sp) bk = bk.parentElement; } }
      if (!bk || !par) continue;
      var ld = lbLados(im, bk); if (!ld) continue;
      if (getComputedStyle(par).position === 'static') { bqGuarda(par, 'position'); par.style.setProperty('position', 'relative'); }
      var ci = getComputedStyle(im), fit = ci.objectFit === 'contain' ? 'contain' : (ci.objectFit === 'fill' ? '100% 100%' : 'cover');
      var rmo = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      var e = P[j++]; if (!e || e.__cyIm !== im || e.__cyPar !== par || e.__cySig !== lbSig(ld, fit, ci.objectPosition, rmo, !!im.closest('[data-cy-arte="invert"],[data-screen-label="Acto II, La tesis"]'))) return false;
    }
    if (j !== P.length) return false;
    cyLoteAbre(); try { for (var b = 0; b < P.length; b++) P[b].__cyRe(); } finally { cyLoteCierra(); }
    cyRecorta(P, LB_TIRA, 'blq');
    cyPistas();
    return true;
  }
  /* v88 (N02): en WebKit las capas compuestas de la lente (franjas con transform, frosted con filtro) y el backdrop-filter de la tarjeta
     escapan del recorte por border-radius + overflow: la esquina de la imagen se veia recta sobre el contorno redondeado (carrusel del
     blog, Acto VII visible). clip-path:inset(0 round <radios>) si recorta capas compuestas. Se aplica a la lente y a cada ancestro que
     ya recortaba con radio, hasta el bloque; mismos radios calculados, asi que en Chromium no cambia nada. */
  /* v88 (N02): pista del carrusel del blog (Acto VII visible). Las tarjetas van 8 px por dentro de la pista (padding vertical, donde
     viven los rombos de las juntas), asi que el radio de 15 px de la pista solo recortaba ~3 px de la esquina de la tarjeta: al deslizar,
     una tarjeta interior (juntas rectas) llegaba al borde con la esquina practicamente recta, en todos los motores. El recorte es ahora un
     rectangulo redondeado con el radio de la pista ajustado a la caja de las tarjetas, unido a una franja central de alto completo para
     que los rombos sigan enteros. Se recalcula al cambiar de tamano. */
  function cyPistaUna(T) {
    var c = getComputedStyle(T), r = parseFloat(c.borderTopLeftRadius) || 0, pt = parseFloat(c.paddingTop) || 0, pb = parseFloat(c.paddingBottom) || 0, w = T.offsetWidth, h = T.offsetHeight;
    if (!r || !w || !h || (!pt && !pb) || w < 4 * r || h - pt - pb < 2 * r) { if (T.__cyPv && T.style.clipPath === T.__cyPv) { T.style.clipPath = ''; T.style.webkitClipPath = ''; } T.__cyPv = ''; return; }
    var y0 = pt, y1 = h - pb, f = function (n) { return Math.round(n * 100) / 100; };
    var d = 'M' + f(r) + ',' + f(y0) + 'H' + f(w - r) + 'A' + f(r) + ',' + f(r) + ' 0 0 1 ' + f(w) + ',' + f(y0 + r) + 'V' + f(y1 - r) + 'A' + f(r) + ',' + f(r) + ' 0 0 1 ' + f(w - r) + ',' + f(y1) + 'H' + f(r) + 'A' + f(r) + ',' + f(r) + ' 0 0 1 0,' + f(y1 - r) + 'V' + f(y0 + r) + 'A' + f(r) + ',' + f(r) + ' 0 0 1 ' + f(r) + ',' + f(y0) + 'Z' +
            'M' + f(r) + ',0H' + f(w - r) + 'V' + f(h) + 'H' + f(r) + 'Z';
    var v = "path('" + d + "')"; if (T.__cyPv === v) return;
    T.style.clipPath = v; T.style.webkitClipPath = v; T.__cyPv = T.style.clipPath;
  }
  function cyPistas() {
    var P = document.querySelectorAll('[data-st-pubs]');
    for (var i = 0; i < P.length; i++) { var T = P[i]; if (!T.__cyPro) { T.__cyPro = 1; try { new ResizeObserver((function (T) { return function () { cyPistaUna(T); }; })(T)).observe(T); } catch (e) {} } cyPistaUna(T); }
  }
  function cyRadios(c) { return c.borderTopLeftRadius + ' ' + c.borderTopRightRadius + ' ' + c.borderBottomRightRadius + ' ' + c.borderBottomLeftRadius; }
  function cyRecorta(lns, tope, clave) {
    var R = cyRecorta.R || (cyRecorta.R = {}), cyRecortados = R[clave] || [];
    for (var q = 0; q < cyRecortados.length; q++) { var o = cyRecortados[q]; if (o.el.style.clipPath === o.v) { o.el.style.clipPath = ''; o.el.style.webkitClipPath = ''; } }
    cyRecortados = R[clave] = [];
    var pon = function (el, c) { var rd = cyRadios(c); if (!/[1-9]/.test(rd) || (c.clipPath && c.clipPath !== 'none')) return; var v = 'inset(0px round ' + rd + ')'; el.style.clipPath = v; el.style.webkitClipPath = v; cyRecortados.push({ el: el, v: el.style.clipPath }); };
    var vis = [];
    for (var i = 0; i < lns.length; i++) {
      var ln = lns[i]; if (!ln || !ln.isConnected) continue;
      var cs = getComputedStyle(ln); pon(ln, cs); var rf = ln.querySelector('[data-cy-lente-refr]'); if (rf) pon(rf, getComputedStyle(rf));
      var e = ln.parentElement;
      while (e && e !== document.body) {
        if (tope && e.matches(tope)) break; /* la pista se recorta aparte (cyPistas) */
        if (vis.indexOf(e) < 0) { vis.push(e); var c = getComputedStyle(e); if (c.overflowX !== 'visible' || c.overflowY !== 'visible') pon(e, c); }
        if (!tope) break; e = e.parentElement;
      }
    }
  }
  /* v74: el padre de la imagen puede alojar la lente (position no estatica) sin mover nada: ningun descendiente posicionado
     (incluida la imagen) tomaba como referencia un ancestro por encima del padre */
  function lenteHost(im) {
    var p = im.parentElement; if (!p || !im.offsetParent) return false;
    if (getComputedStyle(p).position !== 'static') return im.offsetParent === p;
    var ds = p.querySelectorAll('*');
    for (var q = 0; q < ds.length; q++) { var po = getComputedStyle(ds[q]).position; if ((po === 'absolute' || po === 'fixed') && !ds[q].hasAttribute('data-cy-lente')) return false; }
    bqGuarda(p, 'position'); p.style.setProperty('position', 'relative');
    return im.offsetParent === p;
  }
  function lenteMarco(im) {
    var p = im.parentElement; if (!p || !im.offsetParent) return '';
    var cp = getComputedStyle(p), r = cp.borderTopLeftRadius;
    if (r === '0px' || cp.overflowX === 'visible' || Math.abs(p.clientWidth - im.offsetWidth) > 1 || Math.abs(p.clientHeight - im.offsetHeight) > 1) return '';
    if (cp.position === 'static') p.style.setProperty('position', 'relative');
    return r;
  }
  /* v87: colocacion en lote. Mientras cyLote esta abierto, lenteColoca/col se encolan y cyLoteCierra las resuelve en cuatro fases
     (lee tamanos, escribe tamanos, lee centros, escribe posiciones): dos recalculos de estilo por lote en vez de dos por lente.
     Las lentes son capas absolutas sin eventos: escribir una no mueve ni la imagen ni otra lente, asi que el resultado es el mismo. */
  var cyLote = 0, cyLoteQ = [];
  function cyLoteAbre() { cyLote++; }
  function cyLoteCierra() {
    if (--cyLote > 0) return;
    var Q = cyLoteQ; cyLoteQ = []; var vis = [], A = [], C = [], i, x;
    for (i = 0; i < Q.length; i++) { x = Q[i]; if (vis.indexOf(x.ln) < 0) { vis.push(x.ln); if (x.col) C.push(x); else A.push(x); } }
    var B = [];
    for (i = 0; i < A.length; i++) { x = A[i]; x.ln.__col = (function (im, ln, cl) { return function () { lenteColoca(im, ln, cl); }; })(x.im, x.ln, x.cl);
      if (x.ln.__fijo || !x.im.isConnected || !x.ln.isConnected || !x.im.offsetParent) continue; x.w = x.im.offsetWidth; x.h = x.im.offsetHeight; B.push(x); }
    for (i = 0; i < C.length; i++) { x = C[i]; if (!x.im.isConnected || !x.ln.isConnected) { x.no = 1; continue; } x.l = x.im.offsetLeft; x.t = x.im.offsetTop; x.w = x.im.offsetWidth; x.h = x.im.offsetHeight; }
    for (i = 0; i < B.length; i++) { x = B[i]; var w = x.w, h = x.h, ln = x.ln, cl = x.cl;
      if (ln.style.width !== w + 'px') ln.style.width = w + 'px';
      if (ln.style.height !== h + 'px') ln.style.height = h + 'px';
      if (cl && w && h && cl.style.width !== w + 'px') { cl.style.width = w + 'px'; cl.style.height = h + 'px'; } }
    for (i = 0; i < C.length; i++) { x = C[i]; if (x.no) continue; x.ln.style.left = x.l + 'px'; x.ln.style.top = x.t + 'px'; x.ln.style.width = x.w + 'px'; x.ln.style.height = x.h + 'px'; }
    for (i = 0; i < B.length; i++) { x = B[i]; x.ir = x.im.getBoundingClientRect(); x.lr = x.ln.getBoundingClientRect(); }
    for (i = 0; i < B.length; i++) { x = B[i]; var ir = x.ir, lr = x.lr;
      var dx = (ir.left + ir.width / 2) - (lr.left + lr.width / 2), dy = (ir.top + ir.height / 2) - (lr.top + lr.height / 2);
      if (Math.abs(dx) > 0.5) x.ln.style.left = ((parseFloat(x.ln.style.left) || 0) + dx) + 'px';
      if (Math.abs(dy) > 0.5) x.ln.style.top = ((parseFloat(x.ln.style.top) || 0) + dy) + 'px'; }
  }
  function lenteColoca(im, ln, cl) {
    if (cyLote) { cyLoteQ.push({ im: im, ln: ln, cl: cl }); return; } /* v87 */
    ln.__col = function () { lenteColoca(im, ln, cl); };
    if (ln.__fijo) return; /* v70: la lente de las Atalayas ocupa el marco al 100 % (mismo bloque contenedor que la imagen): nada que recolocar */
    if (!im.isConnected || !ln.isConnected || !im.offsetParent) return;
    var w = im.offsetWidth, h = im.offsetHeight;
    if (ln.style.width !== w + 'px') ln.style.width = w + 'px';
    if (ln.style.height !== h + 'px') ln.style.height = h + 'px';
    if (cl && w && h && cl.style.width !== w + 'px') { cl.style.width = w + 'px'; cl.style.height = h + 'px'; }
    var ir = im.getBoundingClientRect(), lr = ln.getBoundingClientRect();
    var dx = (ir.left + ir.width / 2) - (lr.left + lr.width / 2), dy = (ir.top + ir.height / 2) - (lr.top + lr.height / 2);
    if (Math.abs(dx) > 0.5) ln.style.left = ((parseFloat(ln.style.left) || 0) + dx) + 'px';
    if (Math.abs(dy) > 0.5) ln.style.top = ((parseFloat(ln.style.top) || 0) + dy) + 'px';
  }
  function lentesRevisa() {
    var L = document.querySelectorAll('[data-cy-lente]'), vh = window.innerHeight || 800;
    for (var q = 0; q < L.length; q++) { if (!L[q].__col) continue; var r = L[q].getBoundingClientRect(); if (r.bottom > -vh && r.top < 2 * vh) L[q].__col(); }
  }

  function mountBloques() {
    if (bqMount) { pasadaBloques(); return; }
    temaBase = document.documentElement.getAttribute('data-cy-theme') === 'noche';
    bqMount = { tm: null, tm2: null, firma: '' };
    pasadaBloques();
    /* v42: la pasada de 60 ms solo usa la cache (cambio visible inmediato, sin medir). La segunda pasada espera a que
       termine la fundida (.cy-theme-anim fuera) Y a que la pestana este visible, y entonces re-mide la cache
       (bqRemide). Si la pestana sigue oculta pasados 6 s, se hace la pasada con cache y la re-medida queda pendiente
       para visibilitychange. */
    var remedida = function () {
      clearTimeout(bqMount.tm2);
      var t0 = Date.now();
      var tick = function () {
        var visible = document.visibilityState !== 'hidden';
        if (visible) bqCongelado = false;
        if (coloresFiables() && visible && !hayTransiciones()) { /* v51 */
          bqRemide = true; bqPendiente = false;
          try { pasadaBloques(); } finally { bqRemide = false; }
          if (bqPendiente) bqMount.tm2 = setTimeout(tick, 400);
          return;
        }
        if (Date.now() - t0 > 6000) { bqPendiente = true; pasadaBloques(); return; }
        bqMount.tm2 = setTimeout(tick, 120);
      };
      bqMount.tm2 = setTimeout(tick, 120);
    };
    var re = function (tema) {
      clearTimeout(bqMount.tm); clearTimeout(bqMount.tm2);
      if (tema && document.visibilityState === 'hidden') bqCongelado = true;
      if (tema && bqMount.firma) { /* v56: con cache, la pasada rapida va en el mismo tick que el atributo (antes del siguiente frame) */
        pasadaBloques(true); remedida(); return;
      }
      bqMount.tm = setTimeout(function () {
        pasadaBloques(!!tema && !!bqMount.firma); /* v44: rapida solo tras un cambio de tema y con una pasada completa previa */
        if (tema) remedida();
        else bqMount.tm2 = setTimeout(function () { if (firmaLayout() !== bqMount.firma) pasadaBloques(); }, 500);
      }, 60);
    };
    new MutationObserver(function () { re(true); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-cy-theme'] });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState !== 'visible') { if (document.documentElement.classList.contains('cy-theme-anim')) bqCongelado = true; return; }
      if (bqPendiente || bqCongelado) { bqCongelado = false; remedida(); }
    });
    var lw = window.innerWidth, lh = window.innerHeight;
    window.addEventListener('resize', function () {
      var w = window.innerWidth, h = window.innerHeight;
      if (w === lw && Math.abs(h - lh) < 120) return; /* iOS: la barra de URL dispara resize sin cambiar el ancho */
      lw = w; lh = h; re(false);
    }, { passive: true });
    window.addEventListener('load', function () { re(false); });
    window.addEventListener('pageshow', function () { re(false); });
    setTimeout(pasadaBloques, 900);
    setTimeout(pasadaBloques, 2500);
  }


  /* ---------- v12: indicadores automáticos ---------- */
  /* Toño (2 sep): "los indicadores del carrusel deben aparecer siempre en cualquier bloque que se corte
     en pantalla en móvil y tablet". Cualquier [data-st-blq] o [data-st-carr] con scroll horizontal y sin
     fila de puntos recibe una fila clonada de la primera [data-st-dots] de la página (mismo estilo). */
  var autoN = 0;
  function autoDots() {
    var tpl = document.querySelector('[data-st-dots]');
    var scs = document.querySelectorAll('[data-st-blq],[data-st-carr]');
    for (var i = 0; i < scs.length; i++) {
      var sc = scs[i];
      if (sc.offsetParent === null) continue;
      var key = sc.getAttribute('data-st-carr');
      if (key && !sc.__dotsRow && document.querySelector('[data-st-dots="' + key + '"]')) continue;
      /* v21: si la seccion ya trae su propio control de puntos (el bloque de publicaciones lo tiene con flechas),
         no se clona otra fila: eso producia el doble indicador. */
      if (!sc.__dotsRow) {
        var secD = sc.closest ? sc.closest('[data-screen-label]') : null;
        if (secD && secD.querySelector('[data-st-dots]')) continue;
      }
      var cs = getComputedStyle(sc);
      var over = sc.scrollWidth > sc.clientWidth + 4 && /auto|scroll/.test(cs.overflowX);
      var row = sc.__dotsRow;
      if (!over) { if (row) row.style.display = 'none'; continue; }
      var kids = Array.prototype.slice.call(sc.children).filter(function (k) { return !k.classList.contains('st-n') && k.getBoundingClientRect().width > 20; });
      if (kids.length < 2) { if (row) row.style.display = 'none'; continue; }
      if (row) {
        row.style.display = '';
        if (row.querySelectorAll('[data-st-dot]').length !== kids.length) { row.remove(); sc.__dotsRow = null; row = null; } else continue;
      }
      if (!key) { key = 'auto' + (++autoN); sc.setAttribute('data-st-carr', key); }
      var dotTpl = tpl ? tpl.querySelector('[data-st-dot]') : null;
      row = tpl ? tpl.cloneNode(false) : document.createElement('div');
      row.setAttribute('data-st-dots', key);
      row.setAttribute('aria-hidden', 'true');
      if (!tpl) row.style.cssText = 'display:flex;justify-content:center;gap:6px;padding:14px 0 0';
      for (var k = 0; k < kids.length; k++) {
        var dot = dotTpl ? dotTpl.cloneNode(false) : document.createElement('span');
        dot.setAttribute('data-st-dot', '');
        if (!dotTpl) dot.style.cssText = 'width:6px;height:6px;border-radius:3px;background:currentColor;opacity:.35;transition:all .2s';
        if (k === 0) dot.setAttribute('data-on', ''); else dot.removeAttribute('data-on');
        row.appendChild(dot);
      }
      sc.parentNode.insertBefore(row, sc.nextSibling);
      sc.__dotsRow = row;
      (function (sc2, row2, n) {
        var upd = function () {
          var idx = Math.round(sc2.scrollLeft / (sc2.scrollWidth / n));
          var ds = row2.querySelectorAll('[data-st-dot]');
          for (var j = 0; j < ds.length; j++) { j === Math.min(idx, ds.length - 1) ? ds[j].setAttribute('data-on', '') : ds[j].removeAttribute('data-on'); }
        };
        var t = null;
        sc2.addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(upd, 60); }, { passive: true });
        upd();
      })(sc, row, kids.length);
    }
  }
  var autoDotsMount = false;
  function mountAutoDots() {
    autoDots();
    if (autoDotsMount) return; /* v33 T8: listener y timers una sola vez (setup corre 3 veces) */
    autoDotsMount = true;
    var tm = null;
    window.addEventListener('resize', function () { clearTimeout(tm); tm = setTimeout(autoDots, 120); }, { passive: true });
    setTimeout(autoDots, 900);
    setTimeout(autoDots, 2500);
  }


  /* ---------- v16: esquinas de los bloques con rombos ---------- */
  /* Toño (2 sep): "hay un error en las curvas". El contenedor [data-st-blq] tiene radio 18px + borde 1px, pero solo la
     primera tarjeta traía radio; las demás eran cuadradas y pisaban la curva en las esquinas exteriores. Se calcula por
     posición real (fila, rejilla 2x2, 3, 4, carrusel) y se asigna a cada tarjeta el radio que le toca en cada esquina. */
  /* v98: posicion de maqueta (sin transform) por la cadena de offsetParent, sumando el borde de cada offsetParent */
  function esqOff(e) { var x = 0, y = 0; while (e) { x += e.offsetLeft; y += e.offsetTop; var p = e.offsetParent; if (p) { x += p.clientLeft; y += p.clientTop; } e = p; } return [x, y]; }
  function esquinasBlq() {
    var blqs = document.querySelectorAll('[data-st-blq],[data-st-blqx]');
    /* v33 T8 (regla existente reescrita por fases, mismo calculo): todas las medidas primero (un layout), despues los radios.
       Antes cada tarjeta e imagen se medía tras escribir el radio de la anterior. */
    var writes = [];
    for (var i = 0; i < blqs.length; i++) {
      var b = blqs[i];
      if (b.offsetParent === null) continue;
      var cs = getComputedStyle(b);
      var rad = parseFloat(cs.borderTopLeftRadius) || 0;
      var bw = parseFloat(cs.borderTopWidth) || 0;
      var inner = Math.max(0, rad - bw);
      if (inner <= 0) continue; /* v18: contenedor sin radio (carruseles mb): las tarjetas conservan su radio CSS */
      var br = b.getBoundingClientRect();
      var L = br.left + bw, T = br.top + bw, Rr = br.right - bw, B = br.bottom - bw;
      var kids = b.children;
      /* v23: los rombos que inserta rombosCarrusel van al final, asi que el indice de la ultima tarjeta
         se calcula saltandolos (antes se asumia que era el penultimo hijo como mucho). */
      var ultima = -1, primera = -1;
      for (var u = 0; u < kids.length; u++) { if (!kids[u].classList.contains('st-n')) { ultima = u; if (primera < 0) primera = u; } }
      var tira = /auto|scroll/.test(cs.overflowX) && b.scrollWidth > b.clientWidth + 4;
      for (var k = 0; k < kids.length; k++) {
        var c = kids[k];
        if (c.classList.contains('st-n')) continue;
        var r = c.getBoundingClientRect();
        if (r.width < 10) continue;
        var tl = (Math.abs(r.left - L) < 2 && Math.abs(r.top - T) < 2) ? inner : 0;
        var tr = (Math.abs(r.right - Rr) < 2 && Math.abs(r.top - T) < 2) ? inner : 0;
        var brr = (Math.abs(r.right - Rr) < 2 && Math.abs(r.bottom - B) < 2) ? inner : 0;
        var bl = (Math.abs(r.left - L) < 2 && Math.abs(r.bottom - B) < 2) ? inner : 0;
        /* carrusel horizontal: el contenedor hace scroll; las tarjetas interiores no tocan el borde derecho visible.
           v30: la primera tarjeta lleva SIEMPRE la curva izquierda y la ultima la derecha, sin depender de la posicion
           del scroll (antes, con el carrusel avanzado, la primera tarjeta quedaba con esquinas rectas). */
        if (tira) {
          tl = 0; bl = 0; tr = 0; brr = 0;
          if (k === primera) { tl = inner; bl = inner; }
          if (k === ultima) { tr = inner; brr = inner; }
          /* v71: sin excepcion para el Blog movil: esquinas de tira como los demas carruseles */
        }
        writes.push({ el: c, v: tl + 'px ' + tr + 'px ' + brr + 'px ' + bl + 'px' });
        /* imágenes (portadas del blog, ilustraciones) que tocan las esquinas de la tarjeta: mismo radio en esa esquina */
        var ims = c.querySelectorAll('img');
        for (var m = 0; m < ims.length; m++) {
          var im = ims[m], ir = im.getBoundingClientRect();
          /* v60: el revelado de portadas escala la imagen (matrix 0.965) hasta que entra en pantalla, y esta medida la dejaba en radio 0:
             esquina viva en Blog de Home a 1440. Si la tarjeta es su offsetParent, se mide la caja de maqueta, que no depende del transform. */
          /* v98: la lente v74 pone position:relative en el marco de la portada, que pasa a ser su offsetParent; la condicion offsetParent === c
             dejaba de cumplirse y se volvia a medir con el revelado puesto (0 en la primera y la ultima del Blog de Home a 1440). Se mide la caja
             de maqueta por la cadena de offsetParent (ignora transform) relativa a la tarjeta; con offsetParent === c da lo mismo que v60. */
          if (im.offsetParent && c.contains(im)) {
            var oa = esqOff(im), ob = esqOff(c), ox = oa[0] - ob[0] - c.clientLeft, oy = oa[1] - ob[1] - c.clientTop;
            var cl = r.left + c.clientLeft, ct = r.top + c.clientTop;
            ir = { left: cl + ox, top: ct + oy, right: cl + ox + im.offsetWidth, bottom: ct + oy + im.offsetHeight, width: im.offsetWidth, height: im.offsetHeight };
            if (Math.abs(ir.right - (r.right - c.clientLeft)) < 2) ir.right = r.right;
            if (Math.abs(ir.bottom - (r.bottom - c.clientTop)) < 2) ir.bottom = r.bottom;
            if (Math.abs(ir.left - cl) < 2) ir.left = r.left;
            if (Math.abs(ir.top - ct) < 2) ir.top = r.top;
          }
          if (ir.width < 40 || ir.height < 40) continue;
          var itl = (Math.abs(ir.left - r.left) < 2 && Math.abs(ir.top - r.top) < 2) ? tl : 0;
          var itr = (Math.abs(ir.right - r.right) < 2 && Math.abs(ir.top - r.top) < 2) ? tr : 0;
          var ibr = (Math.abs(ir.right - r.right) < 2 && Math.abs(ir.bottom - r.bottom) < 2) ? brr : 0;
          var ibl = (Math.abs(ir.left - r.left) < 2 && Math.abs(ir.bottom - r.bottom) < 2) ? bl : 0;
          writes.push({ el: im, v: itl + 'px ' + itr + 'px ' + ibr + 'px ' + ibl + 'px' });
        }
      }
    }
    for (var w = 0; w < writes.length; w++) {
      var W = writes[w];
      if (W.el.style.getPropertyValue('border-radius') !== W.v) W.el.style.setProperty('border-radius', W.v, 'important');
    }
  }
  var esquinasMount = false;
  function mountEsquinas() {
    esquinasBlq();
    if (esquinasMount) return; /* v33 T8: listener y timers una sola vez (setup corre 3 veces) */
    esquinasMount = true;
    var tm = null;
    window.addEventListener('resize', function () { clearTimeout(tm); tm = setTimeout(esquinasBlq, 120); }, { passive: true });
    setTimeout(esquinasBlq, 900);
    setTimeout(esquinasBlq, 2500);
  }

  var bandas = null;
  function mountBandas() {
    if (bandas) { bandas.resize(); return; }
    var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-st-band]'));
    if (!nodes.length) return;
    var bands = nodes.map(function (cv, bi) {
      var host = cv.parentElement || cv;
      var st = { cv: cv, host: host, ctx: cv.getContext('2d'), bi: bi, sand: false, /* v25: una sola paleta de bandas (Toño, 3 sep) */ seed: 20260826 + bi * 977, stars: [], figs: [], mouse: { x: -9999, y: -9999, in: false }, W: 0, H: 0, on: true, met: null, next: 220 + bi * 160 };
      st.onMove = function (e) { var r = cv.getBoundingClientRect(); st.mouse.x = e.clientX - r.left; st.mouse.y = e.clientY - r.top; st.mouse.in = true; };
      st.onLeave = function () { st.mouse.in = false; st.mouse.x = -9999; st.mouse.y = -9999; };
      host.addEventListener('mousemove', st.onMove);
      host.addEventListener('mouseleave', st.onLeave);
      host.style.cursor = 'crosshair';
      return st;
    });
    var build = function (st) {
      var r = st.cv.getBoundingClientRect();
      if (!r.width || !r.height) return;
      if (st.stars.length && Math.round(st.W) === Math.round(r.width) && Math.round(st.H) === Math.round(r.height)) return; /* v97: misma caja, nada que rehacer (antes de tocar el lienzo) */
      var dpr = Math.min(2, window.devicePixelRatio || 1); /* v33 N04: antes 1.6 (borroso en 2x) */
      st.cv.width = Math.round(r.width * dpr); st.cv.height = Math.round(r.height * dpr);
      st.W = r.width; st.H = r.height; st.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      st.k = (window.innerWidth || 1024) >= 992 ? 1 : Math.max(0.42, Math.min(1, st.H / 110)); /* v97b: escala del dibujo solo <992 (38 px en movil = 0,42); >=992 identico a v96 */
      var sd = st.seed; var R = function () { sd = (sd * 1664525 + 1013904223) % 4294967296; return sd / 4294967296; };
      st.stars = [];
      var ns = Math.max(150, Math.round(st.W / 3.2));
      for (var i = 0; i < ns; i++) {
        var bx = R() * st.W, by = 3 + R() * (st.H - 6);
        st.stars.push({ bx: bx, by: by, x: bx, y: by, r: 0.5 + R() * 1.5, d: 0.25 + R() * 0.75, ph: R() * 6.28, sp: 0.4 + R() * 0.9, c: R() });
      }
      var esEN = function () { return (document.documentElement.getAttribute('data-cy-lang-boot') || 'es') === 'en'; };
      var fh = st.H * (st.k < 0.7 ? 0.74 : 0.56), fy = st.H * (st.k < 0.7 ? 0.12 : 0.10); /* v97: figuras mas altas en bandas bajas */
      var nf = Math.max(3, Math.round(st.W / 330));
      st.figs = [];
      for (var f = 0; f < nf; f++) {
        var F = ODY[(st.bi * 3 + f) % ODY.length];
        var fw = fh * F.ar;
        var cx = (f + 0.5) / nf * st.W + (R() - 0.5) * 40;
        var x0 = cx - fw / 2;
        var pts = F.p.map(function (q) { var bx2 = x0 + q[0] * fw, by2 = fy + q[1] * fh; return { bx: bx2, by: by2, x: bx2, y: by2, ph: R() * 6.28 }; });
        st.figs.push({ pts: pts, edges: F.e, b: F.b, n: F.n, en: F.en, cx: cx, ly: fy + fh + 15, esEN: esEN });
      }
    };
    var paleta = function (st, noche) {
      if (st.sand) return noche
        ? { dim: '92,76,34', mid: '160,140,96', hot: '201,181,142', acc: '176,138,66', a: 1 }
        : { dim: '186,168,130', mid: '138,118,72', hot: '92,76,34', acc: '176,138,66', a: 0.95 };
      return noche
        ? { dim: '110,134,232', mid: '159,176,255', hot: '228,234,255', acc: '159,176,255', a: 1 } /* v62 P17: trazo del color local del divisor de tag (serif de noche) */
        : { dim: '158,172,200', mid: '90,108,148', hot: '41,72,123', acc: '41,72,123', a: 0.95 }; /* v62 P17: serif de dia #29487B, antes royal */
    };
    var pinta = function (st, t, noche) {
      var P = paleta(st, noche), ctx = st.ctx, W = st.W, H = st.H;
      if (!W || !H) return;
      ctx.clearRect(0, 0, W, H);
      var cx = W / 2, cy = H / 2;
      var px = st.mouse.in ? (st.mouse.x - cx) / cx : 0, py = st.mouse.in ? (st.mouse.y - cy) / cy : 0;
            st.stars.forEach(function (s2) {
        var tx = s2.bx + px * 10 * s2.d, ty = s2.by + py * 5 * s2.d;
        var dx = tx - st.mouse.x, dy = ty - st.mouse.y, dist = Math.hypot(dx, dy);
        var near = st.mouse.in && dist < 110;
        if (near) { var f = 1 - dist / 110; var k = f * f * 24 / (dist || 1); tx += dx * k; ty += dy * k; }
        s2.x += (tx - s2.x) * 0.09; s2.y += (ty - s2.y) * 0.09;
        var tw = 0.55 + 0.45 * Math.sin(t * s2.sp + s2.ph);
        ctx.globalAlpha = Math.min(1, (0.16 + 0.62 * tw * s2.d + (near ? 0.35 : 0)) * P.a);
        ctx.fillStyle = 'rgb(' + (s2.c > 0.86 ? P.hot : s2.c > 0.5 ? P.mid : P.dim) + ')';
        ctx.beginPath(); ctx.arc(s2.x, s2.y, (s2.r + (near ? 0.6 : 0)) * Math.max(0.6, st.k || 1), 0, 6.283); ctx.fill();
      });
ctx.globalAlpha = 1;
      st.figs.forEach(function (g) {
        g.pts.forEach(function (n) {
          var tx = n.bx + px * 16, ty = n.by + py * 8;
          var dx = tx - st.mouse.x, dy = ty - st.mouse.y, dist = Math.hypot(dx, dy);
          n.near = st.mouse.in && dist < 130;
          if (n.near) { var f = 1 - dist / 130; var k = f * f * 30 / (dist || 1); tx += dx * k; ty += dy * k; }
          n.x += (tx - n.x) * 0.11; n.y += (ty - n.y) * 0.11;
        });
        var K = st.k || 1; ctx.lineWidth = 1.6 * Math.max(0.7, K); ctx.strokeStyle = 'rgba(' + P.acc + ',' + (K < 0.7 ? '.5' : '.34') + ')';
        ctx.beginPath(); g.edges.forEach(function (e) { ctx.moveTo(g.pts[e[0]].x, g.pts[e[0]].y); ctx.lineTo(g.pts[e[1]].x, g.pts[e[1]].y); }); ctx.stroke();
        g.pts.forEach(function (n, i) {
          var br = i === g.b, tw = 0.72 + 0.28 * Math.sin(t * 0.9 + n.ph);
          var RR = ((n.near ? 14 : 9) + (br ? 4 : 0)) * K;
          var gg = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, RR);
          gg.addColorStop(0, 'rgba(' + P.acc + ',' + ((n.near ? 0.34 : br ? 0.26 : 0.15) * tw).toFixed(3) + ')');
          gg.addColorStop(1, 'rgba(' + P.acc + ',0)');
          ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(n.x, n.y, RR, 0, 6.283); ctx.fill();
          ctx.fillStyle = 'rgb(' + (n.near || br ? P.hot : P.mid) + ')';
          ctx.beginPath(); ctx.arc(n.x, n.y, (n.near ? 3.1 : br ? 2.8 : 2.1) * Math.max(0.55, K), 0, 6.283); ctx.fill();
          if (br) { var c6 = 6.5 * Math.max(0.6, K); ctx.strokeStyle = 'rgba(' + P.acc + ',.75)'; ctx.beginPath(); ctx.moveTo(n.x - c6, n.y); ctx.lineTo(n.x + c6, n.y); ctx.moveTo(n.x, n.y - c6); ctx.lineTo(n.x, n.y + c6); ctx.stroke(); }
        });
      });
      if (st.met) {
        st.met.x += st.met.vx; st.met.y += st.met.vy; st.met.life -= 1;
        var mg = ctx.createLinearGradient(st.met.x, st.met.y, st.met.x - st.met.vx * 9, st.met.y - st.met.vy * 9);
        mg.addColorStop(0, 'rgba(' + P.hot + ',.8)'); mg.addColorStop(1, 'rgba(' + P.acc + ',0)');
        ctx.strokeStyle = mg; ctx.lineWidth = 1.3;
        ctx.beginPath(); ctx.moveTo(st.met.x, st.met.y); ctx.lineTo(st.met.x - st.met.vx * 9, st.met.y - st.met.vy * 9); ctx.stroke();
        if (st.met.life <= 0 || st.met.x > W + 40 || st.met.y > H + 20) st.met = null;
      } else if (--st.next <= 0) {
        st.next = 320 + Math.random() * 420;
        st.met = { x: W * (0.06 + Math.random() * 0.6), y: Math.random() * H * 0.45, vx: 3.4 + Math.random() * 2.2, vy: 0.4 + Math.random() * 0.8, life: 44 };
      }
    };
    bands.forEach(build);
    try { if (window.ResizeObserver) { var roB = new ResizeObserver(function () { bands.forEach(build); if (RM) todo(2); }); bands.forEach(function (st) { roB.observe(st.host); }); } } catch (eB) {} /* v97 */
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { var st = null; bands.forEach(function (b) { if (b.host === e.target) st = b; }); if (st) st.on = e.isIntersecting; }); });
    bands.forEach(function (st) { io.observe(st.host); });
    var tema = function () { return document.documentElement.getAttribute('data-cy-theme') === 'noche'; };
    var todo = function (t) { var n = tema(); bands.forEach(function (st) { pinta(st, t, n); }); };
    var t = 0, raf = 0, dead = false;
    var loop = function () { if (dead) return; raf = requestAnimationFrame(loop); t += 0.032; var n = tema(); bands.forEach(function (st) { if (st.on) pinta(st, t, n); }); };
    if (!RM) loop(); else todo(2);
    bandas = {
      resize: function () { bands.forEach(build); if (RM) todo(2); },
      tema: function () { if (RM) todo(2); }
    };
  }

  /* ---------- cielo del footer ---------- */
  var cielos = [];
  function mountCielo() {
    document.querySelectorAll('[data-stf-cielo]').forEach(function (cv) {
      if (cv.dataset.odyBound) return;
      var host = cv.closest('[data-stf-cielo-host]') || cv.parentElement;
      if (!host) return;
      cv.dataset.odyBound = '1';
      var anim = !RM;
      var sd = 20261005, rnd = function (a, b) { sd = (sd * 1664525 + 1013904223) % 4294967296; return a + sd / 4294967296 * (b - a); }; /* v97: semilla */
      var ctx = cv.getContext('2d');
      var W = 0, H = 0, raf = 0, dead = false, on = true, t = 0;
      var stars = [], nodeGroups = [], meteoro = null, proxMeteoro = 240;
      var mouse = { x: -9999, y: -9999, in: false };
      var grupos = [
        { n: 'OSA MAYOR', en: 'URSA MAJOR', b: 6, lp: [-34, -16], p: [[.10, .44], [.17, .32], [.24, .25], [.31, .22], [.325, .46], [.435, .43], [.445, .20]], e: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]] },
        { n: 'POLARIS', en: 'POLARIS', b: 0, lp: [0, -16], p: [[.545, .14], [.595, .22], [.645, .30], [.695, .385], [.745, .345], [.775, .46], [.72, .50]], e: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]] },
        { n: 'CYGNUS', en: 'CYGNUS', b: 2, lp: [-20, -16], p: [[.815, .64], [.875, .50], [.935, .37], [.845, .26], [.91, .72]], e: [[0, 1], [1, 2], [3, 1], [1, 4]] },
      ];
      var guia = [0, 6, 1, 0];
      var rotBox = null; /* v33 Q12: caja del rotulo HTML (span 'LA CONSTELACION DE LA TRAVESIA') en coordenadas del canvas */
      var build = function () {
        var r = cv.getBoundingClientRect();
        if (stars.length && Math.round(r.width) === Math.round(W) && Math.round(r.height) === Math.round(H)) return false; /* v97 */
        sd = 20261005;
        var dpr = Math.min(2, window.devicePixelRatio || 1); /* v33 N04: antes 1.6 (borroso en 2x) */
        cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr);
        W = r.width; H = r.height; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        rotBox = null;
        try {
          for (var hc = 0; hc < host.children.length; hc++) {
            var sp = host.children[hc];
            if (sp.tagName !== 'SPAN' || sp.getAttribute('aria-hidden') === 'true' || !(sp.textContent || '').trim()) continue;
            var sr = sp.getBoundingClientRect();
            if (sr.width > 0 && sr.height > 0) { rotBox = { L: sr.left - r.left, T: sr.top - r.top, R: sr.right - r.left, B: sr.bottom - r.top }; break; }
          }
        } catch (eR) { rotBox = null; }
        stars = [];
        var ns = Math.max(150, Math.round(W / 3.2)); /* v38 (lote 5 sep, HOME-06 y MOB-02): misma densidad que las bandas de constelacion; el pie era 12x mas ralo por area */
        for (var i = 0; i < ns; i++) {
          var s = { bx: rnd(0, W), by: rnd(0, H * 0.96), r: rnd(.5, 1.7), d: rnd(.25, 1), ph: rnd(0, 6.28), sp: rnd(.4, 1.2), c: rnd(0, 1) };
          s.x = s.bx; s.y = s.by; stars.push(s);
        }
        nodeGroups = grupos.map(function (g) { return g.p.map(function (p) { var bx = W * p[0], by = H * p[1]; return { bx: bx, by: by, x: bx, y: by, ph: rnd(0, 6.28) }; }); });
      };
      build();
      var io = new IntersectionObserver(function (es) { on = es[0].isIntersecting; }); io.observe(host);
      var onMove = function (e) { var r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.in = true; };
      var onLeave = function () { mouse.in = false; mouse.x = -9999; mouse.y = -9999; };
      host.addEventListener('mousemove', onMove);
      host.addEventListener('mouseleave', onLeave);
      var pinta = function () {
        ctx.clearRect(0, 0, W, H);
        var g0 = ctx.createRadialGradient(W * 0.5, H * 1.15, 0, W * 0.5, H * 1.15, H * 0.9);
        g0.addColorStop(0, 'rgba(59,91,255,.14)'); g0.addColorStop(1, 'rgba(59,91,255,0)');
        ctx.fillStyle = g0; ctx.fillRect(0, 0, W, H);
        var cx = W / 2, cy = H / 2;
        var px = mouse.in ? (mouse.x - cx) / cx : 0, py = mouse.in ? (mouse.y - cy) / cy : 0;
        stars.forEach(function (s) {
          var tx = s.bx + px * 16 * s.d, ty = s.by + py * 11 * s.d;
          var dx = tx - mouse.x, dy = ty - mouse.y, dist = Math.hypot(dx, dy);
          var near = mouse.in && dist < 130;
          if (near) { var f = 1 - dist / 130; var k = f * f * 30 / (dist || 1); tx += dx * k; ty += dy * k; }
          s.x += (tx - s.x) * 0.09; s.y += (ty - s.y) * 0.09;
          var tw = 0.55 + 0.45 * Math.sin(t * s.sp + s.ph);
          ctx.globalAlpha = Math.min(1, 0.22 + 0.75 * tw * s.d + (near ? 0.35 : 0));
          ctx.fillStyle = s.c > 0.86 ? '#E4EAFF' : (s.c > 0.5 ? '#9FB0FF' : '#6E86E8');
          ctx.beginPath(); ctx.arc(s.x, s.y, s.r + (near ? 0.7 : 0), 0, 6.283); ctx.fill();
        });
        ctx.globalAlpha = 1;
        nodeGroups.forEach(function (g) {
          g.forEach(function (n) {
            var tx = n.bx + px * 24, ty = n.by + py * 16;
            var dx = tx - mouse.x, dy = ty - mouse.y, dist = Math.hypot(dx, dy);
            n.near = mouse.in && dist < 150;
            if (n.near) { var f = 1 - dist / 150; var k = f * f * 38 / (dist || 1); tx += dx * k; ty += dy * k; }
            n.x += (tx - n.x) * 0.11; n.y += (ty - n.y) * 0.11;
          });
        });
        ctx.lineWidth = 1.7; ctx.strokeStyle = 'rgba(124,146,255,.46)';
        nodeGroups.forEach(function (arr, gi) { ctx.beginPath(); grupos[gi].e.forEach(function (e) { ctx.moveTo(arr[e[0]].x, arr[e[0]].y); ctx.lineTo(arr[e[1]].x, arr[e[1]].y); }); ctx.stroke(); });
        var Ag = nodeGroups[guia[0]][guia[1]], Bg = nodeGroups[guia[2]][guia[3]], vx = Bg.x - Ag.x, vy = Bg.y - Ag.y;
        ctx.setLineDash([2, 6]); ctx.strokeStyle = 'rgba(124,146,255,.26)';
        ctx.beginPath(); ctx.moveTo(Ag.x + vx * .10, Ag.y + vy * .10); ctx.lineTo(Bg.x - vx * .07, Bg.y - vy * .07); ctx.stroke(); ctx.setLineDash([]);
        nodeGroups.forEach(function (g, gi) {
          g.forEach(function (n, ni) {
            var br = ni === grupos[gi].b;
            var tw = 0.72 + 0.28 * Math.sin(t * 0.9 + n.ph);
            var R2 = (n.near ? 17 : 11) + (br ? 5 : 0);
            var gg = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, R2);
            gg.addColorStop(0, 'rgba(159,176,255,' + ((n.near ? 0.5 : br ? 0.4 : 0.26) * tw).toFixed(3) + ')');
            gg.addColorStop(1, 'rgba(159,176,255,0)');
            ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(n.x, n.y, R2, 0, 6.283); ctx.fill();
            ctx.fillStyle = n.near || br ? '#FFFFFF' : '#C9D4FF';
            ctx.beginPath(); ctx.arc(n.x, n.y, n.near ? 3.6 : br ? 3.2 : 2.6, 0, 6.283); ctx.fill();
            if (br) { ctx.strokeStyle = 'rgba(228,234,255,.7)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(n.x - 7, n.y); ctx.lineTo(n.x + 7, n.y); ctx.moveTo(n.x, n.y - 7); ctx.lineTo(n.x, n.y + 7); ctx.stroke(); ctx.lineWidth = 1.1; }
          });
        });
        /* v33 (Q12/N11): 10 px minimo, texto en el idioma del locale, medido con measureText y anclado dentro del canvas
           (CYGNUS se cortaba a la derecha en 390/768); si la etiqueta toca el techo (POLARIS bajo el rotulo HTML) pasa al
           costado de su estrella; las etiquetas que se solapan se apilan. */
        ctx.font = '600 10px "Space Grotesk", sans-serif';
        var enC = langActual() === 'en', puestas = [], PADc = 6, lsOK = ('letterSpacing' in ctx);
        nodeGroups.forEach(function (g, gi) {
          var m = grupos[gi]; if (!m.n) return; var n = g[m.b];
          var txt = (enC && m.en) ? m.en : m.n;
          var tw;
          if (lsOK) { ctx.letterSpacing = '0px'; var w0 = ctx.measureText(txt).width; ctx.letterSpacing = '2px'; tw = Math.max(ctx.measureText(txt).width, w0 + 2 * Math.max(0, txt.length - 1)); }
          else tw = ctx.measureText(txt).width;
          var x = n.x + m.lp[0], y = n.y + m.lp[1], al = 'center';
          if (y < 22) { /* techo: al costado de la estrella (14 px de aire para no pisar su halo) */
            if (n.x + 14 + tw <= W - PADc) { al = 'left'; x = n.x + 14; } else { al = 'right'; x = n.x - 14; }
            y = n.y + 3;
          }
          var L = al === 'center' ? x - tw / 2 : (al === 'left' ? x : x - tw);
          if (L < PADc) { x += PADc - L; L = PADc; }
          if (L + tw > W - PADc) { var dx = L + tw - (W - PADc); x -= dx; L -= dx; }
          /* rotulo HTML (arriba a la izquierda): si el texto lo toca (margen 3 px) baja hasta quedar debajo */
          if (rotBox && L < rotBox.R + 3 && L + tw > rotBox.L - 3 && y - 9 < rotBox.B + 3 && y + 2 > rotBox.T - 3) y = rotBox.B + 3 + 9;
          for (var q = 0; q < puestas.length; q++) { var pq = puestas[q]; if (L < pq.L + pq.w && L + tw > pq.L && Math.abs(y - pq.y) < 13) y = pq.y + 14; }
          if (y > H - 4) y = H - 4;
          puestas.push({ L: L, w: tw, y: y });
          ctx.textAlign = al; ctx.fillStyle = 'rgba(159,176,255,.58)'; ctx.fillText(txt, x, y);
        });
        ctx.textAlign = 'center'; if (lsOK) ctx.letterSpacing = '0px';
        if (meteoro) {
          meteoro.x += meteoro.vx; meteoro.y += meteoro.vy; meteoro.life -= 1;
          var mg = ctx.createLinearGradient(meteoro.x, meteoro.y, meteoro.x - meteoro.vx * 9, meteoro.y - meteoro.vy * 9);
          mg.addColorStop(0, 'rgba(228,234,255,.9)'); mg.addColorStop(1, 'rgba(124,146,255,0)');
          ctx.strokeStyle = mg; ctx.lineWidth = 1.4;
          ctx.beginPath(); ctx.moveTo(meteoro.x, meteoro.y); ctx.lineTo(meteoro.x - meteoro.vx * 9, meteoro.y - meteoro.vy * 9); ctx.stroke();
          if (meteoro.life <= 0 || meteoro.x > W + 40 || meteoro.y > H + 40) meteoro = null;
        } else if (--proxMeteoro <= 0) {
          proxMeteoro = 280 + Math.random() * 340;
          meteoro = { x: rnd(W * 0.1, W * 0.7), y: rnd(0, H * 0.25), vx: rnd(4, 6.5), vy: rnd(1.4, 2.4), life: 46 };
        }
      };
      var loop = function () { if (dead) return; raf = requestAnimationFrame(loop); if (!on) return; t += 0.032; pinta(); };
      if (anim) loop(); else { t = 2; pinta(); }
      var onRes = function () { if (build() === false) return; if (!anim) pinta(); };
      try { if (window.ResizeObserver) new ResizeObserver(onRes).observe(host); } catch (eC) {} /* v97 */
      window.addEventListener('resize', onRes);
      cielos.push({ rebuild: onRes });
    });
  }

  /* ---------- renderer de Publicación ---------- */
  var PUB_TPL = {"secciones": "<div data-st-rev=\"\" style=\"display:grid;grid-template-columns:64px minmax(0,1fr);gap:24px;align-items:start\">\n          <span style=\"font:700 22px/1.2 'Space Grotesk',sans-serif;letter-spacing:-0.01em;color:var(--st-tag,#3B5BFF);padding-top:6px\">{{ s.rom }}</span>\n          <div style=\"display:flex;flex-direction:column;gap:16px;max-width:70ch\">\n            <h2 style=\"margin:0;font:600 clamp(26px,2.4vw,34px)/1.16 'Space Grotesk',sans-serif;letter-spacing:-0.02em;text-wrap:pretty\">{{ s.h }}</h2>\n            <sc-for list=\"{{ s.ps }}\" as=\"p\" hint-placeholder-count=\"2\">\n              <p style=\"margin:0;font:18px/1.72 'DM Sans',sans-serif;color:var(--cy-body,#3D4654);text-wrap:pretty\">{{ p.t }}</p>\n            </sc-for>\n          </div>\n        </div>", "claves": "<div style=\"display:grid;grid-template-columns:34px minmax(0,1fr);gap:12px;align-items:baseline\"><span style=\"font:700 14px 'Space Grotesk',sans-serif;color:var(--cy-mut,#5A6068)\">{{ c.rom }}</span><span style=\"font:17px/1.6 'DM Sans',sans-serif;color:var(--cy-ink,#0E1116)\">{{ c.t }}</span></div>", "otras": "<a href=\"{{ o.href }}\" style=\"display:flex;flex-direction:column;gap:12px;border:1px solid var(--cy-ln,#C4CFE4);border-radius:16px;overflow:hidden;background:var(--cy-card,#FFFFFF);color:var(--cy-ink,#0E1116);transition:border-color .2s ease\" style-hover=\"border-color:var(--cy-link,#3B5BFF)\">\n              <img class=\"\" loading=\"lazy\" src=\"{{ o.cover }}\" alt=\"{{ o.alt }}\" style=\"width:100%;height:auto;aspect-ratio:1920/1080;object-fit:cover;display:block\">\n              <div style=\"display:flex;flex-direction:column;gap:6px;padding:0 18px 18px\">\n                <span style=\"font:700 10.5px 'Space Grotesk',sans-serif;letter-spacing:.16em;color:var(--st-tag,#3B5BFF)\">{{ o.cat }}</span>\n                <strong style=\"font:600 19px/1.2 'Space Grotesk',sans-serif;letter-spacing:-0.014em\">{{ o.titulo }}</strong>\n                <span style=\"font:13.5px 'DM Sans',sans-serif;color:var(--cy-faint,#8A8F98)\">{{ o.lectura }}</span>\n              </div>\n            </a>"};
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function bi(o) {
    if (!o) return '';
    var en = o.en !== undefined ? o.en : o.es, es = o.es !== undefined ? o.es : o.en;
    return '<span class="lang-en">' + esc(en) + '</span><span class="lang-es">' + esc(es) + '</span>';
  }
  function Tl(o, l) { return (o && (o[l] !== undefined ? o[l] : o.es)) || ''; }
  function arteUrl(name) {
    var base = String(name || '').replace(/\.jpg$/, '');
    return (A[base] && A[base].dia) || '';
  }
  var pubVals = null;
  function pubCompute() {
    var P = window.CY_PUBS || {};
    var keys = Object.keys(P);
    if (!keys.length) return null;
    var key = '';
    try {
      var segs = location.pathname.split('/').filter(Boolean);
      key = segs[segs.length - 1] || '';
      if (keys.indexOf(key) < 0) key = new URLSearchParams(location.search).get('post') || '';
    } catch (e) {}
    if (keys.indexOf(key) < 0) key = keys[0];
    var d = P[key];
    var ROM = ['I', 'II', 'III', 'IV', 'V'];
    var meta = { es: [Tl(d.fecha, 'es'), Tl(d.lectura, 'es')].filter(Boolean).join(', '), en: [Tl(d.fecha, 'en'), Tl(d.lectura, 'en')].filter(Boolean).join(', ') };
    return {
      key: key, d: d, ROM: ROM, meta: meta, keys: keys, P: P,
      esc2: { volver: { es: 'Blog', en: 'Blog' }, etiquetaClaves: { es: 'LO QUE TE LLEVAS', en: 'WHAT YOU TAKE AWAY' }, etiquetaOtras: { es: 'SIGUE LEYENDO', en: 'KEEP READING' }, ctaTitulo: { es: 'Habla con los fundadores', en: 'Talk to the founders' }, ctaTexto: { es: 'Te decimos qué detectaríamos hoy en tu empresa, qué reglas de pago te aplicarían y cuánto costaría. Si no calificas, también te lo decimos.', en: 'We tell you what we would detect in your company today, which payment rules would apply and what it would cost. If you do not qualify, we tell you that too.' }, ctaBoton: { es: 'Agenda una reunión', en: 'Book a meeting' }, ctaTesis: { es: 'Lee nuestra tesis', en: 'Read our thesis' } }
    };
  }
  function pubField(v, f) {
    var d = v.d;
    switch (f) {
      case 't1': return bi(d.t1);
      case 'ts': return bi(d.ts);
      case 't2': return bi(d.t2);
      case 'bajada': return bi(d.bajada);
      case 'cat': return bi(d.cat);
      case 'lectura': return bi(d.lectura);
      case 'fecha': return bi(d.fecha);
      case 'meta': return bi(v.meta);
      case 'autor': return bi(d.autor);
      case 'autorRol': return bi(d.rol);
      case 'cita': return bi(d.cita);
      default: return v.esc2[f] ? bi(v.esc2[f]) : '';
    }
  }
  function pubAttrVal(v, f, l) {
    var d = v.d;
    switch (f) {
      case 'cover': return arteUrl(d.cover);
      case 'autorFoto': return arteUrl(d.foto);
      case 'coverAlt': return Tl(d.alt, l);
      case 'autor': return Tl(d.autor, l);
      case 'meta': return Tl(v.meta, l);
      case 'cat': return Tl(d.cat, l);
      default: return '';
    }
  }
  function subTpl(tpl, map) {
    return tpl.replace(/\{\{\s*([\w.]+)\s*\}\}/g, function (_, k) { return map[k] !== undefined ? map[k] : ''; });
  }
  function pubAttrs() {
    if (!pubVals) return;
    var l = langActual();
    document.querySelectorAll('*').forEach(function (el) {
      if (!el.attributes) return;
      for (var i = 0; i < el.attributes.length; i++) {
        var at = el.attributes[i];
        if (at.name.indexOf('data-pub-a-') === 0) {
          var attr = at.name.slice('data-pub-a-'.length);
          if (attr === 'data-src') attr = 'src';
          var val = pubAttrVal(pubVals, at.value, l);
          if (val) el.setAttribute(attr, val);
        }
      }
    });
  }
  function pubRender() {
    var hay = document.querySelector('[data-pub-list],[data-pub]');
    if (!hay) return;
    pubVals = pubCompute();
    if (!pubVals) return;
    var v = pubVals;
    document.querySelectorAll('[data-pub]').forEach(function (el) {
      el.innerHTML = pubField(v, el.getAttribute('data-pub'));
    });
    pubAttrs();
    document.querySelectorAll('[data-pub-list]').forEach(function (cont) {
      var name = cont.getAttribute('data-pub-list');
      var tpl = PUB_TPL[name];
      if (!tpl) return;
      var html = '';
      if (name === 'secciones') {
        var inner = /<sc-for[^>]*>([\s\S]*?)<\/sc-for>/.exec(tpl);
        var ptpl = inner ? inner[1] : '';
        (v.d.cuerpo || []).forEach(function (s, i) {
          var ps = (s.p || []).map(function (p) { return subTpl(ptpl, { 'p.t': bi(p) }); }).join('');
          var st = tpl.replace(/<sc-for[^>]*>[\s\S]*?<\/sc-for>/, ps);
          html += subTpl(st, { 's.rom': v.ROM[i] || '', 's.h': bi(s.h) });
        });
      } else if (name === 'claves') {
        (v.d.claves || []).forEach(function (c, i) {
          html += subTpl(tpl, { 'c.rom': v.ROM[i] || '', 'c.t': bi(c) });
        });
      } else if (name === 'otras') {
        var l = langActual();
        v.keys.filter(function (k) { return k !== v.key; }).slice(0, 3).forEach(function (k) {
          var o = v.P[k];
          var titulo = { es: Tl(o.t1, 'es') + Tl(o.ts, 'es') + Tl(o.t2, 'es'), en: Tl(o.t1, 'en') + Tl(o.ts, 'en') + Tl(o.t2, 'en') };
          html += subTpl(tpl, {
            'o.href': '/blog/' + k, /* v45 (12 sep, orden de Toño): los articulos viven en /blog/<slug>; /recursos/<slug> queda como 301 del panel */
            'o.cover': arteUrl(o.cover),
            'o.alt': esc(Tl(o.alt, l)),
            'o.cat': bi(o.cat),
            'o.titulo': bi(titulo),
            'o.lectura': bi(o.lectura)
          });
        });
      }
      cont.innerHTML = html;
    });
    if (window.STEALTH) { STEALTH.reveal(); STEALTH.rampas(); }
  }
  window.CY_PUB_RENDER = pubRender;

  /* ---------- arranque ---------- */
  var setupN = 0;
  /* v90 (1 oct 2026, cierre LP, pedido de Tono): el cierre de los articulos del blog («Habla con los fundadores» y «Sigue leyendo») se viste
     como los bloques de la LP. La lista de articulos relacionados ([data-pub-list="otras"], que pubRender rellena) pasa a ser el propio bloque
     (data-st-blq + data-st-pubs): en escritorio, rejilla de tres tarjetas unidas por juntas de 1 px con el radio exterior y el vidrio mate de
     mateBloques; en movil, la misma tira con scroll-snap, rombos y recorte de la pista que el Blog de Home. Su padre (st-i-e9d13a14) deja de
     ser rejilla porque la lista ya lo es. El CTA va por VID_SUELTAS. Todo se decide con selectores acotados a la seccion del cierre. */
  function blogCierre() {
    var secs = document.querySelectorAll('[data-screen-label="Publicación, cierre"]');
    if (!secs.length) return;
    if (!document.getElementById('cy-blog-cierre')) {
      var st = document.createElement('style'); st.id = 'cy-blog-cierre';
      var S = '[data-screen-label="Publicación, cierre"] ';
      st.textContent =
        S + '.st-i-e9d13a14{display:block!important}' +
        S + '[data-pub-list="otras"][data-st-blq]{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:1px!important;border:1px solid var(--cy-ln,#C4CFE4)!important;border-radius:18px!important;background-color:var(--cy-ln,#C4CFE4)!important;overflow:hidden}' +
        S + '[data-pub-list="otras"][data-st-blq]>a{border:0!important;border-radius:0!important;transition:none!important;min-width:0}' +
        '@media (max-width:991px){' +
        '.st-mb ' + S + '[data-pub-list="otras"][data-st-blq]{display:flex!important;overflow-x:auto!important;overflow-y:hidden!important;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;gap:0!important;border:0!important;border-radius:15px!important;background-color:transparent!important;padding:8px 0!important;scrollbar-width:none}' +
        '.st-mb ' + S + '[data-pub-list="otras"][data-st-blq]::-webkit-scrollbar{display:none}' +
        '.st-mb ' + S + '[data-pub-list="otras"][data-st-blq]>a{flex:0 0 calc(100% - 48px)!important;scroll-snap-align:center;border:1px solid var(--cy-ln,#C4CFE4)!important}' +
        '}';
      document.head.appendChild(st);
    }
    for (var i = 0; i < secs.length; i++) {
      var l = secs[i].querySelector('[data-pub-list="otras"]');
      if (!l || l.hasAttribute('data-st-blq')) continue;
      var n = 0; for (var k = 0; k < l.children.length; k++) if (!l.children[k].classList.contains('st-n')) n++;
      if (n < 2) continue; /* sin tarjetas aun (pubRender) o una sola: se reintenta en la siguiente pasada de setup */
      l.setAttribute('data-st-blq', ''); l.setAttribute('data-st-pubs', ''); amCache = null;
    }
  }
  function setup() {
    setupN += 1;
    aplicaLang(langActual());
    /* v5: marca el link de la seccion/pagina en curso (guia de navegacion).
       Un href que empieza con '#' dentro del nav o del menu es SIEMPRE la
       pagina actual (asi estan hechos los auto-links); el resto se compara
       por ruta, normalizando el prefijo de locale y el alias /recursos. */
    (function () {
      var norm = function (s) {
        s = (s || '').replace(/^https?:\/\/[^/]+/, '').replace(/[?#].*$/, '');
        s = s.replace(/^\/en(?=\/|$)/, '') || '/';
        s = s.replace(/\/+$/, '') || '/';
        s = s.replace(/^\/recursos(?=\/|$)/, '/blog'); /* v45: alias /recursos -> /blog, tambien para /recursos/<slug> */
        return s;
      };
      var here = norm(location.pathname);
      document.querySelectorAll('[data-st-navmid] a[href],[data-st-menu] a[href]').forEach(function (a) {
        if (a.hasAttribute('data-lang-btn') || a.hasAttribute('data-cy-tema') || a.hasAttribute('data-st-cta')) return;
        var h = a.getAttribute('href') || '';
        var nh = norm(h);
        /* v49 (13 sep 2026, RONDA-MOBILE 3): la seccion tambien es "actual" en sus hijas (/blog/<slug> marca Blog). */
        if (h.charAt(0) === '#' || nh === here || (nh !== '/' && here.indexOf(nh + '/') === 0)) a.setAttribute('data-st-here', '');
        else a.removeAttribute('data-st-here');
      });
    })();
    /* v4: dentro del locale /en los links internos apuntan al mismo locale */
    if (langActual() === 'en') {
      document.querySelectorAll('a[href^="/"]').forEach(function (a) {
        var h = a.getAttribute('href');
        if (h === '/en' || h.indexOf('/en/') === 0 || a.hasAttribute('data-lang-btn')) return;
        a.setAttribute('href', '/en' + (h === '/' ? '' : h));
      });
    }
    pubRender();
    blogCierre(); /* v90 */
    mountBandas();
    mountBloques();
    mountAutoDots();
    mountEsquinas();
    mountCielo();
    igualaCards3();
    mountMar();
    initCarruseles();
    try { autoDots(); if (!window.__cy97rz && [].some.call(document.querySelectorAll('[data-st-dots^="auto"]'), function (r) { return !document.querySelector('[data-st-carr-ctrl="' + r.getAttribute('data-st-dots') + '"]'); })) { window.__cy97rz = 1; window.dispatchEvent(new Event('resize')); } } catch (e97) {} /* v97: st-carr-ctrl monta su fila en resize+150 ms en vez de a DCL+1,2 s */
    if (window.STEALTH) STEALTH.rampas();
    if (setupN === 1) setTimeout(function () { requestAnimationFrame(function () { document.documentElement.classList.add('cy-asentado'); }); }, window.__cy97rz ? 220 : 0); /* v97: tras los controles de carrusel */
  }
  function boot() {
    requestAnimationFrame(setup);
    setTimeout(setup, 350);
    setTimeout(setup, 1200);
    window.addEventListener('resize', function () {
      if (bandas) bandas.resize();
      try { igualaCards3(); } catch (e) {}
    }, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { try { igualaCards3(); } catch (e) {} });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

/* ===== v33 (2026-09-05, lote A) =====
   T8   (reglas existentes reescritas, arriba) bloquesNoche/pintaTarjeta/rombosCarrusel/lineasCarrusel/esquinasBlq separan lectura y
        escritura (un layout por fase en vez de uno por tarjeta/descendiente), el arbol oculto no se mide, mountBloques/mountAutoDots/
        mountEsquinas se montan una vez (setup corre 3 veces: antes 3 observers = 9 pasadas por toggle) y por cambio de tema hay 2
        pasadas (60 ms y ~620 ms, al terminar la transicion de colores de dither) en vez de 9. Misma seleccion, umbrales y paleta.
   Q03  Enlaces externos: target=_blank + rel noopener en todo a[href^=http] con host distinto de cysure.* (mailto/tel intactos).
   Q18  PARCIAL. Puntos de carrusel clicables (role=tab, aria-selected, teclado) que mueven la pista al indice con la misma animacion
        del autoplay (window.__stSlideTo) y lo apagan; cue "Desplazate" del hero interactivo (role=button, scroll a la siguiente
        seccion); cabecera sticky del Acto III desktop pasa bajo las tarjetas mientras se desvanece (z-index inline solo en estado
        off). PENDIENTE: el tramo muerto de ~660 px es el spacer .st-i-16c6b720{height:70vh} de st-home-v52 (hoja fuera del lote).
   Q14  Formularios reales (.w-form, no los [data-st-form] decorativos): for/id emparejados tambien en labels que envuelven
        (for="" dejaba labels.length=0), asterisco en requeridos + aria-required, autocomplete/inputmode, error inline ES/EN con
        aria-invalid + aria-describedby (dentro del label que envuelve, aria-hidden para no contaminar el nombre accesible; el aviso
        va por region aria-live del formulario), borde de error por tema solo sin foco, scroll-margin-top bajo el nav y scroll al
        primer error, validacion en captura de window sobre el click de Enviar (antes que stformfix) y sobre submit, textarea sin asa
        en movil, placeholder reducido exactamente lo que desborda (--st-ph-fs, minimo .8em; ellipsis solo por debajo).
   Q11  Menu movil: burger -> X mientras aria-expanded=true; nav solida con el panel abierto (data-scrolled=1 protegido: core L624
        pintaba el logo blanco sobre la barra clara); scroll-lock con html{overflow:hidden} + touchmove en vez del body{position:fixed}
        de st-a11y-v2 (ponia scrollY=0, colapsaba el documento y disparaba data-scrolled=0). a11y v2 sigue publicado sin cambios;
        su estado (bloqueado) sigue al style del panel por MutationObserver, no a los clicks, asi que no se desincroniza.
   Q24  Semantica: role=button en toggles/burger/flechas que son <a href="#">, aria-current=page en el link activo (data-st-here),
        anclas #id resueltas al arbol visible (ids duplicados dt/mb) con offset del nav (#top y "#" -> arriba), titulo del cierre
        del post como h3 (inline solo margin:0; fuente copiada unicamente si el computado del h3 difiere del strong).
   N10  Barra de progreso: 100 % cuando faltan <2 px (0 si la pagina no scrollea); recalculo al cargar imagenes lazy y al cambiar el
        alto de body o de html (ResizeObserver).
   N11  Footer en /en: "HECHO EN LATAM" -> "MADE IN LATAM" (las etiquetas del cielo en EN van en mountCielo, ver arriba).
   N14  document.startViewTransition envuelto: .catch en ready/finished/updateCallbackDone. La causa la cierra cy-dither-ui v4 (T3:
        ya no llama a startViewTransition); este envoltorio queda como red por si otro script lo usa. Idempotente.
   N04  (regla existente tocada) mountBandas y mountCielo: backing store del canvas a min(devicePixelRatio, 2) en vez de 1.6.
   Q12  (regla existente tocada) mountCielo: etiquetas a 10 px, medidas con measureText y ancladas dentro del canvas; si tocan el
        techo pasan al costado de su estrella; nunca pisan el rotulo HTML (caja medida en build); las que se solapan se apilan.
        Texto ES/EN por locale (N11).
   Q06  PENDIENTE de insumo. Mecanismo listo (data-alt-es/data-alt-en + diccionario ALT_ES por clave de arte); los textos ES quedan
        pendientes de la aprobacion de Tono, por eso el diccionario va vacio y hoy no cambia ningun alt. */
(function () {
  'use strict';
  var RM = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function lang() { var p = location.pathname; return (p === '/en' || p.indexOf('/en/') === 0) ? 'en' : 'es'; }
  function ES() { return lang() !== 'en'; }
  function visible(el) {
    if (!el || el.nodeType !== 1) return false;
    if (el.offsetParent !== null) return true;
    var cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return false;
    if (cs.position !== 'fixed') return false;
    return el.getClientRects().length > 0;
  }
  function navH() {
    var ns = document.querySelectorAll('[data-st-nav]');
    for (var i = 0; i < ns.length; i++) { if (visible(ns[i])) { var h = ns[i].offsetHeight; if (h > 20) return h; } }
    return 64;
  }
  function css(txt) { var s = document.createElement('style'); s.setAttribute('data-st-v33', ''); s.textContent = txt; (document.head || document.documentElement).appendChild(s); }
  function scrollA(y) { y = Math.max(0, y); try { window.scrollTo({ top: y, behavior: RM ? 'auto' : 'smooth' }); } catch (e) { window.scrollTo(0, y); } }

  /* ---------- N14: View Transition sin rechazos sin manejar ---------- */
  function viewTransitionSeguro() {
    if (!document.startViewTransition || document.startViewTransition.__st) return;
    var orig = document.startViewTransition;
    var w = function (cb) {
      var vt = orig.call(document, cb);
      try {
        ['ready', 'finished', 'updateCallbackDone'].forEach(function (k) { var p = vt && vt[k]; if (p && typeof p.catch === 'function') p.catch(function () {}); });
      } catch (e) {}
      return vt;
    };
    w.__st = 1;
    document.startViewTransition = w;
  }

  /* ---------- Q03: externos en pestana nueva ---------- */
  function externos() {
    var as = document.querySelectorAll('a[href^="http"]');
    for (var i = 0; i < as.length; i++) {
      var a = as[i], h = a.getAttribute('href') || '';
      var m = /^https?:\/\/([^\/?#]+)/i.exec(h); if (!m) continue;
      var host = m[1].toLowerCase();
      if (/(^|\.)cysure\.(ai|webflow\.io)$/.test(host) || host === location.hostname.toLowerCase()) continue;
      if (a.getAttribute('target') !== '_blank') a.setAttribute('target', '_blank');
      var rel = (a.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
      if (rel.indexOf('noopener') < 0) rel.push('noopener');
      a.setAttribute('rel', rel.join(' '));
    }
  }

  /* ---------- Q18: puntos de carrusel que navegan ---------- */
  function pistaDe(row) {
    var key = row.getAttribute('data-st-dots');
    var root = row.closest('.st-dt,.st-mb') || document;
    var sc = null;
    if (key) sc = root.querySelector('[data-st-carr="' + key + '"]') || (key === 'pubs' ? root.querySelector('[data-st-pubs]') : null);
    if (!sc) { var prev = row.previousElementSibling; if (prev && /auto|scroll/.test(getComputedStyle(prev).overflowX)) sc = prev; }
    return sc;
  }
  function slides(sc) { return [].filter.call(sc.children, function (c) { return !c.classList.contains('st-n'); }); }
  function irSlide(sc, idx) {
    var kids = slides(sc); if (!kids.length) return;
    sc._pausa = Date.now() + 9000; sc._done = true; if (sc._timer) { clearInterval(sc._timer); sc._timer = null; }
    /* misma animacion que el autoplay (rAF con scroll-snap apagado durante el tramo): el snap no corrige el destino y el punto
       que se enciende (data-on) coincide con el pulsado */
    if (typeof window.__stSlideTo === 'function') { window.__stSlideTo(sc, idx); return; }
    var k = kids[Math.max(0, Math.min(kids.length - 1, idx))];
    var max = sc.scrollWidth - sc.clientWidth;
    var to = Math.max(0, Math.min(max, k.offsetLeft - sc.offsetLeft - (sc.clientWidth - k.offsetWidth) / 2));
    try { sc.scrollTo({ left: to, behavior: RM ? 'auto' : 'smooth' }); } catch (e) { sc.scrollLeft = to; }
  }
  function puntos() {
    var rows = document.querySelectorAll('[data-st-dots]');
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i]; if (row.__stClick) continue;
      var dots = row.querySelectorAll('[data-st-dot]'); if (!dots.length) continue;
      var sc = pistaDe(row); if (!sc) continue;
      row.__stClick = 1;
      row.removeAttribute('aria-hidden'); row.setAttribute('role', 'tablist');
      row.setAttribute('aria-label', ES() ? 'Tarjetas del carrusel' : 'Carousel cards');
      var sync = (function (r) { return function () { var ds = r.querySelectorAll('[data-st-dot]'); for (var j = 0; j < ds.length; j++) ds[j].setAttribute('aria-selected', ds[j].hasAttribute('data-on') ? 'true' : 'false'); }; })(row);
      for (var k = 0; k < dots.length; k++) (function (d, idx, n, pista) {
        d.setAttribute('role', 'tab'); d.setAttribute('tabindex', '0'); d.style.cursor = 'pointer';
        d.setAttribute('aria-label', ES() ? ('Ir a la tarjeta ' + (idx + 1) + ' de ' + n) : ('Go to card ' + (idx + 1) + ' of ' + n));
        var go = function (e) { if (e) e.preventDefault(); irSlide(pista, idx); };
        d.addEventListener('click', go);
        d.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') go(e); });
      })(dots[k], k, dots.length, sc);
      (function (pista, s2) { var t = null; pista.addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(s2, 90); }, { passive: true }); s2(); })(sc, sync);
    }
  }

  /* ---------- Q18: cue "Desplazate" del hero ---------- */
  function desplazate() {
    var heroes = document.querySelectorAll('[data-st-hero]');
    for (var i = 0; i < heroes.length; i++) {
      var h = heroes[i];
      var leaves = h.querySelectorAll('span,div,p');
      for (var j = 0; j < leaves.length; j++) {
        var s = leaves[j];
        if (s.children.length) continue;
        if (!/^\s*(DESPL[AÁ]ZATE|SCROLL(\s+DOWN)?)\s*$/i.test(s.textContent || '')) continue;
        var cue = null, up = s.parentElement, n = 0;
        while (up && up !== h && n < 3) { if (getComputedStyle(up).position === 'absolute') { cue = up; break; } up = up.parentElement; n++; }
        if (!cue) cue = s.parentElement || s;
        if (cue.__stCue) break;
        cue.__stCue = 1;
        cue.style.setProperty('pointer-events', 'auto', 'important'); cue.style.cursor = 'pointer';
        /* v47 (QA32 A-03): si el cue vive dentro de un envoltorio aria-hidden (el [data-st-scroll] decorativo del hero), no puede
           ser enfocable (axe aria-hidden-focus): queda tabindex=-1 sin role ni aria-label; el click/tap sigue funcionando y el
           teclado ya tiene el scroll normal de la pagina. Fuera de aria-hidden se conserva el boton accesible de Q18. */
        var oculto = !!(cue.closest && cue.closest('[aria-hidden="true"]'));
        if (oculto) { cue.setAttribute('tabindex', '-1'); cue.removeAttribute('role'); cue.removeAttribute('aria-label'); }
        else {
          cue.setAttribute('role', 'button'); cue.setAttribute('tabindex', '0');
          cue.setAttribute('aria-label', ES() ? 'Desplázate a la siguiente sección' : 'Scroll to the next section');
        }
        (function (c, hero) {
          var go = function (e) {
            if (e) e.preventDefault();
            var sec = hero.closest('[data-screen-label]') || hero;
            var next = sec.nextElementSibling; while (next && !visible(next)) next = next.nextElementSibling;
            var y = next ? next.getBoundingClientRect().top + (window.scrollY || 0) - navH() : (window.scrollY || 0) + (window.innerHeight || 700);
            scrollA(y);
          };
          c.addEventListener('click', go);
          c.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') go(e); });
        })(cue, h);
        break;
      }
    }
  }

  /* ---------- Q18: cabecera del Acto III (desktop) bajo las tarjetas mientras se desvanece ---------- */
  function acto3() {
    var heads = document.querySelectorAll('.st-dt [data-screen-label^="Acto III"] > :first-child');
    for (var i = 0; i < heads.length; i++) {
      var hd = heads[i];
      if (hd.getAttribute('data-st-a3') === 'off') { if (hd.style.zIndex !== '0') hd.style.setProperty('z-index', '0', 'important'); }
      else if (hd.style.zIndex !== '') hd.style.removeProperty('z-index');
    }
  }

  /* ---------- Q14: formularios accesibles ---------- */
  var MSG = { es: { req: 'Este campo es obligatorio.', mail: 'Escribe un correo válido.' }, en: { req: 'This field is required.', mail: 'Enter a valid email address.' } };
  function ctrlsDe(f) { return f.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=checkbox]):not([type=radio]),textarea,select'); }
  function esReq(el) { return !!el.required || el.getAttribute('aria-required') === 'true'; }
  function errDe(el) { return document.getElementById(el.id + '-err'); }
  function ponError(el, msg) {
    var err = errDe(el);
    if (!err) {
      var lab = el.closest('label');
      err = document.createElement(lab ? 'span' : 'p'); err.className = 'st-err'; err.id = el.id + '-err';
      if (lab) {
        /* dentro del label que envuelve al control (ultimo hijo: una fila mas del label, sin tocar la rejilla del formulario);
           aria-hidden para que no entre en el nombre accesible del campo; aria-describedby SI lo lee aunque este oculto */
        err.setAttribute('aria-hidden', 'true'); lab.appendChild(err);
      } else { err.setAttribute('role', 'alert'); el.insertAdjacentElement('afterend', err); }
    }
    err.textContent = msg;
    el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', err.id);
  }
  function liveDe(f) {
    var lv = f.querySelector('.st-live');
    if (!lv) { lv = document.createElement('div'); lv.className = 'st-live'; lv.setAttribute('aria-live', 'polite'); lv.setAttribute('aria-atomic', 'true'); f.appendChild(lv); }
    return lv;
  }
  function validaForm(f) {
    var cs = ctrlsDe(f), first = null, bad = 0;
    for (var q = 0; q < cs.length; q++) { var msg = valida(cs[q]); if (msg) { bad++; if (!first) first = cs[q]; ponError(cs[q], msg); } else quitaError(cs[q]); }
    if (!bad) { try { liveDe(f).textContent = ''; } catch (e0) {} return true; }
    try {
      var lv = liveDe(f), txt = ES() ? ('Revisa ' + (bad === 1 ? 'el campo marcado.' : 'los ' + bad + ' campos marcados.')) : ('Check ' + (bad === 1 ? 'the highlighted field.' : 'the ' + bad + ' highlighted fields.'));
      lv.textContent = ''; setTimeout(function () { lv.textContent = txt; }, 50);
    } catch (e1) {}
    try { first.focus({ preventScroll: true }); } catch (err) { first.focus(); }
    try { first.scrollIntoView({ block: 'center', behavior: RM ? 'auto' : 'smooth' }); } catch (err2) {}
    return false;
  }
  function quitaError(el) {
    var err = errDe(el); if (err && err.parentNode) err.parentNode.removeChild(err);
    el.removeAttribute('aria-invalid');
    if (el.getAttribute('aria-describedby') === el.id + '-err') el.removeAttribute('aria-describedby');
  }
  function valida(el) {
    var l = ES() ? 'es' : 'en', v = (el.value || '').trim();
    if (esReq(el) && !v) return MSG[l].req;
    if (el.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return MSG[l].mail;
    return '';
  }
  var phCanvas = null;
  function ajustaPlaceholder(c) {
    var ph = c.getAttribute('placeholder'); if (!ph) { c.removeAttribute('data-st-ph-tight'); return; }
    var cs = getComputedStyle(c);
    var w = c.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    if (w < 40) return;
    if (!phCanvas) phCanvas = document.createElement('canvas');
    var ctx = phCanvas.getContext('2d'); if (!ctx) return;
    ctx.font = (cs.fontStyle || 'normal') + ' ' + (cs.fontWeight || '400') + ' ' + cs.fontSize + ' ' + cs.fontFamily;
    var tw = ctx.measureText(ph).width + (parseFloat(cs.letterSpacing) || 0) * ph.length;
    if (tw > w - 2) {
      /* factor exacto por campo: el placeholder se reduce justo lo que desborda (minimo .8em); por debajo de .8em, ellipsis */
      var f = Math.max(0.8, Math.min(1, (w - 2) / tw)), fs = f.toFixed(3) + 'em', mode = f <= 0.8 ? 'ellipsis' : 'fit';
      if (c.style.getPropertyValue('--st-ph-fs') !== fs) c.style.setProperty('--st-ph-fs', fs);
      if (c.getAttribute('data-st-ph-tight') !== mode) c.setAttribute('data-st-ph-tight', mode);
    } else {
      if (c.style.getPropertyValue('--st-ph-fs')) c.style.removeProperty('--st-ph-fs');
      if (c.hasAttribute('data-st-ph-tight')) c.removeAttribute('data-st-ph-tight');
    }
  }
  var formsCss = false;
  function formularios() {
    if (!formsCss) {
      formsCss = true;
      css('html:root[data-cy-theme="noche"] [data-cy-lang] .st-i-47b2561f.sx2 .st-i-9e80f55c{color:#29487B!important}html:root[data-cy-theme="noche"] [data-cy-lang] .st-i-47b2561f.sx1 .st-i-9e80f55c{color:#8FA3FF!important}');
      /* v36: sin el chip de categoría, el icono de la tarjeta de agente se centra con el título */
      css('html:root [data-cy-lang] .st-i-0b88922d{align-items:center!important}');
      css('@media (min-width:681px) and (max-width:1060px){.st-dt nav .cy-dchip::after{width:max(100%,44px)!important}html:root body div.st-dt[class][class][class] nav[class][class][class] div[role="group"][aria-label][class][class][class]{height:auto!important;min-height:44px!important}html:root body div.st-dt[class][class][class] nav[class][class][class] div[role="group"][aria-label][class][class][class] a.cy-tgb[class][class][class],html:root body div.st-dt[class][class][class] nav[class][class][class] div[role="group"][aria-label][class][class][class] a.cy-lang-btn[class][class][class]{height:44px!important;min-height:44px!important;max-height:44px!important;min-width:44px!important}.st-dt nav a[data-st-cta]{position:relative}.st-dt nav a[data-st-cta]::before{content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,44px);height:max(100%,44px);pointer-events:auto;z-index:0}}@media (max-width:1060px){a.st-i-f16c3bdf{position:relative}a.st-i-f16c3bdf::after{content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,44px);height:max(100%,44px);pointer-events:auto}}');
      css('.st-err{display:block;margin:6px 0 0;font:500 12.5px/1.35 "DM Sans",sans-serif;letter-spacing:0;text-transform:none;color:#B3261E}' +
          'html[data-cy-theme="noche"] .st-err{color:#FF8A80}' +
          /* solo color, misma geometria dia/noche; sin foco, para que el borde de foco del campo siga distinguiendose */
          'form [aria-invalid="true"]:not(:focus){border-color:#B3261E!important}' +
          'html[data-cy-theme="noche"] form [aria-invalid="true"]:not(:focus){border-color:#FF8A80!important}' +
          'input[data-st-ph-tight]::placeholder{font-size:var(--st-ph-fs,1em)}' +
          'input[data-st-ph-tight="ellipsis"]::placeholder{text-overflow:ellipsis}' +
          '.st-live{position:absolute!important;width:1px!important;height:1px!important;margin:-1px!important;padding:0!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important;border:0!important}' +
          '.st-req{font:inherit;letter-spacing:inherit}');
    }
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
      var f = forms[i];
      if (f.closest('[data-st-form]') && !f.closest('.w-form')) continue; /* v34: el form real de Agenda vive dentro de un [data-st-form] decorativo; solo se salta el decorativo puro */
      var ctrls = ctrlsDe(f);
      if (!ctrls.length) continue;
      for (var k = 0; k < ctrls.length; k++) {
        var c = ctrls[k];
        if (!c.id) c.id = 'st-f' + i + '-' + k;
        if (!c.__stA11y) {
          c.__stA11y = 1;
          c.style.scrollMarginTop = (navH() + 32) + 'px';
          var lab = c.closest('label');
          if (!lab && c.labels && c.labels.length) lab = c.labels[0];
          if (!lab) { var p = c.previousElementSibling; while (p && p.tagName !== 'LABEL' && !/^(INPUT|TEXTAREA|SELECT)$/.test(p.tagName)) p = p.previousElementSibling; if (p && p.tagName === 'LABEL') lab = p; }
          if (lab && lab.getAttribute('for') !== c.id) lab.setAttribute('for', c.id);
          if (esReq(c)) {
            c.setAttribute('aria-required', 'true');
            if (lab && !lab.querySelector('.st-req')) {
              /* el asterisco va DENTRO del texto de la etiqueta (spans .lang-es/.lang-en o el hijo con texto anterior al
                 control), nunca como hijo suelto del label: en un label flex-column seria una fila propia */
              var dest = [];
              for (var q = 0; q < lab.children.length; q++) { var ch = lab.children[q]; if (ch === c || ch.contains(c)) break; if ((ch.textContent || '').trim()) dest.push(ch); }
              if (!dest.length) dest = [lab];
              for (var q2 = 0; q2 < dest.length; q2++) { var s = document.createElement('span'); s.className = 'st-req'; s.setAttribute('aria-hidden', 'true'); s.textContent = ' *'; dest[q2].appendChild(s); }
            }
          }
          var nm = (c.getAttribute('name') || '') + ' ' + c.id;
          if (c.type === 'email') { if (!c.getAttribute('autocomplete')) c.setAttribute('autocomplete', 'email'); if (!c.getAttribute('inputmode')) c.setAttribute('inputmode', 'email'); }
          else if (/nombre|name/i.test(nm) && !c.getAttribute('autocomplete')) c.setAttribute('autocomplete', 'name');
          else if (/empresa|company|organi/i.test(nm) && !c.getAttribute('autocomplete')) c.setAttribute('autocomplete', 'organization');
          if (c.tagName === 'TEXTAREA' && c.closest('.st-mb')) c.style.resize = 'none';
        }
        if (c.tagName === 'INPUT') ajustaPlaceholder(c);
      }
      if (!f.__stA11y) {
        f.__stA11y = 1;
        f.setAttribute('novalidate', '');
        f.addEventListener('input', function (e) { var el = e.target; if (el && el.getAttribute && el.getAttribute('aria-invalid') === 'true' && !valida(el)) quitaError(el); });
      }
    }
  }
  /* en captura sobre document: corre antes que el envio de Webflow y que cualquier otro submit del formulario */
  document.addEventListener('submit', function (e) {
    var f = e.target; if (!f || f.tagName !== 'FORM' || !f.__stA11y) return;
    if (validaForm(f)) return; /* valido: sigue el envio normal (nunca se envia nada desde aqui) */
    e.preventDefault(); e.stopImmediatePropagation();
  }, true);
  /* refuerzo en captura sobre WINDOW (corre antes que cualquier listener de document, incluido stformfix, que intercepta el click
     de "Enviar" y llama reportValidity/fetch): si el formulario es invalido el click no llega a nadie y no hay globo nativo */
  window.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('button,input[type="submit"],input[type="image"]') : null; if (!t) return;
    if (t.tagName === 'BUTTON' && (t.getAttribute('type') || 'submit').toLowerCase() !== 'submit') return;
    var f = t.form || t.closest('form'); if (!f || !f.__stA11y) return;
    if (validaForm(f)) return;
    e.preventDefault(); e.stopPropagation();
  }, true);

  /* ---------- Q11: menu movil (X, nav solida, scroll-lock sin colapsar) ---------- */
  function xPath(svg) {
    var w = 17, h = 12;
    try {
      var vb = svg && svg.viewBox && svg.viewBox.baseVal;
      if (vb && vb.width) { w = vb.width; h = vb.height; }
      else if (svg) { w = parseFloat(svg.getAttribute('width')) || w; h = parseFloat(svg.getAttribute('height')) || h; }
    } catch (e) {}
    /* v37: X cuadrada y centrada (antes usaba las proporciones 17x12 del icono y salia achatada) */
    var side = Math.min(w, h) * 0.88, cx = w / 2, cy = h / 2, hf = side / 2;
    var x0 = (cx - hf).toFixed(2), x1 = (cx + hf).toFixed(2), y0 = (cy - hf).toFixed(2), y1 = (cy + hf).toFixed(2);
    return 'M' + x0 + ' ' + y0 + 'L' + x1 + ' ' + y1 + 'M' + x1 + ' ' + y0 + 'L' + x0 + ' ' + y1;
  }
  function pintaBurger(b) {
    var on = b.getAttribute('aria-expanded') === 'true';
    var paths = b.querySelectorAll('svg path');
    for (var i = 0; i < paths.length; i++) {
      var p = paths[i];
      if (!p.hasAttribute('data-st-d0')) p.setAttribute('data-st-d0', p.getAttribute('d') || '');
      var want = on ? xPath(p.ownerSVGElement || p.closest('svg')) : p.getAttribute('data-st-d0');
      if (p.getAttribute('d') !== want) p.setAttribute('d', want);
    }
    if (b.tagName === 'A' && !b.getAttribute('role')) b.setAttribute('role', 'button');
  }
  var menuLock = { on: false, y: 0, nav: null, panel: null };
  var menuTouch = function (e) {
    if (!menuLock.on) return;
    if (menuLock.panel && e.target && menuLock.panel.contains(e.target)) return;
    if (e.cancelable) e.preventDefault();
  };
  function bloqueaScroll(panel) {
    if (menuLock.on) return;
    menuLock.on = true; menuLock.panel = panel;
    document.addEventListener('touchmove', menuTouch, { passive: false });
    menuLock.y = window.scrollY || document.documentElement.scrollTop || 0;
    document.documentElement.style.setProperty('overflow', 'hidden', 'important');
    var root = panel.closest('.st-dt,.st-mb') || document;
    var nav = root.querySelector('[data-st-nav]'); menuLock.nav = nav;
    if (nav) nav.setAttribute('data-scrolled', '1');
  }
  function liberaScroll() {
    if (!menuLock.on) return;
    menuLock.on = false;
    document.removeEventListener('touchmove', menuTouch, { passive: false });
    document.documentElement.style.removeProperty('overflow');
    var nav = menuLock.nav; if (nav) nav.setAttribute('data-scrolled', (window.scrollY || 0) > 48 ? '1' : '0');
    menuLock.nav = null; menuLock.panel = null;
  }
  function quitaFixed() {
    var b = document.body; if (!b || b.style.position !== 'fixed') return;
    var y = -parseFloat(b.style.top); if (isNaN(y)) y = menuLock.y || 0;
    b.style.position = ''; b.style.top = ''; b.style.left = ''; b.style.right = ''; b.style.width = '';
    if (Math.abs((window.scrollY || 0) - y) > 1) window.scrollTo(0, y);
  }
  function panelAbierto(p) { return p.style.display !== '' && p.style.display !== 'none' && visible(p); }
  function cierraMenus() {
    var ps = document.querySelectorAll('[data-st-menu-root]');
    for (var i = 0; i < ps.length; i++) {
      if (!ps[i].style.display || ps[i].style.display === 'none') continue;
      ps[i].style.display = 'none';
      var b = (ps[i].closest('.st-dt,.st-mb') || document).querySelector('[data-st-burger]');
      if (b) b.setAttribute('aria-expanded', 'false');
    }
  }
  function menuMovil() {
    var burgers = document.querySelectorAll('[data-st-burger]');
    for (var i = 0; i < burgers.length; i++) pintaBurger(burgers[i]);
    if (menuMovil.done) return;
    var panels = document.querySelectorAll('[data-st-menu-root]');
    if (!panels.length) return;
    menuMovil.done = 1;
    new MutationObserver(function (ms) { for (var j = 0; j < ms.length; j++) { var t = ms[j].target; if (t && t.hasAttribute && t.hasAttribute('data-st-burger')) pintaBurger(t); } })
      .observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['aria-expanded'] });
    var estado = function () {
      var on = null;
      for (var k = 0; k < panels.length; k++) if (panelAbierto(panels[k])) { on = panels[k]; break; }
      if (on) { bloqueaScroll(on); quitaFixed(); } else liberaScroll();
    };
    var mo = new MutationObserver(estado);
    for (var k = 0; k < panels.length; k++) mo.observe(panels[k], { attributes: true, attributeFilter: ['style'] });
    if (document.body) new MutationObserver(function () { if (menuLock.on) quitaFixed(); }).observe(document.body, { attributes: true, attributeFilter: ['style'] });
    /* el nav se queda solido mientras el panel esta abierto (head f y wf chrome reescriben data-scrolled) */
    new MutationObserver(function () { if (menuLock.on && menuLock.nav && menuLock.nav.getAttribute('data-scrolled') !== '1') menuLock.nav.setAttribute('data-scrolled', '1'); })
      .observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['data-scrolled'] });
    /* v94 (4 oct 2026, Safari iOS «se traba antes del pie»): el touchmove no pasivo ya no vive siempre en document; lo pone
       bloqueaScroll y lo quita liberaScroll (menuTouch). Con un no pasivo permanente, iOS espera al hilo principal en cada
       gesto y cualquier trabajo largo (Turnstile del formulario, revelados) se ve como frenazo y salto del scroll. */
    estado();
  }

  /* ---------- Q24: semantica ---------- */
  function cierreH3() {
    var ss = document.querySelectorAll('[data-screen-label*="ierre"] strong');
    for (var i = 0; i < ss.length; i++) {
      var s = ss[i];
      if (s.closest('a,button,p,h1,h2,h3,h4,h5,li,span,em')) continue;
      if ((s.textContent || '').trim().length < 6) continue;
      var cs = getComputedStyle(s);
      var antes = { display: cs.display, fontFamily: cs.fontFamily, fontSize: cs.fontSize, fontWeight: cs.fontWeight, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing, textTransform: cs.textTransform };
      var h = document.createElement('h3');
      for (var k = 0; k < s.attributes.length; k++) h.setAttribute(s.attributes[k].name, s.attributes[k].value);
      h.style.margin = '0'; /* el h3 conserva la clase del strong: la hoja sigue mandando por breakpoint */
      while (s.firstChild) h.appendChild(s.firstChild);
      s.parentNode.replaceChild(h, s);
      /* solo si el computado del h3 difiere del strong original se fija en linea esa propiedad (misma geometria) */
      var ch = getComputedStyle(h);
      for (var p in antes) { if (antes.hasOwnProperty(p) && ch[p] !== antes[p]) h.style[p] = antes[p]; }
    }
  }
  function semantica() {
    var bs = document.querySelectorAll('a[data-cy-tema],a[data-lang-btn],a[data-st-burger],a[data-st-pub],a.cy-tgb,a.cy-lang-btn');
    for (var i = 0; i < bs.length; i++) if (!bs[i].getAttribute('role')) bs[i].setAttribute('role', 'button');
    var links = document.querySelectorAll('[data-st-navmid] a[href],[data-st-menu] a[href],[data-st-menu-root] a[href]');
    for (var j = 0; j < links.length; j++) {
      var a = links[j];
      if (a.hasAttribute('data-st-here')) { if (a.getAttribute('aria-current') !== 'page') a.setAttribute('aria-current', 'page'); }
      else if (a.getAttribute('aria-current') === 'page') a.removeAttribute('aria-current');
    }
    /* v50 (13 sep 2026, O-1 de Fable en pub15): el CTA de la nav («Contactanos» -> /agenda) llevaba aria-current="page" en /agenda
       solo en ES (w--current de Webflow, que no reconoce /en/agenda). Se decide por ruta normalizada en los dos idiomas. */
    var nrm = function (s) { s = (s || '').replace(/^https?:\/\/[^/]+/, '').replace(/[?#].*$/, ''); s = s.replace(/^\/en(?=\/|$)/, '') || '/'; return s.replace(/\/+$/, '') || '/'; };
    var aqui = nrm(location.pathname), ctas = document.querySelectorAll('nav a[data-st-cta][href]');
    for (var c = 0; c < ctas.length; c++) {
      var h = ctas[c].getAttribute('href') || '';
      if (h.charAt(0) !== '#' && nrm(h) === aqui) { if (ctas[c].getAttribute('aria-current') !== 'page') ctas[c].setAttribute('aria-current', 'page'); }
      else if (ctas[c].getAttribute('aria-current') === 'page') ctas[c].removeAttribute('aria-current');
    }
    cierreH3();
  }
  function objetivo(id) {
    if (!id || id === 'top') return 'top';
    var cands = [id, id.replace(/-dt$/, '-mb'), id.replace(/-mb$/, '-dt')];
    for (var i = 0; i < cands.length; i++) {
      var els = document.querySelectorAll('[id="' + cands[i].replace(/["\\]/g, '\\$&') + '"]');
      for (var j = 0; j < els.length; j++) if (visible(els[j])) return els[j];
    }
    return null;
  }
  function irA(t, id) {
    var y = 0;
    if (t !== 'top') y = t.getBoundingClientRect().top + (window.scrollY || 0) - navH() - 8;
    scrollA(y);
    if (t !== 'top') {
      if (!t.hasAttribute('tabindex')) { t.setAttribute('tabindex', '-1'); t.style.outline = 'none'; }
      try { t.focus({ preventScroll: true }); } catch (e2) {}
    }
    try { history.replaceState(null, '', (id && id !== 'top') ? ('#' + id) : (location.pathname + location.search)); } catch (e3) {}
  }
  function anclas() {
    if (anclas.done) return; anclas.done = 1;
    /* en captura: el runtime de Webflow resuelve $('#id') al PRIMER nodo (el arbol oculto) y desplaza a 0; aqui se corta antes.
       stopPropagation silencia solo los listeners de burbuja en document (anchor-scroll de Webflow, el handler global de st-pages,
       cuyo cierre de menu se replica con cierraMenus); los de captura (stux) siguen corriendo. st-a11y-v2 no escucha clicks: su
       estado de scroll-lock sigue al style del panel por MutationObserver, asi que cerrar el panel aqui lo libera igual. */
    document.addEventListener('click', function (e) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null; if (!a) return;
      if (a.hasAttribute('data-cy-tema') || a.hasAttribute('data-lang-btn') || a.hasAttribute('data-st-burger') || a.hasAttribute('data-st-pub') || a.hasAttribute('data-cys-skip') || a.getAttribute('role') === 'button') return;
      if (a.getAttribute('target') === '_blank') return;
      var h = a.getAttribute('href') || ''; var i = h.indexOf('#'); if (i < 0) return;
      var path = h.slice(0, i).replace(/^https?:\/\/[^/]+/, '');
      if (path && path.replace(/\/$/, '') !== location.pathname.replace(/\/$/, '')) return;
      var id = ''; try { id = decodeURIComponent(h.slice(i + 1)); } catch (err) { id = h.slice(i + 1); }
      var t = objetivo(id); if (!t) return;
      e.preventDefault(); e.stopPropagation();
      cierraMenus(); /* el handler global de st-pages ya no recibe el click: se cierra el panel aqui */
      setTimeout(function () { irA(t, id); }, 40);
    }, true);
    if (location.hash.length > 1) {
      var id0 = location.hash.slice(1), t0 = objetivo(id0);
      if (t0 && t0 !== 'top' && t0.getBoundingClientRect().top > (window.innerHeight || 700)) setTimeout(function () { irA(t0, id0); }, 400);
    }
  }

  /* ---------- N10: barra de progreso ---------- */
  function progreso() {
    var bars = document.querySelectorAll('[data-st-progreso]'); if (!bars.length) return;
    var d = document.documentElement, y = window.scrollY || d.scrollTop || 0;
    var mx = d.scrollHeight - window.innerHeight;
    var s = mx > 1 ? Math.min(1, Math.max(0, y / mx)) : 0; /* pagina sin scroll: barra en 0 (igual que head f y wf chrome) */
    if (mx > 1 && mx - y < 2) s = 1;
    var sv = 'scaleX(' + s.toFixed(4) + ')';
    for (var i = 0; i < bars.length; i++) { if (bars[i]._stv !== sv) { bars[i]._stv = sv; bars[i].style.transform = sv; } }
  }
  function progresoInit() {
    if (progresoInit.done) return; progresoInit.done = 1;
    var raf = 0;
    var tick = function () { if (raf) return; raf = requestAnimationFrame(function () { raf = 0; if (document.documentElement.classList.contains('cy-theme-anim')) { progreso.v = 1; if (!progreso.tm) progreso.tm = setTimeout(function () { progreso.tm = 0; tick(); }, 200); return; } if (progreso.v) { progreso.v = 0; if (!progreso.tm) progreso.tm = setTimeout(function () { progreso.tm = 0; tick(); }, 250); return; } /* v52: aplazado en la fundida y 250 ms mas al terminar (las transiciones sobreviven a la clase) */ try { progreso(); } catch (e) {} }); };
    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick, { passive: true });
    window.addEventListener('load', function () { tick(); setTimeout(tick, 800); setTimeout(tick, 2500); });
    document.addEventListener('load', function (e) { if (e.target && e.target.tagName === 'IMG') tick(); }, true);
    try { if (window.ResizeObserver) { var ro = new ResizeObserver(tick); if (document.body) ro.observe(document.body); ro.observe(document.documentElement); } } catch (e) {}
    tick();
  }

  /* ---------- N11: micro-texto del pie en EN ---------- */
  function latam() {
    var en = !ES();
    var sp = document.querySelectorAll('footer span,footer small,footer p');
    for (var i = 0; i < sp.length; i++) {
      var s = sp[i]; if (s.children.length) continue;
      var o = s.getAttribute('data-st-latam');
      if (!o) { var t = (s.textContent || '').trim(); if (!/^HECHO EN LATAM$/i.test(t)) continue; s.setAttribute('data-st-latam', t); o = t; }
      var want = en ? 'MADE IN LATAM' : o;
      if (s.textContent !== want) s.textContent = want;
    }
  }

  /* ---------- Q06: alt localizado (mecanismo; textos ES pendientes de aprobacion) ---------- */
  var ALT_ES = { /* clave de arte (nombre de archivo sin hash ni sufijos) : alt en espanol aprobado */ };
  function claveArte(src) { var m = /\/[0-9a-f]{24}_(.+?)(?:-dark)?(?:-p-\d+|-w\d+)?\.(?:webp|jpe?g|png|svg|avif)(?:[?#].*)?$/i.exec(src || ''); return m ? m[1] : ''; }
  function altLocal() {
    var en = !ES();
    var imgs = document.querySelectorAll('.st-dt img,.st-mb img');
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i];
      if (!im.hasAttribute('data-alt-en')) { var a0 = im.getAttribute('alt'); if (!a0) continue; im.setAttribute('data-alt-en', a0); }
      var key = claveArte(im.currentSrc || im.getAttribute('src'));
      var es = im.getAttribute('data-alt-es') || ALT_ES[key] || (window.CY_ALT_ES && window.CY_ALT_ES[key]) || '';
      var enTxt = (window.CY_ALT_EN && window.CY_ALT_EN[key]) || im.getAttribute('data-alt-en'); /* v46: alt EN corregido por clave de arte (cy-alt-es v2) mientras el elemento no se pueda editar por API (429 en /v2/assets) */
      var want = en ? enTxt : (es || enTxt);
      if (want != null && im.getAttribute('alt') !== want) im.setAttribute('alt', want);
    }
  }

  /* ---------- v47 (QA32 A-02): scrollers del arbol movil enfocables y nombrados ---------- */
  /* axe scrollable-region-focusable: un contenedor con desplazamiento real debe poder recibir el foco (o tener contenido
     enfocable) para que el teclado lo mueva. Solo se toca lo que de verdad desplaza en este momento (scrollWidth/Height >
     client + 1), asi el arbol de escritorio oculto y los carruseles que caben no ganan una parada de tabulador. Se repite en
     cada pasada de run() (carga, 900/2600/4200 ms, resize). El nombre sale del h2 de la seccion (span del idioma activo) o del
     nombre de la ficha (.st-i-c66a267d) para las bios; el foco en .st-bio ademas la revela (regla :focus-within de la hoja). */
  function textoIdioma(el) {
    if (!el) return '';
    var sp = el.querySelector(ES() ? '.lang-es' : '.lang-en');
    return ((sp || el).textContent || '').replace(/\s+/g, ' ').trim();
  }
  var bioFueraOn = false;
  function bioFuera() {
    /* QA31 F-6: tocar fuera de las fichas del equipo cierra la bio abierta (stux 1.2.0 solo alterna al tocar una ficha) */
    if (bioFueraOn) return; bioFueraOn = true;
    var cierra = function (e) {
      if (e.target.closest && e.target.closest('.st-i-fd9273fa')) return;
      var abiertas = document.querySelectorAll('.st-i-fd9273fa.bio-open');
      for (var i = 0; i < abiertas.length; i++) abiertas[i].classList.remove('bio-open');
    };
    if (window.PointerEvent) document.addEventListener('pointerdown', cierra, { passive: true }); else document.addEventListener('touchstart', cierra, { passive: true });
  }
  function regiones() {
    var es = ES();
    bioFuera();
    var scs = document.querySelectorAll('.st-mb [data-st-carr], .st-mb .st-bio');
    for (var i = 0; i < scs.length; i++) {
      var sc = scs[i];
      var bio = sc.classList.contains('st-bio');
      var desplaza = bio ? (sc.scrollHeight > sc.clientHeight + 1) : (sc.scrollWidth > sc.clientWidth + 1);
      if (!desplaza && !sc.__stRegion) continue;
      if (sc.__stRegion) continue;
      sc.__stRegion = 1;
      if (!sc.hasAttribute('tabindex')) sc.setAttribute('tabindex', '0');
      if (!sc.getAttribute('role')) sc.setAttribute('role', 'region');
      /* QA31 F-6: el tap que cierra la bio (stux quita .bio-open) no debe dejarla enfocada, porque :focus-within la
         mantendria visible; el mousedown sintetico del tap no enfoca. El teclado (Tab) sigue enfocando y revelando. */
      if (bio) sc.addEventListener('mousedown', function (e) { e.preventDefault(); });
      if (!sc.getAttribute('aria-label') && !sc.getAttribute('aria-labelledby')) {
        var label;
        if (bio) {
          var card = sc.closest('.st-i-fd9273fa'), nm = card ? card.querySelector('.st-i-c66a267d') : null;
          var img = sc.parentElement ? sc.parentElement.querySelector('img') : null;
          var quien = (nm && nm.textContent.trim()) || (img && (img.getAttribute('alt') || '').split(',')[0]) || '';
          label = (es ? 'Biografía' : 'Biography') + (quien ? (es ? ' de ' : ' of ') + quien : '');
        } else {
          /* v48 (A-05 landmark-unique): el titulo mas cercano ANTES del carrusel dentro de la seccion (el Acto VI del Home tiene
             dos carruseles bajo el mismo h2) y, si aun asi se repite el nombre en la pagina, un ordinal. */
          var sec = sc.closest('[data-screen-label]'), h = null;
          if (sec) { var hs = sec.querySelectorAll('h2,h3'); for (var k = 0; k < hs.length; k++) { if (hs[k].compareDocumentPosition(sc) & 4) h = hs[k]; } }
          var t = textoIdioma(h);
          label = (es ? 'Carrusel' : 'Carousel') + (t ? ': ' + t : '');
        }
        regiones.usados = regiones.usados || {};
        if (regiones.usados[label]) { regiones.usados[label]++; label += ' \u00b7 ' + regiones.usados[label]; } else regiones.usados[label] = 1;
        sc.setAttribute('aria-label', label);
      }
    }
  }

  /* ---------- arranque ---------- */
  function run() {
    if (document.documentElement.classList.contains('cy-theme-anim')) { run.v = 1; clearTimeout(run.tm); run.tm = setTimeout(run, 200); return; } /* v52: aplazado en la fundida */
    if (run.v) { run.v = 0; clearTimeout(run.tm); run.tm = setTimeout(run, 250); return; } /* v52: y 250 ms mas al terminar (las transiciones sobreviven a la clase) */
    var mods = [externos, puntos, desplazate, acto3, formularios, menuMovil, semantica, anclas, latam, altLocal, progresoInit, regiones];
    for (var i = 0; i < mods.length; i++) { try { mods[i](); } catch (e) {} }
  }
  try { viewTransitionSeguro(); } catch (e0) {}
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  window.addEventListener('load', function () { setTimeout(run, 900); setTimeout(run, 2600); setTimeout(run, 4200); });
  var rt = null; var late = function () { clearTimeout(rt); rt = setTimeout(run, 150); };
  window.addEventListener('resize', late, { passive: true });
  new MutationObserver(function (ms) {
    for (var i = 0; i < ms.length; i++) { if (ms[i].attributeName === 'data-st-a3') { try { acto3(); } catch (e) {} } else late(); }
  }).observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['data-st-a3', 'data-cy-lang'] });
})();

/* ===== v55 · CSS de la ola visual 16 sep (antes en el pie del sitio: 9.62b splash, 9.62d bio, 9.62e CTA menu noche). Se inyecta al final del body, donde estaba el pie. ===== */
(function () {
  'use strict';
  if (document.getElementById('st-pages-v56-ola16sep')) return;
  var s = document.createElement('style'); s.id = 'st-pages-v56-ola16sep';
  s.textContent = "/* 9.62b P3 SPLASH-GROTESK · la frase de apertura salia partida: el tramo .cy-splash__ser venia en DM Serif\n   Display y con acento azul propio (cy-splash-v6.css L158-171 dia, L172 noche). La frase base ya es Space\n   Grotesk 600 con la tinta correcta (L141-155), asi que basta neutralizar el tramo serif; no se toca el JS.\n   VUELTA ATRAS: borrar la regla siguiente. */\nhtml:root body .cy-splash .cy-splash__quote .cy-splash__ser{font-family:inherit!important;font-weight:inherit!important;font-style:normal!important;letter-spacing:inherit!important;color:inherit!important;-webkit-text-fill-color:inherit!important;background-image:none!important}\n/* 9.62d P9 BIO-INDICADOR · 9.61 resolvio el acceso tactil pero con un bloque ancho con borde y fondo que\n   competia con la ficha. Se deja solo el indicador: control redondo de 28px alineado a la derecha, area\n   tactil 44x44 por ::after, rotulo bilingue en sr-only (el nombre accesible no se pierde) y el chevron que\n   ya rota con aria-expanded. No se toca el JS de 9.61: abrir, cerrar, teclado y Escape siguen igual.\n   VUELTA ATRAS: borrar este sub-bloque; 9.61 vuelve a pintar el boton ancho. */\n@media (max-width:991px){\nhtml:root body .st-mb .cy-biobtn.cy-biobtn{position:relative!important;width:28px!important;min-width:28px!important;height:28px!important;min-height:28px!important;margin:4px 0 0 auto!important;padding:0!important;border:0!important;border-radius:50%!important;background:transparent!important;color:rgb(90,96,104)!important;justify-content:center!important;gap:0!important}\nhtml:root body .st-mb .cy-biobtn.cy-biobtn::after{content:\"\";position:absolute;inset:-8px}\nhtml:root body .st-mb .cy-biobtn.cy-biobtn .cy-biolbl{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important;border:0!important}\nhtml:root body .st-mb .cy-biobtn.cy-biobtn .cy-biocv{font-size:13px!important;line-height:1!important}\nhtml:root[data-cy-theme=\"noche\"] body .st-mb .cy-biobtn.cy-biobtn{color:var(--cy-faint,#8F98AB)!important}\n}\n/* 9.62e P10 CTA-MENU-NOCHE · con el menu abierto, st-home-v54 L284, st-plataforma-v14q L133 y st-tesis-v33\n   L286 ponian el CTA en #0E1116 sin acotar por tema, ganando (0,6,2) al #E9EDFB del dither (0,2,0): en noche\n   el boton se volvia negro. Se repone blanco con tinta oscura y se excluyen hover/focus/active para que\n   los estados de noche del core sigan mandando.\n   VUELTA ATRAS: borrar la regla siguiente. */\nhtml:root[data-cy-theme=\"noche\"] body .st-mb [data-cy-lang] nav:has([data-st-burger][aria-expanded=\"true\"]) [data-st-nav] a[data-st-cta][data-st-nav-cta]:not(:hover):not(:focus-visible):not(:active){background-color:#FFFFFF!important;background-image:none!important;border-color:#FFFFFF!important;color:#0E1116!important;-webkit-text-fill-color:#0E1116!important}\n";
  (document.body || document.head || document.documentElement).appendChild(s);
})();

/* ===== v77 · cierre de la fundida de tema (Mensajes 59/63, Safari nativo) ===== */
(function () {
  'use strict';
  if (!document.getAnimations || window.__cyCierreFundida) return;
  window.__cyCierreFundida = 1;
  var tms = [], ultimo = 0;
  function deLaFundida(a) {
    if (a.transitionProperty === undefined) return false;
    if (a.playState === 'finished' || a.playState === 'idle') return false;
    try { return a.effect.getTiming().duration === 350; } catch (e) { return false; }
  }
  function muestra() {
    var as = document.getAnimations();
    for (var i = 0; i < as.length; i++) { if (deLaFundida(as[i])) as[i].__cyCt = as[i].currentTime; }
  }
  function cierra(todas) {
    var as = document.getAnimations(), n = 0;
    for (var i = 0; i < as.length; i++) {
      var a = as[i];
      if (!deLaFundida(a)) continue;
      if (!todas && a.__cyCt !== undefined && a.currentTime !== null && a.currentTime > a.__cyCt) continue;
      try { a.finish(); } catch (e) { try { a.cancel(); } catch (e2) {} }
      n++;
    }
    if (n) window.__cyCierreN = (window.__cyCierreN || 0) + n;
    return n;
  }
  function programa() {
    ultimo = Date.now();
    for (var i = 0; i < tms.length; i++) clearTimeout(tms[i]);
    tms = [setTimeout(muestra, 650), setTimeout(function () { cierra(false); }, 900),
           setTimeout(function () { cierra(true); }, 1600), setTimeout(function () { cierra(true); }, 3000)];
  }
  /* v78 (Mensaje 63 persiste en Safari nativo con v77: el texto ya pasa al tema nuevo, pero el fondo de la seccion que estaba
     fuera de pantalla al pulsar se queda en el anterior). (a) Las secciones fuera de la vista al cambiar de tema no funden: cambian
     de golpe (nadie las ve), sin transicion que Safari pueda perder al entrar con el scroll; los revelados de titulos e imagenes no
     se tocan. Las visibles funden como siempre. La visibilidad se lleva con un IntersectionObserver, sin medir al pulsar.
     (b) Tras la fundida, cada seccion recibe un cambio de fondo de 1/255 durante un fotograma, invisible, que obliga a Safari a
     repintarla con su color final. */
  var vis = new Set(), SECS = '[data-screen-label],footer';
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    for (var i = 0; i < es.length; i++) { if (es[i].intersectionRatio > 0) vis.add(es[i].target); else vis.delete(es[i].target); }
  }, { threshold: [0, 0.01] }) : null;
  function vigila() { if (!io) return; var ss = document.querySelectorAll(SECS); for (var i = 0; i < ss.length; i++) { if (!ss[i].__cyVis) { ss[i].__cyVis = 1; io.observe(ss[i]); } } }
  var st = document.createElement('style'); st.id = 'cy-fundido-v78';
  /* v79 (raiz, Safari nativo con v78: Nosotros dia a 1440 -> resize a 390 -> menu -> noche: el fondo de Canto I y de la nav,
     VISIBLES al pulsar, se quedan en dia aunque texto y arte pasan a noche; ni finish() ni el repintado lo recuperan). En los motores
     WebKit (Safari y cualquier navegador de iOS) el cambio de tema no crea transiciones: todo cambia en el mismo fotograma. Durante la ventana
     de la fundida cy-dither ya sustituye la lista de transiciones de todos los elementos, asi que los revelados no pierden nada. Chromium conserva el fundido. */
  var WK = /AppleWebKit/.test(navigator.userAgent) && !/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent);
  if (WK) document.documentElement.classList.add('cy-wk-sinfundido');
  st.textContent = '@media (prefers-reduced-motion:no-preference){html:root.cy-theme-anim [data-cy-sinfundido],html:root.cy-theme-anim [data-cy-sinfundido] :not([data-st-rev]):not([data-st-wipe]):not(img):not([data-cy-lente-refr]),' +
    'html:root.cy-theme-anim.cy-wk-sinfundido,html:root.cy-theme-anim.cy-wk-sinfundido *{transition:none!important}}';
  (document.head || document.documentElement).appendChild(st);
  function marcaFuera() {
    if (!io) return;
    var ss = document.querySelectorAll(SECS);
    for (var i = 0; i < ss.length; i++) { var f = !vis.has(ss[i]); if (f !== ss[i].hasAttribute('data-cy-sinfundido')) { if (f) ss[i].setAttribute('data-cy-sinfundido', ''); else ss[i].removeAttribute('data-cy-sinfundido'); } }
  }
  function empuja() {
    var ss = document.querySelectorAll(SECS), hs = [];
    for (var i = 0; i < ss.length; i++) {
      var q = ss[i]; if (!q.offsetParent && q.tagName !== 'FOOTER') continue;
      var m = /rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/.exec(getComputedStyle(q).backgroundColor || '');
      if (!m || m[4] === '0') continue;
      var r = +m[1], v = 'rgba(' + (r > 0 ? r - 1 : 1) + ', ' + m[2] + ', ' + m[3] + ', ' + (m[4] === undefined ? 1 : m[4]) + ')';
      hs.push([q, q.style.getPropertyValue('background-color'), q.style.getPropertyPriority('background-color'), v]);
    }
    for (var j = 0; j < hs.length; j++) hs[j][0].style.setProperty('background-color', hs[j][3], 'important');
    window.__cyEmpujeN = (window.__cyEmpujeN || 0) + hs.length;
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      for (var k = 0; k < hs.length; k++) { var e = hs[k]; if (e[1]) e[0].style.setProperty('background-color', e[1], e[2]); else e[0].style.removeProperty('background-color'); }
    }); });
  }
  /* v80 (raiz: v79 quitaba la fundida en WebKit y eso cambia un efecto visible; hay que conservarla). En WebKit la fundida ya no
     depende de transiciones CSS por elemento (las que Safari pierde): el cambio de tema se hace dentro de una View Transition del
     documento, que funde en el compositor la captura del tema anterior sobre la del nuevo con la misma duracion (.35 s) y curva (ease)
     que la fundida CSS. Al terminar no queda nada por elemento: lo que se ve es el DOM con su estilo final. El clic en el control de
     tema se retiene en captura y se repite dentro de la transicion (cy-dither lo atiende igual); si la transicion no termina en
     1,5 s se salta. Sin View Transitions, con movimiento reducido o con la pestana oculta, el cambio es directo como en v79. */
  var VT = WK && typeof document.startViewTransition === 'function', vtPasa = 0, vtVivo = null;
  if (VT) {
    var stv = document.createElement('style'); stv.id = 'cy-vt-tema-v80';
    /* v81: la captura vieja se funde por opacidad sobre la nueva opaca (mismo resultado que el fundido cruzado) y sigue al scroll
       (--cy-vt-dy), asi que si se hace scroll durante la fundida no queda una imagen fija encima del contenido; lo que entra por
       abajo ya esta en el tema nuevo, como las secciones fuera de pantalla en la fundida CSS. La nav, fija, se funde aparte en su sitio. */
    stv.textContent = '@keyframes cy-vt-fuera{from{opacity:1}to{opacity:0}}' +
      'html.cy-vt-tema::view-transition-group(*){animation-duration:.35s;animation-timing-function:ease}' +
      'html.cy-vt-tema::view-transition-new(root){animation:none;opacity:1;mix-blend-mode:normal}' +
      'html.cy-vt-tema::view-transition-old(root){animation:cy-vt-fuera .35s ease both;mix-blend-mode:normal;z-index:1;top:-2000px;height:calc(100% + 4000px);object-fit:none;object-position:50% 2000px;background-color:var(--cy-vt-bg,transparent);translate:0 var(--cy-vt-dy,0px)}' +
      'html.cy-vt-tema::view-transition-old(cy-vt-nav),html.cy-vt-tema::view-transition-new(cy-vt-nav){animation-duration:.35s;animation-timing-function:ease}';
    (document.head || document.documentElement).appendChild(stv);
    window.addEventListener('click', function (e) {
      var t = e.target; if (!t || !t.closest) return;
      var b = t.closest('[data-cy-tema],.cy-mode'); if (!b) return;
      if (vtPasa) { e.preventDefault(); return; }
      var actual = document.documentElement.getAttribute('data-cy-theme') === 'noche' ? 'noche' : 'dia';
      if (b.hasAttribute('data-cy-tema') && b.getAttribute('data-cy-tema') === actual) return;
      var rm = false; try { rm = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e2) {}
      if (rm || document.visibilityState !== 'visible' || vtVivo) return;
      e.preventDefault(); e.stopImmediatePropagation();
      var D = document.documentElement; D.classList.add('cy-vt-tema');
      var navs = document.querySelectorAll('nav'), nav = null;
      for (var q = 0; q < navs.length; q++) { if (navs[q].getClientRects().length && !nav) nav = navs[q]; }
      if (nav) nav.style.setProperty('view-transition-name', 'cy-vt-nav');
      var y0 = window.scrollY; D.style.setProperty('--cy-vt-dy', '0px');
      /* v82: el borde que deja la captura al seguir al scroll se rellena con el fondo que habia a la vista (el de la seccion del borde) */
      var bgDe = function (y) { var el = document.elementFromPoint(innerWidth / 2, y), c = null; while (el && el !== document.documentElement) { var v = getComputedStyle(el).backgroundColor; if (v && !/rgba\(0, 0, 0, 0\)|transparent/.test(v)) { c = v; break; } el = el.parentElement; } return c || getComputedStyle(document.body).backgroundColor; };
      try { D.style.setProperty('--cy-vt-bg', bgDe(innerHeight - 4)); } catch (e6) {}
      var sigue = function () { D.style.setProperty('--cy-vt-dy', (y0 - window.scrollY) + 'px'); };
      window.addEventListener('scroll', sigue, { passive: true });
      var fin = function () { D.classList.remove('cy-vt-tema'); vtVivo = null; window.removeEventListener('scroll', sigue); D.style.removeProperty('--cy-vt-dy'); D.style.removeProperty('--cy-vt-bg'); if (nav) nav.style.removeProperty('view-transition-name'); };
      var vt;
      try {
        vt = document.startViewTransition(function () { vtPasa = 1; try { b.click(); } finally { vtPasa = 0; } });
      } catch (e3) { fin(); vtPasa = 1; try { b.click(); } finally { vtPasa = 0; } return; }
      vtVivo = vt; window.__cyVtN = (window.__cyVtN || 0) + 1;
      try { vt.finished.then(fin, fin); } catch (e4) { setTimeout(fin, 600); }
      setTimeout(function () { if (vtVivo === vt) { try { vt.skipTransition(); } catch (e5) {} window.__cyVtSalto = (window.__cyVtSalto || 0) + 1; fin(); } }, 1500);
    }, true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', vigila); else vigila();
  window.addEventListener('load', function () { vigila(); setTimeout(vigila, 2500); });
  new MutationObserver(function () { marcaFuera(); programa(); tms.push(setTimeout(empuja, 1700)); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-cy-theme'] });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && Date.now() - ultimo < 60000) setTimeout(function () { cierra(true); empuja(); }, 400);
  });
})();
/* D1 (#72, 3 oct 2026) CONTORNO ESMERILADO DE ILUSTRACIONES - bloque aislado para st-pages (va al final del fichero, fuera de cualquier IIFE).
   Causa: v88 (N01) llevo la banda de 46 a 14 px (correcto: relieve del bloque normal) y ademas escalo la mascara x0,33. La mascara la
   comparten el clon desenfocado y el velo (tono + filo 1 px + brillo), asi que el velo de noche quedo en .075x.33 = .025 de pico y el
   filo en .21x.33 = .07: sobre arte liso u oscuro el contorno desaparece; solo sobrevive donde el borde del arte tiene textura.
   Pieza: misma banda de 14 px y misma curva; solo devuelve opacidad a la mascara: velo x KV (pico .33 -> 1, el tono que hace el contorno
   uniforme sobre cualquier arte) y clon desenfocado x KL (pico .33 -> .5; el desenfoque no se extiende ni sube: el centro sigue nitido).
   Respeta los lados de cada lente (sueltas 4; bloques solo los del contorno exterior). Idempotente (data-cy-d1). No toca arte ni assets.
   VUELTA ATRAS: borrar este bloque entero. */
(function () {
  var KV = 3.03, KL = 1.5;
  if (window.__cyD1) return; window.__cyD1 = 1;
  var RX = /rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*([0-9.]+)\s*\)/g;
  function esc(s, k) { return s.replace(RX, function (m, a) { var v = Math.min(1, parseFloat(a) * k); return 'rgba(0,0,0,' + (Math.round(v * 1000) / 1000) + ')'; }); }
  function pico(s) { var m, mx = 0; RX.lastIndex = 0; while ((m = RX.exec(s))) mx = Math.max(mx, parseFloat(m[1])); RX.lastIndex = 0; return mx; }
  function masc(el, k) {
    if (!el || el.hasAttribute('data-cy-d1')) return;
    var mk = el.style.webkitMaskImage || el.style.maskImage || '';
    if (!mk || pico(mk) > 0.34) { el.setAttribute('data-cy-d1', '0'); return; } /* solo la curva x0,33 de v88; otra version se deja */
    var n = esc(mk, k); el.style.webkitMaskImage = n; el.style.maskImage = n; el.setAttribute('data-cy-d1', '1');
  }
  function sombra(sr) {
    var st = sr.getElementById('cy-frost'); if (!st || st.hasAttribute('data-cy-d1')) return;
    var t = st.textContent, i = t.indexOf('.art>.cy-frost-velo{');
    if (i < 0 || pico(t) > 0.34) { st.setAttribute('data-cy-d1', '0'); return; }
    st.textContent = esc(t.slice(0, i), KL) + esc(t.slice(i), KV) + '.art>.cy-frost-velo{box-shadow:' + SH.replace(/var\(--cy-velo-filo\)/, 'var(--cy-velo-filo,rgba(255,255,255,.34))').replace(/var\(--cy-velo-brillo\)/, 'var(--cy-velo-brillo,rgba(255,255,255,.15))').replace(/var\(--cy-d1-rel\)/g, 'var(--cy-d1-rel,transparent)') + '}'; st.setAttribute('data-cy-d1', '1');
  }
  function pasa() {
    var v = document.querySelectorAll('[data-cy-lente-velo]:not([data-cy-d1])'), q;
    for (q = 0; q < v.length; q++) masc(v[q], KV);
    v = document.querySelectorAll('[data-cy-lente-lupa]:not([data-cy-d1]),[data-cy-lente-blq]>div:not([data-cy-lente-refr]):not([data-cy-lente-velo]):not([data-cy-d1])');
    for (q = 0; q < v.length; q++) masc(v[q], KL);
    v = document.querySelectorAll('cysure-mockup');
    for (q = 0; q < v.length; q++) if (v[q].shadowRoot) { sombra(v[q].shadowRoot); if (!v[q].shadowRoot.__cyD1) { v[q].shadowRoot.__cyD1 = 1; try { new MutationObserver(pide).observe(v[q].shadowRoot, { childList: true, subtree: true }); } catch (e) {} } }
  }
  var raf = 0; function pide() { if (!raf) raf = requestAnimationFrame(function () { raf = 0; pasa(); }); }
  /* Relieve: el velo suma el mismo relieve interior que los bloques normales de cy-botones (inset 10px por lado; dia rgba(176,192,222,.45),
     noche rgba(159,176,255,.14), aqui .22 porque la queja es de noche); sobre arte claro de dia el velo blanco no se ve y este tinte si. Arte invertido (data-cy-inv) usa el del
     otro tema, como el velo de v75. Va bajo la misma mascara (14 px) y llega al shadow DOM de los mockups por herencia de la variable. */
  var RD = 'rgba(176,192,222,.45)', RN = 'rgba(159,176,255,.22)';
  var SH = 'inset 0 0 0 1px var(--cy-velo-filo),inset 0 0 12px var(--cy-velo-brillo),inset 0 10px 10px -10px var(--cy-d1-rel),inset 0 -10px 10px -10px var(--cy-d1-rel),inset 10px 0 10px -10px var(--cy-d1-rel),inset -10px 0 10px -10px var(--cy-d1-rel)';
  function relieve() { if (document.getElementById('cy-d1-relieve')) return; var s = document.createElement('style'); s.id = 'cy-d1-relieve';
    s.textContent = ':root{--cy-d1-rel:' + RD + '}html[data-cy-theme="noche"]{--cy-d1-rel:' + RN + '}'
      + 'html:not([data-cy-theme="noche"]) [data-cy-lente-velo][data-cy-inv]{--cy-d1-rel:' + RN + '}html[data-cy-theme="noche"] [data-cy-lente-velo][data-cy-inv]{--cy-d1-rel:' + RD + '}'
      + '[data-cy-lente-velo][data-cy-d1]{box-shadow:' + SH + '}';
    (document.head || document.documentElement).appendChild(s); }
  function arranca() { relieve(); pasa(); try { new MutationObserver(function (ms) { for (var a = 0; a < ms.length; a++) for (var b = 0; b < ms[a].addedNodes.length; b++) { var n = ms[a].addedNodes[b]; if (n.nodeType === 1 && (n.hasAttribute('data-cy-lente') || n.hasAttribute('data-cy-lente-blq') || n.tagName === 'CYSURE-MOCKUP' || (n.querySelector && n.querySelector('[data-cy-lente],[data-cy-lente-blq],cysure-mockup')))) { pide(); return; } } }).observe(document.body, { childList: true, subtree: true }); } catch (e) {} }
  if (document.body) arranca(); else document.addEventListener('DOMContentLoaded', arranca);
})();

/* v96-scroll (5 oct 2026) — ver cabecera. Bloque autocontenido; para revertir basta con volver a v95. */
(function () {
  if (window.__cy96s) return; window.__cy96s = 1;
  var MOV = window.matchMedia ? matchMedia('(max-width:991px)') : { matches: false };
  function css() {
    if (document.getElementById('cy-v96-scroll')) return;
    var s = document.createElement('style'); s.id = 'cy-v96-scroll';
    var B = 'html:root body .st-mb ';
    s.textContent = '@media (max-width:991px){'
      + B + '[data-st-rev="off"],' + B + '[data-st-wipe="off"],' + B + 'img[data-st-img]:not([data-st-img="ok"]),' + B + '[data-cy-lente-blq]{transform:none!important;translate:none!important;scale:none!important}'
      + B + '[data-screen-label^="Acto III"] :is([data-cy-lente],[data-cy-lente-blq]){will-change:transform}'
      + '}';
    (document.head || document.documentElement).appendChild(s);
  }
  /* (4) carrusel de agentes (CF, movil): st-flota-ctrl v6 llama setArtWanted(false) a todo lo que no es activo/siguiente en cada scroll,
     y cysure-mockup v5 entonces quita data-assets-ready (arte oculto: background none + img visibility hidden). Al volver a una tarjeta
     el arte no reaparece hasta que el carrusel se asienta (debounce de 60 ms) y, en iOS, hasta redecodificar. */
  function artePatch() {
    var K = window.customElements && customElements.get('cysure-mockup'); if (!K) return false;
    var P = K.prototype; if (P.__cy96s) return true; var o = P.setArtWanted; if (typeof o !== 'function') return false; P.__cy96s = 1;
    P.setArtWanted = function (w, pr) {
      if (!w && this.artDecoded && this.artDecoded()) { this.artWanted = false; if (!this.hasAttribute('data-assets-ready')) this.setAttribute('data-assets-ready', ''); return; }
      if (w && this.artWanted && this.hasAttribute('data-assets-ready') && this.artDecoded && this.artDecoded()) return; /* sin cambio: no reescribir en cada scroll */
      return o.call(this, w, pr);
    };
    return true;
  }
  function carrusel() {
    var scs = document.querySelectorAll('.st-mb [data-st-carr="flota"]');
    for (var i = 0; i < scs.length; i++) (function (sc) {
      if (sc.__cy96s) return; sc.__cy96s = 1;
      var raf = 0;
      var cards = function () { var o = []; for (var k = 0; k < sc.children.length; k++) { var m = sc.children[k].querySelector('cysure-mockup'); if (m) o.push(m); } return o; };
      var activo = function (ms) { var r = sc.getBoundingClientRect(), c = r.left + r.width / 2, b = 0, d = 1e9; for (var k = 0; k < ms.length; k++) { var q = ms[k].getBoundingClientRect(), e = Math.abs(q.left + q.width / 2 - c); if (e < d) { d = e; b = k; } } return b; };
      var pide = function () {
        raf = 0; var ms = cards(); if (!ms.length) return; var r = sc.getBoundingClientRect();
        if (r.bottom < -600 || r.top > innerHeight + 600) return;
        for (var k = 0; k < ms.length; k++) { var q = ms[k].getBoundingClientRect(); if (q.right > r.left - 2 && q.left < r.right + 2 && typeof ms[k].setArtWanted === 'function') ms[k].setArtWanted(true, 'high'); }
        var a = activo(ms), pv = ms[a - 1]; if (pv && typeof pv.ensureArt === 'function' && !(pv.artDecoded && pv.artDecoded())) { pv.artPriority = 'low'; try { pv.ensureArt(); } catch (e) {} }
      };
      var tick = function () { if (!raf) raf = requestAnimationFrame(pide); };
      sc.addEventListener('scroll', tick, { passive: true });
      sc.addEventListener('touchstart', function () { tick(); var ms = cards(), a = activo(ms); [ms[a - 1], ms[a + 1]].forEach(function (m) { var im = m && m.shadowRoot && m.shadowRoot.querySelector('.art>img'); if (im && im.decode) im.decode().catch(function () {}); }); }, { passive: true });
      sc.addEventListener('cysure:sequence-end', tick);
      tick();
    })(scs[i]);
  }
  function arranca() {
    css();
    if (!MOV.matches) return;
    if (!artePatch() && window.customElements) customElements.whenDefined('cysure-mockup').then(function () { artePatch(); carrusel(); });
    carrusel(); setTimeout(carrusel, 1500); setTimeout(carrusel, 4000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arranca); else arranca();
})();

/* ===== v97 (5 oct 2026): carga movil sin re-revelados ni cola de enfoque ===== */
(function () {
  if (window.__cy97) return; window.__cy97 = 1;
  var D = document.documentElement;
  /* (1) lo que ya esta en vista cuando corre este guion (el parser lo pinto antes) se marca y no vuelve a ocultarse */
  function marca() {
    var vh = window.innerHeight || 800, ns = document.querySelectorAll('[data-st-rev],[data-st-wipe],[data-screen-label^="Acto"] h2');
    var rs = [];
    for (var i = 0; i < ns.length; i++) { var e = ns[i]; if (e.hasAttribute('data-cy-visto')) { rs.push(null); continue; } var r = e.getBoundingClientRect(); rs.push(r.width && r.bottom > 0 && r.top < vh ? 1 : 0); }
    for (var j = 0; j < ns.length; j++) if (rs[j]) ns[j].setAttribute('data-cy-visto', '');
  }
  try { if (document.body) marca(); } catch (e) {}
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { try { marca(); } catch (e) {} }, { once: true });
  var st = document.createElement('style'); st.id = 'cy-v97';
  st.textContent = '[data-cy-visto][data-st-rev="off"],[data-cy-visto][data-st-wipe="off"]{opacity:1!important;filter:none!important;text-shadow:none!important;transition:none!important}'
    /* (2) <=991: enfoque corto y simultaneo con el fundido */
    + '@media (max-width:991px){html:not(#cy-t1):not(#cy-t2):not(#cy-t3):not(#cy97) body .st-mb [data-cy-lang] :is(h1,h2,h3,h4)[data-st-wipe="off"]{filter:blur(4px)!important}'
    + 'html:not(#cy-t1):not(#cy-t2):not(#cy-t3):not(#cy97) body .st-mb [data-cy-lang] :is(h1,h2,h3,h4)[data-st-wipe="on"]{transition-property:filter,opacity!important;transition-duration:.6s,.6s!important;transition-delay:0s,0s!important;transition-timing-function:cubic-bezier(.25,.6,.3,1),ease!important}'
    + 'html:root:not(#cy97) body .st-mb h2[data-st-rev="off"]{filter:blur(4px)!important}'
    + 'html:root:not(#cy97) body .st-mb h2[data-st-rev]{transition:opacity .45s ease,filter .45s cubic-bezier(.25,.6,.3,1)!important}}';
  (document.head || D).appendChild(st);
})();
