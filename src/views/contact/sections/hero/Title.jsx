import { Badge } from '@/components/ui';
import { TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

const ContactViewHeroTitleSection = ({
  data = {},
  className,
  variants,
  ...props
}) => {
  return (
    <>
      <TextTitle
        asChild
        aria-label={data.title}
        className={cn(
          'relative w-9/10 max-w-screen-lg whitespace-pre-line',
          className,
        )}
        variants={{ size: 'lg', ...variants }}
        {...props}
      >
        <h1>
          {data.title?.split(' ').map((w, i, arr) =>
            i === arr.length - 1 ? (
              <span
                key={i}
                className='relative inline'
              >
                {w}

                <Badge className='absolute bottom-0 right-0 w-max -translate-x-4 -rotate-12 border-variant-content px-[1em] py-[.75em] text-[.24em] lowercase tracking-normal first-letter:uppercase max-sm:translate-y-1/3 sm:text-[.17em]'>
                  {data.subtitle}
                </Badge>
              </span>
            ) : (
              `${w} `
            ),
          )}
        </h1>
      </TextTitle>{' '}
      <span className='sr-only'>{data.subtitle}</span>
    </>
  );
};

export default ContactViewHeroTitleSection;
