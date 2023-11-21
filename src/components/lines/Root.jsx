import { cn } from '@/utils';

const LINES_AMOUNT = 6;

const Lines = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'pointer-events-none fixed left-1/2 top-0 -z-50 flex h-screen w-screen -translate-x-1/2 justify-around',
        className,
      )}
      {...props}
    >
      {[...Array(LINES_AMOUNT)].map((_, i) => (
        <div
          className='relative h-full w-full overflow-hidden'
          key={i}
        >
          <div
            className={cn(
              '[.dark_&]:animate-slide-dark [.light_&]:animate-slide-light absolute right-0 flex h-full w-[200%] gap-px',
            )}
          >
            <span className='[.dark_&]:light dark h-full w-1/2 bg-main delay-150' />
            <span className='light [.dark_&]:dark h-full w-1/2 bg-main delay-150' />
          </div>

          <span className='absolute inset-0 w-auto border-l opacity-20 transition-opacity dark:opacity-10' />
        </div>
      ))}
    </div>
  );
};

export default Lines;
