import { StyleSheet, Text, View, Image } from "react-native";
import { useUser } from "../context/user-context";
import { useEffect, useState } from "react";
import { fetchBinDatesByUserPostcode } from "../../utils/api";
import { BinDateCard } from "./BinDateCard";
import { useTheme } from "react-native-paper";
import BaseLayout from "./BaseLayout";
import { ScrollView } from "react-native";

export default function BinDates() {
  const { fonts, colors } = useTheme();
  const [data, setData] = useState({});
  const { user } = useUser();
  const postcode = user.postcode;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 0,
      width: "100%",
      backgroundColor: colors.background,
    },
    title: {
      fontSize: fonts.headlineMedium.fontSize,
      textAlign: "center",
      width: "100%",
      padding: 10,
    },
    image: {
      marginTop: 5,
      borderRadius: 10,
      alignSelf: "center",
      width: "95%",
    },
  });

  useEffect(() => {
    fetchBinDatesByUserPostcode(postcode)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Error fetching bin dates:", error);
      });
  }, [postcode]);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Please see your collection dates below:</Text>
        <BinDateCard
          title="General Waste Bin Collection:"
          date={data.waste_bin_collection}
          icon="delete"
          color="black"
          size={24}
        />

        <BinDateCard
          title="Recycling Bin Collection:"
          date={data.recycling_bin_collection}
          icon="recycle"
          color="green"
          size={24}
        />
        <BinDateCard
          title="Garden Waste Collection:"
          date={data.garden_bin_collection}
          icon="leaf"
          color="brown"
          size={24}
        />
        <Image
          style={styles.image}
          source={require("../../assets/three-bins.jpg")}
        />
      </View>
    </>
  );
}
