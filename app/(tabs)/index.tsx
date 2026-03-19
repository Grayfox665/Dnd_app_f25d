import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import BookmarkedSpellList from '../../components/BookmarkedSpellList';
import { pageStyle } from '../../Styles/Styling';

export default function App() {

  return (
    <View style={pageStyle.container}>
      <Text style={pageStyle.pageTitle}>DnD assistant Homepage</Text>
      <StatusBar style="auto" />
      <BookmarkedSpellList />
    </View>
  );
}

