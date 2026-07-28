import { Text, TextProps } from '@/components/system/Text';
import { Project } from '@/types/Project';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { useIntlayer } from 'next-intlayer/server';

export type ProjectCardExtraProps = MergeProps<Pick<Project, 'year' | 'roles'>, TextProps>;

export const ProjectCardExtra = ({ year, roles, className, ...props }: ProjectCardExtraProps) => {
  const t = useIntlayer('project-card');
  const sortedRolesStr = roles.toSorted((a, b) => a.localeCompare(b)).join(' & ');

  return (
    <Text
      small
      title={`${year ?? t.noYear} / ${sortedRolesStr}`}
      className={cn('mr-8 line-clamp-1 tracking-wider text-placeholder lowercase', className)}
      {...props}
    >
      <span className='text-xs'>{year ?? t.noYear}</span>
      {' / '}
      {sortedRolesStr}
    </Text>
  );
};
