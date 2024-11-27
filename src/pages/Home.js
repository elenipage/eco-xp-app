import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import RecyclingTipsCarousel from "../components/RecyclingTips";
import { FunFact } from "../components/FunFact";
import StandardButton from "../components/StandardButton";
import BaseLayout from "../components/BaseLayout";
import { useUser } from "../context/user-context";
import BinDateCarousel from "../components/HomeBinDateCarousel";
import {
  useFonts,
  Fredoka_300Light,
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
  Fredoka_700Bold,
} from "@expo-google-fonts/fredoka";
import { Loader } from "../components/Loader";
import { useTheme } from "react-native-paper";

export function HomeScreen() {
  const { fonts } = useTheme()
  const navigation = useNavigation();
  const { user } = useUser();
  let [fontsLoaded] = useFonts({
    Fredoka_300Light,
    Fredoka_400Regular,
    Fredoka_500Medium,
    Fredoka_600SemiBold,
    Fredoka_700Bold,
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <ScrollView>
      <BaseLayout>
        <Text variant="displayMedium">
          Hi {user.first_name}!
        </Text>
        <BinDateCarousel />
        <FunFact />
        <StandardButton
          buttonText={"Take a Quiz!"}
          tapFunction={() => navigation.navigate("Quiz")}
        />
        <RecyclingTipsCarousel />
      </BaseLayout>
    </ScrollView>
  );
}
