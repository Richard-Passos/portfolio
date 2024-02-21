import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils';

const CarouselAction = ({ asChild, type = 'next', className, ...props }) => {
  const Tag = asChild ? Slot : 'button';

  const types = {
    next: 'splide__arrow--next',
    prev: 'splide__arrow--prev',
  };

  return (
    <Tag
      className={cn('splide__arrow', types[type], className)}
      {...props}
    />
  );
};

export default CarouselAction;
