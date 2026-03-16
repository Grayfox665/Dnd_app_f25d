import { StyleSheet, View, Text, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
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

  const filtered = spells.filter(spell => {
    const matchSearch = spell.name?.toLowerCase().includes(search.toLowerCase())

    const matchSchool = school === "all" || spell.school?.name === school

    const matchLevel = level === "all" || spell.level === Number(level)

    return matchSearch && matchSchool && matchLevel
  })

  console.log(school);
  console.log(level);

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
      <ScrollView>
        {filtered.map((spell) => (
          <SpellCard key={spell.index} spell={spell} />
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