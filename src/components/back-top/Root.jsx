'use client';

import { ArrowUpIcon } from '@radix-ui/react-icons';
import Lenis from '@studio-freight/lenis';

import { cn, isFunctionThanCall } from '@/utils';

import { IconButton } from '../button';

const BackTop = ({ className, ...props }) => {
  return (
    <IconButton
      className={cn('text-xs font-bold uppercase', className)}
      variants={{ color: 'inverted', style: 'transparent', size: 'sm' }}
      {...props}
      onClick={(ev) => {
        const lenis = new Lenis();

        lenis.scrollTo(0);

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
