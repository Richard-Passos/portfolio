import { lineLeftScrollAnim } from '@/animations/scroll';
import { ScrollAnimate, Title } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { SkillCard } from '@/components/organisms/Cards';
import PrimaryLayouts, {
  PrimaryLayoutsProps
} from '@/components/organisms/Layouts/Primary';
import { Skill } from '@/types';
import { entries, renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import SkillsBlockImage from './Image';
import { SkillsBlockImageOrganismProps } from './Image/Root';

type SkillsBlockOwnProps = {
  data: PrimaryLayoutsProps['data'] &
    SkillsBlockImageOrganismProps['data'] & {
      items: Record<string, Record<string, Skill>>;
      action?: {
        label: Node[];
      };
    };
};

type SkillsBlockProps = SkillsBlockOwnProps &
  Omit<PrimaryLayoutsProps, keyof SkillsBlockOwnProps>;

const SkillsBlock = ({ data, ...props }: SkillsBlockProps) => {
  return (
    <PrimaryLayouts
      data={{
        title: data.title,
        description: data.description
      }}
      {...props}
    >
      <section className='w-9by10 flex max-w-6xl items-start justify-end gap-4 md:gap-10'>
        <SkillsBlockImage
          className='grow basis-72 max-md:hidden'
          data={{
            image: data.image
          }}
        />

        <section className='flex max-w-2xl flex-col gap-10 py-10'>
          {entries(data.items).map(([key, data]) => (
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
                {entries(data).map(([k, d]) => (
                  <li key={k}>
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

export default SkillsBlock;
export type { SkillsBlockProps };
