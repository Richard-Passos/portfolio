import { cn } from '@/utils';

const LINES_AMOUNT = 6;

const Lines = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'pointer-events-none fixed left-1/2 top-0 -z-50 flex h-screen w-screen -translate-x-1/2 justify-center gap-4 opacity-50 dark:opacity-25',
        className,
      )}
      {...props}
    >
      {[...Array(LINES_AMOUNT)].map((_, i) => (
        <span
          className='h-full w-full border-x'
          key={i}
        />
      ))}
    </div>
  );
};

export default Lines;
