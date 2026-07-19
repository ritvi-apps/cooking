// hamburg — top nav. SVG icons, 4 sections + brand.
// Pages: body data-depth (prefix to root), data-surface (active section)

(function () {
  const surface = document.body.dataset.surface || '';
  const depth   = document.body.dataset.depth   || '';
  const rel = (p) => `${depth}${p}`;

  // Minimal inline SVG icons (Lucide-style)
  const I = {
    leaf:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 20c9 0 15-6 15-15 0 0-15 0-15 15z"/><path d="M5 20l6-6"/></svg>',
    link:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M15 9a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    book:    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H4z"/><path d="M20 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/></svg>',
    palette: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="6" r="1.5"/><circle cx="17" cy="10" r="1.5"/><circle cx="15" cy="17" r="1.5"/><circle cx="7" cy="14" r="1.5"/></svg>',
  };

  const items = [
    { key: 'ingredients', label: 'Ingredients', icon: I.leaf,  href: 'ingredients/index.html' },
    { key: 'pairings',    label: 'Pairings',    icon: I.link,  href: 'pairings/index.html' },
    { key: 'cookbook',    label: 'Cookbook',    icon: I.book,  href: 'recipes/index.html' },
  ];

  const links = items.map(it => {
    const active = it.key === surface ? ' active' : '';
    return `<a class="nav-pill${active}" href="${rel(it.href)}">${it.icon}<span>${it.label}</span></a>`;
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
        <a href="${rel('patterns/components.html')}" class="icon-btn" title="Component reference" style="width:36px;height:36px;">${I.palette}</a>
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
