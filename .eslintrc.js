// module.exports = {
//   extends: [
//     'sznm/react',
//     'plugin:react/jsx-runtime',
//     'plugin:@next/next/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     project: './tsconfig.json',
//     tsconfigRootDir: __dirname,
//     ecmaVersion: 2020,
//     sourceType: 'module',
//   },
//   plugins: ['@typescript-eslint'],
//   rules: {
//     'import/extensions': [
//       'error',
//       'ignorePackages',
//       {
//         js: 'never',
//         jsx: 'never',
//         ts: 'never',
//         tsx: 'never',
//       },
//     ],
//     'sonarjs/no-nested-template-literals': 'off',
//     'sonarjs/no-duplicate-string': 'off',
//     '@typescript-eslint/dot-notation': 'error',
//     'no-console': 'warn',
//   },
//   ignorePatterns: [
//     'node_modules/',
//     'dist/',
//     'build/',
//     'public/',
//     '.eslintrc.js',
//     'next-sitemap.config.js',
//     'next.config.js',
//   ],
// };
module.exports = {
  extends: [
    'sznm/react',
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'sonarjs/no-nested-template-literals': 'off',
    'sonarjs/no-duplicate-string': 'off',
    '@typescript-eslint/dot-notation': 'error',
    'no-console': 'warn',
    'no-alert': 'off', // Disable the no-alert rule
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'public/',
    '.eslintrc.js',
    'next-sitemap.config.js',
    'next.config.js',
  ],
};
