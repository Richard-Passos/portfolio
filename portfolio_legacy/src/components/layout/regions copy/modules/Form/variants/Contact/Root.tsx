import { ReactNode } from 'react';
import { z } from 'zod';

import { toast } from '@/components/feedback';
import { TextInput, Textarea } from '@/components/input';
import { MagneticButton } from '@/components/input/Button/variants';
import { Form, FormRootProps } from '@/components/modules/Form';
import { Link } from '@/components/navigation';
import { Title } from '@/components/system';
import { PaperPlaneIcon } from '@/components/system/Icon/variants';
import { Field, MergeProps } from '@/types';
import { cn } from '@/utils';
import { sendEmail } from '@/utils/actions';
import serialize, { Node } from '@/utils/serialize';

type ContactFormRootProps = MergeProps<
  {
    optionalLabel: ReactNode;
    messages: {
      loading: Node[];
      success: Node[];
      error: Node[];
    };
    to: {
      label: Node[];
      email: string;
      subject: string;
    };
    fields: {
      name: Field<['min']>;
      email: Field<['email']>;
      subject: Field;
      message: Field<['min', 'max']>;
      submit: {
        label: Node[];
      };
    };
  },
  FormRootProps,
  'schema' | 'defaultValues'
>;

const ContactFormRoot = ({
  optionalLabel,
  messages,
  to,
  fields,
  className,
  ...props
}: ContactFormRootProps) => {
  const defaultValues = {
      name: fields.name.defaultValue,
      email: fields.email.defaultValue,
      subject: fields.subject.defaultValue,
      message: fields.message.defaultValue
    },
    schema = z.object({
      name: z.string().trim().min(2, fields.name.errors.min),
      email: z.email(fields.email.errors.email).trim(),
      subject: z.string().trim().optional(),
      message: z
        .string()
        .trim()
        .min(2, fields.message.errors.min)
        .max(3000, fields.message.errors.max)
    });

  return (
    <Form
      schema={schema}
      defaultValues={defaultValues}
      className={cn('grid sm:grid-cols-12', className)}
      action={async (values) => {
        await toast.promise(sendEmail(values), {
          error: <div>{serialize(messages.error)}</div>,
          loading: <div>{serialize(messages.loading)}</div>,
          success: <div>{serialize(messages.success)}</div>
        });
      }}
      {...props}
    >
      <div className='bg-body relative top-px right-px -mt-px -mr-px flex h-fit items-center border p-2.5 sm:col-span-full'>
        <Title
          component='h3'
          order={6}
        >
          {serialize(to.label)}&nbsp;
          <Link
            className='text-[1em]'
            href={`mailto:${to.email}?subject=${to.subject}`}
          >
            {to.email}
          </Link>
        </Title>
      </div>

      <Form.Control name='name'>
        <TextInput
          size='md'
          variant='filled'
          className='bg-body relative top-px right-px -mt-px -mr-px border p-2.5 sm:col-span-6'
          label={fields.name.label}
          description={fields.name.description}
          placeholder={fields.name.placeholder}
        />
      </Form.Control>

      <Form.Control name='email'>
        <TextInput
          type='email'
          size='md'
          variant='filled'
          className='bg-body relative top-px right-px -mt-px -mr-px border p-2.5 sm:col-span-6'
          label={fields.email.label}
          description={fields.email.description}
          placeholder={fields.email.placeholder}
        />
      </Form.Control>

      <Form.Control name='subject'>
        <TextInput
          size='md'
          variant='filled'
          className='bg-body relative top-px right-px -mt-px -mr-px border p-2.5 sm:col-span-12'
          label={
            <>
              {fields.subject.label}&nbsp;
              <span className='text-dimmed'>({optionalLabel})</span>
            </>
          }
          description={fields.subject.description}
          placeholder={fields.subject.placeholder}
        />
      </Form.Control>

      <Form.Control name='message'>
        <Textarea
          autosize
          minRows={3}
          size='md'
          variant='filled'
          className='bg-body relative top-px right-px -mt-px -mr-px border p-2.5 sm:col-span-full md:col-span-9'
          label={fields.message.label}
          description={fields.message.description}
          placeholder={fields.message.placeholder}
        />
      </Form.Control>

      <div className='size-full pr-3 pb-3 sm:col-span-4 md:col-span-3'>
        <div className='sticky top-0 w-full'>
          <div className='bg-body relative top-px right-px -mt-px -mr-px w-fit border p-2.5 md:aspect-[1.3/1] md:w-full'>
            <Form.Submit asChild>
              <MagneticButton
                className='md:size-full'
                magneticProps={{
                  limit: { x: 0.2, y: 0.2 }
                }}
              >
                <PaperPlaneIcon className='absolute aspect-square h-2/3 max-md:hidden' />

                <span className='md:sr-only'>
                  {serialize(fields.submit.label)}
                </span>
              </MagneticButton>
            </Form.Submit>
          </div>
        </div>
      </div>
    </Form>
  );
};

export { ContactFormRoot };
export type { ContactFormRootProps };
