'use client';

import { ClipboardTrigger } from '@/components/input/Clipboard';
import { MagneticButton, MagneticButtonProps } from '@/components/input/Button/Magnetic';
import { TooltipTrigger } from '@/components/feedback/Tooltip';
import { ClipboardIcon } from '@/components/system/Icon/Clipboard';
import { CheckIcon } from '@/components/system/Icon/Check';

export type EmailClipboardTriggerProps = MagneticButtonProps;

export const EmailClipboardTrigger = (props: EmailClipboardTriggerProps) => {
  return (
    <TooltipTrigger>
      <ClipboardTrigger>
        <MagneticButton
          iconOnly
          color='primary'
          {...props}
        >
          <div className='relative flex items-center justify-center overflow-hidden'>
            <ClipboardIcon className='transition-transform duration-300 ease-backOut group-data-copied/button:translate-x-[200%]' />

            <CheckIcon className='absolute translate-x-[-200%] transition-transform duration-300 ease-backOut group-data-copied/button:translate-x-0' />
          </div>
        </MagneticButton>
      </ClipboardTrigger>
    </TooltipTrigger>
  );
};
