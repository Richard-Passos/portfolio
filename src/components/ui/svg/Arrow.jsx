import { cn } from '@/utils';

const Arrow = ({ className, ...props }) => {
  return (
    <svg
      className={cn(
        'w-8 stroke-current [strokeLinecap:_round] [strokeLinejoin:_round] [strokeWidth:_2]',
        className,
      )}
      data-svg='Arrow'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M6 12H18M18 12L13 7M18 12L13 17' />
    </svg>
  );
};

export default Arrow;
