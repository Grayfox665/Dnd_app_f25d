import { RuleSectionListItem } from "../types/ruleSection";

const BASE_URL = "https://www.dnd5eapi.co";


export async function GetAllRulesSections() {
  const ruleSectionIndexes = await fetch(BASE_URL + "/api/2014/rule-sections").then(
    (response) => response.json(),
  );
  return Promise.all(
    ruleSectionIndexes.results.map((index : RuleSectionListItem) =>
      fetch(BASE_URL + index.url).then((response) => response.json()),
  ),
  );
}