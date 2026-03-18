import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpellListItem } from "../types/spell";


const BASE_URL = "https://www.dnd5eapi.co";
const CACHE_KEY = "spells_cache";


export async function GetAllSpells() {

  try {
    // use to clear corrupted cache
    //await AsyncStorage.removeItem("spells_cache");

    const cached = await AsyncStorage.getItem(CACHE_KEY);
    if (cached) {
        try {
        console.log("Loaded spells from cache.");
        return JSON.parse(cached);
        } catch {
          console.log("Cache corrupted, clearing cache...");
          await AsyncStorage.removeItem(CACHE_KEY);
        }
    }

    console.log("Fetching spells from API...");

    const spellIndexRes = await fetch(BASE_URL + "/api/2014/spells");
    if (!spellIndexRes.ok) throw new Error(`Failed to fetch spell indexes: ${spellIndexRes.status}`);
    const spellindexes = await spellIndexRes.json();

    const spells = await Promise.all(
      spellindexes.results.map(async (index : SpellListItem) => {
        const spellRes = await fetch(BASE_URL + index.url);

        if (!spellRes.ok) {
          console.warn(`Failed to fetch spell ${index.index}: ${spellRes.status}`);
          return null;
        }

        try {
          return await spellRes.json();
        } catch (e) {
          console.warn(`Invalid JSON for spell ${index.index}`);
          return null;
        }
      })
  );

  const validSpells = spells.filter(spell => spell !== null);

  await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(validSpells));


  return validSpells;
  } catch (error) {
    console.log("Error fetching spells:", error);
    return [];
  }
}