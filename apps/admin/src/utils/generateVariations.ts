import { ID } from "../types/common";

export default function generateVariations(
    options: { attribute: ID, values: ID[] }[],
    currentIndex = 0,
    currentCombination: {[attribute: ID]: ID} = {},
    variations: {[attribute: ID]: ID}[] = [],
  ) {
    if (currentIndex === options.length) {
      variations.push({ ...currentCombination });
      return;
    }
  
    const currentOption = options[currentIndex];
    const { attribute, values } = currentOption;
  
    for (const value of values) {
      currentCombination[attribute] = value;
      generateVariations(
        options,
        currentIndex + 1,
        currentCombination,
        variations,
      );
    }
  
    return variations;
  }