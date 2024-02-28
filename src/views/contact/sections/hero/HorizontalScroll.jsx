import { HorizontalScroll } from '@/components';
import { TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

const ContactViewHeroHorizontalScrollSection = ({ className, ...props }) => {
  return (
    <div
      className={cn('relative mb-md', className)}
      {...props}
    >
      <TextTitle
        aria-hidden
        asChild
        className='font-medium opacity-0'
        variants={{ size: 'lg' }}
      >
        <span>A</span>
      </TextTitle>

      <div className='absolute top-0 w-[90vw] max-w-screen-lg'>
        <HorizontalScroll className='absolute left-1/2 w-screen max-w-bounds -translate-x-1/2'>
          <TextTitle
            asChild
            className='font-medium'
            variants={{ size: 'lg' }}
          >
            <span>
              Get in touch · 保持联系 · Ponerse en contacto · Neem contact op
              ·&nbsp;
            </span>
          </TextTitle>
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default ContactViewHeroHorizontalScrollSection;
