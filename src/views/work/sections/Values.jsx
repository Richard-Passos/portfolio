import { Section, Values } from '@/components';
import { Icon, Text } from '@/components/ui';
import { values } from '@/constants';
import { cn } from '@/utils';

const WorkViewValuesSection = ({ className, ...props }) => {
  return (
    <Section
      className={cn('w-[90%] max-w-screen-xl', className)}
      {...props}
    >
      <Values aria-labelledby='values-heading'>
        <li className='h-full space-y-1.5 [--p:8vw] sm:pt-[min(var(--p),theme(spacing.8))] md:[--p:2.5vw]'>
          <Text.Title
            className='text-xs uppercase'
            id='values-heading'
          >
            My values
          </Text.Title>

          <Text className='text-lg text-muted-content'>Always improving.</Text>
        </li>

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
