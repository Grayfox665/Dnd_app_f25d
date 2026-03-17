import { StyleSheet, View, Text, FlatList} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useMemo } from "react";
import SpellCard from "../../components/SpellCard";
import SearchComponent from "../../components/SearchComponent";
import { GetAllSpells } from "../../Api/SpellAPI";
import { Spell } from "../../types/spell";

export default function SpellPage() {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [search, setSearch] = useState("");
  const [school, setSchool] = useState("all");
  const [level, setLevel] = useState("all");

  useEffect(() => {
    GetAllSpells().then(setSpells);
  }, []);

  const filtered = useMemo(() => { 
    return spells.filter(spell => {
      const matchSearch = spell.index?.toLowerCase().includes(search.toLowerCase())

      const matchSchool = school === "all" || spell.school?.index === school

      const matchLevel = level === "all" || spell.level === Number(level)

      return matchSearch && matchSchool && matchLevel
    });
  }, [spells, search, school, level]);


  return (
    <View style={styles.container}>
      <View>
        <View>
      <Text>Page for Spells.</Text>
      <SearchComponent  
      search={search} 
      setSearch={setSearch} 
      school={school} 
      setSchool={setSchool} 
      level={level} 
      setLevel={setLevel}
      />
      </View>
      </View>
      <StatusBar style="auto" />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => <SpellCard spell={item} />}
      />
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