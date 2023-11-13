import { ScrollIndicator, Section } from '@/components';
import { Link, Text } from '@/components/ui';
import { cn } from '@/utils';

const HomeHeroSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex h-screen flex-col items-center', className)}
      {...props}
    >
      <div className='relative my-auto flex items-center justify-center'>
        <Text className='absolute bottom-[125%] right-2/3 flex w-max items-center text-sm text-muted-content'>
          I&apos;m Richard Passos{' '}
          <span className='mx-8 h-px w-20 bg-current opacity-25 dark:opacity-10' />{' '}
          <Link
            className='font-normal'
            href='/contact'
          >
            Available for work
          </Link>
        </Text>

        <Title asChild>
          <h1>
            Full stack
            <br />
            dev
            <span className='outline-text opacity-10 dark:opacity-5'>
              eloper
            </span>
          </h1>
        </Title>

        <Text className='absolute bottom-0 right-0 flex items-center'>
          <Title
            aria-hidden
            asChild
            className='pointer-events-none invisible'
          >
            <span>stack</span>
          </Title>

          <span className='absolute left-1.5 max-w-[345px] font-medium'>
            that&apos;s what I am — Solid and scalable products with a great
            user experience, that&apos;s what I build.
          </span>
        </Text>

        <Circles />
      </div>

      <ScrollIndicator
        className='-translate-y-24'
        href='#scroll-down-to'
      />
    </Section>
  );
};

const Title = ({ className, ...props }) => {
  return (
    <Text.Title
      className={cn('text-9xl uppercase', className)}
      {...props}
    />
  );
};

const Circles = () => {
  const amount = 28;

  return (
    <div className='absolute -z-10 grid w-screen max-w-5xl grid-cols-7'>
      {[...Array(amount)].map((_, i) => (
        <span
          className='aspect-square w-full rounded-full border border-content opacity-10 transition-opacity hover:opacity-50'
          key={i}
        />
      ))}
    </div>
  );
};

export default HomeHeroSection;
