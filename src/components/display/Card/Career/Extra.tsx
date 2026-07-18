import data from './.data';

import { Text, TextProps } from '@/components/system/Text';
import { Career } from '@/types/Career';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type CareerCardExtraProps = MergeProps<Pick<Career, 'start' | 'end' | 'roles'>, TextProps>;

export const CareerCardExtra = ({
  start,
  end,
  roles,
  className,
  ...props
}: CareerCardExtraProps) => {
  const startYear = new Date(start).getFullYear();
  const endYear = end ? new Date(end).getFullYear() : data.noEnd;
  const rolesStr = roles.join(' & ');

  return (
    <Text
      small
      title={`${startYear} — ${endYear} / ${rolesStr}`}
      className={cn('mr-8 line-clamp-1 tracking-wider text-placeholder lowercase', className)}
      {...props}
    >
      <span className='text-xs'>
        {startYear} — {endYear}
      </span>
      {' / '}
      {rolesStr}
    </Text>
  );
};
