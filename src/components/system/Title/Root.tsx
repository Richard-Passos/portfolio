import { ark } from '@ark-ui/react/factory';
import { cva } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { MergeProps } from '@/types/MergeProps';

export type TitleProps = MergeProps<
  { as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' },
  ComponentProps<typeof ark.h2>
>;

export const titleVariants = cva('', {
  variants: {
    as: {
      h1: 'text-[clamp(3rem,0.6786rem+5.8036vw,6rem)] leading-[1.1] font-extrabold',
      h2: 'text-[clamp(3rem,1rem+6.25vw,4rem)] leading-none',
      h3: 'text-[clamp(2.25rem,1.7143rem+1.3393vw,3rem)] leading-[1.2]',
      h4: 'text-[clamp(2rem,1.6429rem+0.8929vw,2.5rem)] leading-[1.3]',
      h5: 'text-[clamp(1.25rem,1.0714rem+0.4464vw,1.5rem)] leading-[1.4]',
      h6: 'text-[clamp(0.75rem,0.6607rem+0.2232vw,0.875rem)] leading-normal'
    } satisfies Record<TitleProps['as'], string>
  },
});

export const Title = ({ as, className, ...props }: TitleProps) => {
  const Comp = ark[as];

  return (
    <Comp
      className={titleVariants({ as, className })}
      {...props}
    />
  );
};
