import { ConditionListItem, ConditionIndexResponse, Condition } from "../types/condition";

const BASE_URL = "https://www.dnd5eapi.co";

export async function GetAllConditions(): Promise<Condition[]> {
  const conditionIndexes = await fetch(BASE_URL + "/api/2014/conditions")
  .then(
    (response) => response.json() as Promise<ConditionIndexResponse>
  );
  return Promise.all(
    conditionIndexes.results.map((index : ConditionListItem ) => 
      fetch(BASE_URL + index.url).then((response) => response.json()),
    ),
  );
}