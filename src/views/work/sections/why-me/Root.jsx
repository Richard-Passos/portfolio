import {
  Button,
  ScrollTitle,
  Section,
  TextScrollAnimation,
} from '@/components';
import { Text } from '@/components/ui';
import { ArrowUpIcon } from '@/components/ui/icon/icons';
import { stats } from '@/constants';
import { cn } from '@/utils';

import Card from './Card';

const WorkViewWhyMeSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex w-full flex-col items-center', className)}
      {...props}
    >
      <h2 className='mb-md flex w-full flex-col'>
        <ScrollTitle title='WHY PICK' />
        <ScrollTitle
          dir='rtl'
          title='ME UP'
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

          <Button
            asLink
            href='/about'
            variants={{ color: 'main', size: 'sm' }}
          >
            About me
            <Button.Icon animation='slideUpRight'>
              <ArrowUpIcon className='rotate-45' />
            </Button.Icon>
          </Button>
        </div>
      </section>

      <section className='flex w-full flex-col items-center gap-md overflow-x-clip'>
        <Text.Subtitle className='w-9/10 max-w-screen-lg text-2xl font-medium'>
          Some statistics...
        </Text.Subtitle>

        <ul className='grid w-9/10 max-w-screen-lg gap-sm md:grid-cols-2'>
          {stats.map((data, i) => (
            <Card
              key={i}
              {...data}
            />
          ))}
        </ul>
      </section>
    </Section>
  );
};

export default WorkViewWhyMeSection;
