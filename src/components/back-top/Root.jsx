'use client';

import { ArrowUpIcon } from '@radix-ui/react-icons';
import { useLenis } from '@studio-freight/react-lenis';

import { cn, isFunctionThanCall } from '@/utils';

import { IconButton } from '../button';
import { Link } from '../ui';

const BackTop = ({ className, ...props }) => {
  const lenis = useLenis();

  return (
    <IconButton
      asChild
      className={cn('text-xs font-bold uppercase', className)}
      variants={{ color: 'inverted', style: 'transparent', size: 'sm' }}
      {...props}
    >
      <Link
        className='no-underline'
        href='#start'
        onClick={(ev) => {
          lenis.scrollTo('start');

          isFunctionThanCall(props.onClick, ev);
        }}
      >
        <IconButton.Icon animation='slideUp'>
          <ArrowUpIcon />
        </IconButton.Icon>{' '}
        Back top
      </Link>
    </IconButton>
  );
};

export default BackTop;
