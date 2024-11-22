import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BinDates() {
  const BinDatesInfo = [
    { title: "Leeds", data: ["Monday"] },
    { title: "Wakefield", data: ["Tuesday"] },
    { title: "York", data: ["Wednesday"] },
  ];
  return (
    <SafeAreaView>
      <SectionList
        sections={BinDatesInfo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
      />
    </SafeAreaView>
  );
}
