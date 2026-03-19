import { StyleSheet } from "react-native";

export const pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce1c0',
    alignItems: 'center',
  },
  pageTitle: {
    color: "#6b100d",
    fontSize: 32,
    paddingBottom: 12,
    paddingTop:12, 
  }
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
    marginBottom: 16,
  },
  spellLevelContainer: {
    flexDirection: "row",
  },
  bookmarkAndNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  italicStyling: {
    fontStyle: "italic",
  },
  cardNameStyling: {
    fontSize: 20,
    color: "#6b100d",
    paddingBottom: 4,
  }
})

export const listStyle = StyleSheet.create({
  listContainer: {
    marginTop: 6,
    paddingBottom: 140,
  }
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
  container: {
    borderBottomWidth : 1,
    borderBottomColor : "#6b100d",
    paddingBottom : 2,
  },
  filterContainer: {
    flexDirection: "row"
  },
  textStyle: {
    fontSize: 16,
    paddingBottom: 4,
  },
  textInputStyles: {
    borderColor : "#6b100d",
    borderWidth : 1,
  }
})

export const loadingStyle = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    color: "#6b100d",
  }
})

export const errorStyle = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    color: "#a10500",
  }
})