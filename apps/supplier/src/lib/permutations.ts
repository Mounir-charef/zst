export function getAllPermutations<T>(arrays: T[][]): T[][] {
  if (arrays.length === 1) {
    return arrays[0].map((item) => [item]);
  }

  const firstArray = arrays[0];
  const remainingArrays = arrays.slice(1);
  const permutations: T[][] = [];

  for (const item of firstArray) {
    const remainingPermutations = getAllPermutations(remainingArrays);
    for (const permutation of remainingPermutations) {
      permutations.push([item, ...permutation]);
    }
  }

  return permutations;
}
