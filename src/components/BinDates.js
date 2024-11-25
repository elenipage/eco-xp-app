import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
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

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    fetchBinDatesByUserPostcode(postcode)
      .then(({ postcode }) => {
        setData(postcode);
      })
      .catch((error) => {
        console.log("Error fetching bin dates:", error);
      });
  }, [postcode]);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Please see your collection dates below:
        </Text>
        <BinDateCard
          title="General Waste Bin Collection:"
          date={data.waste_bin_collection}
          icon="delete"
          color="black"
          size={24}
          fontsLoaded={fontsLoaded}
        />

        <BinDateCard
          title="Recycling Bin Collection:"
          date={data.recycling_bin_collection}
          icon="recycle"
          color="green"
          size={24}
          fontsLoaded={fontsLoaded}
        />
        <BinDateCard
          title="Garden Waste Collection:"
          date={data.garden_bin_collection}
          icon="leaf"
          color="brown"
          size={24}
          fontsLoaded={fontsLoaded}
        />
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/three-bins.jpg")}
      />
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
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    color: "#1A3151",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    textShadowColor: "#6DA99A",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1.2,
  },
  image: {
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1A3151",
    shadowColor: "#1A3151",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignSelf: "center",
  },
});
