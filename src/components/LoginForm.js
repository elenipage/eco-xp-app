import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

export function LoginForm({ handleLogin }) {
  return (
    <View style={styles.pageContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/recycling-man.jpg")}
      />
      <Text style={styles.h1}>EcoXp!</Text>
      <Text style={styles.h2}>Level up for a cleaner world!</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}

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

  h1: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
    color: "#1A3151",
    width: "100%",
    fontWeight: "700",
    textShadowColor: "#6DA99A",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1.8,
  },
  h2: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#1A3151",
    width: "100%",
    fontWeight: "700",
    textShadowColor: "#6DA99A",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1.2,
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
