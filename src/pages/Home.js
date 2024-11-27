import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RecyclingTipsCarousel from "../components/RecyclingTips";
import { FunFact } from "../components/FunFact";
import StandardButton from "../components/StandardButton";
import BaseLayout from "../components/BaseLayout";
import { followersPreview } from "../components/data/leaderboardData";
import { Loader } from "../components/Loader";
import { useState } from "react";
import { useUser } from "../context/user-context";
import BinDateCarousel from "../components/HomeBinDateCarousel";
import { Surface } from "react-native-paper";
import { useTheme } from "react-native-paper";

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
        <View>
          <Text style={fonts.displaySmall}>Hi {user.first_name}!</Text>
        </View>
        <Surface
          style={{
            backgroundColor: colors.surface,
            marginVertical: 20,
            padding: 20,
            borderRadius: 20,
            justifyContent: "space-between",
          }}
        >
          <FunFact />
          <BinDateCarousel />
        </Surface>
        <StandardButton
          buttonText={"Take a Quiz!"}
          tapFunction={() => navigation.navigate("Quiz")}
        />
        <View>
          <View
            style={{
              marginBottom: 20,
            }}
          >
            <Text style={fonts.displaySmall}>Recycling top tips</Text>
          </View>

          <RecyclingTipsCarousel />
        </View>
      </View>
    </ScrollView>
  );
}
