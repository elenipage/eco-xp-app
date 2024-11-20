import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
import RecyclingTipsCarousel from "../components/RecyclingTips";
import { FunFact } from "../components/FunFact";
import StandardButton from "../components/StandardButton";
import BaseLayout from "../components/BaseLayout";

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <BaseLayout>
        <FunFact />
        <RecyclingTipsCarousel />
        <StandardButton
          buttonText={"Take a Quiz"}
          tapFunction={() => navigation.navigate("Quiz")}
          mode="contained-tonal"
        >
          Take a Quiz
        </StandardButton>
      </BaseLayout>
    </ScrollView>
  );
}

// const insets = useSafeAreaInsets;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: insets.top,
//     paddingBottom: insets.bottom,
//     paddingLeft: insets.left,
//     paddingRight: insets.right,
//   },
// });
