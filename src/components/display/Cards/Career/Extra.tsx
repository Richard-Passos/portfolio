import { Text, TextProps } from '@/components/system/Text';
import { Career } from '@/types/Career';
import { MergeProps } from '@/types/MergeProps';
import { Timestamp } from '@/types/Timestamp';
import { cn } from '@/utils/cn';

export type CareerCardExtraProps = MergeProps<
  { present: string } & Pick<Career, 'start' | 'end' | 'roles'>,
  TextProps
>;

export const CareerCardExtra = ({
  start,
  end,
  roles,
  present,
  className,
  ...props
}: CareerCardExtraProps) => {
  const startYear = new Date(start).getFullYear();
  const endYear = end ? new Date(end).getFullYear() : present;
  const sortedRolesStr = roles.toSorted((a, b) => a.localeCompare(b)).join(' & ');

  return (
    <Text
      small
      title={`${startYear} — ${endYear} / ${sortedRolesStr}`}
      className={cn('mt-2 mr-8 line-clamp-1 tracking-wider text-placeholder lowercase', className)}
      {...props}
    >
      <span className='text-xs'>
        {startYear} — {endYear}
      </span>
      {' / '}
      {sortedRolesStr}
    </Text>
  );
};
