import { DataChanger } from '@/components';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui';
import { RotateIcon } from '@/components/ui/icon/icons';
import { stats } from '@/constants';
import { cn } from '@/utils';

const ContactViewHeroStatsChangerSection = ({ className, ...props }) => {
  return (
    <DataChanger
      className={cn('mb-md flex w-fit items-center', className)}
      lastIdx={stats.length - 1}
      {...props}
    >
      <DataChanger.Action asChild>
        <MagneticButton
          aria-label='Change statistic'
          className='mr-4 h-14 focus-visible:outline-content [&_svg]:size-[40%]'
          limit={0.4}
          variants={{ color: 'muted' }}
        >
          <RotateIcon />
        </MagneticButton>
      </DataChanger.Action>

      <ul className='relative w-32'>
        {stats.map(({ title, value }, i) => (
          <DataChanger.Item
            className='mb-1.5'
            idx={i}
            key={title}
          >
            <Text.Title className='text-sm/tight text-muted-content transition-[clip-path] [clip-path:inset(100%_0_0_0)] group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
              {value}
            </Text.Title>

            <Text className='text-xs text-muted-content transition-[clip-path] [clip-path:inset(100%_0_0_0)] group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
              {title}
            </Text>
          </DataChanger.Item>
        ))}

        <DataChanger.Timerbar />
      </ul>
    </DataChanger>
  );
};

export default ContactViewHeroStatsChangerSection;
