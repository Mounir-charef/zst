import React, { InputHTMLAttributes, forwardRef, useMemo } from 'react';
import { Label } from '@mono/ui/lib/ui/label';
import { SelectOption } from '../select/Select';
import { ID } from '../../../../types/common';

export interface RadioItemProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface RadioProps extends RadioItemProps {
  options: SelectOption[];
}

const RadioItem = React.forwardRef<HTMLInputElement, RadioItemProps>(
  ({ className, label, name, id, ...props }, ref) => {
    const randomID = useMemo(() => Math.random().toString(16), [id]);
    return (
      <div className={className}>
        <div className="flex items-center">
          <input
            id={randomID}
            name={name}
            type="radio"
            ref={ref}
            className={'radio_input'}
            {...props}
          />
          <Label htmlFor={randomID} className="pl-2.5">
            {label}
          </Label>
        </div>
      </div>
    );
  }
);

RadioItem.displayName = 'RadioItem';

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ options, value, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {options.map((option) => {
          return (
            <RadioItem
              key={option.value}
              label={option.label}
              value={option.value}
              checked={option.value == value}
              {...props}
            />
          );
        })}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
