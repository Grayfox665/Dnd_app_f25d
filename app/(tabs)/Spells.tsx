import { View, Text} from "react-native";
import { StatusBar } from "expo-status-bar";
import SpellList from "../../components/SpellList";
import { pageStyle } from "../../Styles/Styling";

export default function SpellPage() {



  return (
    <View style={pageStyle.container}>
        <View>
      <Text>Page for Spells.</Text> 
      <StatusBar style="auto" />
      </View>
      <SpellList />
    </View>
  )
}

;