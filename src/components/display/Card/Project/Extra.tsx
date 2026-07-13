import data from './.data';

import { Text, TextProps } from '@/components/system/Text';
import { Project } from '@/types/Project';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type ProjectCardExtraProps = MergeProps<Pick<Project, 'year' | 'roles'>, TextProps>;

export const ProjectCardExtra = ({ year, roles, className, ...props }: ProjectCardExtraProps) => {
  const sortedRolesStr = roles.toSorted((a, b) => a.localeCompare(b)).join(' & ');

  return (
    <Text
      small
      title={`${year ?? data.noYear} / ${sortedRolesStr}`}
      className={cn('mr-8 line-clamp-1 tracking-wider text-placeholder lowercase', className)}
      {...props}
    >
      <span className='text-xs'>{year ?? data.noYear}</span>
      {' / '}
      {sortedRolesStr}
    </Text>
  );
};
