BABUL_SHELL.define("tip-card", `
<template><div class="card p-4 flex gap-3 items-start"><span style="font-size:22px;">{glyph}</span><div><p class="font-display" style="font-size:15px;font-weight:600;color:var(--ink);letter-spacing:-0.01em;">{heading}</p><p style="font-size:13px;color:var(--ink-2);line-height:1.5;">{text}</p></div></div></template>
<template variant="icon"><div class="card p-4 flex gap-3 items-start"><span style="color:var(--accent-700);"><i data-lucide="{icon}" class="hb-icon w-[22px] h-[22px]" stroke-width="1.75"></i></span><div><p class="font-display" style="font-size:15px;font-weight:600;color:var(--ink);letter-spacing:-0.01em;">{heading}</p><p style="font-size:13px;color:var(--ink-2);line-height:1.5;">{text}</p></div></div></template>
`);
