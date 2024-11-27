import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import RecyclingInfo from "../components/RecyclingInfo";
import PlasticLifeCycle from "../components/PlasticLifeCycle";

export function InfoDropDownMenu() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "What can I recycle?", value: "recycling" },
    { label: "Life cycle of a plastic bottle", value: "plasticLifecycle" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select an item"
        style={styles.dropdown}
        labelStyle={styles.labelStyle}
        showsVerticalScrollIndicator={false}
      />
      {value === "recycling" && <RecyclingInfo />}
      {value === "plasticLifecycle" && <PlasticLifeCycle />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3F9D4",
    padding: 20,
  },
  dropdown: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
