import { RuleSectionCardProps } from "../types/ruleSection";
import { StyleSheet, View, Text } from "react-native";

export default function RuleSectionCard({ rulesection }: RuleSectionCardProps) {
  return (
    <View style={styles.cardcontainer}>
      <Text>{rulesection.name}</Text>
      <View>
        <Text>{rulesection.desc}</Text>
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
  }
})