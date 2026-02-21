import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate, Title } from '@/components/atoms';
import Action, { ActionProps } from '@/components/molecules/Action';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn, renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type Action = {
  href?: string;
  label?: Node[];
  onClick?: ActionProps['onClick'];
};

type SecondaryHeroOwnProps = {
  data: {
    title: Node[];
    description?: Node[];
    actions?: {
      primary?: Action;
      secondary?: Action;
    };
  };
};

type SecondaryHeroProps = SecondaryHeroOwnProps &
  Omit<SectionProps, keyof SecondaryHeroOwnProps>;

const SecondaryHero = ({ data, className, ...props }: SecondaryHeroProps) => {
  return (
    <Section
      className={cn('3xl:min-h-fit min-h-fit pt-16', className)}
      forceTheme
      {...props}
    >
      <div className='w-9by10 relative max-w-5xl pt-16 pb-24'>
        <Title
          className='relative z-10 max-w-md wrap-break-word uppercase md:max-w-lg lg:max-w-xl xl:max-w-[75%]'
          order={1}
        >
          {serialize(data.title)}
        </Title>

        {renderComp(
          <section className='max-w-2xl'>
            {serialize(data.description)}
          </section>,
          [data.description?.length]
        )}

        {renderComp(
          <section className='mt-8 flex items-center gap-2.5'>
            {renderComp(
              <Action
                as={data.actions?.secondary?.href ? 'link' : 'button'}
                href={data.actions?.secondary?.href ?? ''}
                onClick={data.actions?.secondary?.onClick}
                variant='default'
              >
                {serialize(data.actions?.secondary?.label)}
              </Action>,
              [data.actions?.secondary]
            )}

            {renderComp(
              <Action
                as={data.actions?.primary?.href ? 'link' : 'button'}
                href={data.actions?.primary?.href ?? ''}
                onClick={data.actions?.primary?.onClick}
              >
                {serialize(data.actions?.primary?.label)}
              </Action>,
              [data.actions?.primary]
            )}
          </section>,
          [data.actions?.primary ?? data.actions?.secondary]
        )}

        <div className='bg-body absolute inset-y-0 right-0 flex w-2/3 max-w-md items-center justify-center overflow-hidden rounded-lg border'>
          <ScrollAnimate config={yFullScrollAnim}>
            <Lines className='text-gray-3 dark:text-dark-4 h-screen translate-y-0 bg-size-[83.333px_66.666px]' />
          </ScrollAnimate>
        </div>
      </div>

      <span className='bg-gray-1 dark:bg-dark-5 absolute top-0 h-px w-screen' />
    </Section>
  );
};

export default SecondaryHero;
export type { SecondaryHeroProps };
