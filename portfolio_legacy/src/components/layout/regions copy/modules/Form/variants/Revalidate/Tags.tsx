'use client';

import { useWatch } from 'react-hook-form';

import { Card } from '@/components/display';
import { Checkbox, CheckboxGroupProps } from '@/components/input';
import { FormControl, FormControlProps } from '@/components/modules/Form';
import { useFormContext } from '@/hooks/contexts';
import { MergeProps } from '@/types';
import { capitalize, cn, entries } from '@/utils';

type RevalidateFormTagsProps = MergeProps<
  {
    name: FormControlProps['name'];
    data: { all: string } & Record<string, string>;
  },
  CheckboxGroupProps,
  'children'
>;

const RevalidateFormTags = ({
  name,
  data,
  ...props
}: RevalidateFormTagsProps) => {
  const { control } = useFormContext(),
    value = useWatch({ control, name }) as string[];

  const { all, ...tags } = data,
    isAll = value.includes('all');

  return (
    <FormControl name={name}>
      <Checkbox.Group
        value={value}
        {...props}
      >
        <div className='mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
          <Checkbox.Card
            component={Card}
            value='all'
            checked={isAll}
            className='hover:bg-gray-1 dark:hover:bg-dark-5 col-span-full flex-row items-center gap-3'
          >
            <Checkbox.Indicator /> {all}
          </Checkbox.Card>

          {entries(tags).map(([key, t]) => (
            <Checkbox.Card
              component={Card}
              key={key}
              value={key}
              className='disabled:bg-gray-1 disabled:text-gray-5 dark:disabled:bg-dark-6 dark:disabled:text-dark-3 hover:bg-gray-1 dark:hover:bg-dark-5 flex-row items-center gap-3 disabled:cursor-not-allowed'
              {...(isAll && {
                checked: true,
                disabled: true,
                'aria-disabled': true
              })}
            >
              <Checkbox.Indicator className={cn(isAll && 'opacity-50')} />

              {capitalize(t)}
            </Checkbox.Card>
          ))}
        </div>
      </Checkbox.Group>
    </FormControl>
  );
};

export { RevalidateFormTags };
export type { RevalidateFormTagsProps };
