'use client'

import { Slot } from '@radix-ui/react-slot';
import { Link as NavLink } from '@/navigation';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Link = ({ asChild, className, isExternal, ...props }, ref) => {
  const Tag = asChild ? Slot : NavLink,
    externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <Tag
      className={cn(
        'inline-flex cursor-pointer items-center justify-center font-semibold underline decoration-transparent underline-offset-0 transition-[color,background-color,border-color,text-decoration-color,text-underline-offset] hover:decoration-current hover:underline-offset-4',
        className,
      )}
      ref={ref}
      {...(isExternal && externalLinkProps)}
      {...props}
      href={props.href ?? ''}
    />
  );
};

export default forwardRef(Link);
