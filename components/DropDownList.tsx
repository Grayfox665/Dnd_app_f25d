import {View, Text, Pressable } from "react-native";
import { useState } from "react";
import { DropdownProps } from "../types/dropdown";
import { dropDownStyle } from "../Styles/Styling";

export default function DropdownList({ options, selected, onSelect} : DropdownProps) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find(o => o.value === selected);


  return (
    <View style={dropDownStyle.container}>

      <Pressable
        style={dropDownStyle.button}
        onPress={() => setOpen(!open)}
      >
        <Text>
          {selectedOption ? selectedOption.label : "Select Option"}
        </Text>
      </Pressable>

      {open && (
        <View>
      {options.map(option => (
        <Pressable 
        key={option.value}
        style={[
          dropDownStyle.option,
          selected === option.value && dropDownStyle.selected
        ]}
        onPress={() => {onSelect(option.value); setOpen(false);}}>
          <Text>{option.label}</Text>
        </Pressable>
      ))}          
        </View>
      )}

    </View>
  );
}