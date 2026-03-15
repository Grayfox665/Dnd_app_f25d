import { ScrollView } from "react-native";
import { useEffect, useState } from "react";
import ConditionCard from "./ConditionCard";
import { Condition } from "../types/condition";
import { GetAllConditions } from "../Api/ConditionAPI";

export default function ConditionList() {
  const [conditions, setConditions] = useState<Condition[]>([]);

  useEffect(() => {
    GetAllConditions().then(setConditions);
  }, []);

  return (
    <ScrollView>
      {conditions.map((condition) => (
        <ConditionCard key={condition.index} condition={condition} />
      ))}
    </ScrollView>
  )
}