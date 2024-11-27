import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProgressBar, ActivityIndicator } from "react-native-paper";
import { useTheme } from "react-native-paper";

export function Loader(props) {
  const { loadingProgress } = props;
  const { colors } = useTheme()

  const styles = StyleSheet.create({
    itemMargins: {
      marginVertical: 10
    },
    loaderContainer: {
      flex: 1,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background
    },
  });

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
        {/* <ActivityIndicator
          size="large"
          style={styles.itemMargins}
        /> */}

        <Text>Loading, please wait</Text>
      </View>
    </>
  );
}


