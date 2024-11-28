import React from "react";
import { StyleSheet, Text, SectionList, Linking } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RecyclingInfo() {
  const { fonts, colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    listContent: {
      flexGrow: 1,
      paddingHorizontal: 15,
      paddingBottom: 20,
    },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.onSecondaryContainer,
      backgroundColor: colors.secondaryContainer,
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
    },
    item: {
      fontSize: 16,
      color: colors.onSurface,
      paddingVertical: 6,
      paddingHorizontal: 10,
      backgroundColor: colors.surface,
      marginBottom: 6,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: colors.outline,
    },
    button: {
      marginTop: 10,
      backgroundColor: colors.primary,
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: "center",
      marginHorizontal: 20,
    },
    buttonText: {
      color: colors.onPrimary,
      fontSize: 16,
      fontWeight: "bold",
    },
  });

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
        showsVerticalScrollIndicator={false}
      />
      <Button
        mode="contained-tonal"
        onPress={() => {
          Linking.openURL(
            "https://www.leeds.gov.uk/residents/bins-and-recycling/your-bins/green-recycling-bin"
          );
        }}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Learn more
      </Button>
    </SafeAreaView>
  );
}
