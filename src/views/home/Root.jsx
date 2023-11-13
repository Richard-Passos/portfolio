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
          <Text className='w-[86%] text-center text-5xl leading-tight'>
            When it comes to full stack, attention to details is the main
            requirement. I got that eagle eye that can spot even the smallest
            imperfections and make sure your project works perfectly.
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
          <Text className='flex w-[86%] items-center justify-center text-center text-8xl leading-tight'>
            <span className='absolute text-[24rem] font-bold uppercase opacity-10 dark:opacity-5'>
              but
            </span>{' '}
            it&apos;s not just about the tech.
          </Text>
        </div>
      </Section>

      <Sections.About theme='dark' />

      <Section
        asChild
        className='flex items-center justify-center'
      >
        <div>
          <Text className='w-[86%] text-center text-5xl leading-tight'>
            If you&apos;re looking for a developer who&apos;s got the skills,
            the passion, and a problem solving mindset to make your ideas come
            true.{' '}
            <span className='group relative'>
              Then ...{''}
              <span className='absolute left-1/2 top-full w-max -translate-x-1/2 -translate-y-2 scale-95 text-sm opacity-0 transition-all group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100'>
                Keep scrolling.
              </span>
            </span>
          </Text>
        </div>
      </Section>
    </main>
  );
};

export default HomeView;
