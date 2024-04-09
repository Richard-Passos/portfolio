import { DataChanger } from '@/components';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui';
import { RotateIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

const ContactViewHeroSectionDataChanger = ({
  className,
  data = [],
  ...props
}) => {
  return (
    <DataChanger
      className={cn(
        'relative flex size-full items-center gap-xs overflow-hidden',
        className,
      )}
      lastIdx={data.length - 1}
      {...props}
    >
      <DataChanger.Action asChild>
        <MagneticButton
          className='h-12 shrink-0 [&_svg]:size-[40%]'
          variants={{ color: 'muted', size: 'sm' }}
        >
          <RotateIcon />
        </MagneticButton>
      </DataChanger.Action>

      {data.map((data, i) => (
        <DataChanger.Item
          idx={i}
          key={data.title}
        >
          <Text.Title className='text-sm uppercase transition-[clip-path] [clip-path:inset(100%_0_0_0)] group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
            {data.title}
          </Text.Title>

          <Text className='text-sm text-muted-content transition-[clip-path] [clip-path:inset(100%_0_0_0)] first-letter:uppercase group-data-active:duration-500 group-data-active:[clip-path:inset(0)]'>
            {data.description}
          </Text>
        </DataChanger.Item>
      ))}

      <DataChanger.Timerbar className='absolute inset-x-0 bottom-0 w-auto' />
    </DataChanger>
  );
};

export default ContactViewHeroSectionDataChanger;
