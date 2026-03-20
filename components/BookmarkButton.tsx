import { Pressable } from "react-native";
import { BookmarkProps } from "../types/bookmark";
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";

export default function BoorkmarkButton({ bookmarked, onPress}: BookmarkProps) {
  return (
    <>
    <Pressable onPress={onPress}>
      <MaterialDesignIcons 
      name={bookmarked ? "bookmark" : "bookmark-outline"}
      color={"#6b100d"} 
      size={30} />
    </Pressable>
    </>
  )
}