import { NextPage, Section } from '@/components';
import { cn } from '@/utils';

const AboutViewNextPageSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      className={cn('!min-h-0', className)}
      {...props}
    >
      <NextPage data={data} />
    </Section>
  );
};

export default AboutViewNextPageSection;
