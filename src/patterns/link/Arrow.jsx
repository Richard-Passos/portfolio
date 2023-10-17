import { Button, Link, Svg } from '@/components/ui';
import { cn } from '@/utils';

const LinkArrow = ({ pointerProps, href, ...props }) => {
  return (
    <Button
      asChild
      
      pointerProps={{
        content: { text: 'Show me' },
        ...pointerProps,
      }}
      {...props}
    >
      <Link href={href}>
        <Svg.Arrow className='relative left-px h-6 w-6 -rotate-45' />
      </Link>
    </Button>
  );
};

export default LinkArrow;
