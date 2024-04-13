'use client';

import { useContext } from 'react';

import { ShowProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { Text } from '../ui/text';

const ShowProjectsLastPage = ({ className, ...props }) => {
  const { isLastPage, projects = [] } = useContext(ShowProjectsContext);

  return (
    isLastPage &&
    !!projects.length && (
      <Text
        className={cn('text-muted-content', className)}
        {...props}
      />
    )
  );
};

export default ShowProjectsLastPage;
