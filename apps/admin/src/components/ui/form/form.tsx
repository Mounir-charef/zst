import { Control } from 'react-hook-form';

export type FormFieldProps<T> = {
  control: Control;
  name: string;
  description?: string;
  label: string;
  formItemClassName?: string;
} & T;

// export interface FormFieldProps extends T {
//     control: Control
//     name: string
//     description: string
//     label: string
// }
