const TailwindConfig = require('../../libs/ui-kit/util/src/tailwind/tailwind.config');

module.exports = {
  ...TailwindConfig,
  theme: {
    ...TailwindConfig.theme,
    extend: {
      ...TailwindConfig.theme.extend,
      transitionDuration: {
        DEFAULT: '400ms'
      },
      colors: {
        ...TailwindConfig.theme.extend.colors,
        // primary: {
        //   DEFAULT: 'hsl(var(--color-primary))'
        // },
        // danger: {
        //   DEFAULT: 'hsl(var(--color-danger), <alpha-value>)',
        //   dark: 'hsl(var(--color-danger-dark), <alpha-value>)'
        // },
        // "base-color": {
        //   DEFAULT: '#333'
        // },
        // body: {
        //   DEFAULT: 'hsl(var(--color-text-base))'
        // }
      }
    }
  }
};
