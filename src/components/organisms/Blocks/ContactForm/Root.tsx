'use client';

import { Title } from '@/components/atoms';
import ContactForm, {
  ContactFormProps
} from '@/components/organisms/Forms/Contact';
import CleanLayout, {
  CleanLayoutProps
} from '@/components/organisms/Layouts/Clean';
import LinesY from '@/components/organisms/LinesY';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type ContactFormBlockOwnProps = {
  data: {
    title: Node[];
  } & Pick<ContactFormProps, 'fields' | 'to' | 'optionalLabel' | 'messages'>;
};

type ContactFormBlockProps = ContactFormBlockOwnProps &
  Omit<CleanLayoutProps, keyof ContactFormBlockOwnProps>;

const ContactFormBlock = ({
  data,
  className,
  ...props
}: ContactFormBlockProps) => {
  return (
    <CleanLayout
      className={cn(
        'w-9by10 max-w-7xl gap-4 sm:flex-row sm:items-stretch md:gap-10',
        className
      )}
      {...props}
    >
      <LinesY className='grow basis-48 max-md:hidden' />

      <div className='w-full max-w-3xl grow sm:py-10'>
        <Title
          className='max-w-md'
          order={3}
        >
          {serialize(data.title)}
        </Title>

        <ContactForm
          className='mt-8'
          fields={data.fields}
          messages={data.messages}
          optionalLabel={data.optionalLabel}
          to={data.to}
        />
      </div>
    </CleanLayout>
  );
};

export default ContactFormBlock;
export type { ContactFormBlockProps };
