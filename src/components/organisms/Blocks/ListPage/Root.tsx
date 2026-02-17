import { ReactNode } from 'react';

import { Action, ListHorizontalScroll } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import {
  ListHorizontalScrollItemProps,
  ListHorizontalScrollRootProps
} from '@/components/molecules/ListHorizontalScroll';
import CleanLayouts, {
  CleanLayoutsProps
} from '@/components/organisms/Layouts/Clean';
import { cn, entries } from '@/utils';

type ListPageBlockOwnProps = {
  data: {
    items: Record<string, { text: ReactNode; separator: ReactNode }>;
    action: {
      href: string;
      label: string;
    };
  };
  listProps?: Partial<ListHorizontalScrollRootProps>;
  listItemProps?: Partial<ListHorizontalScrollItemProps>;
  actionProps?: Partial<ActionProps>;
};

type ListPageBlockProps = ListPageBlockOwnProps &
  Omit<CleanLayoutsProps, keyof ListPageBlockOwnProps>;

const ListPageBlock = ({
  data,
  listProps,
  listItemProps,
  actionProps,
  ...props
}: ListPageBlockProps) => {
  return (
    <CleanLayouts {...props}>
      <ListHorizontalScroll.Root {...listProps}>
        {entries(data.items).map(([key, item], i) => (
          <ListHorizontalScroll.Item
            speed={100 + i * 10}
            direction={i % 2 === 0 ? 'ltr' : 'rtl'}
            key={key}
            {...listItemProps}
            className={cn(
              `text-2xl uppercase sm:text-3xl`,
              listItemProps?.className
            )}
          >
            <span className='mx-1.5'>{item.text}</span>

            <span className='mx-1.5'>{item.separator}</span>

            <span className='mx-1.5 opacity-30 dark:opacity-10'>
              {item.text}
            </span>

            <span className='mx-1.5 opacity-30 max-sm:hidden dark:opacity-10'>
              {item.separator}
            </span>

            <span className='mx-1.5 opacity-30 max-sm:hidden dark:opacity-10'>
              {item.text}
            </span>

            <span className='mx-1.5'>{item.separator}</span>
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll.Root>

      <Action
        as='link'
        href={data.action.href}
        size='md'
        variant='default'
        {...actionProps}
        className={cn('mt-8', actionProps?.className)}
      >
        {data.action.label}
      </Action>
    </CleanLayouts>
  );
};

export default ListPageBlock;
export type { ListPageBlockProps };
