import { Lines, ScrollTitle, TextScrollAnimation } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Separator, Text } from '@/components/ui';
import { aboutText } from '@/constants/texts';
import { cn } from '@/utils';

const AboutViewBackgroundSection = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex w-full flex-col items-center pb-lg pt-md',
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

        <section className='space-y-xs sm:max-w-lg sm:justify-self-end'>
          <Text className='text-muted-content max-sm:text-center sm:indent-4'>
            {aboutText}
          </Text>

          <Text className='text-muted-content max-sm:text-center sm:indent-4'>
            {aboutText}
          </Text>
        </section>
      </section>

      <section className='grid w-9/10 max-w-screen-lg gap-md md:grid-cols-2'>
        <ScrollAnimationTransform config={{ propPoints: ['10%', '-15%'] }}>
          <span className='aspect-[1/1.4] w-full rounded-3xl bg-blue-500 max-lg:hidden' />
        </ScrollAnimationTransform>

        <section className='h-fit md:col-end-3 lg:py-md'>
          <Text.Subtitle className='mb-xs text-xs uppercase text-muted-content'>
            • Background
          </Text.Subtitle>

          <Separator className='mb-sm' />

          <section className='space-y-sm'>
            <Text className='text-xl font-medium'>
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
      </section>

      <Lines />
    </section>
  );
};

export default AboutViewBackgroundSection;
