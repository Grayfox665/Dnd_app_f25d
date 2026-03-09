import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RulesPage() {
  return (
    <View style={styles.container}>
      <Text>Page for rules to appear.</Text>
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