'use client';

import { useState } from 'react';

import { Button } from '@/components';
import { magneticButtonSizes } from '@/components/button/Magnetic';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Icon } from '@/components/ui';
import { cn, isFunctionThanCall } from '@/utils';

const ICONS = ['Smile', 'Globe', 'Rocket'];

const AboutViewHeroIconChangerSection = ({ className, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const animationConfig = {
    x: {
      prop: 'x',
      propPoints: ['-25%', '25%'],
    },
    rotate: {
      useScrollRes: 'scrollY',
      prop: 'rotate',
      scrollPoints: [0, 400],
      propPoints: ['0deg', '360deg'],
      useTransformConfig: {
        clamp: false,
      },
    },
  };

  return (
    <ScrollAnimationTransform config={animationConfig.x}>
      <Button
        className={cn(
          'z-10 col-end-3 aspect-square px-0',
          magneticButtonSizes.lg,
          className,
        )}
        {...props}
        onClick={(ev) => {
          setActiveIdx((state) => (state >= ICONS.length - 1 ? 0 : state + 1));

          isFunctionThanCall(props.onClick, ev);
        }}
      >
        <ScrollAnimationTransform
          config={animationConfig.rotate}
          key={activeIdx}
        >
          <Icon
            className='size-[40%]'
            name={ICONS[activeIdx]}
          />
        </ScrollAnimationTransform>
      </Button>
    </ScrollAnimationTransform>
  );
};

export default AboutViewHeroIconChangerSection;
