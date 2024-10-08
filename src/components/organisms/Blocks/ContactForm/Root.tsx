'use client';

import { forwardRef } from 'react';

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

const ContactFormBlockOrganism = (
  { data, className, ...props }: ContactFormBlockOrganismProps,
  ref: ContactFormBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      className={cn(
        `w-9/10 max-w-screen-xl gap-md sm:flex-row sm:items-stretch md:gap-xl`,
        className
      )}
      ref={ref}
      {...props}
    >
      <div
        className={`relative flex grow basis-48 items-center justify-center overflow-hidden bg-white dark:bg-dark-8 max-sm:hidden`}
      >
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines
            className={`top-auto h-screen !text-border opacity-60 translate-y-0 [background-size:83.333px_66.666px]`}
          />
        </ScrollAnimate>

        <span className='absolute inset-0 rounded-inherit border opacity-60' />
      </div>

      <div className={`w-full max-w-screen-md grow sm:py-xl`}>
        <Title
          className='max-w-md'
          order={3}
        >
          {serialize(data.title)}
        </Title>

        <ContactForm
          className='mt-xl'
          fields={data.fields}
          messages={data.messages}
          optionalLabel={data.optionalLabel}
          to={data.to}
        />
      </div>
    </CleanLayoutBlock>
  );
};

export default forwardRef(ContactFormBlockOrganism);
export type { ContactFormBlockOrganismProps };
