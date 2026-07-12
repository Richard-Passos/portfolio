import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { cn } from '@/utils/cn';

export type ImageProps = NextImageProps;

export const Image = ({ className, ...props }: ImageProps) => {
  return (
    <NextImage
      className={cn('border-none', className)}
      {...props}
    />
  );
};
