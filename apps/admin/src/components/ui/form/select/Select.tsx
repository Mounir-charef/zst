'use client';

import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import { ID } from '../../../../types/common';
import { useMemo } from 'react';
import { selectStyles } from './select-styles';

export interface SelectOption {
  label: string;
  value: ID;
}

export interface SelectProps
  extends Omit<ReactSelectProps, 'onChange' | 'value' | 'options'> {
  value: ID | ID[];
  options: SelectOption[];
  onChange: (value: ID | ID[]) => unknown;
}

const Select = ({
  value,
  options,
  isMulti,
  onChange,
  ...props
}: SelectProps) => {
  const val = useMemo(() => {
    if (isMulti) {
      return options.filter((option) => {
        return (
          Array.isArray(value) &&
          value.map((value) => String(value)).includes(String(option.value))
        );
      });
    }
    return options?.find((option) => String(option.value) === String(value));
  }, [value, options, isMulti]);
  return (
    <ReactSelect
      value={val}
      onChange={(value) => {
        const val = isMulti
          ? (value as SelectOption[]).map((v) => v.value)
          : (value as SelectOption).value;
        onChange(val);
      }}
      isMulti={isMulti}
      options={options}
      styles={selectStyles}
      {...props}
    />
  );
};

export default Select;
