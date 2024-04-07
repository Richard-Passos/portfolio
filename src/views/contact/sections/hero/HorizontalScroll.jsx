import { HorizontalScroll } from '@/components';
import { TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

const ContactViewHeroHorizontalScrollSection = ({
  className,
  text,
  ...props
}) => {
  return (
    <div
      className={cn('relative', className)}
      {...props}
    >
      <TextTitle
        asChild
        className='line-clamp-1 opacity-0'
        variants={{ size: 'xl' }}
      >
        <h1>{text}</h1>
      </TextTitle>

      <div
        aria-hidden
        className='absolute top-0 w-[90vw] max-w-screen-lg'
      >
          <TextTitle
            asChild
            variants={{ size: 'xl' }}
          >
        <HorizontalScroll baseVelocity={1.5} className='absolute left-1/2 w-screen max-w-bounds -translate-x-1/2'>
            {text}&nbsp;
        </HorizontalScroll>
          </TextTitle>
      </div>
    </div>
  );
};

export default ContactViewHeroHorizontalScrollSection;
