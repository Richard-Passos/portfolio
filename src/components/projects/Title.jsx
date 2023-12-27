'use client';

import { TextSubtitle } from '@/components/ui/text';
import { cn } from '@/utils';

import Char from './Char';

const ProjectsTitle = ({ text, className, animationType, ...props }) => {
  const chars = text.split('');

  return (
    <TextSubtitle
      aria-label={text}
      className={cn('max-w-[90%] text-center uppercase', className)}
      {...props}
    >
      {chars.map((char, i) => (
        <Char
          animationType={animationType}
          chars={chars}
          idx={i}
          key={i}
        >
          {char}
        </Char>
      ))}
    </TextSubtitle>
  );
};

export default ProjectsTitle;
