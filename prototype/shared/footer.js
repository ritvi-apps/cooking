// hamburg — simple footer.
(function () {
  const depth = document.body.dataset.depth || '';
  const rel = (p) => `${depth}${p}`;

  const html = `
    <footer class="footer-shell mt-20">
      <div class="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="flex items-center gap-2">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-xl"
                style="background:var(--sage-500);color:white;font-family:Fraunces,Georgia,serif;font-weight:600;font-size:14px;">h</span>
          <span style="font-size:12.5px;color:var(--text-md);">
            <b class="font-display" style="color:var(--text-hi);">hamburg</b>
            <span class="divider-dot"></span>
            cook, learn, remember, publish
          </span>
        </div>
        <div class="flex flex-wrap items-center gap-4" style="font-size:12px;color:var(--text-md);">
          <a class="nav-pill" style="padding:4px 10px;" href="${rel('journeys/index.html')}">Journeys</a>
          <a class="nav-pill" style="padding:4px 10px;" href="${rel('recipes/index.html')}">Recipes</a>
          <a class="nav-pill" style="padding:4px 10px;" href="${rel('ingredients/index.html')}">Ingredients</a>
          <span style="color:var(--text-lo);">🌱 100% veg</span>
        </div>
      </div>
    </footer>
  `;

  const mount = document.getElementById('footer-mount');
  if (mount) mount.outerHTML = html;
  else document.body.insertAdjacentHTML('beforeend', html);
})();
