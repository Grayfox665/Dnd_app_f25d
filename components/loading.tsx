import { View, Text, StyleSheet} from "react-native"

export default function LoadingComponent() {

  return (
    <View>
      <Text style={styles.textStyle}> Loading... </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "#6b100d",
  }
})