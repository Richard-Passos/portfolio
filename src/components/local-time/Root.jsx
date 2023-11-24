'use client';

import { useLocalTime } from '@/hooks';
import { cn } from '@/utils';

const LocalTime = ({ options, className, ...props }) => {
  const localTime = useLocalTime(options);

  return (
    <span
      className={cn('inline-flex gap-font-blank-space', className)}
      {...props}
    >
      {localTime.split(' ').map((content, i) => (
        <span key={i}>{content}</span>
      ))}
    </span>
  );
};

export default LocalTime;
