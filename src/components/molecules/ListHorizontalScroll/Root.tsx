import { ComponentProps } from 'react';

import { cn } from '@/utils';

type ListHorizontalScrollOrganismOwnProps = {};

type ListHorizontalScrollOrganismProps = ListHorizontalScrollOrganismOwnProps &
  Omit<ComponentProps<'ul'>, keyof ListHorizontalScrollOrganismOwnProps>;

const ListHorizontalScrollOrganism = ({
  className,
  ...props
}: ListHorizontalScrollOrganismProps) => {
  return (
    <ul
      className={cn('m-0 w-full list-none overflow-x-clip p-0', className)}
      {...props}
    />
  );
};

export default ListHorizontalScrollOrganism;
export type { ListHorizontalScrollOrganismProps };
