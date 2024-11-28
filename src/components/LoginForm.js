import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button, useTheme, TextInput, Surface } from "react-native-paper";
import StandardButton from "./StandardButton";
import { ScrollView } from "react-native-gesture-handler";

export function LoginForm({ handleLogin }) {
  const { colors, fonts, surface } = useTheme();

  const styles = StyleSheet.create({
    pageContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 70,
      backgroundColor: colors.background,
      width: "100%",
    },
    formContainer: {flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
      padding: 30,
      backgroundColor: colors.tertiaryContainer,
      width: "100%"
    },
    image: {
      width: 250,
      height: 160,
      marginBottom: 10,
    },

    h1: fonts.headlineLarge,
    h2: {
      paddingVertical: 10,
      fontSize: fonts.headlineSmall.fontSize,
      textAlign: "center",
      width: "100%",
    },
    input: {
      width: "100%",
      maxWidth: 300,
      height: 30,
      padding: 10,
      marginBottom: 10,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.pageContainer}>
      
        <Image
          style={styles.image}
          source={require("../../assets/bin-and-earth.png")}
        />
        <Surface style={{...surface, marginHorizontal: 45}}>
        <Text style={styles.h1}>EcoXp</Text>
        <Text style={styles.h2}>Level up for a cleaner world!</Text>
        <TextInput
          disabled={true}
          mode={"outlined"}
          style={styles.input}
          placeholder="ScarlettJ"
        />
        <TextInput
          mode={"outlined"}
          disabled={true}
          style={styles.input}
          placeholder="*************"
        />
        <StandardButton tapFunction={handleLogin} buttonText={"Sign In"} />
      </Surface>
    </View>
  );
}
