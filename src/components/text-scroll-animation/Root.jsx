import { cn } from '@/utils';

import Line from './Line';

const TextScrollAnimation = ({ lines = [], className, ...props }) => {
  return (
    <span
      aria-label={lines.join(' ')}
      className={cn('flex flex-col', className)}
      {...props}
    >
      {lines.map((line, i) => (
        <Line key={i}>{line}</Line>
      ))}
    </span>
  );
};

export default TextScrollAnimation;
