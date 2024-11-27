import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Surface, useTheme } from "react-native-paper";

export default function BinDateCard({
  title,
  date,
  icon,
  color,
  size,
}) {

  const { fonts, colors } = useTheme()

  const styles = StyleSheet.create({
    card: {
      // padding:10,
      // paddingBottom: 20,
      // marginVertical: 5,
      margin: 20,
      height: 200,
      backgroundColor: colors.surfaceVariant,
      borderRadius: 20,
      width: "100%",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  
    title: {
      fontSize: fonts.titleLarge.fontSize,
      marginBottom: 5,
      textAlign: "center"
    },
  
    date: {
      fontSize: fonts.labelLarge.fontSize,
      margin: 10,
    },
  });

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Icon style={{marginBottom:15}} name={icon} size={size} color={color} />
    </View>
  );
}


