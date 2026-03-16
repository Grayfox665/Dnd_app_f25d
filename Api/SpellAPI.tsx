import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpellListItem } from "../types/spell";


const BASE_URL = "https://www.dnd5eapi.co";
const CACHE_KEY = "spells_cache";


export async function GetAllSpells() {

  try {
    //await AsyncStorage.removeItem("spells_cache"); to clean the cache if neccesary

    const cached = await AsyncStorage.getItem(CACHE_KEY);

    if (cached) {
      console.log("Loaded spells from cache.");
      return JSON.parse(cached);
    }

    console.log("Fetching spells from API...");


  

    const spellindexes = await fetch(BASE_URL + "/api/2014/spells").then(
      (response) => response.json(),
    );
    const spells = await Promise.all(
      spellindexes.results.map((index : SpellListItem) =>
      fetch(BASE_URL + index.url).then((response) => response.json()),
    )
  );

  await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(spells));


  return spells;
  } catch (error) {
    console.log("Error fetching spells:", error);
    return [];
  }
}