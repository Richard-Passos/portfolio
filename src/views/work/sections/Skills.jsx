import { Button, Section, SkillCard } from '@/components';
import { Badge, Carousel, Icon, Text } from '@/components/ui';
import {
  PlusIcon,
} from '@/components/ui/icon/icons';
import { cn } from '@/utils';

const HomeViewSkillsSection = ({ className, data = [], ...props }) => {
  return (
    <Section
      className={cn('flex flex-col items-center gap-lg', className)}
      {...props}
    >
      {data.map((data = {}, i) => <Carousel
      key={data.title}
        aria-labelledby={`carousel-skills-heading-${i}`}
        options={{ slideFocus: true }}
      >
        <div className='flex w-9/10 max-w-screen-xl justify-between gap-md max-sm:flex-col sm:items-end'>
        <Text.Title
        aria-label={data.title}
        className='whitespace-pre-line text-[16vw]/none'
        variants={{ size: 'lg' }}
      >
        {data.title?.split(' ').map((w, i, arr) =>
          i === arr.length - 1 ? (
            <span
              key={i}
              className='relative inline'
            >
              {w}

              <Badge className='absolute bottom-0 right-0 w-max -translate-x-4 -rotate-12 border-variant-content px-[1em] py-[.75em] text-[.24em] lowercase tracking-normal first-letter:uppercase max-sm:translate-y-1/3 sm:text-[.17em]'>
                {data.subtitle}
              </Badge>
            </span>
          ) : (
            `${w} `
          ),
        )}
      </Text.Title>

      <span className='sr-only'>{data.subtitle}</span>

          <section className='flex w-full items-center gap-sm sm:max-w-xl'>
            <Carousel.ActiveIdx
              className='shrink-0'
              itemsLength={data.items?.length}
            />

            <Carousel.Progress variants={{ size: 'sm' }}>
              <Carousel.Progress.Indicator />
            </Carousel.Progress>

            <Carousel.Actions>
              {data.actions?.map((data) => 
              <HomeViewSkillsSectionCarouselAction key={data.icon?.src} {...data}/>)}
            </Carousel.Actions>
          </section>
        </div>

        <Carousel.Track>
          {data.items?.map((data, i) => (
            <HomeViewSkillsSectionCarouselItem
              idx={i}
              key={data.title}
              data={data}
            />
          ))}
        </Carousel.Track>
      </Carousel>)}
    </Section>
  );
};

const HomeViewSkillsSectionCarouselAction = ({
  className,
  icon,
  data = {},
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
        {...data}
        variants={{ color: 'main', size: 'sm', ...data.variants }}
      >
        <Icon {...icon}/>
      </Button>
    </Carousel.Action>
  );
};

const HomeViewSkillsSectionCarouselItem = ({ idx, data = {}, ...props }) => {
  return (
    <SkillCard
      asChild
      {...props}
    >
      <Carousel.Item index={idx}>
        <SkillCard.Number index={idx} />

        <div className='relative row-span-2 flex size-full items-center justify-center'>
          <SkillCard.Icon>
            <Icon {...data.icon} />
          </SkillCard.Icon>

          <SkillCard.Description>{data.description}</SkillCard.Description>
        </div>

        <div className='flex items-center justify-between gap-6 self-end'>
          <SkillCard.Title>{data.title}</SkillCard.Title>

          <SkillCard.Action>
            <PlusIcon className='transition-transform duration-300 ease-backOut group-data-open:rotate-[135deg]' />
          </SkillCard.Action>
        </div>

        <SkillCard.WaterMark>
          <Icon {...data.icon} />
        </SkillCard.WaterMark>
      </Carousel.Item>
    </SkillCard>
  );
};

export default HomeViewSkillsSection;
