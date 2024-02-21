import { cn } from '@/utils';

import Button from '../../button';

const CarouselAction = ({ type = 'next', className, variants, ...props }) => {
  const types = {
    next: 'splide__arrow--next',
    prev: 'splide__arrow--prev',
  };

  return (
    <Button
      className={cn(
        'splide__arrow aspect-square rounded-sm bg-muted px-0 text-content [--variant-a:--primary] hover:text-primary-content',
        types[type],
        className,
      )}
      variants={{ size: 'sm', ...variants }}
      {...props}
    />
  );
};

export default CarouselAction;
