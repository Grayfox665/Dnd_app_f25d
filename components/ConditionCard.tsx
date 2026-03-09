import { ConditionCardProps } from "../types/condition";
import { StyleSheet, Text, View } from "react-native";

export default function ConditionCard({ condition }: ConditionCardProps) {
  return (
    <View style={styles.cardcontainer}>
      <Text>{condition.name}</Text>
      <View>
        {/* {condition.desc.map((desc) => (
          <Text key={desc} /> 
        ))} */}
        <Text>{condition.desc}</Text>
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