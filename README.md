# VeyraMisk ADHD Budget Planner

A calmer way to organize income, spending, bills, goals and everyday money plans.

[Try the free live demo](https://veyramisk-budget-planner.pages.dev/)

[Open the full planner](https://1esrakula.github.io/veyramisk-budget-planner/)

## Features

- Monthly dashboard, categories and quick transaction capture
- Expected and received income, schedules and cash-flow forecast
- Bills, subscriptions, savings goals and debt tracking
- Wishlist, Money Reset, calendar and Brain Dump
- Reports, transaction history, Theme Studio and Print / PDF
- Browser-local saving with manual backup export and import

No bank connection or account is required. There is no automatic cloud sync.
Keep an exported backup before clearing browser data or moving to another device.
The demo uses example data and a separate storage namespace.

## Run or deploy

This is a static HTML/CSS/JavaScript app. Serve the root directory with a local
HTTP server to use the normal planner. URL parameters cannot switch its mode.
The GitHub site serves only the normal planner; Cloudflare serves only the demo.
Neither product contains a link to the other.

For a dedicated Cloudflare Pages demo:

```sh
node build-demo.cjs
```

Publish the generated `dist` directory. See [DEPLOYMENT.md](DEPLOYMENT.md) for
Git-connected Pages settings and the verification scope.

Based on the VeyraMisk project at
[BILLIONAR/veyramisk-budget-planner](https://github.com/BILLIONAR/veyramisk-budget-planner),
source revision `76e50dadef649f288291fa92b5653b97d6c8f19e`.
