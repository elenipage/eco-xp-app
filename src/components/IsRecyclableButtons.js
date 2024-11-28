import { StyleSheet, Image, Text, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Surface, Button, useTheme } from "react-native-paper"
import React, { useState, useRef, useEffect } from "react"
import { useUser } from "../context/user-context.js"
import { useXp } from "../context/Xp-context.js"
import {
  fetchIsRecyclableByArea,
  postLoggedItem,
  updateXpByID,
} from "../../utils/api.js"
import { Loader } from "../components/Loader.js"
import { useNavigation } from "@react-navigation/native"
import StandardButton from "./StandardButton.js"

export function IsRecyclableButtons(props) {
  const { fonts } = useTheme()
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
        setXp((prevXp) => prevXp + itemXP)
      })
      .then(() => {
        return postLoggedItem(scannedItemData.item_id, user.user_id)
      })
      .then(() => {
        setIsLoading(false)
        setIsRecycled(true)
        return
      })
      .catch((err) => {})
  }

  useEffect(() => {
    fetchIsRecyclableByArea(prefix, scannedItemData.material_id).then(
      (data) => {
        setIsRecyclable(data.is_recyclable)
      }
    )
  }, [])


  return (
    <Surface
      elevation={3}
      style={{
        marginBottom: 20,
        padding: 20,
        height: 300,
        width: 300,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
      }}
    >
      {isRecyclable ? (
        <View style={styles.container}>
          <Image
            style={styles.icon}
            source={require("../../assets/recycling-bin.png")}
          ></Image>
          {!isRecycled ? (
            <Text style={fonts.headlineMedium}>You can recycle me!</Text>
          ) : (
            <Text style={fonts.headlineMedium}>Recycled!</Text>
          )}
          {!isRecycled ? (
            <StandardButton buttonText={`Recycle ${scannedItemData.item_name} for ${itemXP} XP`}
            tapFunction={() => {
              handleRecycle()
            }} />
          ) : (
            <View style={{width:"100%"}}>
              <Text style={fonts.headlineSmall}>Congrats, you gained {itemXP} xp</Text>
              <View style={{}}>
                <StandardButton buttonText={"Return to Home"}
                tapFunction={() => {
                  navigation.popToTop()
                  navigation.navigate("Main")
                }} />
                <StandardButton buttonText={"Scan Again"}
                tapFunction={() => {
                  navigation.goBack()
                }} />
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
            <Button onPress={() => setIsBinned(true)} mode="contained-tonal">
              Bin item: {scannedItemData.item_name}
            </Button>
          )}
        </View>
      )}
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width:"100%",
    // backgroundColor:"red"
  },
  icon: {
    width: 100,
    height: 100,
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
})
