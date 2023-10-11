import { cn } from '@/utils';

const LINES_NUM = 6;

const Lines = ({ className, ...props }) => {
  return (
    <div
      aria-label='Lines'
      className={cn('fixed inset-0 flex justify-around', className)}
      {...props}
    >
      {[...Array(LINES_NUM)].map((_, i) => (
        <span
          aria-label='Line'
          className='h-full w-px bg-content/5 dark:bg-content/[.025]'
          key={`Lines line ${i}`}
        />
      ))}
    </div>
  );
};

export default Lines;
