// ESLint configuration — warn-only, no autofix. Part of T009.
// AI_GOOD: Minimal, behavior-neutral static analysis with complexity reporting.
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  settings: {
    react: { version: 'detect' },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: false, // AI_OTHER: Avoid type-aware linting to keep config light and fast
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier', // AI_GOOD: Disable formatting rules in favor of Prettier
  ],
  rules: {
    // General JS/TS rules
    'no-undef': 'off', // handled by TS
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    // React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', // using TS for types
    // Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Imports
    'import/order': 'off',
    // Complexity metrics (warn-only)
    complexity: ['warn', { max: 15 }], // AI_OTHER: Report cyclomatic complexity without failing CI yet
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**'],
      env: { node: true, browser: true },
      // AI_OTHER: Provide common test globals without adding extra plugins
      globals: {
        vi: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      parser: 'espree',
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    '.vite/',
    // AI_CLARIFY: Ignoring shadcn/ui vendorized components to reduce noise during refactor
    'src/components/ui/**',
  ],
};
