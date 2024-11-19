import { Text, View, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import RecyclingTipsCarousel from "../components/RecyclingTips";
import { FunFact } from "../components/FunFact";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Text>Home Screen</Text>
      <View style={styles}>
        <FunFact />
        <RecyclingTipsCarousel />
        <Button
          onPress={() => navigation.navigate("Quiz")}
          mode="contained-tonal"
        >
          Take a Quiz
        </Button>
      </View>
    </ScrollView>
  );
}

const insets = useSafeAreaInsets;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  },
});
