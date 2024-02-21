import { Link } from '@/components/ui';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        'h-10 -translate-x-2 gap-2 rounded-sm px-2 text-2xl font-bold uppercase no-underline',
        className,
      )}
      href='/'
      {...props}
    >
      R <span className='h-[.1em] w-[1em] bg-current transition-bg' /> P
    </Link>
  );
};

export default Root;
