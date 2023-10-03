import NextImage from 'next/image';

import { cn } from '@/utils';

const Image = ({ alt, src, className, ...props }) => {
  const placeholderProps = {
    ...props,
    src: '/images/placeholder.png',
    alt: 'A black and white image with the word image on it.',
    width: 556,
    height: 350,
  };
s
  props = src
    ? {
        src,
        alt: alt || 'Missing alt property.',
        ...props,
      }
    : placeholderProps;

  return (
    <NextImage
      className={cn('h-full w-full', clasName)}
      {...props}
    />
  );
};

export default Image;
