import { MagneticButton } from '@/components/button';
import { Form, Input, Textarea } from '@/components/ui';
import { PaperPlaneIcon } from '@/components/ui/icon/icons';
import { cn } from '@/utils';

import ClientForm from './Client';
import Select from './Select';

const CONTROLS = {
  input: Input,
  textarea: Textarea,
  select: Select,
};

const ContactForm = async ({ className, data = {}, ...props }) => {
  return (
    <ClientForm
      className={cn(
        'grid h-fit gap-x-6 gap-y-4 space-y-0 sm:grid-cols-4',
        className,
      )}
      data={data.fields}
      {...props}
    >
      {data.fields?.map((data) => {
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
                <Control placeholder={data.placeholder} />
              </Form.Control>
            ) : (
              <Control placeholder={data.placeholder} />
            )}

            <Form.Description>{data.description}</Form.Description>

            <Form.Message />
          </Form.Field>
        );
      })}

      <Form.Submit asChild>
        <MagneticButton className='h-12 place-self-center max-sm:aspect-auto max-sm:px-6 md:max-lg:w-full sm:h-auto sm:max-h-28'>
          <PaperPlaneIcon
            aria-hidden
            className='scale-90 max-sm:hidden'
          />

          <span className='sm:sr-only'>{data.submit}</span>
        </MagneticButton>
      </Form.Submit>
    </ClientForm>
  );
};

export default ContactForm;
