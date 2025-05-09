import { LabelProps } from '@radix-ui/react-label';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@mono/ui';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { ImageUploader, ImageUploaderProps } from './ImageUploader';

export const ImageUploaderField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  className,
  showErrors = false,
  description,
  descriptionProps,
  labelProps,
  imageUploaderProps,
  shouldUnregister = true,
  ...props
}: {
  control: Control<TFieldValues>;
  showErrors?: boolean;
  shouldUnregister?: boolean;
  name: TName;
  label?: string | JSX.Element;
  description?: string;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  className?: string;
  labelProps?: LabelProps;
  imageUploaderProps?: Omit<ImageUploaderProps, 'onChange'>;
}) => {
  return (
    <FormField
      shouldUnregister
      {...props}
      render={({ field, fieldState }) => {
        return (
          <FormItem className={className}>
            {!!label && <FormLabel {...labelProps}>{label}</FormLabel>}
            <FormControl>
              <ImageUploader
                {...imageUploaderProps}
                {...field}
                onChange={(image) => field.onChange(image)}
                className={
                  fieldState.error && 'ring-destructive text-destructive ring-2'
                }
              />
            </FormControl>
            {description && (
              <FormDescription {...descriptionProps}>
                {description}
              </FormDescription>
            )}
            {showErrors && <FormMessage />}
          </FormItem>
        );
      }}
    />
  );
};
