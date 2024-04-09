import { extendTailwindMerge } from 'tailwind-merge';

const cn = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['font-blank-space', '9/10', 'xs', 'sm', 'md', 'lg'],
    },
  },
});

export default cn;
