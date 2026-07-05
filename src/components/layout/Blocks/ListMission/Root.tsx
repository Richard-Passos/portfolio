import CleanLayout, {
  CleanLayoutProps
} from '@/components/layout/wrappers/Clean';
import { ListHorizontalScroll } from '@/components/molecules';
import { MergeProps } from '@/types';
import { entries } from '@/utils';
import { Node, serialize } from '@/utils/serialize';

type ListMissionBlockOwnProps = {
  data: {
    items: Record<string, { text: Node[]; separator: Node[] }>;
    description: Node[];
  };
};

type ListMissionBlockProps = MergeProps<
  ListMissionBlockOwnProps,
  CleanLayoutProps
>;

const ListMissionBlock = ({ data, ...props }: ListMissionBlockProps) => {
  return (
    <CleanLayout {...props}>
      <ListHorizontalScroll.Root>
        {entries(data.items).map(([key, item], i) => {
          const text = serialize(item.text),
            separator = serialize(item.separator);

          return (
            <ListHorizontalScroll.Item
              speed={100 + i * 10}
              direction={i % 2 === 0 ? 'ltr' : 'rtl'}
              className='py-8 font-semibold uppercase odd:-rotate-1 even:rotate-1'
              key={key}
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
    </CleanLayout>
  );
};

export { ListMissionBlock };
export type { ListMissionBlockProps };
