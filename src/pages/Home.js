import { Button } from "@react-navigation/elements";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function HomeScreen() {
  const insets = useSafeAreaInsets;
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
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Quiz")}>Take a Quiz</Button>
    </View>
  );
}

