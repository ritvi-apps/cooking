// hamburg — inline SVG icon library.
// Use in HTML: <span data-icon="pot"></span>  or  <span data-icon="clock" data-size="14"></span>
// Icons are Lucide-style: stroke-based, 24×24 viewBox, currentColor.

(function () {
  const ICONS = {
    // Navigation & UI
    'home':        '<path d="M3 12l9-9 9 9M5 10v10h14V10"/>',
    'search':      '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    'arrow-right': '<path d="M5 12h14M13 5l7 7-7 7"/>',
    'arrow-left':  '<path d="M19 12H5M11 5l-7 7 7 7"/>',
    'chevron-r':   '<path d="M9 6l6 6-6 6"/>',
    'chevron-d':   '<path d="M6 9l6 6 6-6"/>',
    'menu':        '<path d="M4 6h16M4 12h16M4 18h16"/>',
    'x':           '<path d="M6 6l12 12M18 6L6 18"/>',
    'plus':        '<path d="M12 5v14M5 12h14"/>',

    // Cooking / kitchen actions
    'clock':       '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    'flame':       '<path d="M12 3s5 4 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4-1 3 1 5 3 5 0-3-3-6 0-11z"/>',
    'droplet':     '<path d="M12 3s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z"/>',
    'pot':         '<path d="M4 10h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8zM2 10h20M7 10V7M17 10V7"/>',
    'whisk':       '<path d="M15 3l6 6M18 6l-9 9M9 15c-2 2-3 5-3 5s3-1 5-3M6 20l3-3"/>',
    'knife':       '<path d="M20 4L4 20M4 20l3-3-2-2z"/>',
    'salt':        '<path d="M9 2h6l1 4H8zM8 6h8v3H8zM8 9v9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9M11 12h.01M13 15h.01M11 18h.01"/>',
    'chef':        '<path d="M6 14h12v6H6zM6 14c-2 0-4-2-4-4a4 4 0 0 1 5-4 4 4 0 0 1 5-2 4 4 0 0 1 5 2 4 4 0 0 1 5 4c0 2-2 4-4 4"/>',
    'bowl':        '<path d="M2 11h20a10 10 0 0 1-20 0z"/><path d="M8 5l1 5M16 5l-1 5"/>',
    'leaf':        '<path d="M5 20c9 0 15-6 15-15 0 0-15 0-15 15zM5 20l6-6"/>',
    'jar':         '<path d="M7 2h10v3H7zM6 5h12v15a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/>',
    'wheat':       '<path d="M12 22V6M12 6c-3-3-6-3-6-3s0 3 3 6c-3-3-6-3-6-3s0 3 3 6c3 3 6 3 6 3M12 6c3-3 6-3 6-3s0 3-3 6c3-3 6-3 6-3s0 3-3 6c-3 3-6 3-6 3"/>',

    // Status
    'check':       '<path d="M5 12l5 5L20 7"/>',
    'hourglass':   '<path d="M6 3h12M6 21h12M8 3v3l4 6-4 6v3M16 3v3l-4 6 4 6v3"/>',
    'dot':         '<circle cx="12" cy="12" r="4"/>',
    'warning':     '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
    'target':      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    'recycle':     '<path d="M20 12a8 8 0 1 1-3-6M20 5v5h-5"/>',
    'heart':       '<path d="M12 21c-5-4-9-8-9-13a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5-4 9-9 13z"/>',
    'star':        '<path d="M12 3l3 6 6 1-4.5 4.5L18 21l-6-3-6 3 1.5-6.5L3 10l6-1z"/>',
    'bookmark':    '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    'sparkles':    '<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 15l.5 1.5L21 17l-1.5.5L19 19l-.5-1.5L17 17l1.5-.5zM5 4l.5 1.5L7 6l-1.5.5L5 8l-.5-1.5L3 6l1.5-.5z"/>',

    // Meta
    'graph':       '<circle cx="5" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 12l10-5M7 12l10 5"/>',
    'book':        '<path d="M4 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H4z M20 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
    'compass':     '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-4 2 2-6z"/>',
    'play':        '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
    'external':    '<path d="M14 4h6v6M20 4l-9 9M10 6H4v14h14v-6"/>',
    'thermometer': '<path d="M14 4a2 2 0 1 0-4 0v10a4 4 0 1 0 4 0z"/>',
    'wind':        '<path d="M3 8h13a3 3 0 1 0-3-3M3 12h17a3 3 0 1 1-3 3M3 16h11a3 3 0 1 0-3 3"/>',
    'calendar':    '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    'sun':         '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>',
    'sprout':      '<path d="M12 20V9M12 9c-3 0-5-2-5-5 3 0 5 2 5 5zM12 9c3 0 5-2 5-5-3 0-5 2-5 5z"/><path d="M6 20h12"/>',
    'snowflake':   '<path d="M12 3v18M3 12h18M5 5l14 14M19 5L5 19"/>',
    'basket':      '<path d="M3 10h18l-2 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M8 10L12 3l4 7"/>',
    'link':        '<path d="M9 15a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M15 9a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    'x-circle':    '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
    'check-circle':'<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
    'globe':       '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    'scissors':    '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.5 15.5M14 14l6 6M8.5 8.5L14 14"/>',
    'info':        '<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>',
  };

  function svg(name, size) {
    const inner = ICONS[name];
    if (!inner) return '';
    const s = size || 20;
    return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="hb-icon">${inner}</svg>`;
  }

  // Expose globally
  window.hbIcon = svg;

  // Auto-inject when DOM loads
  function inject() {
    document.querySelectorAll('[data-icon]').forEach(el => {
      const name = el.dataset.icon;
      const size = parseInt(el.dataset.size || '20', 10);
      el.innerHTML = svg(name, size);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
