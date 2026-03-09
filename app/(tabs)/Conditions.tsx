import { StyleSheet, View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import ConditionCard from "../../components/ConditionCard";
import { GetAllConditions } from "../../Api/ConditionAPI";
import { Condition } from "../../types/condition";

export default function ConditionPage() {
  const [conditions, setConditions] = useState<Condition[]>([]);

  useEffect(() => {
    GetAllConditions().then(setConditions);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Page for conditions.</Text>
      <StatusBar style="auto" />
      <ScrollView>
        {conditions.map((condition) => (
          <ConditionCard key={condition.index} condition={condition} />
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