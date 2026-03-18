import { ConditionListItem, Condition } from "../types/condition";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://www.dnd5eapi.co";
const CACHE_CONDITION_KEY = "condition_cache";

export async function GetAllConditions(): Promise<Condition[]> {

  try {

    const cachedConditions = await AsyncStorage.getItem(CACHE_CONDITION_KEY)
    if (cachedConditions) {
      try {
        console.log("Loaded Conditions from cache.");
        return JSON.parse(cachedConditions)
      } catch {
        console.log("Condition cache corrupted, clearing cache...")
        await AsyncStorage.removeItem(CACHE_CONDITION_KEY);
      }
    }

    console.log("Fetching conditons from API...");

  const conditionIndexesRes = await fetch(BASE_URL + "/api/2014/conditions");
  if (!conditionIndexesRes.ok) throw new Error(`Failed to fetch condition indexes: ${conditionIndexesRes.status}`);
  const conditionIndexes = await conditionIndexesRes.json();

  const conditions = await Promise.all(
    conditionIndexes.results.map(async (index : ConditionListItem) => {
      const conditionRes = await fetch(BASE_URL + index.url);

      if (!conditionRes.ok) {
        console.warn(`Failed to fetch condition ${index.index}: ${conditionRes.status}`);
        return null;
      }

      try {
        return await conditionRes.json();
      } catch (e) {
        console.warn(`Invalid JSON for condition ${index.index}`);
        return null;
      }
    })
  );

  const validConditions = conditions.filter((condition: Condition) => condition !== null);

  await AsyncStorage.setItem(CACHE_CONDITION_KEY, JSON.stringify(validConditions));

  return validConditions;
  } catch (error) {
    console.log("Error fetching conditions:", error);
    return [];
  }
}