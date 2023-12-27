import { cn, cnv } from '@/utils';

import { Button } from '../../ui';

const IconButton = ({ variants = {}, className, ...props }) => {
  return (
    <Button
      className={cn(iconButtonVariants(variants), className)}
      variants={{ color: variants.color, size: variants.size }}
      {...props}
    />
  );
};

const iconButtonStyles = {
    solid: 'hover:bg-variant [--svg-color:hsl(var(--variant))]',
    transparent:
      'bg-transparent hover:bg-transparent text-variant [--svg-color:hsl(var(--variant-c))]',
  },
  iconButtonSizes = {
    sm: 'gap-x-4',
    md: 'gap-x-6',
    lg: 'gap-x-8',
  };

const iconButtonVariants = cnv({
  base: 'group',
  variants: {
    style: iconButtonStyles,
    size: iconButtonSizes,
  },
  defaultVariants: {
    style: 'solid',
    size: 'md',
  },
});

export default IconButton;
export { iconButtonSizes, iconButtonStyles, iconButtonVariants };
