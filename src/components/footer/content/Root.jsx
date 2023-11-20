import BackTop from '@/components/back-top';
import { cn } from '@/utils';

import { ScrollAnimationTransform } from '../../scroll-animation';
import { scrollSmoothConfig } from '../../smooth-scroll';
import SocialNav from '../../social-nav';
import { Link, Logo, Text } from '../../ui';
import Title from './Title';

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
        'flex h-screen w-full flex-col items-center text-content 2xl:max-h-bounds',
        className,
      )}
      config={animationConfig}
      smoothConfig={{ scroll: scrollSmoothConfig }}
      {...props}
    >
      <div>
        <Logo className='absolute left-12 top-8' />

        <div className='my-auto flex -translate-y-6 flex-col items-center gap-10 text-center'>
          <Title />

          <Text className='text-xl font-semibold'>
            to build it the right way
          </Text>
        </div>

        <section className='absolute bottom-8 flex w-full items-end justify-between px-12'>
          <div className='grow basis-0'>
            <BackTop />
          </div>

          <Text.Small className='group text-xs'>
            Made with{' '}
            <span className='text-red-500 transition-transform group-hover:-translate-y-1/4'>
              ❤
            </span>{' '}
            by{' '}
            <Link href='https://github.com/Richard-Passos'>Richard Passos</Link>
          </Text.Small>

          <div className='flex grow basis-0 justify-end'>
            <SocialNav />
          </div>
        </section>
      </div>
    </ScrollAnimationTransform>
  );
};

export default FooterContent;
