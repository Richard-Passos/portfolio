'use client';

import { locales } from 'intlayer';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode, useState } from 'react';

import { Link, Tabs, TabsRootProps } from '@/components/navigation';
import { MergeProps } from '@/types';

export type NavTabsProps = MergeProps<
  {
    items: { url: string; label: ReactNode }[];
  },
  TabsRootProps
>;

export const NavTabs = ({ items, ...props }: NavTabsProps) => {
  const selectedLayoutSegment = useSelectedLayoutSegment(),
    segment =
      !selectedLayoutSegment || locales.includes(selectedLayoutSegment)
        ? '/'
        : `/${selectedLayoutSegment}`,
    [value, setValue] = useState(segment);

  return (
    <Tabs
      navigate={null}
      activationMode='manual'
      value={value}
      onValueChange={(e) => setValue(e.value)}
      {...props}
    >
      <Tabs.List
        className='relative'
        onMouseLeave={() => setValue(segment)}
      >
        {items.map((item) => (
          <Tabs.Trigger
            asChild
            key={item.url}
            value={item.url}
          >
            <Link
              href={item.url}
              className='inline-flex h-10 items-center justify-center rounded px-2.5'
              onMouseEnter={() => setValue(item.url)}
            >
              {item.label}
            </Link>
          </Tabs.Trigger>
        ))}

        <Tabs.Indicator className='absolute bottom-0 left-[calc(var(--left)+var(--width)/2-var(--w)/2)]! h-1 w-(--w) rounded-full bg-body-emphasis transition-[width,left] ease-backOut [--w:calc(var(--width)*.25)]' />
      </Tabs.List>
    </Tabs>
  );
};
