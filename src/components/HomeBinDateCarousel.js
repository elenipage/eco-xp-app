import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Surface } from "react-native-paper";
import Swiper from "react-native-swiper";
import { fetchBinDatesByUserPostcode } from "../../utils/api";
import { useUser } from "../context/user-context";
import BinDateCard from "./BinDateCard";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useNavigation } from "@react-navigation/native";

function BinDateCarousel() {
  const [binData, setBinData] = useState("");
  const { user } = useUser();
  const navigation = useNavigation();
  const postcode = user.postcode;

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    fetchBinDatesByUserPostcode(postcode)
      .then((data) => {
        setBinData(data);
      })
      .catch((error) => {
        console.log("Error fetching bin dates:", error);
      });
  }, []);

  return (
    <Swiper
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 225
      }}
      showsButtons={false}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Bin Dates");
        }}
      >
        <BinDateCard
          title={"General Waste Bin Collection:"}
          date={binData.waste_bin_collection}
          icon="delete"
          color="black"
          size={24}
          fontsLoaded={fontsLoaded}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Bin Dates");
        }}
      >
        <BinDateCard
          title="Recycling Bin Collection:"
          date={binData.recycling_bin_collection}
          icon="recycle"
          color="green"
          size={24}
          fontsLoaded={fontsLoaded}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Bin Dates");
        }}
      >
        <BinDateCard
          title="Garden Waste Collection:"
          date={binData.garden_bin_collection}
          icon="leaf"
          color="brown"
          size={24}
          fontsLoaded={fontsLoaded}
        />
      </TouchableOpacity>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
  },
  text: {
    fontSize: 20,
  },
});

export default BinDateCarousel;
