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
  UseFieldArrayUpdate,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { z } from 'zod';
import { NewProduct, Variant } from '../page';
import { VARIANT_NAMES, VARIANT_NAMES_OPTIONS } from './ProductVariants';

interface VariantEditCardProps {
  variant: Variant;
  index: number;
  update: UseFieldArrayUpdate<NewProduct, 'variants'>;
  remove: (index: number) => void;
}

const VariantEditCard = ({
  variant,
  index,
  update,
  remove,
}: VariantEditCardProps) => {
  const selectId = useId();

  const VariantSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(3),
        values: z
          .array(
            z.object({
              name: z.string().min(1).max(255),
              price: z.number().min(0),
              quantity: z.number().min(0),
            }),
          )
          .min(1),
      }),
    [],
  );

  type FormValues = z.infer<typeof VariantSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(VariantSchema),
    defaultValues: variant,
  });

  const values = form.watch('values');

  const { watch, setValue: setProductValue } = useFormContext<NewProduct>();

  const { variants: selectedVariants } = watch();

  const selectableValues = useMemo(
    () => VARIANT_NAMES_OPTIONS.filter((option) => values),
    [values],
  );

  const selectableVariants = useMemo(() => {
    const restNames = VARIANT_NAMES.filter((name) => {
      return !selectedVariants.some((variant) => variant.name === name);
    });
    return variant.name ? [variant.name, ...restNames] : restNames;
  }, [selectedVariants]);

  const addValue = useCallback(
    (newValue: string) => {
      form.setValue('values', [
        ...values,
        { name: newValue, price: 0, quantity: 0 },
      ]);
    },
    [form, values],
  );

  const removeValue = useCallback(
    (removedValue: string) => {
      form.setValue(
        'values',
        values.filter((option) => option.name !== removedValue),
      );
    },
    [form, values],
  );

  const onSubmit: SubmitHandler<Variant> = (data) => {
    update(index, data);
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
              key={option.name}
              className={badgeVariants({
                variant: 'secondary',
                className: 'group relative cursor-pointer overflow-clip',
              })}
              onClick={() => removeValue(option.name)}
            >
              <span>{option.name}</span>
              <div className="bg-destructive text-destructive-foreground invisible absolute inset-0 grid place-items-center group-hover:visible group-focus-visible:visible">
                <X className="h-3 w-3" />
              </div>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Button variant="destructive" onClick={() => remove(index)}>
            Delete
          </Button>
          <Button variant="reverse" onClick={form.handleSubmit(onSubmit)}>
            Save
          </Button>
        </div>
      </CardContent>
    </Form>
  );
};

export default memo(VariantEditCard);
