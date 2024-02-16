import {
  ScrollTitle,
  Section,
  Services,
  TextScrollAnimation,
} from '@/components';
import { Separator, Text } from '@/components/ui';
import { services } from '@/constants';
import { cn } from '@/utils';

const WorkViewServices = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col items-center gap-md', className)}
      {...props}
    >
      <h2 className='w-full'>
        <ScrollTitle title='SERVICES' />
      </h2>

      <section className='flex w-[90%] max-w-screen-xl justify-between gap-sm max-sm:flex-col'>
        <Text className='max-w-lg text-4xl/tight font-medium sm:text-5xl/tight'>
          <TextScrollAnimation text='We help our clients entertain, inform, and inspire the world.' />
        </Text>

        <Text className='max-w-lg text-muted-content'>
          With a vision for innovation and excellence, we create cohesive brand
          transformations that reflect the values and ethos of your company.
        </Text>
      </section>

      <section className='mt-[--gap-lg] w-[90%] max-w-screen-xl space-y-md'>
        <Text.Subtitle className='text-center text-2xl'>
          I could help you with...
        </Text.Subtitle>

        <Services>
          {services.map(({ title, description }, i) => (
            <Services.Item key={title}>
              <Services.Number index={i} />

              <Separator />

              <Services.Title>{title}</Services.Title>

              <Services.Description>{description}</Services.Description>
            </Services.Item>
          ))}
        </Services>
      </section>
    </Section>
  );
};

export default WorkViewServices;
