import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import ConditionList from "../../components/ConditionList";
import { pageStyle } from "../../Styles/Styling";

export default function ConditionPage() {

  return (
    <View style={pageStyle.container}>
      <Text style={pageStyle.pageTitle}>Condition Page.</Text>
      <StatusBar style="auto" />
      <ConditionList />
    </View>
  )
}
