import FontAwesome from "@expo/vector-icons/FontAwesome";
import IonIcons from "@expo/vector-icons/Ionicons";
import {Link, Tabs, router} from "expo-router";
import {
  Pressable,
  Text,
  Image,
  View,
  useColorScheme,
  TextInput,
} from "react-native";
import headImage from "../../assets/images/francesco-ungaro-qX_HzjwEUhg-unsplash.jpg";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="profile"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          //   backgroundColor: "transparent",
        },
        headerStyle: {
          //   backgroundColor: "rgb(199 210s 254)",
        },
        // tabBarActiveBackgroundColor: "red",

        tabBarActiveTintColor: "rgb(129 140 248)",
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerLeft: () => (
            <View className="h-8 w-8 ml-4 rounded-full overflow-hidden">
              <Image
                resizeMode="cover"
                className="h-full w-full"
                source={headImage}
              />
            </View>
          ),
          headerRight: () => (
            <Text className="font-MontserratR mr-4 uppercase font-medium text-md">
              Home
            </Text>
          ),
          headerTitle: "",
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: "Users",
          headerLeft: () => (
            <View className="h-8 w-8 ml-4 rounded-full overflow-hidden">
              <Image
                resizeMode="cover"
                className="h-full w-full"
                source={headImage}
              />
            </View>
          ),
          headerRight: () => (
            <View className="mr-4 w-full">
              <TextInput
                onPressIn={() => router.push("/modal")}
                placeholder="Search Communities"
                className="bg-gray-100 rounded-3xl font-Poppins text-[14px] w-full text-start px-4 py-1"
              />
            </View>
          ),
          headerTitle: "",
          tabBarIcon: ({color}) => (
            <IonIcons name="people" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="nfts"
        options={{
          title: "NFTs",
          headerLeft: () => (
            <View className="h-8 w-8 ml-4 rounded-full overflow-hidden">
              <Image
                resizeMode="cover"
                className="h-full w-full"
                source={headImage}
              />
            </View>
          ),
          headerRight: () => (
            <Text className="font-MontserratR mr-4 uppercase font-medium text- ">
              NFTs
            </Text>
          ),
          headerTitle: "",

          tabBarIcon: ({color}) => (
            <FontAwesome name="houzz" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialIcons name="person" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
