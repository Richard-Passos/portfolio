import { Link } from '@/components/ui';
import { cn } from '@/utils';

const Root = (props) => {
  return (
    <Link
      href='/'
      {...props}
    >
      <div className='mr-1 flex w-3.5 items-center justify-center'>
        <Donut className='-translate-y-[70%] -rotate-90' />

        <Donut className='-translate-x-[70%] rotate-180' />

        <Donut className='translate-y-[70%] rotate-90' />

        <Donut className='translate-x-[70%]' />
      </div>

      <span>Richard</span>
    </Link>
  );
};

const Donut = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'absolute aspect-square w-1 rounded-full bg-[conic-gradient(currentColor_75%,transparent_75%)]',
        className,
      )}
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
