# Estilo de guías PDF · @fedex.ia (v1, octubre 2026) · versión autocontenida

Este archivo trae todo lo necesario para armar una guía con el estilo de @fedex.ia sin acceso a la computadora de Federico: las reglas (secciones 1 a 7), el CSS completo con las tipografías de Google Fonts y el logo embebido (Apéndice A), y la plantilla HTML base (Apéndice B).

**Cómo usarlo:** copiá la plantilla del Apéndice B, pegá el CSS del Apéndice A dentro del `<style>`, reemplazá los `[corchetes]` y las cajas `.ph-img` por las imágenes reales (como URL o en base64) y exportá a PDF (sección 8).

---

## 1. Formato

- **Página de 1080 × 1350 px (4:5, vertical).** Se lee entera en el celular sin hacer zoom. Una sección `.pg` equivale a una página.
- **Márgenes internos:** 120 px arriba, 90 px a los costados, 110 px abajo.
- **Largo:** de 7 a 10 páginas. Nunca más de 12.
- **Texto real, no imágenes de texto:** así el prompt se puede seleccionar y copiar desde el celular.

## 2. Color

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#14161C` | Títulos y texto fuerte |
| `--mute` | `#4E5464` | Texto de cuerpo |
| `--soft` | `#646C7E` | Encabezado, pie y etiquetas chicas |
| `--blue` | `#2F6BFF` | Números de paso, `[slots]` del prompt, acentos |
| `--violet` | `#8B3DFF` | Notas, etiquetas de los prompts extra, final del degradé |
| `--green` | `#2DBE6C` | Checks ✓ y ejemplo "bueno" |
| `--red` | `#F0533E` | Ejemplo "malo" ✕ |
| `--orange` / `--orange2` | `#D9652F` / `#F07A3E` | Color del logo: regalo y acentos de marca |
| `--bg` | `#EEF2FA` | Fondo base |

- **Fondo de página:** `--bg` con tres manchas suaves, celeste arriba, durazno abajo a la izquierda y lila abajo a la derecha. Es el mismo fondo de los reels.
- **Degradé de texto** (`.grad`, de azul a violeta): solo en una línea por guía, la línea destacada de la portada.
- **Superficies:** tarjetas blancas `#FFFFFF` con bordes redondeados de 22 a 30 px.

## 3. Tipografía

| Rol | Fuente | Tamaño / peso |
|---|---|---|
| Título de portada `h1` | Inter Tight | 94 px · 900 · interlineado .95 · tracking -.035em |
| Título de página `h2` | Inter Tight | 66 px · 900 · tracking -.04em |
| Subtítulo `h3` | Inter Tight | 25 a 32 px · 800 |
| Bajada `.lead` | Inter | 31 px · 500 · interlineado 1.5 |
| Cuerpo `p` | Inter | 21 a 27 px · 500 |
| Prompt y código | JetBrains Mono | 20 px · 500 · interlineado 1.48 |
| Encabezado y pie | Inter | 20 a 22 px · 600 · `--soft` |

- Nunca menos de 19 px. En el celular la página se ve al 35-40 % de su tamaño.
- El texto va en voseo y segunda persona: "abrí", "tocá", "copiá", "completá".

## 4. Anatomía de cada página

```
┌─────────────────────────────────────────┐
│ (logo) @fedex.ia            Sección     │  ← .hdr  (y 52)
│                                         │
│ ① Paso 1                                │  ← .eyebrow (opcional)
│ Título de la página                     │  ← h2
│ Bajada de 1 a 3 líneas                  │  ← .lead
│                                         │
│  [ contenido: tarjetas, grilla, prompt ]│
│                                         │
│ Tema corto / aclaración          03     │  ← .ftr  (número de página)
└─────────────────────────────────────────┘
```

- **Encabezado:** a la izquierda el logo redondo + @fedex.ia; a la derecha el nombre de la sección ("Paso 1", "Ejemplo", "Ayuda").
- **Pie:** a la izquierda el tema o una aclaración ("Las imágenes son ilustrativas…"); a la derecha el número de página con dos dígitos.

## 5. Componentes (clases de `fedex-guia.css`)

| Componente | Clase | Cuándo usarlo |
|---|---|---|
| Logos de las herramientas | `.logos` + `.tile` (`.clogo` Claude, `.cv` Canva) | Solo en la portada |
| Abanico de imágenes | `.fan img` (3 fotos rotadas -7°, 2°, 7°) | Portada |
| Tarjeta | `.card` | Agrupar listas o datos |
| Checklist | `ul.chk > li` | Requisitos, índice, beneficios |
| Etiqueta de paso | `.eyebrow > b` | Arriba del título en las páginas de pasos |
| Grilla de pasos | `.steps > .st` (captura + `.n` número + `h3` + `p`) | 2 a 4 pasos por página, en 2 columnas |
| Nota | `.note > .i` | Avisos para evitar errores (máximo 2 por página) |
| Caja de prompt | `.prompt` + `pre` + `.slot` | El recurso principal. Entra entero en una página |
| Datos del ejemplo | `.ex` (`.k` etiqueta + `.v` valor) | Ejemplo completo |
| Resultados | `.res figure` | De 3 a 4 imágenes con epígrafe |
| Malo / bueno | `.bm .row` (`.x` rojo, `.ok` verde) | Enseñar a completar los campos |
| Prompt extra | `.xp .it` (`h3` + etiqueta `i` + `code`) | Bonus |
| Problema y solución | `.fq .it` | "Si algo no funciona" |
| Botón | `.pillcta` (negro) | Seguirte, en el cierre |
| Regalo | `.gift` (naranja con ícono) | Opcional, para mencionar otro regalo |
| Logo grande | `.big-av` | Cierre |

## 6. Orden de páginas

1. **Portada:** logos, título de 4 líneas con una en degradé, bajada con el dato que baja la barrera ("Funciona con Canva gratis") y abanico de 3 imágenes.
2. **Qué vas a lograr:** bajada + tarjeta "Necesitás" + tarjeta "En esta guía".
3. y 4. **Pasos:** capturas del video o de la herramienta, un verbo por paso.
5. **El recurso:** el prompt entero, con los campos para completar en azul.
6. **Ejemplo completo:** un negocio ficticio + el resultado.
7. **Cómo completarlo bien:** cuatro filas con un ejemplo malo y uno bueno.
8. **Extras:** 3 a 5 prompts cortos.
9. **Si algo no funciona:** 4 a 5 problemas, cada uno con su solución.
10. **Cierre:** logo, "¿Te sirvió?", pedido de etiquetarte y botón "Seguime en @fedex.ia".

## 7. Reglas de contenido

- **Negocios ficticios** en los ejemplos (por ejemplo, "Café Brote"). Nunca clientes reales ni fotos personales.
- **Aclarar lo que no es real:** las capturas armadas se marcan como "ilustrativas" y las fotos de IA como "generadas con IA".
- **Ningún dato sin confirmar:** precios, planes gratuitos o tiempos ahorrados solo si están verificados.
- **Una idea por tarjeta.** Si un texto pasa de 3 líneas, se divide.

## 8. Exportar a PDF

Usá un Chromium headless, porque respeta `@page`, los degradés y el texto con degradé:

- **Playwright (Python):** `page.goto(url_o_file)`, esperá `page.wait_for_load_state('networkidle')` para que carguen las tipografías y después `page.pdf(path='guia.pdf', prefer_css_page_size=True, print_background=True)`.
- **Puppeteer (Node):** `page.pdf({ path: 'guia.pdf', preferCSSPageSize: true, printBackground: true })`.
- **Chrome por consola:** `chrome --headless=new --no-pdf-header-footer --virtual-time-budget=4000 --print-to-pdf=guia.pdf guia.html`.

Evitá WeasyPrint y wkhtmltopdf: no soportan bien `background-clip:text` ni algunos efectos del fondo.

- **No borrar el bloque `@media print`** del CSS. Las sombras se ven bien en el navegador, pero en el PDF aparecen como rectángulos grises en Vista Previa y en el celular. Ese bloque las reemplaza por bordes finos.
- **Revisá el PDF exportado,** no el HTML. Convertí las páginas a imagen (por ejemplo con `pdftoppm -r 40 -jpeg guia.pdf p`) y miralas antes de entregar.
- **Si las tipografías no cargan** (sin internet), el diseño cae en una fuente de sistema y los títulos se ven más anchos: verificalo en la primera página.
- **Entrega:** Instagram no deja adjuntar PDFs por DM. Se sube a Google Drive con acceso por link y se manda el link.

---

## Apéndice A · CSS completo

```css
/* ===== fedex.ia · estilo guía PDF · v1 (2026-10) · autocontenido ===== */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Inter+Tight:wght@800;900&family=JetBrains+Mono:wght@500&family=Caveat+Brush&display=block');
@page{size:1080px 1350px;margin:0}
*{margin:0;padding:0;box-sizing:border-box}
:root{--logo:url(data:image/jpeg;base64,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);--ink:#14161C;--mute:#4E5464;--soft:#646C7E;--blue:#2F6BFF;--violet:#8B3DFF;--green:#2DBE6C;--red:#F0533E;--orange:#D9652F;--orange2:#F07A3E;--line:#DCE2EE;--bg:#EEF2FA}
html,body{background:#EEF2FA;-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{font-family:Inter,sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased}
.pg{position:relative;width:1080px;height:1350px;overflow:hidden;page-break-after:always;break-after:page;padding:120px 90px 110px;
  background:radial-gradient(60% 45% at 85% 100%,#D9CCFF 0%,transparent 70%),radial-gradient(55% 40% at 0% 100%,#FFDCCB 0%,transparent 70%),radial-gradient(60% 40% at 40% 0%,#D6E4FF 0%,transparent 70%),#EEF2FA}
.pg:last-child{page-break-after:auto;break-after:auto}
.hdr{position:absolute;left:90px;right:90px;top:52px;display:flex;justify-content:space-between;align-items:center;font:600 22px Inter;color:var(--soft)}
.hdr .h{display:flex;align-items:center;gap:10px;color:#3A3F4B}
.av{width:38px;height:38px;border-radius:50%;background-image:var(--logo)!important;background-size:cover!important;background:#D9652F;color:#fff;display:inline-flex;align-items:center;justify-content:center;font:900 18px 'Inter Tight'}
.ftr{position:absolute;left:90px;right:90px;bottom:48px;display:flex;justify-content:space-between;font:600 20px Inter;color:var(--soft)}
.eyebrow{letter-spacing:-.01em;display:inline-flex;align-items:center;gap:12px;padding:10px 22px 10px 10px;border-radius:999px;background:rgba(255,255,255,.85);font:800 26px 'Inter Tight';box-shadow:0 6px 18px rgba(40,50,90,.08)}
.eyebrow b{width:40px;height:40px;border-radius:50%;background:var(--blue);color:#fff;display:inline-flex;align-items:center;justify-content:center;font:800 22px 'Inter Tight'}
h1{font:900 104px/0.95 'Inter Tight';letter-spacing:-.035em}
h2{font:900 66px/1.02 'Inter Tight';letter-spacing:-.04em;margin-top:26px}
h3{font:800 32px/1.2 'Inter Tight';letter-spacing:-.02em}
p,li{font:500 27px/1.5 Inter;color:var(--mute)}
.lead{font:500 31px/1.5 Inter;color:var(--mute);margin-top:22px}
.card{background:#fff;border-radius:30px;box-shadow:0 18px 50px rgba(40,50,90,.10);padding:36px 40px}
.grad{background:linear-gradient(135deg,var(--blue),var(--violet));-webkit-background-clip:text;background-clip:text;color:transparent}
.clogo{display:inline-block;width:1em;height:1em;vertical-align:-.12em}
.cv{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background:linear-gradient(135deg,#00C4CC 0%,#3A6BF0 55%,#7D2AE8 100%);color:#fff;font-family:'Caveat Brush';line-height:1}
.tile{border-radius:28px;background:#fff;box-shadow:0 14px 34px rgba(40,50,90,.14);display:flex;align-items:center;justify-content:center}
/* portada */
.cover h1{margin-top:36px;font-size:94px}
.logos{display:flex;align-items:center;gap:26px;margin-top:60px}
.logos .op{font:800 70px 'Inter Tight';color:#3A3F4B}
.fan{position:absolute;left:0;right:0;bottom:105px;height:400px}
.fan img{position:absolute;border-radius:22px;box-shadow:0 24px 50px rgba(40,50,90,.25);object-fit:cover;border:8px solid #fff}
.pillcta{display:inline-block;margin-top:34px;padding:16px 30px;border-radius:999px;background:var(--ink);color:#fff;font:700 26px Inter}
/* pasos */
.steps{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin-top:44px}
.st{background:#fff;border-radius:26px;overflow:hidden;box-shadow:0 12px 34px rgba(40,50,90,.09)}
.st img{width:100%;height:250px;object-fit:cover;object-position:50% 30%;display:block;background:#F4F1EB}
.st .tx{padding:20px 24px 24px;display:flex;gap:16px;align-items:flex-start}
.st .n{flex:none;width:44px;height:44px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;font:800 22px 'Inter Tight'}
.st h3{font-size:27px}
.st p{font-size:21px;line-height:1.4;margin-top:4px}
/* prompt */
.prompt{margin-top:26px;background:#fff;border-radius:28px;padding:30px 38px;box-shadow:0 18px 50px rgba(40,50,90,.10);border:2px solid #E2EBFF}
.prompt .tt{display:flex;justify-content:space-between;align-items:center;font:800 26px Inter;margin-bottom:18px}
.prompt .tt span{font:700 18px Inter;color:var(--blue);background:#EEF3FF;padding:8px 16px;border-radius:999px}
.prompt pre{white-space:pre-wrap;font:500 20px/1.48 'JetBrains Mono',monospace;color:#2A2E38}
.slot{color:var(--blue);font-weight:500;background:#EEF3FF;border-radius:6px;padding:0 4px}
.note{margin-top:26px;display:flex;gap:16px;align-items:flex-start;background:rgba(255,255,255,.7);border-radius:22px;padding:22px 26px}
.note .i{flex:none;width:40px;height:40px;border-radius:50%;background:var(--violet);color:#fff;display:flex;align-items:center;justify-content:center;font:800 22px Inter}
.note p{font-size:23px}
/* ejemplo */
.ex{display:grid;grid-template-columns:1fr 1fr;gap:16px 28px;margin-top:30px}
.ex .k{font:700 19px Inter;letter-spacing:.14em;color:var(--soft);text-transform:uppercase}
.ex .v{font:600 26px/1.35 Inter;color:var(--ink);margin-top:4px}
.res{display:flex;gap:18px;margin-top:40px;align-items:flex-end}
.res figure{flex:1}
.res img{width:100%;border-radius:18px;box-shadow:0 12px 30px rgba(40,50,90,.18);display:block;object-fit:cover}
.res figcaption{font:600 19px Inter;color:var(--mute);margin-top:10px;text-align:center}
/* bueno / malo */
.bm{margin-top:30px;display:flex;flex-direction:column;gap:20px}
.bm .row{background:#fff;border-radius:24px;padding:24px 30px;box-shadow:0 10px 30px rgba(40,50,90,.08)}
.bm h3{font-size:28px;margin-bottom:12px}
.bm .l{display:flex;gap:14px;align-items:flex-start;font:500 23px/1.4 Inter;color:var(--mute);margin-top:6px}
.bm .x,.bm .ok{flex:none;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:800 17px Inter;color:#fff;margin-top:2px}
.bm .x{background:var(--red)}.bm .ok{background:var(--green)}
/* extras */
.xp{margin-top:30px;display:flex;flex-direction:column;gap:18px}
.xp .it{background:#fff;border-radius:22px;padding:22px 28px;box-shadow:0 10px 28px rgba(40,50,90,.08)}
.xp .it h3{font-size:25px;display:flex;align-items:center;gap:12px}
.xp .it h3 i{font-style:normal;font:800 18px Inter;color:var(--violet);background:#F3EDFF;border-radius:999px;padding:4px 12px}
.xp .it code{display:block;margin-top:10px;font:500 20px/1.45 'JetBrains Mono',monospace;color:#2A2E38;background:#F6F8FC;border-radius:14px;padding:14px 18px}
/* problemas */
.fq{margin-top:30px;display:flex;flex-direction:column;gap:16px}
.fq .it{background:#fff;border-radius:22px;padding:22px 28px;box-shadow:0 10px 28px rgba(40,50,90,.08)}
.fq h3{font-size:26px}.fq p{font-size:22px;margin-top:6px;line-height:1.45}
/* cierre */
.end{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.end h2{font-size:84px}
.big-av{width:170px;height:170px;border-radius:50%;background-image:var(--logo)!important;background-size:cover!important;background:#D9652F;display:block}
.chk{list-style:none;margin-top:40px;text-align:left;display:inline-block}
.chk li{font:600 28px/1.4 Inter;color:var(--ink);margin-top:16px;display:flex;gap:16px;align-items:center}
.chk li:before{content:'✓';flex:none;width:40px;height:40px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font:800 22px Inter}
@media print{
  *{box-shadow:none!important;filter:none!important}
  .card,.st,.prompt,.bm .row,.xp .it,.fq .it,.tile,.eyebrow,.note{border:1.5px solid #DCE2EE}
  .fan img,.res img{border:6px solid #fff;outline:1.5px solid #DCE2EE}
}
/* regalo / acento de marca */
.gift{display:inline-flex;align-items:center;gap:12px;padding:12px 26px 12px 12px;border-radius:999px;background:linear-gradient(135deg,var(--orange2),var(--orange));color:#fff;font:800 28px 'Inter Tight';letter-spacing:-.02em}
.gift .gi{width:46px;height:46px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center}

/* imagen faltante: caja con degradé (reemplazar por fotos reales) */
.ph-img{background:linear-gradient(135deg,#E9C9A0,#6B4A2F)}
```

## Apéndice B · Plantilla HTML base (7 páginas)

```html
<!doctype html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>[Título de la guía] · @fedex.ia</title>
<style>
/* pegá acá el CSS completo del Apéndice A */
</style>
</head>
<body>

<!-- 1 · PORTADA: logos de las herramientas, título de 4 líneas con 1 línea en degradé, bajada, abanico de 3 imágenes -->
<section class="pg cover">
  <div class="hdr"><div class="h"><span class="av"></span>@fedex.ia</div><div>Guía gratuita</div></div>
  <div class="logos">
    <div class="tile" style="width:150px;height:150px"><span class="clogo" style="font-size:92px"></span></div>
    <div class="op">+</div>
    <div class="tile" style="width:150px;height:150px"><span class="cv" style="width:106px;height:106px;font-size:86px">C</span></div>
  </div>
  <h1>[Línea 1]<br>[Línea 2]<br><span class="grad">[línea destacada]</span><br>[Línea 4].</h1>
  <p class="lead">[Qué trae la guía en una frase.] [Dato que baja la barrera.]</p>
  <div class="fan">
    <div class="ph-img" style="left:90px;top:60px;width:264px;height:330px;transform:rotate(-7deg);position:absolute;border-radius:22px;border:8px solid #fff"></div>
    <div class="ph-img" style="left:350px;top:10px;width:370px;height:370px;transform:rotate(2deg);z-index:2;position:absolute;border-radius:22px;border:8px solid #fff"></div>
    <div class="ph-img" style="left:720px;top:30px;width:230px;height:370px;transform:rotate(7deg);position:absolute;border-radius:22px;border:8px solid #fff"></div>
  </div>
  <div class="ftr"><div>[Tema corto]</div><div>01</div></div>
</section>

<!-- 2 · INTRO: lead + tarjetas con checklist -->
<section class="pg">
  <div class="hdr"><div class="h"><span class="av"></span>@fedex.ia</div><div>Antes de empezar</div></div>
  <h2>Qué vas a lograr</h2>
  <p class="lead">[2-3 líneas: el resultado concreto que obtiene quien sigue la guía.]</p>
  <div class="card" style="margin-top:44px">
    <h3>Necesitás</h3>
    <ul class="chk" style="margin-top:6px"><li>[Requisito 1]</li><li>[Requisito 2]</li><li>[Tiempo estimado]</li></ul>
  </div>
  <div class="card" style="margin-top:28px">
    <h3>En esta guía</h3>
    <ul class="chk" style="margin-top:6px"><li>Paso 1 · [...]</li><li>Paso 2 · [...]</li><li>Un ejemplo completo</li><li>Si algo no funciona</li></ul>
  </div>
  <div class="ftr"><div>[Tema corto]</div><div>02</div></div>
</section>

<!-- 3 · PASOS: eyebrow "Paso N" + grilla 2x2 con captura, número y texto + notas -->
<section class="pg">
  <div class="hdr"><div class="h"><span class="av"></span>@fedex.ia</div><div>Paso 1</div></div>
  <span class="eyebrow"><b>1</b>Paso 1</span>
  <h2>[Acción del paso]</h2>
  <div class="steps">
    <div class="st"><div class="ph-img" style="height:250px"></div><div class="tx"><div class="n">1</div><div><h3>[Verbo + objeto]</h3><p>[Dónde tocar, en una línea.]</p></div></div></div>
    <div class="st"><div class="ph-img" style="height:250px"></div><div class="tx"><div class="n">2</div><div><h3>[Verbo + objeto]</h3><p>[Dónde tocar, en una línea.]</p></div></div></div>
  </div>
  <div class="note" style="margin-top:36px"><div class="i">i</div><p><b style="color:var(--ink)">[Aviso corto]:</b> [detalle que evita un error común].</p></div>
  <div class="ftr"><div>Las imágenes son ilustrativas: la interfaz real puede variar un poco.</div><div>03</div></div>
</section>

<!-- 4 · RECURSO (prompt): caja monospace con [slots] en azul, texto seleccionable -->
<section class="pg">
  <div class="hdr"><div class="h"><span class="av"></span>@fedex.ia</div><div>Paso 2</div></div>
  <h2 style="margin-top:0;display:flex;align-items:center;gap:20px"><span class="eyebrow" style="font-size:24px"><b>2</b>Paso 2</span>El prompt</h2>
  <div class="prompt">
    <div class="tt">Copiá todo y completá lo azul <span>PARA COPIAR</span></div>
<pre>[Rol para la IA]. [Tarea en una oración].

Mi negocio: <span class="slot">[qué hacés]</span>
Mi público: <span class="slot">[a quién le hablás]</span>

[Instrucciones numeradas…]

Si te falta algún dato, preguntámelo antes de empezar.</pre>
  </div>
  <div class="ftr"><div>[Tema corto]</div><div>04</div></div>
</section>

<!-- 5 · EJEMPLO + BUENO/MALO -->
<section class="pg">
  <div class="hdr"><div class="h"><span class="av"></span>@fedex.ia</div><div>Ejemplo</div></div>
  <h2>Un ejemplo completo</h2>
  <div class="card" style="margin-top:30px">
    <div class="ex">
      <div><div class="k">Negocio</div><div class="v">[Negocio ficticio]</div></div>
      <div><div class="k">Público</div><div class="v">[Público]</div></div>
    </div>
  </div>
  <div class="res">
    <figure><div class="ph-img" style="aspect-ratio:1;border-radius:18px"></div><figcaption>[Pieza 1]</figcaption></figure>
    <figure><div class="ph-img" style="aspect-ratio:4/5;border-radius:18px"></div><figcaption>[Pieza 2]</figcaption></figure>
    <figure><div class="ph-img" style="aspect-ratio:9/16;border-radius:18px"></div><figcaption>[Pieza 3]</figcaption></figure>
  </div>
  <div class="bm">
    <div class="row"><h3>[Campo]</h3>
      <div class="l"><span class="x">✕</span>«[ejemplo vago]»</div>
      <div class="l"><span class="ok">✓</span>«[ejemplo concreto]»</div></div>
  </div>
  <div class="ftr"><div>Fotos de ejemplo generadas con IA</div><div>05</div></div>
</section>

<!-- 6 · EXTRAS + PROBLEMAS -->
<section class="pg">
  <div class="hdr"><div class="h"><span class="av"></span>@fedex.ia</div><div>Bonus</div></div>
  <h2>Prompts extra</h2>
  <div class="xp">
    <div class="it"><h3>[Nombre] <i>[etiqueta]</i></h3><code>[Prompt corto para copiar.]</code></div>
  </div>
  <h2 style="margin-top:50px">Si algo no funciona</h2>
  <div class="fq">
    <div class="it"><h3>[Síntoma]</h3><p>[Qué hacer, en 1-2 líneas.]</p></div>
  </div>
  <div class="ftr"><div>[Tema corto]</div><div>06</div></div>
</section>

<!-- 7 · CIERRE: logo grande, pregunta, CTA a seguir, pill de regalo opcional -->
<section class="pg end">
  <div class="hdr"><div class="h"><span class="av"></span>@fedex.ia</div><div>Gracias</div></div>
  <span class="big-av"></span>
  <h2>¿Te sirvió?</h2>
  <p class="lead" style="max-width:780px">[Pedido de interacción: etiquetame con tu resultado.]</p>
  <div class="pillcta" style="font-size:32px;padding:22px 40px;margin-top:44px">Seguime en @fedex.ia</div>
  <p class="lead" style="font-size:26px;margin-top:22px">Todas las semanas, una forma nueva de usar IA en tu negocio.</p>
  <div class="ftr"><div>[Tema corto]</div><div>07</div></div>
</section>

<script>
/* asterisco de Claude (si la guía no es de Claude, borrá el .tile y este script) */
(function () {
  let r = '';
  for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6 + 0.13, L = i % 2 ? 38 : 45; r += `<line x1="0" y1="0" x2="${(Math.cos(a) * L).toFixed(1)}" y2="${(Math.sin(a) * L).toFixed(1)}"/>`; }
  document.querySelectorAll('.clogo').forEach(e => e.innerHTML = `<svg viewBox="-50 -50 100 100" width="100%" height="100%"><g stroke="#D97757" stroke-width="10" stroke-linecap="round">${r}</g></svg>`);
})();
</script>
</body>
</html>
```
