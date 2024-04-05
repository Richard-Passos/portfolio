import { Section } from '@/components';
import { Button } from '@/components/button';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const NotFoundHeroSection = ({ className, ...props }) => {
  return (
    <Section
      hasTransition={false}
      forceHeaderTheme
      className={cn(
        '-mt-[--header-h] flex flex-col items-center justify-center pt-[calc(theme(spacing.lg)+var(--header-h))] max-2xl:min-h-svh 2xl:h-screen 2xl:max-h-bounds',
        className,
      )}
      {...props}
    >
      <Text.Title
        asChild
        variants={{ size: 'xl' }}
        className='mb-2 w-9/10 max-w-screen-xl text-center'
      >
        <h1>404</h1>
      </Text.Title>

      <Text className='mb-4 w-9/10 max-w-screen-xl text-center text-2xl font-semibold first-letter:uppercase'>
        Page not found!
      </Text>

      <Text className='mb-md w-9/10 max-w-xl text-center text-muted-content first-letter:uppercase'>
        Ops... looks like you&apos;re lost. Please go back to Home page.
      </Text>

      <Button
        asLink
        href='/'
      >
        Back Home
      </Button>

      <div className='absolute top-0 h-[--header-h] w-screen bg-main'>
        <span className='absolute left-1/2 top-full h-px w-[95%] -translate-x-1/2 bg-border opacity-60 transition-all dark:opacity-30' />
      </div>
    </Section>
  );
};

export default NotFoundHeroSection;
