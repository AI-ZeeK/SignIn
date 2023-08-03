import {
  ActivityIndicator,
  Alert,
  Animated,
  Button,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, {PropsWithChildren, useEffect, useRef, useState} from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {TextInput} from "react-native-gesture-handler";
import {router} from "expo-router";

const auth = () => {
  const [isActivityIndicator, setIsActivityIndicator] =
    useState<boolean>(false);

  const handlePress = () => {
    // Handle the button press here
    // Alert.alert("Button Pressed!");
    setIsActivityIndicator(true);
    setTimeout(() => {
      setIsActivityIndicator(false);
      router.replace("/(home)/foryou");
    }, 2000);
  };

  return (
    <ScrollView className=" bg-indigo-500 h-screen font-Poppins ">
      {isActivityIndicator && (
        <View className="z-40 absolute  w-full h-full  top-0 flex justify-center items-center">
          <View className="z-40 absolute bg-blue-800 w-full h-full opacity-20 top-0 flex justify-center items-center"></View>
          <ActivityIndicator size={120} color="rgb(30 64 175)" />
        </View>
      )}
      <View className=" bg-white h-screen flex-1 gap-8 justify-center items-center">
        <View>
          <Text className="font-Montserrat  text-[40px]">Login</Text>
        </View>
        <View className="px-8 flex gap-4">
          <View className="w-full  ">
            <Text className="font-Poppins">Username</Text>
            <View className="flex bg-gray-50  flex-row focus-within:bg-gray-200 w-full justify-center items-center h-12 border-b-2 border-gray-400">
              <View className="w-[20%] h-full text-gray-600 p-2 flex justify-center items-center">
                <MaterialIcons
                  name="person-outline"
                  size={28}
                  color={"#949494"}
                />
              </View>
              <TextInput
                placeholder="Type your username"
                className="w-[80%] font-Poppins text-[16px] h-full py-2  text-start"
              />
            </View>
          </View>
          <View className="w-full  ">
            <Text className="font-Poppins">Password</Text>
            <View className="flex bg-gray-50  flex-row focus-within:bg-gray-200 w-full justify-center items-center h-12 border-b-2 border-gray-400">
              <View className="w-[20%] h-full text-gray-600 p-2 flex justify-center items-center">
                <MaterialIcons
                  name="lock-outline"
                  size={28}
                  color={"#949494"}
                />
              </View>
              <TextInput
                placeholder="Type your password"
                secureTextEntry={true}
                className="w-[80%] font-Poppins text-[16px] h-full py-2  text-start"
              />
            </View>
          </View>
          <View className="flex flex-row justify-end">
            <Text className="font-Poppins text-gray-600">Forgot password?</Text>
          </View>

          <View className="h-14 ">
            <TouchableOpacity
              className="bg-blue-700  h-full rounded-[30px] flex w-full justify-center items-center"
              onPress={handlePress}
            >
              <Text className="font-Poppins  text-white text-xl p-2 text-center">
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex justify-center items-center ">
          <Text className="font-Poppins  p-2">Or Sign Up Using</Text>
          <View className="flex flex-row gap-4">
            <TouchableOpacity className="p-2 bg-[#1877F2] h-12 w-12 rounded-full justify-center items-center">
              <FontAwesome name="facebook-f" size={28} color={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-blue-400 h-12 w-12 rounded-full justify-center items-center">
              <FontAwesome name="twitter" size={28} color={"#fff"} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-[#DB4437] h-12 w-12 rounded-full justify-center items-center">
              <FontAwesome name="google" size={28} color={"#fff"} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="p-4 justify-self-end">
          <TouchableOpacity
            className="flex flex-row"
            onPress={() => router.replace("/register")}
          >
            <Text className="font-Poppins">Not Registered? </Text>
            <Text className="font-Poppins text-blue-900">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default auth;
