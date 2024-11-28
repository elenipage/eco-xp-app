import { StyleSheet, Text, View, Image, Keyboard } from "react-native"
import {
  SafeAreaProvider,
} from "react-native-safe-area-context"
import React, { useEffect, useState, useRef } from "react"
import { useRoute } from "@react-navigation/native"
import { Button, Surface, TextInput, List, useTheme} from "react-native-paper"
import BaseLayout from "../../src/components/BaseLayout.js"
import AddImage from "../components/AddImage.js"
import { ScrollView } from "react-native-gesture-handler"
import ItemAddedConfirmation from "../components/ItemAddedConfirmation.js"
import ItemAddedError from "../components/ItemAddedError.js"
import { fetchMaterials, postNewItem } from "../../utils/api.js"
import TakePicture from "../components/TakePicture.js"
import { createClient } from '@supabase/supabase-js';  
import {SUPABASE_URL, SUPABASE_SERVICE_KEY} from '@env'
import { useXp } from "../context/Xp-context.js"


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
  const [isValid, setIsValid] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const { xp, setXp } = useXp()

  const { fonts, colors } = useTheme()

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


  useEffect(()=> {
    if(itemName.length > 0 && path.length > 0 && typeof itemMaterial[1] === 'number'){
      setIsValid(true)
    }
    if(path.length > 0){
      setDisabled(false)
    }
  },[itemName, itemMaterial, path])

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

      console.log(obj)

      postNewItem(obj)
      .then(({data}) => {
        setXp(xp + 10)
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

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      width: "100%",
      backgroundColor: colors.background
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      backgroundColor: colors.background,
      borderColor: "#ccc",
      padding: 5,
      marginBottom: 10,
      width: "80%",
    },
    icon: {
      borderWidth: 2,
      width: 100,
      height: 100,
      justifyContent: "center",
      marginBottom: 20,
      padding: 0,
      borderRadius: 30,
    }
  })

  return takingPhoto? <TakePicture photo={photo} setPhoto={setPhoto} setTakingPhoto={setTakingPhoto} setPath={setPath} supabase={supabase} /> : (
    <SafeAreaProvider>
      <BaseLayout>
          <View style={styles.container}>
            <Text style={styles.title}>Add an item</Text>
            {photo? <Image style={styles.icon} source={{uri: photo.uri}}></Image> : <Image
              source={require("../../assets/household.png")}
              style={styles.icon}
            />}
            <TextInput
              ref={textInputRef}
              style={styles.input}
              label="Item name"
              value={itemName}
              onChangeText={(text) => setItemName(text)}
            />  
            <View style={styles.input}>
              <List.Accordion
                style={{backgroundColor: colors.background}}
                title={itemMaterial[0] ? itemMaterial[0] : "Select a material"}
                left={({key, ...props}) => <List.Icon {...props} icon="recycle" />}
                expanded={expanded}
                onPress={toggleDropdown}
              >
                <ScrollView
                  height={200}
                  width={"100%"}
                  style={{backgroundColor: colors.background}}
                >
                  {materials.map((material) => {
                    return (
                      <List.Item
                        onPress={() => handleMaterialSelection(material)}
                        title={material.material_name}
                        key={material.material_id}
                      />
                    )
                  })}
                </ScrollView>
              </List.Accordion>
            </View>
            <Text editable={false} style={{
            borderWidth: 1,
            backgroundColor: colors.background,
            borderColor: "#ccc",
            padding: 20,
            textAlign: "center",
            marginBottom: 18,
            width: "80%",
            height: 60,
            }}>
              Barcode: {barcodeValue}
            </Text>
            <Surface
              elevation={2}
              style={{
                height: 190,
                width: 260,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
            <View>
              <Button style={{ marginBottom: 10 }} disabled={!disabled} mode="contained-tonal" onPress={() => setTakingPhoto(true)}>
              Take a picture
              </Button>
              <AddImage supabase={supabase} path={path} setPath={setPath} disabled={disabled} photo={photo} setPhoto={setPhoto}/>
            </View> 
            <Button disabled={!isValid} mode="contained-tonal" onPress={handleSubmit}>
              Submit
            </Button>
            
            <ItemAddedConfirmation visible={confirmVisible} setConfirmVisible={setConfirmVisible}/>
            <ItemAddedError errorVisible={errorVisible} setErrorVisible={setErrorVisible}/>
          </Surface>
        </View>
      </BaseLayout>
    </SafeAreaProvider>
  )
}

