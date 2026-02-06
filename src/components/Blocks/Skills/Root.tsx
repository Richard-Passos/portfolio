import SkillCard, { SkillCardProps } from '@/components/Cards/Skill';
import SecondaryLayouts, {
  SecondaryLayoutsProps
} from '@/components/Layouts/Secondary';
import { cn } from '@/utils';

type SkillsBlockOwnProps = {
  data: SecondaryLayoutsProps['data'] & {
    items: SkillCardProps['data'][];
  };
};

type SkillsBlockProps = SkillsBlockOwnProps &
  Omit<SecondaryLayoutsProps, keyof SkillsBlockOwnProps>;

const SkillsBlock = ({ className, data, ...props }: SkillsBlockProps) => {
  return (
    <SecondaryLayouts
      className={cn(`3xl:min-h-fit min-h-fit`, className)}
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
    </SecondaryLayouts>
  );
};

export default SkillsBlock;
export type { SkillsBlockProps };
