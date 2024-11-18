import { StyleSheet, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Quiz({ route }) {
  const insets = useSafeAreaInsets();

  const { xp, setXp } = route.params;

  function handlePress() {
    setXp((currentXp) => {
      return currentXp + 1;
    });
  }

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
      <Text>Quiz</Text>
      <Button onPress={handlePress}>Press to increase your XP</Button>
    </View>
  );
}

