import data from './.data';

import {
  EmailClipboardClient,
  EmailClipboardClientProps
} from '@/components/input/Clipboard/Email/Client';
import Clipboard from '@/components/input/Clipboard';
import { MagneticButton, MagneticButtonProps } from '@/components/input/Button/Magnetic';
import { MergeProps } from '@/types/MergeProps';
import Tooltip from '@/components/feedback/Tooltip';
import { ClipboardIcon } from '@/components/system/Icon/Clipboard';
import { CheckIcon } from '@/components/system/Icon/Check';

export type EmailClipboardProps = MergeProps<
  Pick<EmailClipboardClientProps, 'value'>,
  MagneticButtonProps
>;

export const EmailClipboard = ({ value, ...props }: EmailClipboardProps) => {
  return (
    <EmailClipboardClient
      value={value}
      className='group/clipboard has-engaged:z-10'
    >
      <Clipboard.Control>
        <Tooltip.Trigger>
          <Clipboard.Trigger>
            <MagneticButton
              iconOnly
              color='primary'
              aria-label={`${data.label}: ${value}`}
              {...props}
            >
              <div className='relative flex items-center justify-center overflow-hidden'>
                <ClipboardIcon className='transition-transform duration-300 ease-backOut group-data-copied/button:translate-x-[200%]' />

                <CheckIcon className='absolute -translate-x-[200%] transition-transform duration-300 ease-backOut group-data-copied/button:translate-x-0' />
              </div>
            </MagneticButton>
          </Clipboard.Trigger>
        </Tooltip.Trigger>
      </Clipboard.Control>

      <Tooltip.Content>
        <Tooltip.Arrow />

        <span className='group-data-copied/clipboard:hidden'>{data.label}</span>

        <span className='hidden group-data-copied/clipboard:inline'>{data.copied}</span>
      </Tooltip.Content>
    </EmailClipboardClient>
  );
};
