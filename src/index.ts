import type { Config } from 'prettier';

/**
 * @see https://prettier.io/docs/en/configuration.html
 */
const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  insertPragma: false,
  printWidth: 120,
  proseWrap: 'never',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
} satisfies Config;

export default config;
