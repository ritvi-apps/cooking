BABUL_SHELL.define("chip", `
<template><span class="chip{tone=brand? chip-brand}{tone=accent? chip-accent}{tone=highlight? chip-highlight}{tone=white? chip-white}"><span data-if="icon"><i data-lucide="{icon}" class="hb-icon w-[{small?10:12}px] h-[{small?10:12}px]" stroke-width="1.75"></i></span><slot></slot></span></template>
<template as="link"><a class="chip{tone=brand? chip-brand}{tone=accent? chip-accent}{tone=highlight? chip-highlight}{tone=white? chip-white}"><span data-if="icon"><i data-lucide="{icon}" class="hb-icon w-[{small?10:12}px] h-[{small?10:12}px]" stroke-width="1.75"></i></span><slot></slot></a></template>
<template as="button"><button class="chip{tone=brand? chip-brand}{tone=accent? chip-accent}{tone=highlight? chip-highlight}{tone=white? chip-white}"><span data-if="icon"><i data-lucide="{icon}" class="hb-icon w-[{small?10:12}px] h-[{small?10:12}px]" stroke-width="1.75"></i></span><slot></slot></button></template>
`);
