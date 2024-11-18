import React from "react";
import { SegmentedButtons } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Leaderboard() {
  const [value, setValue] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Leaderboard</Text>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        style={styles.segButton}
        buttons={[
          {
            value: "friends",
            label: "Friends",
          },
          {
            value: "postcode",
            label: "Postcode",
          },
          {
            value: "city",
            label: "City",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  segButton: {
    width: "100%",
  },
});
