'use client';

import { useContext } from 'react';

import { ProjectsShowContext } from '@/contexts';
import {  isFunctionThanCall } from '@/utils';
import { Slot } from '@radix-ui/react-slot';

const ProjectsViewShowTypesTrigger = ({ asChild,
  className,
  type,
  ...props
}) => {
  const { type: activeType, setType } = useContext(ProjectsShowContext);

  const Tag = asChild ? Slot : 'button',
  isActive = activeType === type

  return (
    <Tag
      data-state={isActive? 'active' : 'inactive'}
      {...props}
      onClick={(ev) => {
        setType(type);

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default ProjectsViewShowTypesTrigger;
