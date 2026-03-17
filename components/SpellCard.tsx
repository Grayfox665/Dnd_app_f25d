import { SpellCardProps } from "../types/spell";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { getSpellBookmarks, toggleSpellBookmark} from "../utils/spellBookmarks";

export default function SpellCard({ spell }: SpellCardProps) {
  const [bookmarkedSpell, setBookmarkedSpell] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
    const spellBookmarks = await getSpellBookmarks();
    setBookmarkedSpell(spellBookmarks.includes(spell.index));
    }
  load();
}, [spell.index]);

const handleSpellBookmark = async () => {
  const newState = await toggleSpellBookmark(spell.index);
  setBookmarkedSpell(newState);
};


  return (
    <View style={styles.cardcontainer}>
      <View>
        <Text style={styles.spellNameStyling}>{spell.name}</Text>
        <Pressable onPress={handleSpellBookmark}>
          <Text>{bookmarkedSpell ? "bookmarked" : "bookmark"}</Text>
        </Pressable>
      </View>
      <View style={styles.spellLevelContainer}>
        <Text style={styles.italicStyling}>{spell.school.name} 
          {spell.level === 0 && " cantrip"}
          {spell.level === 1 && ` ${spell.level}st-level`}
          {spell.level === 2 && ` ${spell.level}nd-level`}
          {spell.level === 3 && ` ${spell.level}rd-level`}
          {spell.level > 3 && ` ${spell.level}th-level`}
        </Text>
      </View>
      <View>
        <Text>{spell.range}</Text>
        <Text style={styles.italicStyling}>{spell.components.join(", ")} {spell.material}</Text>
        <Text>{spell.duration}</Text>
      </View>
      <View>
        <Text>{spell.desc.join(`\n\n`)}</Text>
        <Text>{`\n`}{spell.higher_level}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardcontainer: {
    backgroundColor: "#fcdbc0",
    height: "auto",
    width: "90%",
    borderColor: "#6b100d",
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    marginBottom: 4,
  },
  spellLevelContainer: {
    flexDirection: "row",
  },
  italicStyling: {
    fontStyle: "italic",
  },
  spellNameStyling: {
    fontSize: 17,
    color: "#6b100d",  }
})