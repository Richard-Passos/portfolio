'use client';

import { type SelectRootProps, Select as UiSelect } from '@ark-ui/react/select';
import { ReactNode } from 'react';

import { Portal } from '@/components/misc';
import { CheckIcon, ChevronDownIcon } from '@/components/system/icons';
import { MergeProps } from '@/types';

import { Button } from '../Button';

export type SelectProps = MergeProps<
  {
    label: ReactNode;
    placeholder?: string;
    clear?: ReactNode;
  },
  SelectRootProps<any>
>;

export const Select = ({ collection, label, placeholder, clear, ...props }: SelectProps) => {
  return (
    <UiSelect.Root
      collection={collection}
      {...props}
    >
      <UiSelect.Label className='mb-2 text-sm font-medium'>{label}</UiSelect.Label>

      <UiSelect.Control>
        <UiSelect.Trigger className='flex h-10 w-full items-center gap-1.5 rounded border bg-body px-3 py-2 text-sm'>
          <UiSelect.ValueText
            placeholder={placeholder}
            className='mr-auto'
          />

          {clear && (
            <UiSelect.ClearTrigger asChild>
              <Button size='sm'>{clear}</Button>
            </UiSelect.ClearTrigger>
          )}

          <UiSelect.Indicator>
            <ChevronDownIcon className='size-4 text-muted' />
          </UiSelect.Indicator>
        </UiSelect.Trigger>
      </UiSelect.Control>

      <Portal>
        <UiSelect.Positioner>
          <UiSelect.Content className='z-50 min-w-(--reference-width) rounded border bg-body shadow'>
            <UiSelect.ItemGroup>
              {collection.items.map((item) => (
                <UiSelect.Item
                  key={item}
                  item={item}
                  asChild
                >
                  <Button className='select-none data-[state=checked]:bg-primary hover:data-[state=checked]:bg-primary-hover'>
                    <UiSelect.ItemText>{item}</UiSelect.ItemText>

                    <UiSelect.ItemIndicator className='ml-auto text-success'>
                      <CheckIcon />
                    </UiSelect.ItemIndicator>
                  </Button>{' '}
                </UiSelect.Item>
              ))}
            </UiSelect.ItemGroup>
          </UiSelect.Content>
        </UiSelect.Positioner>
      </Portal>
      <UiSelect.HiddenSelect />
    </UiSelect.Root>
  );
};
