Estado: programado en Buffer para el domingo 18 de octubre 13:00 (Buenos Aires)

# DeepSeek lanza V4.1-Flash-1017 y abre Search y Fetch por API (17 de octubre de 2026)

## Noticia base
- Fecha del hecho: sábado 17 de octubre de 2026 (anuncio de DeepSeek y entrada del 2026-10-17 en su changelog).
- Qué es: DeepSeek-V4.1-Flash-1017, actualización de V4.1-Flash (mismo nombre de API, `deepseek-flash`, llamadas y precios sin cambios según el changelog). Además, Search y Fetch, el buscador propio de DeepSeek, abiertos a todos los usuarios por API.
- Disponibilidad: el modelo está en la web, la app y la API de DeepSeek; pesos abiertos en Hugging Face y ModelScope. Search y Fetch cuestan 0,75 dólares por 1.000 consultas exitosas cada uno (no se cobran las fallidas, vacías ni los timeouts); límite de 5 consultas por segundo por cuenta y endpoint. Gratis hasta el 31/10 a las 16:00 UTC (00:00 del 1/11 hora de Beijing) solo para llamadas hechas con herramientas del lado del servidor en DeepSeek Harness, Claude Code y Codex, con cuenta de API de DeepSeek. DeepSeek no especifica países ni planes.
- Oficial: https://api-docs.deepseek.com/news/news261017 (anuncio). Guía: https://api-docs.deepseek.com/guides/search. Changelog: https://api-docs.deepseek.com/updates
- Prensa: DiarioBitcoin (17/10), que cita a The Decoder; no la usé para ningún dato de las slides.

## Hooks
1. DeepSeek abrió su buscador por API.
2. Buscar en la web por API cuesta 0,75 dólares por 1.000 consultas.

## Slides
1. Portada (blanco). DeepSeek abrió su buscador por API. Bajada: Lanzó V4.1-Flash-1017 y cobra 0,75 dólares por cada 1.000 consultas. Pastillas: DeepSeek / Desliza →. Objeto: lupa con aro azul sobre esfera perla y cubo plateado. Alt: Ilustración 3D de una lupa con aro azul sobre una esfera perla, al lado de un cubo plateado. Texto: DeepSeek abrió su buscador por API.
2. (oscuro) Nueva versión de DeepSeek V4.1-Flash. Según DeepSeek, completa tareas más rápido, escribe respuestas más cortas y mejora en sus pruebas. Está en su web, su app y su API. Objeto: tres barras de largo decreciente, la última azul. Alt: Ilustración 3D de tres barras horizontales de largo decreciente, la última azul.
3. (gris) Search y Fetch cuestan 0,75 dólares por 1.000. Search busca páginas y Fetch devuelve una en Markdown. Cada una cobra 0,75 dólares por 1.000 consultas exitosas; las fallidas no se cobran. Objeto: aro azul sobre una hoja blanca en una base plateada. Alt: Ilustración 3D de un aro azul que enmarca una hoja blanca apoyada sobre una base gris, con una esfera grafito.
4. (oscuro) Gratis hasta el 31 de octubre. Con una cuenta de API de DeepSeek, las llamadas desde DeepSeek Harness, Claude Code o Codex no se cobran hasta el 31 de octubre, 16:00 UTC. No especifica países. Objeto: pila de monedas perla y una moneda azul de canto. Alt: Ilustración 3D de una pila de monedas perla junto a una moneda azul de canto.
5. Cierre (blanco). ¿Qué automatizarías con esto? Guarda el post para probar Search y Fetch antes del 31. Pastillas: Seguí a @fedex.ia / Guardar. Fuente: api-docs.deepseek.com. Objeto: cierre. Alt: Ilustración 3D de un marcador azul junto a una tarjeta perla.

## Caption para copiar (146 palabras + 5 hashtags)
```text
DeepSeek lanzó el 17 de octubre V4.1-Flash-1017, una actualización de su modelo V4.1-Flash. Según la empresa, completa tareas más rápido, escribe respuestas más cortas y mejora en sus pruebas. Está en su web, su app y su API, y los pesos abiertos están en Hugging Face y ModelScope.

Para quien automatiza: Search y Fetch ya se pueden usar por API. Search busca páginas y Fetch devuelve el contenido de una en Markdown. Cada una cuesta 0,75 dólares por 1.000 consultas exitosas.

Con una cuenta de API de DeepSeek, las llamadas desde DeepSeek Harness, Claude Code o Codex no se cobran hasta el 31 de octubre a las 16:00 UTC. DeepSeek no especifica en qué países está disponible.

Guarda el post y sigue a @fedex.ia para la noticia de IA de cada día.

#InteligenciaArtificial #NoticiasIA #IAenEspañol #DeepSeek #Automatización
```

## Comentario 1 · Fuentes
```text
Fuentes: api-docs.deepseek.com/news/news261017 (anuncio de DeepSeek), api-docs.deepseek.com/guides/search (guía de Search y Fetch: precios, límites y promoción) y api-docs.deepseek.com/updates (changelog)
```

## Comentario 2 · Pregunta
```text
¿Qué tarea de tu trabajo automatizarías si tu modelo pudiera buscar y leer páginas por API?
```

## Fuentes por slide
| Slide | Fuente |
|---|---|
| 01 | Sin línea de fuente (portada) |
| 02 | api-docs.deepseek.com (misma fuente en todas: la línea va solo en el cierre) |
| 03 | api-docs.deepseek.com |
| 04 | api-docs.deepseek.com |
| 05 | api-docs.deepseek.com (línea en el cierre) |

## Verificación
| Dato | Fuente donde lo comprobé |
|---|---|
| Fecha 17/10/2026 | Anuncio news261017 (fechado 17/10) y changelog, entrada 2026-10-17 |
| Más rápido, respuestas más cortas, mejores resultados; web, app y API; pesos en Hugging Face y ModelScope | Anuncio de DeepSeek |
| Search y Fetch abiertos a todos por API; 0,75 dólares por 1.000 llamadas por endpoint | Anuncio y guía /guides/search |
| Search busca páginas; Fetch devuelve una página en Markdown; solo se cobran respuestas 200 con resultados | Guía /guides/search |
| Gratis hasta el 31/10 16:00 UTC en DeepSeek Harness, Claude Code y Codex (herramientas del lado del servidor, usuarios de API) | Anuncio (16:00 UTC) y guía (00:00 Beijing del 1/11, equivalente) |
| Sin países especificados | Ni el anuncio, ni la guía, ni el changelog los nombran |

Dejé afuera: el tamaño del modelo (la ficha de Hugging Face dice 763B y un agregador 552B; no coinciden), los puntajes de las pruebas (solo en la ficha del modelo en Hugging Face y comparados con modelos de terceros, sin verificación independiente), la licencia MIT (solo en la ficha) y los ejemplos de proyectos del anuncio.

Candidatas descartadas: Amazon Bee Frontier y Eclipse (anunciadas el 15/10, fuera de plazo; sin países ni envíos), Bluesky Attie (15/10), Claude Code v2.1.302 (aviso de cierre de Claude Design el 14/12; es una nota de versión, no un anuncio), Meta Creator Assistant (junio), OpenAI robot humanoide (sin producto), Glimpse de Elorian (solo prensa local, sin anuncio oficial leído), Gemini 4 Argon, Muse Wonder y GPT-Live-1.1 (ya cubiertos).
