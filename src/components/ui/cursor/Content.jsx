'use client';

import { useSelector } from 'react-redux';

import { cn } from '@/utils';

import Icon from '../icon';

const CursorContent = () => {
  const { content } = useSelector((data) => data.cursor);

  return getContent(content);
};

const getContent = (content = {}) => {
  const contents = {
    icon: (
      <Icon
        {...content}
        className={cn('h-[40%] w-[40%]', content.className)}
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
