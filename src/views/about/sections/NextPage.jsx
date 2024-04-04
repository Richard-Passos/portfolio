import { NextPage, Section } from '@/components';
import { cn } from '@/utils';

const AboutViewNextPageSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
        className={cn('flex items-center justify-center', className)}
        {...props}
      >
        <NextPage
          {...data}
        />
      </Section>
  );
};

export default AboutViewNextPageSection;