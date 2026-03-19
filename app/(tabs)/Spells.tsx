import { View, Text} from "react-native";
import { StatusBar } from "expo-status-bar";
import SpellList from "../../components/SpellList";
import { pageStyle } from "../../Styles/Styling";

export default function SpellPage() {



  return (
    <View style={pageStyle.container}>
        <View>
      <Text style={pageStyle.pageTitle}>Spells Library.</Text> 
      <StatusBar style="auto" />
      </View>
      <SpellList />
    </View>
  )
}

;