import { Lines } from '@/components';
import { MagneticButton } from '@/components/button';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const NotFoundView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'dark-layout py-md dark relative flex flex-col items-center justify-center [--header-h:88px] max-2xl:min-h-[calc(100svh-var(--header-h))] 2xl:h-screen 2xl:max-h-bounds',
        className,
      )}
      {...props}
    >
      <Text.Title
        aria-label='404'
        className='text-[clamp(8rem,44vw,24rem)]/[1] font-bold'
      >
        <span
          aria-hidden
          className='flex items-center'
        >
          4
          <MagneticButton
            className='!h-[.8em] text-[1em] no-underline [&>span]:text-[.1em]'
            href='/'
            isLink
            limit={0.2}
            variants={{ size: 'lg' }}
          >
            Go home
          </MagneticButton>
          4
        </span>
      </Text.Title>

      <Text>The page you are looking for is not available.</Text>

      <Lines />
      <span className='absolute top-0 h-px w-[95%] bg-border opacity-60 transition-all dark:opacity-30' />
    </main>
  );
};

export default NotFoundView;
