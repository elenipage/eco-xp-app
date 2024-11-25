import { StyleSheet, Text, View, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../context/user-context";
import { useEffect, useState } from "react";
import { fetchBinDatesByUserPostcode } from "../../utils/api";
import BinDateCard from "../cards/BinDateCard";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function BinDates() {
  const [data, setData] = useState({});
  const { user } = useUser();
  const postcode = user.postcode;

  // const [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  //   Roboto_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <Text>Loading fonts...</Text>;
  // }

  // Commented out above as causing error

  useEffect(() => {
    fetchBinDatesByUserPostcode(postcode)
      .then(({ postcode }) => {
        setData(postcode);
      })
      .catch((error) => {
        console.log("Error fetching bin dates:", error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Please see your collection dates below:</Text>

        <BinDateCard
          title="Garden Waste Collection:"
          date={data.garden_bin_collection}
          icon="delete"
          color="brown"
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
          title="General Waste Bin Collection:"
          date={data.waste_bin_collection}
          icon="leaf"
          color="black"
          size={24}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#F0F8E2",
  },
  title: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
  },
});
