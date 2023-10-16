import { Bg } from '@/components';
import { Svg, Text } from '@/components/ui';
import { cn } from '@/utils';

import Button from '../button';

const FooterContent = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'light relative h-full w-full text-content',
        className,
      )}
      {...props}
    >
      <Bg />

      <Text.Title className='text-7xl'>Let&apos; work together</Text.Title>

      <Button>
        <Svg.HandHorns className='w-4' /> <span>let&apos;s do this</span>
      </Button>
    </section>
  );
};

export default FooterContent;
