import { GetAllSpells } from "../Api/SpellAPI";
import SpellCard from "./SpellCard";
import DataList from "./DataList";
import { useFocusReload } from "../hooks/useFocusHook";
import { useBookmarkedFilter } from "../hooks/useBookmarkedFilterHook";

export default function BookmarkedSpellList() {

  const reloadKey = useFocusReload();
  const filterFn = useBookmarkedFilter();

return (
  <DataList 
    key={reloadKey}
    fetchData={GetAllSpells}
    renderItem={({ item }) => <SpellCard spell={item} /> }
    filterFn={filterFn}
  />
)

}