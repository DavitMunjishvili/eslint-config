/** @type {import('eslint').Linter.RulesRecord} */
export const reactRules = {
  /** Enforce rules of hooks (no conditional hook calls) */
  'react-hooks/rules-of-hooks': 'error',
  /** Enforce complete dependency arrays on useCallback, useEffect, useMemo */
  'react-hooks/exhaustive-deps': 'error',
  /** Require key prop on elements in arrays/iterators */
  'react/jsx-key': 'error',
  /** Disallow usage of deprecated React APIs */
  'react/no-deprecated': 'error',
}
