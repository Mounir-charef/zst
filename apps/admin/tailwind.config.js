const TailwindConfig = require('../../libs/ui-kit/util/src/tailwind/tailwind.config');

module.exports = {
  ...TailwindConfig,
  theme: {
    ...TailwindConfig.theme,
    transitionDuration: {
      DEFAULT: '400ms'
    },
    extend: {
      ...TailwindConfig.theme.extend,
      colors: {
        ...TailwindConfig.theme.extend.colors,
        "text-color": {
          DEFAULT: '#333'
        },
        muted: {
          DEFAULT: 'hsl(var(--text-muted), <alpha-value>)'
        },
        body: {
          DEFAULT: 'hsl(var(--text-base), <alpha-value>)'
        }
      }
    }
  }

};
