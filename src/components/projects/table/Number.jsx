'use client';

import { ScrollAnimate } from '@/components/scroll-animate';
import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ANIAMTION_CONFIG = {
  scrollConfig: {
    offset: ['0 .9', '0 .7'],
  },
  prop: '--y',
  propPoints: ['0%', '-100%'],
};

const ProjectsTableNumber = ({ className, index, ...props }) => {
  const chars = `${index + 1}`.padStart(2, '0').split('');

  return (
    <Text
      aria-label={index + 1}
      className={cn(
        'inline-flex translate-y-0.5 text-sm font-medium text-muted-content',
        className,
      )}
      {...props}
    >
      {chars.map((char, i, arr) =>
        i === arr.length - 1 ? (
          <ScrollAnimate
            config={ANIAMTION_CONFIG}
            key={i}
          >
            <span className='relative overflow-y-clip'>
              <span className='translate-y-[--y]'>0/</span>

              <span className='absolute left-0 top-full translate-y-[--y]'>
                {char}/
              </span>
            </span>
          </ScrollAnimate>
        ) : (
          <span
            key={i}
          >
            {char}
          </span>
        ),
      )}
    </Text>
  );
};

export default ProjectsTableNumber;
