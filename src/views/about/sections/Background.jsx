import { Lines, ScrollTitle, TextScrollAnimation } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Separator, Text } from '@/components/ui';
import { aboutText } from '@/constants/texts';
import { cn } from '@/utils';

const AboutViewBackgroundSection = ({ className, ...props }) => {
  const animationConfig = {
    useScrollConfig: { offset: ['1 1', '1 0'] },
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
          <TextScrollAnimation text='We help our clients entertain, inform, and inspire the world.' />
        </Text>

        <Text className='text-muted-content max-sm:text-center sm:max-w-lg sm:justify-self-end sm:indent-4'>
          {aboutText} {aboutText}
        </Text>
      </section>

      <section className='grid w-9/10 max-w-screen-lg gap-x-sm gap-y-md md:grid-cols-2 lg:gap-x-md'>
        <ScrollAnimationTransform config={animationConfig}>
          <div className='md:translate-y-[--y] rounded-3xl max-md:aspect-video w-full bg-blue-500 md:h-2/3 lg:h-9/10 lg:translate-y-[calc(var(--y)*20/90)]' />
        </ScrollAnimationTransform>

        <section className='md:py-lg'>
          <Text.Subtitle className='mb-xs text-xs uppercase text-muted-content'>
            · Background
          </Text.Subtitle>

          <Separator className='mb-sm' />

          <Text className='mb-sm text-xl font-medium'>
            <TextScrollAnimation
              className='sm:first:*:ml-4'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officiis inventore eius facere sunt ut culpa. Eaque iste pariatur a doloribus enim alias rerum! Ab ex incidunt, aliquid nostrum rem, non quasi molestiae eos dolorum quo labore repudiandae minus alias?'
            />
          </Text>

          <Text className='text-xl font-medium'>
            <TextScrollAnimation
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
