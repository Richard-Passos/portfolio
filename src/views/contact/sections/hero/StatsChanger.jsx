import { StatsChanger } from '@/components';
import { Text } from '@/components/ui';
import { RotateIcon } from '@/components/ui/icon/icons';
import { stats } from '@/constants';
import { cn } from '@/utils';

const ContactViewHeroStatsChangerSection = ({ className, ...props }) => {
  return (
    <StatsChanger
      className={cn('my-auto ml-md', className)}
      lastIdx={stats.length - 1}
      {...props}
    >
      <StatsChanger.Action>
        <RotateIcon />
      </StatsChanger.Action>

      <ul className='relative w-40'>
        {stats.map(({ title, value }, i) => (
          <StatsChanger.Item
            idx={i}
            key={title}
          >
            <Text.Title className='text-base/tight text-muted-content transition-[clip-path] [clip-path:inset(100%_0_0_0)] group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
              {value}
            </Text.Title>

            <Text className='text-sm text-muted-content transition-[clip-path] [clip-path:inset(100%_0_0_0)] group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
              {title}
            </Text>
          </StatsChanger.Item>
        ))}

        <StatsChanger.Timerbar />
      </ul>
    </StatsChanger>
  );
};

export default ContactViewHeroStatsChangerSection;
