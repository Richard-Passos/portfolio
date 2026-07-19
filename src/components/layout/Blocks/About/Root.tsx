import BentoGrid from '@/components/display/BentoGrid';
import BoldCard from '@/components/display/Card/Bold';
import SimpleCard from '@/components/display/Card/Simple';
import { Section, SectionProps } from '@/components/layout/Section';
import { ReviewTitleOnScroll } from '@/components/system/Title/ReviewOnScroll';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';
import GradientCard from '@/components/display/Card/Gradient';
import { Badge } from '@/components/display/Badge';
import GalleryCarousel, { GalleryCarouselItemProps } from '@/components/modules/Carousel/Gallery';

export type AboutProps = MergeProps<
  {
    data: {
      title: ReactNode;
      items: {
        about: { badge: ReactNode; text: ReactNode };
        love: { icon: ReactNode; text: ReactNode };
        better: { icon: ReactNode; text: ReactNode };
        location: { icon: ReactNode; title: ReactNode };
        hobbies: { icon: ReactNode; title: ReactNode; text: ReactNode };
        gallery: { images: Pick<GalleryCarouselItemProps, 'src' | 'alt'>[] };
      };
    };
  },
  SectionProps
>;

export const About = ({ data, className, ...props }: AboutProps) => {
  return (
    <Section
      className={cn('w-full', className)}
      {...props}
    >
      <ReviewTitleOnScroll>{data.title}</ReviewTitleOnScroll>

      <BentoGrid
        id='about'
        templates={{
          base: ['about', 'better', 'love', 'location', 'hobbies', 'gallery'],
          sm: [
            'about    about',
            'better   love',
            'location location',
            'hobbies  hobbies',
            'gallery  gallery'
          ],
          lg: [
            '.       about    about',
            '.       about    about',
            'hobbies better   gallery',
            'hobbies love     gallery',
            'hobbies location gallery',
            'hobbies location gallery'
          ]
        }}
        className='w-9/10'
      >
        <BentoGrid.Item value='about'>
          <GradientCard
            gradient='radial-gradient(
              140% 140% at 100% 0%,
              #411073 0%,
              #0c1149 10%,
              #f00040 20%,
              transparent 60%
            )'
            className='min-h-64 rounded-none after:rounded-none'
          >
            <Badge
              color='primary'
              variant='subtle'
            >
              {data.items.about.badge}
            </Badge>

            <GradientCard.Text className='mt-auto'>{data.items.about.text}</GradientCard.Text>
          </GradientCard>
        </BentoGrid.Item>

        <BentoGrid.Item value='better'>
          <SimpleCard>
            <SimpleCard.Icon>{data.items.better.icon}</SimpleCard.Icon>

            <SimpleCard.Text>{data.items.better.text}</SimpleCard.Text>
          </SimpleCard>
        </BentoGrid.Item>

        <BentoGrid.Item value='love'>
          <SimpleCard>
            <SimpleCard.Icon>{data.items.love.icon}</SimpleCard.Icon>

            <SimpleCard.Text>{data.items.love.text}</SimpleCard.Text>
          </SimpleCard>
        </BentoGrid.Item>

        <BentoGrid.Item value='location'>
          <BoldCard>
            <BoldCard.Icon>{data.items.location.icon}</BoldCard.Icon>

            <BoldCard.Title>{data.items.location.title}</BoldCard.Title>
          </BoldCard>
        </BentoGrid.Item>

        <BentoGrid.Item value='hobbies'>
          <GradientCard
            className='group h-full rounded-none after:rounded-none md:col-span-6 lg:col-span-3'
            gradient='radial-gradient(
                      140% 140% at 0% 100%,
                      #411073 0%,
                      #0c1149 10%,
                      #f00040 20%,
                      transparent 60%
                    )'
          >
            <GradientCard.Icon>{data.items.hobbies.icon}</GradientCard.Icon>

            <GradientCard.Title>{data.items.hobbies.title}</GradientCard.Title>

            <GradientCard.Text>{data.items.hobbies.text}</GradientCard.Text>
          </GradientCard>
        </BentoGrid.Item>

        <BentoGrid.Item value='gallery'>
          <GalleryCarousel className='border bg-body'>
            {data.items.gallery.images.map((img) => (
              <GalleryCarousel.Item
                key={img.src.toString()}
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                className='aspect-square'
              />
            ))}
          </GalleryCarousel>
        </BentoGrid.Item>
      </BentoGrid>
    </Section>
  );
};
