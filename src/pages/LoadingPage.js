// src/pages/LoadingPage.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { RecyclingIcon, LoadingIcon } from "../components/LoadingPage";

export function LoadingPage() {
  return (
    <View style={styles.container}>
      <RecyclingIcon />
      <LoadingIcon />
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
