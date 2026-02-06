import { Lines } from '@/components/atoms';
import { ScrollToProps } from '@/components/atoms/ScrollTo';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import PrimaryHeroExtra, { PrimaryHeroExtraProps } from './Extra';
import PrimaryHeroScrollAnimate from './ScrollAnimate';
import PrimaryHeroTitle, { PrimaryHeroTitleProps } from './Title';

type PrimaryHeroOwnProps = {
  data: {
    title: PrimaryHeroTitleProps['children'];
    description: Node[];
    left: PrimaryHeroExtraProps['children'];
    right: PrimaryHeroExtraProps['children'];
  };
  scrollTarget?: ScrollToProps['target'];
};

type PrimaryHeroProps = PrimaryHeroOwnProps &
  Omit<SectionProps, keyof PrimaryHeroOwnProps>;

const PrimaryHero = ({
  data,
  className,
  bgProps,
  scrollTarget,
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
        <PrimaryHeroScrollAnimate>
          <div className='relative flex w-full flex-col items-center justify-center'>
            <div className='flex w-full max-w-7xl grow flex-col items-center justify-center p-[calc(var(--inset)*1.5)] sm:scale-(--scale) sm:opacity-(--opacity)'>
              <PrimaryHeroTitle>{data.title}</PrimaryHeroTitle>

              <div className='mt-3 grid w-full grid-cols-3 gap-3'>
                <div>
                  <PrimaryHeroExtra>{data.left}</PrimaryHeroExtra>
                </div>

                <div className='col-end-4 justify-self-end text-end lg:order-last'>
                  <PrimaryHeroExtra>{data.right}</PrimaryHeroExtra>
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

            <Lines className='text-border! top-auto -z-10 bg-size-[83.333px_66.666px] opacity-60' />
          </div>
        </PrimaryHeroScrollAnimate>

        <span className='rounded-inherit pointer-events-none absolute inset-0 border opacity-60' />
      </div>
    </Section>
  );
};

export default PrimaryHero;
export type { PrimaryHeroProps };
