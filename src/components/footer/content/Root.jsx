import { ArrowBottomLeftIcon } from '@radix-ui/react-icons';

import BackTop from '@/components/back-top';
import { cn } from '@/utils';

import { ScrollAnimationTransform } from '../../scroll-animation';
import { scrollSmoothConfig } from '../../smooth-scroll';
import SocialNav from '../../social-nav';
import { Logo, Text } from '../../ui';
import Link from './Link';

const FooterContent = ({ className, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '1 1'],
    },
    propPoints: ['-60%', '0%'],
  };

  return (
    <ScrollAnimationTransform
      className={cn(
        'flex h-screen w-full flex-col items-center justify-between gap-12 py-8 text-content 2xl:max-h-bounds',
        className,
      )}
      config={animationConfig}
      smoothConfig={{ scroll: scrollSmoothConfig }}
      {...props}
    >
      <div>
        <Logo className='ml-12 mr-auto' />

        <div className='relative mt-20 flex w-full max-w-screen-xl'>
          <Text.Title className='text-5xl uppercase'>
            Let&apos;s work <br /> together
            {/* Let me take you further than you&apos;ve ever been. */}
          </Text.Title>

          <ArrowBottomLeftIcon className='absolute bottom-0 right-0 h-28 w-28 translate-y-[12.5%] opacity-20 dark:opacity-10' />
        </div>

        <Link />

        <section className='relative flex w-full flex-col px-12'>
          <div className='relative w-full'>
            <BackTop className='mb-4' />

            <div className='absolute bottom-0 right-0 overflow-y-clip'>
              <SocialNav className='pb-9' />
            </div>
          </div>

          <div className='flex justify-between border-t pt-3'>
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

export default FooterContent;
