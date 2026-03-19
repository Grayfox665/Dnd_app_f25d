import { useState, useMemo } from "react";
import SpellCard from "./SpellCard";
import SearchComponent from "./SearchComponent";
import { Spell } from "../types/spell";
import { GetAllSpells } from "../Api/SpellAPI";
import { filterSpells } from "../utils/filterSpells";
import DataList from "./DataList";

export default function SpellList() {
  const [search, setSearch] = useState("");
  const [school, setSchool] = useState("all");
  const [level, setLevel] = useState("all");


  const filterFn = useMemo(() => { 
    return (spells: Spell[]) => filterSpells(spells, search, school, level);
  }, [ search, school, level]);

  return (
    <>
      <SearchComponent  
      search={search} 
      setSearch={setSearch} 
      school={school} 
      setSchool={setSchool} 
      level={level} 
      setLevel={setLevel}
      />
      <DataList fetchData={GetAllSpells} renderItem={({ item}) => <SpellCard spell={item} />} filterFn={filterFn} />
    </>
  )

}