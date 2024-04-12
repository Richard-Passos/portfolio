import { cn } from '@/utils';

import { MagneticButton } from '../button';
import HorizontalScroll from '../horizontal-scroll';
import { Icon, Text } from '../ui';

const NextPage = ({ className, data = {}, ...props }) => {
  const { action = {} } = data

  return (
    <section
      className={cn('w-full space-y-sm', className)}
      {...props}
    >
      <NextPageLinkHeading >
        {data.title}
      </NextPageLinkHeading>

      <div className='relative flex w-full flex-col items-center justify-center gap-[.2em]'>
        <NextPageLinkContent
          baseVelocity={-1}
          className='text-muted'
        >
          {data.description}
        </NextPageLinkContent>

        <MagneticButton
          className='absolute h-2/3 [&_svg]:size-[40%]'
          {...action.data}
        >
          <Icon {...action.icon} />
        </MagneticButton>

        <NextPageLinkContent
          baseVelocity={1.5}
          className='relative z-10'
        >
          {data.description}
        </NextPageLinkContent>
      </div>

      <NextPageLinkHeading
        aria-hidden
        className='first:[&>*]:order-2'
      >
        {data.title}
      </NextPageLinkHeading>
    </section>
  );
};

const NextPageLinkHeading = ({ className, children, ...props }) => {
  return (
    <div
      className={cn('mx-auto flex w-9/10 items-center gap-sm', className)}
      {...props}
    >
      <Text.Title className='shrink-0 text-xs uppercase'>{children}</Text.Title>

      <span className='h-px w-full bg-border' />
    </div>
  );
};

const NextPageLinkContent = ({ className, variants, children, ...props }) => {
  return (
    <Text.Title
      aria-hidden
      asChild
      className={cn(
        'pointer-events-none font-bold',
        className,
      )}
      variants={{ size: 'xl', ...variants }}
      {...props}
    >
      <HorizontalScroll>
        {children}&nbsp;
      </HorizontalScroll>
    </Text.Title>
  );
};

export default NextPage;
