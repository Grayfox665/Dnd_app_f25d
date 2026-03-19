export function useKeyExtractor<T extends { index: string}> 
  (keyExtractor?: (item: T) => string
) {
  return keyExtractor ?? ((item: T) => item.index);
}