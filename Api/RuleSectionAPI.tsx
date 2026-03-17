import { RuleSectionListItem, RuleSectionIndexesResponse, RuleSection } from "../types/ruleSection";

const BASE_URL = "https://www.dnd5eapi.co";


export async function GetAllRulesSections(): Promise<RuleSection[]> {
  const ruleSectionIndexes = await fetch(BASE_URL + "/api/2014/rule-sections").then(
    (response) => response.json() as Promise<RuleSectionIndexesResponse>
  );
  return Promise.all(
    ruleSectionIndexes.results.map((index : RuleSectionListItem) =>
      fetch(BASE_URL + index.url).then((response) => response.json()),
  ),
  );
}