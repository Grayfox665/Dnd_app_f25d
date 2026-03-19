import { View, Text, StyleSheet, ActivityIndicator} from "react-native"

export default function LoadingComponent() {

  return (
    <View>
      <Text style={styles.textStyle}> Loading... </Text>
      <ActivityIndicator size="large" color="#6b100d" />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "#6b100d",
  }
})