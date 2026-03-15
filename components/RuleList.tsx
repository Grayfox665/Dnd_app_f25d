import { ScrollView} from "react-native";
import { useEffect, useState } from "react";
import { RuleSection } from "../types/ruleSection";
import RuleSectionCard from "./RuleSectionCard";
import { GetAllRulesSections } from "../Api/RuleSectionAPI";

export default function RuleSectionList() {
  const [ruleSections, setRuleSections] = useState<RuleSection[]>([]);

  useEffect(() => {
    GetAllRulesSections().then(setRuleSections);
  }, []);

  return(
    <ScrollView>
        {ruleSections.map((rulesection) => (
          <RuleSectionCard key={rulesection.index} rulesection={rulesection} />
        ))}
    </ScrollView>
  )
}