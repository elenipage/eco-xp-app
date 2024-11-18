import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SegButtons from "../components/SegButtons";
import TestLayout from "../styles/TestLayout";

export function Stats() {
  const insets = useSafeAreaInsets();
  return (
    <View style={TestLayout.container}>
      <Text>Stats</Text>
      <SegButtons />
    </View>
  );
}
