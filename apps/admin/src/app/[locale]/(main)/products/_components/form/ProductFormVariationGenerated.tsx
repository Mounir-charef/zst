import React from 'react';
import { CardContent } from '../../../../../../components/ui/Card';
import { Control, FieldValues, UseFormWatch } from 'react-hook-form';
import generateVariations from '../../../../../../utils/generateVariations';
import attributes from '../../../../../../data/attributes';
import FormFieldsWrapper from '../../../../../../components/ui/form/FormFieldsWrapper';
import { InputField } from '@mono/ui';
import FileUploaderField from '../../../../../../components/ui/form/fileUploader/FileUploaderField';

const ProductFormVariationGenerated = ({
  control,
  watch,
}: {
  control: Control;
  watch: UseFormWatch<FieldValues>;
}) => {
  const variations = generateVariations(watch('options') || []);

  return (variations || []).length > 0 ? (
    <CardContent className="flex flex-col gap-8 border-t border-dashed pt-8">
      {(variations || []).map((variation, index) => {
        let valuesCombinationText = '';
        const attributesIDs = Object.keys(variation);
        attributesIDs.forEach((attributeID, index) => {
          const attribute = attributes.find(
            (attribute) => attribute.id.toString() === attributeID.toString(),
          );
          const value = (attribute?.values || []).find(
            (val) => val.id.toString() === variation[attributeID].toString(),
          );
          valuesCombinationText += `${value?.value}${index === attributesIDs.length - 1 ? '' : '/'}`;
        });
        return (
          <div key={index}>
            <h2 className="mb-4 text-lg font-semibold">
              Variant:{' '}
              <span className="text-blue-600">{valuesCombinationText}</span>
            </h2>
            <FormFieldsWrapper>
              <InputField
                className="!col-span-6"
                control={control}
                label="Price"
                name={``}
              />
              <InputField
                className="!col-span-6"
                control={control}
                label="Quantity"
                name={``}
              />
              <FileUploaderField
                control={control}
                name="gallery"
                label="Gallery"
                multiple
              />
            </FormFieldsWrapper>
          </div>
        );
      })}
    </CardContent>
  ) : null;
};

export default ProductFormVariationGenerated;
