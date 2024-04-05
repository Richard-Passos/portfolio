import { Section } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Image, Separator, Text } from '@/components/ui';
import { cn } from '@/utils';

const AboutViewExtraSection = ({ className, data = [], ...props }) => {
  const animationConfig = {
    y1: {
      prop: 'y',
      propPoints: ['10%', '-15%'],
    },
    y2: {
      prop: 'y',
      propPoints: ['-7.5%', '7.5%'],
    },
    y3: {
      prop: 'y',
      propPoints: ['20%', '-40%'],
    },
  };

  return (
    <Section
      className={cn(
        'grid w-9/10 max-w-screen-lg gap-x-sm gap-y-md md:grid-cols-2 lg:gap-x-lg',
        className,
      )}
      {...props}
    >
      <ul className='max-w-screen-sm space-y-md sm:py-md'>
        {data.items?.map((data) => (
          <li
            className='flex flex-col'
            key={data.title}
          >
            <Text.Subtitle className='mb-xs text-xs uppercase text-muted-content'>
              · {data.title}
            </Text.Subtitle>

            <Separator className='mb-sm' />

            <Text className='text-lg font-medium first-letter:uppercase'>
              {data.description}
            </Text>
          </li>
        ))}
      </ul>

      <div className='relative md:row-start-1'>
        <ScrollAnimateTransform config={animationConfig.y1}>
          <div className='size-full overflow-hidden rounded-3xl max-md:aspect-[1/1.4] max-md:!translate-y-0 lg:aspect-[1/1.4]'>
            <div className='absolute -inset-y-[7.5%] inset-x-0'>
              <ScrollAnimateTransform config={animationConfig.y2}>
                <Image
                  className='size-full object-cover'
                  {...data.images?.[0]}
                />
              </ScrollAnimateTransform>
            </div>
          </div>
        </ScrollAnimateTransform>

        <ScrollAnimateTransform config={animationConfig.y3}>
          <div className='absolute bottom-0 right-0 aspect-[1/1.4] w-2/3 overflow-hidden rounded-3xl shadow-md [--tw-translate-x:25%] max-lg:hidden'>
            <div className='absolute -inset-y-[7.5%] inset-x-0'>
              <ScrollAnimateTransform config={animationConfig.y2}>
                <Image
                  className='size-full object-cover'
                  {...data.images?.[1]}
                />
              </ScrollAnimateTransform>
            </div>
          </div>
        </ScrollAnimateTransform>
      </div>
    </Section>
  );
};

export default AboutViewExtraSection;
