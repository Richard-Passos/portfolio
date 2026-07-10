'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ReactNode, useState } from 'react';

import { MagneticButton } from '@/components/input/Button/variants/Magnetic';
import Tabs, { type TabsProps } from '@/components/navigation/Tabs';
import { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';

export type NavTabsProps = MergeProps<
  {
    id: string;
    orientation?: 'horizontal' | 'vertical';
    items: { url: string; label: ReactNode }[];
  },
  TabsProps
>;

export const NavTabs = ({ id, items, orientation = 'horizontal', ...props }: NavTabsProps) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const segment = !selectedLayoutSegment ? '/' : `/${selectedLayoutSegment}`;
  const [value, setValue] = useState(segment);

  return (
    <Tabs
      value={value}
      navigate={null}
      activationMode='manual'
      orientation={orientation}
      onValueChange={(e) => setValue(e.value)}
      {...props}
    >
      <Tabs.List
        className={cn('relative flex', orientation === 'vertical' && 'flex-col items-start')}
        onMouseLeave={() => setValue(segment)}
        onBlurCapture={() => setValue(segment)}
      >
        {items.map((item) => (
          <Tabs.Trigger
            asChild
            key={item.url}
            value={item.url}
          >
            <MagneticButton
              href={item.url}
              className='rounded-none'
              onMouseEnter={() => setValue(item.url)}
              onFocus={() => setValue(item.url)}
            >
              {item.label}
            </MagneticButton>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs>
  );
};
