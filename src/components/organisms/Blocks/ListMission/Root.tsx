import { ListHorizontalScroll } from '@/components/molecules';
import serialize, { Node } from '@/utils/serialize';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ListMissionBlockOrganismOwnProps = {
  data: {
    items: { id: string; text: Node[]; separator: Node[] }[];
    description: Node[];
  };
};

type ListMissionBlockOrganismProps = ListMissionBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ListMissionBlockOrganismOwnProps>;

const ListMissionBlockOrganism = ({
  data,
  ...props
}: ListMissionBlockOrganismProps) => {
  return (
    <CleanLayoutBlock {...props}>
      <ListHorizontalScroll.Root>
        {data.items.map((item, i) => {
          const text = serialize(item.text),
            separator = serialize(item.separator);

          return (
            <ListHorizontalScroll.Item
              baseVelocity={(1.5 + 0.25 * i) * (i % 2 === 0 ? 1 : -1)}
              className={`py-xl [--gap:theme(spacing.sm)] font-semibold uppercase *:*:[--rotate:calc(var(--x)*(360deg/12.5))] odd:-rotate-1 even:rotate-1`}
              key={item.id}
              order={1}
            >
              <span>{text}</span>

              <div className='size-[1em] rotate-(--rotate)'>{separator}</div>

              <span className={`opacity-30 dark:opacity-10`}>{text}</span>

              <div
                className={`size-[1em] rotate-(--rotate) opacity-30 max-sm:hidden dark:opacity-10`}
              >
                {separator}
              </div>

              <span className={`opacity-30 max-sm:hidden dark:opacity-10`}>
                {text}
              </span>

              <div className='size-[1em] rotate-(--rotate)'>{separator}</div>
            </ListHorizontalScroll.Item>
          );
        })}
      </ListHorizontalScroll.Root>

      <section className='mt-xl w-9by10 max-w-xl text-center'>
        {serialize(data.description, {
          paragraph: {
            className: 'leading-relaxed text-dimmed max-sm:text-sm *:text-text'
          }
        })}
      </section>
    </CleanLayoutBlock>
  );
};

export default ListMissionBlockOrganism;
export type { ListMissionBlockOrganismProps };
