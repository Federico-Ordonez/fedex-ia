#!/usr/bin/env python3
"""
Arma el PDF de la guía de 100 códigos con el estilo de guías de @fedex.ia.

  python3 guias/pdf/construir.py

Lee los códigos de guias/100-codigos-fotos.md y el CSS del Apéndice A de
guias/estilo/ESTILO-GUIA-PDF.md, genera guias/pdf/guia.html y lo imprime a
guias/100-codigos-fotos-fedex-ia.pdf con Chromium.

Las páginas de códigos se arman en el navegador: un script va llenando cada
página hasta que el próximo código no entra, así ninguno queda cortado.
"""

import html
import os
import re
import subprocess
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
GUIAS = os.path.dirname(AQUI)
FUENTE_MD = os.path.join(GUIAS, "100-codigos-fotos.md")
ESTILO_MD = os.path.join(GUIAS, "estilo", "ESTILO-GUIA-PDF.md")
FUENTES_CSS = os.path.join(GUIAS, "estilo", "fuentes", "fuentes.css")
SALIDA_HTML = os.path.join(AQUI, "guia.html")
SALIDA_PDF = os.path.join(GUIAS, "100-codigos-fotos-fedex-ia.pdf")
CHROME = os.environ.get("CHROME", "/opt/pw-browsers/chromium-1194/chrome-linux/chrome")

CUENTA = "@fedex.ia"
TEMA = "100 códigos para tus fotos"

CATEGORIAS = {
    "Arreglar": ("Arreglá lo que salió mal", "Luz, nitidez, fondos y objetos que sobran."),
    "Producto": ("Fotos de producto", "De la mesa de tu casa a una foto de catálogo."),
    "Retrato": ("Retratos para tu marca", "Para tu perfil, tu marca personal o para probar cambios."),
    "Transformar": ("Transformá la escena", "Otra estación, otra época, otro lugar."),
    "Estilo": ("Cambiá el estilo", "De foto a pintura, dibujo, cómic o juguete."),
}

# componentes propios de esta guía, armados con los tokens del estilo
CSS_EXTRA = """
.pool{display:none}
.cat-lead{font-size:27px;margin-top:14px}
.xp{margin-top:30px;gap:12px}
.xp .it{padding:16px 24px}
.xp .it code{margin-top:8px;padding:12px 16px}
.xp .it h3{font-size:27px}
.xp .it h3 .num{font:800 20px 'Inter Tight';color:var(--soft);min-width:34px}
.xp .it code{font-size:20px;white-space:normal}
.fan .ficha{position:absolute;background:#fff;border-radius:22px;border:8px solid #fff;outline:1.5px solid var(--line);
  padding:30px 28px;display:flex;flex-direction:column;justify-content:space-between}
.fan .ficha b{font:500 40px 'JetBrains Mono',monospace;color:var(--blue)}
.fan .ficha span{font:600 21px/1.35 Inter;color:var(--mute)}
.wordmark{font:800 40px 'Inter Tight';letter-spacing:-.03em;color:var(--ink);padding:0 34px}
.st .tx{padding:28px 28px 30px}
.st p{font-size:22px}
.indice{display:grid;grid-template-columns:1fr 1fr;gap:6px 30px}
.indice li{font-size:26px}
"""


def leer_codigos():
    secciones, actual = [], None
    with open(FUENTE_MD, encoding="utf-8") as fh:
        for linea in fh:
            m = re.match(r"^## \d+\. (\w+)", linea)
            if m:
                actual = {"nombre": m.group(1), "codigos": []}
                secciones.append(actual)
                continue
            m = re.match(r"^\| (\d+) \| `(/[^`]+)`[^|]*\| ([^|]+) \| ([^|]+) \|", linea)
            if m and actual:
                actual["codigos"].append({"n": int(m.group(1)), "codigo": m.group(2),
                                          "que": m.group(3).strip(), "prompt": m.group(4).strip()})
    total = sum(len(s["codigos"]) for s in secciones)
    if total != 100:
        sys.exit(f"Esperaba 100 códigos y encontré {total}")
    return secciones


def css_del_estilo():
    md = open(ESTILO_MD, encoding="utf-8").read()
    m = re.search(r"## Apéndice A.*?```css\n(.*?)```", md, re.S)
    if not m:
        sys.exit("No encontré el CSS del Apéndice A en ESTILO-GUIA-PDF.md")
    css = re.sub(r"@import url\([^)]*\);", "", m.group(1))
    fuentes = open(FUENTES_CSS, encoding="utf-8").read()
    fuentes = re.sub(r"url\(([\w.-]+\.woff2)\)", r"url(../estilo/fuentes/\1)", fuentes)
    return fuentes + css + CSS_EXTRA


def esc(s):
    return html.escape(s, quote=False)


def con_slots(p):
    return re.sub(r"\[([^\]]+)\]", r'<span class="slot">[\1]</span>', esc(p))


def hdr(seccion):
    return f'<div class="hdr"><div class="h"><span class="av"></span>{CUENTA}</div><div>{seccion}</div></div>'


def ftr(izq=TEMA):
    return f'<div class="ftr"><div>{izq}</div><div class="np"></div></div>'


def pg(seccion, contenido, clase="", pie=TEMA):
    return f'<section class="pg {clase}">{hdr(seccion)}{contenido}{ftr(pie)}</section>'


def construir():
    secciones = leer_codigos()
    paginas = []

    paginas.append(pg("Guía gratuita", f"""
<div class="logos">
  <div class="tile" style="height:120px"><span class="wordmark">ChatGPT</span></div>
  <div class="op">+</div>
  <div class="tile" style="height:120px"><span class="wordmark">Gemini</span></div>
</div>
<h1>100 códigos<br>para editar<br><span class="grad">tus fotos</span><br>con IA.</h1>
<p class="lead">Subís una foto, pegás el prompt y listo. Para usar en ChatGPT o en Gemini.</p>
<div class="fan">
  <div class="ficha" style="left:90px;top:70px;width:280px;height:300px;transform:rotate(-7deg)"><b>/estudio</b><span>Tu producto con fondo de estudio</span></div>
  <div class="ficha" style="left:395px;top:20px;width:300px;height:340px;transform:rotate(2deg);z-index:2"><b>/dron</b><span>La misma escena vista desde arriba</span></div>
  <div class="ficha" style="left:715px;top:50px;width:275px;height:310px;transform:rotate(7deg)"><b>/acuarela</b><span>Tu foto convertida en pintura</span></div>
</div>""", "cover"))

    indice = "".join(f"<li>{s['nombre']} · {s['codigos'][0]['n']} a {s['codigos'][-1]['n']}</li>" for s in secciones)
    paginas.append(pg("Antes de empezar", f"""
<h2>Qué vas a lograr</h2>
<p class="lead">Arreglar, mejorar o transformar cualquier foto escribiendo una sola instrucción, sin saber editar.</p>
<div class="card" style="margin-top:44px">
  <h3>Necesitás</h3>
  <ul class="chk" style="margin-top:6px"><li>Una foto tuya o de tu producto</li><li>Una cuenta de ChatGPT o de Gemini</li><li>Copiar y pegar</li></ul>
</div>
<div class="card" style="margin-top:28px">
  <h3>En esta guía</h3>
  <ul class="chk indice" style="margin-top:6px">{indice}<li>Si algo no funciona</li></ul>
</div>"""))

    paginas.append(pg("Cómo se usan", """
<span class="eyebrow"><b>1</b>Cómo se usan</span>
<h2>Cuatro pasos por código</h2>
<div class="steps">
  <div class="st"><div class="tx"><div class="n">1</div><div><h3>Subí la foto</h3><p>Abrí ChatGPT o Gemini y adjuntá la foto que querés cambiar.</p></div></div></div>
  <div class="st"><div class="tx"><div class="n">2</div><div><h3>Copiá el prompt</h3><p>Copiá el texto completo del código que elegiste, no solo el nombre.</p></div></div></div>
  <div class="st"><div class="tx"><div class="n">3</div><div><h3>Completá lo azul</h3><p>Reemplazá lo que está <span class="slot">[en azul]</span> por lo que quieras.</p></div></div></div>
  <div class="st"><div class="tx"><div class="n">4</div><div><h3>Pedí ajustes</h3><p>Si no te convence, pedí un cambio concreto: "más luz", "no cambies la cara".</p></div></div></div>
</div>
<div class="note" style="margin-top:36px"><div class="i">i</div><p><b style="color:var(--ink)">El código es solo un nombre:</b> la IA no lo reconoce como comando. Lo que hace el trabajo es el prompt completo.</p></div>
<div class="note"><div class="i">i</div><p><b style="color:var(--ink)">Fotos de otras personas:</b> usá los códigos que cambian caras, edad o ropa con tus fotos o con permiso.</p></div>"""))

    # las páginas de códigos las arma el script de paginación a partir de este depósito
    pool = []
    for i, s in enumerate(secciones, 1):
        titulo, bajada = CATEGORIAS[s["nombre"]]
        items = "".join(f"""<div class="it"><h3><span class="num">{c['n']:02d}</span>{esc(c['codigo'])} <i>{esc(c['que'])}</i></h3>
<code>{con_slots(c['prompt'])}</code></div>""" for c in s["codigos"])
        pool.append(f"""<div class="cat" data-seccion="{s['nombre']}">
<div class="cab"><span class="eyebrow"><b>{i}</b>{s['nombre']}</span><h2>{titulo}</h2><p class="lead cat-lead">{bajada}</p></div>
{items}</div>""")

    paginas.append('<div id="codigos"></div>')

    paginas.append(pg("Cómo completarlo", """
<h2>Completá lo azul con detalle</h2>
<p class="lead">Cuanto más concreto, más se parece el resultado a lo que tenías en la cabeza.</p>
<div class="bm">
  <div class="row"><h3>/fondo</h3>
    <div class="l"><span class="x">✕</span>«una playa»</div>
    <div class="l"><span class="ok">✓</span>«una playa de arena blanca al atardecer, con el mar calmo y sin gente»</div></div>
  <div class="row"><h3>/outfit</h3>
    <div class="l"><span class="x">✕</span>«ropa elegante»</div>
    <div class="l"><span class="ok">✓</span>«un blazer negro entallado con una remera blanca lisa»</div></div>
  <div class="row"><h3>/catalogo</h3>
    <div class="l"><span class="x">✕</span>«un color lindo»</div>
    <div class="l"><span class="ok">✓</span>«verde salvia claro, que combine con la etiqueta»</div></div>
  <div class="row"><h3>/amueblar</h3>
    <div class="l"><span class="x">✕</span>«moderno»</div>
    <div class="l"><span class="ok">✓</span>«nórdico, con madera clara, tonos blancos y plantas»</div></div>
</div>"""))

    paginas.append(pg("Ayuda", """
<h2>Si algo no funciona</h2>
<div class="fq">
  <div class="it"><h3>La cara salió distinta</h3><p>Escribí "mantené la cara exactamente igual" y probá de nuevo. Si sigue cambiando, probá en el otro modelo.</p></div>
  <div class="it"><h3>Cambió cosas que no pedí</h3><p>Nombrá lo que tiene que quedar igual: "no cambies el fondo, la ropa ni la pose".</p></div>
  <div class="it"><h3>La IA rechazó el pedido</h3><p>Pasa con fotos de otras personas o al nombrar marcas o estudios. Usá tu foto y describí el estilo sin nombres.</p></div>
  <div class="it"><h3>Aparecen letras raras</h3><p>Pedí "sin texto en la imagen". Si necesitás texto, agregalo después con Canva u otra app.</p></div>
  <div class="it"><h3>El resultado salió recortado</h3><p>Indicá el formato que querés: "vertical 4:5 para Instagram" o "cuadrado".</p></div>
</div>"""))

    paginas.append(pg("Gracias", """
<span class="big-av"></span>
<h2>¿Te sirvió?</h2>
<p class="lead" style="max-width:780px">Subí tu antes y después a una historia y etiquetame. Comparto los mejores.</p>
<div class="pillcta" style="font-size:32px;padding:22px 40px;margin-top:44px">Seguime en @fedex.ia</div>
<p class="lead" style="font-size:26px;margin-top:22px">Todas las semanas, una forma nueva de usar IA en tu negocio.</p>""", "end"))

    script = """
<script>
// las fuentes de los códigos todavía no se pidieron (el depósito está oculto):
// se cargan antes de medir, si no la paginación mide con la fuente de reemplazo
Promise.all(["500 20px 'JetBrains Mono'", "800 27px 'Inter Tight'", "900 66px 'Inter Tight'",
             "800 18px Inter", "500 27px Inter"].map(function (f) { return document.fonts.load(f); }))
.then(function () {
  var destino = document.getElementById('codigos');
  var LIMITE = 1350 - 110;
  function nueva(seccion) {
    var p = document.createElement('section');
    p.className = 'pg';
    p.innerHTML = HDR.replace('%S', seccion) + '<div class="xp"></div>' + FTR;
    destino.parentNode.insertBefore(p, destino);
    return p;
  }
  // llena páginas hasta el límite de alto o hasta "maximo" códigos por página
  function paginar(cat, items, maximo) {
    var nombre = cat.dataset.seccion;
    var p = nueva(nombre), creadas = [p];
    p.insertBefore(cat.querySelector('.cab'), p.querySelector('.xp'));
    var lista = p.querySelector('.xp');
    items.forEach(function (it) {
      lista.appendChild(it);
      var tope = p.getBoundingClientRect().top;
      var pasa = it.getBoundingClientRect().bottom - tope > LIMITE;
      if ((pasa || lista.children.length > maximo) && lista.children.length > 1) {
        p = nueva(nombre);
        creadas.push(p);
        lista = p.querySelector('.xp');
        lista.style.marginTop = '0';
        lista.appendChild(it);
      }
    });
    return creadas;
  }
  // primera pasada para saber cuántas páginas hacen falta, segunda para repartir parejo
  // y que ninguna categoría termine con una página casi vacía
  document.querySelectorAll('.pool .cat').forEach(function (cat) {
    var items = Array.prototype.slice.call(cat.querySelectorAll('.it'));
    function deshacer(paginas) {
      cat.insertBefore(paginas[0].querySelector('.cab'), cat.firstChild);
      items.forEach(function (it) { cat.appendChild(it); });
      paginas.forEach(function (p) { p.remove(); });
    }
    var paginas = paginar(cat, items, Infinity), k = paginas.length;
    deshacer(paginas);
    var parejas = paginar(cat, items, Math.ceil(items.length / k));
    if (parejas.length > k) { deshacer(parejas); paginar(cat, items, Infinity); }
  });
  destino.remove();
  var pags = document.querySelectorAll('.pg');
  pags.forEach(function (p, i) { p.querySelector('.np').textContent = String(i + 1).padStart(2, '0'); });
  document.title = document.title + ' (' + pags.length + ')';
});
</script>"""
    script = (script.replace("HDR", repr(hdr("%S")))
                    .replace("FTR", repr(ftr())))

    doc = f"""<!doctype html><html lang="es"><head><meta charset="UTF-8">
<title>100 códigos para editar tus fotos con IA · {CUENTA}</title><style>{css_del_estilo()}</style></head>
<body>{"".join(paginas)}<div class="pool">{"".join(pool)}</div>{script}</body></html>"""
    with open(SALIDA_HTML, "w", encoding="utf-8") as fh:
        fh.write(doc)
    subprocess.run([CHROME, "--headless=new", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer",
                    "--virtual-time-budget=8000", f"--print-to-pdf={os.path.abspath(SALIDA_PDF)}",
                    "file://" + SALIDA_HTML], check=True, capture_output=True)
    print(f"→ {os.path.relpath(SALIDA_PDF)}")


if __name__ == "__main__":
    construir()
