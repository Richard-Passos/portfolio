import { Badge, Image, Link, Text, Title } from '@/components/atoms';
import { MagneticRoot } from '@/components/motion/Magnetic';
import { LinkProps } from '@/components/navigation/Link';
import { Project } from '@/types';
import { MergeProps } from '@/types';
import { cn, values } from '@/utils';

type TableProjectCardOwnProps = {
  data: Project & { index: number };
};

type TableProjectCardProps = MergeProps<TableProjectCardOwnProps, LinkProps>;

const TableProjectCard = ({
  className,
  data,
  ...props
}: TableProjectCardProps) => (
  <>
    <Link
      className={cn(
        'bg-body hover:bg-gray-1 dark:hover:bg-dark-5 ease-backOut flex items-center justify-center gap-2.5 rounded border px-[7.5%] py-8 font-medium text-current transition-[scale,opacity] duration-200 group-focus-visible/item:outline',

        // Adjacents
        'group-hover/list:[li:has(+:hover)>&]:scale-x-95! group-hover/list:[li:hover+*>&]:scale-x-95!',

        // Element
        'group-hover/list:[li:not(:hover)>&]:scale-x-90',
        className
      )}
      underline='never'
      {...props}
    >
      <Badge
        color='red'
        variant='default'
        className='mb-auto shrink-0 translate-y-0.5'
      >
        {`${data.index + 1}`.padStart(2, 'Ø')}/
      </Badge>

      <div className='mr-4 grow'>
        <Title
          className='mb-auto shrink-0 basis-full overflow-hidden'
          order={5}
        >
          {data.title}
        </Title>

        <Text className='text-dimmed mt-2 line-clamp-2 text-sm tracking-wider wrap-break-word lowercase'>
          {values(data.roles)
            .toSorted((a, b) => a.localeCompare(b))
            .join(' & ')}
        </Text>
      </div>

      <Text className='text-dimmed shrink-0 text-end text-xs tracking-wider lowercase'>
        {data.year}
      </Text>
    </Link>

    <MagneticRoot
      limit={{ x: 0.25, y: 0.25 }}
      smoothConfig={{
        damping: 15,
        stiffness: 150
      }}
    >
      <div className='bg-gray-1 dark:bg-dark-6 pointer-events-none absolute top-1/2 left-1/2 z-10 aspect-5/4 w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg opacity-0 transition-opacity group-hover/item:opacity-100'>
        <Image
          fill
          alt={data.thumbnail.alt}
          src={data.thumbnail.src}
          sizes='100vw, (min-width: 640px) 50vw, (min-width: 768px) 33vw'
          className='object-cover'
        />
      </div>
    </MagneticRoot>
  </>
);

export { TableProjectCard };
export type { TableProjectCardProps };
