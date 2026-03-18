import { RuleSectionListItem, RuleSection } from "../types/ruleSection";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://www.dnd5eapi.co";
const CACHE_RULES_KEY = "rules_cache";

export async function GetAllRulesSections(): Promise<RuleSection[]> {

  try {

    const cached = await AsyncStorage.getItem(CACHE_RULES_KEY);
    if (cached) {
      try {
        console.log("Loaded rules from cache.");
        return JSON.parse(cached);
      } catch {
        console.log("Rules cache corrupted, clearing cache...");
        await AsyncStorage.removeItem(CACHE_RULES_KEY);
      }
    }

    console.log("Fetching rules from API...");

  const ruleSectionIndexRes = await fetch(BASE_URL + "/api/2014/rule-sections");
  if (!ruleSectionIndexRes.ok) throw new Error(`Failed to fetch rules indexes: ${ruleSectionIndexRes.status}`);
  const ruleSectionIndexes = await ruleSectionIndexRes.json();

  const ruleSections = await Promise.all(
    ruleSectionIndexes.results.map(async (index : RuleSectionListItem) => {
      const ruleSectionRes = await fetch(BASE_URL + index.url);

      if (!ruleSectionRes.ok) {
        console.warn(`Failed to fetch rules ${index.index}: ${ruleSectionRes.status}`);
        return null;
      }

      try {
        return await ruleSectionRes.json();
      } catch (e) {
        console.warn(`Invalid JSON for rules ${index.index}`);
        return null;
      }
    })
  );

  const validRulesSections = ruleSections.filter((ruleSection: RuleSection) => ruleSection !== null);

  await AsyncStorage.setItem(CACHE_RULES_KEY, JSON.stringify(validRulesSections));

  return validRulesSections;
  } catch (error) {
    console.log("Error fetching rules:", error);
    return [];
  }
}