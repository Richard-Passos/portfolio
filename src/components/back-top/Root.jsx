'use client';

import { useLenis } from '@studio-freight/react-lenis';

import { cn, isFunctionThanCall } from '@/utils';

import { IconButton } from '../button';
import { Link } from '../ui';
import { ArrowUpIcon } from '../ui/icon/icons';

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
          lenis.scrollTo('start', {
            duration: 2,
            easing: (x) =>
              x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2, // easeInOutQuart
          });

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
