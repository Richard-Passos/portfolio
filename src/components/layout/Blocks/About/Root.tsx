import { ComponentProps } from 'react';

import {
  PrimaryLayout,
  PrimaryLayoutProps
} from '@/components/layout/wrappers';
import { ScrollYLines } from '@/components/misc/Lines/variants';
import { MergeProps } from '@/types';
import { cn } from '@/utils';

import { AboutBlockText, AboutBlockTextProps } from './Text';

type AboutBlockOwnProps = {
  data: PrimaryLayoutProps['data'] & {
    texts: ({ id: string } & AboutBlockTextProps['data'])[];
  };
  wrapperProps?: Partial<ComponentProps<'section'>>;
};

type AboutBlockProps = MergeProps<AboutBlockOwnProps, PrimaryLayoutProps>;

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
        <ScrollYLines className='grow basis-48 max-sm:hidden' />

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

export { AboutBlock };
export type { AboutBlockProps };
