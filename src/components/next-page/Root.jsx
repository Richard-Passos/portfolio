import { cn } from '@/utils';

import { MagneticButton } from '../button';
import HorizontalScroll from '../horizontal-scroll';
import { Icon, Image, Text } from '../ui';

const NextPage = ({ className, data = {}, ...props }) => {
  console.log('-  data   -', data);
  const { action = {} } = data;

  return (
    <section
      className={cn('w-full space-y-sm', className)}
      {...props}
    >
      <NextPageLinkHeading>{data.title}</NextPageLinkHeading>

      <div className='relative flex w-full flex-col items-center justify-center gap-[.2em] [clip-path:inset(calc(theme(spacing.lg)*-1)_0_0_0)]'>
        <NextPageLinkContent
          baseVelocity={-1}
          className='text-muted'
        >
          {data.description}
        </NextPageLinkContent>

        <MagneticButton
          className='peer absolute z-10 h-2/3 [&_svg]:size-[40%]'
          {...action.data}
        >
          <Icon {...action.icon} />
        </MagneticButton>

        {data.image && (
          <>
            <div className='absolute top-0 aspect-square w-9/10 max-w-screen-md overflow-hidden rounded-3xl bg-muted transition-transform duration-500 peer-hover:-translate-y-lg'>
              <Image
                className='size-full object-cover'
                {...data.image}
              />
            </div>

            <span className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-main/75' />
          </>
        )}

        <NextPageLinkContent
          baseVelocity={1.5}
          className='relative z-20'
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
      className={cn('pointer-events-none font-bold', className)}
      variants={{ size: 'xl', ...variants }}
      {...props}
    >
      <HorizontalScroll>{children}&nbsp;</HorizontalScroll>
    </Text.Title>
  );
};

export default NextPage;
