import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Surface } from "react-native-paper";

function FAQCard({ FAQQuestion, FAQAnswer }) {
  const [isPressed, setIsPressed] = useState(false);

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
    fontWeight: "600",
    color: "#2e3d49",
    marginBottom: 15,
    backgroundColor: "#F0F8E2",
  },

  answer: {
    fontSize: 16,
    fontWeight: "400",
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
