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
import { VARIANT_NAMES, VARIANT_VALUE_OPTIONS } from './ProductVariants';

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
        value: z.array(z.string().min(1)).min(1),
      }),
    [],
  );

  type FormValues = z.infer<typeof VariantSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(VariantSchema),
    defaultValues: variant,
  });

  const value = form.watch('value');

  const { watch } = useFormContext<NewProduct>();

  const selectedVariants = watch('variants');

  const selectableValues = useMemo(
    () => VARIANT_VALUE_OPTIONS.filter((option) => !value.includes(option)),
    [value],
  );

  const selectableVariants = useMemo(() => {
    const restNames = VARIANT_NAMES.filter((name) => {
      return !selectedVariants.some((variant) => variant.name === name);
    });
    return variant.name ? [variant.name, ...restNames] : restNames;
  }, [selectedVariants]);

  const addValue = useCallback(
    (newValue: string) => {
      form.setValue('value', [...value, newValue]);
    },
    [form, value],
  );

  const removeValue = useCallback(
    (removedValue: string) => {
      form.setValue(
        'value',
        value.filter((option) => removedValue !== option),
      );
    },
    [form, value],
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
          {form.formState.errors.value && (
            <p className="text-destructive text-sm font-medium">
              {form.formState.errors.value.message}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-4">
          {value.map((option) => (
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
