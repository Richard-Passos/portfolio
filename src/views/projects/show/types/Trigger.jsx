'use client';

import { useContext } from 'react';

import { MagneticButton } from '@/components/button';
import { ProjectsShowContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

const ProjectsViewShowTypesTrigger = ({
  className,
  type,
  variants,
  ...props
}) => {
  const { type: activeType, setType } = useContext(ProjectsShowContext);

  return (
    <MagneticButton
      className={cn('hover:z-10 hover:delay-0 [&_svg]:size-[40%]', className)}
      limit={0.35}
      variants={{
        color: activeType === type ? 'primary' : 'main',
        size: 'sm',
        ...variants,
      }}
      {...props}
      onClick={(ev) => {
        setType(type);

        isFunctionThanCall(props.onClick, ev);
      }}
    />
  );
};

export default ProjectsViewShowTypesTrigger;
