import { useCallback } from "react";
import { Spell } from "../types/spell";
import { getSpellBookmarks } from "../utils/spellBookmarks";

export function useBookmarkedFilter(): (allSpells: Spell[]) => Promise<Spell[]> {
  return useCallback(async (allSpells: Spell[]) => {
    const bookmarkedIds = await getSpellBookmarks();
    return allSpells.filter(spell => bookmarkedIds.includes(spell.index));
  }, []);
}