import { ComponentProps } from 'react';

import { lineLeftScrollAnim } from '@/animations/scroll';
import { ScrollAnimate, Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type TextBlockOrganismOwnProps = {
  data: {
    title: Node[];
    description: Node[];
  };
  wrapperProps?: Partial<ComponentProps<'div'>>;
  titleProps?: Partial<TitleProps>;
};

type TextBlockOrganismProps = TextBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof TextBlockOrganismOwnProps | 'data'>;

const TextBlockOrganism = ({
  className,
  data,
  wrapperProps,
  titleProps,
  ...props
}: TextBlockOrganismProps) => {
  return (
    <CleanLayoutBlock
      className={cn('w-9by10 max-w-5xl pt-0', className)}
      {...props}
    >
      <Title
        order={3}
        {...titleProps}
        className={cn('mr-auto max-w-lg', titleProps?.className)}
      >
        {serialize(data.title)}
      </Title>

      <div
        {...wrapperProps}
        className={cn('mt-5 mr-auto flex gap-4', wrapperProps?.className)}
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
              className: 'leading-relaxed text-dimmed *:text-text'
            }
          })}
        </section>
      </div>
    </CleanLayoutBlock>
  );
};

export default TextBlockOrganism;
export type { TextBlockOrganismProps };
