import { Clipboard } from './Root';
import { ClipboardContext } from './Context';
import { ClipboardControl } from './Control';
import { ClipboardTrigger } from './Trigger';

export * from './Root';
export * from './Context';
export * from './Control';
export * from './Trigger';

export default Object.assign(Clipboard, {
  Context: ClipboardContext,
  Control: ClipboardControl,
  Trigger: ClipboardTrigger
});
