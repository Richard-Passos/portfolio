import CommandEmpty from './Empty';
import CommandGroup from './Group';
import CommandIcon from './Icon';
import CommandItem from './Item';
import CommandList from './List';
import CommandLoading from './Loading';
import CommandRoot from './Root';
import CommandSeparator from './Separator';
import CommandShortcut from './Shortcut';
import CommandSearch from './search';

const Command = CommandRoot;

Command.Empty = CommandEmpty;
Command.Group = CommandGroup;
Command.Icon = CommandIcon;
Command.Item = CommandItem;
Command.List = CommandList;
Command.Loading = CommandLoading;
Command.Separator = CommandSeparator;
Command.Shortcut = CommandShortcut;
Command.Search = CommandSearch;

export default Command;
export {
  CommandRoot as Command,
  CommandEmpty,
  CommandGroup,
  CommandIcon,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
  CommandShortcut,
  CommandSearch,
};
