import { SpellCardProps } from "../types/spell";
import { Text, View } from "react-native";
import { cardStyle } from "../Styles/Styling";
import { useSpellBookmark } from "../hooks/useSpellBookmark";
import BoorkmarkButton from "./BookmarkButton";

export default function SpellCard({ spell }: SpellCardProps) {
  const { bookmarkedSpell, handleSpellBookmark } = useSpellBookmark(spell.index)



  return (
    <View style={cardStyle.cardcontainer}>
      <View style={cardStyle.bookmarkAndNameContainer}>
        <Text style={cardStyle.cardNameStyling}>{spell.name}</Text>
        <BoorkmarkButton bookmarked={bookmarkedSpell} onPress={handleSpellBookmark} />
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

