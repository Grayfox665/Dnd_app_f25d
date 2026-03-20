import { useState, useEffect } from "react";
import { getSpellBookmarks, toggleSpellBookmark} from "../utils/spellBookmarks";

export function useSpellBookmark(spellIndex: string) {
  const [bookmarkedSpell, setBookmarkedSpell] = useState<boolean>(false);


  useEffect(() => {
    const load = async () => {
    const spellBookmarks = await getSpellBookmarks();
    setBookmarkedSpell(spellBookmarks.includes(spellIndex));
    }
  load();
}, [spellIndex]);

const handleSpellBookmark = async () => {
  const newState = await toggleSpellBookmark(spellIndex);
  setBookmarkedSpell(newState);
};

  return { bookmarkedSpell, handleSpellBookmark}
}