'use client';

import { motion, useTransform } from 'framer-motion';

import { cn } from '@/utils';

const ProjectsChar = ({
  progress,
  className,
  animationType = 'onScroll',
  chars,
  idx,
  children,
  ...props
}) => {
  const start = (_getCharIdx(chars, idx) / chars.length) * 2,
    end = start + 1 / chars.length;

  const y = useTransform(progress, [start, end], ['100%', '0%']);

  const animations = {
    onScroll: 'translate-y-[--y]',
    onGroupHover:
      'translate-y-full transition-transform duration-300 group-hover:translate-y-0 group-hover:[transition-delay:--delay]',
  };

  return (
    <span
      aria-hidden
      className={cn('overflow-hidden', className)}
      {...props}
    >
      <motion.span
        className={cn('min-w-[--font-blank-space]', animations[animationType])}
        style={{ '--y': y, '--delay': _getCharIdx(chars, idx) * 0.0375 + 's' }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const _getCharIdx = (chars, i) => {
  const middleIdx = Math.floor(chars.length / 2);

  let idx =
    chars.length % 2 === 0 && i < middleIdx ? middleIdx - 1 - i : middleIdx - i;
  idx = idx < 0 ? idx * -1 : idx;

  return idx;
};

export default ProjectsChar;
