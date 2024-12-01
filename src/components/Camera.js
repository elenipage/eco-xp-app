import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  Vibration,
} from "react-native"
import { useEffect, useRef, useState } from "react"
import { CameraView, useCameraPermissions } from "expo-camera"
import { useNavigation, useIsFocused } from "@react-navigation/native"
import { fetchItemByBarcode } from "../../utils/api"
import ConfirmationDialogue from "./ConfirmationDialogue"


export default function Camera() {
  const cameraref = useRef()
  const [permission, requestPermission] = useCameraPermissions()
  const [cameraActive, setCameraActive] = useState()
  const [scannedBarcode, setScannedBarcode] = useState("")
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const lastScannedTimestampRef = useRef(0)
  const [scanned, setScanned] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [torch, setTorch] = useState(false)


  const setTorchFunc = () =>{ torch? setTorch(false):setTorch(true)}

  useEffect(() => {
    setTorch(false)
  }, [isFocused]);

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

  return isFocused ? (
    <View style={styles.container}>
      {scannedBarcode ? (
        <CameraView style={styles.camera} facing="back">
          <View style={styles.buttonContainer}></View>
        </CameraView>
      ) : (
        <CameraView
          style={styles.camera}
          facing="back"
          ref={cameraref}
          enableTorch={torch}
          barcodeScannerSettings={{ barcodeTypes: ["code128", "ean13"] }}
          onBarcodeScanned={({ data }) => {
            Vibration.vibrate()
            const timestamp = Date.now()

            if (scanned || timestamp - lastScannedTimestampRef.current < 1000) {
              return
            }
            lastScannedTimestampRef.current = timestamp
            setScannedBarcode(data)
            fetchItemByBarcode(data)
              .then((scannedItemData) => {
                navigation.navigate("Item Confirmation", {
                  scannedItemData: scannedItemData,
                })
                setScannedBarcode("")
              })
              .catch((error) => {
                if (error.response.status === 404) {
                  setShowDialog(true)
                }
              })
          }}
        >
          <Image
            style={styles.image}
            source={require("../../assets/barcode-overlay.png")}
          />
          <TouchableOpacity style={{backgroundColor:"#91E228",width:70,height:70,top:"87%",left:5,borderRadius:100, alignItems:"center",justifyContent:"center"}} onPress={()=>{
            setTorchFunc()
          }}><Text style={{fontSize:30}}>🔦</Text>
          </TouchableOpacity>
        </CameraView>
      )}

      <ConfirmationDialogue
        visible={showDialog}
        onClose={() => {
          setShowDialog(false)
          setScanned(false)
          setScannedBarcode("")
        }}
        onConfirm={() => {
          setShowDialog(false)
          setScanned(false)
          navigation.navigate("Add a New Item", {
            barcodeValue: scannedBarcode,
            setScannedBarcode: setScannedBarcode,
          })
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
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: "70%",
    height: "50%",
    objectFit: "contain",
    position: "absolute",
    left: "16%",
    top: "25%",
  },
})
