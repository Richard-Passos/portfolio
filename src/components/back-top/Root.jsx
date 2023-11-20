'use client';

import { ChevronUpIcon } from '@radix-ui/react-icons';

import { cn, isFunctionThanCall } from '@/utils';

const BackTop = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        'group flex items-center gap-6 text-xs font-bold uppercase',
        className,
      )}
      {...props}
      onClick={(ev) => {
        window.scrollTo(0, 0);

        isFunctionThanCall(props.onClick, ev);
      }}
    >
      <span className='rounded-full bg-content p-1.5 text-main transition-transform group-hover:-translate-y-1/4'>
        <ChevronUpIcon className='h-3.5 w-3.5' />
      </span>{' '}
      Back top
    </button>
  );
};

export default BackTop;
