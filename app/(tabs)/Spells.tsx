import { StyleSheet, View, Text} from "react-native";
import { StatusBar } from "expo-status-bar";
import SpellList from "../../components/SpellList";

export default function SpellPage() {



  return (
    <View style={styles.container}>
        <View>
      <Text>Page for Spells.</Text> 
      <StatusBar style="auto" />
      </View>
      <SpellList />
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