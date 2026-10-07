/* 6.1b · cabecera del sitio, justo tras el comentario 6.1 (producción 6 oct 2026 15:24Z).
   La elección manual de tema/idioma dura solo la visita (sesión de pestaña); en una visita nueva
   manda el dispositivo (prefers-color-scheme / idioma del navegador). */
try{if(!sessionStorage.getItem('cy-visita')){localStorage.removeItem('cy-user-theme');localStorage.removeItem('cy-user-lang');sessionStorage.setItem('cy-visita','1');}}catch(e){}
