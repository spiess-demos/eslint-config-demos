# eslint-config-demos

## Overview

`eslint-config-demos` is a shareable ESLint configuration for [DEMOS] projects. 
It supports JavaScript, TypeScript, and Vue.js, with rules for accessibility and stylistic consistency.

## Installation

As this package is not yet available on npm, install it directly from GitHub 
using the latest commit hash, along with its devDependencies.

```shell
yarn add @demos-europe/eslint-config-demos@github:spiess-demos/eslint-config-demos#653d42395f1e4b80168bf9e940501b64e9485dfe @eslint/js @stylistic/eslint-plugin-js @stylistic/eslint-plugin-ts eslint eslint-plugin-vue eslint-plugin-vuejs-accessibility globals typescript-eslint vue-eslint-parser -D
```

## Usage

Create an `eslint.config.js` file in your project root and extend the configuration.

### ESM

```javascript
import baseConfig from '@demos-europe/eslint-config-demos'

export default [
  ...baseConfig,
  {
    rules: {
      // Override or add specific rules
      'no-console': 'warn',
      'semi': ['error', 'always']
    }
  }
]
```

### CommonJS

```javascript
const baseConfig = require('@demos-europe/eslint-config-demos')

module.exports = [
  ...baseConfig,
  {
    rules: {
      // Override or add specific rules
      'no-console': 'warn',
      'semi': ['error', 'always']
    }
  }
]
```

### Run the linter

You can then run the linter:

- `yarn lint` just lints everything: errors and warnings
- `yarn lint --fix` applies "no-brainer" fixes
- `yarn lint --quiet` runs the error rules only, may be faster

## Features

- Rules based on ESLint recommended configurations
- Support for JavaScript, TypeScript, and Vue.js
- Accessibility linting with `eslint-plugin-vuejs-accessibility`
- Stylistic rules via `@stylistic/eslint-plugin-js` and `@stylistic/eslint-plugin-ts`
- A custom rule that enforces "data-cy" attribute on interactive elements

If you are interested in the reasoning why this package uses Stylistic to enforce code style consistency,
[read this article by the maintainers of Stylistic](https://eslint.style/guide/why).

## License

This project is licensed under the MIT License.
