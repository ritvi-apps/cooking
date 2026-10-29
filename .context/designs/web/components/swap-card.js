BABUL_SHELL.define("swap-card", `
<template><div class="card p-4"><div class="flex items-center gap-2 mb-2"><span style="font-size:26px;">{glyph}</span><slot></slot></div><p class="font-display" style="font-size:15px;font-weight:600;color:var(--ink);letter-spacing:-0.01em;">{heading}</p><p style="font-size:12px;color:var(--ink-2);">{text}</p></div></template>
`);
