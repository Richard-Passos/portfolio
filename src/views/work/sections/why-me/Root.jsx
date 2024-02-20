import { ScrollTitle, Section, TextScrollAnimation } from '@/components';
import { IconButton } from '@/components/button';
import { Link, Text } from '@/components/ui';
import { ArrowUpIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

import Stats from './Stats';

const WorkViewWhyMeSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn(
        'flex w-full flex-col items-center justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <h2 className='mb-md flex w-full flex-col'>
        <ScrollTitle title='WHY' />
        <ScrollTitle
          dir='rtl'
          title='ME'
        />
      </h2>

      <section className='mb-lg flex w-9/10 max-w-screen-xl justify-between gap-sm max-sm:flex-col'>
        <Text className='max-w-lg text-4xl/tight font-medium max-sm:text-center md:text-5xl/tight'>
          <TextScrollAnimation text='We help our clients entertain, inform, and inspire the world.' />
        </Text>

        <div className='flex flex-col items-start justify-between gap-md max-sm:items-center'>
          <Text className='max-w-lg text-muted-content max-sm:text-center'>
            We represent storytellers who shape culture and drive the future.
            From artists and creators to athletes and brands, our deep expertise
            and broad capabilities enable talent and companies to confidently
            grow their careers and businesses.
          </Text>

          <IconButton
            asChild
            className='border-border focus-visible:outline-variant-content'
            variants={{ color: 'main' }}
          >
            <Link
              className='no-underline'
              href='/about'
            >
              About me
              <IconButton.Icon animation='slideUpRight'>
                <ArrowUpIcon className='rotate-45' />
              </IconButton.Icon>
            </Link>
          </IconButton>
        </div>
      </section>

      <Stats />
    </Section>
  );
};

export default WorkViewWhyMeSection;
