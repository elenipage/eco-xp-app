import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProgressBar, Text } from "react-native-paper";

export function Loader(props) {
  const { loadingProgress } = props;

  return (
    <>
      <ProgressBar progress={loadingProgress} />
      <View style={styles.loaderContainer}>
        <MaterialCommunityIcons
          name="recycle"
          size={100}
          color="#026928"
          style={styles.itemMargins}
        />
        <Text variant="bodySmall">Loading, please wait</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  itemMargins: {
    marginVertical: 10
  },
  loaderContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
