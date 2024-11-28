import React from "react";
import { StyleSheet } from "react-native";
import { Surface } from "react-native-paper";
import { useTheme } from "react-native-paper";

function ButtonContainer(props) {
  const { children } = props;
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      gap: 10,
      borderRadius: 20,
      padding: 20,
      margin: 20,
      backgroundColor: colors.surface
    },
  });

  return (
    <Surface
      elevation={2}
      style={styles.container}
    >
      {children}
    </Surface>
  );
}



export default ButtonContainer;
