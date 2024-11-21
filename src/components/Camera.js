import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { StatusBar } from "expo-status-bar"
import { useRef, useState } from "react"
import { CameraView, useCameraPermissions } from "expo-camera"
import { useNavigation } from "@react-navigation/native"
import { fetchItemByBarcode } from "../../axios"

export default function Camera() {
  const [permission, requestPermission] = useCameraPermissions()
  const [cameraActive, setCameraActive] = useState()
  const [scannedBarcode, setScannedBarcode] = useState()
  const navigation = useNavigation()
  const lastScannedTimestampRef = useRef(0)
  const [scanned, setScanned] = useState(false)

  if (!permission) {
    return <View />
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        onBarcodeScanned={({ data }) => {
          const timestamp = Date.now()

          if (scanned || timestamp - lastScannedTimestampRef.current < 1000) {
            return
          }
          lastScannedTimestampRef.current = timestamp
          fetchItemByBarcode(data)
          .then((scannedItemData)=>{
            navigation.navigate("Item Confirmation", { scannedItemData: scannedItemData })            
          }).catch((error)=>{
            if(error.response.status === 404){
              navigation.navigate("Add a New Item", { barcodeValue: data })
            }
          })
        }}
      >
        <View style={styles.buttonContainer}></View>
      </CameraView>
    </View>
  )
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
})
