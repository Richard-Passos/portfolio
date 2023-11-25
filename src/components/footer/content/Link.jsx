'use client';

import { useDispatch } from 'react-redux';

import { setVariant } from '@/redux';
import { cn } from '@/utils';

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
      <span className='relative flex animate-[scroll-x_25s_linear_infinite] whitespace-nowrap [--final-x:-100%]'>
        <span className='ml-font-blank-space'>
          <span className='outline-text'>CONTACT ME</span>{' '}
          <span>• CONTACT ME •</span>
        </span>

        <span className='absolute left-full ml-font-blank-space'>
          <span className='outline-text'>CONTACT ME</span>{' '}
          <span>• CONTACT ME •</span>
        </span>
      </span>
    </CursorLink>
  );
};

export default FooterContentLink;
