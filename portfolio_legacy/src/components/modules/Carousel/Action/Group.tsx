import { ComponentProps } from 'react';

import { cn } from '@/utils';

type CarouselActionGroupProps = ComponentProps<'section'>;

const CarouselActionGroup = ({
  className,
  ...props
}: CarouselActionGroupProps) => {
  return (
    <section
      className={cn('splide__arrows flex items-center gap-2.5', className)}
      {...props}
    />
  );
};

export { CarouselActionGroup };
export type { CarouselActionGroupProps };
