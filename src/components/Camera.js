import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { BackHandler } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { fetchItemByBarcode } from "../../utils/api";
import { Portal } from "react-native-paper";
import ConfirmationDialogue from "./ConfirmationDialogue";

export default function Camera() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraActive, setCameraActive] = useState();
  const [scannedBarcode, setScannedBarcode] = useState("");
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const lastScannedTimestampRef = useRef(0);
  const [scanned, setScanned] = useState(false);
  const [showDialog, setShowDialog] = useState(false);


  if (!permission) {
    return <View />;
  }


  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button
          onPress={requestPermission}
          title="grant permission"
        />
      </View>
    );
  }

  return isFocused? (
    <View style={styles.container}>
      {scannedBarcode? <CameraView
        style={styles.camera}
        facing="back"
      >
      <View style={styles.buttonContainer}></View>
      </CameraView> : <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{barcodeTypes:["code128","ean13"]}}
        onBarcodeScanned={({ data }) => {
          console.log(data)
          const timestamp = Date.now();

          if (scanned || timestamp - lastScannedTimestampRef.current < 1000) {
            return;
          }
          lastScannedTimestampRef.current = timestamp;
          setScannedBarcode(data);
          fetchItemByBarcode(data)
            .then((scannedItemData) => {
              navigation.navigate("Item Confirmation", { scannedItemData: scannedItemData })
              setScannedBarcode("");
            })
            .catch((error) => {
              if (error.response.status === 404) {
                setShowDialog(true);
                // navigation.navigate("Add a New Item", { barcodeValue: data });
              }
            });
        }}
      >
      <View style={styles.buttonContainer}></View>
      </CameraView>}
      
      <ConfirmationDialogue
      visible={showDialog}
      onClose={() => {
        setShowDialog(false);
        setScanned(false);
        setScannedBarcode("")
      }}
      onConfirm={() => {
        setShowDialog(false);
        setScanned(false);
        navigation.navigate("Add a New Item", { barcodeValue: scannedBarcode, setScannedBarcode: setScannedBarcode });
      }}
      />
    </View>
  ) : null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
