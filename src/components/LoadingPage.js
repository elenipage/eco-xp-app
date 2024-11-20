// src/components/LoadingPage.js
import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function RecyclingIcon() {
  return (
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons name="recycle" size={100} color="#026928" />
    </View>
  );
}

export function LoadingIcon() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
      <Text style={styles.text}>THIS IS THE WELCOME PAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 50,
    fontWeight: 500,
    fontSize: 18,
    color: "#000",
    textAlign: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginBottom: 350,
  },
});
