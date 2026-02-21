'use client';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate, Title } from '@/components/atoms';
import RevalidateForm, {
  RevalidateFormProps
} from '@/components/organisms/Forms/Revalidate';
import CleanLayout, {
  CleanLayoutProps
} from '@/components/organisms/Layouts/Clean';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type RevalidateFormBlockOwnProps = {
  data: {
    title: Node[];
  } & Pick<RevalidateFormProps, 'fields' | 'messages'>;
};

type RevalidateFormBlockProps = RevalidateFormBlockOwnProps &
  Omit<CleanLayoutProps, keyof RevalidateFormBlockOwnProps>;

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

      <div className='bg-body relative flex grow basis-48 items-center justify-center overflow-hidden border max-md:hidden'>
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines className='text-gray-3 dark:text-dark-4 h-screen translate-y-0 bg-size-[83.333px_66.666px]' />
        </ScrollAnimate>
      </div>
    </CleanLayout>
  );
};

export default RevalidateFormBlock;
export type { RevalidateFormBlockProps };
