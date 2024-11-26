import React from "react";
import { HomeScreen } from "../pages/Home";
import { LeaderboardPage } from "../pages/LeaderboardPage";
import { Scanner } from "../pages/Scanner";
import { Help } from "../pages/Help";
import { Stats } from "../pages/Stats";
import { BottomNavigation } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

function Tabs() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled={false}
      backBehavior={"Home"}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName;

            iconName = focused ? "home" : "home-outline";

            return <MaterialCommunityIcons name={iconName} size={25} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName;

            iconName = focused ? "chart-box" : "chart-box-outline";

            return <MaterialCommunityIcons name={iconName} size={25} />;
          },
        }}
      />
      <Tab.Screen name="Scanner" component={Scanner} 
      options={{
        tabBarIcon: ({ focused }) => {
          let iconName;

          iconName = focused ? "barcode" : "barcode-outline";

          return <Ionicons name={iconName} size={25} />;
        },
      }}/>
      <Tab.Screen name="Leaderboard" component={LeaderboardPage} 
      options={{
        tabBarIcon: ({ focused }) => {
          let iconName;

          iconName = focused ? "trophy" : "trophy-outline";

          return <MaterialCommunityIcons name={iconName} size={25} />;
        },
      }}
      />
      <Tab.Screen name="Help" component={Help} 
      options={{
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;

          iconName = focused ? "help-circle" : "help-circle-outline";

          return <MaterialCommunityIcons name={iconName} size={25} />;
        },
      }}/>
    </Tab.Navigator>
  );
}

export default Tabs;
