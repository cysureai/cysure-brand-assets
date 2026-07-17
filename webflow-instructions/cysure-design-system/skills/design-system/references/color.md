# Color

Dos capas: la paleta cruda de marca (fija) y los tokens semánticos (lo que se
usa para construir), que se re-mapean por tema. Light es el default; dark es
un **re-map completo, no un tint**. En Webflow: crear cada token semántico
como variable de color con modo light y modo dark.

## Paleta cruda de marca (independiente del tema)

| Nombre | Hex | Nota |
|---|---|---|
| ink | `#0E1116` | Near-black, superficies y texto primario |
| royal | `#3B5BFF` | El azul de marca, acento primario |
| emerald | `#10B981` | Éxito, cubierto, on-track |
| coral | `#EF4444` | Peligro, crítico, te necesita ahora |
| amber | `#F59E0B` | Advertencia, esperando, tu turno |
| mint (green-vivid) | `#34E0AE` | Payout y retorno, SOLO sobre oscuro |
| cream | `#FAF7EC` | Papel cálido |
| violet | `#6C5BFF` | Decorativo histórico, nunca acento de título ni de UI |
| white | `#FFFFFF` | |
| navy (legacy) | `#3A5BA8` | Ex acento serif, superseded: no usar en trabajo nuevo |
| navy-light (legacy) | `#AEBEE6` | Ídem, sobre oscuro |

Variantes dark de los hues de marca (suben para contraste sobre near-black):
royal `#7C92FF`, emerald `#34D399`, coral `#FF6B6B`, amber `#FBBF24`.

## Tokens semánticos, tema LIGHT

| Token | Valor | Uso |
|---|---|---|
| royal | `#3B5BFF` | Links, AI, focus, eyebrows de marca |
| royal-soft | `rgba(59,91,255,.10)` | Fill tinted detrás de acentos royal |
| royal-line | `rgba(59,91,255,.22)` | Hairline royal, borde de focus |
| emerald | `#10B981` | Estado positivo, badges "Activa", dots live |
| emerald-soft | `rgba(16,185,129,.12)` | Chips y alert cards emerald |
| coral | `#EF4444` | Riesgo crítico, alertas |
| coral-soft | `rgba(239,68,68,.09)` | Chips y alert cards coral |
| amber | `#F59E0B` | Decisiones pendientes, colas |
| amber-soft | `rgba(245,158,11,.13)` | Chips y alert cards amber |
| green-vivid (mint) | `#34E0AE` | Valor de regreso, solo sobre ink |
| cream | `#FAF7EC` | Paneles secundarios cálidos |
| page | `#FFFFFF` | Fondo de página |
| surface | `#FFFFFF` | Cards, popovers |
| sunken | `#F6F6F3` | Insets, tracks, filas quietas |
| hairline | `rgba(14,17,22,.08)` | Divisores dentro de una superficie |
| border | `rgba(14,17,22,.12)` | Borde default de card y control |
| border-strong | `rgba(14,17,22,.20)` | Botones secundarios, inputs |
| text | `#0E1116` | Texto primario |
| muted | `#5A6068` | Texto secundario, leads, captions |
| faint | `#9AA0A8` | Meta, timestamps, placeholders |
| ink | `#0E1116` | Feature surface oscura sobre light (hero strips) |
| ink-text | `#FFFFFF` | Texto sobre ink |
| ink-muted | `rgba(255,255,255,.60)` | Texto secundario sobre ink |
| ink-border | `rgba(255,255,255,.12)` | Bordes sobre ink |
| ink-sunken | `rgba(255,255,255,.05)` | Insets sobre ink |
| hover | `rgba(14,17,22,.045)` | Wash de hover en nav y filas |
| btn-bg / btn-text | `#0E1116` / `#FFFFFF` | Botón primario (ink fill) |
| serif-accent | `#3B5BFF` | La palabra-acento serif (= royal) |
| selection | bg `#3B5BFF`, texto `#FFFFFF` | Selección de texto |

## Tokens semánticos, tema DARK (re-map completo)

| Token | Valor |
|---|---|
| royal | `#7C92FF` |
| royal-soft | `rgba(124,146,255,.14)` |
| royal-line | `rgba(124,146,255,.30)` |
| emerald | `#34D399` |
| emerald-soft | `rgba(52,211,153,.15)` |
| coral | `#FF6B6B` |
| coral-soft | `rgba(255,107,107,.13)` |
| amber | `#FBBF24` |
| amber-soft | `rgba(251,191,36,.15)` |
| green-vivid (mint) | `#34E0AE` |
| cream | `#171C23` (el papel cálido no existe en dark, usa raised) |
| page | `#0A0C10` |
| surface | `#13171D` |
| sunken | `#0F1318` |
| raised | `#171C23` |
| hairline | `rgba(255,255,255,.07)` |
| border | `rgba(255,255,255,.10)` |
| border-strong | `rgba(255,255,255,.18)` |
| text | `#EAEDF1` |
| muted | `#9CA3AD` |
| faint | `#6A7079` |
| ink (feature surface) | `#171C23` (se levanta de la página en dark) |
| ink-text | `#FFFFFF` |
| ink-muted | `rgba(255,255,255,.58)` |
| hover | `rgba(255,255,255,.055)` |
| btn-bg / btn-text | `#ECEFF3` / `#0E1116` (el primario invierte) |
| serif-accent | `#7C92FF` |

## Reglas duras de color

1. **Color = urgencia.** Emerald, amber y coral tienen significado fijo
   (cubierto, tu turno, crítico). Jamás usarlos decorativamente.
2. **Mint `#34E0AE`** significa dinero o valor que regresa al cliente y
   **solo vive sobre superficies ink**. Nunca sobre fondo claro.
3. **Royal es el único acento cromático** del core UI: links, AI, focus,
   eyebrows de marca. Con moderación.
4. Violet `#6C5BFF` es decorativo histórico: nunca acento de título ni de UI.
5. Navy `#3A5BA8` y navy-light `#AEBEE6` son tokens legacy (ex acento serif):
   no usar en trabajo nuevo.
6. Nunca navy `#1A365D` ni azules ajenos a la paleta.
7. En dark los hues suben para contraste: usar los tokens, no recalcular a
   mano.
8. Cada tono de estado tiene su par soft (fill tinted al 10 a 15%) para
   chips, badges y alert cards: usar el par, no inventar transparencias.
