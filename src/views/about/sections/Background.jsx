import { Lines, ScrollTitle, TextScrollAnimate } from '@/components';
import { ScrollAnimate } from '@/components/scroll-animate';
import { Separator, Text } from '@/components/ui';
import { cn } from '@/utils';

const AboutViewBackgroundSection = ({ className, ...props }) => {
  const animationConfig = {
    scrollConfig: { offset: ['1 1', '1 0'] },
    prop: '--y',
    propPoints: ['0%', '50%'],
  };

  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center pb-lg lg:pt-md',
        className,
      )}
      {...props}
    >
      <h2 className='mb-md w-full'>
        <ScrollTitle title='WHO I AM' />
      </h2>

      <section className='mb-lg grid w-9/10 max-w-screen-xl gap-sm sm:grid-cols-2'>
        <Text className='text-4xl/tight font-medium max-sm:text-center sm:max-w-lg md:text-5xl/tight'>
          <TextScrollAnimate text='We help our clients entertain, inform, and inspire the world.' />
        </Text>

        <div className='sm:max-w-lg sm:justify-self-end'>
          <Text className='mb-4 text-muted-content max-sm:text-center sm:indent-4'>
            I&apos;m Richard an awesome full stack developer based in Brazil.
            When I&apos;m not coding, you can catch me in the gaming world —
            I&apos;m a huge fan, especially when it comes to rogue-like games.
          </Text>

          <Text className='text-muted-content max-sm:text-center sm:indent-4'>
            I&apos;m Richard an awesome full stack developer based in Brazil.
            When I&apos;m not coding, you can catch me in the gaming world —
            I&apos;m a huge fan, especially when it comes to rogue-like games.
          </Text>
        </div>
      </section>

      <section className='grid w-9/10 max-w-screen-lg gap-x-sm gap-y-md md:grid-cols-2 lg:gap-x-md'>
        <ScrollAnimate config={animationConfig}>
          <div className='w-full rounded-3xl bg-blue-500 max-md:aspect-video md:h-2/3 md:translate-y-[--y] lg:h-9/10 lg:translate-y-[calc(var(--y)*20/90)]' />
        </ScrollAnimate>

        <section className='md:py-lg'>
          <Text.Subtitle className='mb-xs text-xs uppercase text-muted-content'>
            · Background
          </Text.Subtitle>

          <Separator className='mb-sm' />

          <Text className='mb-sm text-xl font-medium'>
            <TextScrollAnimate
              className='sm:first:*:ml-4'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis inventore eius facere sunt ut culpa. Eaque iste pariatur a doloribus enim alias rerum! Ab ex incidunt, aliquid nostrum rem, non quasi molestiae eos dolorum quo labore repudiandae minus alias?'
            />
          </Text>

          <Text className='text-xl font-medium'>
            <TextScrollAnimate
              className='sm:first:*:ml-4'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo similique cum maxime praesentium nam inventore reiciendis iste ad, sequi, eligendi rem eum maiores. Aliquid beatae voluptatem praesentium perferendis quam?'
            />
          </Text>
        </section>
      </section>

      <Lines />
    </section>
  );
};

export default AboutViewBackgroundSection;
