# Instrucciones para agentes de Webflow

Skills y rules para importar en Webflow (Instructions, Import instructions)
del sitio cysure.design.webflow.com. Derivados del skill `cysure-brand`
(Design System v4.2, Jul 2026), que sigue siendo la fuente canónica.

## ZIPs listos para importar

| ZIP | Contenido |
|---|---|
| `cysure-design-system.zip` | Skill `design-system` (SKILL.md + 4 references: color, tipografía, espaciado/forma/motion, componentes) + rule `reglas-duras-cysure.md` |
| `cysure-brand-voice.zip` | Skill `brand-voice` (SKILL.md + references: nomenclatura, ejemplos de copy) |
| `cysure-asset-guidelines.zip` | Skill `asset-guidelines` (SKILL.md + reference: catálogo de assets con URLs) |

Cada ZIP sigue la estructura sugerida por Webflow:

```
skills/
  <skill-name>/
    SKILL.md
    references/
rules/
  <rule>.md
```

## Regenerar los ZIPs

Desde este directorio:

```bash
for d in cysure-design-system cysure-brand-voice cysure-asset-guidelines; do
  (cd "$d" && zip -r "../$d.zip" . -x '.*')
done
```

## Mantenimiento

Si cambia el design system (skill `cysure-brand` en `cysureai/claude-plugins`),
actualizar estos markdown y regenerar los ZIPs. No editar solo el ZIP.
