import { StyleSheet, Text, View, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import StandardButton from "../components/StandardButton";

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
        backgroundColor: "blue",
      }}
    >
      <Text>Help</Text>

      <StandardButton
        buttonText={"Info"}
        tapFunction={() => {
          navigation.navigate("Info");
        }}
      />

      <StandardButton
        buttonText={"FAQ"}
        tapFunction={() => {
          navigation.navigate("FAQ");
        }}
      />

      <StandardButton
        buttonText={"Report a missed bin collection"}
        tapFunction={() => {
          Linking.openURL("https://www.leeds.gov.uk/residents/bins-and-recycling/your-bins/bin-collection-problems");
        }}
      />

      <StandardButton
        buttonText={"Order a new bin"}
        tapFunction={() => {
          Linking.openURL("https://www.leeds.gov.uk/residents/bins-and-recycling/new-or-replacement-bin");
        }}
      />

      <StandardButton
        buttonText={"Test"}
        tapFunction={() => {
          Linking.openURL("https://www.leeds.gov.uk/residents/bins-and-recycling/new-or-replacement-bin");
        }}
      />
      
    </View>
  );
}
