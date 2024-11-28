import React from "react";
import { StyleSheet, Text, SectionList, View, Linking } from "react-native";
import { Button, Surface, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RecyclingInfo() {
  const { fonts, colors, surface } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      height: "80%"
    },
    listContent: {
      flex: 1,
    },
    header: {
      fontSize: 18,
      color: colors.onSecondaryContainer,
      backgroundColor: colors.primaryContainer,
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
    },
    button: {
      backgroundColor: colors.secondary,
      padding: 5,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
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
    <Surface style={{...surface, marginBottom: 50}}>
      {recyclingData.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.header}>{section.title}</Text>
          {section.data.map((item, itemIndex) => (
            <Text key={itemIndex} style={styles.item}>• {item}</Text>
          ))}
        </View>
      ))}
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
    </Surface>

    
  );
}
