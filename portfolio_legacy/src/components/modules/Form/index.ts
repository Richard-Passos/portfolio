import { FormControl } from './Control';
import { FormReset } from './Reset';
import { FormRoot } from './Root';
import { FormSubmit } from './Submit';
import { FormWatch } from './Watch';

export * from './Control';
export * from './Reset';
export * from './Root';
export * from './Submit';
export * from './Watch';

const Form = Object.assign(FormRoot, {
  Control: FormControl,
  Reset: FormReset,
  Submit: FormSubmit,
  Watch: FormWatch
});

export { Form };
