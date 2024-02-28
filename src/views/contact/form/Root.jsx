import { MagneticButton } from '@/components/button';
import { Form, Input, Textarea } from '@/components/ui';
import { PaperPlaneIcon } from '@/components/ui/icon/icons';
import { personalInfo } from '@/constants';
import { cn } from '@/utils';

import ClientForm from './Client';
import Select from './Select';

const ContactForm = ({ className, ...props }) => {
  return (
    <ClientForm
      className={cn(
        'grid h-fit gap-x-6 gap-y-4 space-y-0 sm:grid-cols-4',
        className,
      )}
      {...props}
    >
      <Form.Field
        className='sm:col-span-2'
        name='name'
      >
        <Form.Label>Name</Form.Label>

        <Form.Control>
          <Input placeholder='John Doe' />
        </Form.Control>

        <Form.Description>Your name.</Form.Description>

        <Form.Message />
      </Form.Field>

      <Form.Field
        className='sm:col-span-2'
        name='email'
      >
        <Form.Label>Email</Form.Label>

        <Form.Control>
          <Input placeholder='john@doe.com' />
        </Form.Control>

        <Form.Description>Your professional email.</Form.Description>

        <Form.Message />
      </Form.Field>

      <Form.Field
        className='sm:col-span-2'
        name='subject'
      >
        <Form.Label>
          Subject <span className='text-xs text-muted-content'>(optional)</span>
        </Form.Label>

        <Form.Control>
          <Input placeholder='I wanna hire you!' />
        </Form.Control>

        <Form.Description>Subject you wanna talk about.</Form.Description>

        <Form.Message />
      </Form.Field>

      <Form.Field
        className='sm:col-span-2'
        name='service'
      >
        <Form.Label>
          Service <span className='text-xs text-muted-content'>(optional)</span>
        </Form.Label>

        <Select />

        <Form.Description>Select the service you want.</Form.Description>

        <Form.Message />
      </Form.Field>

      <Form.Field
        className='sm:col-span-3'
        name='message'
      >
        <Form.Label>Message</Form.Label>

        <Form.Control>
          <Textarea
            placeholder={`👋 Hey ${personalInfo.name.first}! I would love if you could help me with...`}
          />
        </Form.Control>

        <Form.Description>Your message.</Form.Description>

        <Form.Message />
      </Form.Field>

      <Form.Submit asChild>
        <MagneticButton className='h-12 place-self-center max-sm:aspect-auto max-sm:px-6 sm:h-28'>
          <PaperPlaneIcon
            aria-hidden
            className='scale-90 max-sm:hidden'
          />

          <span className='sm:sr-only'>Submit</span>
        </MagneticButton>
      </Form.Submit>
    </ClientForm>
  );
};

export default ContactForm;
