import SkillCard, { SkillCardProps } from '@/components/Cards/Skill';
import { cn } from '@/utils';

import SecondaryLayoutBlock, {
  SecondaryLayoutBlockProps
} from '../Layout/Secondary';

type SkillsBlockOrganismOwnProps = {
  data: SecondaryLayoutBlockProps['data'] & {
    items: SkillCardProps['data'][];
  };
};

type SkillsBlockOrganismProps = SkillsBlockOrganismOwnProps &
  Omit<SecondaryLayoutBlockProps, keyof SkillsBlockOrganismOwnProps>;

const SkillsBlockOrganism = ({
  className,
  data,
  ...props
}: SkillsBlockOrganismProps) => {
  return (
    <SecondaryLayoutBlock
      className={cn(`min-h-fit 2xl:min-h-fit`, className)}
      data={{
        title: data.title
      }}
      {...props}
    >
      <div className='w-9by10 max-w-7xl'>
        <ul className='m-0 flex max-w-3xl list-none flex-wrap justify-end gap-2.5 p-0 sm:ml-auto'>
          {data.items.map((data) => (
            <li
              className='w-full max-w-40'
              key={data.slug}
            >
              <SkillCard
                className='w-full'
                data={data}
              />
            </li>
          ))}
        </ul>
      </div>
    </SecondaryLayoutBlock>
  );
};

export default SkillsBlockOrganism;
export type { SkillsBlockOrganismProps };
