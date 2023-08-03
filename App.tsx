import {StatusBar} from "expo-status-bar";
import {Text, View} from "react-native";
import "./global.css";
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-teal-400 justify-center items-center p-4 ">
      <Text className="flex-1 bg-rose-400 justify-center items-center p-4 ">
        Open up App.tsx to start working on your app!!!
      </Text>
      <StatusBar />
    </SafeAreaView>
  );
}
