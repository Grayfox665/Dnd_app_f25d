import { StyleSheet, View, Text, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import SpellCard from "../../components/SpellCard";
import { GetAllSpells } from "../../Api/SpellAPI";
import { Spell } from "../../types/spell";

export default function SpellPage() {
  const [spells, setSpells] = useState<Spell[]>([]);

  useEffect(() => {
    GetAllSpells().then(setSpells);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Page for Spells.</Text>
      <StatusBar style="auto" />
      <ScrollView>
        {spells.map((spell) => (
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