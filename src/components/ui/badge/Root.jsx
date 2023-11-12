import { Slot } from '@radix-ui/react-slot';

import { cn, cnv } from '@/utils';

import variantColors from '../variantColors';

const Badge = ({ asChild, variants, className, ...props }) => {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      aria-label='Badge'
      className={cn(badgeVariants(variants), className)}
      {...props}
    />
  );
};

const badgeStyles = {
  solid: 'bg-main text-content',
  outline: 'border-main text-main',
  ghost: 'bg-main/20 text-main',
};

const badgeVariants = cnv({
  base: 'inline-flex items-center rounded-full border border-transparent px-2.5 py-1 text-xs font-semibold',
  variants: {
    color: variantColors,
    style: badgeStyles,
  },
  defaultVariants: {
    color: 'primary',
    style: 'solid',
  },
});

export default Badge;
export { badgeStyles, badgeVariants };
