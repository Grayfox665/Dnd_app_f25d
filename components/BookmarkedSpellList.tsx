import { View, FlatList, Text } from "react-native";
import { Spell } from "../types/spell";
import { GetAllSpells } from "../Api/SpellAPI";
import { getSpellBookmarks } from "../utils/spellBookmarks";
import SpellCard from "./SpellCard";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function BookmarkedSpellList() {
  const [bookmarkedSpell, setBookmarkedSpell] = useState<Spell[]>([]);

  useFocusEffect(
  useCallback(() => {
    const load = async () => {
      const allSpells : Spell[] = await GetAllSpells();
      const bookmarkedSpellsIds = await getSpellBookmarks();

      const filtered = allSpells.filter((spell : Spell) => 
        bookmarkedSpellsIds.includes(spell.index)
      );

      setBookmarkedSpell(filtered);
    };

    load();
  }, [])
);

return (
  <View>
    <Text>Bookmarked spells: </Text>
        <FlatList 
        data={bookmarkedSpell}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => <SpellCard spell={item} />}
        />
  </View>
)

}