import { useEffect, useState } from "react";

export function useLoadingHook<T>(fetchFn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
      const result = await fetchFn();

      if(isMounted) {
        setData(result);
      }
    } catch (err) {
      if (isMounted) {
        setError(err);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  }

  load();

  return () => {
    isMounted = false;
  };
  }, [fetchFn]);

  return { data, loading, error };
}