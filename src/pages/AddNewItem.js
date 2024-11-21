import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import {Button, Surface} from 'react-native-paper'
import BaseLayout from '../../src/components/BaseLayout.js';
import RNPickerSelect from 'react-native-picker-select'
import AddImage from '../components/AddImage.js';
import { fetchMaterials } from '../../axios.js';

export function AddNewItem() {

  const insets = useSafeAreaInsets()
  const barcode = 2345678901

  const[itemName, setItemName] = useState("")
  // const[itemBrand,setItemBrand] = useState("")
  const[itemMaterial, setItemMaterial] = useState("")
  const[materials, setMaterials] = useState([])
  const[materialsObjects, setMaterialsObjects] = useState([])
  const [image, setImage] = useState(null);



  useEffect(() => {
    fetchMaterials().then(({data}) => {

      setMaterialsObjects(data.materials)

      const materials = data.materials.map((material) => {
        return material.material_name
      })
      setMaterials(materials)
  
    })
    .catch((err)=> {
      console.log(err)
    })
  },[])
  
  const placeholder = {
    label: 'Packaging material',
    value: null,
  };
  const options = materials.map((material) => { return {label: material, value: material}})

  const handleSubmit = () => {

    const curr = materialsObjects.filter((material) => {
        material.material_name === itemMaterial
        return material.material_id
    })

    const obj = { 
      item_name: itemName,
      material_id: curr,
      barcode: barcode,
      image_url: image,
    }
    console.log(obj)
  };

  return (
    <SafeAreaProvider>
      <BaseLayout>
        <Surface elevation={3}
            style={{
              marginBottom:20,
              padding: 20,
              height: '96%',
            width: 300,
            margin: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius:20
          }}>
          <View style={styles.container}>
            <Text style={styles.title}>Add an item</Text>
            <Image source={require('../../assets/household.png')} style={styles.icon}></Image>
            <TextInput style={styles.input} placeholder="Item name" onChangeText={text => setItemName(text)}/>
            {/* <TextInput style={styles.input} placeholder="Item brand" onChangeText={text => setItemBrand(text)}/> */}
            <View style={styles.input}>
            <Text>Packaging material:</Text>
            <RNPickerSelect
            placeholder={placeholder}
            items={options}
            onValueChange={(value) => setItemMaterial(value)}
            value={itemMaterial}
            />
            </View>
            <Text editable={false} style={styles.input}>Barcode: {barcode}</Text>
            <View>
              <AddImage image={image} setImage={setImage}></AddImage> 
            </View>
            <Button mode="contained-tonal" onPress={handleSubmit}>Submit</Button>
          </View>
        </Surface>
      </BaseLayout>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: 250,
  },
  icon: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    borderRadius: 30,
  },
})

