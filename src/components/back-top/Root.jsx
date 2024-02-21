'use client';

import { useLenis } from '@studio-freight/react-lenis';

import { cn, isFunctionThanCall } from '@/utils';

import Button from '../button';
import { ArrowUpIcon } from '../ui/icon/icons';

const BackTop = ({ className, ...props }) => {
  const lenis = useLenis();

  return (
    <Button
      asLink
      className={cn('text-xs font-bold uppercase', className)}
      href='#start'
      onClick={(ev) => {
        lenis.scrollTo('start', {
          duration: 2,
          easing: (x) =>
            x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2, // easeInOutQuart
        });

        isFunctionThanCall(props.onClick, ev);
      }}
      variants={{ color: 'main', size: 'sm' }}
      {...props}
    >
      <Button.Icon animation='slideUp'>
        <ArrowUpIcon />
      </Button.Icon>
      Back top
    </Button>
  );
};

export default BackTop;
