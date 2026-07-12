import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { ImageClient } from './Client';
import { MergeProps } from '@/types/MergeProps';
import { Colors } from '@/types/Colors';

export type ImageReviewProps = MergeProps<{ color?: Colors }, ComponentProps<'div'>>;

export const ImageReview = ({
  color = 'primary',
  className,
  children,
  style,
  ...props
}: ImageReviewProps) => {
  return (
    <ImageClient>
      <div
        className={cn('relative overflow-hidden *:will-change-transform', className)}
        style={{
          clipPath: 'inset(1px)', // Remove image border on not found
          ...style
        }}
        {...props}
      >
        {children}

        <span
          data-front
          className='absolute inset-0 translate-y-full'
          style={{ backgroundColor: `hsl(var(--${color}))` }}
        />
      </div>
    </ImageClient>
  );
};
