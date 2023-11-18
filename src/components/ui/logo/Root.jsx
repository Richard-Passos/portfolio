import { Link } from '@/components/ui';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        'gap-0 text-3xl font-bold uppercase leading-none -tracking-widest no-underline',
        className,
      )}
      href='/'
      {...props}
    >
      <span className='flex items-end tracking-normal'>
        R{''}
        <span className='text-xs lowercase'>
          {['ich', 'ard'].map((letters, i) => (
            <span
              className={cn(
                'flex gap-font-blank-space first:translate-y-[40%]',
              )}
              key={i}
            >
              {letters}
            </span>
          ))}
        </span>
      </span>{' '}
      P.
    </Link>
  );
};

export default Root;
