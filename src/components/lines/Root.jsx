import { cn } from '@/utils';

const LINES_AMOUNT = 6;

const Lines = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'pointer-events-none fixed left-1/2 top-0 -z-50 flex h-screen w-screen -translate-x-1/2 justify-around opacity-40 transition-opacity dark:opacity-20',
        className,
      )}
      {...props}
    >
      {[...Array(LINES_AMOUNT)].map((_, i) => (
        <span
          className='h-full w-px bg-content opacity-10 transition-opacity dark:opacity-5'
          key={i}
        />
      ))}
    </div>
  );
};

export default Lines;
