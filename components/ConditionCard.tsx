import { ConditionCardProps } from "../types/condition";
import { Text, View } from "react-native";
import { cardStyle } from "../Styles/Styling";

export default function ConditionCard({ condition }: ConditionCardProps) {


  return (
    <View style={cardStyle.cardcontainer}>
      <Text>{condition.name}</Text>
      <View>
        <Text>{condition.desc.join('\n\n')}</Text>
      </View>
    </View>
  )
}
