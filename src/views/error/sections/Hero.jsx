'use client';

import { useEffect } from 'react';

import { Section } from '@/components';
import { Button } from '@/components/button';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const ErrorViewHeroSection = ({
  error,
  className,
  data = {},
  reset,
  ...props
}) => {
  const actionsTypes = {
    reset: { onClick: reset },
  };

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section
      forceHeaderTheme
      className={cn(
        '-mt-[--header-h] flex min-h-svh w-9/10 max-w-screen-xl flex-col items-center justify-center pt-[calc(theme(spacing.lg)+var(--header-h))]',
        className,
      )}
      {...props}
    >
      <Text.Title
        asChild
        variants={{ size: 'xl' }}
        className='text-center'
      >
        <h1>{data.title}</h1>
      </Text.Title>

      <Text className='mt-2 text-center text-2xl font-semibold first-letter:uppercase'>
        {data.subtitle}
      </Text>

      <Text className='mt-4 max-w-xl text-center text-muted-content first-letter:uppercase'>
        {data.description}
      </Text>

      <section className='mt-md flex justify-center gap-sm max-sm:flex-col items-center'>
        {data.actions?.map(({ type, data = {} }) => (
          <Button
            key={data.label}
            {...actionsTypes[type?.toLowerCase()]}
            {...data}
          >
            {data.label}
          </Button>
        ))}
      </section>

      <div className='absolute top-0 h-[--header-h] w-screen max-w-bounds bg-main'>
        <span className='absolute left-1/2 top-full h-px w-[95%] -translate-x-1/2 bg-border opacity-60 dark:opacity-20' />
      </div>
    </Section>
  );
};

export default ErrorViewHeroSection;
