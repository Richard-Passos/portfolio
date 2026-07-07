import { extendTailwindMerge } from 'tailwind-merge';

export const cn = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['9by10', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'bounds'],
      radius: ['inherit']
    }
  }
});
