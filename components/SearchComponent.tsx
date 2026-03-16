import { StyleSheet, View, Text, TextInput } from "react-native"
import DropdownList from "./DropDownList"
import { SearchProps } from "../types/search"


  const schoolOfMagiOptions = [
    { label: "All Schools", value: "all" },
    { label: "Abjuration", value: "abjuration" },
    { label: "Conjuration", value: "conjuration" },
    { label: "Divination", value: "divination" },
    { label: "Enchantment", value: "enchantment" },
    { label: "Evocation", value: "evocation" },
    { label: "Illusion", value: "illusion" },
    { label: "Necromancy", value: "necromancy" },
    { label: "Transmutation", value: "transmutation" },
  ]

  const spellLevelOptions = [
    { label : "All Levels", value: "all"},
    { label : "Cantrip", value: "0"},
    { label : "1", value: "1"},
    { label : "2", value: "2"},
    { label : "3", value: "3"},
    { label : "4", value: "4"},
    { label : "5", value: "5"},
    { label : "6", value: "6"},
    { label : "7", value: "7"},
    { label : "8", value: "8"},
    { label : "9", value: "9"},
  ]

export default function SearchComponent({search, setSearch, school, setSchool, level, setLevel}: SearchProps) {



  return (
    <View>
      <View>
        <Text>Component to  filter and search for info like rules and spells</Text>
      </View>
      <View>
        <TextInput 
        placeholder="Search spells..."
        value={search}
        onChangeText={setSearch}
        />
      </View>
      <View style={styles.filterContainer}>
        <DropdownList options={schoolOfMagiOptions} selected={school} onSelect={setSchool} />
        <DropdownList options={spellLevelOptions} selected={level} onSelect={setLevel} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#fcdbc0",
    height: "auto",
    width: "90%",
    borderColor: "#6b100d",
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    marginBottom: 4,
  },
  filterContainer: {
    flexDirection: "row"
  }
})