import { Lines } from '@/components/atoms';
import { ScrollToProps } from '@/components/atoms/ScrollTo';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import PrimaryHeroTemplateExtra, {
  PrimaryHeroTemplateExtraProps
} from './Extra';
import PrimaryHeroTemplateScrollAnimate from './ScrollAnimate';
import PrimaryHeroTemplateTitle, {
  PrimaryHeroTemplateTitleProps
} from './Title';

type PrimaryHeroTemplateOwnProps = {
  data: {
    title: PrimaryHeroTemplateTitleProps['children'];
    description: Node[];
    left: PrimaryHeroTemplateExtraProps['children'];
    right: PrimaryHeroTemplateExtraProps['children'];
  };
  scrollTarget?: ScrollToProps['target'];
};

type PrimaryHeroTemplateProps = PrimaryHeroTemplateOwnProps &
  Omit<SectionProps, keyof PrimaryHeroTemplateOwnProps>;

const PrimaryHeroTemplate = ({
  data,
  className,
  bgProps,
  scrollTarget,
  ...props
}: PrimaryHeroTemplateProps) => {
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
        <PrimaryHeroTemplateScrollAnimate>
          <div className='relative flex w-full flex-col items-center justify-center'>
            <div className='flex w-full max-w-7xl grow flex-col items-center justify-center p-[calc(var(--inset)*1.5)] sm:scale-(--scale) sm:opacity-(--opacity)'>
              <PrimaryHeroTemplateTitle>{data.title}</PrimaryHeroTemplateTitle>

              <div className='mt-3 grid w-full grid-cols-3 gap-3'>
                <div>
                  <PrimaryHeroTemplateExtra>
                    {data.left}
                  </PrimaryHeroTemplateExtra>
                </div>

                <div className='col-end-4 justify-self-end text-end lg:order-last'>
                  <PrimaryHeroTemplateExtra>
                    {data.right}
                  </PrimaryHeroTemplateExtra>
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
        </PrimaryHeroTemplateScrollAnimate>

        <span className='rounded-inherit border-gray-3 dark:border-dark-4 pointer-events-none absolute inset-0 border' />
      </div>
    </Section>
  );
};

export default PrimaryHeroTemplate;
export type { PrimaryHeroTemplateProps };
