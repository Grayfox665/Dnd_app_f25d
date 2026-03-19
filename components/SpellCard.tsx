import { SpellCardProps } from "../types/spell";
import { Text, View, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { getSpellBookmarks, toggleSpellBookmark} from "../utils/spellBookmarks";
import { cardStyle } from "../Styles/Styling";

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
    <View style={cardStyle.cardcontainer}>
      <View>
        <Text style={cardStyle.cardNameStyling}>{spell.name}</Text>
        <Pressable onPress={handleSpellBookmark}>
          <Text>{bookmarkedSpell ? "bookmarked" : "bookmark"}</Text>
        </Pressable>
      </View>
      <View style={cardStyle.spellLevelContainer}>
        <Text style={cardStyle.italicStyling}>{spell.school.name} 
          {spell.level === 0 && " cantrip"}
          {spell.level === 1 && ` ${spell.level}st-level`}
          {spell.level === 2 && ` ${spell.level}nd-level`}
          {spell.level === 3 && ` ${spell.level}rd-level`}
          {spell.level > 3 && ` ${spell.level}th-level`}
        </Text>
      </View>
      <View>
        <Text>{spell.range}</Text>
        <Text style={cardStyle.italicStyling}>{spell.components.join(", ")} {spell.material}</Text>
        <Text>{spell.duration}</Text>
      </View>
      <View>
        <Text>{spell.desc.join(`\n\n`)}</Text>
        <Text>{`\n`}{spell.higher_level}</Text>
      </View>
    </View>
  )
}

