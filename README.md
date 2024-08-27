# eslint-config-demos

## Overview

`eslint-config-demos` is a shareable ESLint configuration for [DEMOS] projects. 
It supports JavaScript, TypeScript, and Vue.js, with rules for accessibility and stylistic consistency.

## Installation

Install the package and its peer dependencies:

```shell
yarn add eslint @demos-europe/eslint-config-demos @eslint/js @stylistic/eslint-plugin-js @stylistic/eslint-plugin-ts eslint-plugin-vue eslint-plugin-vuejs-accessibility globals typescript typescript-eslint -D
```

## Usage

Create an `eslint.config.js` file in your project root and extend the configuration:

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

## Features

- Rules based on ESLint recommended configurations
- Support for JavaScript, TypeScript, and Vue.js
- Accessibility linting with `eslint-plugin-vuejs-accessibility`
- Stylistic rules via `@stylistic/eslint-plugin-js` and `@stylistic/eslint-plugin-ts`

## License

This project is licensed under the MIT License.

## Uses Stylistic
- https://eslint.style/guide/why
