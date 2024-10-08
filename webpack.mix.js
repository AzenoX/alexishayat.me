const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/gsap.js', 'public/js')
    .version();

mix.js('resources/js/morph.js', 'public/js')
    .version();

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/main.scss', 'public/css', [])
    .version();

mix.js('resources/js/app2.js', 'public/js')
    .version();
