import { Link } from '@/components/ui';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        'flex-col items-start text-xl font-semibold uppercase leading-none no-underline',
        className,
      )}
      href='/'
      {...props}
    >
      <span className='flex items-center gap-2'>
        Richard <span className='h-px w-[1.125em] bg-current transition-bg' />
      </span>

      <span className='ml-auto'>
        <span className='ml-[.75em]'>Passos</span>
      </span>
    </Link>
  );
};

export default Root;
