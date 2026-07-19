// hamburg — top nav. Simple pill nav, 4 sections.
// Pages set body data-depth (prefix to root) and data-surface (active section).
// data-surface values: home | journeys | recipes | ingredients | skills | patterns | ""

(function () {
  const surface = document.body.dataset.surface || '';
  const depth   = document.body.dataset.depth   || '';
  const rel = (p) => `${depth}${p}`;

  const items = [
    { key: 'journeys',    label: 'Journeys',    href: 'journeys/index.html',    emoji: '🗺' },
    { key: 'recipes',     label: 'Recipes',     href: 'recipes/index.html',     emoji: '🍳' },
    { key: 'ingredients', label: 'Ingredients', href: 'ingredients/index.html', emoji: '🌿' },
    { key: 'skills',      label: 'Skills',      href: 'skills.html',            emoji: '📈' },
  ];

  const links = items.map(it => {
    const active = it.key === surface ? ' active' : '';
    return `<a class="nav-pill${active}" href="${rel(it.href)}"><span style="margin-right:6px;">${it.emoji}</span>${it.label}</a>`;
  }).join('');

  const html = `
    <header class="nav-shell">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 gap-4">
        <a href="${rel('index.html')}" class="flex items-center gap-2.5 shrink-0">
          <span class="inline-flex h-9 w-9 items-center justify-center rounded-2xl"
                style="background:var(--sage-500);color:white;font-family:Fraunces,Georgia,serif;font-weight:600;font-size:18px;">h</span>
          <span class="hidden sm:flex flex-col leading-tight">
            <span class="font-display" style="font-size:16px;font-weight:600;color:var(--text-hi);">hamburg</span>
            <span style="font-size:10.5px;color:var(--text-lo);letter-spacing:0.06em;text-transform:uppercase;">kitchen companion</span>
          </span>
        </a>
        <nav class="hidden md:flex items-center gap-1">${links}</nav>
        <a href="${rel('patterns/components.html')}" class="btn btn-ghost btn-sm" title="Component reference" style="flex-shrink:0;">◐</a>
      </div>
      <div class="md:hidden border-t px-3 py-2" style="border-color:var(--border);">
        <div class="h-scroll">${links}</div>
      </div>
    </header>
  `;

  const mount = document.getElementById('nav-mount');
  if (mount) mount.outerHTML = html;
  else document.body.insertAdjacentHTML('afterbegin', html);
})();
