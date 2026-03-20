import { View, Text, TextInput } from "react-native"
import DropdownList from "./DropDownList"
import { SearchProps } from "../types/search"
import { searchStyles } from "../Styles/Styling"
import { spellLevelOptions, schoolOfMagiOptions } from "../constants/spellOptions"

export default function SearchComponent({search, setSearch, school, setSchool, level, setLevel}: SearchProps) {



  return (
    <View style={searchStyles.container}>
      <View>
        <Text style={searchStyles.textStyle}>Search for spells via searchfield or category buttons.</Text>
      </View>
      <View>
        <TextInput 
        placeholder="Search spells..."
        value={search}
        onChangeText={setSearch}
        />
      </View>
      <View style={searchStyles.filterContainer}>
        <DropdownList options={schoolOfMagiOptions} selected={school} onSelect={setSchool} />
        <DropdownList options={spellLevelOptions} selected={level} onSelect={setLevel} />
      </View>
    </View>
  )
}