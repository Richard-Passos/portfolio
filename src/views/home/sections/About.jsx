import { GlobeIcon, RocketIcon } from '@radix-ui/react-icons';

import {
  InfinityScroll,
  BentoGrid,
  ChangeTheme,
  ListHorizontalScroll,
  LocalTime,
  ScrollTitle,
  Section,
} from '@/components';
import { Badge, Link, Svg, Text } from '@/components/ui';
import { selectedSkills } from '@/constants';
import { cn } from '@/utils';

const HomeAboutSection = ({ className, theme, ...props }) => {
  return (
    <Section
      className={cn(
        'relative mb-20 flex flex-col items-center gap-20 md:gap-28 2xl:h-auto 2xl:max-h-none',
        className,
      )}
      {...props}
    >
      <ScrollTitle title='ABOUT' />

      <Grid />

      <ListContactPage />

      <ChangeTheme
        className='pointer-events-none absolute left-0 top-0 h-full max-h-screen w-full'
        theme={theme}
      >
        <span />
      </ChangeTheme>
    </Section>
  );
};

const Grid = ({ className, ...props }) => {
  return (
    <BentoGrid
      className={cn(
        '[grid-template-areas:"item-1""item-2""item-3""item-4""item-5""item-6""item-7"] sm:[grid-template-areas:"item-1_item-1""item-2_item-3""item-4_item-5""item-6_item-7"] lg:[grid-template-areas:"._item-1_item-1""._item-1_item-1""item-2_item-3_item-4""item-2_item-3_item-5""item-6_item-6_item-7""item-6_item-6_item-7"]',
        className,
      )}
      {...props}
    >
      <BentoGrid.Item className='justify-between gap-3 [grid-area:item-1]'>
        <Badge
          className='w-fit'
          variants={{ color: 'inverted', style: 'outline' }}
        >
          #about
        </Badge>

        <Text>
          <Svg.HandHorns className='inline-block h-4 w-4 -translate-y-0.5' /> Hi
          — I&apos;m Richard Passos, a full stack developer based in Brazil.
          When I&apos;m not coding, you can catch me in the gaming world —
          I&apos;m a huge fan, especially when it comes to rogue-like games.
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='justify-between [grid-area:item-2]'>
        <GlobeIcon className='h-8 w-8' />

        <Text className='text-4xl'>Based in Brazil, GMT-3</Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='items-center justify-around [grid-area:item-3]'>
        <Text className='text-center text-2xl'>
          A pinch of
          <br />
          soft & hard skills
        </Text>

        <InfinityScroll
          as='ul'
          className='[--duration:7.5s] [--gap:theme(spacing.3)] hover:paused'
        >
          {selectedSkills.map((skill, i) => (
            <li key={skill}>
              <Badge
                className='px-3.5 py-1.5 text-sm'
                variants={{ style: i % 2 === 0 ? 'solid' : 'outline' }}
              >
                {skill}
              </Badge>
            </li>
          ))}
        </InfinityScroll>
      </BentoGrid.Item>

      <BentoGrid.Item className='min-h-0 justify-between gap-3 p-5 [grid-area:item-4]'>
        <RocketIcon className='h-5 w-5' />

        <Text className='font-semibold leading-tight'>
          Improving a little bit every day.
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='min-h-0 justify-between gap-3 p-5 [grid-area:item-5]'>
        <Svg.GameController className='h-5 w-5' />

        <Text className='font-semibold leading-tight'>
          I love to play games.
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='items-center [grid-area:item-6]'>
        <Text.Title className='text-base'>my local time</Text.Title>

        <Text className='text-[clamp(1rem,var(--font-size),6rem)] font-bold [--font-size:15vw] sm:[--font-size:7vw]'>
          <LocalTime />
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='border-none p-0 text-center [grid-area:item-7]'>
        <Link
          className='group flex h-full w-full flex-col gap-1.5 rounded-inherit border p-5 no-underline transition-colors hover:border-transparent hover:bg-content/10'
          href='https://www.buymeacoffee.com/richardp.dev'
        >
          <div className='mb-3 flex aspect-square h-10 items-center justify-center rounded-sm border transition-colors group-hover:border-transparent group-hover:bg-content/20'>
            <Svg.Coffee className='h-6 w-6' />
          </div>

          <Text>Buy me a coffee</Text>

          <Text.Small>buymeacoffee.com</Text.Small>
        </Link>
      </BentoGrid.Item>
    </BentoGrid>
  );
};

const ListContactPage = ({ className, ...props }) => {
  const content = ['Personality', 'Hobbys', 'Background'];

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center',
        className,
      )}
      {...props}
    >
      <ListHorizontalScroll>
        {content.map((content, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={i % 2 === 1 ? 5 : -5}
            className='odd:rotate-[.5deg] even:-rotate-[.5deg] [&>div>div]:gap-8'
            key={content}
          >
            <span className='mr-8'>{content}</span>•
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll>

      <ListHorizontalScroll.Link
        className='absolute'
        href='/contact'
      >
        Explore
      </ListHorizontalScroll.Link>
    </div>
  );
};

export default HomeAboutSection;
