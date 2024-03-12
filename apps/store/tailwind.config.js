/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../../libs/ui-kit/util/src/tailwind/tailwind.config.js')],
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../libs/**/*.{js,ts,jsx,tsx,mdx}',
    '../../../ui/**/*.{js,jsx,ts,tsx}',
  ],
};
