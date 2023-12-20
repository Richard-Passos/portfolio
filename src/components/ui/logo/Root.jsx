import { Link } from '@/components/ui';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        'gap-2 text-xl font-semibold uppercase no-underline',
        className,
      )}
      href='/'
      {...props}
    >
      R <span className='h-[.1em] w-[1.5em] bg-current transition-bg' /> P
    </Link>
  );
};

export default Root;
