'use client';

import { Image } from '@radix-ui/react-avatar';
import NextImage from 'next/image';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const AvatarImage = ({ asChild, className, children, ...props }, ref) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      asChild
      className={cn('aspect-square h-full w-full', className)}
      ref={ref}
      {...props}
    >
      {asChild ? children : <NextImage />}
    </Image>
  );
};

export default forwardRef(AvatarImage);
