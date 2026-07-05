import { ComponentProps } from 'react';

import { cn } from '@/utils';

type QuestionIconRootProps = ComponentProps<'svg'>;

const QuestionIconRoot = ({ className, ...props }: QuestionIconRootProps) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Question'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm.02 15.5a1 1 0 0 1-.01-2h.01a1 1 0 0 1 0 2Zm1.58-4.972c-.732.491-.868.764-.892.836a.752.752 0 0 1-.711.511.733.733 0 0 1-.238-.039.75.75 0 0 1-.473-.95 3.42 3.42 0 0 1 1.478-1.6 1.554 1.554 0 0 0 .846-1.68 1.668 1.668 0 0 0-1.31-1.329 1.618 1.618 0 0 0-1.349.354 1.666 1.666 0 0 0-.6 1.28.75.75 0 0 1-1.5 0 3.14 3.14 0 0 1 6.233-.565 3.079 3.079 0 0 1-1.484 3.182Z' />
    </svg>
  );
};

export { QuestionIconRoot };
export type { QuestionIconRootProps };
