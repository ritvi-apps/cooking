BABUL_SHELL.define("stat", `
<template><div class="stat"><span class="k">{label}</span><span data-if="tone=plain" class="v">{value}</span><span data-if="tone=muted" class="v" style="color:var(--ink-3);">{value}</span><span data-if="tone=brand" class="v" style="color:var(--brand-700);">{value}</span><span data-if="tone=highlight" class="v" style="color:var(--highlight-700);">{value}</span></div></template>
`);
