import { cn } from '@/utils';

const CarouselActions = ({ className, ...props }) => {
  return (
    <section
      className={cn('splide__arrows flex items-center gap-3.5', className)}
      {...props}
    />
  );
};

export default CarouselActions;
