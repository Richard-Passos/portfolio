'use client';

import { useFormContext } from 'react-hook-form';

import { Select } from '@/components/ui';
import { FormControl } from '@/components/ui/form';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@/components/ui/icon/icons';
import { services } from '@/constants';
import { useChangeKeyWhenFalsy, useFormField } from '@/hooks';

const ContactViewFormSelect = ({ placeholder, data = [], ...props }) => {
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
          <Select.Value placeholder={placeholder} />

          <Select.Icon
            asChild
            className='transition-transform duration-300 group-data-open:rotate-180'
          >
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
      </FormControl>

      <Select.Content>
        <Select.Viewport>
          {data.map((data = '') => (
            <ContactFormSelectItem
              key={data}
              value={data.toLowerCase().replace(/_ /, '-')}
            >
              {data}
            </ContactFormSelectItem>
          ))}
        </Select.Viewport>

        <Select.ScrollButton.Up>
          <ChevronUpIcon className='size-3.5' />
        </Select.ScrollButton.Up>

        <Select.ScrollButton.Down>
          <ChevronDownIcon className='size-3.5' />
        </Select.ScrollButton.Down>
      </Select.Content>
    </Select>
  );
};

const ContactFormSelectItem = ({ children, ...props }) => {
  return (
    <Select.Item {...props}>
      <Select.Item.Indicator>
        <CheckIcon />
      </Select.Item.Indicator>

      <Select.Item.Text className='first-letter:uppercase'>
        {children}
      </Select.Item.Text>
    </Select.Item>
  );
};

export default ContactViewFormSelect;
