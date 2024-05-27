export function getFullApiPath(path: string): string {
  return process.env.NEXT_PUBLIC_BACKEND_API + path;
}
