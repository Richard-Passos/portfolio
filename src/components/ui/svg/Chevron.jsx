import { cn } from '@/utils';

const Chevron = ({ className, ...props }) => {
  return (
    <svg
      className={cn('w-6 fill-current', className)}
      data-name='Chevron'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M9 20a1 1 0 0 1-.707-1.707L14.586 12 8.293 5.707a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 9 20Z' />
    </svg>
  );
};

export default Chevron;
