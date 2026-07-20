# Plan de medicion (Fase 8)

## Setup (una vez, al pasar a cysure.ai en produccion)
1. Verificar propiedad en Google Search Console (DNS TXT) y enviar sitemap.xml (Webflow lo genera al publicar en dominio custom; hoy en staging *.webflow.io no existe y robots.txt bloquea todo por diseno de Webflow).
2. GA4 via GTM ya existe con evento tesis_unlock: no duplicarlo. Anadir dimension "session_source_medium" a los reportes de conversion del form de evaluacion (submit del modal demo) para atar organico a conversiones.
3. Bing Webmaster Tools (gratis, alimenta a Copilot: canal GEO).

## KPIs mensuales
1. GSC: impresiones y clics por cluster (6 clusters del keyword map), keywords en top 10 y top 3.
2. Paginas indexadas vs paginas publicadas.
3. Trafico organico a paginas de servicio (GA4, canal Organic Search).
4. Conversiones asistidas por organico: envios del form de evaluacion + tesis_unlock.
5. Visibilidad GEO: muestreo mensual de 10 preguntas clave en ChatGPT, Perplexity, Claude y AI Overviews
   (documentar si Cysure aparece citado y con que pagina). Preguntas base: las 10 del keyword map P1.
6. Referrals de motores de IA (GA4): segmento con session_source que contenga chatgpt, perplexity, gemini,
   copilot, claude o deepseek. Medir sesiones Y tasa de evento clave por separado. Benchmark de la industria
   validado con data primaria de un sitio B2B del nicho: el trafico desde ChatGPT convierte 2 a 3 veces mejor
   que el organico de Google (poco volumen, altisima intencion). Si ese patron se repite en Cysure, cada cita
   GEO vale mas que una posicion organica equivalente.
7. Reporte "Generative AI features" de GSC (disponible en la consola desde mayo 2026): impresiones en
   AI Overviews / AI Mode por pagina, revision mensual. Es la unica fuente directa de citabilidad en Google.

## Nota Bing (prioridad subida)
En el nicho, Bing organico genera ~18% del volumen de Google con conversiones reales, y ademas alimenta a
Copilot. Dar de alta Bing Webmaster Tools el MISMO dia que GSC al pasar a produccion, no despues.

## Baseline y expectativas honestas
- Hoy (staging): 0 indexacion (robots bloqueado por diseno en webflow.io). El reloj arranca al publicar en cysure.ai.
- Dias 0 a 60: indexacion completa, primeras impresiones long-tail del nicho propietario.
- Dias 60 a 90: top 10 en keywords de nicho (seguro parametrico cibernetico, seguro contra riesgos de IA) y primeras citas GEO.
- Dias 90 a 180: crecimiento en long-tail informacional; los head terms (seguro cibernetico) toman mas de 6 meses.
