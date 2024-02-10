'use client';

import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { cn } from '@/utils';

import { Text } from '../../ui/text';

const ProjectsListNumber = ({ className, index, ...props }) => {
  const chars = `${index + 1}`.padStart(2, '0').split('');

  const animationConfig = {
    useScrollConfig: {
      offset: ['0 .9', '0 .7'],
    },
    prop: '--y',
    propPoints: ['0%', '-100%'],
  };

  return (
    <Text
      ari-label={index + 1}
      className={cn(
        'inline-flex translate-y-0.5 text-sm font-medium text-muted-content',
        className,
      )}
      {...props}
    >
      {chars.map((char, i, arr) =>
        i === arr.length - 1 ? (
          <ScrollAnimationTransform
            aria-hidden
            config={animationConfig}
            key={i}
          >
            <span className='relative overflow-y-clip'>
              <span className='translate-y-[--y]'>0/</span>

              <span className='absolute left-0 top-full translate-y-[--y]'>
                {char}/
              </span>
            </span>
          </ScrollAnimationTransform>
        ) : (
          <span
            aria-hidden
            key={i}
          >
            {char}
          </span>
        ),
      )}
    </Text>
  );
};

export default ProjectsListNumber;
