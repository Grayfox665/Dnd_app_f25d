import { RuleSectionCardProps } from "../types/ruleSection";
import { View, Text } from "react-native";
import { cardStyle } from "../Styles/Styling";

export default function RuleSectionCard({ rulesection }: RuleSectionCardProps) {
  return (
    <View style={cardStyle.cardcontainer}>
      <Text style={cardStyle.cardNameStyling}>{rulesection.name}</Text>
      <View>
        <Text>{rulesection.desc}</Text>
      </View>
    </View>
  )
}