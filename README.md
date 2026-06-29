# MoSh System Tests Module

Quench + Cypress tests for the unofficial [foundry-mothership](https://github.com/Achoobert/foundry-mothership) system (`mosh`).

## Setup

- Requires **Node.js >= 20.19**
- Run `pnpm install`
- Copy [`fvtt.config.example.js`](./fvtt.config.example.js) to `fvtt.config.js` and set `userDataPath` / `baseURL`
- Run `pnpm run build` or `pnpm run watch` (outputs to Foundry `Data/modules/mothership-system-tests` when `userDataPath` exists, else `./build/`)
- In Foundry: **MoSh** world, enable **Quench** and **MoSh System Tests**

## Running tests

- In-world: Quench sidebar → run batches
- Cypress (interactive): `pnpm run tests`
- Cypress (headless): `pnpm run tests:ci` (Foundry must be running with modules enabled)

Set `FOUNDRY_ADMIN_KEY`, `FOUNDRY_PASSWORD`, or `ADMIN_PASSWORD` when Cypress hits `/auth`.

## Quench batches

| Batch ID | Topic |
|----------|--------|
| `mosh.actors.smoke` | Actor types (`character`, `creature`, `ship`) |
| `mosh.items.smoke` | Item types |
| `mosh.api` | `game.mosh` surface |
