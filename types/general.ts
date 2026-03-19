import { ReactElement } from "react";

export type IndexItem = {
  index:string;
  url: string;
}

export type DataListProps<T> = {
  fetchData: () => Promise<T[]>;
  renderItem: ({ item }: { item: T }) => ReactElement;
  keyExtractor?: (item : T) => string;
  filterFn?: (data: T[]) => T[] | Promise<T[]>;
};