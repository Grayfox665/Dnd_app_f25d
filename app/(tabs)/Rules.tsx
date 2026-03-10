import { StyleSheet, View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { RuleSection } from "../../types/ruleSection";
import RuleSectionCard from "../../components/RuleSectionCard";
import { GetAllRulesSections } from "../../Api/RuleSectionAPI";

export default function RulesPage() {
  const [ruleSections, setRuleSections] = useState<RuleSection[]>([]);

  useEffect(() => {
    GetAllRulesSections().then(setRuleSections);
  }, []);


  return (
    <View style={styles.container}>
      <Text>Page for rules to appear.</Text>
      <StatusBar style="auto" />
      <ScrollView>
        {ruleSections.map((rulesection) => (
          <RuleSectionCard key={rulesection.index} rulesection={rulesection} />
        ))}
      </ScrollView>
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