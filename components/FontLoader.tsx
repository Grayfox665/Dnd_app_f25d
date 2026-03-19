import { useFonts, InknutAntiqua_900Black, InknutAntiqua_400Regular, InknutAntiqua_300Light } from "@expo-google-fonts/inknut-antiqua";
import LoadingComponent from "./loading";
import { FontLoaderProps } from "../types/fontloader";

export default function FontLoader({ children}: FontLoaderProps) {
let [fontsLoaded] = useFonts({
  InknutAntiqua_900Black,
  InknutAntiqua_400Regular,
  InknutAntiqua_300Light,
});

if (!fontsLoaded) {
  return <LoadingComponent />
}

  return <>{children}</>
}