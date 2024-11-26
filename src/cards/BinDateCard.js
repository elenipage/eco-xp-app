import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";

export default function BinDateCard({
  title,
  date,
  icon,
  color,
  size,
  fontsLoaded,
}) {
  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    card: {
      padding: 15,
      marginVertical: 15,
      backgroundColor: colors.surfaceVariant,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#1A3151",
      shadowColor: "#1A3151",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
      width: "90%",
      alignSelf: "center",
    },
  
    title: {
      fontSize: 18,
      fontFamily: "Roboto_700Bold",
      color: "#1A3151",
      marginBottom: 5,
    },
  
    date: {
      fontSize: 14,
      fontFamily: "Roboto_400Regular",
      color: "#4B4B4B",
      marginBottom: 10,
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Icon name={icon} size={size} color={color} />
    </View>
  );
}


