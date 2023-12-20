import { cn } from '@/utils';

const TextRing = ({ text, side = 1.15, className, style, ...props }) => {
  const TOTAL_CHARACTERS = text.length,
    INNER_ANGLE = 360 / TOTAL_CHARACTERS,
    RADIUS = side / Math.sin(INNER_ANGLE / (180 / Math.PI));

  return (
    <div
      className={cn(
        'absolute flex animate-[spin_6s_linear_infinite] items-center justify-center rounded-full text-xs font-semibold uppercase tracking-widest',
        className,
      )}
      style={{
        '--total-chars': TOTAL_CHARACTERS,
        '--radius': RADIUS,
        '--side': `${side}ch`,
        ...style,
      }}
      {...props}
    >
      {text.split('').map((char, i) => (
        <span
          aria-hidden
          className='absolute -translate-y-[var(--radius)*var(--side)] rotate-[calc(360deg/var(--total-chars)*var(--char-idx))] [transform:rotate(var(--tw-rotate))translate(var(--tw-translate-x),var(--tw-translate-y))skewX(var(--tw-skew-x))skewY(var(--tw-skew-y))scaleX(var(--tw-scale-x))scaleY(var(--tw-scale-y))]'
          key={i}
          style={{
            '--char-idx': i,
          }}
        >
          {char}
        </span>
      ))}

      <span className='sr-only'>{text}</span>
    </div>
  );
};

export default TextRing;
