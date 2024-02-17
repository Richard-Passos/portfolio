import { Bg, Lines, Values } from '@/components';
import { Icon, Text } from '@/components/ui';
import { values } from '@/constants';
import { cn } from '@/utils';

const AboutViewValuesSection = ({ theme, className, ...props }) => {
  return (
    <section
      className={cn('pb-md relative w-9/10 max-w-screen-xl', theme, className)}
      {...props}
    >
      <Values aria-labelledby='values-heading'>
        <li className='sm:pt-sm h-full space-y-1.5'>
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
