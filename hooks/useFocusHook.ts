import { useState, useCallback} from "react";
import { useFocusEffect } from "@react-navigation/native";

export function useFocusReload(): number {
  const [reloadKey, setReloadKey] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setReloadKey(prev => prev + 1);
    }, [])
  );

  return reloadKey;
}