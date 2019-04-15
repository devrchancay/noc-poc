module.exports = {
  content: ['./build/**/*.html', './src/**/*.js'],
  css: ['./src/styles/index.css'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g);
        }
      },
      extensions: ['html', 'js'],
    },
  ],
};
