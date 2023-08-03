import {View, Text, ScrollView} from "react-native";
import React from "react";

const nfts = () => {
  return (
    <ScrollView>
      <View className="bg-indigo-900 h-screen p-4 text-white">
        <Text className="text-white font-Poppins text-2xl">NFTs</Text>
      </View>
    </ScrollView>
  );
};

export default nfts;
