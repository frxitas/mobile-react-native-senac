import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Card from "./src/components/Card";
import foodJson from './src/utils/food.json'

export default function App() {
  return (
    <View className="h-full w-full">
      <Card foodJson={foodJson}/>
      <StatusBar style="auto" />
    </View>
  );
}
