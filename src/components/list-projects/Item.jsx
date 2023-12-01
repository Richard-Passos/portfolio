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
        className='group flex h-full w-full justify-around gap-x-6 py-12 no-underline'
        content={{
          type: 'text',
          text: 'View',
        }}
        href={href}
        onMouseEnter={(ev) => {
          setActiveIdx(index);

          isFunctionThanCall(props.onMouseEnter, ev);
        }}
        variant={{ scaleX: 0.75, scaleY: 0.75 }}
      >
        <span className='overflow-hidden overflow-ellipsis whitespace-nowrap text-[clamp(1.5rem,4.4vw,4rem)] uppercase leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:sm:-translate-x-6'>
          {title}
        </span>

        <span className='text-center text-[clamp(.75rem,1.3vw,1rem)] capitalize text-muted-content transition-transform duration-300 group-hover:-translate-x-1 group-hover:sm:translate-x-6'>
          {role}
        </span>
      </CursorLink>
    </li>
  );
};

export default ListProjectsItem;
