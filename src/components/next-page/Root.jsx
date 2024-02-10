import { cn } from '@/utils';

import { MagneticButton } from '../button';
import HorizontalScroll from '../horizontal-scroll';
import { Text } from '../ui';
import { ArrowRightIcon } from '../ui/icon/icons';

const NextPage = ({ text, href, className, ...props }) => {
  return (
    <section
      className={cn('w-full space-y-sm', className)}
      {...props}
    >
      <NextPageLinkHeading />

      <div
        className='relative flex w-full flex-col items-center justify-center gap-[.2em] text-[13vw]/[1] sm:text-[min(10vw,7rem)]/[1]'
        href={href}
      >
        <NextPageLinkContent text={text} />

        <MagneticButton
          className='absolute !h-2/3 focus-visible:outline-variant-content [&_svg]:h-[40%] [&_svg]:w-[40%]'
          href={href}
          isLink
          variants={{ color: 'main' }}
        >
          <ArrowRightIcon className='-rotate-45' />
        </MagneticButton>

        <NextPageLinkContent
          baseVelocity={-1.5}
          className='relative z-10'
          text={text}
        />
      </div>

      <NextPageLinkHeading
        aria-hidden
        className='first:[&>*]:order-2'
      />
    </section>
  );
};

const NextPageLinkHeading = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-[--gap] px-[min(6vw,theme(spacing.12))]',
        className,
      )}
      {...props}
    >
      <Text.Title className='shrink-0 text-xs uppercase'>Next page</Text.Title>

      <span className='h-px w-full bg-border' />
    </div>
  );
};

const NextPageLinkContent = ({ className, text, ...props }) => {
  return (
    <HorizontalScroll
      aria-hidden
      className={cn(
        'pointer-events-none font-bold uppercase [--gap:--font-blank-space]',
        className,
      )}
      {...props}
    >
      <span>{text}</span> •
    </HorizontalScroll>
  );
};

export default NextPage;
