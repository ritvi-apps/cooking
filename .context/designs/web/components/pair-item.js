BABUL_SHELL.define("pair-item", `
<template><div class="pair-item"><div class="g">{glyph}</div><div><div class="name">{name}</div><div class="why"><slot></slot></div></div></div></template>
<template variant="avoid"><div class="pair-item avoid"><div class="g">{glyph}</div><div><div class="name">{name}</div><div class="why"><slot></slot></div></div></div></template>
`);
