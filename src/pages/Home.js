import { ScrollView, Text } from "react-native";
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


export function HomeScreen() {
  const navigation = useNavigation();
  const { user } = useUser()

  return (
    <ScrollView>
      <BaseLayout>
      <Text style={{width:"100%", fontSize:35}}>Hi {user.first_name}
        !
      </Text>

      <BinDateCarousel />
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
