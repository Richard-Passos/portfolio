import { Bg, Lines, Values } from '@/components';
import { Icon, Text } from '@/components/ui';
import { values } from '@/constants';
import { cn } from '@/utils';

const AboutViewValuesSection = ({ theme, className, ...props }) => {
  return (
    <section
      className={cn('relative w-9/10 max-w-screen-xl pb-md', theme, className)}
      {...props}
    >
      <Values aria-labelledby='values-heading'>
        <li className='h-full space-y-1.5 sm:pt-sm'>
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
