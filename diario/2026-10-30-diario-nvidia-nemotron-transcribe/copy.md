Estado: programado en Buffer para el viernes 30 de octubre 13:00 (Buenos Aires)

# Nvidia · Nemotron 3.5 Transcribe (30 de octubre de 2026)

## Noticia base
- Hecho: Nvidia publicó el 28 de octubre de 2026 Nemotron 3.5 Transcribe, un modelo abierto de voz a texto, y la versión 2 de su dataset Granary.
- Disponibilidad: pesos abiertos en Hugging Face, build.nvidia.com, GitHub y NGC. Licencia OpenMDW-1.1, «ready for commercial or non-commercial use» según la ficha. Solo grabaciones, no en vivo. Despliegue listado en 1× H100 80 GB (también A100, B200, GB200, DGX Spark, RTX 5090, RTX PRO 6000, H200, L40S). Países: la fuente no especifica.
- Oficial: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B (ficha del modelo de Nvidia; no encontré entrada de blog de Nvidia)
- Prensa: https://techcrunch.com/2026/10/28/voice-ai-in-vogue-nvidia-releases-new-open-transcription-model/

## Hooks
1. Nvidia abre un transcriptor de 40 idiomas.
2. Un modelo abierto pasa tus audios a texto, si tienes la placa.

## Slides
1. Portada (blanco). Eyebrow «Nvidia · 28 de octubre». Titular «Nvidia abre un transcriptor de 40 idiomas.» Bajada «Qué hace y qué necesitas.» Pastillas «Transcripción» y «Desliza →». Objeto 3D: barras de distinta altura en forma de onda de sonido, la central en azul. Alt: Ilustración 3D de barras de distintas alturas que forman una onda de sonido, con la barra central en azul. Texto: Nvidia abre un transcriptor de 40 idiomas.
2. Qué pasó (oscuro). «Convierte audio en texto en 40 idiomas.» Cuerpo: Según Nvidia, Nemotron 3.5 Transcribe también traduce 31 idiomas hacia y desde el inglés. Acepta grabaciones de hasta una hora. Objeto 3D: cilindro claro junto a tres láminas apiladas, una azul. Alt: Ilustración 3D de un cilindro claro junto a tres láminas apiladas, una de ellas azul, que representan el paso de audio a texto.
3. Disponibilidad (gris). «Es gratis, pero pide una placa potente.» Cuerpo: Según su ficha, los pesos son abiertos, permite uso comercial y pide una placa como la H100; no transcribe en vivo. No especifica en qué países está disponible. Objeto 3D: chip grafito con un cubo azul encima. Alt: Ilustración 3D de un chip gris grafito con un cubo azul encima.
4. Qué significa (oscuro). «Tú lo vas a notar en las apps.» Cuerpo: Si grabas podcasts, videos o reuniones, mira si tus apps de subtítulos lo incorporan. Para correrlo tú mismo hace falta un equipo técnico. Objeto 3D: cuatro tarjetas claras en escalera, una azul. Alt: Ilustración 3D de cuatro tarjetas claras apiladas en escalera, una de ellas azul.
5. Cierre (blanco). «¿Qué audio pasarías a texto primero?» Cuerpo: Guarda el post para revisar si tus apps lo suman. Pastillas «Seguí a @fedex.ia» y «Guardar». Fuente: huggingface.co. Objeto 3D: marcador azul y tarjeta perla (cierre del kit).

## Caption para copiar (119 palabras + 5 hashtags)
```text
Nvidia lanzó el 28 de octubre Nemotron 3.5 Transcribe, un modelo que convierte grabaciones en texto en 40 idiomas. Según Nvidia, también traduce 31 de ellos hacia y desde el inglés y acepta audios de hasta una hora.

Los pesos son abiertos y la ficha del modelo dice que se puede usar de forma comercial. La condición: pide una placa de video potente, como la H100 que lista Nvidia, y solo trabaja con grabaciones, no en vivo. La empresa no especifica en qué países está disponible.

Si haces podcasts, videos o reuniones, lo que te interesa es ver si tus apps de subtítulos lo incorporan. Guarda este post para acordarte y sigue a @fedex.ia para no perderte lo próximo.

#InteligenciaArtificial #NoticiasIA #IAenEspañol #Nvidia #Transcripción
```

## Comentario 1 · Fuentes
```text
Fuentes: huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B (ficha oficial de Nvidia) y techcrunch.com/2026/10/28/voice-ai-in-vogue-nvidia-releases-new-open-transcription-model (nota de prensa).
```

## Comentario 2 · Pregunta
```text
¿Qué grabación te gustaría tener en texto: un podcast, una reunión o un video?
```

## Fuentes por slide
| Slide | Fuente |
|---|---|
| 1 | Sin línea de fuente (portada) |
| 2 a 4 | huggingface.co (ficha oficial), techcrunch.com (prensa); la línea va solo en el cierre |
| 5 | huggingface.co |

## Verificación
| Dato | Dónde lo comprobé |
|---|---|
| Fecha del hecho: 28 de octubre de 2026 | Ficha de Hugging Face («Release date: October 28, 2026») y TechCrunch (28 oct, 8:00 PDT) |
| 40 idiomas de transcripción | Ficha y TechCrunch |
| 31 idiomas de traducción hacia y desde el inglés | TechCrunch (atribuido a Nvidia en la slide) |
| Hasta 1 hora de audio | Ficha (65.536 tokens de contexto) y TechCrunch |
| Pesos abiertos, uso comercial y no comercial | Ficha (licencia OpenMDW-1.1); TechCrunch lo llama «free, open-weight» |
| Solo grabaciones, no en vivo | Ficha («offline model») y TechCrunch |
| Placa: H100 80 GB listada | Ficha (tabla de hardware) |
| Países | Ni la ficha ni TechCrunch los nombran: «No especifica» |

Dejé afuera: el conteo de hablantes (la ficha y TechCrunch no coinciden: ocho vs. etiquetas de 0 a 3), los datos de benchmark (los da solo Nvidia y no están verificados de forma independiente) y el tamaño de Granary v2 (las fuentes discrepan). No hallé un post de blog de Nvidia; el anuncio oficial que leí es la ficha del modelo.

Candidatas descartadas: Claude Enterprise smart reports (28 oct, solo plan Enterprise, poca relevancia para la audiencia), plugins de iCloud en ChatGPT (27 oct, fuera de ventana), Gemini 4 Carbon y Genie 4 (ya cubiertas).
