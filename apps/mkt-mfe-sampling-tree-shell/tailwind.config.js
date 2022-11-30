// /** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

// const Color = require('color');
// // const alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
// const lighen = (clr, val) => Color(clr).lighten(val).rgb().string();
// const darken = (clr, val) => Color(clr).darken(val).rgb().string();

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class', // or 'media'
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        primary: '#228be6',
        // 'primary-dark': darken('#228be6', 0.1),
        // 'primary-light': lighen('#228be6', 0.1),
      },
      screens: {
        xs: { min: '0px', max: '639px' },
        ...defaultTheme.screens,
      },

      containerQuery: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      containerType: {
        size: 'size',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    /**
     * https://morioh.com/p/cb1b7af5f6d8
     * https://stackoverflow.com/questions/12251750/can-media-queries-resize-based-on-a-div-element-instead-of-the-screen
     * https://github.com/w3c/csswg-drafts/issues/5796
     */
    // require('tailwindcss-container-query'),
  ],
};
