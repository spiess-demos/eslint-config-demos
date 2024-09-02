const globals = require('globals');
const eslintJs = require('@eslint/js');
const pluginCypressSelectors = require('./lib/data-cy.cjs');
const pluginVue = require('eslint-plugin-vue');
const pluginVueA11y = require('eslint-plugin-vuejs-accessibility');
const stylisticJs = require('@stylistic/eslint-plugin-js');
const stylisticTs = require('@stylistic/eslint-plugin-ts');
const tsEslint = require('typescript-eslint');
const vueEslintParser = require('vue-eslint-parser')

module.exports = [
  eslintJs.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...pluginVueA11y.configs['flat/recommended'],
  {
    ignores: [
      "**/node_modules/**"
    ]
  },
  {
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    languageOptions: {
      globals: globals.browser,
      parser: vueEslintParser,
      parserOptions: {
        parser: tsEslint.parser
      }
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
      'typescript': tsEslint.plugin,
      'vue': pluginVue,
      'vuejs-accessibility': pluginVueA11y,
      'cypress-selectors': pluginCypressSelectors
    },
    rules: {
      'cypress-selectors/data-cy': 'error',
      'generator-star-spacing': 'off',
      'multiline-comment-style': 'error',
      'sort-imports': ['error', { 'ignoreCase': true }],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/object-curly-spacing': ['error', 'always'],
      'vue/html-closing-bracket-newline': ['error', {
        'singleline': 'never',
        'multiline': 'never'
      }],
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/order-in-components': ['error', {
        'order': [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'methods',
          'LIFECYCLE_HOOKS',
          ['template', 'render'],
          'renderError'
        ]
      }],
      'vue/block-order': ['error', {
        'order': ['docs', 'template', 'script:not([setup])', 'script[setup]', 'style']
      }],
      'vue/define-macros-order': ['error', {
        'order': ['defineProps', 'defineEmits'],
        'defineExposeLast': true
      }],
      'vue/v-slot-style': ['error', {
        'atComponent': 'longform',
        'default': 'longform',
        'named': 'longform'
      }],
      'vue/multi-word-component-names': 'warn',
      'vuejs-accessibility/label-has-for': 'warn'
    }
  }
]
