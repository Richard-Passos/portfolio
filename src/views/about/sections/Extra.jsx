import { Section } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Image, Separator, Text } from '@/components/ui';
import { cn } from '@/utils';

const ANIMATION_CONFIG = {
  y1: {
    prop: 'y',
    propPoints: ['10%', '-15%'],
  },
  y2: {
    prop: 'y',
    propPoints: ['-13%', '0%'],
  },
  y3: {
    prop: 'y',
    propPoints: ['20%', '-40%'],
  },
};

const AboutViewExtraSection = ({ className, data = [], ...props }) => {
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
            <Text.Subtitle className='text-xs uppercase text-muted-content'>
              · {data.title}
            </Text.Subtitle>

            <Separator className='mb-xs' />

            <Text className='mt-sm text-lg font-medium first-letter:uppercase'>
              {data.description}
            </Text>
          </li>
        ))}
      </ul>

      <div className='relative md:row-start-1'>
        <ScrollAnimateTransform config={ANIMATION_CONFIG.y1}>
          <div className='w-6-full aspect-[1/1.4] overflow-hidden rounded-3xl max-md:!translate-y-0 md:max-lg:h-full'>
            <ScrollAnimateTransform config={ANIMATION_CONFIG.y2}>
              <Image
                className='h-[115%] w-full object-cover'
                {...data.images?.[0]}
              />
            </ScrollAnimateTransform>
          </div>
        </ScrollAnimateTransform>

        <ScrollAnimateTransform config={ANIMATION_CONFIG.y3}>
          <div className='absolute bottom-0 right-0 aspect-[1/1.4] w-2/3 translate-x-md overflow-hidden rounded-3xl shadow-md max-lg:hidden'>
            <ScrollAnimateTransform config={ANIMATION_CONFIG.y2}>
              <Image
                className='h-[115%] w-full object-cover'
                {...data.images?.[1]}
              />
            </ScrollAnimateTransform>
          </div>
        </ScrollAnimateTransform>
      </div>
    </Section>
  );
};

export default AboutViewExtraSection;
