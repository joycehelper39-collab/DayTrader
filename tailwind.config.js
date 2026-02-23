module.exports = {
  content: [
    "./src/**/*.{njk,md,html}",
    "./src/modules/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
