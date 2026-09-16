# Cloudflare demo

Connect this repository in Cloudflare Pages. Select the `main` production branch,
framework **None**, build command `node build-demo.cjs`, and output directory `dist`.
No dependencies or environment variables are needed.

The build copies the static planner and sets its compile-time `VM_DEMO` flag.
The GitHub root always runs the normal planner, including with `?demo` in the URL.
The Cloudflare output always runs the demo, even without a query string.
Neither site contains links to switch to the other. Demo data uses its own storage
namespace as well as a separate origin. Repository documentation is excluded from
GitHub Pages by `_config.yml`.

The public demo is at https://veyramisk-budget-planner.pages.dev/ and builds
automatically from `veyramisk/veyramisk-budget-planner` on GitHub.
The full planner is also published from `main` at
https://veyramisk.github.io/veyramisk-budget-planner/ via GitHub Pages.
The earlier direct-upload demo at https://veyramisk-budget-demo.pages.dev/
remains available for existing links.

## Verified in Chrome (2026-09-16)

- The live demo opens with example data and a visible FREE LIVE DEMO notice.
- All 20 navigation sections open successfully.
- Adding a $10.25 example Food expense changes monthly expenses from $2,890 to
  $2,900.25 and available money from $660 to $649.75.
- That example entry and its totals survive a page reload.
- JavaScript syntax validation passes; no captured application console errors
  were present during the inspected flow.

This is a functional smoke check, not an exhaustive audit of every calculation,
backup import, export or browser/device combination.
