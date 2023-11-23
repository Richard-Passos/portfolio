/* eslint-disable jsx-a11y/alt-text */
import { cn } from '@/utils';

import { CursorLink } from '../link';
import { FollowPointer, Image } from '../ui';
import { CursorArea } from '../ui/cursor';

const ListProjectsItem = ({
  index,
  className,
  href,
  title,
  role,
  img,
  ...props
}) => {
  const followPointerId = `follow-pointer-selected-projects-img-${index}`;

  return (
    <FollowPointer.Area id={followPointerId}>
      <CursorArea>
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
          >
            <span className='text-6xl uppercase leading-none transition-transform group-hover:-translate-x-6'>
              {title}
            </span>

            <span className='text-center capitalize text-muted-content transition-transform group-hover:translate-x-6'>
              {role}
            </span>
          </CursorLink>

          <FollowPointer
            className='z-40 h-60 w-96 overflow-hidden rounded-md'
            id={followPointerId}
          >
            <div>
              <Image {...img} />
            </div>
          </FollowPointer>
        </li>
      </CursorArea>
    </FollowPointer.Area>
  );
};

export default ListProjectsItem;
