import data from './.data';

import {
  EmailClipboardClient,
  EmailClipboardClientProps
} from '@/components/input/Clipboard/Email/Client';
import { ClipboardControl } from '@/components/input/Clipboard';
import { MergeProps } from '@/types/MergeProps';
import Tooltip from '@/components/feedback/Tooltip';
import {
  EmailClipboardTrigger,
  EmailClipboardTriggerProps
} from '@/components/input/Clipboard/Email/Trigger';

export type EmailClipboardProps = MergeProps<
  Pick<EmailClipboardClientProps, 'value'>,
  EmailClipboardTriggerProps
>;

export const EmailClipboard = ({ value, ...props }: EmailClipboardProps) => {
  return (
    <EmailClipboardClient
      value={value}
      className='group/clipboard has-engaged:z-10'
    >
      <ClipboardControl>
        <EmailClipboardTrigger {...props} />
      </ClipboardControl>

      <Tooltip.Content>
        <Tooltip.Arrow />

        <span className='group-data-copied/clipboard:hidden'>{data.label}</span>

        <span className='hidden group-data-copied/clipboard:inline'>{data.copied}</span>
      </Tooltip.Content>
    </EmailClipboardClient>
  );
};
