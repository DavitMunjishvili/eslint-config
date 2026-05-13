import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'
import { reactRules } from '../rules/react.js'
import { base } from './base.js'

/** @type {import('eslint').Linter.Config[]} */
export const react = [
  ...base,
  {
    name: 'impel/react',
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooksPlugin,
      react: reactPlugin,
    },
    rules: reactRules,
  },
  {
    name: 'impel/test-overrides',
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
    rules: {
      'no-shadow': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  prettierConfig,
]
