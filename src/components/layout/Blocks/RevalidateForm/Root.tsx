'use client';

import { Title } from '@/components/atoms';
import CleanLayout, {
  CleanLayoutProps
} from '@/components/layout/wrappers/Clean';
import LinesY from '@/components/misc/Lines/variants/ScrollY';
import RevalidateForm, {
  RevalidateFormProps
} from '@/components/modules/Form/variants/Revalidate';
import { MergeProps } from '@/types';
import { cn } from '@/utils';
import { Node, serialize } from '@/utils/serialize';

type RevalidateFormBlockOwnProps = {
  data: {
    title: Node[];
  } & Pick<RevalidateFormProps, 'fields' | 'messages'>;
};

type RevalidateFormBlockProps = MergeProps<
  RevalidateFormBlockOwnProps,
  CleanLayoutProps
>;

const RevalidateFormBlock = ({
  data,
  className,
  ...props
}: RevalidateFormBlockProps) => {
  return (
    <CleanLayout
      className={cn(
        'w-9by10 max-w-7xl gap-4 sm:flex-row sm:items-stretch md:gap-10',
        className
      )}
      {...props}
    >
      <div className='w-full max-w-3xl grow sm:py-10'>
        <Title
          className='max-w-md'
          order={3}
        >
          {serialize(data.title)}
        </Title>

        <RevalidateForm
          className='mt-8'
          fields={data.fields}
          messages={data.messages}
        />
      </div>

      <LinesY className='grow basis-48 max-md:hidden' />
    </CleanLayout>
  );
};

export { RevalidateFormBlock };
export type { RevalidateFormBlockProps };
