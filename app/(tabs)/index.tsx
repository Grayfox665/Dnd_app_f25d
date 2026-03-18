import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookmarkedSpellList from '../../components/BookmarkedSpellList';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Home page for the DnD assistant app!</Text>
      <StatusBar style="auto" />
      <BookmarkedSpellList />
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
