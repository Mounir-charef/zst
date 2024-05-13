'use client';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import { memo, useCallback, useState } from 'react';
import {
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  useFieldArray,
  useFormContext,
} from 'react-hook-form';
import { NewProduct, Variant } from '../page';
import VariantEditCard from './VarientEditCard';

const Productvariants = () => {
  const { control } = useFormContext<NewProduct>();
  const { fields, update, remove } = useFieldArray({
    control,
    name: 'variants',
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>variants</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {fields.map((variant, index) => (
          <VariantCard
            index={index}
            update={update}
            remove={remove}
            variant={variant}
            key={variant.id}
          />
        ))}
      </CardContent>
    </Card>
  );
};

const VariantCard = ({
  variant,
  index,
  update,
  remove,
}: {
  variant: Variant;
  index: number;
  update: UseFieldArrayUpdate<NewProduct, 'variants'>;
  remove: UseFieldArrayRemove;
}) => {
  const [editing, setEditing] = useState(false);

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
