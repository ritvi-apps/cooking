BABUL_SHELL.define("recipe-row", `
<template><a class="card card-hover p-4 flex items-center gap-3"><div class="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 {tint=vegetable? grad-vegetable}" style="font-size:32px;">{glyph}</div><div class="flex-1 min-w-0"><p class="font-display" style="font-size:16px;font-weight:600;color:var(--ink);letter-spacing:-0.01em;">{name}</p><p style="font-size:12.5px;color:var(--ink-2);">{sub}</p></div><slot></slot><span style="font-size:16px;color:var(--brand-500);">→</span></a></template>
`);
