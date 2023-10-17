import { ScrollAnimation, SocialNav } from '@/components';
import { Link, Text } from '@/components/ui';
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
    propPoints: ['-60%', '0%'],
  };

  return (
    <ScrollAnimation.Translate
      className={cn(
        'max-h-bounds relative flex h-screen w-full flex-col items-center text-content',
        className,
      )}
      config={animationConfig}
      {...props}
    >
      <div>
        <Header className='relative z-0' />

        <Link
          className='my-auto'
          href='/contact'
        >
          <h2 className='flex gap-[.25em] text-9xl'>
            <Text.Title
              asChild
              className='text-9xl'
            >
              <span>Let&apos;s work</span>
            </Text.Title>

            <Text.Title
              asChild
              className='outline-text text-9xl'
            >
              <span>together</span>
            </Text.Title>
          </h2>
        </Link>

        <section className='relative flex w-full items-end gap-12 px-12 py-12'>
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
              <h4>Local time</h4>
            </Text.Subtitle>

            <Text.Small className='font-bold'>11:25 PM GMT+2</Text.Small>
          </article>

          <div className='absolute left-1/2 flex -translate-x-1/2 gap-6'>
            <Text className='font-bold'>En</Text>

            <Text className='font-bold opacity-25'>Pt</Text>
          </div>

          <article className='ml-auto space-y-4'>
            <Text.Subtitle
              asChild
              className='mb-2 text-xs uppercase opacity-50'
            >
              <h4>Socials</h4>
            </Text.Subtitle>

            <Social />
          </article>
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
