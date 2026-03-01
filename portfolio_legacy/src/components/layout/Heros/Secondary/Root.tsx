import {
  MagneticButton,
  MagneticButtonProps
} from '@/components/input/Button/variants';
import { Section, SectionProps } from '@/components/layout/wrappers';
import { Bg, Lines } from '@/components/misc';
import { ScrollYLines } from '@/components/misc/Lines/variants';
import { Title } from '@/components/system';
import { MergeProps } from '@/types';
import { Node, cn, renderComp, serialize } from '@/utils';

type Action = {
  href?: string;
  label?: Node[];
  onClick?: MagneticButtonProps['onClick'];
};

type SecondaryHeroProps = MergeProps<
  {
    data: {
      title: Node[];
      description?: Node[];
      actions?: {
        primary?: Action;
        secondary?: Action;
      };
    };
  },
  SectionProps
>;

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
              <MagneticButton
                variant='default'
                href={data.actions?.secondary?.href}
                onClick={data.actions?.secondary?.onClick}
              >
                {serialize(data.actions?.secondary?.label)}
              </MagneticButton>,
              [data.actions?.secondary]
            )}

            {renderComp(
              <MagneticButton
                href={data.actions?.primary?.href}
                onClick={data.actions?.primary?.onClick}
              >
                {serialize(data.actions?.primary?.label)}
              </MagneticButton>,
              [data.actions?.primary]
            )}
          </section>,
          [data.actions?.primary ?? data.actions?.secondary]
        )}

        <ScrollYLines className='absolute inset-y-0 right-0 w-2/3 max-w-md' />
      </div>

      <Bg>
        <span className='bg-gray-1 dark:bg-dark-5 absolute inset-x-0 top-0 h-px' />

        <Lines />
      </Bg>
    </Section>
  );
};

export { SecondaryHero };
export type { SecondaryHeroProps };
