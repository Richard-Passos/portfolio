import NextImage from 'next/image';
import { forwardRef } from 'react';

const Image = ({ src, alt, ...props }, ref) => {
  const placeholderProps = {
    src: '/images/placeholder.png',
    alt: 'A black and white image with the word image on it.',
    ...(!props.fill && { width: 556, height: 350 }),
  };

  return (
    <NextImage
      ref={ref}
      {...(src
        ? {
            src,
            alt: alt || 'Missing alt property.',
          }
        : placeholderProps)}
      {...props}
    />
  );
};

export default forwardRef(Image);
