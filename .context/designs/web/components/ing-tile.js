BABUL_SHELL.define("ing-tile", `
<template><a class="ing-tile"><div class="glyph {cat=dairy? glyph-dairy}{cat=grain? glyph-grain}{cat=herb? glyph-herb}{cat=legume? glyph-legume}{cat=spice? glyph-spice}{cat=vegetable? glyph-vegetable}">{glyph}</div><div class="label">{label}</div><div data-if="sub" class="sub">{sub}</div></a></template>
<template state="picked"><button class="ing-tile" style="border-color:var(--brand-500);box-shadow:0 0 0 3px var(--brand-100);"><div class="glyph {cat=dairy? glyph-dairy}{cat=grain? glyph-grain}{cat=herb? glyph-herb}{cat=legume? glyph-legume}{cat=spice? glyph-spice}{cat=vegetable? glyph-vegetable}">{glyph}</div><div class="label">{label}</div><div data-if="sub" class="sub">{sub}</div></button></template>
`);
