import { ComponentProps } from 'react';

import { Title } from '@/components/atoms';
import ScrollAnimate from '@/components/motion/ScrollAnimate';
import { lineLeftScrollAnim } from '@/components/motion/ScrollAnimate/animations/scroll';
import { TitleProps } from '@/components/system/Title';
import { MergeProps } from '@/types';
import { cn } from '@/utils';
import { Node, serialize } from '@/utils/serialize';

type AboutBlockTextOwnProps = {
  data: {
    title: Node[];
    description: Node[];
  };
  titleProps?: Partial<TitleProps>;
  wrapperProps?: Partial<ComponentProps<'div'>>;
};

type AboutBlockTextProps = MergeProps<
  AboutBlockTextOwnProps,
  ComponentProps<'section'>
>;

const AboutBlockText = ({
  data,
  titleProps,
  wrapperProps,
  ...props
}: AboutBlockTextProps) => {
  return (
    <section {...props}>
      <Title
        component='h3'
        order={5}
        {...titleProps}
        className={cn('max-w-lg', titleProps?.className)}
      >
        {serialize(data.title)}
      </Title>

      <div
        {...wrapperProps}
        className={cn(
          `mt-4 flex items-start gap-4 sm:ml-[5%]`,
          wrapperProps?.className
        )}
      >
        <span className='relative mt-2.5 h-2 w-12 shrink-0'>
          <ScrollAnimate
            config={lineLeftScrollAnim}
            layout
          >
            <span className='bg-body absolute inset-0 border' />
          </ScrollAnimate>
        </span>

        <section className='flex max-w-md flex-col gap-4'>
          {serialize(data.description, {
            paragraph: {
              className: 'text-sm leading-relaxed text-dimmed *:text-text'
            }
          })}
        </section>
      </div>
    </section>
  );
};

export { AboutBlockText };
export type { AboutBlockTextProps };
