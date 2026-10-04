/* hamburg — loaded AFTER the Tailwind CDN, which is what lets it replace the
   default palette rather than extend it.
   ============================================================================
   EVERY VALUE IS var(--token). Never a literal.

   A literal compiled into `bg-surface` stops following the scope it lands in,
   and a theme remap can no longer reach it.

   The key path here and the variable name in shared.css are the same string
   with dots swapped for dashes. If you add one, add both, in the same edit —
   a class that resolves to nothing does not throw, it just quietly does not
   paint.
   ============================================================================ */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* Canonical set — present in every product, same names everywhere. */
        ink:     { DEFAULT: "var(--ink)", 2: "var(--ink-2)", 3: "var(--ink-3)", 4: "var(--ink-4)", inverse: "var(--ink-inverse)" },
        page:    "var(--page)",
        frame:   "var(--frame)",
        surface: "var(--surface)",
        muted:   "var(--muted)",
        sunken:  "var(--sunken)",
        line:    { DEFAULT: "var(--line)", strong: "var(--line-strong)" },
        brand:   {
          50: "var(--brand-50)", 100: "var(--brand-100)", 200: "var(--brand-200)",
          400: "var(--brand-400)", 500: "var(--brand-500)",
          700: "var(--brand-700)", 900: "var(--brand-900)",
          DEFAULT: "var(--brand-500)",
        },
        /* The second brand colour: coral. Only the three steps the prototype
           drew — a step with no value would resolve to nothing. */
        accent:  {
          100: "var(--accent-100)", 500: "var(--accent-500)", 700: "var(--accent-700)",
          DEFAULT: "var(--accent-500)",
        },
        success: { DEFAULT: "var(--success)", bg: "var(--success-bg)", fg: "var(--success-fg)" },
        warn:    { DEFAULT: "var(--warn)",    bg: "var(--warn-bg)",    fg: "var(--warn-fg)" },
        danger:  { DEFAULT: "var(--danger)",  bg: "var(--danger-bg)",  fg: "var(--danger-fg)" },
        info:    { DEFAULT: "var(--info)",    bg: "var(--info-bg)",    fg: "var(--info-fg)" },

        /* This product's own. See the PALETTE banner in shared.css. */
        highlight: {
          100: "var(--highlight-100)", 400: "var(--highlight-400)",
          500: "var(--highlight-500)", 700: "var(--highlight-700)",
          DEFAULT: "var(--highlight-500)",
        },
        cat: {
          dairy: "var(--cat-dairy)", vegetable: "var(--cat-vegetable)",
          legume: { DEFAULT: "var(--cat-legume)", fg: "var(--cat-legume-fg)" },
          grain:  { DEFAULT: "var(--cat-grain)",  fg: "var(--cat-grain-fg)" },
          spice: "var(--cat-spice)", herb: "var(--cat-herb)",
          fruit: "var(--cat-fruit)", condiment: "var(--cat-condiment)",
        },
        glass:   { DEFAULT: "var(--glass)", soft: "var(--glass-soft)", strong: "var(--glass-strong)" },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "2xs":  ["var(--fs-2xs)",  { lineHeight: "var(--lh-2xs)" }],
        xs:     ["var(--fs-xs)",   { lineHeight: "var(--lh-xs)" }],
        sm:     ["var(--fs-sm)",   { lineHeight: "var(--lh-sm)" }],
        base:   ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
        body:   ["var(--fs-body)", { lineHeight: "var(--lh-body)" }],
        lead:   ["var(--fs-lead)", { lineHeight: "var(--lh-lead)" }],
        h3:     ["var(--fs-h3)",   { lineHeight: "var(--lh-h3)", letterSpacing: "var(--ls-h3)" }],
        h2:     ["var(--fs-h2)",   { lineHeight: "var(--lh-h2)", letterSpacing: "var(--ls-h2)" }],
        h1:     ["var(--fs-h1)",   { lineHeight: "var(--lh-h1)", letterSpacing: "var(--ls-h1)" }],
        display:["var(--fs-display)", { lineHeight: "var(--lh-display)", letterSpacing: "var(--ls-display)" }],
      },
      letterSpacing: { label: "var(--tracking-label)" },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        pill: "var(--radius-pill)",
        phone: "var(--radius-phone)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow)",
        lg: "var(--shadow-lg)",
        phone: "var(--shadow-phone)",
      },
      width:     { frame: "var(--frame-w)" },
      maxWidth:  { frame: "var(--frame-w)" },
      height:    { frame: "var(--frame-h)" },
      minHeight: { frame: "var(--frame-h)" },
      maxHeight: { frame: "var(--frame-h)" },
    },
  },
};
