import { availabilityMessage, socialMedias } from '@/constants';
import { cn } from '@/utils';

import { ScrollAnimationTransform } from '../../scroll-animation';
import { scrollSmoothConfig } from '../../smooth-scroll';
import SocialNav from '../../social-nav';
import { Logo } from '../../ui';
import { Text } from '../../ui/text';
import Small from './Small';
import Subtitle from './Subtitle';
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

        <div className='my-auto flex -translate-y-6 flex-col items-center gap-14 text-center'>
          <Title />

          <Text className='text-xl font-semibold'>
            to build it the right way
          </Text>
        </div>

        <section className='absolute bottom-12 flex w-full items-end gap-12 px-20'>
          <article className='space-y-4'>
            <Subtitle>Availability</Subtitle>

            <Small>{availabilityMessage}</Small>
          </article>

          <article className='space-y-4'>
            <Subtitle>Local time</Subtitle>

            <Small>00:49 AM GMT+2</Small>
          </article>

          <div className='absolute left-1/2 flex -translate-x-1/2 gap-6'>
            <Text className='font-bold'>En</Text>

            <Text className='font-bold opacity-25'>Pt</Text>
          </div>

          <Social />
        </section>
      </div>
    </ScrollAnimationTransform>
  );
};

const Social = ({ className, ...props }) => {
  return (
    <SocialNav
      className={cn('ml-auto', className)}
      {...props}
    >
      {socialMedias.map((socialMedia) => (
        <SocialNav.Item
          key={socialMedia.href}
          {...socialMedia}
        />
      ))}
    </SocialNav>
  );
};

export default FooterContent;
