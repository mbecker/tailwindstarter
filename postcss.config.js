const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const comments = require("postcss-discard-comments");
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    cssnano({
      preset: "default",
    }),
    purgecss({
      content: ["./src/**/*.html", "./src/**/*.js"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    comments({removeAll: true})
  ],
};
