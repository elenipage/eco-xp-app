import { StyleSheet, Image, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Surface, Button, useTheme } from "react-native-paper";
import React, { useState, useRef, useEffect } from "react";
import { useUser } from "../context/user-context.js";
import { useXp } from "../context/Xp-context.js";
import { fetchIsRecyclableByArea, postLoggedItem, updateXpByID } from "../../utils/api.js";
import { Loader } from "../components/Loader.js";
import { useNavigation } from "@react-navigation/native";
import StandardButton from "./StandardButton.js";

export function IsRecyclableButtons(props) {
  const { fonts, surface } = useTheme();

  const {
    isBinned,
    setIsBinned,
    isRecycled,
    setIsRecycled,
    isRecyclable,
    setIsRecyclable,
    scannedItemData,
    setIsLoading,
    setModalVisible,
  } = props
  const { user } = useUser()
  const itemXP = 10
  const { setXp } = useXp()
  const postcode = user.postcode
  const splitPostcode = postcode.split(" ")
  const prefix = splitPostcode[0].match(/[a-zA-Z]+/g)
  const navigation = useNavigation()

  function handleRecycle() {
    // setIsLoading(true)
    setModalVisible(true)
    setTimeout(() => {
      setModalVisible(false);
    }, 1200);
    updateXpByID(user.user_id, itemXP)
      .then(() => {
        setXp((prevXp) => prevXp + itemXP);
      })
      .then(() => {
        return postLoggedItem(scannedItemData.item_id, user.user_id);
      })
      .then(() => {
        setIsLoading(false);
        setIsRecycled(true);
        return;
      })
      .catch((err) => {});
  }

  useEffect(() => {
    fetchIsRecyclableByArea(prefix, scannedItemData.material_id).then((data) => {
      setIsRecyclable(data.is_recyclable);
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      // margin: 100,
      width: "100%",
    },
    icon: {
      width: 75,
      height: 75,
      objectFit: "contain",
      alignSelf: "center",
      marginBottom: 10
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
    title: {
      fontSize: fonts.titleLarge.fonts,
      marginBottom: 5,
      textAlign: "center",
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

  return (
    <Surface
      elevation={3}
      style={{
        // marginBottom: 20,
        padding: 20,
        // height: "50%",
        width: "100%",
        // margin: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
      }}
      // style={surface}
    >
      {isRecyclable ? (
        <View>
          <Image
            style={styles.icon}
            source={require("../../assets/recycling-bin.png")}
          />
          {!isRecycled ? (
            <Text style={styles.title}>You can recycle me!</Text>
          ) : (
            <Text style={styles.title}>Recycled!</Text>
          )}
          {!isRecycled ? (
            <StandardButton
              buttonText={`recycle for +${itemXP} XP`}
              tapFunction={() => {
                handleRecycle();
              }}
            />
          ) : (
            <View>
              <Text style={styles.title}>Congrats, you gained {itemXP} xp</Text>
              <View>
                <StandardButton
                  buttonText={"Return to Home"}
                  tapFunction={() => {
                    navigation.popToTop();
                    navigation.navigate("Main");
                  }}
                />
                <StandardButton
                  buttonText={"Scan Again"}
                  tapFunction={() => {
                    navigation.goBack();
                  }}
                />
              </View>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={require("../../assets/dustbin.png")}
          ></Image>
          <Text style={styles.titleText}>This item is not recyclable</Text>
          {isBinned ? (
            <Text>You binned {scannedItemData.item_name}</Text>
          ) : (
            <Button
              onPress={() => setIsBinned(true)}
              mode="contained-tonal"
            >
              Bin item: {scannedItemData.item_name}
            </Button>
          )}
        </View>
      )}
    </Surface>
  );
}
