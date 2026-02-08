import { ReactNode } from 'react';

import CleanLayouts, { CleanLayoutsProps } from '@/components/Layouts/Clean';
import { Action, ListHorizontalScroll } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import {
  ListHorizontalScrollItemProps,
  ListHorizontalScrollRootProps
} from '@/components/molecules/ListHorizontalScroll';
import { cn } from '@/utils';

type ListPageBlockTemplateOwnProps = {
  data: {
    items: { id: string; text: ReactNode; separator: ReactNode }[];
    action: {
      href: string;
      label: string;
    };
  };
  listProps?: Partial<ListHorizontalScrollRootProps>;
  listItemProps?: Partial<ListHorizontalScrollItemProps>;
  actionProps?: Partial<ActionProps>;
};

type ListPageBlockTemplateProps = ListPageBlockTemplateOwnProps &
  Omit<CleanLayoutsProps, keyof ListPageBlockTemplateOwnProps>;

const ListPageBlockTemplate = ({
  data,
  listProps,
  listItemProps,
  actionProps,
  ...props
}: ListPageBlockTemplateProps) => {
  return (
    <CleanLayouts {...props}>
      <ListHorizontalScroll.Root {...listProps}>
        {data.items.map((item, i) => (
          <ListHorizontalScroll.Item
            speed={100 + i * 10}
            direction={i % 2 === 0 ? 'ltr' : 'rtl'}
            key={item.id}
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

export default ListPageBlockTemplate;
export type { ListPageBlockTemplateProps };
