import { useEffect, useState } from 'react';

interface UseDebouncedValueArgs {
  value: unknown;
  delay?: number;
  // onValueChange?: () => unknown
}

export default function useDebouncedValue({
  value,
  delay = 300,
}: UseDebouncedValueArgs) {
  const [values, setValues] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValues(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, value]);

  return values;
}
