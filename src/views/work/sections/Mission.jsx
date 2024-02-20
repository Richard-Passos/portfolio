import { ListHorizontalScroll, Section } from '@/components';
import { Icon, Text } from '@/components/ui';
import { cn } from '@/utils';

const WorkViewMissionSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'flex w-full flex-col items-center justify-center',
        className,
      )}
      {...props}
    >
      <Text.Title
        className='mb-sm flex flex-col items-center text-center font-bold'
        variants={{ size: 'xl' }}
      >
        <span className='text-[.15em] tracking-normal text-muted-content'>
          My
        </span>{' '}
        <span className='ml-auto'>mission</span>
      </Text.Title>

      <WorkViewMissionListSection className='mb-md' />

      <Text className='max-w-xl text-center text-lg font-medium'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        doloremque aspernatur architecto dolor eos. Harum minima modi deserunt
        culpa commodi! Facilis eveniet ad illo delectus?
      </Text>
    </Section>
  );
};

const WorkViewMissionListSection = (props) => {
  const content = [
    { text: 'Improve', icon: 'Rocket' },
    { text: 'Inspire ', icon: 'Globe' },
    { text: 'Repeat', icon: 'Smile' },
  ];

  return (
    <ListHorizontalScroll {...props}>
      {content.map(({ text, icon }, i) => (
        <Text.Title
          asChild
          className='py-md font-bold [--gap:theme(spacing.sm)] odd:-rotate-1 even:rotate-1'
          key={content}
          variants={{ size: 'xl' }}
        >
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? 1 : -1)}
          >
            <span>{text}</span>{' '}
            <Icon
              className='size-[1em]'
              name={icon}
            />{' '}
            <span className='opacity-30 dark:opacity-10'>{text}</span>{' '}
            <Icon
              className='size-[1em] opacity-30 dark:opacity-10'
              name={icon}
            />{' '}
            <span className='opacity-30 dark:opacity-10'>{text}</span>{' '}
            <Icon
              className='size-[1em]'
              name={icon}
            />
          </ListHorizontalScroll.Item>
        </Text.Title>
      ))}
    </ListHorizontalScroll>
  );
};

export default WorkViewMissionSection;
