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
import { values } from '@/constants';
import { cn } from '@/utils';

const HomeViewAboutSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col items-center gap-lg overflow-x-clip', className)}
      {...props}
    >
      <h2 className='flex w-full flex-col'>
        <ScrollTitle title='ABOUT' />
        <ScrollTitle
          dir='rtl'
          title='ME'
        />
      </h2>

        <Grid />

      <ListContactPage />
    </Section>
  );
};

const Grid = async ({ className, ...props }) => {
  const personalInfo = (await globalsApi.getOne('personal-info')).data || {};

  return (
    <BentoGrid
      className={cn(
        'w-9/10 max-w-screen-lg [grid-template-areas:"item-0""item-1""item-2""item-3""item-4""item-5""item-6"] sm:[grid-template-areas:"item-0_item-0""item-1_item-2""item-3_item-4""item-5_item-6"] lg:[grid-template-areas:"._item-0_item-0""._item-0_item-0""item-1_item-2_item-3""item-1_item-2_item-4""item-5_item-5_item-6""item-5_item-5_item-6"]',
        className,
      )}
      {...props}
    >
      <BentoGrid.ScrollAnimate>
      <BentoGrid.Item idx={0} className='justify-between flex-col min-h-60'>
        <Badge
          className='w-fit'
          variants={{ color: 'inverted', style: 'outline' }}
        >
          #about
        </Badge>

        <Text className='text-muted-content'>
          <Icons.HandHorns
            aria-hidden
            className='inline-block size-4 -translate-y-0.5 fill-content'
          />{' '}
          <span className='inline text-content'>Hey —</span> I&apos;m Richard an
          awesome full stack developer based in Brazil. When I&apos;m not
          coding, you can catch me in the gaming world — I&apos;m a huge fan,
          especially when it comes to rogue-like games.
        </Text>
      </BentoGrid.Item>
      </BentoGrid.ScrollAnimate>

      <BentoGrid.ScrollAnimate>
      <BentoGrid.Item idx={1} className='justify-between flex-col min-h-60'>
        <Icons.Globe />

        <Text className='text-4xl font-medium'>
          Based in {personalInfo.location?.country},{' '}
          {personalInfo.location?.gmt}
        </Text>
      </BentoGrid.Item>
      </BentoGrid.ScrollAnimate>

      <BentoGrid.ScrollAnimate>
      <BentoGrid.Item idx={2} className='flex-col min-h-60 gap-0 p-0'>
        <Icons.Fingerprint className='mt-sm ml-sm' />

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
      </BentoGrid.ScrollAnimate>

      <BentoGrid.ScrollAnimate>
      <BentoGrid.Item idx={3} className='justify-between flex-col'>
        <Icons.Rocket className='h-6 w-6' />

        <Text className='font-medium leading-tight text-muted-content'>
          Improving a little bit every day.
        </Text>
      </BentoGrid.Item>
      </BentoGrid.ScrollAnimate>

      <BentoGrid.ScrollAnimate>
      <BentoGrid.Item idx={4} className='justify-between flex-col'>
        <Icons.GameController className='h-6 w-6' />

        <Text className='font-medium leading-tight text-muted-content'>
          I love to play games.
        </Text>
      </BentoGrid.Item>
      </BentoGrid.ScrollAnimate>

      <BentoGrid.ScrollAnimate>
      <BentoGrid.Item idx={5} className='items-center flex-col justify-center min-h-60'>
        <Text.Subtitle className='text-xs uppercase text-muted-content'>
          my local time
        </Text.Subtitle>

        <Text className='text-[14vw]/none font-bold sm:text-[min(8vw,6rem)]/none'>
          <LocalTime />
        </Text>
      </BentoGrid.Item>
      </BentoGrid.ScrollAnimate>

      <BentoGrid.ScrollAnimate>
       <BentoGrid.Item idx={6} className='hover:primary border-none p-0 min-h-60'>
        <Link
          className='flex size-full flex-col gap-1.5 bg-main rounded-inherit border p-sm no-underline transition-colors hover:focus-visible:outline-main'
          href={personalInfo.buyCoffee?.href}
        >
          <div className='mb-3 flex aspect-square h-10 items-center transition-border justify-center rounded-sm border'>
            <Icons.Coffee className='h-6 w-6' />
          </div>

          <Text className='text-center'>{personalInfo.buyCoffee?.label}</Text>

          <Text.Small className='font-normal transition-color text-center'>
            {personalInfo.buyCoffee?.href?.replace(
              /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/?\n]+).*/gim,
              '$1',
            )}
          </Text.Small>
        </Link>
      </BentoGrid.Item>
      </BentoGrid.ScrollAnimate>
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
