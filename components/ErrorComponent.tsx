import { View, Text, StyleSheet} from "react-native"

export default function ErrorComponent() {

  return (
    <View>
      <Text style={styles.textStyle}> Error loading data </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "#6b100d",
  }
})