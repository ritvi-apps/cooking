BABUL_SHELL.define("pairing-card", `
<template><div class="card p-5"><div class="flex items-center gap-3"><div class="pair-tile {a-tint}">{a}</div><div style="font-size:20px;">+</div><div class="pair-tile {b-tint}">{b}</div></div><h3 class="font-display mt-3" style="font-size:18px;font-weight:500;color:var(--ink);letter-spacing:-0.01em;">{heading}</h3><p class="mt-1.5" style="font-size:13px;color:var(--ink-2);line-height:1.55;"><slot></slot></p></div></template>
`);
