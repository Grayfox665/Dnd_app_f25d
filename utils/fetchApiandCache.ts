import AsyncStorage from "@react-native-async-storage/async-storage";
import { IndexItem } from "../types/general";

const BASE_URL = "https://www.dnd5eapi.co";

export async function FetchApiAndCache<T>(
  endpoint : string,
  cacheKey: string,
): Promise<T[]> {
  try {
    const cached = await AsyncStorage.getItem(cacheKey);
    if (cached) {
        try {
        console.log(`Loaded ${cacheKey} from cache`);
        return JSON.parse(cached);
        } catch {
          console.log(`${cacheKey} corrupted, clearing...`);
          await AsyncStorage.removeItem(cacheKey);
        }
    }

    console.log(`Fetching ${endpoint} from API...`);


    const indexRes = await fetch(`${BASE_URL}${endpoint}`);
    if (!indexRes.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${indexRes.status}`);
    }

    const indexData = await indexRes.json();

    const items: (T |null)[] = await Promise.all(
      indexData.results.map(async (item: IndexItem) => {
        const res = await fetch(`${BASE_URL}${item.url}`);

        if (!res.ok) {
          console.warn(`Failed to fetch ${item.index}: ${res.status}`);
          return null;
        }

        try {
          return await res.json();
        } catch {
          console.warn(`Invalid JSON for ${item.index}`);
          return null;
        }
      })
    );

    const validItems = items.filter((i): i is T => i !== null);

    await AsyncStorage.setItem(cacheKey, JSON.stringify(validItems));

    return validItems;
  } catch (error) {
    console.log(`Error fetching ${endpoint}:`, error);
    return [];
  }
}