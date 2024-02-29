import { Section } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Separator, Text } from '@/components/ui';
import { cn } from '@/utils';

const EXTRA_CONTENT = [
  {
    title: 'Personality',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit reiciendis enim maxime facilis molestiae distinctio cupiditate obcaecati eligendi eveniet, tempore iure, tempora, neque laudantium.',
  },
  {
    title: 'Mission',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione rem deserunt, fugiat doloribus provident consectetur.',
  },
];

const AboutViewExtraSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'grid w-9/10 max-w-screen-lg gap-x-sm gap-y-md md:grid-cols-2 lg:gap-x-lg',
        className,
      )}
      {...props}
    >
      <ul className='max-w-screen-sm space-y-md sm:py-md'>
        {EXTRA_CONTENT.map(({ title, content }) => (
          <li
            className='flex flex-col'
            key={title}
          >
            <Text.Subtitle className='mb-xs text-xs uppercase text-muted-content'>
              · {title}
            </Text.Subtitle>

            <Separator className='mb-sm' />

            <Text className='text-xl font-medium'>{content}</Text>
          </li>
        ))}
      </ul>

      <div className='relative md:row-start-1'>
        <ScrollAnimationTransform config={{ propPoints: ['10%', '-15%'] }}>
          <span className='size-full rounded-3xl bg-blue-500 max-md:aspect-[1/1.4] max-md:!translate-y-0 lg:aspect-[1/1.4]' />
        </ScrollAnimationTransform>

        <ScrollAnimationTransform config={{ propPoints: ['20%', '-40%'] }}>
          <span className='absolute bottom-0 right-0 aspect-[1/1.4] w-2/3 rounded-3xl bg-red-500 shadow-md [--tw-translate-x:25%] max-lg:hidden' />
        </ScrollAnimationTransform>
      </div>
    </Section>
  );
};

export default AboutViewExtraSection;
