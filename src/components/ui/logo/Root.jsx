import { Link } from '@/components/ui';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        'group relative flex items-center justify-center text-xl font-bold hover:no-underline',
        className,
      )}
      href='/'
      {...props}
    >
      <span className='absolute z-10'>Rp</span>

      <div className='relative flex aspect-square w-[2.4em] items-center justify-center opacity-50'>
        <Donut className='-translate-y-[70%] rotate-180 opacity-40 [--idx:0]' />

        <Donut className='translate-x-[70%] -rotate-90 opacity-30 [--idx:1]' />

        <Donut className='translate-y-[70%] opacity-20 [--idx:2]' />

        <Donut className='-translate-x-[70%] rotate-90 opacity-10 [--idx:3]' />
      </div>
    </Link>
  );
};

const Donut = ({ className, style, ...props }) => {
  return (
    <div
      className={cn(
        'absolute aspect-square w-[1em] rounded-full bg-[conic-gradient(currentColor_75%,transparent_75%)] transition-opacity [--delay:calc(theme(transitionDuration.DEFAULT)*var(--idx))] group-hover:opacity-100',
        className,
      )}
      style={{ transitionDuration: 'var(--delay)', ...style }}
      {...props}
    >
      <span
        aria-label='Inner'
        className='absolute inset-[30%] w-auto rounded-inherit bg-main transition-colors'
      />
    </div>
  );
};

export default Root;
