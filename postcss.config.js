// postcss.config.js

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nested'),
    ...(process.env.JEKYLL_ENV == "production" // example of only using a plugin in production
      ? [require("cssnano")({ preset: "default" })]
      : [])
  ]
};
