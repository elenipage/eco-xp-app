import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import DropDownPicker from "react-native-dropdown-picker";

import RecyclingInfo from "../components/RecyclingInfo";
import PlasticLifeCycle from "../components/PlasticLifeCycle";

// get screen width using Dimensions API
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

  const images = [
    {
      id: "1",
      source: require("../../assets/reduce-reuse-recycle.jpg"),
    },
    {
      id: "2",
      source: require("../../assets/reduce-reuse-recycle.jpg"),
    },
  ];
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

      <FlatList
        data={content ? [content] : []}
        renderItem={({ item }) => item}
        keyExtractor={(item, index) => index.toString()}
        style={styles.contentContainer}
      />

      {value === null && (
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <Image style={styles.image} source={item.source} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.imageContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    flexDirection: "column",
  },

  dropdownContainer: {
    paddingBottom: 20,

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
      fontFamily: "Roboto_700Bold",
    },

    contentContainer: {
      flex: 1,
      marginTop: 20,
      paddingBottom: 20,
    },

    imageContainer: {
      flexGrow: 1,
      marginTop: 30,
      alignItems: "center",
      paddingBottom: 50,
    },

    image: {
      marginVertical: 20,
      marginHorizontal: 15,
      borderRadius: 15,
      resizeMode: "contain",
    },
  },
});
