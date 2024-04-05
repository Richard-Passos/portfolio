import { ScrollTitle, Section, TextScrollAnimate } from '@/components';
import { ScrollAnimate } from '@/components/scroll-animate';
import { Image, Separator, Text } from '@/components/ui';
import { cn } from '@/utils';

const AboutViewBackgroundSection = ({ className, data = {}, ...props }) => {
  const animationConfig = {
    y1: {
      scrollConfig: { offset: ['1 1', '1 0'] },
      prop: '--y',
      propPoints: ['0%', '50%'],
    },
    y2: {
      scrollConfig: { offset: ['1 1', '1 0'] },
      prop: 'y',
      propPoints: ['-7.5%', '7.5%'],
    },
  };

  return (
    <Section
      className={cn('flex flex-col items-center', className)}
      {...props}
    >
      <h2 className='mb-md w-full'>
        {data.title?.map((w, i) => (
          <ScrollTitle
            key={i}
            title={w}
          />
        ))}
      </h2>

      <section className='mb-lg grid w-9/10 max-w-screen-xl gap-sm sm:grid-cols-2'>
        <Text className='text-4xl/tight font-medium max-sm:text-center sm:max-w-lg md:text-5xl/tight'>
          <TextScrollAnimate text={data.subtitle} />
        </Text>

        <Text className='mb-4 text-muted-content max-sm:text-center sm:max-w-lg sm:justify-self-end sm:indent-4'>
          {data.description}
        </Text>
      </section>

      {data.blocks?.map((data) => (
        <section
          key={data.title}
          className='grid w-9/10 max-w-screen-lg gap-x-sm gap-y-md md:grid-cols-2 lg:gap-x-md'
        >
          <ScrollAnimate config={animationConfig.y1}>
            <div className='relative w-full overflow-hidden rounded-3xl max-md:aspect-video md:h-2/3 md:translate-y-[--y] lg:h-9/10 lg:translate-y-[calc(var(--y)*20/90)]'>
              <div className='absolute -inset-y-[7.5%] inset-x-0'>
                <ScrollAnimate.Transform config={animationConfig.y2}>
                  <Image
                    className='size-full object-cover'
                    {...data.image}
                  />
                </ScrollAnimate.Transform>
              </div>
            </div>
          </ScrollAnimate>

          <section className='md:py-lg'>
            <Text.Subtitle className='mb-xs text-xs uppercase text-muted-content'>
              · {data.title}
            </Text.Subtitle>

            <Separator className='mb-sm' />

            <Text className='text-lg/relaxed text-muted-content'>
              {data.description}
            </Text>
          </section>
        </section>
      ))}
    </Section>
  );
};

export default AboutViewBackgroundSection;
