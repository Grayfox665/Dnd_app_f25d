import { View, Text} from "react-native"
import { errorStyle } from "../Styles/Styling"

export default function ErrorComponent() {

  return (
    <View>
      <Text style={errorStyle.textStyle}> Error loading data </Text>
    </View>
  )
}
