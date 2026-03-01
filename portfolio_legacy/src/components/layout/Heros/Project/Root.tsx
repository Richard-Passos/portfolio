import { ReactNode } from 'react';

import { Image, ScrollAnimate, Text, Title } from '@/components/atoms';
import { ImageProps } from '@/components/display/Image';
import Section, { SectionProps } from '@/components/layout/wrappers/Section';
import { Action } from '@/components/molecules';
import { ActionLinkProps } from '@/components/molecules/Action/Link';
import { ArrowUpRightIcon } from '@/components/system/Icon/variants';
import { TextProps } from '@/components/system/Text';
import { TitleProps } from '@/components/system/Title';
import { MergeProps } from '@/types';
import { cn, renderComp } from '@/utils';

type ProjectHeroOwnProps = {
  data: {
    title: TitleProps['children'];
    description?: TextProps['children'];
    subtitle?: TitleProps['children'];
    image: {
      src: ImageProps['src'];
      alt: ImageProps['alt'];
    };
    action: {
      label: ReactNode;
      href: ActionLinkProps['href'];
    };
  };
};

type ProjectHeroProps = MergeProps<ProjectHeroOwnProps, SectionProps>;

const ProjectHero = ({ className, data, ...props }: ProjectHeroProps) => {
  return (
    <Section
      className={cn('3xl:min-h-fit min-h-fit pt-0', className)}
      forceTheme
      {...props}
    >
      <header className='w-9by10 3xl:min-h-[calc(var(--max-height-bounds)*.75)] flex min-h-[75svh] flex-col items-center justify-center py-8'>
        {renderComp(
          <Title
            className='mb-2.5 max-w-md text-center font-medium tracking-wide'
            component='h2'
            order={6}
          >
            {data.subtitle}
          </Title>,
          [data.subtitle]
        )}

        <Title
          className='max-w-5xl text-center'
          order={1}
        >
          {data.title}
        </Title>

        {renderComp(
          <Text className='text-dimmed mt-5 max-w-xl text-center text-sm'>
            {data.description}
          </Text>,
          [data.description]
        )}
      </header>

      <div className='relative mt-16 flex w-full max-w-7xl items-center justify-center'>
        {renderComp(
          <ScrollAnimate config={{ prop: 'y', propPoints: ['0%', '-100%'] }}>
            <div className='absolute top-0 left-0 z-10 translate-x-1/2 -translate-y-1/2'>
              <Action
                as='link'
                className='aspect-square rounded-full shadow [--button-height:calc(var(--size)*var(--mantine-scale))]! [--size:8rem] sm:text-xl sm:[--size:12rem]'
                disabled={!data.action?.href}
                href={data.action.href}
                variant='default'
              >
                {data.action.label}&nbsp;
                <ArrowUpRightIcon className='size-[1.25em] shrink-0' />
              </Action>
            </div>
          </ScrollAnimate>,
          [data.action.label]
        )}

        <div className='bg-gray-1 dark:bg-dark-6 relative aspect-video w-full overflow-hidden rounded-xl'>
          <Image
            alt={data.image.alt}
            className='object-cover'
            fill
            quality={100}
            sizes='100vw'
            src={data.image.src}
          />
        </div>
      </div>
    </Section>
  );
};

export { ProjectHero };
export type { ProjectHeroProps };
