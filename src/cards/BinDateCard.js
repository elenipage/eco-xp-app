import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function BinDateCard({ title, date, icon, color, size }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Icon name={icon} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    color: "red",
  },
  date: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: "blue",
  },
});
