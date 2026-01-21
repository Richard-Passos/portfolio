import { Image, Link, Magnetic, Text, Title } from '@/components/atoms';
import { LinkProps } from '@/components/atoms/Link';
import { CardRoot } from '@/components/molecules/Card';
import { Project } from '@/types';
import { cn, renderComp, values } from '@/utils';

type TableProjectCardOrganismOwnProps = {
  data: Project & { index: number };
};

type TableProjectCardOrganismProps = TableProjectCardOrganismOwnProps &
  Omit<LinkProps, keyof TableProjectCardOrganismOwnProps>;

const TableProjectCardOrganism = ({
  className,
  data,
  ...props
}: TableProjectCardOrganismProps) => {
  return (
    <Magnetic.Container>
      <Link
        className={cn(
          `group/item relative flex items-center justify-center font-normal text-current focus-visible:outline-0`,
          className
        )}
        underline='never'
        {...props}
      >
        <CardRoot
          className={cn(
            `gap-xs py-xl ease-backOut flex-row items-start px-[7.5%] transition-[scale,opacity] duration-300 group-focus-visible/item:outline`,

            `group-hover/list:group-[:hover+*]/item:scale-x-95 group-hover/list:group-[:not(:hover)]/item:scale-x-90`,

            'group-hover/list:group-[:not(:hover)]/item:opacity-50'
          )}
        >
          <Text
            className={`text-dimmed relative shrink-0 translate-y-0.5 text-sm font-semibold`}
          >
            <span
              aria-hidden
              className='opacity-0'
            >
              00/
            </span>

            <span className='absolute right-0'>
              {`${data.index + 1}`.padStart(2, '0')}/
            </span>
          </Text>

          <div className='gap-x-sm gap-y-xs flex grow items-center'>
            <Title
              className={`mb-auto shrink-0 basis-full overflow-hidden text-nowrap text-ellipsis sm:basis-1/2`}
              order={4}
            >
              {data.title}
            </Title>

            <Text
              className={`line-clamp-2 grow text-sm font-medium wrap-break-word lowercase sm:text-end`}
            >
              {values(data.roles)
                .toSorted((a, b) => a.localeCompare(b))
                .join(' & ')}
            </Text>

            {renderComp(
              <Text
                className={`shrink-0 basis-1/3 text-end text-sm font-medium sm:basis-1/12`}
              >
                {data.year}
              </Text>,
              [data.year]
            )}
          </div>
        </CardRoot>

        <Magnetic.Root
          limit={{ x: 0.2, y: 0.2 }}
          smoothConfig={{
            damping: 15,
            stiffness: 150
          }}
        >
          <div className='pointer-events-none absolute z-10'>
            <div
              className={`bg-gray-1 dark:bg-dark-6 relative aspect-square w-72 overflow-hidden rounded-lg opacity-0 transition-opacity group-hover/item:opacity-100`}
            >
              <Image
                alt={data.thumbnail.alt}
                className='object-cover'
                fill
                sizes='100vw, (min-width: 640px) 50vw, (min-width: 768px) 33vw'
                src={data.thumbnail.src}
              />
            </div>
          </div>
        </Magnetic.Root>
      </Link>
    </Magnetic.Container>
  );
};

export default TableProjectCardOrganism;
export type { TableProjectCardOrganismProps };
