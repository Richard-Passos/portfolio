import { Button, Section, SkillCard } from '@/components';
import { Badge, Carousel, Icon, Text } from '@/components/ui';
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
      className={cn('flex w-full flex-col items-center', className)}
      {...props}
    >
      <Carousel
        aria-labelledby='carousel-skills-heading-0'
        className='mb-lg'
        options={{ slideFocus: true }}
      >
        <div className='flex w-9/10 max-w-screen-xl items-end justify-between gap-md'>
          <Text.Title
            className='text-7xl font-extrabold uppercase tracking-tight sm:text-8xl'
            id='carousel-skills-heading-0'
          >
            Hard <br />{' '}
            <span className='relative inline'>
              skills{' '}
              <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
                The best in market
              </Badge>
            </span>
          </Text.Title>

          <Text className='max-w-md text-muted-content max-sm:hidden'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            cumque excepturi quo impedit dolore reiciendis unde quae dignissimos
            inventore quis?
          </Text>
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

        <section className='flex w-9/10 max-w-screen-xl items-center gap-sm'>
          <Carousel.ActiveIdx
            className='shrink-0'
            itemsLength={skills.hard.length}
          />

          <Carousel.Progress variants={{ size: 'sm' }}>
            <Carousel.Progress.Indicator />
          </Carousel.Progress>

          <Carousel.Actions>
            <HomeViewSkillsSectionCarouselAciton type='prev'>
              <ArrowLeftIcon />
            </HomeViewSkillsSectionCarouselAciton>

            <HomeViewSkillsSectionCarouselAciton type='next'>
              <ArrowRightIcon />
            </HomeViewSkillsSectionCarouselAciton>
          </Carousel.Actions>
        </section>
      </Carousel>

      <Carousel
        aria-labelledby='carousel-skills-heading-1'
        options={{ slideFocus: true }}
      >
        <div className='flex w-9/10 max-w-screen-xl items-end justify-between gap-md'>
          <Text.Title
            className='text-7xl font-extrabold uppercase tracking-tight sm:text-8xl'
            id='carousel-skills-heading-0'
          >
            Soft <br />{' '}
            <span className='relative inline'>
              skills{' '}
              <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
                The best as person
              </Badge>
            </span>
          </Text.Title>

          <Text className='max-w-md text-muted-content max-sm:hidden'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            cumque excepturi quo impedit dolore reiciendis unde quae dignissimos
            inventore quis?
          </Text>
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

        <section className='flex w-9/10 max-w-screen-xl items-center gap-sm'>
          <Carousel.ActiveIdx
            className='shrink-0'
            itemsLength={skills.soft.length}
          />

          <Carousel.Progress variants={{ size: 'sm' }}>
            <Carousel.Progress.Indicator />
          </Carousel.Progress>

          <Carousel.Actions>
            <HomeViewSkillsSectionCarouselAciton type='prev'>
              <ArrowLeftIcon />
            </HomeViewSkillsSectionCarouselAciton>

            <HomeViewSkillsSectionCarouselAciton type='next'>
              <ArrowRightIcon />
            </HomeViewSkillsSectionCarouselAciton>
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
            <PlusIcon className='transition-transform duration-300 ease-backOut group-data-open:rotate-[135deg]' />
          </SkillCard.Action>
        </div>

        <SkillCard.WaterMark>
          <Icon name={icon} />
        </SkillCard.WaterMark>
      </Carousel.Item>
    </SkillCard>
  );
};

const HomeViewSkillsSectionCarouselAciton = ({
  className,
  variants,
  children,
  ...props
}) => {
  return (
    <Carousel.Action
      asChild
      {...props}
    >
      <Button
        className={cn(
          'aspect-square rounded-sm bg-muted px-0 text-content [--variant-a:--primary] hover:text-primary-content [&_svg]:size-[40%]',
          className,
        )}
        variants={{ color: 'main', size: 'sm', ...variants }}
      >
        {children}
      </Button>
    </Carousel.Action>
  );
};

export default HomeViewSkillsSection;
