import { Lines } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import Extra, { PrimaryHeroExtraProps } from './Extra';
import ScrollAnimate from './ScrollAnimate';
import Title, { PrimaryHeroTitleProps } from './Title';

type PrimaryHeroOwnProps = {
  data: {
    title: PrimaryHeroTitleProps['children'];
    description: Node[];
    left: PrimaryHeroExtraProps['children'];
    right: PrimaryHeroExtraProps['children'];
  };
};

type PrimaryHeroProps = PrimaryHeroOwnProps &
  Omit<SectionProps, keyof PrimaryHeroOwnProps>;

const PrimaryHero = ({
  data,
  className,
  bgProps,
  ...props
}: PrimaryHeroProps) => {
  return (
    <Section
      bgProps={{
        ...bgProps,
        className: cn('*:hidden', bgProps?.className)
      }}
      className={cn(
        '3xl:[--inset:calc(var(--max-width-bounds)*.025)] p-(--inset) pt-0 [--inset:2.5vw]',
        className
      )}
      forceTheme
      {...props}
    >
      <div className='relative flex w-full grow overflow-hidden rounded-lg'>
        <ScrollAnimate>
          <div className='relative flex w-full flex-col items-center justify-center'>
            <div className='flex w-full max-w-7xl grow flex-col items-center justify-center p-[calc(var(--inset)*1.5)] sm:scale-(--scale) sm:opacity-(--opacity)'>
              <Title>{data.title}</Title>

              <div className='mt-3 grid w-full grid-cols-3 gap-3'>
                <div>
                  <Extra>{data.left}</Extra>
                </div>

                <div className='col-end-4 justify-self-end text-end lg:order-last'>
                  <Extra>{data.right}</Extra>
                </div>

                <section className='col-span-full max-w-md justify-self-center text-center lg:sr-only'>
                  {serialize(data.description, {
                    paragraph: {
                      className: 'font-medium'
                    }
                  })}
                </section>
              </div>
            </div>

            <Lines className='text-gray-3 dark:text-dark-4 top-auto -z-10 bg-size-[83.333px_66.666px]' />
          </div>
        </ScrollAnimate>

        <span className='rounded-inherit border-gray-3 dark:border-dark-4 pointer-events-none absolute inset-0 border' />
      </div>
    </Section>
  );
};

export default PrimaryHero;
export type { PrimaryHeroProps };
