import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Stack} from "expo-router";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
const Drawer = createDrawerNavigator();
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerLeft: () => (
            <Text className="font-MontserratR uppercase font-medium text-lg">
              Login
            </Text>
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerLeft: () => (
            <Text className="font-MontserratR uppercase font-medium text-lg">
              Register
            </Text>
          ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerLeft: () => (
            <Text className="font-MontserratR uppercase font-medium text-lg">
              modal
            </Text>
          ),
          headerTitle: "",
        }}
      />
    </Stack>
  );
};

export default Layout;
