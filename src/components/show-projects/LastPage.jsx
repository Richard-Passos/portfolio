'use client'

import { cn } from '@/utils';
import { Text } from '../ui/text';
import { ProjectsShowContext } from '@/contexts';
import { useContext } from 'react';

const ShowProjectsLastPage = ({ className, ...props }) => {
  const { isLastPage, projects = [] } = useContext(ProjectsShowContext);

  return isLastPage && !!projects.length && (
    <Text
      className={cn('text-muted-content', className)}
      {...props}
    />
  );
};

export default ShowProjectsLastPage;