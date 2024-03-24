'use client';

import { useEffect } from 'react';

import { Text } from '@/components/ui';
import { cn } from '@/utils';
import { Button } from '@/components/button';
import { Lines } from '@/components';

const ErrorHeroSection = ({ error, className, reset, ...props }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
        <h1>Ops...</h1>
      </Text.Title>

      <Text className='mb-4 text-center w-9/10 max-w-screen-xl text-2xl font-semibold first-letter:uppercase'>
        Something went wrong!
      </Text>

      <Text className='mb-md max-w-xl w-9/10 text-center text-muted-content first-letter:uppercase'>
Please try again or go back to Home page.     </Text>

      <div className='flex w-fit max-w-9/10 flex-wrap items-center justify-center gap-sm'>
        <Button
          asLink
          href='/'
          variants={{ color: 'main' }}
        >
          Back Home          
        </Button>

        <Button
          onClick={reset}
        >
            Try again
          </Button>
      </div>

<Lines/>

<div className='absolute top-0 w-screen h-[--header-h] bg-main'>
<span className='absolute top-full h-px w-[95%] bg-border left-1/2 -translate-x-1/2 opacity-60 transition-all dark:opacity-30' /></div>    </section>
  );
};

export default ErrorHeroSection;
