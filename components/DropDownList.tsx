import {View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { DropdownProps } from "../types/dropdown";

export default function DropdownList({ options, selected, onSelect} : DropdownProps) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find(o => o.value === selected);


  return (
    <View style={styles.container}>

      <Pressable
        style={styles.button}
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
          styles.option,
          selected === option.value && styles.selected
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

const styles = StyleSheet.create({
  container: {
    width : "49%",
  },
  option : {
    padding: 8,
    backgroundColor: '#fce1c0',
    margin: 4,
    borderRadius: 6,
  },
  selected : {
    backgroundColor : '#ddc5a8',
  },
  button: {
    padding: 10,
    backgroundColor: '#ddc5a8',
    borderColor: "#6b100d",
    borderWidth: 1,
    margin: 4,
    borderRadius: 6,
  }
})