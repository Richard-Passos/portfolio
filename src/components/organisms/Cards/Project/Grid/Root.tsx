import { imageYScrollAnim } from '@/animations/scroll';
import { Image, Link, ScrollAnimate, Text, Title } from '@/components/atoms';
import { LinkProps } from '@/components/atoms/Link';
import { Project } from '@/types';
import { cn, renderComp, values } from '@/utils';

type GridProjectCardOrganismOwnProps = {
  data: Project;
};

type GridProjectCardOrganismProps = GridProjectCardOrganismOwnProps &
  Omit<LinkProps, keyof GridProjectCardOrganismOwnProps>;

const GridProjectCardOrganism = ({
  className,
  data,
  ...props
}: GridProjectCardOrganismProps) => {
  return (
    <Link
      className={cn(
        'group/item block aspect-square w-full text-current',
        className
      )}
      underline='never'
      {...props}
    >
      <div className='relative flex size-full flex-col'>
        <div className='grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover/item:grid-rows-[1fr]'>
          <div className='translate-y-2 overflow-hidden transition-transform duration-300 group-hover/item:translate-y-0'>
            <div className='px-4 pb-1'>
              <Title
                component='h4'
                order={6}
              >
                {data.title}
              </Title>
            </div>
          </div>
        </div>

        <div className='dark:bg-6 bg-gray-1 relative grow overflow-hidden rounded-xl'>
          <ScrollAnimate config={imageYScrollAnim}>
            <div className='absolute h-[115%] w-full'>
              <Image
                alt={data.thumbnail.alt}
                className='object-cover'
                fill
                sizes='100vw, (min-width: 640px) 50vw, (min-width: 1280px) 33vw'
                src={data.thumbnail.src}
              />
            </div>
          </ScrollAnimate>
        </div>

        <div className='grid origin-bottom grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover/item:grid-rows-[1fr]'>
          <div className='translate-y-2 overflow-hidden transition-transform duration-300 group-hover/item:translate-y-0'>
            <div className='flex gap-5 px-4 pt-1'>
              <Text className='col-span-3 text-sm font-medium'>
                {values(data.roles)
                  .toSorted((a, b) => a.localeCompare(b))
                  .join(' & ')}
              </Text>

              {renderComp(
                <Text className='justify-self-end text-end text-sm font-medium'>
                  {data.year}
                </Text>,
                [data.year]
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GridProjectCardOrganism;
export type { GridProjectCardOrganismProps };
