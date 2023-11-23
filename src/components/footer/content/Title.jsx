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
      className={cn('group no-underline', className)}
      href='/contact'
      onMouseLeave={() => dispatch(setVariant({ theme: CONTENT_THEME }))}
      variant={{ theme: CONTENT_THEME }}
      {...props}
    >
      <TextTitle className='flex flex-col items-center gap-x-font-blank-space text-9xl uppercase'>
        Let&apos;s work{' '}
        <span>
          to{''}
          <ScrollAnimationTransform
            className='outline-text relative before:pointer-events-none before:absolute before:w-0 before:overflow-hidden before:transition-[width] before:content-[attr(data-text)] before:[-webkit-text-fill-color:currentColor] group-hover:before:w-full'
            config={animationConfig}
            data-text='gether'
            smoothConfig={{ scroll: scrollSmoothConfig }}
          >
            <span>gether</span>
          </ScrollAnimationTransform>
        </span>
      </TextTitle>
    </CursorLink>
  );
};

export default FooterContentTitle;
