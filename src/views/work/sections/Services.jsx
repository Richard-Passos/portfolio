import {
  ScrollTitle,
  Section,
  Services,
  TextScrollAnimation,
} from '@/components';
import { IconButton } from '@/components/button/icon';
import { ScrollAnimationTransform } from '@/components/scroll-animation';
import { Link, Separator, Text } from '@/components/ui';
import { ArrowUpIcon } from '@/components/ui/icon/icons';
import { services } from '@/constants';
import { cn } from '@/utils';

const WorkViewServicesSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex w-full flex-col items-center gap-md', className)}
      {...props}
    >
      <h2 className='w-full'>
        <ScrollTitle title='SERVICES' />
      </h2>

      <section className='flex w-9/10 max-w-screen-lg justify-between gap-sm max-sm:flex-col'>
        <Text className='max-w-lg text-4xl/tight font-medium sm:text-5xl/tight'>
          <TextScrollAnimation text='We help our clients entertain, inform, and inspire the world.' />
        </Text>

        <Text className='max-w-sm text-muted-content'>
          With a vision for innovation and excellence, we create cohesive brand
          transformations that reflect the values and ethos of your company.
        </Text>
      </section>

      <section className='mt-md flex w-9/10 max-w-screen-lg flex-col items-center gap-md'>
        <Text.Subtitle className='mr-auto text-center text-2xl'>
          I could help you with...
        </Text.Subtitle>

        <div className='grid gap-md sm:grid-cols-2'>
          <ScrollAnimationTransform
            config={{ prop: '--y', propPoints: ['0%', '100%'] }}
          >
            <div className='h-1/2 translate-y-[--y] rounded-3xl bg-blue-500 max-sm:hidden md:h-2/3 md:translate-y-[calc(var(--y)/2)]' />
          </ScrollAnimationTransform>

          <Services className='sm:grid-cols-1 sm:py-md'>
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

        <IconButton
          asChild
          className='border-border focus-visible:outline-variant-content'
          variants={{ color: 'main' }}
        >
          <Link
            className='no-underline'
            href='/contact'
          >
            Contact me
            <IconButton.Icon animation='slideUpRight'>
              <ArrowUpIcon className='rotate-45' />
            </IconButton.Icon>
          </Link>
        </IconButton>
      </section>
    </Section>
  );
};

export default WorkViewServicesSection;
