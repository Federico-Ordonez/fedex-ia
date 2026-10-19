# fedex-ia

Repo de contenido de @fedex.ia: guías, herramientas de investigación y agentes.

## Guías en PDF

Toda guía en PDF para @fedex.ia sigue `guias/estilo/ESTILO-GUIA-PDF.md`: formato 1080 × 1350, colores, tipografías, componentes, orden de páginas y reglas de contenido. El CSS sale del Apéndice A de ese archivo; no lo copies a mano en otro lado.

- Las tipografías están descargadas en `guias/estilo/fuentes/`, porque la exportación puede correr sin internet.
- La cuenta va siempre como `@fedex.ia`.
- Exportá con el Chromium de `/opt/pw-browsers` y revisá el PDF convertido a imagen antes de entregarlo (sección 8 del estilo).
- Ejemplo de guía armada con este estilo: `guias/pdf/construir.py`, que genera `guias/100-codigos-fotos-fedex-ia.pdf` a partir de `guias/100-codigos-fotos.md`.
