'use client';

import { Tabs as UiTabs } from '@ark-ui/react/tabs';
import type { ComponentProps } from 'react';

export type TabsProps = ComponentProps<typeof Tabs>;
export type TabsContentProps = ComponentProps<typeof TabsContent>;
export type TabsIndicatorProps = ComponentProps<typeof TabsIndicator>;
export type TabsListProps = ComponentProps<typeof TabsList>;
export type TabsTriggerProps = ComponentProps<typeof TabsTrigger>;

export const Tabs = UiTabs.Root;
export const TabsIndicator = UiTabs.Indicator;
export const TabsContent = UiTabs.Content;
export const TabsList = UiTabs.List;
export const TabsTrigger = UiTabs.Trigger;
