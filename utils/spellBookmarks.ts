import AsyncStorage from "@react-native-async-storage/async-storage";

const BOOKMARK_KEY = "BOOKMARKED_SPELLS";

export const getSpellBookmarks = async (): Promise<string[]> => {
  try {
    const data = await AsyncStorage.getItem(BOOKMARK_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error getting Bookmarked spells", error);
    return [];
  }
};

export const toggleSpellBookmark = async (spellId: string): Promise<boolean> => {
  try {
    const data = await AsyncStorage.getItem(BOOKMARK_KEY);
    const spellBookmarks: string[] = data ? JSON.parse(data) : [];

    let updated: string[];
    let isBookmarkedSpell: boolean;

    if (spellBookmarks.includes(spellId)) {
      updated = spellBookmarks.filter(id => id !== spellId);
      isBookmarkedSpell = false;
    } else {
      updated = [...spellBookmarks, spellId];
      isBookmarkedSpell = true;
    }

    await AsyncStorage.setItem(BOOKMARK_KEY, JSON.stringify(updated));
    return isBookmarkedSpell;

  } catch (error) {
    console.log("Error toggling bookmarked spells:", error);
    return false;
  }
};