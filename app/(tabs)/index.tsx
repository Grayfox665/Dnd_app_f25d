import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import { GetAllSpells } from '../../Api/SpellAPI';
import { getSpellBookmarks } from '../../utils/spellBookmarks';
import { Spell } from '../../types/spell';
import SpellCard from '../../components/SpellCard';

export default function App() {
  const [bookmarkedSpell, setBookmarkedSpell] = useState<Spell[]>([]);

  useFocusEffect(
  useCallback(() => {
    const load = async () => {
      const allSpells = await GetAllSpells();
      const bookmarkedSpellsIds = await getSpellBookmarks();

      const filtered = allSpells.filter((spell : Spell) => 
        bookmarkedSpellsIds.includes(spell.index)
      );

      setBookmarkedSpell(filtered);
    };

    load();
  }, [])
);

  return (
    <View style={styles.container}>
      <Text>Home page for the DnD assistant app!</Text>
      <StatusBar style="auto" />
      <View>
        <Text>Bookmarked spells: </Text>
        <ScrollView>
          {bookmarkedSpell.map((spell) => (
            <SpellCard key={spell.index} spell={spell} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce1c0',
    alignItems: 'center',
  },
});
