// postcss.config.js

module.exports = {
  plugins: [
    require("autoprefixer"), // example of plugin you might use
    require('postcss-nested'),
    ...(process.env.JEKYLL_ENV == "production" // example of only using a plugin in production
      ? [require("cssnano")({ preset: "default" })]
      : [])
  ]
};
