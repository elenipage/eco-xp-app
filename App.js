import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import RootStack from "./src/navigation/Stack";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function Tabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Stats"
//         component={Stats}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Scan"
//         component={Scanner}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Leaderboard"
//         component={Leaderboard}
//         options={{ headerShown: false }}
//       />
//       <Tab.Screen
//         name="Help"
//         component={Help}
//         options={{ headerShown: false }}
//       />
//     </Tab.Navigator>
//   );
// }
// function RootStack() {
//   const navigation = useNavigation();
//   const [xp, setXp] = useState(0);
//   return (
//     <Stack.Navigator initialRouteName="Main">
//       <Stack.Screen
//         name="Main"
//         component={Tabs}
//         options={{
//           headerLeft: () => <Button onPress={() => navigation.navigate("Profile")}>Profile</Button>,
//           headerRight: () => <Text>{`${xp} XP`}</Text>,
//         }}
//       />
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
//       />
//       <Stack.Screen
//         name="Quiz"
//         component={Quiz}
//         initialParams={{ xp: xp, setXp: setXp }}
//         options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
//       />
//       <Stack.Screen
//         name="FAQ"
//         component={FAQ}
//         options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
//       />
//       <Stack.Screen
//         name="Info"
//         component={Info}
//         options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
//       />
//       <Stack.Screen
//         name="Item Confirmation"
//         component={ItemConfirmation}
//         options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
//       />
//       <Stack.Screen
//         name="Add a New Item"
//         component={AddNewItem}
//         options={{ headerRight: () => <Text>{`${xp} XP`}</Text> }}
//       />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          {/* <Tabs /> */}
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
