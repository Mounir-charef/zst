'use client';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import { PlusCircle } from 'lucide-react';
import { memo, useState } from 'react';
import {
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  useFieldArray,
  useFormContext,
} from 'react-hook-form';
import { NewProduct, Variant } from '../page';
import VariantEditCard from './VarientEditCard';

export const VARIANT_VALUE_OPTIONS = ['XL', 'L', 'S'];

export const VARIANT_NAMES = ['size', 'color', 'material'];

const Productvariants = () => {
  const { control } = useFormContext<NewProduct>();
  const { fields, update, remove, append } = useFieldArray({
    control,
    name: 'variants',
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>variants</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {fields.length > 0 ? (
          fields.map((variant, index) => (
            <VariantCard
              index={index}
              update={update}
              remove={remove}
              variant={variant}
              key={variant.id}
              defaultState={variant.name === ''}
            />
          ))
        ) : (
          <CardDescription>No variants added yet</CardDescription>
        )}
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <Button
          disabled={
            VARIANT_NAMES.every((name) =>
              fields.some((field) => field.name === name),
            ) || fields.length >= VARIANT_NAMES.length
          }
          size="sm"
          variant="ghost"
          className="gap-1"
          type="button"
          onClick={() =>
            append({
              name: '',
              value: [],
            })
          }
        >
          <PlusCircle className="h-3.5 w-3.5" />
          Add Variant
        </Button>
      </CardFooter>
    </Card>
  );
};

const VariantCard = ({
  variant,
  index,
  update,
  remove,
  defaultState = false,
}: {
  variant: Variant;
  index: number;
  update: UseFieldArrayUpdate<NewProduct, 'variants'>;
  remove: UseFieldArrayRemove;
  defaultState?: boolean;
}) => {
  const [editing, setEditing] = useState(defaultState);

  return (
    <Card>
      {!editing ? (
        <>
          <CardHeader className="flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg">{variant.name}</CardTitle>
            <Button
              variant="secondary"
              size="sm"
              className="px-6 text-sm"
              onClick={() => setEditing(true)}
            >
              Edit
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 px-2">
              {variant.value.map((value) => (
                <Badge variant="secondary" key={value}>
                  {value}
                </Badge>
              ))}
            </div>
          </CardContent>
        </>
      ) : (
        <VariantEditCard
          remove={remove}
          variant={variant}
          index={index}
          update={update}
        />
      )}
    </Card>
  );
};

export default memo(Productvariants);
