import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../pages/UserProfile";
import { Quiz } from "../pages/Quiz";
import { Text, TouchableOpacity, View } from "react-native";
import { FAQ } from "../pages/FAQ";
import { InfoDropDownMenu } from "../pages/Info";
import { ItemConfirmation } from "../pages/ItemConfirmation";
import { AddNewItem } from "../pages/AddNewItem";
import Tabs from "./Tabs";
import { Appbar, Tooltip, Avatar } from "react-native-paper";
import { useXp } from "../context/Xp-context";
import { OtherProfile } from "../pages/OtherProfile";
import { useEffect, useState } from "react";
import { LoginPage } from "../pages/Login";
import { useUser } from "../context/user-context";
import TakePicture from "../components/TakePicture.js";
import { Scanner } from "../pages/Scanner";
import BinDates from "../components/BinDates";
import { Followers } from "../pages/Followers";
import { Following } from "../pages/Following";

const Stack = createStackNavigator();

function HeaderDemo({ navigation, route, options, back }) {
  const { user } = useUser();
  const { xp } = useXp();
  const [currentXp, setCurrentXp] = useState();


  useEffect(() => {
    setCurrentXp(xp);
  }, [xp]);

  const previousTitle = back ? back.title : null;

  if (user === null)
    return <Appbar.Header style={{ justifyContent: "space-between" }}><Appbar.Content title={`${route.name}`} /></Appbar.Header>;
  else if (user) {
    return (
      <Appbar.Header style={{ justifyContent: "space-between" }}>
        {previousTitle === "Login" || previousTitle === "Item Confirmation" || previousTitle === "Add a New Item" ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Avatar.Image
              size={40}
              source={{
                uri: user.avatar_img_url,
              }}
            />
          </TouchableOpacity>
        ) : (
          <Appbar.BackAction onPress={navigation.goBack} />
        )}
        {previousTitle === "Login" || previousTitle === "Item Confirmation" || previousTitle === "Add a New Item" ? null : (
          <Appbar.Content title={`${route.name}`} />
        )}
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
              <Appbar.Action icon="fire-circle" onPress={() => {}} />
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
              <Text>{`${currentXp} XP`}</Text>
            </View>
          </Tooltip>
        </View>
      </Appbar.Header>
    );
  }
}


function RootStack() {
  const { xp, setXp } = useXp();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="screen"
      screenOptions={{
        header: (props) => <HeaderDemo {...props} />, // This throws an error (but still works)
      }}
    >
      <Stack.Screen
        name="Main"
        component={Tabs}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="Other Profile"
        component={OtherProfile}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        initialParams={{ xp: xp, setXp: setXp }}
      />
      <Stack.Screen
        name="FAQ"
        component={FAQ}
      />
      <Stack.Screen
        name="Info"
        component={InfoDropDownMenu}
      />
      <Stack.Screen
        name="Item Confirmation"
        component={ItemConfirmation}
      />
      <Stack.Screen
        name="Add a New Item"
        component={AddNewItem}
      />
      <Stack.Screen
        name="Drop Down Menu Info"
        component={InfoDropDownMenu}
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
      />
      <Stack.Screen
        name="Followers"
        component={Followers}
      />
      <Stack.Screen
        name="Following"
        component={Following}
      />
      <Stack.Screen
        name="Take a Picture"
        component={TakePicture}
      />
      <Stack.Screen
        name="Scanner"
        component={Scanner}
      />
      <Stack.Screen
        name="Bin Dates"
        component={BinDates}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
