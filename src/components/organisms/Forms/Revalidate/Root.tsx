import toast from 'react-hot-toast';
import { z } from 'zod';

import { Action, Form } from '@/components/molecules';
import { FormRootProps } from '@/components/molecules/Form';
import { Field } from '@/types';
import { cn, keys } from '@/utils';
import { revalidate } from '@/utils/actions';
import serialize, { Node } from '@/utils/serialize';

import Tags, { RevalidateFormTagsProps } from './Tags';

type RevalidateFormOrganismOwnProps = {
  fields: {
    tags: Field<['min']> & { data: RevalidateFormTagsProps['data'] };
    submit: {
      label: Node[];
    };
  };
  messages: {
    loading: Node[];
    success: Node[];
    error: Node[];
  };
};

type RevalidateFormOrganismProps = RevalidateFormOrganismOwnProps &
  Omit<
    FormRootProps,
    keyof RevalidateFormOrganismOwnProps | 'schema' | 'defaultValues'
  >;

const RevalidateFormOrganism = ({
  messages,
  fields,
  className,
  ...props
}: RevalidateFormOrganismProps) => {
  const defaultValues = {
      tags: fields.tags.defaultValue ?? []
    },
    schema = z.object({
      tags: z.array(z.string()).min(1, fields.tags.errors.min)
    });

  return (
    <Form.Root
      action={async (values) => {
        const isAll = values.tags.includes('all'),
          targetTags = isAll
            ? keys(fields.tags.data).filter((t) => t !== 'all') // Remove 'all' tag
            : values.tags;

        await toast.promise(revalidate(...targetTags), {
          error: <div>{serialize(messages.error)}</div>,
          loading: <div>{serialize(messages.loading)}</div>,
          success: <div>{serialize(messages.success)}</div>
        });
      }}
      defaultValues={defaultValues}
      schema={schema}
      className={cn('flex flex-col', className)}
      {...props}
    >
      <Tags
        name='tags'
        data={fields.tags.data}
        label={fields.tags.label}
        description={fields.tags.description}
      />

      <Form.Submit>
        <Action
          className='mt-6 sm:mr-auto'
          magneticProps={{
            limit: { x: 0.2, y: 0.35 }
          }}
        >
          {serialize(fields.submit.label)}
        </Action>
      </Form.Submit>
    </Form.Root>
  );
};

export default RevalidateFormOrganism;
export type { RevalidateFormOrganismProps };
