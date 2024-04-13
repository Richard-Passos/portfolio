'use client'

import { cn } from '@/utils';
import { Text } from '../ui/text';
import { ProjectsShowContext } from '@/contexts';
import { useContext } from 'react';

const ShowProjectsEmpty = ({ className, ...props }) => {
  const { projects } = useContext(ProjectsShowContext);

  return !projects?.length && (
    <Text
      className={cn('text-muted-content', className)}
      {...props}
    />
  );
};

export default ShowProjectsEmpty;