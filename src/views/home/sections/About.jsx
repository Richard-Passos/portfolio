import { ClockIcon, GlobeIcon } from '@radix-ui/react-icons';

import {
  ChangeTheme,
  ListHorizontalScroll,
  LocalTime,
  ScrollTitle,
  Section,
} from '@/components';
import { Badge } from '@/components/ui';
import { Text, TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

const HomeAboutSection = ({ className, theme, ...props }) => {
  return (
    <Section
      className={cn(
        'relative flex flex-col items-center gap-24 2xl:h-auto 2xl:max-h-none',
        className,
      )}
      {...props}
    >
      <ScrollTitle title='ABOUT' />

      <BentoGrids />

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

const BentoGrids = ({ className, ...props }) => {
  return (
    <ul
      className={cn(
        'grid w-full max-w-screen-lg grid-cols-3 gap-4 [grid-template-areas:"._item-1_item-1""item-2_item-3_item-4""item-5_item-5_item-4"]',
        className,
      )}
      {...props}
    >
      <BentoGridsItem className='flex-col justify-between [grid-area:item-1]'>
        <Badge
          className='w-fit'
          variants={{ color: 'inverted', style: 'outline' }}
        >
          #about
        </Badge>

        <Text>
          👋 Hi — I&apos;m Richard Passos, a full stack developer based in
          Brazil. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
          consequatur? Distinctio deserunt iure repudiandae ducimus!.
        </Text>
      </BentoGridsItem>

      <BentoGridsItem className='flex-col justify-between [grid-area:item-2]'>
        <GlobeIcon className='h-8 w-8' />

        <Text className='text-4xl'>Based in Brazil, GMT-3</Text>
      </BentoGridsItem>

      <BentoGridsItem className='[grid-area:item-3]' />

      <BentoGridsItem className='h-full [grid-area:item-4]' />

      <BentoGridsItem className='items-center justify-center gap-24 [grid-area:item-5]'>
        <ClockIcon className='h-40 w-40 [stroke:theme(spacing.px)]' />

        <section className='flex flex-col items-center gap-2 text-center'>
          <Text>my local time</Text>

          <TextTitle className='text-4xl font-bold'>
            <LocalTime />
          </TextTitle>

          <Text>22/11/2023</Text>
        </section>
      </BentoGridsItem>
    </ul>
  );
};

const BentoGridsItem = ({ className, ...props }) => {
  return (
    <li
      className={cn(
        'flex h-60 rounded-md border bg-main p-6 transition-bg',
        className,
      )}
      {...props}
    />
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
            <Text className='outline-text mr-8 [-webkit-text-stroke-width:theme(spacing.px)]'>
              {content}
            </Text>

            <span className='aspect-square w-[.2em] rounded-full border border-current' />
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
