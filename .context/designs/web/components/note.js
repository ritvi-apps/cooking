BABUL_SHELL.define("note", `
<template><div class="note{tone=warn? warn}{tone=stop? stop}"><span class="ic"><i data-lucide="{icon}" class="hb-icon w-[18px] h-[18px]" stroke-width="1.75"></i></span><div><div class="t">{heading}</div><div class="b"><slot></slot></div></div></div></template>
`);
