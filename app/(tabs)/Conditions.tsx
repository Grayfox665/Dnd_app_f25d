import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ConditionPage() {
  return (
    <View style={styles.container}>
      <Text>Page for conditions.</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});