'use client';

import { useContext } from 'react';

import { Select } from '@/components/ui';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@/components/ui/icon/icons';
import { ProjectsShowContext } from '@/contexts';
import { cn, isFunctionThanCall } from '@/utils';

const ROLES = ['all', 'design', 'development'];

const ProjectsShowRoles = ({ className, ...props }) => {
  const { role, setRole } = useContext(ProjectsShowContext);

  return (
    <Select
      value={role}
      {...props}
      onValueChange={(val) => {
        setRole(val);

        isFunctionThanCall(props.onValueChange, val);
      }}
    >
      <Select.Trigger className={cn('h-10 max-w-xs', className)}>
        <Select.Value placeholder='Select a role...' />

        <Select.Icon
          asChild
          className='transition-transform duration-300 group-data-open:rotate-180'
        >
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.Viewport>
            {ROLES.map((role) => (
              <ProjectsShowRolesSelectItem
                key={role}
                value={role.toLowerCase()}
              >
                {role}
              </ProjectsShowRolesSelectItem>
            ))}
          </Select.Viewport>

          <Select.ScrollButton.Up>
            <ChevronUpIcon className='h-3.5 w-3.5' />
          </Select.ScrollButton.Up>

          <Select.ScrollButton.Down>
            <ChevronDownIcon className='h-3.5 w-3.5' />
          </Select.ScrollButton.Down>
        </Select.Content>
      </Select.Portal>
    </Select>
  );
};

const ProjectsShowRolesSelectItem = ({ className, children, ...props }) => {
  return (
    <Select.Item
      className={cn('lowercase', className)}
      {...props}
    >
      <Select.Item.Indicator>
        <CheckIcon />
      </Select.Item.Indicator>

      <Select.Item.Text>{children}</Select.Item.Text>
    </Select.Item>
  );
};

export default ProjectsShowRoles;
