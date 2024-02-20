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
        'grid w-9/10 max-w-screen-lg gap-x-lg gap-y-sm sm:grid-cols-2',
        className,
      )}
      {...props}
    >
      <ul className='max-w-screen-sm space-y-md pt-8'>
        {EXTRA_CONTENT.map(({ title, content }) => (
          <li
            className='flex flex-col gap-4'
            key={title}
          >
            <Text.Subtitle className='text-xs uppercase text-muted-content'>
              • {title}
            </Text.Subtitle>

            <Separator />

            <Text className='mt-2 text-xl font-medium'>{content}</Text>
          </li>
        ))}
      </ul>

      <div className='relative sm:row-start-1'>
        <ScrollAnimationTransform config={{ propPoints: ['10%', '-15%'] }}>
          <span className='aspect-[1/1.35] w-full rounded-3xl bg-blue-500 ' />
        </ScrollAnimationTransform>

        <ScrollAnimationTransform config={{ propPoints: ['20%', '-40%'] }}>
          <span className='absolute bottom-0 right-0 aspect-[1/1.35] w-2/3 rounded-3xl bg-red-500 shadow-md [--tw-translate-x:25%] max-sm:hidden' />
        </ScrollAnimationTransform>
      </div>
    </Section>
  );
};

export default AboutViewExtraSection;
