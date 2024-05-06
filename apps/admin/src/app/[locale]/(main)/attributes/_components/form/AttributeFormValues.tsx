import React from 'react';
import BoundedSectionWrapper from '../../../../../../components/common/BoundedSectionWrapper';
import FormSection from '../../../../../../components/ui/form/formSection/FormSection';
import { Card, CardContent } from '../../../../../../components/ui/Card';
import { Button } from '../../../../../../components/ui/Button';
import { Control, useFieldArray } from 'react-hook-form';
import InputField from '../../../../../../components/ui/form/input/InputField';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';

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
                        formItemClassName="!col-span-5"
                        control={control}
                        name={`values.${index}.value`}
                        label="Value"
                      />
                      <InputField
                        formItemClassName="!col-span-5"
                        control={control}
                        name={`values.${index}.meta`}
                        label="Meta"
                      />
                      <button
                        onClick={() => remove(index)}
                        className="text-sm text-danger hover:text-danger-dark transition-colors duration-200 transition-colors !col-span-2 mt-8 inline-block"
                      >
                        Remove
                      </button>
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
