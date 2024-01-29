import { cn } from '@/utils';

const MenuIcon = ({ className, ...props }) => {
  return (
    <svg
      className={cn('h-8 w-8 fill-current', className)}
      data-svg='Menu'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm19 5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0 6H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z' />
    </svg>
  );
};

export default MenuIcon;
