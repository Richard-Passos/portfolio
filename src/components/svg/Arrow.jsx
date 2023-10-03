import { cn } from '@/utils';

const Arrow = ({ className, ...props }) => {
  return (
    <svg
      className={cn('h-3 w-10 stroke-current', className)}
      data-name='Arrow'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z' />
    </svg>
  );
};

export default Arrow;
