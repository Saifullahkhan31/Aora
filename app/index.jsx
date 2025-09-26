import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}} >
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5 max-w-[315px] w-full ">
            <Text className="text-3xl text-white font-bold text-center" >
              Discover Endless Possibilities with {''}
              <Text className="text-secondary-200 font-pbold" >
                Aora!
              </Text>
            </Text>
            <Image
              source={images.path}
              className="w-[140px] h-[10px] absolute -bottom-1 -right-1"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center w-[350px] " >
            Where creativity mets innovation: Embark on a journey
            of limitless exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-up') }
            containerStyles="w-full mt-7"
          />

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />

    </SafeAreaView>
  )
}