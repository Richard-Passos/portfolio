import { ComponentProps, ReactNode } from 'react';

import { MergeProps } from '@/types/MergeProps';
import { Text } from '@/components/system/Text';
import { cn } from '@/utils/cn';

export type PrimaryHeroCardProps = {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

export type PrimaryHeroCardsProps = MergeProps<
  {
    data: {
      left: PrimaryHeroCardProps;
      center: PrimaryHeroCardProps;
      right: PrimaryHeroCardProps;
    };
  },
  ComponentProps<'section'>
>;

export const PrimaryHeroCards = ({ data, className, ...props }: PrimaryHeroCardsProps) => {
  return (
    <section
      className={cn(
        'mt-28 grid items-end gap-4 md:grid-cols-12 [&_svg]:transition-transform [&_svg]:duration-700 [&_svg]:ease-backOut',
        className
      )}
      {...props}
    >
      <section className='group relative isolate flex min-h-80 rounded-3xl border bg-muted/75 p-3 md:col-span-6 lg:col-span-3'>
        <div className='flex grow flex-col rounded-2xl bg-body p-6'>
          <div className='mb-4 flex aspect-square w-fit rounded border bg-muted p-2 text-2xl group-hover:*:rotate-y-360'>
            {data.left.icon}
          </div>

          <h3 className='mt-auto'>{data.left.title}</h3>

          <Text
            small
            className='mt-2 text-placeholder'
          >
            {data.left.description}
          </Text>
        </div>

        <div
          className='absolute inset-0 -z-10 rounded-[inherit] bg-primary'
          style={{
            background: `radial-gradient(
                            140% 140% at 0% 100%,
                            #ff5a36 0%,
                            #ff3b3b 10%,
                            #ff38d1 20%,
                            #7c3aed 30%,
                            transparent 60%
                          )`
          }}
        />
      </section>

      <section className='group relative isolate flex h-fit min-h-64 rounded-3xl border bg-muted/75 p-4 md:col-span-full lg:col-span-6'>
        <div className='flex grow flex-col rounded-2xl bg-body p-6'>
          <div className='mb-4 flex aspect-square w-fit rounded border bg-muted p-2 text-2xl group-hover:*:rotate-x-360'>
            {data.center.icon}
          </div>

          <h3 className='mt-auto'>{data.center.title}</h3>

          <Text className='mt-2 text-placeholder'>{data.center.description}</Text>
        </div>

        <div
          className='absolute inset-0 -z-10 rounded-[inherit] bg-primary'
          style={{
            background: `radial-gradient(
                            140% 140% at 50% 0%,
                            #ff5a36 0%,
                            #ff3b3b 25%,
                            transparent 37.5%,
                            #ff38d1 50%,
                            #7c3aed 75%
                          )`
          }}
        />
      </section>

      <section className='group relative isolate flex min-h-80 rounded-3xl border bg-muted/75 p-3 md:col-span-6 md:max-lg:row-start-1 lg:col-span-3'>
        <div className='flex grow flex-col rounded-2xl bg-body p-6'>
          <div className='mb-4 flex aspect-square w-fit rounded border bg-muted p-2 text-2xl group-hover:*:-rotate-y-360'>
            {data.right.icon}
          </div>

          <h3 className='mt-auto'>{data.right.title}</h3>

          <Text
            small
            className='mt-2 text-placeholder'
          >
            {data.right.description}
          </Text>
        </div>

        <div
          className='absolute inset-0 -z-10 rounded-[inherit] bg-primary'
          style={{
            background: `radial-gradient(
                            140% 140% at 100% 0%,
                            #ff5a36 0%,
                            #ff3b3b 10%,
                            #ff38d1 20%,
                            #7c3aed 30%,
                            transparent 60%
                          )`
          }}
        />
      </section>
    </section>
  );
};
