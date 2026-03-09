import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="Rules" options={{ title: "Rules" }} />
      <Tabs.Screen name="Conditions" options={{ title: "Conitions" }} />
    </Tabs>
  )
}