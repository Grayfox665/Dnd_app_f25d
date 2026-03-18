import { View, FlatList } from "react-native";
import { useEffect, useState, useMemo } from "react";
import SpellCard from "./SpellCard";
import SearchComponent from "./SearchComponent";
import { Spell } from "../types/spell";
import { GetAllSpells } from "../Api/SpellAPI";
import { filterSpells } from "../utils/filterSpells";

export default function SpellList() {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [search, setSearch] = useState("");
  const [school, setSchool] = useState("all");
  const [level, setLevel] = useState("all");


  useEffect(() => {
    GetAllSpells().then(setSpells);
  }, []);

  const filtered = useMemo(() => { 
    return filterSpells(spells, search, school, level);
  }, [spells, search, school, level]);

  return (
    <View>
      <SearchComponent  
      search={search} 
      setSearch={setSearch} 
      school={school} 
      setSchool={setSchool} 
      level={level} 
      setLevel={setLevel}
      />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => <SpellCard spell={item} />}
      />
    </View>
  )

}