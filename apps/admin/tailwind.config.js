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
      }
    }
  }
};
