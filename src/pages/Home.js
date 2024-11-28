import { ScrollView, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RecyclingTipsCarousel from "../components/RecyclingTips";
import { FunFact } from "../components/FunFact";
import StandardButton from "../components/StandardButton";
import { useUser } from "../context/user-context";
import BinDateCarousel from "../components/HomeBinDateCarousel";
import { Surface, useTheme } from "react-native-paper";

export function HomeScreen() {
  const navigation = useNavigation();
  const { user } = useUser();
  const { fonts, colors } = useTheme();

  return (
    <ScrollView>
      <View
        style={{
          margin: 20,
        }}
      >
        <Text style={fonts.displaySmall}>Hi {user.first_name}!</Text>
        <Surface
          style={{
            backgroundColor: colors.surface,
            padding: 20,
            borderRadius: 20,
            justifyContent: "space-between",
          }}
        >
          <FunFact />
          <BinDateCarousel />
          <Image
            source={require("../../assets/happy-arrows.webp")}
            style={{
              width: "100%",
              height: 100,
              objectFit: "contain",
            }}
          />
          <View>
            <StandardButton
              buttonText={"Take a Quiz!"}
              tapFunction={() => navigation.navigate("Quiz")}
            />
          </View>

          <View>
            <Text style={{ fontSize: fonts.titleLarge.fontSize, textAlign: "center" }}>
              Recycling top tips
            </Text>
            <RecyclingTipsCarousel />
          </View>
        </Surface>
      </View>
    </ScrollView>
  );
}
