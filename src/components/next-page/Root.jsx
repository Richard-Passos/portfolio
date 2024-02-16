import { cn } from '@/utils';

import { MagneticButton } from '../button';
import HorizontalScroll from '../horizontal-scroll';
import { Text } from '../ui';
import { ArrowUpIcon } from '../ui/icon/icons';

const NextPage = ({ text, href, className, ...props }) => {
  return (
    <section
      className={cn('w-full space-y-sm', className)}
      {...props}
    >
      <NextPageLinkHeading />

      <div className='relative flex w-full flex-col items-center justify-center gap-[.2em]'>
        <NextPageLinkContent
          baseVelocity={1}
          text={text}
        />

        <MagneticButton
          className='absolute !h-2/3 focus-visible:outline-variant-content [&_svg]:h-[40%] [&_svg]:w-[40%]'
          href={href}
          isLink
          variants={{ color: 'main' }}
        >
          <ArrowUpIcon className='rotate-45' />
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

const NextPageLinkContent = ({ className, variants, text, ...props }) => {
  return (
    <Text.Title
      aria-hidden
      asChild
      className={cn(
        'pointer-events-none font-bold [--gap:--font-blank-space]',
        className,
      )}
      variants={{ size: 'xl', ...variants }}
      {...props}
    >
      <HorizontalScroll>
        <span>{text}</span> •
      </HorizontalScroll>
    </Text.Title>
  );
};

export default NextPage;
