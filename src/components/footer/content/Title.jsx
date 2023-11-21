'use client';

import { useDispatch } from 'react-redux';

import { scrollSmoothConfig } from '@/components/smooth-scroll';
import { setVariant } from '@/redux';
import { cn } from '@/utils';

import { CursorLink } from '../../link';
import { ScrollAnimationTransform } from '../../scroll-animation';
import { TextTitle } from '../../ui/text';
import { CONTENT_THEME } from '../Root';

const FooterContentTitle = ({ className, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['1 1', '3 1'],
    },
    prop: 'x',
    propPoints: ['200%', '0%'],
  };

  const dispatch = useDispatch();

  return (
    <CursorLink
      className={cn('underline-offset-4 hover:underline-offset-8', className)}
      href='/contact'
      onMouseLeave={() => dispatch(setVariant({ theme: CONTENT_THEME }))}
      variant={{ theme: CONTENT_THEME }}
      {...props}
    >
      <TextTitle className='flex flex-wrap justify-center gap-x-font-blank-space text-[7rem] leading-none'>
        Let&apos;s work
        <ScrollAnimationTransform
          className='outline-text'
          config={animationConfig}
          smoothConfig={{ scroll: scrollSmoothConfig }}
        >
          <span>together</span>
        </ScrollAnimationTransform>
      </TextTitle>
    </CursorLink>
  );
};

export default FooterContentTitle;
