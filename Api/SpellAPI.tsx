import { Spell } from "../types/spell";
import { FetchApiAndCache } from "../utils/fetchApiandCache";

export async function GetAllSpells(): Promise<Spell[]> {
  return FetchApiAndCache(
    "/api/2014/spells",
    "spells_cache"
  );
}