module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),

     /**
     * https://morioh.com/p/cb1b7af5f6d8
     * https://stackoverflow.com/questions/12251750/can-media-queries-resize-based-on-a-div-element-instead-of-the-screen
     * https://github.com/w3c/csswg-drafts/issues/5796
     */
    // require('tailwindcss-container-query'),

    /**
     * https://www.npmjs.com/package/tailwind-scrollbar-hide
     */
    // require('tailwind-scrollbar-hide'),
    // require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms')
  ],
};
