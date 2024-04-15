'use client';

import { Slot } from '@radix-ui/react-slot';
import { useContext } from 'react';

import { ShowProjectsContext } from '@/contexts';
import { isFunctionThanCall } from '@/utils';

const ShowProjectsTypesTrigger = ({
  asChild,
  className,
  type = '',
  ...props
}) => {
  const [state, setState] = useContext(ShowProjectsContext);

  const Tag = asChild ? Slot : 'button',
    isActive = state.type?.toLowerCase() === type.toLowerCase();

  return (
    <Tag
      data-state={isActive ? 'active' : 'inactive'}
      {...props}
      onClick={(ev) => {
        setState((state) => ({ ...state, type }));

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default ShowProjectsTypesTrigger;
