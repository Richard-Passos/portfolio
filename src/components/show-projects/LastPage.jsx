'use client';

import { useContext } from 'react';

import { ShowProjectsContext } from '@/contexts';
import { cn } from '@/utils';

import { Text } from '../ui/text';

const ShowProjectsLastPage = ({ className, ...props }) => {
  const [{ isLastPage, items = [] }] = useContext(ShowProjectsContext);

  return (
    isLastPage &&
    !!items.length && (
      <Text
        className={cn('text-muted-content', className)}
        {...props}
      />
    )
  );
};

export default ShowProjectsLastPage;
