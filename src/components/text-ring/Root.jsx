import { cn } from '@/utils';

const TextRing = ({ text, side = 1.15, className, style, ...props }) => {
  const TOTAL_CHARACTERS = text.length,
    INNER_ANGLE = 360 / TOTAL_CHARACTERS,
    RADIUS = side / Math.sin(INNER_ANGLE / (180 / Math.PI));

  return (
    <div
      className={cn(
        'relative flex animate-[spin_6s_linear_infinite] items-center justify-center rounded-full text-xs font-semibold uppercase tracking-widest',
        className,
      )}
      style={{
        '--total-chars': TOTAL_CHARACTERS,
        '--radius': RADIUS,
        ...style,
      }}
      {...props}
    >
      {text.split('').map((char, i) => (
        <span
          aria-hidden
          className='absolute'
          key={i}
          style={{
            '--char-idx': i,
            transform: `rotate(calc(360deg / var(--total-chars) * var(--char-idx))) translateY(calc(var(--radius) * -${side}ch))`,
          }}
        >
          {char}
        </span>
      ))}

      <span className='sr-only'>Your text here!</span>
    </div>
  );
};

export default TextRing;
