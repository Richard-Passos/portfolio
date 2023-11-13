import { Section } from '@/components';
import { Text } from '@/components/ui/text';

import Sections from './sections';

const HomeView = () => {
  return (
    <main className='relative mx-auto max-w-bounds'>
      <Sections.Hero theme='light' />

      <Section
        asChild
        className='flex items-center justify-center'
        id='scroll-down-to'
        theme='light'
      >
        <div>
          <Text className='w-[86%] text-center text-5xl'>
            When it comes to frontend, attention to detail is the name of the
            game. I got that eagle eye that can spot even the smallest
            imperfections and make sure your user experience is smooth like
            butter.
          </Text>
        </div>
      </Section>

      <Sections.Work theme='dark' />

      <Section
        asChild
        className='flex items-center justify-center'
        theme='light'
      >
        <div>
          <Text className='flex w-[86%] items-center justify-center text-center text-8xl'>
            <span className='outline-text absolute text-[16rem] uppercase'>
              but
            </span>{' '}
            it&apos;s not just about tech.
          </Text>
        </div>
      </Section>

      <Sections.About theme='dark' />

      <Section
        asChild
        className='flex items-center justify-center'
      >
        <div>
          <Text className='w-[86%] text-center text-5xl'>
            If you&apos;re looking for a developer who&apos;s got the skills,
            the creativity, and the style. Then you need to work with me.
          </Text>
        </div>
      </Section>
    </main>
  );
};

export default HomeView;
