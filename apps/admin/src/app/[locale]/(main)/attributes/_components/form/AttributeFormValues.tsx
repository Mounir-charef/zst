import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import { Button } from '../../../../../../components/ui/Button';
import { Control, useFieldArray } from 'react-hook-form';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import RemoveBorderlessButton from '../../../../../../components/common/RemoveBorderlessButton';
import { InputField } from '@mono/ui';

interface AttributeFormValuesProps {
  control: Control;
}

const AttributeFormValues = ({ control }: AttributeFormValuesProps) => {
  const { fields, append, remove } = useFieldArray({
    name: 'values',
    control,
  });
  return (
    <BoundedSectionWrapper noBorder>
      <FormSection
        title="Attribute Values"
        description="Your attribute value and necessary information from here"
      >
        <Card>
          <CardContent>
            <div>
              {fields.map((field, index) => {
                return (
                  <BoundedSectionWrapper key={field.id} className="">
                    <FormFieldsWrapper>
                      <InputField
                        className="!col-span-5"
                        control={control}
                        name={`values.${index}.value`}
                        label="Value"
                      />
                      <InputField
                        className="!col-span-5"
                        control={control}
                        name={`values.${index}.meta`}
                        label="Meta"
                      />
                      <RemoveBorderlessButton
                        className="!col-span-2 mt-8"
                        onClick={() => remove(index)}
                      />
                    </FormFieldsWrapper>
                  </BoundedSectionWrapper>
                );
              })}
            </div>
            <Button onClick={() => append({ value: '', meta: '' })}>
              Add Value
            </Button>
          </CardContent>
        </Card>
      </FormSection>
    </BoundedSectionWrapper>
  );
};

export default AttributeFormValues;
