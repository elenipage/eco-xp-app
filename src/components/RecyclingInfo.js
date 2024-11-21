import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
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
          <View style={styles.headerContainer}>
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.title}>
            <Text style={styles.titleText}>What can I recycle?</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    paddingBottom: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 10,
    textAlign: "center",
    marginRight: 10,
    fontFamily: "Roboto_700Bold",
  },
  item: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 15,
    textAlign: "left",
    color: "red",
    fontFamily: "Roboto_400Regular",
  },
});
