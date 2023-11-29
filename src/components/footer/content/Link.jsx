'use client';

import { useDispatch } from 'react-redux';

import { setVariant } from '@/redux';
import { cn } from '@/utils';

import InfinityScroll from '../../infinity-scroll';
import { CursorLink } from '../../link';
import { CONTENT_THEME } from '../Root';

const FooterContentLink = ({ className, ...props }) => {
  const dispatch = useDispatch();

  return (
    <CursorLink
      className={cn(
        'group w-full overflow-hidden text-[12rem] font-bold uppercase leading-none no-underline',
        className,
      )}
      href='/contact'
      onMouseLeave={() => dispatch(setVariant({ theme: CONTENT_THEME }))}
      variant={{ theme: CONTENT_THEME }}
      {...props}
    >
      <InfinityScroll className='[--duration:25s] [--gap:--font-blank-space]'>
        <span className='outline-text'>CONTACT ME</span>{' '}
        <span>• CONTACT ME •</span>
      </InfinityScroll>
    </CursorLink>
  );
};

export default FooterContentLink;
