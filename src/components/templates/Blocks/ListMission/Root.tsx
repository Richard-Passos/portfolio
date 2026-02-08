import CleanLayouts, { CleanLayoutsProps } from '@/components/Layouts/Clean';
import { ListHorizontalScroll } from '@/components/molecules';
import serialize, { Node } from '@/utils/serialize';

type ListMissionBlockTemplateOwnProps = {
  data: {
    items: { id: string; text: Node[]; separator: Node[] }[];
    description: Node[];
  };
};

type ListMissionBlockTemplateProps = ListMissionBlockTemplateOwnProps &
  Omit<CleanLayoutsProps, keyof ListMissionBlockTemplateOwnProps>;

const ListMissionBlockTemplate = ({
  data,
  ...props
}: ListMissionBlockTemplateProps) => {
  return (
    <CleanLayouts {...props}>
      <ListHorizontalScroll.Root>
        {data.items.map((item, i) => {
          const text = serialize(item.text),
            separator = serialize(item.separator);

          return (
            <ListHorizontalScroll.Item
              speed={100 + i * 10}
              direction={i % 2 === 0 ? 'ltr' : 'rtl'}
              className='py-8 font-semibold uppercase odd:-rotate-1 even:rotate-1'
              key={item.id}
              order={1}
            >
              <span>{text}</span>

              <div className='size-[1em] rotate-(--rotate)'>{separator}</div>

              <span className='opacity-30 dark:opacity-10'>{text}</span>

              <div className='size-[1em] rotate-(--rotate) opacity-30 max-sm:hidden dark:opacity-10'>
                {separator}
              </div>

              <span className='opacity-30 max-sm:hidden dark:opacity-10'>
                {text}
              </span>

              <div className='size-[1em] rotate-(--rotate)'>{separator}</div>
            </ListHorizontalScroll.Item>
          );
        })}
      </ListHorizontalScroll.Root>

      <section className='w-9by10 mt-8 max-w-xl text-center'>
        {serialize(data.description, {
          paragraph: {
            className: 'leading-relaxed text-dimmed max-sm:text-sm *:text-text'
          }
        })}
      </section>
    </CleanLayouts>
  );
};

export default ListMissionBlockTemplate;
export type { ListMissionBlockTemplateProps };
