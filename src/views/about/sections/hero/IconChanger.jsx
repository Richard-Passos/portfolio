'use client';

import { useState } from 'react';

import { Button } from '@/components';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Icon } from '@/components/ui';
import { cn, isFunctionThanCall } from '@/utils';
import { magneticButtonSizes } from '@/components/button/Magnetic';

const SCROLL_OFFSET = ['0 1', '0 0'],
  ICONS = ['Smile', 'Globe', 'Rocket'];

const AboutViewHeroIconChangerSection = ({ className, ...props }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const animationConfig = {
    x: {
      useScrollConfig: {
        offset: SCROLL_OFFSET,
      },
      prop: 'x',
      propPoints: ['-25%', '25%'],
    },
    rotate: {
      useScrollConfig: {
        offset: SCROLL_OFFSET,
      },
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
