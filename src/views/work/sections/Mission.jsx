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
      <WorkViewMissionListSection className='mb-md' />

      <Text className='w-9/10 max-w-xl text-center text-xl/relaxed font-medium'>
        That&apos; my mission — Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Velit doloremque aspernatur architecto dolor eos.
        Harum minima modi deserunt culpa commodi! Facilis eveniet ad illo
        delectus?
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
          className='py-[.5em] font-semibold [--gap:theme(spacing.sm)] *:*:[--rotate:calc(var(--x)*(360deg/12.5))] odd:-rotate-1 even:rotate-1'
          key={content}
          variants={{ size: 'xl' }}
        >
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.5 * i) * (i % 2 === 0 ? 1 : -1)}
          >
            <span>{text}</span>{' '}
            <Icon
              className='size-[1em] rotate-[--rotate]'
              name={icon}
            />{' '}
            <span className='opacity-30 dark:opacity-10'>{text}</span>{' '}
            <Icon
              className='size-[1em] rotate-[--rotate] opacity-30 dark:opacity-10'
              name={icon}
            />{' '}
            <span className='opacity-30 dark:opacity-10'>{text}</span>{' '}
            <Icon
              className='size-[1em] rotate-[--rotate]'
              name={icon}
            />
          </ListHorizontalScroll.Item>
        </Text.Title>
      ))}
    </ListHorizontalScroll>
  );
};

export default WorkViewMissionSection;
