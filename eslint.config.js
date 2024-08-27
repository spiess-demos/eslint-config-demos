import globals from 'globals'
import eslintJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import tsEslint from 'typescript-eslint'
import vueEslintParser from 'vue-eslint-parser'

export default [
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
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: tsEslint.parser,
        project: './tsconfig.json',
      }
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
      'typescript': tsEslint.plugin,
      'vue': pluginVue,
      'vuejs-accessibility': pluginVueA11y
    },
    rules: {
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
