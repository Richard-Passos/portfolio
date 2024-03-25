import { ScrollTitle, Section } from '@/components';
import { ScrollAnimateTransform } from '@/components/scroll-animate';
import { Image } from '@/components/ui';
import { cn } from '@/utils';

const ProjectViewImagesSection = async ({ promise, className, ...props }) => {
  const data = (await promise).data?.images || [];

  return (
    <Section
      className={cn(
        'relative z-10 flex w-full flex-col items-center',
        className,
      )}
      {...props}
    >
      <h2 className='mb-lg flex w-full flex-col'>
        <ScrollTitle title='GREAT' />
        <ScrollTitle
          dir='rtl'
          title='IMAGES'
        />
      </h2>

      <ul className='flex w-9/10 flex-col gap-sm'>
        {data.map((img) => (
          <li
            className='relative flex aspect-square w-full items-center justify-center overflow-hidden'
            key={img.src}
          >
            <Image
              className='size-1/3 rounded-md object-cover shadow-lg max-sm:hidden'
              {...img}
            />

            <div className='absolute -inset-y-[7.5%] inset-x-0 -z-10'>
              <ScrollAnimateTransform
                config={{ propPoints: ['-15%', '15%'] }}
              >
                <Image
                  quality={100}
                  className='size-full object-cover'
                  {...img}
                />
              </ScrollAnimateTransform>
            </div>

            <span className='absolute inset-0 -z-10 bg-main/10' />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ProjectViewImagesSection;
