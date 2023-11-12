import TabsContent from './Content';
import TabsList from './List';
import TabsRoot from './Root';
import TabsTrigger from './Trigger';

const Tabs = TabsRoot;

Tabs.Content = TabsContent;
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;

export default Tabs;
export { TabsRoot as Tabs, TabsContent, TabsList, TabsTrigger };
