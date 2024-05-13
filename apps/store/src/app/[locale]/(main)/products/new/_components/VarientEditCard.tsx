'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Badge,
  Button,
  CardContent,
  Form,
  InputField,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@mono/ui';
import { KeyboardEvent, memo, useCallback, useId, useMemo } from 'react';
import { SubmitHandler, UseFieldArrayUpdate, useForm } from 'react-hook-form';
import { z } from 'zod';
import { NewProduct, Variant } from '../page';

const VARIANT_VALUE_OPTIONS = ['XL', 'L', 'S'];

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
        value: z.array(z.string().min(1)),
      }),
    [],
  );

  type FormValues = z.infer<typeof VariantSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(VariantSchema),
    defaultValues: variant,
  });

  const value = form.watch('value');

  const selectableValues = useMemo(
    () => VARIANT_VALUE_OPTIONS.filter((option) => !value.includes(option)),
    [value],
  );

  const addValue = useCallback(
    (newValue: string) => {
      form.setValue('value', [...value, newValue]);
    },
    [form, value],
  );

  const onSubmit: SubmitHandler<Variant> = (data) => {
    update(index, data);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    // check if enter
    if (e.key === 'Enter') {
      e.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  }, []);

  return (
    <Form {...form}>
      <CardContent className="grid gap-4 pt-6">
        <InputField
          InputProps={{
            onKeyDown: handleKeyDown,
          }}
          control={form.control}
          name="name"
          label="Option Name"
        />
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

        <div className="flex flex-wrap gap-4">
          {value.map((option) => (
            <Badge key={option} variant="secondary">
              {option}
            </Badge>
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
