import { Section, SkillCard, TextScrollAnimation } from '@/components';
import { Carousel, Icon, Text } from '@/components/ui';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
} from '@/components/ui/icon/icons';
import { skills } from '@/constants';
import { cn } from '@/utils';

const HomeViewSkillsSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex w-full flex-col items-center gap-lg', className)}
      {...props}
    >
      <div className='w-9/10 max-w-screen-xl'>
        <Text className='max-w-lg text-4xl/tight font-medium sm:text-5xl/tight'>
          <TextScrollAnimation
            className='max-sm:text-center'
            text='We help our clients entertain, inform, and inspire the world.'
          />
        </Text>
      </div>

      <Carousel
        aria-labelledby='carousel-skills-heading-0'
        options={{ slideFocus: true }}
      >
        <header className='w-9/10 max-w-screen-xl'>
          <div className='space-y-1.5'>
            <Text.Title
              className='text-xs uppercase'
              id='carousel-skills-heading-0'
            >
              Hard skills
            </Text.Title>

            <Text className='text-lg text-muted-content'>
              The best in market.
            </Text>
          </div>
        </header>

        <Carousel.Track>
          {skills.hard.map((data, i) => (
            <HomeViewSkillsSectionCarouselItem
              idx={i}
              key={data.title}
              {...data}
            />
          ))}
        </Carousel.Track>

        <section className='flex w-9/10 max-w-screen-xl items-center gap-sm'>
          <Carousel.ActiveIdx
            className='shrink-0'
            itemsLength={skills.hard.length}
          />

          <Carousel.Progress variants={{ size: 'sm' }}>
            <Carousel.Progress.Indicator />
          </Carousel.Progress>

          <Carousel.Actions>
            <Carousel.Action type='prev'>
              <ArrowLeftIcon className='h-[40%] w-[40%]' />
            </Carousel.Action>

            <Carousel.Action type='next'>
              <ArrowRightIcon className='h-[40%] w-[40%]' />
            </Carousel.Action>
          </Carousel.Actions>
        </section>
      </Carousel>

      <Carousel
        aria-labelledby='carousel-skills-heading-1'
        options={{ slideFocus: true }}
      >
        <header className='w-9/10 max-w-screen-xl'>
          <div className='space-y-1.5'>
            <Text.Title
              className='text-xs uppercase'
              id='carousel-skills-heading-1'
            >
              Soft skills
            </Text.Title>

            <Text className='text-lg text-muted-content'>
              The best as person.
            </Text>
          </div>
        </header>

        <Carousel.Track>
          {skills.soft.map((data, i) => (
            <HomeViewSkillsSectionCarouselItem
              idx={i}
              key={data.title}
              {...data}
            />
          ))}
        </Carousel.Track>

        <section className='flex w-9/10 max-w-screen-xl items-center gap-sm'>
          <Carousel.ActiveIdx
            className='shrink-0'
            itemsLength={skills.soft.length}
          />

          <Carousel.Progress variants={{ size: 'sm' }}>
            <Carousel.Progress.Indicator />
          </Carousel.Progress>

          <Carousel.Actions>
            <Carousel.Action type='prev'>
              <ArrowLeftIcon className='h-[40%] w-[40%]' />
            </Carousel.Action>

            <Carousel.Action type='next'>
              <ArrowRightIcon className='h-[40%] w-[40%]' />
            </Carousel.Action>
          </Carousel.Actions>
        </section>
      </Carousel>
    </Section>
  );
};

const HomeViewSkillsSectionCarouselItem = ({
  idx,
  title,
  icon,
  description,
  className,
  ...props
}) => {
  return (
    <SkillCard
      asChild
      {...props}
    >
      <Carousel.Item index={idx}>
        <SkillCard.Number index={idx} />

        <div className='relative row-span-2 flex size-full items-center justify-center'>
          <SkillCard.Icon>
            <Icon name={icon} />
          </SkillCard.Icon>

          <SkillCard.Description>{description}</SkillCard.Description>
        </div>

        <div className='flex items-center justify-between gap-6 self-end'>
          <SkillCard.Title>{title}</SkillCard.Title>

          <SkillCard.Action>
            <PlusIcon className='size-1/2 transition-transform duration-300 ease-backOut group-data-open:rotate-[135deg]' />
          </SkillCard.Action>
        </div>

        <SkillCard.WaterMark>
          <Icon name={icon} />
        </SkillCard.WaterMark>
      </Carousel.Item>
    </SkillCard>
  );
};

export default HomeViewSkillsSection;
