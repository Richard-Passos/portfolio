import { Section, Values } from '@/components';
import { Badge, Icon, Text } from '@/components/ui';
import { values } from '@/constants';
import { cn } from '@/utils';

const WorkViewValuesSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('w-9/10 max-w-screen-xl space-y-md', className)}
      {...props}
    >
      <Text.Title
        className='text-7xl font-extrabold uppercase tracking-tight sm:text-8xl'
        id='carousel-skills-heading-0'
      >
        My <br />{' '}
        <span className='relative inline'>
          values{' '}
          <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
            Always improving
          </Badge>
        </span>
      </Text.Title>

      <Values>
        {values.map(({ icon, title, description }) => (
          <Values.Item key={title}>
            <Values.Icon>
              <Icon name={icon} />
            </Values.Icon>

            <Values.Title>{title}</Values.Title>

            <Values.Description>{description}</Values.Description>
          </Values.Item>
        ))}
      </Values>
    </Section>
  );
};

export default WorkViewValuesSection;
