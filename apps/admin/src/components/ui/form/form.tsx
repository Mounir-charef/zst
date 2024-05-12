import { Control, FieldPath, FieldValues } from 'react-hook-form';

export type FormFieldProps<
  T,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
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
