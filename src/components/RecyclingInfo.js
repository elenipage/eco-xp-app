import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

export default function RecyclingInfo() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  const recyclingData = [
    {
      title: "Paper and Cardboard",
      data: [
        "Newspapers and magazines",
        "Junk mail",
        "Cardboard boxes",
        "Cereal boxes",
        "Toilet roll tubes",
      ],
    },
    {
      title: "Plastics",
      data: ["Plastic bottles", "Plastic tubs, pots, and trays"],
    },
    {
      title: "Metal",
      data: ["Tin cans", "Aluminium cans", "Empty aerosols"],
    },
    {
      title: "Glass",
      data: ["Clear glass bottles", "Coloured glass bottles", "Glass jars"],
    },
    {
      title: "Cartons",
      data: ["Tetra Pak cartons"],
    },
    {
      title: "Items Not Accepted",
      data: [
        "Food waste",
        "Black plastic or plastic film",
        "Textiles",
        "Polystyrene",
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={recyclingData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {"\u2022"} {item} {/* bullet point */}
          </Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.titleContainer}>
            <Text style={styles.title}>What can I recycle?</Text>
          </View>
        }
      />
      <Image
        style={styles.image}
        source={require("../../assets/recycling-man.jpg")}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#B3F9D4",
  },
  titleContainer: {
    paddingBottom: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
    color: "#1A3151",
    textAlign: "center",
    textShadowColor: "#6DA99A",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1.2,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingHorizontal: 10,
    textAlign: "left",
    marginBottom: 5,
    fontFamily: "Roboto_700Bold",
    color: "#1A3151",
    backgroundColor: "#4DC07A",
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 15,
    textAlign: "left",
    color: "#4B4B4B",
    fontFamily: "Roboto_400Regular",
    marginBottom: 6,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#39BCD9",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#1A3151",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
  sectionSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: 205,
    resizeMode: "cover",
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#39BCD9",
    shadowColor: "#1A3151",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
