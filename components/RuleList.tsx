import RuleSectionCard from "./RuleSectionCard";
import { GetAllRulesSections } from "../Api/RuleSectionAPI";
import DataList from "./DataList";


export default function RuleSectionList() {

  return(
    <DataList
      fetchData={GetAllRulesSections}
      renderItem={({item}) => <RuleSectionCard rulesection={item} />}
    />
  )
}