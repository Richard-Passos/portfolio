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
      },
      colors: {
        main: getColor('--main'),
        content: getColor('--content'),
        inverted: {
          DEFAULT: getColor('--inverted'),
          content: getColor('--inverted-c'),
        },
        muted: {
          DEFAULT: getColor('--muted'),
          content: getColor('--muted-c'),
        },
        primary: {
          DEFAULT: getColor('--primary'),
          content: getColor('--primary-c'),
        },
        secondary: {
          DEFAULT: getColor('--secondary'),
          content: getColor('--secondary-c'),
        },
        accent: {
          DEFAULT: getColor('--accent'),
          content: getColor('--accent-c'),
        },
        info: {
          DEFAULT: getColor('--info'),
          content: getColor('--info-c'),
        },
        success: {
          DEFAULT: getColor('--success'),
          content: getColor('--success-c'),
        },
        warning: {
          DEFAULT: getColor('--warning'),
          content: getColor('--warning-c'),
        },
        danger: {
          DEFAULT: getColor('--danger'),
          content: getColor('--danger-c'),
        },
        border: 'hsl(var(--muted-c)/.2)',
        current: 'currentColor',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--muted-c)/.2)',
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
        'scroll-x': {
          from: {
            transform:
              'translate(var(--initial-x, 0%), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
          to: {
            transform:
              'translate(var(--final-x, -50%), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          },
        },
      },
      animation: {
        'slide-down': 'slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'slide-up': 'slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'scroll-x': 'scroll-x var(--duration, 15s) linear infinite',
      },
      fontFamily: {
        app: 'var(--font-app)',
      },
      data: {
        checked: 'state=checked',
        closed: 'state=closed',
        open: 'state=open',
        disabled: 'disabled',
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
