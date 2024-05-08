export function nameToSlug(name: string) {
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
}
