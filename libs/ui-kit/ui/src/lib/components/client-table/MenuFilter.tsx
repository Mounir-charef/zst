import { Column } from '@tanstack/react-table';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '../../ui/dropdown-menu';

export interface MenuFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export function MenuFilter<TData, TValue>({
  column,
  title,
  options,
}: MenuFilterProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  return (
    <DropdownMenuSub key={title}>
      <DropdownMenuSubTrigger>{title}</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        {options.map((option) => {
          const isSelected = selectedValues.has(option.value);
          return (
            <DropdownMenuCheckboxItem
              checked={isSelected}
              key={option.value}
              onSelect={() => {
                if (isSelected) {
                  selectedValues.delete(option.value);
                } else {
                  selectedValues.add(option.value);
                }
                const filterValues = Array.from(selectedValues);
                column?.setFilterValue(
                  filterValues.length ? filterValues : undefined,
                );
              }}
              className="gap-2"
            >
              {option.icon && <option.icon className="h-4 w-4" />}
              <span>{option.label}</span>
              {facets?.get(option.value) && (
                <span className="ms-auto flex h-5 w-5 items-center justify-center rounded-md border font-mono text-xs">
                  {facets.get(option.value)}
                </span>
              )}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}
