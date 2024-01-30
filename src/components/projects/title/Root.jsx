'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';

import { TextSubtitle } from '@/components/ui/text';
import { cn } from '@/utils';

import Char from './Char';

const ProjectsTitle = ({ text, className, animationType, ...props }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0 .8'],
  });

  const chars = text.split('');

  return (
    <TextSubtitle
      aria-label={text}
      className={cn('uppercase', className)}
      ref={ref}
      {...props}
    >
      {chars.map((char, i) => (
        <Char
          animationType={animationType}
          chars={chars}
          idx={i}
          key={i}
          progress={scrollYProgress}
        >
          {char}
        </Char>
      ))}
    </TextSubtitle>
  );
};

export default ProjectsTitle;
