import { EmailClipboard } from './Root';
import { EmailClipboardTooltip } from './Tooltip';
import { EmailClipboardTrigger } from './Trigger';

export * from './Root';
export * from './Tooltip';
export * from './Trigger';

export default Object.assign(EmailClipboard, {
  Tooltip: EmailClipboardTooltip,
  Trigger: EmailClipboardTrigger
});
