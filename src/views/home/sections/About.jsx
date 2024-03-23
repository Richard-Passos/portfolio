import { globalsApi } from '@/api';
import {
  InfinityScroll,
  BentoGrid,
  ListHorizontalScroll,
  LocalTime,
  ScrollTitle,
  Section,
} from '@/components';
import { Badge, Link, Text } from '@/components/ui';
import Icons from '@/components/ui/icon/icons';
import {  values } from '@/constants';
import { cn } from '@/utils';

const HomeViewAboutSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'relative flex flex-col items-center gap-lg',
        className,
      )}
      {...props}
    >
      <h2 className='flex w-full flex-col'>
        <ScrollTitle title='ABOUT' />
        <ScrollTitle
          dir='rtl'
          title='ME'
        />
      </h2>

        <div className='w-full overflow-x-clip flex justify-center'>
        <Grid />
        </div>

      <ListContactPage />
    </Section>
  );
};

const Grid = async ({ className, ...props }) => {
  const personalInfo = (await globalsApi.getOne('personal-info')).data

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

        <Text className='text-muted-content'>
          <Icons.HandHorns
            aria-hidden
            className='inline-block fill-content size-4 -translate-y-0.5'
          />{' '}
          <span className='inline text-content'>Hey —</span> I'm Richard an awesome full stack developer based in Brazil. When I'm not coding, you can catch me in the gaming world — I'm a huge fan, especially when it comes to  rogue-like games.
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='justify-between [grid-area:item-2]'>
        <Icons.Globe />

        <Text className='text-4xl font-medium'>
          Based in {personalInfo.location.country}, {personalInfo.location.gmt}
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='gap-0 [grid-area:item-3]'>
        <Icons.Fingerprint />

        <div className='my-auto flex flex-col items-center justify-center gap-sm'>
          <Text.Subtitle className='text-center text-3xl font-bold'>
            My values
          </Text.Subtitle>

          <InfinityScroll
            as='ul'
            className='[--duration:7.5s] [--gap:theme(spacing.3)] hover:paused'
          >
            {values.map(({ title }, i) => (
              <Badge
                asChild
                className='px-3.5 py-1.5 text-sm'
                key={title}
                variants={{ color: i % 2 === 0 ? 'primary' : 'muted' }}
              >
                <li>{title}</li>
              </Badge>
            ))}
          </InfinityScroll>
        </div>
      </BentoGrid.Item>

      <BentoGrid.Item className='min-h-0 justify-between gap-3 p-5 [grid-area:item-4]'>
        <Icons.Rocket className='h-5 w-5' />

        <Text className='font-medium leading-tight text-muted-content'>
          Improving a little bit every day.
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='min-h-0 justify-between gap-3 p-5 [grid-area:item-5]'>
        <Icons.GameController className='h-5 w-5' />

        <Text className='font-medium leading-tight text-muted-content'>
          I love to play games.
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='items-center [grid-area:item-6]'>
        <Text.Subtitle className='text-xs uppercase text-muted-content'>
          my local time
        </Text.Subtitle>

        <Text className='text-[14vw]/[1] font-bold sm:text-[min(8vw,6rem)]/[1]'>
          <LocalTime />
        </Text>
      </BentoGrid.Item>

      <BentoGrid.Item className='hover:light border-none p-0 text-center [grid-area:item-7]'>
        <Link
          className='flex h-full w-full flex-col gap-1.5 rounded-inherit border p-5 no-underline transition-all hover:focus-visible:outline-main '
          href={personalInfo.buyMeACoffeHref}
        >
          <div className='mb-3 flex aspect-square h-10 items-center justify-center rounded-sm border transition-border'>
            <Icons.Coffee className='h-6 w-6' />
          </div>

          <Text>Buy me a coffee</Text>

          <Text.Small className='font-normal transition-colors'>
            buymeacoffee.com
          </Text.Small>
        </Link>
      </BentoGrid.Item>
    </BentoGrid>
  );
};

const ListContactPage = ({ className, ...props }) => {
  const content = ['Background', 'Hobbys', 'Personality'];

  return (
    <div
      className={cn('flex w-full flex-col items-center gap-md', className)}
      {...props}
    >
      <ListHorizontalScroll>
        {content.map((content, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? -1 : 1)}
            className='[--gap:theme(spacing.4)] odd:rotate-[.5deg] even:-rotate-[.5deg]'
            key={content}
          >
            <span>{content}</span> ·{' '}
            <span className='opacity-30 dark:opacity-10'>{content}</span>{' '}
            <span className='opacity-30 dark:opacity-10'>·</span>{' '}
            <span className='opacity-30 dark:opacity-10'>{content}</span> ·
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll>

      <ListHorizontalScroll.Link href='/about'>
        Explore
      </ListHorizontalScroll.Link>
    </div>
  );
};

export default HomeViewAboutSection;
