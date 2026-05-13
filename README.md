# @davitmunjishvili/eslint-config

Shared ESLint flat config for React + TypeScript projects.

## Installation

```sh
npm install -D @davitmunjishvili/eslint-config eslint typescript
```

## Usage

### React + TypeScript (recommended)

```js
// eslint.config.js
import { react } from '@davitmunjishvili/eslint-config'

export default [...react]
```

### Base (TypeScript only, no React)

```js
// eslint.config.js
import { base } from '@davitmunjishvili/eslint-config'

export default [...base]
```

### Composing individual rule sets

Each rule module is also exported individually if you need to build a custom config:

```js
import { javascriptRules, typescriptRules, importRules, nodeRules, stylisticRules, reactRules } from '@davitmunjishvili/eslint-config'
```

Or via subpath imports:

```js
import { javascriptRules } from '@davitmunjishvili/eslint-config/rules/javascript'
import { typescriptRules } from '@davitmunjishvili/eslint-config/rules/typescript'
import { importRules } from '@davitmunjishvili/eslint-config/rules/imports'
import { nodeRules } from '@davitmunjishvili/eslint-config/rules/node'
import { stylisticRules } from '@davitmunjishvili/eslint-config/rules/stylistic'
import { reactRules } from '@davitmunjishvili/eslint-config/rules/react'
```

## What's included

### `base` config

Targets `**/*.{ts,tsx}` files with:

- **JavaScript** — strict correctness rules (`no-var`, `prefer-const`, `no-shadow`, `sort-imports`, etc.)
- **TypeScript** — type-aware rules (`consistent-type-imports`, `no-unnecessary-condition`, `prefer-for-of`, `require-await`, naming conventions for generics, etc.)
- **Imports** — enforced import ordering, no CommonJS, no duplicate imports, `import type` at the top level
- **Node** — enforces `node:` prefix for built-in imports
- **Stylistic** — spaced comments via `@stylistic/eslint-plugin`

### `react` config

Extends `base` and adds:

- **React Hooks** — enforces rules of hooks and exhaustive dependency arrays
- **React** — requires `key` props on list elements, disallows deprecated APIs
- **Prettier** — disables formatting rules that conflict with Prettier (`eslint-config-prettier`)
- Test file overrides — relaxes `no-shadow` and `react-hooks/exhaustive-deps` in `*.spec.*` / `*.test.*` files

## Peer dependencies

| Package | Version |
|---|---|
| `eslint` | `^9.0.0` |
| `typescript` | `>=5.0.0` |

## License

MIT
