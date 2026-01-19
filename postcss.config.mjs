/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-sm': 'em(640px)',
        'mantine-breakpoint-md': 'em(768px)',
        'mantine-breakpoint-lg': 'em(1024px)',
        'mantine-breakpoint-xl': 'em(1280px)',
        'mantine-breakpoint-2xl': 'em(1536px)'
      }
    },
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};

export default config;
