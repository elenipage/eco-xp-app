import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../pages/Profile";
import { Quiz } from "../pages/Quiz";
import { Text, TouchableOpacity, View } from "react-native";
import { FAQ } from "../pages/FAQ";
import { Info } from "../pages/Info";
import { ItemConfirmation } from "../pages/ItemConfirmation";
import { AddNewItem } from "../pages/AddNewItem";
import Tabs from "./Tabs";
import { Appbar, Tooltip, Avatar } from "react-native-paper";
import { useXp } from "../context/Xp-context";

const Stack = createStackNavigator();

function HeaderDemo({ navigation, route, options, back }) {
  const { xp } = useXp();

  return (
    <Appbar.Header style={{ justifyContent: "space-between" }}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Avatar.Image
            size={40}
            source={{
              uri: "https://media.licdn.com/dms/image/v2/D4E03AQHp3QR7NwD02w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715085387323?e=1737590400&v=beta&t=cMjFvIwY5d0XCGXUKpdbP9IkEXuIP2IcjGQDEL21lRU",
            }}
          />
        </TouchableOpacity>
      )}
      {back ? <Appbar.Content title={`${route.name}`} /> : null}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tooltip title="Streak">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Appbar.Action
              icon="fire-circle"
              onPress={() => {}}
            ></Appbar.Action>
            <Text>0</Text>
          </View>
        </Tooltip>
        <Tooltip title="XP">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Appbar.Action icon="one-up" onPress={() => {}} />
            <Text>{`${xp} XP`}</Text>
          </View>
        </Tooltip>
      </View>
    </Appbar.Header>
  );
}

function RootStack() {
  const { xp, setXp } = useXp();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Main"
      headerMode="screen"
      screenOptions={{
        header: (props) => <HeaderDemo {...props} />,
      }}
    >
      <Stack.Screen name="Main" component={Tabs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        initialParams={{ xp: xp, setXp: setXp }}
      />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Item Confirmation" component={ItemConfirmation} />
      <Stack.Screen name="Add a New Item" component={AddNewItem} />
    </Stack.Navigator>
  );
}

export default RootStack;
