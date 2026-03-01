import { Image, ImageProps } from '@/components/display';
import { Section, SectionProps } from '@/components/layout/wrappers';
import { ScrollAnimate } from '@/components/motion';
import { imageY } from '@/components/motion/ScrollAnimate/animations';
import { MergeProps } from '@/types';
import { Node, entries, serialize } from '@/utils';

type ProjectImagesBlockProps = MergeProps<
  {
    data: {
      description?: Node[];
      items: Record<string, Pick<ImageProps, 'src' | 'alt'>>;
    };
  },
  SectionProps
>;

const ProjectImagesBlock = ({ data, ...props }: ProjectImagesBlockProps) => {
  return (
    <Section {...props}>
      <div className='w-9by10 flex max-w-7xl gap-4 max-md:flex-col md:justify-end'>
        <section className='w-full max-w-48 md:max-w-36'>
          {serialize(data.description ?? [], {
            paragraph: {
              className: 'text-dimmed *:text-text'
            }
          })}
        </section>

        <div className='flex max-w-3xl grow flex-col items-center gap-2.5'>
          {entries(data.items).map(([key, data]) => (
            <div
              className={
                'bg-gray-1 dark:bg-dark-6 relative aspect-square w-full overflow-hidden rounded-xl border'
              }
              key={key}
            >
              <ScrollAnimate config={imageY}>
                <div className='absolute h-[115%] w-full'>
                  <Image
                    alt={data.alt}
                    className='object-cover'
                    fill
                    sizes='100vw, (min-width: 1536px) 50vw'
                    src={data.src}
                  />
                </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export { ProjectImagesBlock };
export type { ProjectImagesBlockProps };
