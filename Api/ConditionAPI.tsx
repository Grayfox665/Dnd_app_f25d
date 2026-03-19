import { Condition } from "../types/condition";
import { FetchApiAndCache } from "../utils/fetchApiandCache";


export async function GetAllConditions(): Promise<Condition[]> {
  return FetchApiAndCache(
    "/api/2014/conditions",
    "condition_cache"
  );

}