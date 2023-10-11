const getColor = (cssVar) => `hsl(var(${cssVar}))`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.jsx',
    './src/components/**/*.jsx',
    './src/patterns/**/*.jsx',
    './src/views/**/*.jsx',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      md: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['7rem', '1'],
    },
    extend: {
      colors: {
        base: getColor('--base'),
        content: getColor('--content'),
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
        warning: {
          DEFAULT: getColor('--warning'),
          content: getColor('--warning-c'),
        },
        danger: {
          DEFAULT: getColor('--danger'),
          content: getColor('--danger-c'),
        },
        current: 'currentColor',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        inherit: 'inherit',
      },
      transitionProperty: {
        color: 'color',
        bg: 'background-color',
      },
      spacing: {
        px: '.8px',
      },
      maxWidth: {
        bounds: 'var(--max-w)',
      },
      maxHeight: {
        bounds: 'var(--max-h)',
      },
      fontFamily: {
        app: 'var(--font-app)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      data: {
        closed: 'state=closed',
        open: 'state=open',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
