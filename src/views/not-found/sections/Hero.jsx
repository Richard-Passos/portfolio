import { Lines } from '@/components';
import { Button } from '@/components/button';
import {  Text } from '@/components/ui';
import { cn } from '@/utils';

const NotFoundHeroSection = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'relative flex min-h-svh w-full -mt-[--header-h] flex-col items-center justify-center pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))]',
        className,
      )}
      {...props}
    >
      <Text.Title
        asChild
        variants={{ size: 'xl' }}
        className='mb-2 text-center w-9/10 max-w-screen-xl'
      >
        <h1>404</h1>
      </Text.Title>

      <Text className='mb-4 text-center text-2xl w-9/10 max-w-screen-xl font-semibold first-letter:uppercase'>
        Page not found!
             </Text>

      <Text className='mb-md max-w-xl text-center w-9/10 text-muted-content first-letter:uppercase'>
        Ops... looks like you're lost. Please go back to Home page.
            </Text>

      <Button asLink           href='/'
>

          Back Home
      </Button>

      <Lines/>

<div className='absolute top-0 w-screen h-[--header-h] bg-main'>
<span className='absolute top-full h-px w-[95%] bg-border left-1/2 -translate-x-1/2 opacity-60 transition-all dark:opacity-30' />
</div>    </section>
  );
};

export default NotFoundHeroSection;
