import { SpellListItem } from "../types/spell";


const BASE_URL = "https://www.dnd5eapi.co";


export async function GetAllSpells() {
  const spellindexes = await fetch(BASE_URL + "/api/2014/spells").then(
    (response) => response.json(),
  );
  return Promise.all(
    spellindexes.results.map((index : SpellListItem) =>
      fetch(BASE_URL + index.url).then((response) => response.json()),
  ),
  );
}