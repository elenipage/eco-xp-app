import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";

function FAQCard({ FAQQuestion, FAQAnswer }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[styles.cardContainer, isPressed && styles.pressedCard]}
    >
      <Surface elevation={3} style={styles.card}>
        <Text style={styles.question}>{FAQQuestion}</Text>
        <Text style={styles.answer}>{FAQAnswer}</Text>
      </Surface>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: "#ddd",
  },

  question: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2e3d49",
    marginBottom: 15,
  },
  answer: {
    fontSize: 16,
    fontWeight: "400",
    color: "#4a4a4a",
    marginTop: 5,
  },

  pressedCard: {
    backgroundColor: "#e8f7ff",
    transform: [{ scale: 0.95 }],
    elevation: 10,
  },
});

export { FAQCard };
