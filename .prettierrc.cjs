/** @type {import("@types/prettier").Options} */
module.exports = {
  printWidth: 80,
  semi: false,
  singleQuote: true,
  endOfLine: 'auto',
  trailingComma: 'none',
  tabWidth: 2,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
}
