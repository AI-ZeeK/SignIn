import {View, Text, Pressable, Image, StatusBar} from "react-native";
import React from "react";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {Link} from "expo-router";
import profileImage from "../../assets/images/austin.jpg";
import postsImg from "../../assets/images/gp.jpg";
import postsImg2 from "../../assets/images/ronny.jpg";
import postsImg3 from "../../assets/images/karl.jpg";
import postsImg4 from "../../assets/images/yyyy.jpg";
const profile = () => {
  return (
    <ScrollView>
      {/* <StatusBar barStyle={"light-content"} /> */}
      <SafeAreaView className="p-4  flex  justify-center items-center w-screen h-full gap-1">
        <View className="flex justify-center items-center p-4 ">
          <View className="bg-gray-200 py-1 pb-[8px] flex-row gap-1 items-center justify-center px-4 rounded-3xl">
            <Text className="text-xs font-Poppins">Little_rich_kid</Text>
            <View className="flex justify-center items-center">
              <MaterialIcons name="chevron-right" size={24} />
            </View>
          </View>
        </View>
        <View className="flex flex-row gap-4 justify-center items-center w-screen">
          <View className="h-16 w-16 rounded-full overflow-hidden  ">
            <Image
              className="h-full w-full"
              resizeMode="cover"
              source={profileImage}
            />
          </View>
          <View className="flex flex-row justify-center items-center gap-2 p-2">
            <View className="flex justify-center items-center gap-1">
              <Text className="font-MontserratR">1,596</Text>
              <Text className="text-xs font-Poppins">Followers</Text>
            </View>
            <View className="flex justify-center items-center gap-1">
              <Text className="font-MontserratR">596</Text>
              <Text className="text-xs font-Poppins">Following</Text>
            </View>
            <View className="flex justify-center items-center gap-1">
              <Text className="font-MontserratR">245</Text>
              <Text className="text-xs font-Poppins">Collectibles</Text>
            </View>
          </View>
        </View>
        <View className="pt-4  flex w-full gap-1">
          <Text className="font-MontserratR text-lg">LittleKiddMoonie</Text>
          <Text className="font-Poppins font-xs">
            Fav Baker|Web3 UI Designer
          </Text>
          <Text className="font-Poppins font-xs">@moonie_ba</Text>
          <Text className="font-Poppins font-xs">
            &:{" "}
            <Text className="text-indigo-600 underline">
              https://instagram.com
            </Text>
          </Text>
        </View>
        <View className="flex flex-row gap-2 p-2 px-4 mt-2">
          <View className="p-2 px-4 bg-gray-200 rounded-full ">
            <Text className="font-Poppins text-xs">Photos/Videos</Text>
          </View>
          <View className="p-2 px-4 bg-indigo-900 rounded-full ">
            <Text className="text-white font-Poppins text-xs">
              Collectibles
            </Text>
          </View>
          <View className="p-2 px-4 bg-gray-200 rounded-full">
            <Text className="font-Poppins text-xs">Memories</Text>
          </View>
        </View>
        <View className="flex flex-row flex-wrap p-2 gap-4  w-full">
          <View className="border h-32 w-32 border-gray-500 rounded-xl p-4">
            <Image
              source={postsImg}
              resizeMode="cover"
              className="h-full w-full"
            />
          </View>
          <View className="border h-32 w-32 border-gray-500 rounded-xl p-4">
            <Image
              source={postsImg2}
              resizeMode="cover"
              className="h-full w-full"
            />
          </View>
          <View className="border h-32 w-32 border-gray-500 rounded-xl p-4">
            <Image
              source={postsImg3}
              resizeMode="cover"
              className="h-full w-full"
            />
          </View>
          <View className="border h-32 w-32 border-gray-500 rounded-xl p-4">
            <Image
              source={postsImg4}
              resizeMode="cover"
              className="h-full w-full"
            />
          </View>
          <View className="border h-32 w-32 border-gray-500 rounded-xl p-4">
            <Image
              source={postsImg2}
              resizeMode="cover"
              className="h-full w-full"
            />
          </View>
          <View className="border h-32 w-32 border-gray-500 rounded-xl p-4">
            <Image
              source={postsImg}
              resizeMode="cover"
              className="h-full w-full"
            />
          </View>
        </View>
        <View className="flex justify-center items-center">
          <TouchableOpacity className="p-2 px-4 rounded-3xl  flex justify-center items-center bg-blue-600">
            <Pressable>
              <Link
                className="text-2xl text-white font-Poppins"
                href={"/login"}
              >
                Logout
              </Link>
            </Pressable>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default profile;
