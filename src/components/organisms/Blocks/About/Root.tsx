import { ComponentProps } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate } from '@/components/atoms';
import PrimaryLayout, {
  PrimaryLayoutProps
} from '@/components/organisms/Layouts/Primary';
import { cn } from '@/utils';

import AboutBlockText, { AboutBlockTextProps } from './Text';

type AboutBlockOwnProps = {
  data: PrimaryLayoutProps['data'] & {
    texts: ({ id: string } & AboutBlockTextProps['data'])[];
  };
  wrapperProps?: Partial<ComponentProps<'section'>>;
};

type AboutBlockProps = AboutBlockOwnProps &
  Omit<PrimaryLayoutProps, keyof AboutBlockOwnProps>;

const AboutBlock = ({ data, wrapperProps, ...props }: AboutBlockProps) => {
  return (
    <PrimaryLayout
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <section
        {...wrapperProps}
        className={cn(
          'w-9by10 flex max-w-5xl gap-4 md:gap-10',
          wrapperProps?.className
        )}
      >
        <div className='bg-body relative grow basis-48 overflow-hidden border max-sm:hidden'>
          <ScrollAnimate config={yFullScrollAnim}>
            <Lines className='text-gray-3 dark:text-dark-4 h-screen translate-y-0 bg-size-[83.333px_66.666px]' />
          </ScrollAnimate>
        </div>

        <section className='flex max-w-xl grow flex-col gap-8 sm:py-10'>
          {data.texts.map(({ id, ...data }) => (
            <AboutBlockText
              data={data}
              key={id}
            />
          ))}
        </section>
      </section>
    </PrimaryLayout>
  );
};

export default AboutBlock;
export type { AboutBlockProps };
