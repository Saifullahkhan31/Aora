import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-200">
      <Text className="text-7xl font-pblack ">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-blue-500 mt-4">Go to Profile</Link>
    </View>
  )
}