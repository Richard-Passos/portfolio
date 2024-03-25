'use client';

import { useEffect } from 'react';

import { Lines } from '@/components';
import { Button } from '@/components/button';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ErrorHeroSection = ({ error, className, reset, ...props }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      className={cn(
        'relative -mt-[--header-h] flex min-h-svh w-full flex-col items-center justify-center pb-lg pt-[calc(theme(spacing.lg)+var(--header-h))]',
        className,
      )}
      {...props}
    >
      <Text.Title
        asChild
        variants={{ size: 'xl' }}
        className='mb-2 w-9/10 max-w-screen-xl text-center'
      >
        <h1>Ops...</h1>
      </Text.Title>
      <Text className='mb-4 w-9/10 max-w-screen-xl text-center text-2xl font-semibold first-letter:uppercase'>
        Something went wrong!
      </Text>
      <Text className='mb-md w-9/10 max-w-xl text-center text-muted-content first-letter:uppercase'>
        Please try again or go back to Home page.{' '}
      </Text>
      <div className='flex w-fit max-w-9/10 flex-wrap items-center justify-center gap-sm'>
        <Button
          asLink
          href='/'
          variants={{ color: 'main' }}
        >
          Back Home
        </Button>

        <Button onClick={reset}>Try again</Button>
      </div>
      <Lines />
      <div className='absolute top-0 h-[--header-h] w-screen bg-main'>
        <span className='absolute left-1/2 top-full h-px w-[95%] -translate-x-1/2 bg-border opacity-60 transition-all dark:opacity-30' />
      </div>{' '}
    </section>
  );
};

export default ErrorHeroSection;
