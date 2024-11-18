import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Leaderboard } from "./Leaderboard";
import { Scanner } from "./Scanner";
import { Profile } from "./Profile";
import { Button } from "@react-navigation/elements";
import { Quiz } from "./Quiz";
import { Text } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Scan"
        component={Scanner}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
function RootStack() {
  const navigation = useNavigation();
  const [xp, setXp] = useState(0);
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Tabs}
        options={{
          headerLeft: () => (
            <Button onPress={() => navigation.navigate("Profile")}>
              Profile
            </Button>
          ),
          headerRight: () => <Text>{`${xp} XP`}</Text>,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        initialParams={{ xp: xp, setXp: setXp }}
        options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
