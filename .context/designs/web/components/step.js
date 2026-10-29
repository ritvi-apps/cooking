BABUL_SHELL.define("step", `
<template><div class="step"><div class="numeral">{n}</div><div><p class="head">{head} <span data-if="icon" style="vertical-align:-3px;color:var(--{tone});"><i data-lucide="{icon}" class="hb-icon w-[20px] h-[20px]" stroke-width="1.75"></i></span></p><p class="cue">{cue}</p><div data-if="meta" class="meta"><slot></slot></div></div></div></template>
`);
