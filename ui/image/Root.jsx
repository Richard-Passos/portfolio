import Image from 'next/image';

import { cn } from '@/utils';

const Root = ({ alt, src, className, ...props }) => {
  const placeholderProps = {
    ...props,
    src: '/images/placeholder.png',
    alt: 'A black and white image with the word image on it.',
    width: 556,
    height: 350,
  };

  props = src
    ? {
        src,
        alt: alt || 'Missing alt property.',
        ...props,
      }
    : placeholderProps;

  return (
    <Image
      className={cn('h-full w-full', className)}
      {...props}
    />
  );
};

export default Root;
