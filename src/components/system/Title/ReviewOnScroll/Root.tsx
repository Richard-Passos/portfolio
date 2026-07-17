import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import { Title, TitleProps } from '@/components/system/Title';
import { MergeProps } from '@/types/MergeProps';
import { ReviewTitleOnScrollClient, ReviewTitleOnScrollClientConfig } from './Client';

export type ReviewTitleOnScrollProps = MergeProps<
  Pick<ReviewTitleOnScrollClientConfig, 'type'> & Pick<TitleProps, 'as'>,
  ComponentProps<'div'>
>;

export const ReviewTitleOnScroll = ({
  type,
  as = 'h2',
  className,
  children,
  ...props
}: ReviewTitleOnScrollProps) => {
  return (
    <ReviewTitleOnScrollClient
      type='chars'
      target={as}
    >
      <div
        className={cn(
          'relative -z-10 min-h-[calc(var(--h)*1.75)] w-full overflow-x-clip will-change-transform [--h:min(100dvh,var(--max-height-bounds))] *:will-change-[color]',
          className
        )}
        {...props}
      >
        <div className='sticky top-0 mx-auto flex h-dvh w-full items-center'>
          <Title
            as={as}
            className='w-max px-[5%] text-[clamp(8rem,20vw,22rem)]/none font-black text-nowrap'
          >
            {children}
          </Title>
        </div>
      </div>
    </ReviewTitleOnScrollClient>
  );
};
