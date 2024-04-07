import { DataChanger } from '@/components';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui';
import { RotateIcon } from '@/components/ui/icon/icons';
import { stats } from '@/constants';
import { cn } from '@/utils';

const ContactViewHeroStatsChangerSection = ({ className, ...props }) => {
  return (
    <DataChanger
      className={cn('flex relative overflow-hidden items-center h-fit w-full max-w-xs p-xs gap-xs border bg-main rounded-full', className)}
      lastIdx={stats.length - 1}
      {...props}
    >
      <DataChanger.Action asChild>
        <MagneticButton
          className='h-14 focus-visible:outline-content [&_svg]:size-[40%]'
          limit={0.4}
          variants={{ color: 'muted' }}
        >
          <RotateIcon />
        </MagneticButton>
      </DataChanger.Action>

        {stats.map(({ title, value }, i) => (
          <DataChanger.Item
            idx={i}
            key={title}
          >
            <Text.Title className='text-xs uppercase transition-[clip-path] [clip-path:inset(100%_0_0_0)] group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
              {value}
            </Text.Title>

            <Text className='text-sm mt-1.5 first-letter:uppercase text-muted-content transition-[clip-path] [clip-path:inset(100%_0_0_0)] group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
              {title}
            </Text>
          </DataChanger.Item>
        ))}

        <DataChanger.Timerbar className='absolute inset-x-xs bottom-0' />
    </DataChanger>
  );
};

export default ContactViewHeroStatsChangerSection;
