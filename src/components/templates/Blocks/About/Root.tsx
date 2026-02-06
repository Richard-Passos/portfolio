import { ComponentProps } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/Layouts/Primary';
import { Lines, ScrollAnimate } from '@/components/atoms';
import { cn } from '@/utils';

import AboutBlockText, { AboutBlockTextProps } from './Text';

type AboutBlockOwnProps = {
  data: PrimaryLayoutsProps['data'] & {
    texts: ({ id: string } & AboutBlockTextProps['data'])[];
  };
  wrapperProps?: Partial<ComponentProps<'section'>>;
};

type AboutBlockProps = AboutBlockOwnProps &
  Omit<PrimaryLayoutsProps, keyof AboutBlockOwnProps>;

const AboutBlock = ({ data, wrapperProps, ...props }: AboutBlockProps) => {
  return (
    <PrimaryLayouts
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
        <div className='bg-body relative grow basis-48 overflow-hidden border max-sm:hidden'>
          <ScrollAnimate config={yFullScrollAnim}>
            <Lines className='text-border! h-screen translate-y-0 bg-size-[83.333px_66.666px]' />
          </ScrollAnimate>
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
    </PrimaryLayouts>
  );
};

export default AboutBlock;
export type { AboutBlockProps };
