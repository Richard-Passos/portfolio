import { TabsContent } from './Content';
import { TabsIndicator } from './Indicator';
import { TabsList } from './List';
import { Tabs } from './Root';
import { TabsTrigger } from './Trigger';

export * from './Content';
export * from './Indicator';
export * from './List';
export * from './Root';
export * from './Trigger';

export default Object.assign(Tabs, {
  Content: TabsContent,
  Indicator: TabsIndicator,
  List: TabsList,
  Trigger: TabsTrigger
});
