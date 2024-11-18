import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../pages/Profile";
import { Button } from "@react-navigation/elements";
import { Quiz } from "../pages/Quiz";
import { Text } from "react-native";
import { useState } from "react";
import { FAQ } from "../pages/FAQ";
import { Info } from "../pages/Info";
import { ItemConfirmation } from "../pages/ItemConfirmation";
import { AddNewItem } from "../pages/AddNewItem";
import { PaperProvider } from "react-native-paper";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

function RootStack() {
  const navigation = useNavigation();
  const [xp, setXp] = useState(0);
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Tabs}
        options={{
          headerLeft: () => <Button onPress={() => navigation.navigate("Profile")}>Profile</Button>,
          headerRight: () => <Text>{`${xp} XP`}</Text>,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        initialParams={{ xp: xp, setXp: setXp }}
        options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
      />
      <Stack.Screen
        name="Item Confirmation"
        component={ItemConfirmation}
        options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
      />
      <Stack.Screen
        name="Add a New Item"
        component={AddNewItem}
        options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
