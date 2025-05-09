export default function range (start: number, end: number) {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };