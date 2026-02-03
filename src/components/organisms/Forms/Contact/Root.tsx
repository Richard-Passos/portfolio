import { ReactNode } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Link, Select, TextInput, Textarea, Title } from '@/components/atoms';
import { PaperPlaneIcon } from '@/components/atoms/Icon/icons';
import { SelectProps } from '@/components/atoms/Select';
import { Action, Form } from '@/components/molecules';
import { FormRootProps } from '@/components/molecules/Form';
import { Field } from '@/types';
import { cn } from '@/utils';
import { sendEmail } from '@/utils/actions';
import serialize, { Node } from '@/utils/serialize';

type ContactFormOrganismOwnProps = {
  optionalLabel: ReactNode;
  fields: {
    name: Field<['min']>;
    email: Field<['email']>;
    subject: Field;
    service: Field & Pick<SelectProps, 'data'>;
    message: Field<['min', 'max']>;
    submit: {
      label: Node[];
    };
  };
  to: {
    label: Node[];
    email: string;
    subject: string;
  };
  messages: {
    loading: Node[];
    success: Node[];
    error: Node[];
  };
};

type ContactFormOrganismProps = ContactFormOrganismOwnProps &
  Omit<
    FormRootProps,
    keyof ContactFormOrganismOwnProps | 'schema' | 'defaultValues'
  >;

const ContactFormOrganism = ({
  optionalLabel,
  messages,
  to,
  fields,
  className,
  ...props
}: ContactFormOrganismProps) => {
  const defaultValues = {
      name: fields.name.defaultValue,
      email: fields.email.defaultValue,
      subject: fields.subject.defaultValue,
      service: fields.service.defaultValue,
      message: fields.message.defaultValue
    },
    schema = z.object({
      name: z.string().trim().min(2, fields.name.errors.min),
      email: z.string().trim().email(fields.email.errors.email),
      subject: z.string().trim().optional(),
      service: z.any().optional(),
      message: z
        .string()
        .trim()
        .min(2, fields.message.errors.min)
        .max(3000, fields.message.errors.max)
    });

  return (
    <Form.Root
      action={async (values) => {
        await toast.promise(sendEmail(values), {
          error: <div>{serialize(messages.error)}</div>,
          loading: <div>{serialize(messages.loading)}</div>,
          success: <div>{serialize(messages.success)}</div>
        });
      }}
      className={cn(`grid sm:grid-cols-12`, className)}
      defaultValues={defaultValues}
      schema={schema}
      {...props}
    >
      <div className='dark:bg-dark-8 relative top-px right-px -mt-px -mr-px flex h-fit items-center border bg-white p-2.5 sm:col-span-full'>
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
          className='dark:bg-dark-8 relative top-px right-px -mt-px -mr-px border bg-white p-2.5 sm:col-span-6'
          label={fields.name.label}
          placeholder={fields.name.placeholder}
          size='md'
          variant='filled'
        />
      </Form.Control>

      <Form.Control name='email'>
        <TextInput
          className='dark:bg-dark-8 relative top-px right-px -mt-px -mr-px border bg-white p-2.5 sm:col-span-6'
          label={fields.email.label}
          placeholder={fields.email.placeholder}
          size='md'
          type='email'
          variant='filled'
        />
      </Form.Control>

      <Form.Control name='subject'>
        <TextInput
          className='dark:bg-dark-8 relative top-px right-px -mt-px -mr-px border bg-white p-2.5 sm:col-span-6'
          label={
            <>
              {fields.subject.label}&nbsp;
              <span className='text-dimmed'>({optionalLabel})</span>
            </>
          }
          placeholder={fields.subject.placeholder}
          size='md'
          variant='filled'
        />
      </Form.Control>

      <Form.Watch name='service'>
        <Select
          className='dark:bg-dark-8 relative top-px right-px -mt-px -mr-px border bg-white p-2.5 sm:col-span-6'
          clearable
          data={fields.service.data}
          label={
            <>
              {fields.service.label}&nbsp;
              <span className='text-dimmed'>({optionalLabel})</span>
            </>
          }
          placeholder={fields.service.placeholder}
          size='md'
          variant='filled'
        />
      </Form.Watch>

      <Form.Control name='message'>
        <Textarea
          autosize
          className='dark:bg-dark-8 relative top-px right-px -mt-px -mr-px border bg-white p-2.5 sm:col-span-full md:col-span-9'
          label={fields.message.label}
          minRows={3}
          placeholder={fields.message.placeholder}
          size='md'
          variant='filled'
        />
      </Form.Control>

      <div className='size-full pr-3 pb-3 sm:col-span-4 md:col-span-3'>
        <div className='sticky top-0 w-full'>
          <div className='dark:bg-dark-8 relative top-px right-px -mt-px -mr-px w-fit border bg-white p-2.5 md:aspect-[1.3/1] md:w-full'>
            <Form.Submit>
              <Action
                className='md:size-full'
                magneticProps={{
                  limit: { x: 0.2, y: 0.2 }
                }}
              >
                <PaperPlaneIcon className='absolute aspect-square h-2/3 max-md:hidden' />

                <span className='md:sr-only'>
                  {serialize(fields.submit.label)}
                </span>
              </Action>
            </Form.Submit>
          </div>
        </div>
      </div>
    </Form.Root>
  );
};

export default ContactFormOrganism;
export type { ContactFormOrganismProps };
