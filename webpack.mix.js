const mix = require('laravel-mix');

mix.js('src/js/main.js', 'dist/js')
   .sass('src/scss/main.scss', 'dist/css')
   .sass('src/scss/themes/theme-peachy/peachy.scss', 'dist/css/themes');
