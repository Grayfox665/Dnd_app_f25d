import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import BookmarkedSpellList from '../../components/BookmarkedSpellList';
import { pageStyle } from '../../Styles/Styling';

export default function App() {

  return (
    <View style={pageStyle.container}>
      <Text>Home page for the DnD assistant app!</Text>
      <StatusBar style="auto" />
      <BookmarkedSpellList />
    </View>
  );
}

