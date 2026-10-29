BABUL_SHELL.define("take-card", `
<template><div class="card p-4"><p class="eyebrow" style="color:var(--{tone=good?brand-700:accent-700});">{label}</p><ul class="mt-3 space-y-2" style="font-size:13.5px;color:var(--ink);line-height:1.5;"><slot></slot></ul></div></template>
`);
