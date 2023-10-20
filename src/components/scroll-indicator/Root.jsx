'use client';

import { motion } from 'framer-motion';

import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ScrollIndicator = ({ className, ...props }) => {
  const transition = {
      duration: 1.25,
      ease: 'backInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
    animations = [
      {
        animate: {
          y: ['-500%', '0%'],
        },
        transition,
      },
      {
        animate: {
          y: ['0%', '500%'],
        },
        transition,
      },
    ];

  return (
    <section
      className={cn(
        'absolute bottom-0 flex flex-col items-center gap-6 opacity-25 dark:opacity-10',
        className,
      )}
      {...props}
    >
      <Text className='vertical-text font-bold'>Scroll</Text>

      <div className='relative h-28 overflow-hidden text-content [mask-image:linear-gradient(to_bottom,_transparent_0%,_#000_10%,_#000_90%,_transparent_100%)]'>
        <motion.span
          className='absolute top-0 h-1/5 w-0.5 bg-current'
          {...animations[0]}
        />

        <motion.span
          className='relative h-1/5 w-0.5 bg-current'
          {...animations[1]}
        />
      </div>
    </section>
  );
};

export default ScrollIndicator;
