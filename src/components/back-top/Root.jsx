'use client';

import { ArrowUpIcon } from '@radix-ui/react-icons';

import { cn, isFunctionThanCall } from '@/utils';

import { IconButton } from '../button';

const BackTop = ({ className, ...props }) => {
  return (
    <IconButton
      className={cn('text-xs font-bold uppercase', className)}
      variants={{ color: 'inverted', style: 'transparent', size: 'sm' }}
      {...props}
      onClick={(ev) => {
        window.scrollTo(0, 0);

        isFunctionThanCall(props.onClick, ev);
      }}
    >
      <IconButton.Icon animation='slideUp'>
        <ArrowUpIcon />
      </IconButton.Icon>{' '}
      Back top
    </IconButton>
  );
};

export default BackTop;
