BABUL_SHELL.define("item-card", `
<template><div class="card p-4 flex items-center gap-3"><span style="font-size:32px;">{glyph}</span><div><p class="font-display" style="font-size:15px;font-weight:600;color:var(--ink);letter-spacing:-0.01em;">{name}</p><p style="font-size:12px;color:var(--ink-2);">{amount}</p></div></div></template>
<template variant="link"><a class="card card-hover p-4 flex items-center gap-3"><span style="font-size:32px;">{glyph}</span><div class="flex-1 min-w-0"><p class="font-display" style="font-size:15px;font-weight:600;color:var(--ink);letter-spacing:-0.01em;">{name}</p><p style="font-size:12px;color:var(--ink-2);">{amount}</p></div><span style="font-size:16px;color:var(--brand-500);">→</span></a></template>
`);
