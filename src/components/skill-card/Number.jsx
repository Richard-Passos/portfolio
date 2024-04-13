import { cn } from '@/utils';

import { Text } from '../ui/text';

const SkillCardNumber = ({ idx, className, ...props }) => {
  return (
    <Text
      className={cn('text-4xl font-bold text-muted', className)}
      {...props}
    >
      {`${idx + 1}`.padStart(2, '0')}/
    </Text>
  );
};

export default SkillCardNumber;
