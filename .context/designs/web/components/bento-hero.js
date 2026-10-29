BABUL_SHELL.define("bento-hero", `
<template><div class="bento-hero"><div class="glyph {tint=brand? grad-brand}{tint=spice? grad-spice}">{glyph}</div><div class="flex-1 min-w-0"><div class="title">{heading}</div><div class="sub"><slot></slot></div></div><slot name="end"></slot></div></template>
`);
