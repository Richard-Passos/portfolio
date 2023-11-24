'use client';

import { useContext } from 'react';

import { ListProjectsContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

import { CursorLink } from '../link';

const ListProjectsItem = ({
  className,
  href,
  index,
  title,
  role,
  ...props
}) => {
  const { setActiveIdx } = useContext(ListProjectsContext);

  return (
    <li
      className={cn(
        'relative w-full overflow-hidden border-t last:border-b focus-within:outline',
        className,
      )}
      {...props}
    >
      <CursorLink
        className='group flex h-full w-full justify-around py-12 no-underline'
        href={href}
        onMouseEnter={(ev) => {
          setActiveIdx(index);

          isFunctionThanCall(props.onMouseEnter, ev);
        }}
        variant={{ scaleX: 0.75, scaleY: 0.75 }}
      >
        <span className='text-6xl uppercase leading-none transition-transform duration-300 group-hover:-translate-x-6'>
          {title}
        </span>

        <span className='text-center capitalize text-muted-content transition-transform duration-300 group-hover:translate-x-6'>
          {role}
        </span>
      </CursorLink>
    </li>
  );
};

export default ListProjectsItem;
