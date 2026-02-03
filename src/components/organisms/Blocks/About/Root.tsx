import { ComponentProps } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate } from '@/components/atoms';
import { cn } from '@/utils';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import AboutBlockText, { AboutBlockTextProps } from './Text';

type AboutBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    texts: ({ id: string } & AboutBlockTextProps['data'])[];
  };
  wrapperProps?: Partial<ComponentProps<'section'>>;
};

type AboutBlockOrganismProps = AboutBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof AboutBlockOrganismOwnProps>;

const AboutBlockOrganism = ({
  data,
  wrapperProps,
  ...props
}: AboutBlockOrganismProps) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <section
        {...wrapperProps}
        className={cn(
          `w-9by10 flex max-w-5xl gap-4 md:gap-16`,
          wrapperProps?.className
        )}
      >
        <div className='dark:bg-dark-8 relative grow basis-48 overflow-hidden bg-white max-sm:hidden'>
          <ScrollAnimate config={yFullScrollAnim}>
            <Lines className='text-border! h-screen translate-y-0 bg-size-[83.333px_66.666px] opacity-60' />
          </ScrollAnimate>

          <span className='rounded-inherit absolute inset-0 border opacity-60' />
        </div>

        <section className='flex max-w-xl grow flex-col gap-8'>
          {data.texts.map(({ id, ...data }) => (
            <AboutBlockText
              data={data}
              key={id}
            />
          ))}
        </section>
      </section>
    </PrimaryLayoutBlock>
  );
};

export default AboutBlockOrganism;
export type { AboutBlockOrganismProps };
