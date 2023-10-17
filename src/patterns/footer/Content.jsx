import { Bg, ScrollAnimation, SocialNav } from '@/components';
import { Text } from '@/components/ui';
import { socialMedias } from '@/constants';
import { cn } from '@/utils';

import Button from '../button';
import Header from '../header';

const FooterContent = ({ className, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 1', '1 1'],
    },
    scrollPoints: [0, 1],
    propPoints: ['-50%', '0%'],
  };

  return (
    <ScrollAnimation.Translate config={animationConfig}>
      <div
        className={cn(
          'max-h-bounds light flex h-screen w-full flex-col items-center text-content',
          className,
        )}
        {...props}
      >
        <Bg />

        <Header className='relative z-0' />

        <div className='my-auto flex w-full items-end justify-between px-48'>
          <h2 className='shrink-0'>
            <Text.Title
              asChild
              className='text-8xl'
            >
              <span>Let&apos;s work</span>
            </Text.Title>

            <br />

            <Text.Title
              asChild
              className='outline-text text-8xl'
            >
              <span>together</span>
            </Text.Title>
          </h2>

          <span className='mr-8 h-px w-full bg-muted-content' />

          <Button className='shrink-0 '>Get in touch</Button>
        </div>

        <section className='relative flex w-full items-end gap-24 px-24 py-12'>
          <article className='space-y-4'>
            <Text.Subtitle
              asChild
              className='mb-2 text-xs uppercase opacity-50'
            >
              <h4>Availability</h4>
            </Text.Subtitle>

            <Text.Small className='font-bold'>Available for work.</Text.Small>
          </article>

          <article className='space-y-4'>
            <Text.Subtitle
              asChild
              className='mb-2 text-xs uppercase opacity-50'
            >
              <h4>Socials</h4>
            </Text.Subtitle>

            <Social />
          </article>

          <div className='absolute left-1/2 flex -translate-x-1/2 gap-6'>
            <Text className='font-bold'>En</Text>

            <Text className='font-bold opacity-25'>Pt</Text>
          </div>
        </section>
      </div>
    </ScrollAnimation.Translate>
  );
};

const Social = () => {
  return (
    <SocialNav>
      {socialMedias.map((socialMedia) => (
        <SocialNav.Item
          key={`Footer social ${socialMedia.href}`}
          {...socialMedia}
        />
      ))}
    </SocialNav>
  );
};

export default FooterContent;
