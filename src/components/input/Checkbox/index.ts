import { CheckboxCard } from './Card';
import { CheckboxGroup } from './Group';
import { CheckboxIndicator } from './Indicator';
import { CheckboxRoot } from './Root';

export * from './Root';
export * from './Card';
export * from './Group';
export * from './Indicator';

const Checkbox = Object.assign(CheckboxRoot, {
  Card: CheckboxCard,
  Group: CheckboxGroup,
  Indicator: CheckboxIndicator
});

export { Checkbox };
