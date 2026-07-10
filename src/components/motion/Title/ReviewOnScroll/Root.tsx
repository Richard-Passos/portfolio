import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { ReviewTitleOnScrollClient } from './Client';

export type ReviewTitleOnScrollProps = MergeProps<Pick<TitleProps, 'as'>, ComponentProps<'div'>>;

export const ReviewTitleOnScroll = ({
  as = 'h2',
  className,
  children,
  ...props
}: ReviewTitleOnScrollProps) => {
  return (
    <ReviewTitleOnScrollClient target={as}>
      <div
        className={cn(
          'relative -z-10 min-h-[min(175dvh,calc(var(--max-height-bounds)*1.75))] w-full overflow-x-clip will-change-transform *:will-change-[color]',
          className
        )}
        {...props}
      >
        <div className='sticky top-0 mx-auto flex h-dvh w-full items-center'>
          <Title
            as={as}
            className='w-max px-[5%] text-[clamp(8rem,20vw,22rem)]/0 font-semibold text-nowrap text-muted'
          >
            {children}
          </Title>
        </div>
      </div>
    </ReviewTitleOnScrollClient>
  );
};
