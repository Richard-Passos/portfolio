import { ComponentProps } from 'react';

import { Title } from '@/components/system/';
import { MergeProps } from '@/types';
import { Node, cn, serialize } from '@/utils';

type PrimaryLayoutHeaderProps = MergeProps<
  {
    title: Node[];
    description?: Node[];
  },
  ComponentProps<'header'>
>;

const PrimaryLayoutHeader = ({
  className,
  title,
  description,
  ...props
}: PrimaryLayoutHeaderProps) => {
  return (
    <header
      className={cn(
        'w-9by10 mb-8 flex max-w-7xl gap-8 max-md:flex-col md:items-end',
        className
      )}
      {...props}
    >
      <Title
        order={2}
        className='w-fit shrink-0 wrap-break-word uppercase'
      >
        {serialize(title, {
          alignText: {
            className:
              'w-fit data-[align=right]:ml-[min(5vw,--spacing(10))] data-[align=right]:py-2 data-[align=right]:px-3 data-[align=right]:border data-[align=right]:bg-red-filled dark:data-[align=right]:bg-red-4/10 dark:data-[align=right]:border-red-4/20 data-[align=right]:rounded data-[align=right]:-rotate-3'
          }
        })}
      </Title>

      {description && (
        <section className='max-w-md -translate-y-3.5'>
          {serialize(description, {
            paragraph: {
              className: 'text-sm text-dimmed *:text-text'
            }
          })}
        </section>
      )}
    </header>
  );
};

export { PrimaryLayoutHeader };
export type { PrimaryLayoutHeaderProps };
