function getRangeFilterValue(
  searchParams: URLSearchParams,
  name: string,
  defaultValue: [number, number],
) {
  const params = searchParams.getAll(name).map(Number);
  const isValid =
    params.length === 2 &&
    params[0] < params[1] &&
    params.every((value) => !isNaN(value));

  return isValid ? params : defaultValue;
}

function getRadioFilterValue(
  searchParams: URLSearchParams,
  name: string,
  options: string[],
) {
  return (
    searchParams.getAll(name).find((value) => options.includes(value)) || ''
  );
}

function getCheckboxFilterValue(
  searchParams: URLSearchParams,
  name: string,
  options: string[],
) {
  return searchParams.getAll(name).filter((value) => options.includes(value));
}

export { getRangeFilterValue, getRadioFilterValue, getCheckboxFilterValue };
