const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        process.env.NODE_ENV==="production" &&  purgecss({
            purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
            css: ['./src/**/*.css'],
        })
    ]
}