import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

function FAQCard({ FAQQuestion, FAQAnswer }) {
  const [isPressed, setIsPressed] = useState(false);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[styles.cardContainer, isPressed && styles.pressedCard]}
    >
      <Surface
        elevation={3}
        style={[styles.card, isPressed && styles.pressedCard]}
      >
        <Text style={[styles.question, isPressed && styles.pressedText]}>
          {FAQQuestion}
        </Text>
        <Text style={[styles.answer, isPressed && styles.pressedText]}>
          {FAQAnswer}
        </Text>
      </Surface>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    width: "90%",
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },

  card: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#F0F8E2",
  },

  question: {
    fontSize: 18,
    fontFamily: "Roboto_700Bold",
    color: "#2e3d49",
    marginBottom: 15,
    backgroundColor: "#F0F8E2",
  },

  answer: {
    fontSize: 16,

    fontFamily: "Roboto_400Regular",
    color: "#4a4a4a",
    marginTop: 5,
    backgroundColor: "#F0F8E2",
  },

  pressedCard: {
    backgroundColor: "#e8f7ff",
    transform: [{ scale: 0.95 }],
    elevation: 10,
  },

  pressedText: {
    color: "#2e3d49",
  },
});

export { FAQCard };
