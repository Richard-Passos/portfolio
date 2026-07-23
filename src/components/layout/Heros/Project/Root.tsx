import RootData from './.data';

import { cn } from '@/utils/cn';
import { Section, SectionProps } from '@/components/layout/Section';
import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import { Text } from '@/components/system/Text';
import { MagneticButton } from '@/components/input/Button/Magnetic';
import GalleryCarousel from '@/components/modules/Carousel/Gallery';
import { MergeProps } from '@/types/MergeProps';
import { Project } from '@/types/Project';

export type ProjectHeroProps = MergeProps<
  { data: Pick<Project, 'title' | 'year' | 'roles' | 'text' | 'url' | 'thumbnail' | 'images'> },
  SectionProps
>;

export const ProjectHero = ({ data, className, ...props }: ProjectHeroProps) => {
  const images = [data.thumbnail, ...(data.images ?? [])];

  return (
    <Section
      forceTheme
      className={cn('w-full pb-[calc(var(--py)*2)]', className)}
      {...props}
    >
      <section className='flex min-h-[calc(var(--h)*0.55)] w-9/10 flex-wrap items-end justify-between gap-8'>
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

        <div className='max-w-sm shrink grow'>
          <Text>{data.text}</Text>

          <MagneticButton
            href={data.url}
            disabled={!data.url}
            className='mt-24 size-48 rounded-full border-border text-center text-xl'
          >
            {RootData.view}
          </MagneticButton>
        </div>
      </section>

      <GalleryCarousel className='mt-(--py)'>
        {images?.map((src) => (
          <GalleryCarousel.Item
            alt=''
            src={src}
            key={src}
            role='presentation'
            width={1024}
            height={683}
            className='aspect-3/2 w-9/10 max-w-5xl'
          />
        ))}
      </GalleryCarousel>
    </Section>
  );
};
