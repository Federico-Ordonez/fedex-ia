#!/usr/bin/env python3
"""
reels.py - fuentes públicas para el agente investigador-reels.
Solo biblioteca estándar, salvo los comandos yt-* que usan yt-dlp.

  python3 reels.py perfil <cuenta> [<cuenta>...]   últimos Reels con vistas, mediana y múltiplo
  python3 reels.py post <código> [<código>...]     vistas, likes, comentarios y caption de un Reel
  python3 reels.py fecha <código> [<código>...]    fecha de publicación sacada del código
  python3 reels.py yt-canal <canal> [...]          últimos 25 Shorts con vistas y mediana
  python3 reels.py yt-video <id> [<id>...]         vistas, likes y fecha exactos de un Short
  python3 reels.py yt-buscar '<consulta>' [n]      descubrir Shorts y canales por tema

perfil y yt-canal escriben un lote TSV compatible con viral.py de dexter-viral.
Instagram corta si se le pide rápido: va de a un pedido por segundo.
"""

import datetime
import json
import re
import statistics
import subprocess
import sys
import time
import urllib.request

UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15"
ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
EPOCA_IG_MS = 1314220021721
YT_CLIENTE = ["--extractor-args", "youtube:player_client=web_safari", "--ignore-no-formats-error"]


def bajar(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read().decode("utf-8", "replace")
    except Exception as e:
        print(f"  ! {url}: {e}", file=sys.stderr)
        return ""


def fecha(codigo):
    n = 0
    for c in codigo[:11]:
        n = n * 64 + ALFABETO.index(c)
    ms = (n >> 23) + EPOCA_IG_MS
    return datetime.datetime.fromtimestamp(ms / 1000, datetime.timezone.utc).strftime("%Y-%m-%d")


def _campo(texto, patron):
    m = re.search(patron, texto)
    return m.group(1) if m else None


def _texto_json(s):
    # el embed escapa dos veces: \\u00ed en vez de í
    for t in (s.replace("\\\\", "\\"), s):
        try:
            return json.loads('"' + t + '"')
        except Exception:
            pass
    return s


def post(codigo):
    """datos del embed de un Reel. Las vistas son video_view_count (más bajas que las de CreatorDB)."""
    x = bajar(f"https://www.instagram.com/reel/{codigo}/embed/captioned/").replace('\\"', '"')
    cap = _campo(x, r'"edge_media_to_caption":\{"edges":\[\{"node":\{"text":"(.*?)"\}')
    return {
        "codigo": codigo,
        "cuenta": _campo(x, r'"owner":\{[^}]*?"username":"([^"]+)"') or _campo(x, r'"username":"([^"]+)"'),
        "seguidores": _campo(x, r'"edge_followed_by":\{"count":(\d+)'),
        "vistas": _campo(x, r'"video_view_count":(\d+)'),
        "likes": _campo(x, r'"edge_media_preview_like":\{"count":(\d+)') or _campo(x, r'"edge_liked_by":\{"count":(\d+)'),
        "comentarios": _campo(x, r'"edge_media_to_comment":\{"count":(\d+)'),
        "es_video": _campo(x, r'"is_video":(true|false)'),
        "caption": _texto_json(cap).replace("\\/", "/").replace("\n", " ") if cap else "",
        "fecha": fecha(codigo),
    }


def codigos_del_perfil(cuenta):
    x = bajar(f"https://www.instagram.com/{cuenta}/embed/")
    vistos = []
    for c in re.findall(r'\\"shortcode\\":\\"([A-Za-z0-9_-]+)\\"', x):
        if c not in vistos:
            vistos.append(c)
    return vistos


def _tsv(filas):
    print("cuenta\tseguidores\tvistas\thook\tfuente\tfecha\tlink\tlikes\tcomentarios")
    for f in filas:
        print("\t".join(str(f.get(k) or "") for k in
                        ("cuenta", "seguidores", "vistas", "hook", "fuente", "fecha", "link", "likes", "comentarios")))


def _resumen(cuenta, vistas):
    if len(vistas) >= 5:
        m = statistics.median(vistas)
        print(f"# {cuenta}: mediana {int(m)} con {len(vistas)} videos", file=sys.stderr)
        return m
    print(f"# {cuenta}: solo {len(vistas)} videos, no alcanza para mediana (mínimo 5)", file=sys.stderr)
    return None


def cmd_perfil(cuentas):
    filas = []
    for cuenta in cuentas:
        cuenta = cuenta.lstrip("@")
        datos = []
        for c in codigos_del_perfil(cuenta):
            p = post(c)
            time.sleep(1)
            if p["es_video"] == "true" and p["vistas"]:
                datos.append(p)
        mediana = _resumen("@" + cuenta, [int(p["vistas"]) for p in datos])
        for p in datos:
            mult = f" ({int(p['vistas']) / mediana:.1f}x)" if mediana else ""
            print(f"# {p['codigo']} {p['fecha']} {p['vistas']}{mult} | {p['caption'][:80]}", file=sys.stderr)
            filas.append({"cuenta": "@" + cuenta, "seguidores": p["seguidores"], "vistas": p["vistas"],
                          "hook": p["caption"][:150], "fuente": "caption", "fecha": p["fecha"],
                          "link": f"https://www.instagram.com/reel/{p['codigo']}/",
                          "likes": p["likes"], "comentarios": p["comentarios"]})
    _tsv(filas)


def cmd_post(codigos):
    for c in codigos:
        print(json.dumps(post(c), ensure_ascii=False))
        time.sleep(1)


def _yt(args):
    r = subprocess.run(["yt-dlp", *args], capture_output=True, text=True)
    if r.returncode and not r.stdout:
        print(f"  ! yt-dlp: {r.stderr.strip()[-200:]}", file=sys.stderr)
    return [json.loads(l) for l in r.stdout.splitlines() if l.strip()]


def cmd_yt_canal(canales):
    filas = []
    for canal in canales:
        canal = canal.lstrip("@")
        shorts = _yt([f"https://www.youtube.com/@{canal}/shorts", "--flat-playlist", "--dump-json",
                      "--playlist-end", "25"])
        vistas = [s["view_count"] for s in shorts if s.get("view_count") is not None]
        mediana = _resumen("@" + canal + " (YouTube)", vistas)
        for s in shorts:
            v = s.get("view_count")
            mult = f" ({v / mediana:.1f}x)" if mediana and v is not None else ""
            print(f"# {s['id']} {v}{mult} | {(s.get('title') or '')[:80]}", file=sys.stderr)
            filas.append({"cuenta": "@" + canal, "vistas": v, "hook": s.get("title"), "fuente": "titulo",
                          "link": f"https://www.youtube.com/shorts/{s['id']}"})
    _tsv(filas)


def cmd_yt_video(ids):
    for i in ids:
        for v in _yt([*YT_CLIENTE, "--skip-download", "--dump-json", f"https://www.youtube.com/shorts/{i}"]):
            print(json.dumps({k: v.get(k) for k in ("id", "channel", "upload_date", "view_count", "like_count",
                                                     "comment_count", "channel_follower_count", "duration",
                                                     "title")}, ensure_ascii=False))
        time.sleep(2)


def cmd_yt_buscar(args):
    consulta, n = args[0], (args[1] if len(args) > 1 else "20")
    for v in _yt([f"ytsearch{n}:{consulta}", "--flat-playlist", "--dump-json"]):
        print(f"{v.get('view_count')}\t{v.get('channel')}\t{v.get('duration')}\t{v.get('title')}\t{v.get('url')}")


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return 1
    cmd, args = sys.argv[1], sys.argv[2:]
    comandos = {"perfil": cmd_perfil, "post": cmd_post, "yt-canal": cmd_yt_canal, "yt-video": cmd_yt_video,
                "yt-buscar": cmd_yt_buscar, "fecha": lambda cs: [print(c, fecha(c)) for c in cs]}
    if cmd not in comandos:
        print(__doc__)
        return 1
    comandos[cmd](args)
    return 0


if __name__ == "__main__":
    sys.exit(main())
