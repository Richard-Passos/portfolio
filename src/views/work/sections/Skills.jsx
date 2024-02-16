import { Carousel, MultiY, Section, TextScrollAnimation } from '@/components';
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
      <section className='flex w-[90%] max-w-screen-xl justify-between gap-sm max-sm:flex-col'>
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

      <Carousel aria-labelledby='carousel-skills-heading-0'>
        <div className='grid w-[90%] max-w-screen-xl grid-cols-2'>
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

      <div className='relative flex w-full items-center justify-center py-[min(28vh,theme(spacing.28))] max-2xl:min-h-screen 2xl:h-screen 2xl:max-h-bounds'>
        <Text className='w-[90%] max-w-screen-lg text-7xl/tight md:text-8xl/tight'>
          <TextScrollAnimation
            className='mx-auto justify-center'
            text="But it's not just about the tech."
          />
        </Text>

        <MultiY>
          <SmileIcon />
        </MultiY>
      </div>

      <Carousel aria-labelledby='carousel-skills-heading-1'>
        <div className='grid w-[90%] max-w-screen-xl grid-cols-2'>
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
    <Carousel.Item
      className={cn(
        'group grid aspect-[1/.85] w-[90%] max-w-xs grid-rows-3 gap-2 overflow-hidden rounded-md border bg-main p-[--p] [--p:min(8vw,theme(spacing.8))]',
        className,
      )}
      index={idx}
      {...props}
    >
      <Text className='text-4xl font-bold text-muted'>
        {`${idx + 1}`.padStart(2, '0')}/
      </Text>

      <div className='flex aspect-square h-full items-center justify-center place-self-center rounded-md bg-muted/50'>
        <Icon
          className='h-2/3 w-2/3 fill-primary'
          name={icon}
        />
      </div>

      <div className='flex h-fit items-center justify-between self-end'>
        <Text.Subtitle className='text-sm text-muted-content'>
          {title}
        </Text.Subtitle>

        <button className='relative flex aspect-square w-6 items-center justify-center bg-muted [clip-path:circle(50%)]'>
          <PlusIcon className='relative z-10 h-1/2 w-1/2 transition-colors group-hover:fill-primary-content' />

          <div className='absolute inset-0 translate-y-[101%] rounded-[50%_50%_0_0] transition-[transform,border-radius] duration-500 group-hover:translate-y-0 group-hover:rounded-[0]'>
            <span className='absolute inset-0 rounded-inherit bg-primary transition-bg' />
          </div>
        </button>
      </div>
    </Carousel.Item>
  );
};

export default HomeViewSkillsSection;
