import { Badge } from '@/components/ui';
import { TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

const ContactViewHeroTitleSection = ({ className, ...props }) => {
  return (
    <TextTitle
      asChild
      className={cn(
        'relative z-20 mb-lg w-9/10 max-w-screen-lg max-sm:text-center sm:-mb-md',
        className,
      )}
      variants={{ size: 'lg' }}
      {...props}
    >
      <h1>
        Drowning with
        <br />
        great{' '}
        <span className='relative inline'>
          ideas?{' '}
          <Badge className='absolute bottom-0 right-0 -translate-x-4 -rotate-12 border-variant-content px-[1.5em] py-[.75em] text-[.17em] font-semibold normal-case tracking-normal'>
            Let&apos;s make&apos;em fly
          </Badge>
        </span>
      </h1>
    </TextTitle>
  );
};

export default ContactViewHeroTitleSection;
