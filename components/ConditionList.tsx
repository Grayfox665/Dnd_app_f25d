import ConditionCard from "./ConditionCard";
import { GetAllConditions } from "../Api/ConditionAPI";
import DataList from "./DataList";


export default function ConditionList() {
  return (
    <>
      <DataList fetchData={GetAllConditions}
      renderItem={({item}) => <ConditionCard condition={item} />}
      />
    </>
  )
}