import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RecordingsScreen from "./src/screens/RecordigsScreen";

const Tab = createBottomTabNavigator();

const screens = [
  {
    name: "Profile",
    component: ProfileScreen,
    options: {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
      ),
    },
  },
  {
    name: "Duck",
    component: HomeScreen,
    options: {
      ...{ headerShown: false }, // Hide header for HomeScreen
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="duck" color={color} size={size} />
      ),
    },
  },
  {
    name: "My Quacks",
    component: RecordingsScreen,
    options: {
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons
          name="playlist-play"
          color={color}
          size={size}
        />
      ),
    },
  },
];

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Duck"
        screenOptions={({ route }) => ({
          headerShown:
            screens.find((screen) => screen.name === route.name)?.options?.headerShown ??
            true,
        })}>
        {screens.map((screen) => (
          <Tab.Screen key={screen.name} {...screen} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
