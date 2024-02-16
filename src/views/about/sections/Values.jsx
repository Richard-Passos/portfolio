import { Bg, Lines, Values } from '@/components';
import { Icon, Text } from '@/components/ui';
import { values } from '@/constants';
import { cn } from '@/utils';

const AboutViewValuesSection = ({ theme, className, ...props }) => {
  return (
    <section
      className={cn(
        'relative w-[90%] max-w-screen-xl pb-[min(28vh,theme(spacing.28))]',
        theme,
        className,
      )}
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

      <Bg />
      <Lines />
    </section>
  );
};

export default AboutViewValuesSection;
