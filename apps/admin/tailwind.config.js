const TailwindConfig = require('../../libs/ui-kit/util/src/tailwind/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...TailwindConfig,
  theme: {
    ...TailwindConfig.theme,
    extend: {
      ...TailwindConfig.theme.extend,
      borderColor: {
        DEFAULT: 'hsl(var(--color-border-base))'
      },
      transitionDuration: {
        DEFAULT: '400ms'
      },
      colors: {
        ...TailwindConfig.theme.extend.colors,
        primary: {
          DEFAULT: 'hsl(var(--color-primary), <alpha-value>)'
        },
        danger: {
          DEFAULT: 'hsl(var(--color-danger), <alpha-value>)',
          dark: 'hsl(var(--color-danger-dark), <alpha-value>)'
        },
        "base-color": {
          DEFAULT: '#333'
        },
        muted: {
          DEFAULT: 'hsl(var(--color-text-muted), <alpha-value>)'
        },
        body: {
          DEFAULT: 'hsl(var(--color-text-base), <alpha-value>)'
        }
      }
    }
  }
};
