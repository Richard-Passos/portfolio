import { Slot } from '@radix-ui/react-slot';

import { cn, cnv } from '@/utils';

import variantColors from '../variantColors';

const Badge = ({ asChild, variants, className, ...props }) => {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      className={cn(badgeVariants(variants), className)}
      {...props}
    />
  );
};

const badgeStyles = {
  solid: 'bg-variant text-variant-content',
  outline: 'border-variant text-variant',
  ghost: 'bg-variant/20 text-variant',
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
