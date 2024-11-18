import { Button } from "@react-navigation/elements";
import { StyleSheet, Text, View, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Help() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text>Help</Text>
      <Button onPress={() => navigation.navigate("Info")}>Info</Button>
      <Button onPress={() => navigation.navigate("FAQ")}>FAQ</Button>
      <Button onPress={() => Linking.openURL("https://www.leeds.gov.uk/residents/bins-and-recycling/your-bins/bin-collection-problems")}>Report a missed bin collection</Button>
      <Button onPress={() => Linking.openURL("https://www.leeds.gov.uk/residents/bins-and-recycling/new-or-replacement-bin")}>Order a new bin</Button>

    </View>
  );
}
