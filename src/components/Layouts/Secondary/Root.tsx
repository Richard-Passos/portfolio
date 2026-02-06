import { createPolymorphicComponent } from '@mantine/core';
import { ComponentProps, ReactNode } from 'react';

import { lineLeftScrollAnim } from '@/animations/scroll';
import { ScrollAnimate, Title } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type SecondaryLayoutsOwnProps = {
  data: {
    title: Node[];
  };
  subChildren?: ReactNode;
  headerProps?: Partial<ComponentProps<'header'>>;
};

type SecondaryLayoutsProps = SecondaryLayoutsOwnProps &
  Omit<SectionProps, keyof SecondaryLayoutsOwnProps>;

const SecondaryLayouts = ({
  data,
  subChildren,
  children,
  headerProps,
  ...props
}: SecondaryLayoutsProps) => {
  return (
    <Section {...props}>
      <header
        {...headerProps}
        className={cn(
          `w-9by10 mb-6 flex max-w-7xl justify-between gap-4 max-sm:flex-col sm:items-end`,
          headerProps?.className
        )}
      >
        <div className='flex items-center gap-2.5'>
          <span className='relative h-2 w-6 sm:w-12'>
            <ScrollAnimate
              config={lineLeftScrollAnim}
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

export default createPolymorphicComponent<'section', SecondaryLayoutsProps>(
  SecondaryLayouts
);
export type { SecondaryLayoutsProps };
