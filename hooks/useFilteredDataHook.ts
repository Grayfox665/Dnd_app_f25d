import { useState, useEffect } from "react";

export function useFilteredData<T>(
  data : T[]| null | undefined,
  filterFn?: (data: T[]) => T [] | Promise<T[]>
) {
  const [filteredData, setFilteredData] = useState<T[] | undefined>(undefined);

  useEffect(() => {
    if (!data) return;

    const applyFilter = async () => {
      const result = filterFn ? await  filterFn(data) : data;
      setFilteredData(result);
    };

    applyFilter();
  }, [data, filterFn]);

  return filteredData;
}