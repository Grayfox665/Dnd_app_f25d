import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import ConditionList from "../../components/ConditionList";

export default function ConditionPage() {

  return (
    <View style={styles.container}>
      <Text>Page for conditions.</Text>
      <StatusBar style="auto" />
      <ConditionList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce1c0',
    alignItems: 'center',
  },
});