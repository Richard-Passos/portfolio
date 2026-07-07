'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useState, type ReactNode, } from 'react';

import Tabs, { type TabsProps } from '@/components/navigation/Tabs';
import type { MergeProps } from '@/types/MergeProps';
import { cn } from '@/utils/cn';
import { MagneticButton } from '@/components/input/Button/variants/Magnetic';

export type NavTabsProps = MergeProps<
  { id: string, orientation?: 'horizontal' | 'vertical', items: { url: string; label: ReactNode }[] },
  TabsProps
>;

export const NavTabs = ({ id, items,  orientation = 'horizontal', ...props }: NavTabsProps) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const segment = !selectedLayoutSegment
                    ? '/'
                    : `/${selectedLayoutSegment}`;
  const [value, setValue] = useState(segment);

  return (
    <Tabs
      navigate={null}
      activationMode='manual'
      value={value}
      onValueChange={(e) => setValue(e.value)}
      orientation={orientation}
      {...props}
    >
      <Tabs.List
        className={cn(
          'relative flex',
          orientation === 'vertical' && 'flex-col items-start' 
        )}
        onMouseLeave={() => setValue(segment)}
      >
        {items.map((item) => ( 
          <Tabs.Trigger
            asChild
            key={item.url}
            value={item.url}
          >
            <MagneticButton
              active={item.url === value ? true : undefined}
              href={item.url}
              className='group/link relative border-transparent rounded-none hover:z-10 focus-visible:z-10'
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
