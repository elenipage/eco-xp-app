import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Leaderboard } from "../pages/Leaderboard";
import { Scanner } from "../pages/Scanner";
import { Profile } from "../pages/Profile";
import { Button } from "@react-navigation/elements";
import { Quiz } from "../pages/Quiz";
import { Text } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Help } from "../pages/Help";
import { Stats } from "../pages/Stats";
import { FAQ } from "../pages/FAQ";
import { Info } from "../pages/Info";
import { ItemConfirmation } from "../pages/ItemConfirmation";
import { AddNewItem } from "../pages/AddNewItem";
import { PaperProvider } from "react-native-paper";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
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
      <Tab.Screen
        name="Help"
        component={Help}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
