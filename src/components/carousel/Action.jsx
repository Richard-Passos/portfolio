import { cn } from '@/utils';

const CarouselAction = ({ type = 'next', className, children, ...props }) => {
  const types = {
    next: 'splide__arrow--next',
    prev: 'splide__arrow--prev',
  };

  return (
    <button
      className={cn(
        'splide__arrow group relative isolate flex aspect-square w-10 items-center justify-center overflow-hidden rounded-sm bg-muted transition-colors hover:text-primary-content disabled:pointer-events-none disabled:opacity-50',
        types[type],
        className,
      )}
      {...props}
    >
      {children}

      <div className='absolute inset-0 -z-10 translate-y-[101%] rounded-[50%_50%_0_0] transition-[transform,border-radius] duration-500 group-hover:translate-y-0 group-hover:rounded-[0]'>
        <span className='absolute inset-0 rounded-inherit bg-primary transition-bg' />
      </div>
    </button>
  );
};

export default CarouselAction;
