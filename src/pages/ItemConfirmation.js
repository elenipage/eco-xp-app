import { StyleSheet, Image, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Surface, Button } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import BaseLayout from "../../src/components/BaseLayout.js";
import React, { useState, useRef, useEffect } from "react";
import { useUser } from "../context/user-context.js";
import { Loader } from "../components/Loader.js";
import { IsRecyclableButtons } from "../components/IsRecyclableButtons.js";
import { useTheme } from "react-native-paper";
import StandardButton from "../components/StandardButton.js";

export function ItemConfirmation() {
  const route = useRoute();
  const { scannedItemData } = route.params;
  const itemXP = 10;
  const [isRecyclable, setIsRecyclable] = useState(false);
  const confettiRef = useRef(null);
  const [isRecycled, setIsRecycled] = useState(false);
  const [isBinned, setIsBinned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const { surface, fonts } = useTheme();

  useEffect(() => {
    confettiRef.current?.play(0);
  }, [isRecycled]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Surface style={surface}>
      <Image
        style={styles.item_img}
        source={{
          uri:
            scannedItemData.img_url ||
            "https://t4.ftcdn.net/jpg/01/05/29/71/360_F_105297184_FaBQJDmTsKQMfkrVwonZkejAzr0Rzbj4.jpg",
        }}
      />
      <Text style={fonts.titleLarge}>{scannedItemData.item_name}</Text>
      {/* <Text style={fonts.titleSmall}>Material ID: {scannedItemData.item_id}</Text> */}
      <IsRecyclableButtons
        isRecycled={isRecycled}
        setIsRecycled={setIsRecycled}
        isBinned={isBinned}
        setIsBinned={setIsBinned}
        scannedItemData={scannedItemData}
        isRecyclable={isRecyclable}
        setIsRecyclable={setIsRecyclable}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
    </Surface>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flex: 1,
  //   width: "100%",
  // },
  icon: {
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  item_img: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
  },
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  lottie: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: "none",
  },
});
