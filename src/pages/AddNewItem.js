import { StyleSheet, Text, View, Image, Keyboard } from "react-native"
import {
  SafeAreaProvider,
} from "react-native-safe-area-context"
import React, { useEffect, useState, useRef} from "react"
import { useRoute } from "@react-navigation/native"
import { Button, Surface, TextInput, List} from "react-native-paper"
import BaseLayout from "../../src/components/BaseLayout.js"
import AddImage from "../components/AddImage.js"
import { ScrollView } from "react-native-gesture-handler"
import ItemAddedConfirmation from "../components/ItemAddedConfirmation.js"
import ItemAddedError from "../components/ItemAddedError.js"
import { fetchMaterials, postNewItem } from "../../utils/api.js"
import TakePicture from "../components/TakePicture.js"
import { createClient } from '@supabase/supabase-js';  
import {SUPABASE_URL, SUPABASE_SERVICE_KEY} from '@env'


export function AddNewItem() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {headers: 
    {Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`}
  });
  const route = useRoute()
  const { barcodeValue, setScannedBarcode } = route.params
  const [itemName, setItemName] = useState("")
  const [itemMaterial, setItemMaterial] = useState([])
  const [materials, setMaterials] = useState([])
  const [expanded, setExpanded] = useState(false)
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [errorVisible, setErrorVisible] = useState(false)
  const [takingPhoto, setTakingPhoto] = useState(false)
  const [path,setPath] = useState("")
  const [photo, setPhoto] = useState(null);

  const textInputRef = useRef(null); 

  useEffect(() => {

    setScannedBarcode("")
    fetchMaterials()
      .then(({ data }) => {
        setMaterials(data.materials)
      })
      .catch((err) => {
      })

  }, [])

  const toggleDropdown = () => {
    if (textInputRef.current) {
      textInputRef.current.blur(); 
    }
    Keyboard.dismiss(); 
    setExpanded((prev) => !prev); 
  };

  const handleMaterialSelection = (material) => {
    setItemMaterial([material.material_name, material.material_id]);
    setExpanded(false); 
  };

  const handleSubmit = () => {
    
    try {

      const { data } = supabase
      .storage
      .from('Photos')
      .getPublicUrl(path)

      const obj = {
        item_name: itemName,
        material_id: itemMaterial[1],
        barcode: barcodeValue.toString(),
        img_url: data.publicUrl
      }

      postNewItem(obj)
      .then(({data}) => {
        console.log(data.item)
        setConfirmVisible(true)
      })
      .catch((error) => {
        setErrorVisible(true)
      })

    }
    catch (error) {
      alert("Error fetching url:", error.message);
    } 
    setPhoto(null)
    
  }

  const isFormValid = path && itemName && itemMaterial?.length > 0 && itemMaterial[0];

  return takingPhoto? <TakePicture photo={photo} setPhoto={setPhoto} setTakingPhoto={setTakingPhoto} setPath={setPath} supabase={supabase}></TakePicture>: (
    <SafeAreaProvider>
      <BaseLayout>
        <Surface
          elevation={3}
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Add an item</Text>
            <Image
              source={require("../../assets/household.png")}
              style={styles.icon}
            ></Image>
            <TextInput
            ref={textInputRef}
            style={styles.input}
            label="Item name"
            value={itemName}
            onChangeText={(text) => setItemName(text)}
            borderColor={"red"}
            />  
            <View style={styles.input}>
              <List.Accordion
                title={itemMaterial[0] ? itemMaterial[0] : "Select a material"}
                left={(props) => <List.Icon {...props} icon="recycle" />}
                expanded={expanded}
                onPress={toggleDropdown}
              >
                <ScrollView
                  height={200}
                  width={"100%"}
                  style={{ backgroundColor: "white" }}
                >
                  {materials.map((material) => {
                    return (
                      <List.Item
                        onPress={() => handleMaterialSelection(material)}
                        title={material.material_name}
                      />
                    )
                  })}
                </ScrollView>
              </List.Accordion>
            </View>

            <Text editable={false} style={styles.input}>
              Barcode: {barcodeValue}
            </Text>
            {photo? <Image style={styles.icon} source={{uri: photo.uri}}></Image> : <View><Button mode="contained-tonal" onPress={() => setTakingPhoto(true)}>
              Take a picture
            </Button>
              <AddImage supabase={supabase} setPath={setPath} photo={photo} setPhoto={setPhoto} />
            </View> }
            <Button disabled={!isFormValid} mode="contained-tonal" onPress={handleSubmit}>
              Submit
            </Button>
            <ItemAddedConfirmation visible={confirmVisible} setConfirmVisible={setConfirmVisible}/>
            <ItemAddedError errorVisible={errorVisible} setErrorVisible={setErrorVisible}/>
          </View>
        </Surface>
      </BaseLayout>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    width: "80%",
  },
  icon: {
    width: 100,
    height: 100,
    justifyContent: "center",
    margin: 0,
    padding: 0,
    borderRadius: 30,
  },
})
