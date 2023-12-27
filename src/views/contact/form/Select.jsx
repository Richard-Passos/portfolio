'use client';

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { useFormContext } from 'react-hook-form';

import { Select } from '@/components/ui';
import { FormControl } from '@/components/ui/form';
import { services } from '@/constants';
import { useChangeKeyWhenFalsy, useFormField } from '@/hooks';
import { capitalize } from '@/utils';

const ContactFormSelect = (props) => {
  const { name } = useFormField(),
    { register, watch } = useFormContext();

  const currValue = watch(name),
    { onChange, ref, ...registerRest } = register(name);

  const key = useChangeKeyWhenFalsy(currValue);

  return (
    <Select
      key={key}
      onValueChange={(value) => onChange({ target: { name, value } })}
      {...registerRest}
      {...props}
    >
      <FormControl customRegister={{ ref }}>
        <Select.Trigger>
          <Select.Value placeholder='Select a service...' />

          <Select.Icon
            asChild
            className='transition-transform duration-300 group-data-open:rotate-180'
          >
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
      </FormControl>

      <Select.Portal>
        <Select.Content>
          <Select.Viewport>
            {services.map(({ title }) => (
              <ContactFormSelectItem
                key={title}
                value={title.toLowerCase()}
              >
                {capitalize(title)}
              </ContactFormSelectItem>
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

const ContactFormSelectItem = ({ children, ...props }) => {
  return (
    <Select.Item {...props}>
      <Select.Item.Indicator>
        <CheckIcon />
      </Select.Item.Indicator>

      <Select.Item.Text>{children}</Select.Item.Text>
    </Select.Item>
  );
};

export default ContactFormSelect;
