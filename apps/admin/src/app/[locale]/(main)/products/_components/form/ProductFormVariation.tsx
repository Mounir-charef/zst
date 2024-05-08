import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import { Button } from '../../../../../../components/ui/Button';
import {
  Control,
  FieldValues,
  UseFormWatch,
  useFieldArray,
} from 'react-hook-form';
import RemoveBorderlessButton from '../../../../../../components/common/RemoveBorderlessButton';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import InputField from '../../../../../../components/ui/form/input/InputField';
import SelectField from '../../../../../../components/ui/form/select/SelectField';
import attributes from '../../../../../../data/attributes';
import { cn } from '@mono/util';

const ProductFormVariation = ({
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
    <BoundedSectionWrapper noBorder>
      <FormSection
        title="Product Variation Information"
        description="Update your product variation and necessary information from here"
      >
        <Card>
          <CardContent>
            <div className="flex flex-col gap-5">
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
                    <div className="flex justify-between items-center mb-5">
                      <span className="font-semibold text-sm">
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
                  attributes: '',
                  values: [],
                });
              }}
            >
              Add an option
            </Button>
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default ProductFormVariation;
