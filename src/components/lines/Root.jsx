import { cn } from '@/utils';

const LINES_AMOUNT = 7;

const Lines = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'pointer-events-none fixed left-1/2 top-0 -z-50 flex h-screen w-screen -translate-x-1/2 justify-around opacity-40 dark:opacity-10',
        className,
      )}
      {...props}
    >
      {[...Array(LINES_AMOUNT)].map((_, i) => (
        <span
          className='h-full w-px bg-border'
          key={i}
        />
      ))}
    </div>
  );
};

export default Lines;
