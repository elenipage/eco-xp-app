import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import RecyclingInfo from "../components/RecyclingInfo";
import PlasticLifeCycle from "../components/PlasticLifeCycle";
import { useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export function InfoDropDownMenu() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const { fonts, colors } = useTheme();

  const items = [
    { label: "What can I recycle?", value: "recycling" },
    { label: "Life cycle of a plastic bottle", value: "plasticLifeCycle" },
  ];

  const renderContent = () => {
    if (value === "recycling") return <RecyclingInfo />;
    if (value === "plasticLifeCycle") return <PlasticLifeCycle />;
    return (
      <Image
        style={styles.image}
        source={require("../../assets/recycling-infographic.jpg")}
      />
    );
  };

  const styles = StyleSheet.create({
    container: {
      minHeight: "900",
      flex: 1,
      backgroundColor: colors.background,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 30,
      paddingBottom: 10,
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    image: {
      height: "80%",
      width: "90%",
      borderRadius: 12,
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        placeholder="Select an item"
        style={{ borderWidth: 1, marginVertical: 10 }}
        labelStyle={styles.labelStyle}
        showsVerticalScrollIndicator={false}
      />
      {renderContent()}
    </View>
    </ScrollView>
    
  );
}
