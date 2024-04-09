import {
  Button,
  ScrollTitle,
  Section,
  Services,
  TextScrollAnimate,
} from '@/components';
import { ScrollAnimate } from '@/components/scroll-animate';
import { Separator, Text } from '@/components/ui';
import { ArrowUpIcon } from '@/components/ui/icon/icons';
import { services } from '@/constants';
import { cn } from '@/utils';

const WorkViewServicesSection = ({ className, ...props }) => {
  const animationConfig = {
    scrollConfig: { offset: ['1 1', '1 0'] },
    prop: '--y',
    propPoints: ['0%', '100%'],
  };

  return (
    <Section
      className={cn('flex flex-col items-center', className)}
      {...props}
    >
      <h2 className='mb-md w-full'>
        <ScrollTitle title='SERVICES' />
      </h2>

      <section className='mb-lg grid w-9/10 max-w-screen-xl gap-sm sm:grid-cols-2'>
        <Text className='text-4xl/tight font-medium max-sm:text-center sm:max-w-lg md:text-5xl/tight'>
          <TextScrollAnimate text='We help our clients entertain, inform, and inspire the world.' />
        </Text>

        <Text className='text-muted-content max-sm:text-center sm:max-w-lg sm:justify-self-end'>
          We represent storytellers who shape culture and drive the future. From
          artists and creators to athletes and brands, our deep expertise and
          broad capabilities enable talent and companies to confidently grow
          their careers and businesses.
        </Text>
      </section>

      <section className='flex w-9/10 max-w-screen-lg flex-col items-center gap-md'>
        <Text.Subtitle className='mr-auto text-2xl font-medium'>
          I could help you with...
        </Text.Subtitle>

        <div className='grid gap-md sm:grid-cols-2'>
          <ScrollAnimate config={animationConfig}>
            <div className='h-1/2 translate-y-[--y] rounded-3xl bg-blue-500 max-sm:hidden md:h-2/3 md:translate-y-[calc(var(--y)/2)]' />
          </ScrollAnimate>

          <Services className='sm:py-md'>
            {services.map(({ title, description }, i) => (
              <Services.Item key={title}>
                <Services.Number index={i} />

                <Separator />

                <Services.Title>{title}</Services.Title>

                <Services.Description>{description}</Services.Description>
              </Services.Item>
            ))}
          </Services>
        </div>

        <Button
          href='/contact'
          variants={{ color: 'main' }}
        >
          Contact me
          <Button.Icon animation='slideUpRight'>
            <ArrowUpIcon className='rotate-45' />
          </Button.Icon>
        </Button>
      </section>
    </Section>
  );
};

export default WorkViewServicesSection;
