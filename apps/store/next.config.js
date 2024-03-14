//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const createNextIntlPlugin = require('next-intl/plugin');
/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        hostname: 'pickbazar-react-rest.vercel.app',
        pathname: '**',
      }, {
        hostname: 'picsum.photos',
        pathname: '**',
      },
    ],
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];
const withNextIntl = createNextIntlPlugin();

module.exports = composePlugins(...plugins)(withNextIntl(nextConfig));
