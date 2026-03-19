import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import RuleSectionList from "../../components/RuleList";
import { pageStyle } from "../../Styles/Styling";

export default function RulesPage() {


  return (
    <View style={pageStyle.container}>
      <Text style={pageStyle.pageTitle}>Rule Page.</Text>
      <StatusBar style="auto" />
      <RuleSectionList />
    </View>
  )
}
