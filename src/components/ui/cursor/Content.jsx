'use client';

import { useSelector } from 'react-redux';

import { cn } from '@/utils';

import Icon from '../icon';
import Cursor from './Root';

const CURSOR_CONTENT_ID = 'fp-cursor-content';

const CursorContent = ({ className, smoothConfig, ...props }) => {
  const { content } = useSelector((data) => data.cursor);

  return (
    <Cursor
      aria-label='Custom cursor content'
      className={cn('z-[100] !bg-transparent', className)}
      id={CURSOR_CONTENT_ID}
      smoothConfig={{ stiffness: 150, ...smoothConfig }}
      {...props}
    >
      {getContent(content)}
    </Cursor>
  );
};

const getContent = (content = {}) => {
  const contents = {
    icon: (
      <Icon
        {...content}
        className={cn('h-1/3 w-1/3', content.className)}
      />
    ),
    text: (
      <span
        {...content}
        className={cn(
          'p-1 text-center font-semibold leading-none',
          content.className,
        )}
      >
        {content.text}
      </span>
    ),
  };

  content = contents[content.type?.toLowerCase()];

  return content;
};

export default CursorContent;
export { CURSOR_CONTENT_ID };
