import { Button, InputField } from '@mono/ui';
import { ArrowRightIcon, SearchIcon } from 'lucide-react';
import React from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

const Search = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
}: {
  control: Control<TFieldValues>;
  name: TName;
}) => {
  return (
    <div className="relative">
      <InputField
        InputProps={{
          className: 'rounded-full text-foreground ps-10 py-6 ',
        }}
        placeholder="Search for any product or brand"
        IconStart={SearchIcon}
        showErrors={false}
        control={control}
        name={name}
      />
      <div className="flexCenter absolute right-2 top-0 h-full">
        <Button className=" aspect-square  h-3/4 rounded-full p-0 ">
          <ArrowRightIcon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Search;
