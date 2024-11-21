import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Button, Surface, TextInput } from "react-native-paper";
import BaseLayout from "../../src/components/BaseLayout.js";
import RNPickerSelect from "react-native-picker-select";
import AddImage from "../components/AddImage.js";
import { fetchMaterials, postNewItem } from "../../axios.js";

export function AddNewItem() {
  const insets = useSafeAreaInsets();
  const route = useRoute();
  const { barcodeValue } = route.params;

  const [itemName, setItemName] = useState("");
  // const[itemBrand,setItemBrand] = useState("")
  const [itemMaterial, setItemMaterial] = useState("");
  const [materials, setMaterials] = useState([]);
  const [materialsList, setMaterialsList] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchMaterials()
      .then(({ data }) => {
        setMaterials(data.materials);

        const materials = data.materials.map((material) => {
          return material.material_name;
        });
        setMaterialsList(materials);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const placeholder = {
    label: "Packaging material",
    value: null,
  };
  const options = materialsList.map((material) => {
    return { label: material, value: material };
  });

  const handleSubmit = () => {
    const filtered = materials.filter((material) => {
      return material.material_name === itemMaterial;
    });

    const obj = {
      item_name: itemName,
      material_id: filtered[0].material_id,
      barcode: barcodeValue.toString(),
      img_url: "https://ecom-su-static-prod.wtrecom.com/images/products/11/LN_474469_BP_11.jpg",
    };

    console.log(obj);

    postNewItem(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaProvider>
      <BaseLayout>
        <Surface
          elevation={3}
          style={{
            // padding: 20,
            height: "100%",
            width: "100%",
            // margin: 10,
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
            />
            <View style={styles.input}>
              <Text>Packaging material:</Text>
              <RNPickerSelect
                placeholder={placeholder}
                items={options}
                onValueChange={(value) => setItemMaterial(value)}
                value={itemMaterial}
              />
            </View>
            <Text
              editable={false}
              style={styles.input}
            >
              Barcode: {barcodeValue}
            </Text>
            <Button
              mode="contained-tonal"
              tapFunction={() => navigation.navigate("Take a Picture")}
            >
              Take a picture
            </Button>
            <View>
              <AddImage
                image={image}
                setImage={setImage}
              ></AddImage>
            </View>
            <Button
              mode="contained-tonal"
              onPress={handleSubmit}
            >
              Submit
            </Button>
          </View>
        </Surface>
      </BaseLayout>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
    width: 250,
  },
  icon: {
    width: 100,
    height: 100,
    justifyContent: "center",
    margin: 0,
    padding: 0,
    borderRadius: 30,
  },
});
