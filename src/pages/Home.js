import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RecyclingTipsCarousel from "../components/RecyclingTips";
import { FunFact } from "../components/FunFact";
import StandardButton from "../components/StandardButton";
import BaseLayout from "../components/BaseLayout";
import { followersPreview } from "../components/data/leaderboardData";
import { Loader } from "../components/Loader";
import { useState } from "react";

export function HomeScreen() {
  return (
    <ScrollView>
      <BaseLayout>
        <FunFact />
        <RecyclingTipsCarousel />
        <StandardButton
          buttonText={"Take a Quiz"}
          tapFunction={() => navigation.navigate("Quiz")}
        >
          Take a Quiz
        </StandardButton>

        {/* (temporarily) allows me to navigate to the welcome page */}
        <StandardButton
          buttonText={"BinDATES"}
          tapFunction={() => navigation.navigate("Bin Dates")}
        >
          BIN DATES
        </StandardButton>
      </BaseLayout>
    </ScrollView>
  );
}
