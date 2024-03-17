export function convertObjectToStringRecord(object: object) {
  const stringParams: Record<string, string> = {};

  Object.entries(object).forEach(([key, value]) => {
    stringParams[key] = String(value);
  });

  return stringParams;
}
