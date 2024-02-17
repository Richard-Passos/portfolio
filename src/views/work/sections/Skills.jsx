import {
  Carousel,
  MultiY,
  Section,
  SkillCard,
  TextScrollAnimation,
} from '@/components';
import { Icon, Text } from '@/components/ui';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
  SmileIcon,
} from '@/components/ui/icon/icons';
import { skills } from '@/constants';
import { cn } from '@/utils';

const HomeViewSkillsSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex w-full flex-col items-center gap-lg', className)}
      {...props}
    >
      <section className='flex w-9/10 max-w-screen-xl justify-between gap-sm max-sm:flex-col'>
        <Text className='max-w-lg text-4xl/tight font-medium sm:text-5xl/tight'>
          <TextScrollAnimation text='We help our clients entertain, inform, and inspire the world.' />
        </Text>

        <Text className='max-w-lg text-muted-content'>
          We represent storytellers who shape culture and drive the future. From
          artists and creators to athletes and brands, our deep expertise and
          broad capabilities enable talent and companies to confidently grow
          their careers and businesses.
        </Text>
      </section>

      <Carousel
        aria-labelledby='carousel-skills-heading-0'
        options={{ slideFocus: true }}
      >
        <div className='grid w-9/10 max-w-screen-xl grid-cols-2'>
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

          <Carousel.Actions className='place-self-end'>
            <Carousel.Action type='prev'>
              <ArrowLeftIcon className='h-[40%] w-[40%]' />
            </Carousel.Action>

            <Carousel.Action type='next'>
              <ArrowRightIcon className='h-[40%] w-[40%]' />
            </Carousel.Action>
          </Carousel.Actions>
        </div>

        <Carousel.Track>
          {skills.hard.map((data, i) => (
            <HomeViewSkillsSectionCarouselItem
              idx={i}
              key={data.title}
              {...data}
            />
          ))}
        </Carousel.Track>
      </Carousel>

      <div className='py-md relative flex w-full items-center justify-center max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds'>
        <Text className='w-9/10 max-w-screen-lg text-7xl/tight md:text-8xl/tight'>
          <TextScrollAnimation
            className='mx-auto justify-center'
            text="But it's not just about the tech."
          />
        </Text>

        <MultiY>
          <SmileIcon />
        </MultiY>
      </div>

      <Carousel
        aria-labelledby='carousel-skills-heading-1'
        options={{ slideFocus: true }}
      >
        <div className='grid w-9/10 max-w-screen-xl grid-cols-2'>
          <div className='space-y-1.5'>
            <Text.Title
              className='text-xs uppercase'
              id='carousel-skills-heading-1'
            >
              Soft skills
            </Text.Title>

            <Text className='text-lg text-muted-content'>
              Lorem ipsum dolor sit amet.
            </Text>
          </div>

          <Carousel.Actions className='place-self-end'>
            <Carousel.Action type='prev'>
              <ArrowLeftIcon className='h-[40%] w-[40%]' />
            </Carousel.Action>

            <Carousel.Action type='next'>
              <ArrowRightIcon className='h-[40%] w-[40%]' />
            </Carousel.Action>
          </Carousel.Actions>
        </div>

        <Carousel.Track>
          {skills.soft.map((data, i) => (
            <HomeViewSkillsSectionCarouselItem
              idx={i}
              key={data.title}
              {...data}
            />
          ))}
        </Carousel.Track>
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
