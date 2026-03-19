import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import RuleSectionList from "../../components/RuleList";
import { pageStyle } from "../../Styles/Styling";

export default function RulesPage() {


  return (
    <View style={pageStyle.container}>
      <Text>Page for rules to appear.</Text>
      <StatusBar style="auto" />
      <RuleSectionList />
    </View>
  )
}
