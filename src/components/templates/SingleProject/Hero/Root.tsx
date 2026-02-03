import { ReactNode } from 'react';

import { Image, ScrollAnimate, Text, Title } from '@/components/atoms';
import { ArrowUpRightIcon } from '@/components/atoms/Icon/icons';
import { ImageProps } from '@/components/atoms/Image';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import { Action } from '@/components/molecules';
import { ActionLinkProps } from '@/components/molecules/Action/Link';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn, renderComp } from '@/utils';

type SingleProjectHeroTemplateOwnProps = {
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

type SingleProjectHeroTemplateProps = SingleProjectHeroTemplateOwnProps &
  Omit<SectionProps, keyof SingleProjectHeroTemplateOwnProps>;

const SingleProjectHeroTemplate = ({
  className,
  data,
  ...props
}: SingleProjectHeroTemplateProps) => {
  return (
    <Section
      className={cn(`min-h-fit pt-0 2xl:min-h-fit`, className)}
      forceTheme
      {...props}
    >
      <header className='w-9by10 flex min-h-[calc(var(--h)*.75)] flex-col items-center justify-center pt-[calc(var(--header-height)+--spacing(8))] pb-8 [--h:100svh] 2xl:[--h:var(--max-height-bounds)]'>
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
          <Text className='text-dimmed mt-5 max-w-lg text-center text-sm'>
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

export default SingleProjectHeroTemplate;
export type { SingleProjectHeroTemplateProps };
