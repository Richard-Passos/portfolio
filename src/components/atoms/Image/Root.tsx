import { Image, ImageProps } from '@mantine/core';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { ForwardedRef } from 'react';

type ImageAtomOwnProps = {
  ref?: ForwardedRef<HTMLImageElement>;
};

type ImageAtomProps = ImageAtomOwnProps &
  Omit<ImageProps & NextImageProps, keyof ImageAtomOwnProps>;

const ImageAtom = (props: ImageAtomProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      component={NextImage}
      {...props}
    />
  );
};

export default ImageAtom;
export type { ImageAtomProps };
