import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import RuleSectionList from "../../components/RuleList";

export default function RulesPage() {


  return (
    <View style={styles.container}>
      <Text>Page for rules to appear.</Text>
      <StatusBar style="auto" />
      <RuleSectionList />
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