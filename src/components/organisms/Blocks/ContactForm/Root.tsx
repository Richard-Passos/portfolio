'use client';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate, Title } from '@/components/atoms';
import ContactForm, {
  ContactFormProps
} from '@/components/organisms/Forms/Contact';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type ContactFormBlockOrganismOwnProps = {
  data: Pick<
    ContactFormProps,
    'fields' | 'to' | 'optionalLabel' | 'messages'
  > & {
    title: Node[];
  };
};

type ContactFormBlockOrganismProps = ContactFormBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ContactFormBlockOrganismOwnProps>;

const ContactFormBlockOrganism = ({
  data,
  className,
  ...props
}: ContactFormBlockOrganismProps) => {
  return (
    <CleanLayoutBlock
      className={cn(
        `w-9by10 max-w-7xl gap-4 sm:flex-row sm:items-stretch md:gap-8`,
        className
      )}
      {...props}
    >
      <div className='dark:bg-dark-8 relative flex grow basis-48 items-center justify-center overflow-hidden bg-white max-sm:hidden'>
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines className='text-border! top-auto h-screen translate-y-0 bg-size-[83.333px_66.666px] opacity-60' />
        </ScrollAnimate>

        <span className='rounded-inherit absolute inset-0 border opacity-60' />
      </div>

      <div className='sm:py-xl w-full max-w-3xl grow'>
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
    </CleanLayoutBlock>
  );
};

export default ContactFormBlockOrganism;
export type { ContactFormBlockOrganismProps };
