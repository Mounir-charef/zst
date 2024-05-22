import {
  TransitionStartFunction,
  memo,
  useCallback,
  useMemo,
  useTransition,
} from 'react';
import { SubFilter } from './SubFilters';
import { usePathname, useRouter } from '../../../../../navigation';
import { useSearchParams } from 'next/navigation';
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@mono/ui';

interface MenuFilterProps extends SubFilter {
  startTransition: TransitionStartFunction;
}

const MenuFilter = ({ label, options, startTransition }: MenuFilterProps) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selectedValue = useMemo(
    () => searchParams.get(label) ?? '',
    [searchParams, label],
  );

  const handleChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value || value === selectedValue) {
        params.delete(label);
      } else {
        params.set(label, value);
      }
      startTransition(() => {
        replace(`${pathname}?${params.toString()}`);
      });
    },
    [replace, searchParams, label, startTransition],
  );
  return (
    <DropdownMenuSub key={label}>
      <DropdownMenuSubTrigger>{label}</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuRadioGroup
          value={selectedValue}
          onValueChange={handleChange}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
};

export default memo(MenuFilter);
