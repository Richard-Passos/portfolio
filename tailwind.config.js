const getColor = (cssVar) => `hsl(var(${cssVar}))`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.jsx',
    './src/components/**/*.jsx',
    './src/components/ui/variantColors.js',
    './src/views/**/*.jsx',
  ],
  theme: {
    extend: {
      spacing: {
        px: '0.8px',
        'font-blank-space': 'var(--font-blank-space)',
        '9/10': '90%',
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
      },
      colors: {
        main: getColor('--main'),
        active: getColor('--active'),
        content: getColor('--content'),
        inverted: {
          DEFAULT: getColor('--inverted'),
          active: getColor('--inverted-a'),
          content: getColor('--inverted-c'),
        },
        muted: {
          DEFAULT: getColor('--muted'),
          active: getColor('--muted-a'),
          content: getColor('--muted-c'),
        },
        primary: {
          DEFAULT: getColor('--primary'),
          active: getColor('--primary-a'),
          content: getColor('--primary-c'),
        },
        secondary: {
          DEFAULT: getColor('--secondary'),
          active: getColor('--secondary-a'),
          content: getColor('--secondary-c'),
        },
        accent: {
          DEFAULT: getColor('--accent'),
          active: getColor('--accent-a'),
          content: getColor('--accent-c'),
        },
        info: {
          DEFAULT: getColor('--info'),
          active: getColor('--info-a'),
          content: getColor('--info-c'),
        },
        success: {
          DEFAULT: getColor('--success'),
          active: getColor('--success-a'),
          content: getColor('--success-c'),
        },
        warning: {
          DEFAULT: getColor('--warning'),
          active: getColor('--warning-a'),
          content: getColor('--warning-c'),
        },
        danger: {
          DEFAULT: getColor('--danger'),
          active: getColor('--danger-a'),
          content: getColor('--danger-c'),
        },
        variant: {
          DEFAULT: getColor('--variant'),
          active: getColor('--variant-a'),
          content: getColor('--variant-c'),
        },
        border: getColor('--border'),
        current: 'currentColor',
      },
      borderColor: {
        DEFAULT: getColor('--border'),
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        inherit: 'inherit',
      },
      outlineColor: {
        DEFAULT: 'currentColor',
      },
      outlineOffset: {
        DEFAULT: '2',
      },
      outlineWidth: {
        DEFAULT: 2,
      },
      maxHeight: {
        bounds: 'var(--max-h)',
      },
      maxWidth: {
        bounds: 'var(--max-w)',
      },
      keyframes: {
        'slide-down': {
          from: { height: 0 },
          to: { height: 'var(--height, 0)' },
        },
        'slide-up': {
          from: { height: 'var(--height, 0)' },
          to: { height: 0 },
        },
        'infinity-scroll': {
          from: {
            transform:
              'translate(var(--initial-x, 0%), var(--initial-y, 0%)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
          to: {
            transform:
              'translate(var(--final-x, 0%), var(--final-y, 0%)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
        },
        'scroll-indicator': {
          to: {
            transform:
              'translate(var(--tw-translate-y), var(--final-y, 100%)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
        },
        'dots-loader': {
          '20%': { 'background-position': '0%   0%, 50%  50%, 100%  50%' },
          '40%': { 'background-position': '0% 100%, 50%   0%, 100%  50%' },
          '60%': { 'background-position': '0%  50%, 50% 100%, 100%   0%' },
          '80%': { 'background-position': '0%  50%, 50%  50%, 100% 100%' },
        },
      },
      animation: {
        'slide-down': 'slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slide-up': 'slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'infinity-scroll':
          'infinity-scroll var(--duration, 15s) linear infinite',
        'scroll-indicator':
          'scroll-indicator var(--duration, 2s) cubic-bezier(0.87, 0, 0.13, 1) infinite',
        'dots-loader': 'dots-loader var(--duration, 1.5s) infinite linear',
      },
      fontFamily: {
        app: 'var(--font-app)',
      },
      data: {
        active: 'state=active',
        checked: 'state=checked',
        closed: 'state=closed',
        disabled: 'disabled',
        open: 'state=open',
      },
      transitionProperty: {
        color: 'color',
        bg: 'background-color',
        border: 'border-color',
      },
      transitionTimingFunction: {
        backOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
