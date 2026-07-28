import { TooltipArrow, TooltipContent, TooltipContentProps } from '@/components/feedback/Tooltip';
import { useIntlayer } from 'next-intlayer/server';

export type EmailClipboardTooltipProps = Omit<TooltipContentProps, 'children'>;

export const EmailClipboardTooltip = (props: EmailClipboardTooltipProps) => {
  const t = useIntlayer('email-clipboard');

  return (
    <TooltipContent {...props}>
      <TooltipArrow />

      <span className='group-data-copied/clipboard:hidden'>{t.label}</span>

      <span className='hidden group-data-copied/clipboard:inline'>{t.copied}</span>
    </TooltipContent>
  );
};
