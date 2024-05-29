'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  CardContent,
  Form,
  MultiSelectField,
  SelectField,
  badgeVariants,
} from '@mono/ui';
import { X } from 'lucide-react';
import { memo, useCallback, useEffect, useMemo } from 'react';
import {
  SubmitHandler,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { z } from 'zod';
import { IProductDetails } from '../../types';
import { VARIANT_NAMES, VARIANT_VALUES_BY_NAME } from './ProductVariants';

const AddVarientForm = ({ close }: { close: () => void }) => {
  const VariantSchema = useMemo(
    () =>
      z.object({
        name: z.enum(VARIANT_NAMES),
        values: z.array(z.string().min(1, 'Required').max(255)).min(1),
      }),
    [],
  );

  type FormValues = z.infer<typeof VariantSchema>;

  const { watch } = useFormContext<IProductDetails>();

  const selectedVariants = watch('variants');

  const form = useForm<FormValues>({
    resolver: zodResolver(VariantSchema),
    defaultValues: {
      name: VARIANT_NAMES[selectedVariants.length],
      values: [],
    },
  });
  const { control } = useFormContext<IProductDetails>();
  const { append } = useFieldArray({
    control: control,
    name: 'variants',
  });

  const { values, name } = form.watch();

  const selectableValues = useMemo(
    () => (name ? VARIANT_VALUES_BY_NAME[name] : []),
    [values, name],
  );

  const selectableVariants = useMemo(
    () =>
      VARIANT_NAMES.filter(
        (name) => !selectedVariants.some((variant) => variant.name === name),
      ),
    [selectedVariants],
  );

  const removeValue = useCallback(
    (removedValue: string) => {
      form.setValue(
        'values',
        values.filter((option) => option !== removedValue),
      );
    },
    [form, values],
  );

  const checkNameNotSelected = useCallback(
    (name: string) => {
      return selectedVariants.every((variant) => variant.name !== name);
    },
    [selectedVariants],
  );

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!checkNameNotSelected(data.name)) {
      form.setError('name', {
        type: 'manual',
        message: 'Please select a name',
      });
      return;
    }
    append(data);
    close();
  };

  useEffect(() => {
    form.setValue('values', []);
  }, [name]);

  return (
    <Form {...form}>
      <CardContent className="grid gap-4 pt-6">
        <SelectField
          options={selectableVariants.map((name) => ({
            value: name,
            label: name,
          }))}
          control={form.control}
          name="name"
          label="Option Name"
        />

        {/* TODO: make this a component (select multiple) */}
        <MultiSelectField
          control={form.control}
          options={selectableValues.map((value) => ({
            label: value,
            value: value,
          }))}
          label="Option Values"
          name="values"
          placeholder="Select option values"
        />

        <div className="flex flex-wrap gap-4">
          {values.map((option) => (
            <button
              type="button"
              key={option}
              className={badgeVariants({
                variant: 'secondary',
                className: 'group relative cursor-pointer overflow-clip',
              })}
              onClick={() => removeValue(option)}
            >
              <span>{option}</span>
              <div className="bg-destructive text-destructive-foreground invisible absolute inset-0 grid place-items-center group-hover:visible group-focus-visible:visible">
                <X className="h-3 w-3" />
              </div>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Button type="button" variant="outline" onClick={() => close()}>
            Cancel
          </Button>
          <Button
            type="button"
            variant="reverse"
            onClick={form.handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </div>
      </CardContent>
    </Form>
  );
};

export default memo(AddVarientForm);
