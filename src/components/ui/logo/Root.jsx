import { Link } from '@/components/ui';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        'gap-2 text-2xl font-bold uppercase no-underline',
        className,
      )}
      href='/'
      {...props}
    >
      R <span className='h-[.1em] w-[1.2em] bg-current transition-bg' /> P
    </Link>
  );
};

export default Root;
