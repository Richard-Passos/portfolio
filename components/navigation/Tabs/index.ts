import { TabsContent, TabsIndicator, TabsList, Tabs as TabsRoot, TabsTrigger } from './Root';

export { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger };

export type {
  TabsContentProps,
  TabsIndicatorProps,
  TabsListProps,
  TabsProps as TabsRootProps,
  TabsTriggerProps
} from './Root';

export const Tabs = Object.assign(TabsRoot, {
  Content: TabsContent,
  Indicator: TabsIndicator,
  List: TabsList,
  Trigger: TabsTrigger
});
