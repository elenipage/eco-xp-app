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
      <Button
        onPress={() => navigation.navigate("Info")}
        mode="contained-tonal"
      >
        Info
      </Button>
      <Button
        onPress={() => navigation.navigate("FAQ")}
        mode="contained-tonal"
      >
        FAQ
      </Button>
      <Button
        onPress={() => Linking.openURL("https://www.leeds.gov.uk/residents/bins-and-recycling/your-bins/bin-collection-problems")}
        mode="contained-tonal"
      >
        Report a missed bin collection
      </Button>
      <Button
        onPress={() => Linking.openURL("https://www.leeds.gov.uk/residents/bins-and-recycling/new-or-replacement-bin")}
        mode="contained-tonal"
      >
        Order a new bin
      </Button>
      <StandardButton
        buttonText={"Test"}
        clickFunction={() => {
          Linking.openURL("https://www.leeds.gov.uk/residents/bins-and-recycling/new-or-replacement-bin");
        }}
      />
    </View>
  );
}
