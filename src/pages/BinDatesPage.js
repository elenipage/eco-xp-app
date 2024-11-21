// src/pages/BinDatesPage.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { BinDates } from "../components/LoadingPage";

export function BinDatesPage() {
  return (
    <View style={styles.container}>
      <BinDates />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
