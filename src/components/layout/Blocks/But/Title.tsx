import { cn } from '@/utils/cn';
import { MergeProps } from '@/types/MergeProps';
import { ComponentProps } from 'react';
import { Title, TitleProps } from '@/components/system/Title';

export type ButTitleProps = MergeProps<{ badgeProps?: ComponentProps<'div'> }, TitleProps>;

export const ButTitle = ({ badgeProps, className, ...props }: ButTitleProps) => {
  return (
    <div
      data-badge
      {...badgeProps}
      className={cn(
        'absolute overflow-hidden rounded-full border px-4 py-12',
        badgeProps?.className
      )}
    >
      <Title
        data-title
        styleAs='h1'
        className={cn('[writing-mode:vertical-rl]', className)}
        {...props}
      />
    </div>
  );
};
