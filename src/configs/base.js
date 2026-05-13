import tseslint from 'typescript-eslint'
import globals from 'globals'
import stylisticPlugin from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import-x'
import nodePlugin from 'eslint-plugin-n'
import { javascriptRules } from '../rules/javascript.js'
import { typescriptRules } from '../rules/typescript.js'
import { importRules } from '../rules/imports.js'
import { nodeRules } from '../rules/node.js'
import { stylisticRules } from '../rules/stylistic.js'

const GLOB_EXCLUDE = [
  '**/.nx/**',
  '**/.svelte-kit/**',
  '**/build/**',
  '**/coverage/**',
  '**/dist/**',
  '**/snap/**',
  '**/vite.config.*.timestamp-*.*',
]

/** @type {import('eslint').Linter.Config[]} */
export const base = [
  {
    name: 'impel/ignores',
    ignores: GLOB_EXCLUDE,
  },
  {
    name: 'impel/typescript',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        parser: tseslint.parser,
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@stylistic': stylisticPlugin,
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
      node: nodePlugin,
    },
    rules: {
      ...javascriptRules,
      ...typescriptRules,
      ...importRules,
      ...nodeRules,
      ...stylisticRules,
    },
  },
]
