import {
  InfinityScroll,
  BentoGrid,
  Lines,
  ListHorizontalScroll,
  LocalTime,
  ScrollTitle,
  Section,
} from '@/components';
import { Badge, Link, Text } from '@/components/ui';
import Icons from '@/components/ui/icon/icons';
import { personalInfo, selectedSkills } from '@/constants';
import { aboutText } from '@/constants/texts';
import { cn } from '@/utils';

const HomeAboutSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('relative flex flex-col items-center gap-lg', className)}
      {...props}
    >
      <h2 className='flex w-full flex-col'>
        <ScrollTitle title='ABOUT' />
        <ScrollTitle
          dir='toLeft'
          title='ME'
        />
      </h2>

      <Grid />

      <ListContactPage />

      <Lines />
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
          <Icons.HandHorns className='inline-block h-4 w-4 -translate-y-0.5' />{' '}
          {aboutText}
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='justify-between [grid-area:item-2]'>
        <Icons.Globe className='h-8 w-8' />

        <Text className='text-4xl'>
          Based in {personalInfo.location.country}, {personalInfo.location.gmt}
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='items-center justify-around [grid-area:item-3]'>
        <Text.Subtitle className='text-center text-2xl font-medium'>
          A pinch of
          <br />
          soft & hard skills
        </Text.Subtitle>

        <InfinityScroll
          as='ul'
          className='[--duration:7.5s] [--gap:theme(spacing.3)] hover:paused'
        >
          {selectedSkills.map((skill, i) => (
            <Badge
              asChild
              className='px-3.5 py-1.5 text-sm'
              key={skill}
              variants={{ style: i % 2 === 0 ? 'solid' : 'outline' }}
            >
              <li>{skill}</li>
            </Badge>
          ))}
        </InfinityScroll>
      </BentoGrid.Item>

      <BentoGrid.Item className='min-h-0 justify-between gap-3 p-5 [grid-area:item-4]'>
        <Icons.Rocket className='h-5 w-5' />

        <Text className='font-medium leading-tight'>
          Improving a little bit every day.
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='min-h-0 justify-between gap-3 p-5 [grid-area:item-5]'>
        <Icons.GameController className='h-5 w-5' />

        <Text className='font-medium leading-tight'>I love to play games.</Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='items-center [grid-area:item-6]'>
        <Text.Subtitle className='text-base font-medium'>
          my local time
        </Text.Subtitle>

        <Text className='text-[14vw]/[1] font-bold sm:text-[min(8vw,6rem)]/[1]'>
          <LocalTime />
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='border-none p-0 text-center [grid-area:item-7]'>
        <Link
          className='group flex h-full w-full flex-col gap-1.5 rounded-inherit border p-5 no-underline transition-colors hover:border-transparent hover:bg-content/10'
          href={personalInfo.buyMeACoffeHref}
        >
          <div className='mb-3 flex aspect-square h-10 items-center justify-center rounded-sm border transition-colors group-hover:border-transparent group-hover:bg-content/20'>
            <Icons.Coffee className='h-6 w-6' />
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
      className={cn('flex w-full flex-col items-center gap-md', className)}
      {...props}
    >
      <ListHorizontalScroll>
        {content.map((content, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={i % 2 === 1 ? 1 : -1}
            className='[--gap:theme(spacing.8)] odd:rotate-[.5deg] even:-rotate-[.5deg]'
            key={content}
          >
            <span>{content}</span> •{' '}
            <span className='opacity-30 dark:opacity-10'>{content}</span>{' '}
            <span className='opacity-30 dark:opacity-10'>•</span>{' '}
            <span className='opacity-30 dark:opacity-10'>{content}</span> •
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll>

      <ListHorizontalScroll.Link href='/contact'>
        Explore
      </ListHorizontalScroll.Link>
    </div>
  );
};

export default HomeAboutSection;
