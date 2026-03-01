import { ComponentProps, ReactNode } from 'react';

import { ScrollAnimate } from '@/components/motion';
import { lineLeft } from '@/components/motion/ScrollAnimate/animations';
import { Title } from '@/components/system';
import { MergeProps } from '@/types';
import { cn } from '@/utils';
import { Node, serialize } from '@/utils/serialize';

import { Section, SectionProps } from '../Section';

type SecondaryLayoutProps = MergeProps<
  {
    data: {
      title: Node[];
    };
    subChildren?: ReactNode;
    headerProps?: Partial<ComponentProps<'header'>>;
  },
  SectionProps
>;

const SecondaryLayout = ({
  data,
  subChildren,
  children,
  headerProps,
  ...props
}: SecondaryLayoutProps) => {
  return (
    <Section {...props}>
      <header
        {...headerProps}
        className={cn(
          'w-9by10 mb-6 flex max-w-7xl justify-between gap-4 max-sm:flex-col sm:items-end',
          headerProps?.className
        )}
      >
        <div className='flex items-center gap-2.5'>
          <span className='relative h-2 w-6 sm:w-12'>
            <ScrollAnimate
              config={lineLeft}
              layout
            >
              <span className='bg-body absolute inset-0 border' />
            </ScrollAnimate>
          </span>

          <Title
            className='wrap-break-word'
            component='h2'
            order={4}
          >
            {serialize(data.title)}
          </Title>
        </div>

        {subChildren}
      </header>

      {children}
    </Section>
  );
};

export { SecondaryLayout };
export type { SecondaryLayoutProps };
