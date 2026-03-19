import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import BookmarkedSpellList from '../../components/BookmarkedSpellList';
import { pageStyle } from '../../Styles/Styling';
import FontLoader from '../../components/FontLoader';

export default function App() {

  return (
    <FontLoader>
    <View style={pageStyle.container}>
      <Text style={pageStyle.pageTitle}>DnD assistant</Text>
      <StatusBar style="auto" />
      <View>
        <Text style={pageStyle.pageSecTitle}>Bookmarked Spells: </Text>
        <BookmarkedSpellList />
      </View>
    </View>
    </FontLoader>
  );
}

