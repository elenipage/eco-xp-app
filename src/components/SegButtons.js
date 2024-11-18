import React from "react";
import { SegmentedButtons } from "react-native-paper";
import { StyleSheet } from "react-native";

function SegButtons() {
  const [value, setValue] = React.useState("");
  return (
    <SegmentedButtons
      value={value}
      onValueChange={setValue}
      style={styles.segButton}
      buttons={[
        {
          value: "friends",
          label: "Friends",
          icon: "account-group",
        },
        {
          value: "postcode",
          label: "Postcode",
          icon: "home-group",
        },
        {
          value: "city",
          label: "City",
          icon: "city-variant",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  segButton: {
    width: "100%",
  },
});

export default SegButtons;
