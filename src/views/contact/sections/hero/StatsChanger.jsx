'use client';

import { useState } from 'react';

import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui';
import { RotateIcon } from '@/components/ui/icon/icons';
import { stats } from '@/constants';
import { cn } from '@/utils';

const ContactViewHeroStatsChangerSection = ({ className, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const stat = stats[activeIdx];

  return (
    <section
      className={cn('ml-md flex grow items-center', className)}
      {...props}
    >
      <MagneticButton
        aria-label='Switch'
        className='mr-4 h-12 focus-visible:outline-content [&_svg]:size-1/2'
        limit={0.2}
        onClick={() =>
          setActiveIdx((state) => (state >= stats.length - 1 ? 0 : state + 1))
        }
        variants={{ color: 'muted' }}
      >
        <RotateIcon />
      </MagneticButton>

      <section>
        <Text.Title className='mb-1 text-sm text-muted-content'>
          {stat.value}
        </Text.Title>

        <Text className='text-xs text-muted-content'> {stat.title}</Text>
      </section>
    </section>
  );
};

export default ContactViewHeroStatsChangerSection;
