import FormControl from './Control';
import FormDescription from './Description';
import FormField from './Field';
import FormLabel from './Label';
import FormMessage from './Message';
import FormProvider from './Provider';
import FormReset from './Reset';
import FormRoot from './Root';
import FormSubmit from './Submit';

const Form = FormRoot;

Form.Control = FormControl;
Form.Description = FormDescription;
Form.Field = FormField;
Form.Label = FormLabel;
Form.Message = FormMessage;
Form.Provider = FormProvider;
Form.Submit = FormSubmit;
Form.Reset = FormReset;

export default Form;
export {
  FormRoot as Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormProvider,
  FormReset,
  FormSubmit,
};
