import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTheme, Text } from "react-native-paper";

export function LoginForm({ handleLogin }) {
  const { colors, fonts, surface } = useTheme();

  const styles = StyleSheet.create({
    pageContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#B3F9D4",
      width: "100%",
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 40,
      borderRadius: 75,
      borderWidth: 2,
      borderColor: "#1A3151",
    },

    h1: fonts.headlineLarge,
    h2: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: "center",
      color: "#1A3151",
      width: "100%",
      fontWeight: "700",
    },
    input: {
      width: "80%",
      maxWidth: 300,
      padding: 10,
      margin: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#1A3151",
      textAlign: "center",
    },
    button: {
      width: "80%",
      maxWidth: 300,
      margin: 50,
      paddingVertical: 15,
      paddingHorizontal: 50,
      backgroundColor: "#1A3151",
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/recycling-man.jpg")}
      />
      <Text variant="headlineLarge">EcoXp!</Text>
      <Text variant="headlineMedium">Level up for a cleaner world!</Text>
      <TextInput style="bodySmall" placeholder="Email" />
      <TextInput style="bodyMedium" placeholder="Password" />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text variant="bodyMedium">SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}
