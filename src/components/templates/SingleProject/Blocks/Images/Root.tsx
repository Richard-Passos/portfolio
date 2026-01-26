import { imageYScrollAnim } from '@/animations/scroll';
import { Image, ScrollAnimate } from '@/components/atoms';
import { ImageProps } from '@/components/atoms/Image';
import { Section } from '@/components/organisms';
import { SectionProps } from '@/components/organisms/Section';
import serialize, { Node } from '@/utils/serialize';

type SingleProjectImagesTemplateOwnProps = {
  data: {
    description?: Node[];
    items: ({ id: string } & Pick<ImageProps, 'src' | 'alt'>)[];
  };
};

type SingleProjectImagesTemplateProps = SingleProjectImagesTemplateOwnProps &
  Omit<SectionProps, keyof SingleProjectImagesTemplateOwnProps>;

const SingleProjectImagesTemplate = ({
  data,
  ...props
}: SingleProjectImagesTemplateProps) => {
  return (
    <Section {...props}>
      <div className='gap-md w-9by10 flex max-w-7xl max-md:flex-col md:justify-end'>
        <section className='w-full max-w-48 md:max-w-36'>
          {serialize(data.description ?? [], {
            paragraph: {
              className: 'text-dimmed *:text-text'
            }
          })}
        </section>

        <div className='gap-xs flex max-w-3xl grow flex-col items-center'>
          {data.items.map((data) => (
            <div
              className={
                'bg-gray-1 dark:bg-dark-6 relative aspect-square w-full overflow-hidden rounded-xl border'
              }
              key={data.id}
            >
              <ScrollAnimate config={imageYScrollAnim}>
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

export default SingleProjectImagesTemplate;
export type { SingleProjectImagesTemplateProps };
