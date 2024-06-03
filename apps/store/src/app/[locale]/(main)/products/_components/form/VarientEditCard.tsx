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
import { SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { VARIANT_NAMES, VARIANT_VALUES_BY_NAME } from './ProductVariants';
import {
  IProductDetails,
  Variant,
} from '../../../../../../validation/add-product-schema';

interface VariantEditCardProps {
  variant: Variant;
  update: (data: Variant) => void;
  remove: () => void;
  close: () => void;
}

const VariantEditCard = ({
  variant,
  update,
  remove,
  close,
}: VariantEditCardProps) => {
  const VariantSchema = useMemo(
    () =>
      z.object({
        name: z.enum(VARIANT_NAMES),
        values: z.array(z.string().min(1, 'Required').max(255)),
      }),
    [],
  );

  type FormValues = z.infer<typeof VariantSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(VariantSchema),
    defaultValues: variant as FormValues,
  });

  const { values, name } = form.watch();

  const { watch } = useFormContext<IProductDetails>();

  const selectedVariants = watch('variants');

  const selectableValues = useMemo(
    () => (name ? VARIANT_VALUES_BY_NAME[name] : []),
    [values],
  );

  const selectableVariants = useMemo(() => {
    const notSelectedVariants = VARIANT_NAMES.filter(
      (name) => !selectedVariants.some((variant) => variant.name === name),
    );
    const variantsNames = [...notSelectedVariants, variant.name];
    return variantsNames.map((name) => ({ label: name, value: name }));
  }, [selectedVariants]);

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

  useEffect(() => {
    if (name === variant.name) {
      form.setValue('values', variant.values);
    } else {
      form.setValue('values', []);
    }
  }, [name]);

  const checkNameNotSelected = useCallback(
    (name: string) => {
      const isNotSelected = selectedVariants.every(
        (variant) => variant.name !== name,
      );
      return isNotSelected || name === variant.name;
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
    update(data);
    close();
  };

  return (
    <Form {...form}>
      <CardContent className="relative grid gap-4 pt-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={close}
          className="absolute right-2 top-2"
        >
          <X className="h-5 w-5" />
        </Button>
        <SelectField
          options={selectableVariants}
          control={form.control}
          name="name"
          label="Option Name"
        />

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
          <div className="flex items-center gap-2">
            <Button variant="destructive" onClick={() => remove()}>
              Delete
            </Button>
          </div>
          <Button variant="reverse" onClick={form.handleSubmit(onSubmit)}>
            Save
          </Button>
        </div>
      </CardContent>
    </Form>
  );
};

export default memo(VariantEditCard);
