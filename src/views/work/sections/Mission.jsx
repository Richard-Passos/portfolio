import { ListHorizontalScroll, Section } from '@/components';
import { Icon, Text } from '@/components/ui';
import { cn } from '@/utils';

const WorkViewMissionSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col items-center justify-center', className)}
      {...props}
    >
      <WorkViewMissionSectionList data={data.items} />

      <Text className='mt-md w-9/10 max-w-2xl text-center text-lg/relaxed font-medium'>
        {data.description}
      </Text>
    </Section>
  );
};

const WorkViewMissionSectionList = ({ data = [], ...props }) => {
  return (
    <ListHorizontalScroll {...props}>
      {data.map((data, i) => (
        <Text.Title
          asChild
          className='py-[.5em] font-semibold [--gap:.25em] *:*:[--rotate:calc(var(--x)*(360deg/12.5))] odd:-rotate-1 even:rotate-1'
          key={data.text}
          variants={{ size: 'xl' }}
        >
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? 1 : -1)}
          >
            <span>{data.text}</span>{' '}
            <div className='size-[1em] rotate-[--rotate]'>
              <Icon
                className='size-full'
                {...data.icon}
              />
            </div>{' '}
            <span className='opacity-30 dark:opacity-10'>{data.text}</span>{' '}
            <div className='size-[1em] rotate-[--rotate] opacity-30 dark:opacity-10 max-sm:hidden'>
              <Icon
                className='size-full'
                {...data.icon}
              />
            </div>{' '}
            <span className='opacity-30 dark:opacity-10 max-sm:hidden'>{data.text}</span>{' '}
            <div className='size-[1em] rotate-[--rotate]'>
              <Icon
                className='size-full'
                {...data.icon}
              />
            </div>
          </ListHorizontalScroll.Item>
        </Text.Title>
      ))}
    </ListHorizontalScroll>
  );
};

export default WorkViewMissionSection;
