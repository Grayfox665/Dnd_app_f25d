import { View, Text, ActivityIndicator} from "react-native"
import { loadingStyle } from "../Styles/Styling"

export default function LoadingComponent() {

  return (
    <View>
      <Text style={loadingStyle.textStyle}> Loading... </Text>
      <ActivityIndicator size="large" color="#6b100d" />
    </View>
  )
}