import { FlatList } from "react-native";
import LoadingComponent from "./loading";
import ErrorComponent from "./ErrorComponent";
import { useLoadingHook } from "../hooks/useLoadingHook";
import { DataListProps } from "../types/general";
import { ReactElement } from "react";
import { useFilteredData } from "../hooks/useFilteredDataHook";
import { useKeyExtractor } from "../hooks/useKeyExtractorHook";

export default function DataList<T extends { index: string }>(
  props: DataListProps<T>
): ReactElement {
  const { fetchData, renderItem, keyExtractor, filterFn} = props;

  const extractor = useKeyExtractor(keyExtractor)
  const { data, loading, error } = useLoadingHook<T[]>(fetchData);
  const filteredData = useFilteredData(data, filterFn)

  if (loading || !filteredData) return <LoadingComponent />;
  if(error) return <ErrorComponent />;


  return (
    <FlatList
      data={filteredData}
      renderItem={renderItem}
      keyExtractor={extractor}
    />
  );
}