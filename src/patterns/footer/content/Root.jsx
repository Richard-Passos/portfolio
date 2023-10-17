import { ScrollAnimation, SocialNav } from '@/components';
import { Text } from '@/components/ui';
import { socialMedias } from '@/constants';
import Header from '@/patterns/header';
import { cn } from '@/utils';

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

        <Title />

        <section className='relative flex w-full items-end gap-12 px-20 py-12'>
          <article className='space-y-4'>
            <Subtitle>Availability</Subtitle>

            <Small>Available for work.</Small>
          </article>

          <article className='space-y-4'>
            <Subtitle>Local time</Subtitle>

            <Small>00:49 AM GMT+2</Small>
          </article>

          <div className='absolute left-1/2 flex -translate-x-1/2 gap-6'>
            <Text className='font-bold'>En</Text>

            <Text className='font-bold opacity-25'>Pt</Text>
          </div>

          <article className='ml-auto space-y-4'>
            <Subtitle>Socials</Subtitle>

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
          className='text-muted-content'
          key={`Footer social ${socialMedia.href}`}
          {...socialMedia}
        />
      ))}
    </SocialNav>
  );
};

export default FooterContent;
