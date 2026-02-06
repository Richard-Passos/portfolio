import { ReactNode } from 'react';

import { Action, ListHorizontalScroll } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import {
  ListHorizontalScrollItemProps,
  ListHorizontalScrollRootProps
} from '@/components/molecules/ListHorizontalScroll';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ListPageBlockOrganismOwnProps = {
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

type ListPageBlockOrganismProps = ListPageBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ListPageBlockOrganismOwnProps>;

const ListPageBlockOrganism = ({
  data,
  listProps,
  listItemProps,
  actionProps,
  ...props
}: ListPageBlockOrganismProps) => {
  return (
    <CleanLayoutBlock {...props}>
      <ListHorizontalScroll.Root {...listProps}>
        {data.items.map((item, i) => (
          <ListHorizontalScroll.Item
            speed={75 + 50 * i}
            direction={i % 2 === 0 ? 'right' : 'left'}
            key={item.id}
            {...listItemProps}
            className={cn(
              `text-2xl uppercase [--gap:--spacing(3)] sm:text-3xl`,
              listItemProps?.className
            )}
          >
            <span>{item.text}</span>

            <span>{item.separator}</span>

            <span className='opacity-30 dark:opacity-10'>{item.text}</span>

            <span className='opacity-30 max-sm:hidden dark:opacity-10'>
              {item.separator}
            </span>

            <span className='opacity-30 max-sm:hidden dark:opacity-10'>
              {item.text}
            </span>

            <span>{item.separator}</span>
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
    </CleanLayoutBlock>
  );
};

export default ListPageBlockOrganism;
export type { ListPageBlockOrganismProps };
