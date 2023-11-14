import { ArrowDownIcon } from '@radix-ui/react-icons';

import { cn } from '@/utils';

import { ScrollToLink } from '../link';
import TextRing from '../text-ring';
import { buttonSizes } from '../ui/button';

const ScrollIndicator = ({ className, ...props }) => {
  return (
    <ScrollToLink
      className={cn(
        'aspect-square rounded-full text-content [--icon-dimen:theme(spacing.4)] sm:[--icon-dimen:theme(spacing.5)] md:[--icon-dimen:theme(spacing.6)]',
        buttonSizes.md,
        className,
      )}
      {...props}
    >
      <TextRing
        className='absolute'
        text='scroll down • scroll down • '
      />

      <ArrowDownIcon className='h-[--icon-dimen] w-[--icon-dimen]' />
    </ScrollToLink>
  );
};

export default ScrollIndicator;
