export function nameToSlug(name: string) {
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
}

export function convertObjectToStringRecord(object: object) {
  const stringParams: Record<string, string> = {};

  Object.entries(object).forEach(([key, value]) => {
    stringParams[key] = String(value);
  });

  return stringParams;
}

export function jwtDecode(token: string) {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}
