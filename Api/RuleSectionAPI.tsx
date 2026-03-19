import { RuleSection } from "../types/ruleSection";
import { FetchApiAndCache } from "../utils/fetchApiandCache";


export async function GetAllRulesSections(): Promise<RuleSection[]> {
  return FetchApiAndCache(
    "/api/2014/rulesections",
    "rules_cache"
  );

}