import { lineLeftScrollAnim } from '@/animations/scroll';
import { SkillCard } from '@/components/Cards';
import { SkillCardProps } from '@/components/Cards/Skill';
import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/Layouts/Primary';
import { ScrollAnimate, Title } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import SkillsBlockTemplateImage from './Image';
import { SkillsBlockTemplateImageOrganismProps } from './Image/Root';

type SkillsBlockTemplateOwnProps = {
  data: PrimaryLayoutsProps['data'] &
    SkillsBlockTemplateImageOrganismProps['data'] & {
      items: Record<string, SkillCardProps['data'][]>;
      action?: {
        label: Node[];
      };
    };
};

type SkillsBlockTemplateProps = SkillsBlockTemplateOwnProps &
  Omit<PrimaryLayoutsProps, keyof SkillsBlockTemplateOwnProps>;

const SkillsBlockTemplate = ({ data, ...props }: SkillsBlockTemplateProps) => {
  return (
    <PrimaryLayouts
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <section className='w-9by10 flex max-w-6xl items-start justify-end gap-4 md:gap-10'>
        <SkillsBlockTemplateImage
          className='grow basis-72 max-md:hidden'
          data={{
            image: data.image
          }}
        />

        <section className='flex max-w-2xl flex-col gap-10 py-10'>
          {Object.entries(data.items).map(([key, data]) => (
            <section key={key}>
              <div className='mb-5 flex items-center gap-2'>
                <span className='relative h-1 w-6 shrink-0'>
                  <ScrollAnimate
                    config={lineLeftScrollAnim}
                    layout
                  >
                    <span className='bg-body absolute inset-0 border' />
                  </ScrollAnimate>
                </span>

                <Title
                  order={6}
                  className='capitalize'
                >
                  {key}
                </Title>
              </div>

              <ul className='m-0 flex list-none flex-wrap gap-2.5 p-0'>
                {data.map((d) => (
                  <li key={d.slug}>
                    <SkillCard data={d} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>

        {renderComp(
          <Action
            as='link'
            className='mt-8'
            href='/contact'
            size='md'
            variant='default'
          >
            {serialize(data.action?.label)}
          </Action>,
          [data.action]
        )}
      </section>
    </PrimaryLayouts>
  );
};

export default SkillsBlockTemplate;
export type { SkillsBlockTemplateProps };
