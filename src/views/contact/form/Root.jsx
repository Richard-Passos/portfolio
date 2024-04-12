import { MagneticButton } from '@/components/button';
import { Form, Icon, Input, Textarea } from '@/components/ui';
import { cn } from '@/utils';

import ClientForm from './Client';
import Select from './Select';

const CONTROLS = {
  input: Input,
  textarea: Textarea,
  select: Select,
};

const ContactViewForm = async ({ className, data = {}, ...props }) => {
  const { fields = [], action = {} } = data;

  return (
    <ClientForm
      className={cn('sm:grid-cols-4', className)}
      data={data.fields}
      {...props}
    >
      {fields?.map((data) => {
        const Control = CONTROLS[data.control?.toLowerCase()];

        return (
          <Form.Field
            key={data.name}
            className='sm:col-span-2 sm:last-of-type:col-span-3'
            name={data.name}
          >
            <Form.Label>
              {data.label}{' '}
              {data.optionalText && (
                <span className='text-xs lowercase text-muted-content'>
                  ({data.optionalText})
                </span>
              )}
            </Form.Label>

            {data.control?.toLowerCase() !== 'select' ? (
              <Form.Control>
                <Control
                  placeholder={data.placeholder}
                  type={data.type}
                />
              </Form.Control>
            ) : (
              <Control
                placeholder={data.placeholder}
                data={data.items}
              />
            )}

            <Form.Description>{data.description}</Form.Description>

            <Form.Message />
          </Form.Field>
        );
      })}

      <Form.Submit asChild>
        <MagneticButton
          className='h-12 place-self-center max-sm:aspect-auto max-sm:px-6 sm:h-auto sm:w-full sm:max-w-28'
          {...action.data}
        >
          <Icon
            className='max-sm:hidden'
            {...action.icon}
          />

          <span className='sm:sr-only'>{action.data?.label}</span>
        </MagneticButton>
      </Form.Submit>
    </ClientForm>
  );
};

export default ContactViewForm;
