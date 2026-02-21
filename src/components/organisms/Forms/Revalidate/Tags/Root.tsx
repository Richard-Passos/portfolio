'use client';

import { useWatch } from 'react-hook-form';

import { Card } from '@/components/atoms';
import Checkbox from '@/components/atoms/Checkbox';
import { CheckboxGroupAtomProps } from '@/components/atoms/Checkbox/Group/Root';
import { FormControl, FormControlProps } from '@/components/molecules/Form';
import { useFormContext } from '@/hooks/contexts';
import { capitalize, cn, entries } from '@/utils';

type RevalidateFormTagsOrganismOwnProps = {
  children?: never;
  name: FormControlProps['name'];
  data: { all: string } & Record<string, string>;
};

type RevalidateFormTagsOrganismProps = RevalidateFormTagsOrganismOwnProps &
  Omit<CheckboxGroupAtomProps, keyof RevalidateFormTagsOrganismOwnProps>;

const RevalidateFormTagsOrganism = ({
  name,
  data,
  ...props
}: RevalidateFormTagsOrganismProps) => {
  const { control } = useFormContext(),
    value = useWatch({ control, name }) as string[],
    { all, ...tags } = data;

  const isAll = value.includes('all');

  return (
    <FormControl name={name}>
      <Checkbox.Group
        value={value}
        {...props}
      >
        <div className='mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
          <Card.Root
            value='all'
            component={Checkbox.Card}
            checked={isAll}
            className='hover:bg-gray-1 dark:hover:bg-dark-5 col-span-full flex-row items-center gap-3'
          >
            <Checkbox.Indicator /> {all}
          </Card.Root>

          {entries(tags).map(([key, t]) => (
            <Card.Root
              key={key}
              value={key}
              component={Checkbox.Card}
              className='disabled:bg-gray-1 disabled:text-gray-5 dark:disabled:bg-dark-6 dark:disabled:text-dark-3 hover:bg-gray-1 dark:hover:bg-dark-5 flex-row items-center gap-3 disabled:cursor-not-allowed'
              {...(isAll && {
                checked: true,
                disabled: true,
                'aria-disabled': true
              })}
            >
              <Checkbox.Indicator className={cn(isAll && 'opacity-50')} />

              {capitalize(t)}
            </Card.Root>
          ))}
        </div>
      </Checkbox.Group>
    </FormControl>
  );
};

export default RevalidateFormTagsOrganism;
export type { RevalidateFormTagsOrganismProps };
