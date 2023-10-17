import { Button, Link, Svg } from '@/components/ui';

const LinkArrow = ({ cursorProps, href, ...props }) => {
  return (
    <Button
      asChild
      cursorProps={{
        content: { text: 'Show me' },
        ...cursorProps,
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
