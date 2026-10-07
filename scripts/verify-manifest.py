#!/usr/bin/env python3
"""Verifica manifest.json contra el disco: bytes, sha256, dimensiones,
archivos sin registrar, duplicados por sha256 y referencias rotas.
Sin dependencias (Python 3.8+). Uso: python3 scripts/verify-manifest.py"""
import hashlib, json, os, re, struct, sys, xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IGNORED = {'.git', 'scripts'}
NON_ASSET = {'README.md', 'manifest.json'}


def dims(path):
    with open(path, 'rb') as f:
        head = f.read(64)
    if head[:8] == b'\x89PNG\r\n\x1a\n':
        return list(struct.unpack('>II', head[16:24]))
    if head[:4] == b'RIFF' and head[8:12] == b'WEBP':
        kind = head[12:16]
        if kind == b'VP8X':
            w = int.from_bytes(head[24:27], 'little') + 1
            h = int.from_bytes(head[27:30], 'little') + 1
            return [w, h]
        if kind == b'VP8 ':
            w, h = struct.unpack('<HH', head[26:30])
            return [w & 0x3FFF, h & 0x3FFF]
        if kind == b'VP8L':
            b = int.from_bytes(head[21:25], 'little')
            return [(b & 0x3FFF) + 1, ((b >> 14) & 0x3FFF) + 1]
    if head[:2] == b'\xff\xd8':
        with open(path, 'rb') as f:
            data = f.read()
        i = 2
        while i < len(data):
            if data[i] != 0xFF:
                i += 1
                continue
            marker = data[i + 1]
            if marker in (0xC0, 0xC1, 0xC2):
                h, w = struct.unpack('>HH', data[i + 5:i + 9])
                return [w, h]
            i += 2 + struct.unpack('>H', data[i + 2:i + 4])[0]
    if path.endswith('.svg'):
        vb = ET.parse(path).getroot().get('viewBox')
        return {'viewBox': vb}
    return None


def main():
    with open(os.path.join(ROOT, 'manifest.json'), encoding='utf-8') as f:
        manifest = json.load(f)
    errors, seen = [], {}
    listed = set()
    for a in manifest['assets']:
        p = os.path.join(ROOT, a['path'])
        listed.add(a['path'])
        if not os.path.isfile(p):
            errors.append(f"falta en disco: {a['path']}")
            continue
        data = open(p, 'rb').read()
        sha = hashlib.sha256(data).hexdigest()
        if len(data) != a['bytes']:
            errors.append(f"bytes distintos: {a['path']} {len(data)} != {a['bytes']}")
        if sha != a['sha256']:
            errors.append(f"sha256 distinto: {a['path']}")
        if a.get('source', {}).get('sha256') and a['source']['sha256'] != sha:
            errors.append(f"sha256 no coincide con la fuente: {a['path']}")
        if dims(p) != a['dimensions']:
            errors.append(f"dimensiones distintas: {a['path']} {dims(p)} != {a['dimensions']}")
        seen.setdefault(sha, []).append(a['path'])
    for root, dirs, files in os.walk(ROOT):
        dirs[:] = [d for d in dirs if d not in IGNORED]
        for name in files:
            rel = os.path.relpath(os.path.join(root, name), ROOT)
            if rel not in listed and rel not in NON_ASSET:
                errors.append(f"archivo sin registrar en manifest.json: {rel}")
    declared = {a['path']: a.get('duplicateOf') for a in manifest['assets']}
    for sha, paths in seen.items():
        if len(paths) > 1:
            primary = [p for p in paths if not declared.get(p)]
            aliases_ok = len(primary) == 1 and all(declared.get(p) == primary[0] for p in paths if p != primary[0])
            if not aliases_ok:
                errors.append(f"duplicado por sha256 no declarado: {paths}")
    readme = open(os.path.join(ROOT, 'README.md'), encoding='utf-8').read()
    for ref in sorted(set(re.findall(r'`([\w./-]+\.(?:svg|png|webp|jpg))`', readme))):
        if not os.path.isfile(os.path.join(ROOT, ref)):
            errors.append(f"README referencia un archivo inexistente: {ref}")
    if errors:
        print('\n'.join(errors))
        sys.exit(1)
    print(f"OK: {len(manifest['assets'])} assets, sha256/bytes/dimensiones coinciden, "
          f"sin duplicados no declarados, sin archivos sin registrar, referencias del README resueltas.")


if __name__ == '__main__':
    main()
