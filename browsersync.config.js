var browserSync = require('browser-sync');

browserSync({
  ui: false,
  files: [
    './dist'
  ],
  watchOptions: {
    ignoreInitial: true,
    ignored: 'node_modules'
  },
  port: 5000,
  server: './dist'
});
