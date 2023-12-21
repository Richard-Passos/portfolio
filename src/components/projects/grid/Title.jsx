'use client';

import { TextSubtitle } from '@/components/ui/text';
import { cn } from '@/utils';

const ProjectsGridTitle = ({ text, className, ...props }) => {
  const chars = text.split('');

  return (
    <span
      className={cn('absolute max-w-[90%]', className)}
      {...props}
    >
      <TextSubtitle
        aria-label={text}
        className='text-center text-[9vw] uppercase sm:text-[min(4vw,2.25rem)]'
      >
        {chars.map((char, i) => (
          <span
            aria-hidden
            className='overflow-hidden'
            key={i}
          >
            <span
              className='min-w-[--font-blank-space] translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:[transition-delay:--delay]'
              style={{ '--delay': _getCharDelay(chars, i) }}
            >
              {char}
            </span>
          </span>
        ))}
      </TextSubtitle>
    </span>
  );
};

const _getCharDelay = (chars, i) => {
  const middleIdx = Math.floor(chars.length / 2);

  let idx =
    chars.length % 2 === 0 && i < middleIdx ? middleIdx - 1 - i : middleIdx - i;
  idx = idx < 0 ? idx * -1 : idx;

  return idx * 0.0375 + 's';
};

export default ProjectsGridTitle;
