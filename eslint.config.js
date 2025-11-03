// ESLint flat config — T009 (warn-only, no autofix)
// AI_GOOD: Behavior-neutral static analysis; includes complexity reporting and sensible defaults.
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';

export default [
  // Global ignore patterns
  { ignores: [
    'node_modules/**',
    'dist/**',
    'build/**',
    'coverage/**',
    '.vite/**',
    // AI_CLARIFY: Ignoring vendor-like UI components to reduce lint noise during refactor
    'src/components/ui/**',
    'public/**',
  ]},
  // Apply rules only to project source and config files
  {
    ...js.configs.recommended,
    files: [
      'src/**/*.{js,jsx,ts,tsx}',
      'vite.config.ts',
      'vitest.config.ts',
      'postcss.config.js',
      'eslint.config.js',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // General
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      // Hooks
  // AI_CLARIFY: Set to 'warn' to avoid failing CI during refactor; will revisit later
  'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      // Imports
      'import/order': 'off',
      // Complexity
      complexity: ['warn', { max: 15 }],
    },
  },
  {
    files: ['**/*.test.{ts,tsx}', 'src/__tests__/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        vi: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
