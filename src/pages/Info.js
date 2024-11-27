import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import RecyclingInfo from "../components/RecyclingInfo";
import PlasticLifeCycle from "../components/PlasticLifeCycle";

export function InfoDropDownMenu() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const items = [
    { label: "What can I recycle?", value: "recycling" },
    { label: "Life cycle of a plastic bottle", value: "plasticLifeCycle" },
  ];

  const renderContent = () => {
    if (value === "recycling") return <RecyclingInfo />;
    if (value === "plasticLifeCycle") return <PlasticLifeCycle />;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/recycling-infographic.jpg")}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder="Select an item"
        style={styles.dropdown}
        labelStyle={styles.labelStyle}
        showsVerticalScrollIndicator={false}
      />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3F9D4",
    padding: 20,
  },
  image: {
    height: 490,
    width: "100%",
    borderRadius: 12,
  },

  dropdown: {
    marginBottom: 16,
    backgroundColor: "#f0f0f0",
  },
  dropdownContainer: {
    backgroundColor: "#fff",
  },
});
