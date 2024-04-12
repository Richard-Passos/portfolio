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

const getContent = ({ type = '', className, ...data }) => {
  const contents = {
    icon: (
      <Icon
        className={cn('size-1/3', className)}
        {...data}
      />
    ),
    text: (
      <span
        className={cn('p-1 text-center font-semibold leading-none', className)}
        {...data}
      >
        {data.text}
      </span>
    ),
  };

  const content = contents[type.toLowerCase()];

  return content;
};

export default CursorContent;
export { CURSOR_CONTENT_ID };
