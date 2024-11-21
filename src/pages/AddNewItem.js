import { StyleSheet, Text, View, TextInput} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import React, {useState} from 'react';
import { useRoute } from "@react-navigation/native"
import {Button} from 'react-native-paper'
import BaseLayout from '../../src/components/BaseLayout.js';
import RNPickerSelect from 'react-native-picker-select'
import AddImage from '../components/AddImage.js';

export function AddNewItem() {

  const insets = useSafeAreaInsets()
  const route = useRoute()
  const { barcodeValue } = route.params

  const[itemName, setItemName] = useState("")
  const[itemBrand,setItemBrand] = useState("")
  const[itemMaterial, setItemMaterial] = useState("")
  const [image, setImage] = useState(null);


  const placeholder = {
    label: 'Select an option...',
    value: null,
  };

  const materials = ['glass','aluminium','paper','cardboard','plastic','tin can','aerosol']

  const options = materials.map((material) => { return {label: material, value: material}})

  const handleSubmit = () => {
    const obj = { 
      itemName: itemName,
      itemBrand: itemBrand,
      itemMaterial: itemMaterial,
      barcode: barcodeValue,
      image: image,
    }
    console.log(JSON.stringify(obj, null, 2));
  };

  return (
    <SafeAreaProvider>
      <BaseLayout>
        <View style={styles.container}>
          <Text style={styles.title}>Add an item</Text>
          <View>
            <TextInput style={styles.input} placeholder="Item name" onChangeText={text => setItemName(text)}/>
            <TextInput style={styles.input} placeholder="Item brand" onChangeText={text => setItemBrand(text)}/>            
            <View>
            <Text>Packaging material:</Text>
            <RNPickerSelect
            style={styles.input}
            placeholder={placeholder}
            items={options}
            onValueChange={(value) => setItemMaterial(value)}
            value={itemMaterial}
            />
            </View>
            <Text editable={false} style={styles.input}>{barcodeValue}</Text>
            <View>
              <AddImage image={image} setImage={setImage}></AddImage> 
            </View>
            <Button mode="contained-tonal" onPress={handleSubmit}>Submit</Button>
          </View>
        </View>
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
    width: 160,
  },
})