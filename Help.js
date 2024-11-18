import { Button } from "@react-navigation/elements";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Help() {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation();
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
        <Text>Help</Text>
        <Button onPress={() => navigation.navigate("FAQ")}>FAQ</Button>
        <Button onPress={() => navigation.navigate("Info")}>Info</Button>
      </View>
    );
  }