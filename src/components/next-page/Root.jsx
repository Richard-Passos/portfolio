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
        <NextPageLinkContent text={text}             className='text-muted'
 />

        <MagneticButton
          asLink
          className='absolute h-2/3 [&_svg]:size-[40%]'
          href={href}
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
      className={cn('mx-auto flex w-9/10 items-center gap-sm', className)}
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
        <span>{text}</span> ·
      </HorizontalScroll>
    </Text.Title>
  );
};

export default NextPage;
