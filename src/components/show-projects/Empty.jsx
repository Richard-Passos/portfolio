'use client';

import { useContext } from 'react';

import { ShowProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { Text } from '../ui/text';

const ShowProjectsEmpty = ({ className, ...props }) => {
  const { projects } = useContext(ShowProjectsContext);

  return (
    !projects?.length && (
      <Text
        className={cn('text-muted-content', className)}
        {...props}
      />
    )
  );
};

export default ShowProjectsEmpty;
