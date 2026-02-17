import { ComponentProps } from 'react';

import { lineLeftScrollAnim } from '@/animations/scroll';
import { Title } from '@/components/atoms';
import ScrollAnimate from '@/components/atoms/ScrollAnimate';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type AboutBlockTextOrganismOwnProps = {
  data: {
    title: Node[];
    description: Node[];
  };
  titleProps?: Partial<TitleProps>;
  wrapperProps?: Partial<ComponentProps<'div'>>;
};

type AboutBlockTextOrganismProps = AboutBlockTextOrganismOwnProps &
  Omit<ComponentProps<'section'>, keyof AboutBlockTextOrganismOwnProps>;

const AboutBlockTextOrganism = ({
  data,
  titleProps,
  wrapperProps,
  ...props
}: AboutBlockTextOrganismProps) => {
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

export default AboutBlockTextOrganism;
export type { AboutBlockTextOrganismProps };
