import React from "react";
import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

function ButtonContainer(props) {
  const { children } = props;
  return (
    <Surface
      elevation={2}
      style={styles.container}
    >
      {children}
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
});

export default ButtonContainer;
