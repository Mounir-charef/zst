import React from 'react';
import RemoveBorderlessButton from '../../../../../../components/common/RemoveBorderlessButton';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import SelectField from '../../../../../../components/ui/form/select/SelectField';
import {
  Control,
  FieldValues,
  UseFormWatch,
  useFieldArray,
} from 'react-hook-form';
import attributes from '../../../../../../data/attributes';
import { cn } from '@mono/util';
import { Button, CardContent } from '@mono/ui';

const ProductFormVariationOptions = ({
  control,
  watch,
}: {
  control: Control;
  watch: UseFormWatch<FieldValues>;
}) => {
  const { fields, remove, append } = useFieldArray({
    name: 'options',
    control,
  });
  return (
    <CardContent>
      <div className="flex flex-col gap-6">
        {fields.map((field, index) => {
          const attribute = watch(`options.${index}.attribute`);
          const valuesOptions = attribute
            ? attributes
                .find((a) => a.id === attribute)
                ?.values.map((value) => ({
                  label: value.value,
                  value: value.id,
                })) || []
            : [];
          return (
            <div key={field.id}>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold">
                  Options {index + 1}
                </span>
                <RemoveBorderlessButton onClick={() => remove(index)} />
              </div>
              <FormFieldsWrapper>
                <SelectField
                  formItemClassName="!col-span-4"
                  options={attributes.map((attribute) => ({
                    label: attribute.name,
                    value: attribute.id,
                  }))}
                  label="Attribute Name*
"
                  control={control}
                  name={`options.${index}.attribute`}
                />
                <SelectField
                  formItemClassName="!col-span-8"
                  options={valuesOptions}
                  label="Attribute Value*"
                  isMulti
                  control={control}
                  name={`options.${index}.values`}
                />
              </FormFieldsWrapper>
            </div>
          );
        })}
      </div>
      <Button
        className={cn(fields.length > 0 && 'mt-8')}
        onClick={() => {
          append({
            attribute: '',
            values: [],
          });
        }}
      >
        Add an option
      </Button>
    </CardContent>
  );
};

export default ProductFormVariationOptions;
