import { TextScrollAnimation } from '@/components';
import { Separator, Text } from '@/components/ui';
import { stats } from '@/constants';
import { cn } from '@/utils';

import Card from './Card';

const WorkViewWhyMeStatsSection = ({ className, ...props }) => {
  return (
    <section
      className={cn('w-9/10 max-w-screen-lg space-y-md', className)}
      {...props}
    >
      <section className='flex max-w-[calc(theme(screens.lg)/2)] flex-col gap-sm sm:ml-auto sm:pl-xs'>
        <Text.Title className='text-xs uppercase text-muted-content'>
          • Stats
        </Text.Title>

        <Separator />

        <Text className='text-lg md:text-2xl'>
          <TextScrollAnimation
            className='max-sm:text-center'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae voluptatibus tenetur, harum sit minus.'
          />
        </Text>
      </section>

      <ul className='grid gap-sm md:grid-cols-2'>
        {stats.map((data, i) => (
          <Card
            key={i}
            {...data}
          />
        ))}
      </ul>
    </section>
  );
};

export default WorkViewWhyMeStatsSection;
