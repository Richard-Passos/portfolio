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
      offset: ['0 .75', '0 .5'],
    },
    prop: 'x',
    propPoints: ['150%', '0%'],
  };

  const dispatch = useDispatch();

  return (
    <CursorLink
      className={cn('my-auto', className)}
      href='/contact'
      onMouseLeave={() => dispatch(setVariant({ theme: CONTENT_THEME }))}
      variant={{ theme: CONTENT_THEME }}
      {...props}
    >
      <TextTitle className='flex gap-x-font-blank-space text-9xl'>
        <span>Let&apos;s work</span>

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
