import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Surface } from "react-native-paper";
import Swiper from "react-native-swiper";
import { fetchBinDatesByUserPostcode } from "../../utils/api";
import { useUser } from "../context/user-context";
import BinDateCard from "../cards/BinDateCard";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

function BinDateCarousel() {
const [binData, setBinData] = useState('')
const { user } = useUser();
console.log(user)
  const postcode = user.postcode;

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

    useEffect(() => {
        fetchBinDatesByUserPostcode(postcode)
          .then(( data ) => {
            setBinData( data );
          })
          .catch((error) => {
            console.log("Error fetching bin dates:", error);
          });
      }, []);
    

  return (
    <>
      <Swiper
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        showsButtons={false}
        height={"100%"}
      >
       <BinDateCard title={"General Waste Bin Collection:"}
          date={binData.waste_bin_collection}
          icon="delete"
          color="black"
          size={24}
          fontsLoaded={fontsLoaded}/>
       <BinDateCard
       title="Recycling Bin Collection:"
       date={binData.recycling_bin_collection}
       icon="recycle"
       color="green"
       size={24}
       fontsLoaded={fontsLoaded}/>
       <BinDateCard
       title="Garden Waste Collection:"
       date={binData.garden_bin_collection}
       icon="leaf"
       color="brown"
       size={24}
       fontsLoaded={fontsLoaded}/>
      </Swiper>
    </>
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
