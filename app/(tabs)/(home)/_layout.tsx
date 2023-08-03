import FontAwesome from "@expo/vector-icons/FontAwesome";
import IonIcons from "@expo/vector-icons/Ionicons";
import {Link, Tabs} from "expo-router";
import {Pressable, Text, Image, View, useColorScheme} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Following from "./following";
import ForYou from "./foryou";

const Tab = createMaterialTopTabNavigator();
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: "Montserrat", // Change the font family
          fontSize: 14, // Set the desired font size
        },
        tabBarIndicatorStyle: {
          height: 4,
          width: 40,
          marginLeft: "14%",
          borderRadius: 12,
          backgroundColor: "rgb(129 140 248)",
        },
      }}
    >
      <Tab.Screen name="For You" component={ForYou} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
  );
}
