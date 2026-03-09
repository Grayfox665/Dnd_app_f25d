import { ConditionListItem } from "../types/condition";

const BASE_URL = "https://www.dnd5eapi.co";

export async function GetAllConditions() {
  const ConditionIndexes = await fetch(BASE_URL + "/api/2014/conditions")
  .then(
    (response) => response.json(),
  );
  return Promise.all(
    ConditionIndexes.results.map((index : ConditionListItem ) => 
      fetch(BASE_URL + index.url).then((response) => response.json()),
    ),
  );
}