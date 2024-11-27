import React from "react";
import { SegmentedButtons } from "react-native-paper";
import { StyleSheet } from "react-native";

function SegButtons(props) {
  const { value, setValue } = props
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
    width: "95%",
    marginBottom: 10,
    marginTop: 10,
  },
});

export default SegButtons;
