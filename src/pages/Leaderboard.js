import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SegButtons from "../components/SegButtons";
import TestLayout from "../styles/TestLayout";

export function Leaderboard() {
  return (
    <View style={TestLayout.container}>
      <Text>Leaderboard</Text>
      <SegButtons />
    </View>
  );
}
