BABUL_SHELL.define("ing-hero", `
<template><div class="ing-hero {tint=dairy? grad-dairy}{tint=legume? grad-legume}{tint=plain? grad-plain}{tint=spice? grad-spice}{tint=vegetable? grad-vegetable}"><div class="big-glyph">{glyph}</div><div><p class="eyebrow" style="color:var(--{tone});">{kicker}</p><h1 class="h1 mt-1">{heading}</h1><p class="mt-2" style="font-size:14px;color:var(--ink-2);">{aka}</p></div></div></template>
`);
