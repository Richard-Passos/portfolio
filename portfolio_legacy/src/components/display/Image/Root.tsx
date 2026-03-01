import { Image, ImageProps } from '@mantine/core';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { MergeProps } from '@/types';

type ImageRootProps = MergeProps<ImageProps, NextImageProps>;

const ImageRoot = ({ alt, ...props }: ImageRootProps) => {
  return (
    <Image
      component={NextImage}
      alt={alt}
      {...props}
    />
  );
};

export { ImageRoot };
export type { ImageRootProps };
