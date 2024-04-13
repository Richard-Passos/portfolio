'use client';

import { Slot } from '@radix-ui/react-slot';
import { useContext } from 'react';

import { ShowProjectsContext } from '@/contexts';
import { isFunctionThanCall } from '@/utils';

const ShowProjectsTypesTrigger = ({ asChild, className, type = '', ...props }) => {
  const { type: activeType = '', setType } = useContext(ShowProjectsContext);

  const Tag = asChild ? Slot : 'button',
    isActive = activeType.toLowerCase() === type.toLowerCase();

  return (
    <Tag
      data-state={isActive ? 'active' : 'inactive'}
      {...props}
      onClick={(ev) => {
        setType(type);

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default ShowProjectsTypesTrigger;
