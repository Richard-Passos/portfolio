import BentoGrid from '@/components/display/BentoGrid';
import BoldCard from '@/components/display/Card/Bold';
import DescriptionCard from '@/components/display/Card/Description';
import MarqueeCard from '@/components/display/Card/Marquee';
import SimpleCard from '@/components/display/Card/Simple';
import TimeCard from '@/components/display/Card/Time';
import LinkCard from '@/components/display/Card/Link';
import { Section, SectionProps } from '@/components/layout/Section';
import { ReviewTitleOnScroll } from '@/components/system/Title/ReviewOnScroll';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';
import { Value } from '@/types/Value';
import { GlobeIcon } from '@/components/system/Icon/Globe';
import { Title } from '@/components/system/Title';
import { Text } from '@/components/system/Text';
import { Image } from '@/components/display/Image';
import GradientCard from '@/components/display/Card/Gradient';
import { StaggeredTitleOnView } from '@/components/system/Title/StaggeredOnView';
import { Badge } from '@/components/display/Badge';

export type AboutProps = MergeProps<
  {
    data: {
      title: ReactNode;
      items: {
        about: { badge: ReactNode; text: ReactNode };
        location: { icon: ReactNode; title: ReactNode };
        values: { icon: ReactNode; title: ReactNode; items: Value[] };
        better: { icon: ReactNode; text: ReactNode };
        love: { icon: ReactNode; text: ReactNode };
        time: { title: ReactNode };
        contact: { url: string; icon: ReactNode; title: ReactNode };
      };
    };
  },
  SectionProps
>;

export const About = ({ data, className, ...props }: AboutProps) => {
  return (
    <Section
      className={cn('w-full pb-[calc(var(--py)*2)]', className)}
      {...props}
    >
      <ReviewTitleOnScroll>{data.title}</ReviewTitleOnScroll>

      <BentoGrid
        templates={{
          base: ['about', 'location', 'better', 'love'],
          sm: ['about about', 'location location', 'better love'],
          lg: [
            '. about about',
            '. about about',
            'cards better selfie',
            'cards love selfie',
            'cards location selfie',
            'cards location selfie'
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

            <GradientCard.Text className='mt-auto text-base'>
              {data.items.about.text}
            </GradientCard.Text>
          </GradientCard>
        </BentoGrid.Item>

        <BentoGrid.Item value='location'>
          <BoldCard>
            <BoldCard.Icon>{data.items.location.icon}</BoldCard.Icon>

            <BoldCard.Title>{data.items.location.title}</BoldCard.Title>
          </BoldCard>
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

        <BentoGrid.Item value='selfie'>
          <section className='group/card overflow-hidden border bg-body'>
            <Image
              src='/images/selfie.webp'
              alt=''
              width={600}
              height={600}
              className='size-full object-cover blur-sm transition-[filter] duration-300 ease-in-out group-hover/card:blur-[0]'
            />
          </section>
        </BentoGrid.Item>

        <BentoGrid.Item value='cards'>
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
            <GradientCard.Icon className='group-hover:*:rotate-y-360'>
              <GlobeIcon />
            </GradientCard.Icon>

            <GradientCard.Title>Fora do código</GradientCard.Title>

            <GradientCard.Text>
              <p>
                Grande parte do meu tempo livre acaba nos videogames, mas também gosto de aproveitar
                momentos simples: conversar com amigos, passar tempo com a família, caminhar em um
                dia de sol ou simplesmente descobrir algo novo por curiosidade.
              </p>

              <p>Acredito que as melhores experiências geralmente nascem dessas pequenas coisas.</p>
            </GradientCard.Text>
          </GradientCard>
        </BentoGrid.Item>
      </BentoGrid>
    </Section>
  );
};
