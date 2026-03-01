'use client';

import { Title } from '@/components/atoms';
import CleanLayout, {
  CleanLayoutProps
} from '@/components/layout/wrappers/Clean';
import LinesY from '@/components/misc/Lines/variants/ScrollY';
import ContactForm, {
  ContactFormProps
} from '@/components/modules/Form/variants/Contact';
import { MergeProps } from '@/types';
import { cn } from '@/utils';
import { Node, serialize } from '@/utils/serialize';

type ContactFormBlockOwnProps = {
  data: {
    title: Node[];
  } & Pick<ContactFormProps, 'fields' | 'to' | 'optionalLabel' | 'messages'>;
};

type ContactFormBlockProps = MergeProps<
  ContactFormBlockOwnProps,
  CleanLayoutProps
>;

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

export { ContactFormBlock };
export type { ContactFormBlockProps };
