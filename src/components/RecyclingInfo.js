import React from "react";
import { StyleSheet, Text, SectionList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RecyclingInfo() {
  const recyclingData = [
    { title: "Paper and Cardboard", data: ["Newspapers", "Cardboard boxes"] },
    { title: "Plastics", data: ["Plastic bottles", "Plastic tubs"] },
    { title: "Metal", data: ["Tin cans", "Aluminium cans"] },
    { title: "Glass", data: ["Clear glass bottles", "Glass jars"] },
    { title: "Cartons", data: ["Tetra Pak cartons"] },
    {
      title: "Items Not Accepted",
      data: ["Food waste", "Black plastic", "Textiles", "Polystyrene"],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={recyclingData}
        renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false} // removes scroll on right side
      />
      ˚
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    backgroundColor: "#A5D6A7",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    color: "#4B4B4B",
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#C8E6C9",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#43A047",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
