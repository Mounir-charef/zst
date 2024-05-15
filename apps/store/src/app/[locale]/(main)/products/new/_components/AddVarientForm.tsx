'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  CardContent,
  Form,
  Label,
  Select,
  SelectContent,
  SelectField,
  SelectItem,
  SelectTrigger,
  badgeVariants,
} from '@mono/ui';
import { X } from 'lucide-react';
import { memo, useCallback, useId, useMemo } from 'react';
import {
  SubmitHandler,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { z } from 'zod';
import { NewProduct, Variant } from '../page';
import { VARIANT_NAMES, VARIANT_NAMES_OPTIONS } from './ProductVariants';

const AddVarientForm = ({ close }: { close: () => void }) => {
  const selectId = useId();

  const VariantSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(3),
        values: z.array(z.string().min(1, 'Required').max(255)).min(1),
      }),
    [],
  );

  type FormValues = z.infer<typeof VariantSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(VariantSchema),
    defaultValues: {
      name: '',
      values: [],
    },
  });
  const { control } = useFormContext<NewProduct>();
  const { append } = useFieldArray({
    control: control,
    name: 'variants',
  });

  const values = form.watch('values');

  const { watch } = useFormContext<NewProduct>();

  const selectedVariants = watch('variants');

  const selectableValues = useMemo(
    () => VARIANT_NAMES_OPTIONS.filter((option) => !values.includes(option)),
    [values],
  );

  const selectableVariants = useMemo(
    () =>
      VARIANT_NAMES.filter(
        (name) => !selectedVariants.some((variant) => variant.name === name),
      ),
    [selectedVariants],
  );

  const addValue = useCallback(
    (newValue: string) => {
      form.setValue('values', [...values, newValue]);
    },
    [form, values],
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

  const onSubmit: SubmitHandler<Variant> = (data) => {
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

        <div className="space-y-2">
          <Label htmlFor="selectId">Option Values</Label>
          <Select onValueChange={addValue} disabled={!selectableValues.length}>
            <SelectTrigger id={selectId}>Add Value</SelectTrigger>
            <SelectContent>
              {selectableValues.map((value) => (
                <SelectItem key={value} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {form.formState.errors.values && (
            <p className="text-destructive text-sm font-medium">
              {form.formState.errors.values.message}
            </p>
          )}
        </div>

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
          <Button type="button" variant="destructive" onClick={() => close()}>
            Delete
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
