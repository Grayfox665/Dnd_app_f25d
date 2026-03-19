import { StyleSheet } from "react-native";

export const pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce1c0',
    alignItems: 'center',
  },
})

export const cardStyle = StyleSheet.create({
    cardcontainer: {
    backgroundColor: "#fcdbc0",
    height: "auto",
    width: "90%",
    borderColor: "#6b100d",
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    marginBottom: 4,
  },
  spellLevelContainer: {
    flexDirection: "row",
  },
  italicStyling: {
    fontStyle: "italic",
  },
  cardNameStyling: {
    fontSize: 17,
    color: "#6b100d",  }
})

export const dropDownStyle = StyleSheet.create({
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

export const searchStyles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row"
  }
})

export const loadingStyle = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "#6b100d",
  }
})

export const errorStyle = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "#6b100d",
  }
})