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
import VariantEditCard from './VarientEditCard';
import AddVarientForm from './AddVarientForm';
import { IProductDetails, Variant } from '../../types';

export const VARIANT_NAMES = ['size', 'color', 'material'] as const;

export const VARIANT_VALUES_BY_NAME = {
  size: ['S', 'M', 'L', 'XL', 'XXL'],
  color: ['Red', 'Blue', 'Green', 'Yellow', 'Black'],
  material: ['Cotton', 'Polyester', 'Silk', 'Wool'],
} as const;

const Productvariants = () => {
  const { control, watch } = useFormContext<IProductDetails>();
  const { update, remove } = useFieldArray({
    control,
    name: 'variants',
  });
  const [adding, setAdding] = useState(false);
  const fields = watch('variants');
  return (
    <Card>
      <CardHeader>
        <CardTitle>Variants</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {fields.length > 0 && (
          <>
            {fields.map((variant, index) => (
              <VariantCard
                index={index}
                update={update}
                remove={remove}
                variant={variant}
                key={variant.name}
                defaultState={variant.name === ''}
              />
            ))}
          </>
        )}
        {adding && <AddVarientForm close={() => setAdding(false)} />}

        {fields.length === 0 && !adding && (
          <CardDescription className="text-center">
            No variants added
          </CardDescription>
        )}
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <Button
          disabled={
            VARIANT_NAMES.every((name) =>
              fields.some((field) => field.name === name),
            ) ||
            fields.length >= VARIANT_NAMES.length ||
            adding
          }
          size="sm"
          variant="ghost"
          className="gap-1"
          type="button"
          onClick={() => setAdding(true)}
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
  update: UseFieldArrayUpdate<IProductDetails, 'variants'>;
  remove: UseFieldArrayRemove;
  defaultState?: boolean;
}) => {
  const [editing, setEditing] = useState(defaultState);

  return (
    <Card>
      {!editing ? (
        <>
          <CardHeader className="flex-row items-center justify-between pb-3">
            <CardTitle className="text-lg capitalize">{variant.name}</CardTitle>
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
              {variant.values.map((value) => (
                <Badge variant="secondary" key={value}>
                  {value}
                </Badge>
              ))}
            </div>
          </CardContent>
        </>
      ) : (
        <VariantEditCard
          remove={() => remove(index)}
          variant={variant}
          update={(data) => update(index, data)}
          close={() => setEditing(false)}
        />
      )}
    </Card>
  );
};

export default memo(Productvariants);
