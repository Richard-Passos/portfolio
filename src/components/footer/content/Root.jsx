import {
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
} from '@radix-ui/react-icons';

import BackTop from '@/components/back-top';
import { cn } from '@/utils';

import { ScrollAnimationTransform } from '../../scroll-animation';
import SocialNav from '../../social-nav';
import { Logo, Text } from '../../ui';
import Link from './Link';

const FooterContent = ({ className, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '.95 1'],
    },
    propPoints: ['-60%', '0%'],
  };

  return (
    <ScrollAnimationTransform
      className={cn(
        'flex min-h-screen w-full flex-col items-center justify-between gap-12 py-8 text-content 2xl:h-screen 2xl:max-h-bounds',
        className,
      )}
      config={animationConfig}
      {...props}
    >
      <div>
        <Logo className='ml-12 mr-auto' />

        <div className='relative mt-20 flex w-[90%] max-w-screen-xl justify-center'>
          <RotateArrowOnScroll
            className='left-0'
            config={{ propPoints: ['-180deg', '0deg'] }}
          >
            <ArrowBottomRightIcon />
          </RotateArrowOnScroll>

          <Text.Title className='text-center text-5xl uppercase'>
            Let me take you further
            <br />
            than you&apos;ve ever been
          </Text.Title>

          <RotateArrowOnScroll className='right-0'>
            <ArrowBottomLeftIcon />
          </RotateArrowOnScroll>
        </div>

        <Link />

        <section className='relative flex w-[90%] flex-col'>
          <div className='relative w-full'>
            <BackTop className='mb-4' />

            <div className='absolute bottom-0 right-0 overflow-y-clip'>
              <SocialNav className='pb-9' />
            </div>
          </div>

          <div className='flex gap-1 border-t pt-3 text-center max-sm:flex-col-reverse max-sm:items-center sm:justify-between'>
            <Text.Small className='group text-xs text-content'>
              <span className='group-hover:rotate-[360deg] group-hover:transition-transform group-hover:duration-500 group-hover:ease-backOut'>
                &copy;
              </span>{' '}
              2023 Richard Passos
            </Text.Small>

            <Text.Small className='group text-xs text-content'>
              Made with{' '}
              <span className='text-red-500 transition-transform group-hover:-translate-y-1/4'>
                ❤
              </span>{' '}
              by Richard Passos
            </Text.Small>
          </div>
        </section>
      </div>
    </ScrollAnimationTransform>
  );
};

const RotateArrowOnScroll = ({ config, className, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '4 1'],
    },
    prop: 'rotate',
    propPoints: ['180deg', '0deg'],
    ...config,
  };

  return (
    <ScrollAnimationTransform
      className={cn(
        'absolute bottom-0 -z-10 h-28 w-28 translate-y-[12.5%] opacity-20 dark:opacity-10',
        className,
      )}
      config={animationConfig}
      {...props}
    />
  );
};

export default FooterContent;
