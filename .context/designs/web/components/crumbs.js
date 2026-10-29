BABUL_SHELL.define("crumbs", `
<template><div class="crumbs"><a href="{home}" data-link="back"><span><i data-lucide="house" class="hb-icon w-[12px] h-[12px]" stroke-width="1.75"></i></span> Home</a><span class="sep">/</span><a data-if="up" href="{up}" data-link="back">{up-label}</a><span data-if="up" class="sep">/</span><span>{here}</span></div></template>
`);
