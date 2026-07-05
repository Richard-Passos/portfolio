import { z } from 'zod';

import { toast } from '@/components/feedback';
import { MagneticButton } from '@/components/input/Button/variants';
import { Form, FormRootProps } from '@/components/modules/Form';
import { Field, MergeProps } from '@/types';
import { cn, keys } from '@/utils';
import { revalidate } from '@/utils/actions';
import serialize, { Node } from '@/utils/serialize';

import { RevalidateFormTags, RevalidateFormTagsProps } from './Tags';

type RevalidateFormRootProps = MergeProps<
  {
    messages: {
      loading: Node[];
      success: Node[];
      error: Node[];
    };
    fields: {
      tags: Field<['min']> & { data: RevalidateFormTagsProps['data'] };
      submit: {
        label: Node[];
      };
    };
  },
  FormRootProps,
  'schema' | 'defaultValues'
>;

const RevalidateFormRoot = ({
  messages,
  fields,
  className,
  ...props
}: RevalidateFormRootProps) => {
  const defaultValues = {
      tags: fields.tags.defaultValue ?? []
    },
    schema = z.object({
      tags: z.array(z.string()).min(1, fields.tags.errors.min)
    });

  return (
    <Form
      schema={schema}
      defaultValues={defaultValues}
      className={cn('flex flex-col', className)}
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
      {...props}
    >
      <RevalidateFormTags
        name='tags'
        data={fields.tags.data}
        label={fields.tags.label}
        description={fields.tags.description}
      />

      <Form.Submit asChild>
        <MagneticButton
          className='mt-6 sm:mr-auto'
          magneticProps={{
            limit: { x: 0.2, y: 0.35 }
          }}
        >
          {serialize(fields.submit.label)}
        </MagneticButton>
      </Form.Submit>
    </Form>
  );
};

export { RevalidateFormRoot };
export type { RevalidateFormRootProps };
