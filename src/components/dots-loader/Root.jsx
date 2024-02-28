import { cn } from '@/utils';

const DotsLoader = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        'aspect-[2] w-[1.25em] animate-dots-loader ![background-size:33.333%_50%] [--dot:no-repeat_radial-gradient(circle_closest-side,currentColor_90%,transparent)] [background:var(--dot)_0%_50%,var(--dot)_50%_50%,var(--dot)_100%_50%]',
        className,
      )}
      {...props}
    />
  );
};

export default DotsLoader;
