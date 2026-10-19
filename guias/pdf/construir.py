#!/usr/bin/env python3
"""
Arma el PDF de la guía de 100 códigos con el sistema editorial de Fedex.ia.

  python3 guias/pdf/construir.py

Lee guias/100-codigos-fotos.md, genera guias/pdf/guia.html y lo imprime a
guias/100-codigos-fotos-fedex-ia.pdf con Chromium.
"""

import html
import os
import re
import subprocess
import sys

AQUI = os.path.dirname(os.path.abspath(__file__))
FUENTE_MD = os.path.join(AQUI, "..", "100-codigos-fotos.md")
SALIDA_HTML = os.path.join(AQUI, "guia.html")
SALIDA_PDF = os.path.join(AQUI, "..", "100-codigos-fotos-fedex-ia.pdf")
CHROME = os.environ.get("CHROME", "/opt/pw-browsers/chromium-1194/chrome-linux/chrome")

MARCA = "Fedex.ia"
BAJADA = "IA para creadores"
CUENTA = "@fedeordonez"
# la primera página de cada categoría lleva el título y entra un código menos
POR_PAGINA = (6, 7, 7)

# título de cada categoría con su palabra acento en itálica
CATEGORIAS = {
    "Arreglar": ("Arreglá", "lo que salió mal", "Luz, nitidez, fondos y objetos que sobran."),
    "Producto": ("Fotos de", "producto", "De la mesa de tu casa a una foto de catálogo."),
    "Retrato": ("Retratos", "profesionales", "Para tu perfil, tu marca personal o para probar cambios."),
    "Transformar": ("Transformá", "la escena", "Otra estación, otra época, otro lugar."),
    "Estilo": ("Cambiá", "el estilo", "De foto a pintura, dibujo, cómic o juguete."),
}


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


def esc(s):
    return html.escape(s, quote=False)


def prompt_html(p):
    # lo que hay que reemplazar va resaltado
    return re.sub(r"\[([^\]]+)\]", r'<span class="hueco">[\1]</span>', esc(p))


def riel(pagina, total, oscuro=False):
    return f"""<div class="riel"><span><i class="punto"></i>{MARCA} · {BAJADA}</span>
<span>{pagina:02d} / {total:02d}</span></div>"""


def pie(texto="Guardá esta guía"):
    return f'<div class="pie"><span>{CUENTA}</span><span>{texto}</span></div>'


def pagina(contenido, n, total, clase="", pie_texto="Guardá esta guía"):
    return f'<section class="pagina {clase}">{riel(n, total)}<div class="cuerpo">{contenido}</div>{pie(pie_texto)}</section>'


def construir():
    secciones = leer_codigos()
    paginas = []

    paginas.append(("portada", """
<div class="kicker">Guía gratuita · 100 códigos</div>
<h1>100 códigos para <em>editar</em> tus fotos con IA</h1>
<div class="promesa">
  <p>Subís una foto a ChatGPT o a Gemini, pegás el código y listo.</p>
  <p class="piedra">Arreglar · Producto · Retrato · Transformar · Estilo</p>
</div>"""))

    paginas.append(("", """
<div class="kicker">Antes de empezar</div>
<h2>Cómo se <em>usan</em></h2>
<ol class="pasos">
  <li><b>Subí la foto</b><span>En ChatGPT o en Gemini, desde la computadora o el celular.</span></li>
  <li><b>Pegá el prompt completo</b><span>Cada código tiene su prompt. Copialo entero: el código solo es el nombre para recordarlo, la IA no lo reconoce como comando.</span></li>
  <li><b>Completá los corchetes</b><span>Si el prompt tiene algo entre <span class="hueco">[corchetes]</span>, reemplazalo por lo que quieras antes de pegarlo.</span></li>
  <li><b>Pedí ajustes</b><span>Si el resultado no te convence, pedí un cambio concreto: "más luz", "el fondo más oscuro", "no cambies la cara".</span></li>
</ol>
<div class="nota">
  <div class="kicker">Para tener en cuenta</div>
  <p>Ninguna IA mantiene una cara exactamente igual. Si cambia, pedile que la respete o probá en el otro modelo.</p>
  <p>Usá los códigos que cambian caras, edad o ropa con tus fotos o con fotos de gente que te dio permiso.</p>
</div>"""))

    paginas.append(("", "<div class='kicker'>Índice</div><h2>Lo que vas a <em>encontrar</em></h2><ol class='indice'>" + "".join(
        f"<li><span class='num'>{i:02d}</span><b>{s['nombre']}</b><span class='piedra'>{CATEGORIAS[s['nombre']][2]}</span>"
        f"<span class='rango'>{s['codigos'][0]['n']}–{s['codigos'][-1]['n']}</span></li>"
        for i, s in enumerate(secciones, 1)) + "</ol>"))

    for i, s in enumerate(secciones, 1):
        verbo, acento, bajada = CATEGORIAS[s["nombre"]]
        bloques, k = [], 0
        for cuantos in POR_PAGINA:
            bloques.append(s["codigos"][k:k + cuantos])
            k += cuantos
        for j, bloque in enumerate(bloques):
            cab = ""
            if j == 0:
                cab = (f"<div class='kicker'>{i:02d} · {s['nombre']} · 20 códigos</div>"
                       f"<h2>{verbo} <em>{acento}</em></h2><p class='bajada'>{bajada}</p>")
            else:
                cab = f"<div class='kicker'>{i:02d} · {s['nombre']}</div>"
            items = "".join(f"""
<article class="codigo">
  <div class="n">{c['n']}</div>
  <div>
    <div class="titulo"><span class="cod">{esc(c['codigo'])}</span><span class="que">{esc(c['que'])}</span></div>
    <p class="prompt">{prompt_html(c['prompt'])}</p>
  </div>
</article>""" for c in bloque)
            paginas.append(("" if j else "apertura", cab + f"<div class='lista'>{items}</div>"))

    paginas.append(("oscura", f"""
<div class="kicker">¿Y ahora?</div>
<h1 class="cta">Probalos con tus <em>fotos</em></h1>
<div class="acciones">
  <div><b>Guardá la guía</b><span>Tenela a mano para la próxima foto que quieras arreglar.</span></div>
  <div><b>Seguime en {CUENTA}</b><span>Subo códigos, prompts y herramientas de IA para creadores cada semana.</span></div>
  <div><b>Contame cuál te sirvió</b><span>Respondé el mensaje con el código que más usaste.</span></div>
</div>"""))

    total = len(paginas)
    cuerpo = "".join(pagina(c, n, total, clase, "Fin" if n == total else "Guardá esta guía")
                     for n, (clase, c) in enumerate(paginas, 1))
    with open(os.path.join(AQUI, "estilo.css"), encoding="utf-8") as fh:
        css = fh.read()
    doc = f"""<!doctype html><html lang="es"><head><meta charset="utf-8">
<title>100 códigos para editar tus fotos con IA · {MARCA}</title><style>{css}</style></head>
<body>{cuerpo}</body></html>"""
    with open(SALIDA_HTML, "w", encoding="utf-8") as fh:
        fh.write(doc)
    subprocess.run([CHROME, "--headless", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer",
                    "--virtual-time-budget=10000", f"--print-to-pdf={os.path.abspath(SALIDA_PDF)}",
                    "file://" + SALIDA_HTML], check=True, capture_output=True)
    print(f"{total} páginas → {os.path.relpath(SALIDA_PDF)}")


if __name__ == "__main__":
    construir()
