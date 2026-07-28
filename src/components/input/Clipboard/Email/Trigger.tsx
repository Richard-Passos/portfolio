'use client';

import { ClipboardControl, ClipboardTrigger } from '@/components/input/Clipboard';
import { MagneticButton, MagneticButtonProps } from '@/components/input/Button/Magnetic';
import { TooltipTrigger } from '@/components/feedback/Tooltip';
import { ClipboardIcon } from '@/components/system/Icon/Clipboard';
import { CheckIcon } from '@/components/system/Icon/Check';

export type EmailClipboardTriggerProps = Omit<MagneticButtonProps, 'children'>;

export const EmailClipboardTrigger = (props: EmailClipboardTriggerProps) => {
  return (
    <ClipboardControl>
      <TooltipTrigger>
        <ClipboardTrigger>
          <MagneticButton
            iconOnly
            color='primary'
            {...props}
          >
            <ClipboardIcon className='transition-transform duration-300 ease-backOut group-data-copied/button:translate-x-[200%]' />

            <CheckIcon className='absolute translate-x-[-200%] transition-transform duration-300 ease-backOut group-data-copied/button:translate-x-0' />
          </MagneticButton>
        </ClipboardTrigger>
      </TooltipTrigger>
    </ClipboardControl>
  );
};
