import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import { Text } from '@/components/system/Text';
import { GalleryParallaxCarousel } from '@/components/modules/Carousel/GalleryParallax';
import { MergeProps } from '@/types/MergeProps';
import { Project } from '@/types/Project';
import { MagneticLink } from '@/components/navigation/Link/Magnetic';
import { useIntlayer } from 'next-intlayer/server';
import { ArrowUpRightIcon } from '@/components/system/Icon/ArrowUpRight';

export type ProjectHeroProps = MergeProps<
  { data: Pick<Project, 'title' | 'year' | 'roles' | 'text' | 'url' | 'thumbnail' | 'images'> },
  SectionProps
>;

export const ProjectHero = ({ data, className, ...props }: ProjectHeroProps) => {
  const t = useIntlayer('project-hero');
  const images = [data.thumbnail, ...(data.images ?? [])];

  return (
    <Section
      forceTheme
      className={cn('w-full pt-[calc(var(--py)/2)] pb-[calc(var(--py)*2)]', className)}
      {...props}
    >
      <section className='flex min-h-[calc(var(--h)*0.6)] w-9/10 flex-wrap items-end justify-between gap-8'>
        <div className='max-w-3xl'>
          <StaggeredTitleOnView
            as='h1'
            styleAs='h2'
          >
            {data.title}
          </StaggeredTitleOnView>

          <Text
            small
            className='text-placeholder'
          >
            {data.year} / {data.roles.sort().join(' & ')}
          </Text>
        </div>

        <div className='max-w-md shrink grow'>
          <Text>{data.text}</Text>

          <MagneticLink
            href={data.url ?? ''}
            disabled={!data.url}
            className='mt-16 size-40 rounded-full border-border text-center sm:mt-24 sm:size-48 sm:text-xl'
          >
            {t.view} <ArrowUpRightIcon />
          </MagneticLink>
        </div>
      </section>

      <GalleryParallaxCarousel
        className='mt-(--py)'
        items={images}
        slideProps={{ className: 'w-9/10! max-w-5xl aspect-3/2' }}
      />
    </Section>
  );
};
