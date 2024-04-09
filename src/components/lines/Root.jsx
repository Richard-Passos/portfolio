import { cn } from '@/utils';

const LINES_AMOUNT = 6;

const Lines = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-y-0 left-1/2 -z-40 flex w-screen -translate-x-1/2 justify-center gap-4 opacity-60 dark:opacity-20',
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
