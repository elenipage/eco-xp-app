import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Surface, Text } from "react-native-paper";

function FAQCard({ FAQQuestion, FAQAnswer }) {

  return (
    <TouchableOpacity
      style={styles.cardContainer}
    >
      <Surface
        style={styles.card}
      >
        <Text variant="bodySmall">
          {FAQQuestion}
        </Text>
        <Text variant="bodySmall">
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
    color: "#1A3151",
  },

  answer: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#4a4a4a",
    marginTop: 5,
    backgroundColor: "#F0F8E2",
  },
});

export { FAQCard };
