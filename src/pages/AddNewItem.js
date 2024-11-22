import { StyleSheet, Text, View, Image } from "react-native"
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context"
import React, { useEffect, useState } from "react"
import { useRoute, useNavigation } from "@react-navigation/native"
import {
  Button,
  Surface,
  TextInput,
  List,
  Dialog,
  Portal,
} from "react-native-paper"
import BaseLayout from "../../src/components/BaseLayout.js"
import AddImage from "../components/AddImage.js"
import { ScrollView } from "react-native-gesture-handler"
import ItemAddedConfirmation from "../components/ItemAddedConfirmation.js"
import ItemAddedError from "../components/ItemAddedError.js"
import { fetchMaterials, postNewItem } from "../../utils/api.js"
import TakePicture from "../components/TakePicture.js"
import { createClient } from '@supabase/supabase-js';  
import {SUPABASE_URL, SUPABASE_SERVICE_KEY} from '@env'

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {headers: 
  {Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`}
});

export function AddNewItem() {
  const route = useRoute()
  const { barcodeValue } = route.params
  const [itemName, setItemName] = useState("")
  const [itemMaterial, setItemMaterial] = useState([])
  const [materials, setMaterials] = useState([])
  // const [materialsList, setMaterialsList] = useState([])
  const [image, setImage] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [confirmVisible, setConfirmVisible] = useState(false)
  const [errorVisible, setErrorVisible] = useState(false)
  const [takingPhoto, setTakingPhoto] = useState(false)
  const [path,setPath] = useState("")

  const toggleDropdown = () => setExpanded(!expanded)

  useEffect(() => {
    fetchMaterials()
      .then(({ data }) => {
        setMaterials(data.materials)

        const materials = data.materials.map((material) => {
          return material.material_name
        })
        setMaterialsList(materials)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSubmit = () => {
    
    const obj = {
      item_name: itemName,
      material_id: itemMaterial[1],
      barcode: barcodeValue.toString(),
      img_url: ""
    }
    
    try {
      console.log(path)
      const { data } = supabase
      .storage
      .from('Photos')
      .getPublicUrl(path)
      console.log(data.publicUrl)
      obj.img_url = data.publicUrl
    }
    catch (error) {
      alert("Error fetching url:", error.message);
    } 

    console.log(obj)

    postNewItem(obj)
      .then(({data}) => {
        setConfirmVisible(true)
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
        setErrorVisible(true)
      })
  }

  return takingPhoto? <TakePicture setTakingPhoto={setTakingPhoto} setPath={setPath} supabase={supabase}></TakePicture>: (
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
              style={styles.input}
              label="Item name"
              onChangeText={(text) => setItemName(text)}
              borderColor={"red"}
            />
            <View style={styles.input}>
              <Text>Packaging material:</Text>

              <List.Accordion
                title={itemMaterial ? itemMaterial[0] : "Select a material"}
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
                        onPress={() => {
                          setItemMaterial([
                            material.material_name,
                            material.material_id
                          ])
                          toggleDropdown()
                        }}
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
            <Button
              mode="contained-tonal"
              onPress={() => setTakingPhoto(true)}
            >
              Take a picture
            </Button>
            <View>
              <AddImage image={image} setImage={setImage}></AddImage>
            </View>
            <Button mode="contained-tonal" onPress={handleSubmit}>
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
