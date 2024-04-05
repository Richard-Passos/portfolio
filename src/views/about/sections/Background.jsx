import { ScrollTitle, Section, TextScrollAnimate } from '@/components';
import { ScrollAnimate } from '@/components/scroll-animate';
import { Image, Separator, Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
  y1: {
    scrollConfig: { offset: ['1 1', '1 0'] },
    prop: '--y',
    propPoints: ['0%', '50%'],
  },
  y2: {
    prop: 'y',
    propPoints: ['-13%', '0%'],
  },
};

const AboutViewBackgroundSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col items-center', className)}
      {...props}
    >
      <h2 className='w-full'>
        {data.title?.map((w, i) => (
          <ScrollTitle
            key={i}
            title={w}
          />
        ))}
      </h2>

      <section className='mt-md grid w-9/10 max-w-screen-xl gap-sm sm:grid-cols-2'>
        <Text className='text-4xl/tight font-medium max-sm:text-center sm:max-w-lg md:text-5xl/tight'>
          <TextScrollAnimate text={data.subtitle} />
        </Text>

        <Text className='text-muted-content max-sm:text-center sm:max-w-lg sm:justify-self-end'>
          {data.description}
        </Text>
      </section>

      {data.blocks?.map((data) => (
        <section
          key={data.title}
          className='grid mt-lg w-9/10 max-w-screen-lg gap-md md:grid-cols-2 max-lg:gap-x-sm'
        >
          <ScrollAnimate config={ANIMATION_CONFIG.y1}>
            <div className='relative w-full overflow-hidden bg-muted rounded-3xl max-md:aspect-video md:h-2/3 md:translate-y-[--y] lg:h-9/10 lg:translate-y-[calc(var(--y)*20/90)]'>
                <ScrollAnimate.Transform config={ANIMATION_CONFIG.y2}>
                  <Image
                    className='w-full h-[115%] object-cover'
                    {...data.image}
                  />
                </ScrollAnimate.Transform>
            </div>
          </ScrollAnimate>

          <section className='md:py-lg'>
            <Text.Subtitle className='text-xs uppercase text-muted-content'>
              · {data.title}
            </Text.Subtitle>

            <Separator className='mb-xs' />

            <Text className='mt-sm text-lg/relaxed text-muted-content'>
              {data.description}
            </Text>
          </section>
        </section>
      ))}
    </Section>
  );
};

export default AboutViewBackgroundSection;
