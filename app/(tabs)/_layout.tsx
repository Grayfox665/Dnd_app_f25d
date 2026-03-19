import { Tabs } from "expo-router";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{ tabBarActiveTintColor: "#6b100d", tabBarInactiveTintColor: '#fadfbe', tabBarStyle: {
      backgroundColor: "#cfb089"
    }, headerShown : false }}>
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) =>  (
        <MaterialDesignIcons name="bookshelf" color={color} size={24} />
      ) }} />
      <Tabs.Screen name="Rules" options={{ title: "Rules", tabBarIcon: ({ color }) => (
        <MaterialDesignIcons name="book-open-page-variant" color={color} size={24} />
      ) }} />
      <Tabs.Screen name="Conditions" options={{ title: "Conditions", tabBarIcon: ({ color }) => (
        <MaterialDesignIcons name="chart-bubble" color={color} size={24} />
      ) }} />
      <Tabs.Screen name="Spells" options={{ title: "Spells", tabBarIcon: ({ color }) => (
        <MaterialDesignIcons name="magic-staff" color={color} size={24} />
      ) }} />
    </Tabs>
  )
}