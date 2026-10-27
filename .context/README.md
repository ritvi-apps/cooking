# .context — hamburg

Everything about this product. hamburg is a kitchen companion: what an
ingredient is, what it becomes, what it pairs with. The repository is named
`cooking`. It holds **no application code** — content and a design set — so
the design set here is the spec.

Start at [`tasks.md`](tasks.md).

The brand mark is the `.brand-mark` class: a letter on a coloured square.

## Viewing the designs

```bash
cd .context && python3 -m http.server 8899   # then localhost:8899/designs/web/
```

Serve from `.context/`: the notes button reads `wiki/surfaces/<slug>.md`.
