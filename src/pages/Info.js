import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import RecyclingInfo from "../components/RecyclingInfo";
import PlasticLifeCycle from "../components/PlasticLifeCycle";

// Get the screen width using Dimensions API
const { width } = Dimensions.get("window");

export function InfoDropDownMenu() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "What can I recycle?", value: "What can I recycle?" },
    {
      label: "Life cycle of a plastic bottle",
      value: "Life cycle of a plastic bottle",
    },
  ]);

  let content = null;
  if (value === "What can I recycle?") {
    content = <RecyclingInfo />;
  } else if (value === "Life cycle of a plastic bottle") {
    content = <PlasticLifeCycle />;
  }

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder="Select an item"
        containerStyle={[styles.dropdownContainer, { width }]}
        dropDownStyle={[styles.dropdown, { width }]}
        labelStyle={styles.labelStyle}
        renderItem={({ item }) => (
          <View style={styles.dropdownItem}>
            <Text style={styles.itemText}>• {item.label}</Text>
          </View>
        )}
      />
      {content} {/* selected component displayed here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },

  dropdownContainer: {
    paddingBottom: 50,
  },

  dropdown: {
    color: "yellow",
  },

  labelStyle: {
    fontWeight: "700",
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },

  dropdownItem: {
    padding: 10,
  },

  itemText: {
    fontSize: 16,
    color: "#000",
    fontWeight: 700,
  },
});
