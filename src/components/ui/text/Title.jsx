import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

const TextTitle = ({ asChild, variants, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'h2';

  return (
    <Tag
      className={cn(textTitleVariants(variants), className)}
      ref={ref}
      {...props}
    />
  );
};

const textTitleSizes = {
  md: 'text-xl font-semibold',
  lg: 'text-[10vw]/none font-bold uppercase tracking-tight sm:text-[min(8vw,theme(fontSize.8xl))]/none',
  xl: 'text-[12vw]/none font-extrabold uppercase tracking-tighter sm:text-[min(10vw,theme(fontSize.9xl))]/none',
};

const textTitleVariants = cnv({
  base: '',
  variants: {
    size: textTitleSizes,
  },
  defaultVariants: {
    size: 'md',
  },
});

export default forwardRef(TextTitle);
export { textTitleSizes, textTitleVariants };
